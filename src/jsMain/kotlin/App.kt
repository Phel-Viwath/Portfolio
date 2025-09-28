
import context.theme.ThemeProvider
import react.FC
import react.Props
import react.router.dom.RouterProvider
import routes.appRouter

fun app() = FC<Props> {
    // route
    ThemeProvider{
        RouterProvider{
            router = appRouter()
        }
    }
}