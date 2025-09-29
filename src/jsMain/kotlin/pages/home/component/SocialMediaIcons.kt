package pages.home.component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.div
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg
import util.useThemeColors
import web.window.WindowTarget
import web.cssom.*

typealias SocialUrl = String
typealias PathD = String

fun ChildrenBuilder.socialMediaIcons(
    appMap: Map<SocialUrl, PathD>
){

    val colors = useThemeColors()

    div {
        css {
            display = Display.flex
            gap = 15.px
            marginTop = 20.px
            background = colors.background
        }

        appMap.forEach {
            a {
                href = it.key
                target = "_blank".unsafeCast<WindowTarget>()
                rel = "noopener noreferrer"

                div {
                    css {
                        width = 44.px
                        height = 44.px
                        borderRadius = 50.pct
                        backgroundColor = Color("#14293b")
                        display = Display.flex
                        justifyContent = JustifyContent.center
                        alignItems = AlignItems.center
                        transition = "transform 0.3s ease".unsafeCast<Transition>()
                        hover {
                            transform = "scale(1.1)".unsafeCast<Transform>()
                        }
                    }

                    // SVG for Instagram icon
                    svg {
                        width = 24.0
                        height = 24.0
                        viewBox = "0 0 24 24"
                        fill = "none"

                        path {
                            d = it.value
                            fill = "white"
                        }
                    }
                }
            }
        }
    }
}