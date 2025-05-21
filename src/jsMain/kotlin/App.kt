import react.FC
import react.Props
import react.router.dom.RouterProvider
import routes.appRouter

fun app() = FC<Props> {
    // route
    RouterProvider{
        router = appRouter()
    }
}