package context.theme

import hooks.useTheme
import react.FC
import react.PropsWithChildren
import react.useEffect
import repository.ThemePrefs
import web.dom.document

object ThemeState {

    private val themePrefs = ThemePrefs()
    private val listeners = mutableListOf<(Theme) -> Unit>()

    var currentTheme: Theme = themePrefs.loadTheme()

    fun setTheme(newTheme: Theme) {
        currentTheme = newTheme
        themePrefs.saveTheme(newTheme)
        listeners.forEach {
            it(newTheme)
        }
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