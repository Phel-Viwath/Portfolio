package repository

import context.theme.Theme
import kotlinx.browser.window
import web.storage.localStorage

class ThemePrefs {
    private companion object {
        private const val THEME_PREFS = "app-theme-prefs"
    }

    fun loadTheme(): Theme{
        return try {
            val stored = localStorage.getItem(THEME_PREFS)
            if (stored != null)
                when (stored) {
                    "DARK" -> Theme.DARK
                    "LIGHT" -> Theme.LIGHT
                    else -> Theme.LIGHT
                }
            else
                detectSystemTheme()
        }catch (e: Exception){
            console.error("Failed to load theme from storage", e)
            Theme.LIGHT
        }
    }

    fun saveTheme(theme: Theme){
        try {
            localStorage.setItem(THEME_PREFS, theme.name)
        }catch (e: Exception){
            console.error("Failed to save theme to storage", e)
        }
    }
    private fun detectSystemTheme(): Theme {
        return try {
            val prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            if (prefersDark) Theme.DARK else Theme.LIGHT
        } catch (e: Exception) {
            console.error("Error detected system theme:", e)
            Theme.LIGHT
        }
    }

}