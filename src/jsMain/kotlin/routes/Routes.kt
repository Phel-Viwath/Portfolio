package routes

import js.objects.unsafeJso
import pages.home.HomePage
import pages.workDetailPage
import react.FC
import react.Props
import react.create
import react.router.Outlet
import react.router.RouteObject
import react.router.dom.createHashRouter
import remix.run.router.Router

val AppLayout = FC<Props> {
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
                unsafeJso {
                    path = "work/:id"
                    element = workDetailPage().create()
                }
            )
        }
    )
    return createHashRouter(routes)
}
