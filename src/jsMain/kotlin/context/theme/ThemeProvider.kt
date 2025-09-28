package context.theme

import hooks.useTheme
import react.FC
import react.PropsWithChildren
import react.createContext
import react.internal.buildCleanupCallback
import react.useEffect
import react.useState
import web.dom.document

object ThemeState {
    var currentTheme: Theme = Theme.LIGHT
    private val listeners = mutableListOf<(Theme) -> Unit>()

    fun setTheme(newTheme: Theme) {
        currentTheme = newTheme
        listeners.forEach { it(newTheme) }
    }

    fun toggleTheme() {
        setTheme(if (currentTheme == Theme.LIGHT) Theme.DARK else Theme.LIGHT)
    }

    fun addListener(listener: (Theme) -> Unit) {
        listeners.add(listener)
    }

    fun removeListener(listener: (Theme) -> Unit) {
        listeners.remove(listener)
    }
}


// Theme Provider Component (Simplified)
val ThemeProvider = FC<PropsWithChildren> { props ->
    val (theme, _) = useTheme()

    // Apply theme class to body
    useEffect(theme) {
        document.body.className = when(theme) {
            Theme.LIGHT -> "light-theme"
            Theme.DARK -> "dark-theme"
        }
    }

    +props.children
}