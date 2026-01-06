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
import repository.EducationRepository
import repository.MyWorksRepository
import util.Constant
import util.Constant.CONTACT_PLATFORM
import util.Constant.MY_SKILL
import web.cssom.*

class HomePage{

    private val profileName = "Phel Viwath"
    private val myWork = MyWorksRepository()
    private val education = EducationRepository()

    fun homePage() = FC<Props> {
        val navigate = useNavigate()
        // State for tracking active-section
        val (activeSection, setActiveSection) = useState("home")
        val (isMobileView, setIsMobileView) = useState(window.innerWidth <= 768)

        val eventTypeScroll = "scroll"
        val eventTypeResize = "resize"

        // Effect to handle scroll and update active-section
        useEffect {
            val handleScroll: (Event) -> Unit = {
                val sections = Constant.navSection
                // Find the section currently in view
                val currentSection = sections.find { sectionId ->
                    val element = document.getElementById(sectionId) ?: return@find false
                    val rect = element.getBoundingClientRect()
                    rect.top <= 120 && rect.bottom >= 120
                } ?: "home"
                setActiveSection(currentSection)
            }

            val handleResize: (Event) -> Unit = {
                setIsMobileView(window.innerWidth <= 768)
            }

            window.addEventListener(eventTypeScroll, handleScroll)
            window.addEventListener(eventTypeResize, handleResize)

            // Clean_up event listener
            buildCleanupCallback {
                window.removeEventListener(eventTypeScroll, handleScroll)
                window.removeEventListener(eventTypeResize, handleResize)
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

                media(MediaQuery("(max-width: 768px)")){
                    padding = Padding(0.px, 10.px)
                }
            }

            // Header
            header(
                activeSection = activeSection,
                profileName = profileName
            )

            // Main content
            ReactHTML.main {
                // Hero section
//                if (!isMobileView)
//                    heroSection(profileName)
//                else
//                    heroSectionMobile(profileName)
                ReactHTML.div {
                    css {
                        display = if (isMobileView) None.none else Display.block
                    }
                    heroSection(profileName)
                }

                ReactHTML.div {
                    css {
                        display = if (!isMobileView) None.none else Display.block
                    }
                    heroSectionMobile(profileName)
                }

                // About section
                aboutSection()

                // education section
                educationSection(education = education.getEducation()){
                    navigate("/certificate/$it")
                }

                // Skills section
                skillSection(skills = MY_SKILL)

                // Works section
                workSection(myWorks = myWork.getMyWorks()){ id ->
                    navigate("/work/$id")
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