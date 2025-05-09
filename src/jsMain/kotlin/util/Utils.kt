package util

import csstype.*
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import react.dom.client.createRoot as reactCreateRoot
import web.dom.Element as WebElement

fun createRoot(container: Element) = reactCreateRoot(container.unsafeCast<WebElement>())

/**
 * Adds fade-in animation to an element
 */
fun PropertiesBuilder.fadeInAnimation(
    duration: AnimationDuration = 1.s,
    delay: AnimationDelay = 0.ms
) {
    opacity = 0.pct.unsafeCast<Opacity>()
    animation = "fadeIn $duration ease-out $delay forwards".unsafeCast<Animation>()
}

/**
 * Adds slide-up animation to an element
 */
fun PropertiesBuilder.slideUpAnimation(
    duration: AnimationDuration = 1.s,
    delay: AnimationDelay = 0.ms
) {
    opacity = 0.pct.unsafeCast<Opacity>()
    transform = "translateY(30px)".unsafeCast<Transform>()
    animation = "slideUp $duration ease-out $delay forwards".unsafeCast<Animation>()
}

/**
 * Adds slide-in-left animation to an element
 */
fun PropertiesBuilder.slideInLeftAnimation(
    duration: AnimationDuration = 1.s,
    delay: AnimationDelay = 0.ms
) {
    opacity = 0.pct.unsafeCast<Opacity>()
    transform = "translateX(-30px)".unsafeCast<Transform>()
    animation = "slideInLeft $duration ease-out $delay forwards".unsafeCast<Animation>()
}

/**
 * Adds slide-in-right animation to an element
 */
fun PropertiesBuilder.slideInRightAnimation(
    duration: AnimationDuration = 1.s,
    delay: AnimationDelay = 0.ms
) {
    opacity = 0.pct.unsafeCast<Opacity>()
    transform = "translateX(30px)".unsafeCast<Transform>()
    animation = "slideInRight $duration ease-out $delay forwards".unsafeCast<Animation>()
}

/**
 * Initialize animations - this is kept for compatibility with the App.kt file
 */
fun initializeAnimations() {
    // No longer needed as we're using CSS animations directly
}

/**
 * Initialize scroll animations - detects elements in viewport and applies animations
 */
