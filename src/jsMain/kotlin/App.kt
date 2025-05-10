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
import util.Constant.GITHUB_ICON
import util.Constant.LINKEDIN_ICON
import util.Constant.TELEGRAM_ICON


// Global styles are kept here
private val mySkill: Map<String, Float> = mapOf(
    "Kotlin" to 90f,
    "Java" to 60f,
    "MySQL" to 90f,
    "MongoDB" to 50f,
    "Spring Boot" to 85f,
    "Android" to 85f,
    "Android Studio" to 85f,
    "Intellij Idea" to 80f
)

private val myWork: List<MyWork> = listOf(
    MyWork("https://via.placeholder.com/350x200", "SRU Library Management", "Back-end development"),
    MyWork("https://via.placeholder.com/350x200", "SRU Library Management", "Android development"),
)

private val contactPlatform: Map<SocialUrl, PathD> = mapOf(
    "https://github.com/Phel-Viwath" to GITHUB_ICON,
    "https://www.linkedin.com/in/phel-viwath-a0707b281/" to LINKEDIN_ICON,
    "https://t.me/phel_viwath" to TELEGRAM_ICON
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
            workSection(myWorks = myWork)

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
