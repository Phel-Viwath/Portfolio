package util

import kotlinx.browser.window
import react.FC
import react.Props
import react.router.useLocation
import react.useEffect

val ScrollToTop = FC<Props>{
    val location = useLocation()

    useEffect(location.pathname) {
        window.scrollTo(0.0, 0.0)
    }
}