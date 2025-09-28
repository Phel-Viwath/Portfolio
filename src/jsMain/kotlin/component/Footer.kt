package component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.footer
import react.dom.html.ReactHTML.p
import util.useThemeColors
import web.cssom.*

fun ChildrenBuilder.footer(name: String){

    val colors = useThemeColors()

    footer {
        css {
            width = 100.pct
            backgroundColor = colors.surface
            textAlign = TextAlign.center
            padding = Padding(30.px, 0.px)
            marginTop = 50.px
            borderTop = Border(1.px, LineStyle.solid, colors.border)
            transition = "all 0.3s ease".unsafeCast<Transition>()
        }

        p {
            css {
                color = colors.textSecondary
                transition = "color 0.3s ease".unsafeCast<Transition>()
            }
            +"© ${js("new Date().getFullYear()")} $name. All Rights Reserved."
        }
    }
}