package pages.home

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
import util.Constant.CONTACT_PLATFORM
import util.Constant.MY_SKILL
import web.cssom.*

class HomePage{

    private val myWork = MyWorksRepository()

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
                skillSection(skills = MY_SKILL)

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
                    contactPlatform = CONTACT_PLATFORM
                )
            }
        }
        // Footer
        footer(profileName)
    }

}