package hooks

import context.theme.Theme
import context.theme.ThemeState
import react.internal.buildCleanupCallback
import react.useEffect
import react.useState

// Hook to use theme
fun useTheme(): Pair<Theme, () -> Unit> {
    val (theme, setTheme) = useState(ThemeState.currentTheme)

    useEffect {
        val listener: (Theme) -> Unit = { newTheme -> setTheme(newTheme) }
        ThemeState.addListener(listener)

        buildCleanupCallback {
            ThemeState.removeListener(listener)
        }
    }
    return Pair(theme, ThemeState::toggleTheme)
}