fun initScrollAnimations() {
    // Call the existing initialization function for backward compatibility
    initializeAnimations()

    // Function to check if an element is in the viewport center
    fun isInViewportCenter(element: HTMLElement): Boolean {
        val rect = element.getBoundingClientRect()
        val windowHeight = window.innerHeight
        // Check if element is in the center area of the viewport (with some margin)
        val centerThreshold = windowHeight / 3
        return rect.top <= windowHeight - centerThreshold && rect.bottom >= centerThreshold
    }

    // Function to handle scroll events and apply animations
    fun handleScroll() {
        // Get all sections
        val sections = listOf("home", "about", "skills", "works", "contact")

        // Check each section for animation
        sections.forEach { sectionId ->
            val section = document.getElementById(sectionId)
            if (section != null && section is HTMLElement) {
                // If section is in viewport center, animate it
                if (isInViewportCenter(section)) {
                    // Apply different animations based on section
                    when (sectionId) {
                        "home" -> {
                            // Home section animations
                            val homeText = document.getElementById("home_text")
                            if (homeText is HTMLElement && homeText.style.opacity != "1") {
                                homeText.style.opacity = "0"
                                homeText.style.transform = "translateX(-30px)"
                                homeText.style.transition = "opacity 0.8s ease, transform 0.8s ease"
                                // Trigger animation
                                window.setTimeout({
                                    homeText.style.opacity = "1"
                                    homeText.style.transform = "translateX(0)"
                                }, 10)
                            }

                            val homeProfile = document.getElementById("home_profile")
                            if (homeProfile is HTMLElement && homeProfile.style.opacity != "1") {
                                homeProfile.style.opacity = "0"
                                homeProfile.style.transform = "translateX(30px)"
                                homeProfile.style.transition = "opacity 0.8s ease, transform 0.8s ease"
                                // Trigger animation
                                window.setTimeout({
                                    homeProfile.style.opacity = "1"
                                    homeProfile.style.transform = "translateX(0)"
                                }, 10)
                            }
                        }
                        "about" -> {
                            // About section animations - fade in the section
                            if (section.style.opacity != "1") {
                                section.style.opacity = "0"
                                section.style.transition = "opacity 0.8s ease"
                                window.setTimeout({
                                    section.style.opacity = "1"
                                }, 10)
                            }

                            // Animate paragraphs with slide up
                            val paragraphs = section.getElementsByTagName("p")
                            for (i in 0 until paragraphs.length) {
                                val paragraph = paragraphs.item(i)
                                if (paragraph is HTMLElement && paragraph.style.opacity != "1") {
                                    paragraph.style.opacity = "0"
                                    paragraph.style.transform = "translateY(30px)"
                                    paragraph.style.transition = "opacity 0.8s ease, transform 0.8s ease"
                                    // Trigger animation with a delay based on index
                                    window.setTimeout({
                                        paragraph.style.opacity = "1"
                                        paragraph.style.transform = "translateY(0)"
                                    }, 10 + (i * 100))
                                }
                            }
                        }
                        "skills" -> {
                            // Skills section animations - fade in the section
                            if (section.style.opacity != "1") {
                                section.style.opacity = "0"
                                section.style.transition = "opacity 0.8s ease"
                                window.setTimeout({
                                    section.style.opacity = "1"
                                }, 10)
                            }

                            // Animate skill items with slide up
                            val skillItems = section.querySelectorAll("div > div")
                            for (i in 0 until skillItems.length) {
                                val item = skillItems.item(i)
                                if (item is HTMLElement && item.style.opacity != "1") {
                                    item.style.opacity = "0"
                                    item.style.transform = "translateY(30px)"
                                    item.style.transition = "opacity 0.8s ease, transform 0.8s ease"
                                    // Trigger animation with a delay based on index
                                    window.setTimeout({
                                        item.style.opacity = "1"
                                        item.style.transform = "translateY(0)"
                                    }, 10 + (i * 100))
                                }
                            }
                        }
                        "works" -> {
                            // Works section animations - fade in the section
                            if (section.style.opacity != "1") {
                                section.style.opacity = "0"
                                section.style.transition = "opacity 0.8s ease"
                                window.setTimeout({
                                    section.style.opacity = "1"
                                }, 10)
                            }

                            // Animate work items with slide up
                            val workItems = section.querySelectorAll("div > div")
                            for (i in 0 until workItems.length) {
                                val item = workItems.item(i)
                                if (item is HTMLElement && item.style.opacity != "1") {
                                    item.style.opacity = "0"
                                    item.style.transform = "translateY(30px)"
                                    item.style.transition = "opacity 0.8s ease, transform 0.8s ease"
                                    // Trigger animation with a delay based on index
                                    window.setTimeout({
                                        item.style.opacity = "1"
                                        item.style.transform = "translateY(0)"
                                    }, 10 + (i * 100))
                                }
                            }
                        }
                        "contact" -> {
                            // Contact section animations - fade in the section
                            if (section.style.opacity != "1") {
                                section.style.opacity = "0"
                                section.style.transition = "opacity 0.8s ease"
                                window.setTimeout({
                                    section.style.opacity = "1"
                                }, 10)
                            }

                            // Animate contact info with slide in left
                            val contactInfo = section.querySelector("div > div:first-child")
                            if (contactInfo is HTMLElement && contactInfo.style.opacity != "1") {
                                contactInfo.style.opacity = "0"
                                contactInfo.style.transform = "translateX(-30px)"
                                contactInfo.style.transition = "opacity 0.8s ease, transform 0.8s ease"
                                window.setTimeout({
                                    contactInfo.style.opacity = "1"
                                    contactInfo.style.transform = "translateX(0)"
                                }, 10)
                            }

                            // Animate contact form with slide in right
                            val contactForm = section.querySelector("div > div:last-child")
                            if (contactForm is HTMLElement && contactForm.style.opacity != "1") {
                                contactForm.style.opacity = "0"
                                contactForm.style.transform = "translateX(30px)"
                                contactForm.style.transition = "opacity 0.8s ease, transform 0.8s ease"
                                window.setTimeout({
                                    contactForm.style.opacity = "1"
                                    contactForm.style.transform = "translateX(0)"
                                }, 10)
                            }
                        }
                    }
                }
            }
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", { handleScroll() })

    // Initial check for elements in viewport
    handleScroll()
}
