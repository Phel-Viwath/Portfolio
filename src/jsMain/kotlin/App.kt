import component.*
import csstype.Auto
import csstype.Margin
import csstype.Padding
import csstype.px
import emotion.react.css
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.events.Event
import react.*
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.main
import styled.injectGlobal
import styles.Typography

// Global styles
fun globalStyles() {
    injectGlobal("""
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: ${Typography.BASE_FONT_FAMILY};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: #f8fafc;
        }

        html, body {
            height: 100%;
            width: 100%;
            scroll-behavior: smooth;
        }

        #root {
            height: 100%;
            width: 100%;
        }
    """.trimIndent())
}

// Global styles are kept here

val App = FC<Props> {
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
                rect.top <= 100 && rect.bottom >= 100
            } ?: "home"

            setActiveSection(currentSection)
        }

        window.addEventListener("scroll", handleScroll)

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
            +AboutSection.create {}

            // Skills section
            skillSection(
                mapOf(
                    "UI/UX Design" to 90f,
                    "HTML & CSS" to 95f,
                    "JavaScript" to 85f,
                    "React" to 80f,
                    "Figma" to 85f,
                    "Adobe XD" to 80f
                )
            )

            // Works section
            +WorksSection.create {}

            // Contact section
            contactSection(
                email = "phelviwath@gmail.com",
                phone = "+855 889 043 903",
                address = "Chantrea, Svay Rieng, Cambodia"
            )
        }

        // Footer
        footer(profileName)
    }
}
