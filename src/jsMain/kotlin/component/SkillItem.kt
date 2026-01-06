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

/**
 * Renders a single skill item block used in the skills list.
 *
 * This function creates a card-like UI element that shows:
 * - the skill name (title)
 * - a horizontal progress bar that fills to [percentage]
 * - a right-aligned text showing the percentage value
 *
 * Visual behavior:
 * - The card uses values from the provided [colors] palette for background,
 *   borders, text and shadows.
 * - A slide-up animation is applied on mount. The animation delay depends
 *   on [index] to allow staggered entrance.
 * - On hover the element shifts up slightly and a colorful multi-shadow
 *   effect is applied (see util.gradientShadow()).
 *
 * Parameters:
 * @param index position in the list (used to stagger animation delay)
 * @param skill display name of the skill (e.g., "Kotlin", "React")
 * @param percentage fill amount for the progress bar (0..100). Displayed
 *        and used as the width of the inner bar.
 * @param status optional small status string (currently unused in UI but
 *        kept for future extension)
 * @param colors theme palette containing surface, primary, text, border and shadow colors
 */
fun ChildrenBuilder.skillItem(
    isVisible: Boolean,
    index: Int,
    skill: String,
    percentage: Float,
    status: String? = null,
    colors: ThemeColorsPalette
) {
    div {
        css {
            // Card base
            backgroundColor = colors.surface
            padding = 20.px
            borderRadius = 10.px
            boxShadow = BoxShadow(0.px, 4.px, 6.px, colors.shadow)
            transition = "all 0.3s ease".transition()
            cursor = Cursor.pointer

            // staggered slide-up animation on mount
            slideUpAnimation(duration = 0.4.s, delay = (0.2 + index * 0.1).s, isVisible = isVisible)

            // Hover effect: colorful dual shadow
            hover {
                boxShadow = "6px 6px 15px rgba(0, 255, 255, 0.5), -6px 0 15px rgba(255, 0, 255, 0.5)".gradientShadow()
            }
        }

        // Title
        h3 {
            css {
                margin = Margin(0.px, 0.px, 15.px, 0.px)
                fontSize = 18.px
                color = colors.text
            }
            +skill
        }

        // Progress bar background
        div {
            css {
                height = 8.px
                backgroundColor = colors.border
                borderRadius = 4.px
                overflow = Overflow.hidden
            }

            // Progress bar fill (width based on percentage)
            div {
                css {
                    height = 100.pct
                    width = "$percentage%".width()
                    backgroundColor = colors.green
                    transition = "width 1s ease-out".transition()
                }
            }
        }

        // Percentage label (right aligned)
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