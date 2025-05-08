package util

import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import react.FC
import react.Props
import react.PropsWithChildren
import react.dom.html.HTMLAttributes
import react.useEffect
import react.useRef
import kotlin.js.json

// External declarations for Intersection Observer API
external class IntersectionObserver(
    callback: (Array<IntersectionObserverEntry>, IntersectionObserver) -> Unit,
    options: dynamic = definedExternally
) {
    fun observe(element: Element)
    fun unobserve(element: Element)
    fun disconnect()
}

external class IntersectionObserverEntry {
    val isIntersecting: Boolean
    val target: Element
}

/**
 * Function to initialize scroll animations for section elements
 */
fun initScrollAnimations(
    animationClass: String = "animate",
    threshold: Double = 0.1,
    rootMargin: String = "0px"
) {
    // Wait for the DOM to be fully loaded
    window.onload = {
        // Get all section elements by their IDs
        val sectionIds = listOf("home", "about", "skills", "works", "contact")
        val sections = sectionIds.mapNotNull { document.getElementById(it) }

        // Create Intersection Observer
        val options = json(
            "threshold" to threshold,
            "rootMargin" to rootMargin
        )

        val observer = IntersectionObserver({ entries, observer ->
            entries.forEach { entry ->
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass)
                    observer.unobserve(entry.target)
                }
            }
        }, options)

        // Observe all section elements
        sections.forEach { section ->
            observer.observe(section)
        }
    }
}

// CSS animations to be added to the global styles
val scrollAnimationStyles = """
    .animate {
        animation: fadeInUp 0.6s ease forwards;
        opacity: 0;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Animation variants */
    #home.animate {
        animation-name: fadeInUp;
        animation-duration: 0.8s;
    }

    #about.animate {
        animation-name: fadeInLeft;
        animation-duration: 0.7s;
    }

    #skills.animate {
        animation-name: fadeInRight;
        animation-duration: 0.7s;
    }

    #works.animate {
        animation-name: zoomIn;
        animation-duration: 0.8s;
    }

    #contact.animate {
        animation-name: fadeInUp;
        animation-duration: 0.7s;
    }

    /* Animation delays */
    .animate-delay-100 {
        animation-delay: 100ms;
    }

    .animate-delay-200 {
        animation-delay: 200ms;
    }

    .animate-delay-300 {
        animation-delay: 300ms;
    }

    .animate-delay-400 {
        animation-delay: 400ms;
    }

    .animate-delay-500 {
        animation-delay: 500ms;
    }
"""
