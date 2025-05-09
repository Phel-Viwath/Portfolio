import component.*
import csstype.Auto
import csstype.Margin
import csstype.Padding
import csstype.px
import emotion.react.css
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.events.Event
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.main
import react.useEffect
import react.useState
import styles.globalStyles
import util.initializeAnimations


// Global styles are kept here
private val mySkill: Map<String, Float> = mapOf(
    "UI/UX Design" to 90f,
    "HTML & CSS" to 95f,
    "JavaScript" to 85f,
    "React" to 80f,
    "Figma" to 85f,
    "Adobe XD" to 80f
)

private val contactPlatform: Map<SocialUrl, PathD> = mapOf(
    "https://github.com/Phel-Viwath" to "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    "https://www.linkedin.com/in/phel-viwath-a0707b281/" to "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
)

// Global styles are kept here

fun app() = FC<Props> {
    // State for tracking active section
    val (activeSection, setActiveSection) = useState("home")
    val profileName = "Phel Viwath"

    // Effect to handle scroll and update active section
    useEffect {
        val handleScroll: (Event) -> Unit = {
            val sections = listOf("home", "about", "skills", "works", "contact")

            // Find the section that is currently in view
            val currentSection = sections.find { sectionId ->
                val element = document.getElementById(sectionId) ?: return@find false
                val rect = element.getBoundingClientRect()
                rect.top <= 120 && rect.bottom >= 120
            } ?: "home"

            setActiveSection(currentSection)
        }

        window.addEventListener("scroll", handleScroll)

        // Initialize scroll animations
        initializeAnimations()

        // Clean up event listener
        cleanup {
            window.removeEventListener("scroll", handleScroll)
        }
    }

    // Apply global styles
    globalStyles()

    // Container
    div {
        css {
            maxWidth = 1200.px
            margin = Margin(0.px, Auto.auto)
            padding = Padding(0.px, 20.px)
        }

        // Header
        header(
            activeSection = activeSection,
            profileName = profileName
        )

        // Main content
        main {
            // Hero section
            heroSection(profileName)
            // About section
            aboutSection()

            // Skills section
            skillSection(skills = mySkill)

            // Works section
            workSection()

            // Contact section
            contactSection(
                email = "phelviwath@gmail.com",
                phone = "+855 889 043 903",
                address = "Chantrea, Svay Rieng, Cambodia",
                contactPlatform = contactPlatform
            )
        }

        // Footer
        footer(profileName)
    }
}
