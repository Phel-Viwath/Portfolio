package routes

import js.objects.unsafeJso
import pages.edu.eduCertificate
import pages.home.HomePage
import pages.work.workDetailPage
import react.FC
import react.Props
import react.create
import react.router.Outlet
import react.router.RouteObject
import react.router.dom.createHashRouter
import react.router.useLocation
import react.useEffect
import remix.run.router.Router
import service.trackPageView
import util.ScrollToTop

val AppLayout = FC<Props> {
    val location = useLocation()

    // Track page views whenever the location changes
    useEffect(location.pathname) {
        trackPageView(location.pathname)
    }

    ScrollToTop{}
    Outlet() // This renders the nested route content
}
fun appRouter(): Router {

    val routes = arrayOf<RouteObject>(
        unsafeJso {
            path = "/"
            element = AppLayout.create()
            children = arrayOf(
                unsafeJso {
                    index = true
                    element = HomePage().homePage().create()
                },
                unsafeJso{
                    path = "certificate/:id"
                    element = eduCertificate().create()
                },
                unsafeJso{
                    path = "work/:id"
                    element = workDetailPage().create()
                }
            )
        }
    )
    return createHashRouter(routes)
}
