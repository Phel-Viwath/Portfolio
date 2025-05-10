package styles

import csstype.*
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLElement
import react.useEffect
import react.useRef
import react.useState
import util.Constant.navSection
import util.toOpacity

fun PropertiesBuilder.fadeInAnimation(
    duration: AnimationDuration = 1.s,
    delay: AnimationDelay = 0.ms,
    isVisible: Boolean = false
) {
    if (!isVisible) {
        opacity = 0.pct.toOpacity()
    } else {
        opacity = 100.pct.toOpacity()
        transition = "opacity $duration ease-out $delay".unsafeCast<Transition>()
    }
}

fun PropertiesBuilder.slideUpAnimation(
    duration: AnimationDuration = 1.s,
    delay: AnimationDelay = 0.ms,
    isVisible: Boolean = false
) {
    if (!isVisible) {
        opacity = 0.pct.toOpacity()
        transform = "translateY(30px)".unsafeCast<Transform>()
    } else {
        opacity = 100.pct.toOpacity()
        transform = "translateY(0)".unsafeCast<Transform>()
        transition = "opacity $duration ease-out $delay, transform $duration ease-out $delay".unsafeCast<Transition>()
    }
}

fun PropertiesBuilder.slideInLeftAnimation(
    duration: AnimationDuration = 1.s,
    delay: AnimationDelay = 0.ms,
    isVisible: Boolean = false
) {
    if (!isVisible) {
        opacity = 0.pct.toOpacity()
        transform = "translateX(-30px)".unsafeCast<Transform>()
    } else {
        opacity = 100.pct.toOpacity()
        transform = "translateX(0)".unsafeCast<Transform>()
        transition = "opacity $duration ease-out $delay, transform $duration ease-out $delay".unsafeCast<Transition>()
    }
}

fun PropertiesBuilder.slideInRightAnimation(
    duration: AnimationDuration = 1.s,
    delay: AnimationDelay = 0.ms,
    isVisible: Boolean = false
) {
    if (!isVisible) {
        opacity = 0.pct.toOpacity()
        transform = "translateX(30px)".unsafeCast<Transform>()
    } else {
        opacity = 100.pct.toOpacity()
        transform = "translateX(0)".unsafeCast<Transform>()
        transition = "opacity $duration ease-out $delay, transform $duration ease-out $delay".unsafeCast<Transition>()
    }
}

// Hook to detect when element is in viewport
fun useInViewport(viewportOffset: Double = 0.33): Pair<dynamic, Boolean> {
    val ref = useRef<HTMLElement>(null)
    val (isVisible, setIsVisible) = useState(false)

    useEffect{
        val element = ref.current ?: return@useEffect

        val checkVisibility = {
            // Use the viewportOffset parameter to determine how far into the viewport
            // the element needs to be before triggering the animation
            val rect = element.getBoundingClientRect()
            val windowHeight = window.innerHeight
            val visibleThreshold = windowHeight * viewportOffset

            val isInView = rect.top <= windowHeight - visibleThreshold &&
                    rect.bottom >= visibleThreshold

            if (isInView && !isVisible) {
                setIsVisible(true)
            }
        }

        // Check initially
        checkVisibility()

        // Check on scroll
        val scrollListener = { _: dynamic -> checkVisibility() }
        window.addEventListener("scroll", scrollListener)

        // Cleanup function - Return directly without lambda
        { window.removeEventListener("scroll", scrollListener) }
    }

    return Pair(ref, isVisible)
}

fun initScrollAnimations() {
    window.addEventListener("scroll", { handleScroll() })
    handleScroll() // Initial check
}

private fun isInViewportCenter(element: HTMLElement): Boolean {
    val rect = element.getBoundingClientRect()
    val windowHeight = window.innerHeight
    val centerThreshold = windowHeight / 3
    return rect.top <= windowHeight - centerThreshold && rect.bottom >= centerThreshold
}

private fun animateElement(
    element: HTMLElement?,
    initialOpacity: String = "0",
    initialTransform: String? = null,
    transition: String = "opacity 1s ease-out, transform 1s ease-out",
    delay: Int = 10,
    index: Int = 0
) {
    if (element != null && element.style.opacity != "1") {
        element.style.opacity = initialOpacity
        initialTransform?.let { element.style.transform = it }
        element.style.transition = transition

        window.setTimeout({
            element.style.opacity = "1"
            if (initialTransform != null) {
                element.style.transform = "translateX(0)"
                    .takeIf { "X" in initialTransform }
                    ?: "translateY(0)"
            }
        }, delay + (index * 100))
    }
}

private fun handleSectionAnimation(sectionId: String) {
    val section = document.getElementById(sectionId) as? HTMLElement ?: return

    if (!isInViewportCenter(section)) return

    when (sectionId) {
        "home" -> {
            animateElement(document.getElementById("home_text") as? HTMLElement, initialTransform = "translateX(-30px)")
            animateElement(document.getElementById("home_profile") as? HTMLElement, initialTransform = "translateX(30px)")
        }
        "about" -> {
            animateElement(
                document.getElementById("about_title") as? HTMLElement,
                initialTransform = "translateX(-30px)"
            )
            animateElement(
                document.getElementById("about-paragraph-first") as? HTMLElement,
                initialTransform = "translateX(30px)",
                delay = 100,
                index = 1
            )
            animateElement(
                document.getElementById("about-paragraph-second") as? HTMLElement,
                initialTransform = "translateX(30px)",
                delay = 100,
                index = 1
            )
        }
        "skills", "works" -> {
            animateElement(section)
            val items = section.querySelectorAll("div > div")
            for (i in 0 until items.length) {
                animateElement(items.item(i) as? HTMLElement, initialTransform = "translateY(30px)", index = i)
            }
        }
        "contact" -> {
            animateElement(section)
            animateElement(section.querySelector("div > div:first-child") as? HTMLElement, initialTransform = "translateX(-30px)")
            animateElement(section.querySelector("div > div:last-child") as? HTMLElement, initialTransform = "translateX(30px)")
        }
    }
}


private fun handleScroll() {
    navSection.forEach(::handleSectionAnimation)
}