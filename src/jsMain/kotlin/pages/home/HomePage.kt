package pages.home

import component.PathD
import component.SocialUrl
import emotion.react.css
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.events.Event
import pages.home.component.*
import react.FC
import react.Props
import react.dom.html.ReactHTML
import react.internal.buildCleanupCallback
import react.router.useNavigate
import react.useEffect
import react.useState
import repository.MyWorksRepository
import util.Constant
import web.cssom.*
import kotlin.Float

class HomePage{

    private val myWork = MyWorksRepository()

    private val mySkill: Map<String, Float> = mapOf(
        "Kotlin" to 90f,
        "Java" to 60f,
        "MySQL" to 90f,
        "MongoDB" to 50f,
        "Spring Boot" to 85f,
        "Android" to 85f,
        "Android Studio" to 90f,
        "Intellij Idea" to 90f
    )

    private val contactPlatform: Map<SocialUrl, PathD> = mapOf(
        "https://github.com/Phel-Viwath" to Constant.GITHUB_ICON,
        "https://www.linkedin.com/in/phel-viwath-a0707b281/" to Constant.LINKEDIN_ICON,
        "https://t.me/phel_viwath" to Constant.TELEGRAM_ICON
    )

    fun homePage() = FC<Props> {
        val navigate = useNavigate()
        // State for tracking active section
        val (activeSection, setActiveSection) = useState("home")
        val profileName = "Phel Viwath"

        // Effect to handle scroll and update active section
        useEffect {
            val handleScroll: (Event) -> Unit = {
                val sections = Constant.navSection

                // Find the section that is currently in view
                val currentSection = sections.find { sectionId ->
                    val element = document.getElementById(sectionId) ?: return@find false
                    val rect = element.getBoundingClientRect()
                    rect.top <= 120 && rect.bottom >= 120
                } ?: "home"

                setActiveSection(currentSection)
            }

            window.addEventListener("scroll", handleScroll)

            // Clean up event listener
            buildCleanupCallback {
                window.removeEventListener("scroll", handleScroll)
            }
        }

//        // Apply global styles
//        globalStyles()

        // Container
        ReactHTML.div {
            css {
                maxWidth = 1200.px
                margin = "0px auto".unsafeCast<Margin>()
                padding = Padding(0.px, 20.px)
                minHeight = "100vh".unsafeCast<MinHeight>()
                transition = "all 0.3s ease".unsafeCast<Transition>()
            }

            // Header
            header(
                activeSection = activeSection,
                profileName = profileName
            )

            // Main content
            ReactHTML.main {
                // Hero section
                heroSection(profileName)
                // About section
                aboutSection()

                // Skills section
                skillSection(skills = mySkill)

                // Works section
                workSection(myWorks = myWork.getMyWorks()) { workId ->
                    // route to WorkDetail
                    navigate("/work/$workId")
                }

                // Contact section
                contactSection(
                    email = "phelviwath@gmail.com",
                    phone = "+855 889 043 903",
                    address = "Chantrea, Svay Rieng, Cambodia",
                    contactPlatform = contactPlatform
                )
            }
        }
        // Footer
        footer(profileName)
    }

}