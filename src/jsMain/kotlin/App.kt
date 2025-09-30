
import context.theme.ThemeProvider
import react.FC
import react.Props
import react.router.dom.RouterProvider
import routes.appRouter
import util.ToastContainer

fun app() = FC<Props> {

    //
    ToastContainer{}

    // route
    ThemeProvider{
        RouterProvider{
            router = appRouter()
        }
    }
}