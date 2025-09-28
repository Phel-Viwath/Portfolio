package util

import context.theme.Theme
import context.theme.ThemeState
import styles.ThemeColors

fun useThemeColors() = ThemeColors.getCurrentColors(ThemeState.currentTheme == Theme.DARK)
