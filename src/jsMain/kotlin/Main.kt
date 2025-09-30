import kotlinx.browser.document
import react.create
import service.EmailService
import styles.animation.initScrollAnimations
import styles.injectGlobalStyles
import util.createRoot

// App entry point
fun main() {
    // Inject global styles first
    injectGlobalStyles()

    // Initialize EmailJS
    EmailService.init()

    // Get the root element
    val container = document.getElementById("root") ?: error("Couldn't find root container!")

    // Create a root
    val root = createRoot(container)

    // Render the App component
    root.render(app().create())
    initScrollAnimations()
}
