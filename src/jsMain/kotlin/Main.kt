import react.create
import react.dom.client.createRoot
import web.dom.document


// Entry point
fun main() {
   globalStyles()
    val container = document.getElementById("root")
        ?: error("Couldn't find container with id 'root'")
    createRoot(container).render(App.create())
}
