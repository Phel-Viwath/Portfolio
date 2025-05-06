package router

import pages.DashboardPage
import pages.LoginPage
import pages.ProfilePage
import react.FC
import react.Props
import react.create
import react.router.Route
import react.router.Routes
import react.router.dom.HashRouter

val AppRouter = FC<Props> {
    HashRouter {
        Routes {
            Route {
                path = "/"
                element = LoginPage.create()
            }
            Route {
                path = "/dashboard"
                element = DashboardPage.create()
            }
            Route {
                path = "/profile"
                element = ProfilePage.create()
            }
        }
    }
}
