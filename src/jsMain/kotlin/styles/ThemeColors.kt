package styles

import web.cssom.Color
object ThemeColors {
    val Light = ThemeColorsPalette(
        background = Color("#f8fafc"),
        surface = Color("#ffffff"),
        primary = Color("#4169e1"),
        primaryHover = Color("#3b5ce8"),
        text = Color("#1e293b"),
        textSecondary = Color("#64748b"),
        border = Color("#e2e8f0"),
        shadow = Color("#0000000d"),
        headerBg = Color("#ffffff")
    )

    val Dark = ThemeColorsPalette(
        background = Color("#0f172a"),
        surface = Color("#1e293b"),
        primary = Color("#6366f1"),
        primaryHover = Color("#7c3aed"),
        text = Color("#f1f5f9"),
        textSecondary = Color("#cbd5e1"),
        border = Color("#334155"),
        shadow = Color("#00000033"),
        headerBg = Color("#1e293b")
    )

    fun getCurrentColors(isDark: Boolean): ThemeColorsPalette =
        if (isDark) Dark else Light
}