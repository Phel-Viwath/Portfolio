import react.FC
import react.Props
import routes.appRouter

fun app() = FC<Props> {
    // route
    child(appRouter())
}