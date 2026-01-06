package pages.home.component

import context.theme.Theme
import emotion.react.css
import hooks.useTheme
import js.objects.unsafeJso
import kotlinx.browser.document
import react.ChildrenBuilder
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.header
import react.dom.html.ReactHTML.nav
import react.dom.svg.ReactSVG.circle
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg
import react.dom.svg.StrokeLinecap
import react.dom.svg.StrokeLinejoin
import util.Constant.navSection
import util.fontWeight
import util.useThemeColors
import web.cssom.*
import kotlin.js.unsafeCast

fun ChildrenBuilder.header(
    activeSection: String,
    profileName: String
){
    val (theme, toggleTheme) = useTheme()
    val colors = useThemeColors()

    header {
        css {
            display = Display.flex
            justifyContent = JustifyContent.spaceBetween
            alignItems = AlignItems.center
            padding = Padding(20.px, 10.px)
            // ✅ Glass morphism effect
            backgroundColor = if (theme == Theme.LIGHT) {
                "rgba(255, 255, 255, 0.7)".unsafeCast<BackgroundColor>()
            } else {
                "rgba(30, 41, 59, 0.7)".unsafeCast<BackgroundColor>()
            }
            borderRadius = 20.px
            margin = Margin(20.px, Auto.auto)
            width = 80.pct
            boxShadow = BoxShadow(4.px, 6.px, colors.shadow)
            position = Position.sticky
            top = 20.px
            zIndex = "1000".unsafeCast<ZIndex>()

            media(MediaQuery("(max-width: 768px)")){
                display = None.none
            }
        }

        // Logo
        h3 {
            css {
                margin = 0.px
                fontWeight = "600".unsafeCast<FontWeight>()
                fontSize = 20.px
                color = colors.text
            }
            +profileName
        }

        // contain nav and toggle theme button
        div {
            css {
                display = Display.flex
                alignItems = AlignItems.center
                gap = 30.px

                media(MediaQuery("(max-width: 768px)")) {
                    gap = 15.px
                }
            }

            // Navigation links
            nav {
                css {
                    display = Display.flex
                    gap = 30.px

                    // Hide on mobile
                    media(MediaQuery("(max-width: 768px)")) {
                        display = None.none
                    }
                }

                navSection.forEach { section ->
                    val sectionId = section.lowercase()
                    a {
                        href = "#$sectionId"
                        css {
                            textDecoration = None.none
                            color = if (activeSection == sectionId) colors.primary else colors.text
                            fontWeight = if (activeSection == sectionId) "600".fontWeight() else "400".fontWeight()
                            position = Position.relative
                            padding = Padding(5.px, 0.px)
                        }
                        onClick = { event ->
                            event.preventDefault()
                            val targetElement = document.getElementById(sectionId)
                            targetElement?.asDynamic().scrollIntoView(unsafeJso {
                                behavior = "smooth"
                                block = "center"
                            })
                        }

                        if (activeSection == sectionId) {
                            div {
                                css {
                                    position = Position.absolute
                                    bottom = (-2).px
                                    left = 0.px
                                    width = 100.pct
                                    height = 2.px
                                    backgroundColor = colors.primary
                                    borderRadius = 1.px
                                }
                            }
                        }
                        +section.replaceFirstChar { it.uppercase() }
                    }
                }
            }// end nav

            // theme button
            button {
                css {
                    background = None.none
                    border = None.none
                    cursor = Cursor.pointer
                    padding = 8.px
                    borderRadius = 50.pct
                    display = Display.flex
                    alignItems = AlignItems.center
                    justifyContent = JustifyContent.center
                    backgroundColor = colors.surface
                    transition = "all 0.3s ease".unsafeCast<Transition>()
                    hover {
                        backgroundColor = colors.border
                    }
                }
                onClick = { toggleTheme() }

                // Sun/Moon icon
                svg {
                    width = 20.0
                    height = 20.0
                    viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = colors.text.toString()
                    strokeWidth = 2.0
                    strokeLinecap = StrokeLinecap.round
                    strokeLinejoin = StrokeLinejoin.round

                    if (theme == Theme.LIGHT) {
                        // Moon icon for light-theme
                        path {
                            d = "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                        }
                    } else {
                        // Sun icon for dark-theme
                        path {
                            d = "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                        }
                        // Sun circle
                        svg {
                            circle {
                                cx = 12.0
                                cy = 12.0
                                r = 5.0
                            }
                        }
                    }
                }
            }// end theme button
        } // end nav, toggle div
    }
}