import kotlinx.browser.document
import react.create
import util.createRoot
import styles.initScrollAnimations

// App entry point
fun main() {
    // Get the root element
    val container = document.getElementById("root") ?: error("Couldn't find root container!")

    // Create a root
    val root = createRoot(container)

    // Render the App component
    root.render(app().create())
    initScrollAnimations()
}
