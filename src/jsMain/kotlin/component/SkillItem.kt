package component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h3
import styles.animation.slideUpAnimation
import styles.color.ThemeColorsPalette
import util.gradientShadow
import util.transition
import util.translateY
import util.width
import web.cssom.*
import kotlin.Float

fun ChildrenBuilder.skillItem(
    index: Int,
    skill: String,
    percentage: Float,
    status: String? = null,
    colors: ThemeColorsPalette
) {
    div {
        css {
            backgroundColor = colors.surface
            padding = 20.px
            borderRadius = 10.px
            boxShadow = BoxShadow(0.px, 4.px, 6.px, colors.shadow)
            transition = "all 0.3s ease".transition()
            cursor = Cursor.pointer
            slideUpAnimation(duration = 0.4.s, delay = (0.2 + index * 0.1).s)

            // Hover effect
            hover {
                //boxShadow = BoxShadow(0.px, 0.px, 20.px, "rgba(0, 255, 255, 0.4)".rgba())
                //boxShadow = BoxShadow((-6).px, 0.px, 15.px, "rgba(255, 0, 255, 0.5)".rgba())
                boxShadow = "6px 6px 15px rgba(0, 255, 255, 0.5), -6px 0 15px rgba(255, 0, 255, 0.5)".gradientShadow()
                transform = translateY(-5)
            }
        }

        h3 {
            css {
                margin = Margin(0.px, 0.px, 15.px, 0.px)
                fontSize = 18.px
                color = colors.text
            }
            +skill
        }

        div {
            css {
                height = 8.px
                backgroundColor = colors.border
                borderRadius = 4.px
                overflow = Overflow.hidden
            }

            div {
                css {
                    height = 100.pct
                    width = "$percentage%".width()
                    backgroundColor = colors.primary
                    transition = "width 1s ease-out".transition()
                }
            }
        }

        div {
            css {
                textAlign = TextAlign.right
                marginTop = 5.px
                fontSize = 14.px
                color = colors.textSecondary
            }
            +"$percentage%"
        }
    }
}