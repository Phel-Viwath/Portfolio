package component

import csstype.*
import emotion.react.css
import js.core.jso
import kotlinx.browser.document
import react.ChildrenBuilder
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.header
import react.dom.html.ReactHTML.nav
import styles.Colors
import util.Constant.navSection

fun ChildrenBuilder.header(
    activeSection: String,
    profileName: String
){
    header {
        css {
            display = Display.flex
            justifyContent = JustifyContent.spaceBetween
            alignItems = AlignItems.center
            padding = Padding(20.px, 10.px)
            backgroundColor = Colors.white
            borderRadius = 20.px
            margin = Margin(20.px, Auto.auto)
            width = 80.pct
            boxShadow = BoxShadow(4.px, 6.px, rgba(0,0,0,0.05))
            position = Position.sticky
            top = 20.px
            zIndex = "1000".unsafeCast<ZIndex>()
        }

        // Logo
        h3 {
            css {
                margin = 0.px
                fontWeight = "600".unsafeCast<FontWeight>()
                fontSize = 20.px
                color = Color("#333")
            }
            +profileName
        }

        // Navigation links
        nav {
            css {
                display = Display.flex
                gap = 30.px
            }

            navSection.forEach { section ->
                val sectionId = section.lowercase()
                a {
                    href = "#$sectionId"
                    css {
                        textDecoration = None.none
                        color = if (activeSection == sectionId) Color("#4169e1") else Color("#333")
                        fontWeight = if (activeSection == sectionId) "600".unsafeCast<FontWeight>() else "400".unsafeCast<FontWeight>()
                        position = Position.relative
                        padding = Padding(5.px, 0.px)
                    }
                    onClick = { event ->
                        event.preventDefault()
                        val targetElement = document.getElementById(sectionId)
                        targetElement?.asDynamic().scrollIntoView(jso {
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
                                backgroundColor = Color("#4169e1")
                                borderRadius = 1.px
                            }
                        }
                    }

                    +section
                }
            }
        }
    }
}