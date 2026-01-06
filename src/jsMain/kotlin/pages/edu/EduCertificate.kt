package pages.edu

import emotion.react.css
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import model.Certificate
import org.w3c.dom.events.Event
import react.FC
import react.Props
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.internal.buildCleanupCallback
import react.router.useNavigate
import react.router.useParams
import react.useEffect
import react.useState
import repository.EducationRepository
import util.toast
import util.useThemeColors
import web.cssom.*

fun eduCertificate() = FC<Props> {

    val navigate = useNavigate()
    val colors = useThemeColors()
    val param = useParams()
    val id = param["id"] ?: ""

    var certificate by useState<Certificate?>(null)
    var error by useState<String?>(null)
    var isLoading by useState(true)

    val scope = MainScope()

    val (isMobileView, setIsMobileView) = useState(window.innerWidth <= 768)

    // Listen for window resize
    useEffect {
        val handleResize: (Event) -> Unit = {
            setIsMobileView(window.innerWidth <= 768)
        }
        window.addEventListener("resize", handleResize)
        buildCleanupCallback { window.removeEventListener("resize", handleResize) }
    }


    useEffect(id) {

        if (id.isEmpty()) {
            toast("Invalid ID", js("{ position: 'top-center', autoClose: 3000 }"))
            error = "Invalid ID"
            isLoading = false
        }
        else {
            // Reset state and fetch new data
            isLoading = true
            error = null
            certificate = null

            scope.launch {
                try {
                    val repository = EducationRepository()
                    val fetchCert = repository.getCertificates(id)
                    if (fetchCert != null)
                        certificate = fetchCert
                    else
                        error = "Certificate not found"
                }catch (e: Exception){
                    error = "failed to fetch certificate"
                    console.error("Failed to fetch certificate", e)
                }finally {
                    isLoading = false
                }
            }
        }

    }

    if (isLoading) {
        div {
            css {
                display = Display.flex
                justifyContent = JustifyContent.center
                alignItems = AlignItems.center
                height = 100.vh
                backgroundColor = colors.background
                color = NamedColor.white
                fontSize = 20.px
            }
            +"Loading..."
        }
        return@FC // Don't render the rest
    }

    if (error != null) {
        div {
            css {
                display = Display.flex
                flexDirection = FlexDirection.column
                justifyContent = JustifyContent.center
                alignItems = AlignItems.center
                height = 100.vh
                backgroundColor = colors.background
                color = NamedColor.red
                fontSize = 20.px
                gap = 20.px
            }
            +"Error: $error"
            button {
                +"← Back"
                css {
                    backgroundColor = "transparent".unsafeCast<BackgroundColor>()
                    color = NamedColor.white
                    borderWidth = 1.px
                    borderStyle = LineStyle.solid
                    borderColor = NamedColor.white
                    borderRadius = 8.px
                    padding = Padding(10.px, 20.px)
                    fontSize = 16.px
                    cursor = Cursor.pointer
                    hover { opacity = number(0.7) }
                }
                onClick = { navigate(-1) }
            }
        }
        return@FC // Don't render the rest
    }

    div {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column // Stack children vertically
            height = 100.vh // 100% of the viewport height
            width = 100.vw  // 100% of the viewport width

            // Remove default browser margin
            margin = 0.px
            padding = 0.px
        }

        // Header overlay
        div {
            css {
                flexShrink = number(0.0)
                height = 60.px
                background = colors.background
                display = Display.flex
                alignItems = AlignItems.center
                justifyContent = JustifyContent.spaceBetween
                padding = Padding(0.px, 20.px)
                zIndex = integer(100)
                borderBottom = Border(1.px, LineStyle.solid, Color("#333"))

                media(MediaQuery("(max-width: 768px)")) {
                    padding = Padding(0.px, 10.px)
                }
            }

            button {
                +(if (isMobileView) "←" else "← Back")
                css {
                    backgroundColor = "transparent".unsafeCast<BackgroundColor>()
                    color = NamedColor.white
                    border = None.none
                    fontSize = 16.px
                    cursor = Cursor.pointer
                    fontWeight = integer(600)
                    transition = "opacity 0.2s ease".unsafeCast<Transition>()
                    hover { opacity = number(0.7) }
                    minWidth = 50.px

                    media(MediaQuery("(max-width: 768px)")) {
                        minWidth = 30.px
                    }
                }
                onClick = { navigate(-1) }
            }

            h2 {
                css {
                    color = NamedColor.white
                    margin = 0.px
                }
                +certificate!!.name
            }

            div {
                css {
                    width = 60.px
                    media(MediaQuery("(max-width: 768px)")) {
                        width = 0.px
                    }
                }
            }
        }

        // Fullscreen scroll viewer container
        div {
            css {
                flexGrow = number(1.0)
                overflowY = "auto".unsafeCast<Overflow>() // 'auto' or 'scroll'
                overflowX = Overflow.hidden
                width = 100.pct
                display = Display.flex
                flexDirection = FlexDirection.column
                alignItems = AlignItems.center
            }

            // Certificate “pages”
            certificateViewer(certificate!!.images)
        }

    }

}
