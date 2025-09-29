package component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import styles.Typography.inputFontSize
import styles.color.ThemeColorsPalette
import util.transition
import web.cssom.Border
import web.cssom.Display
import web.cssom.LineStyle
import web.cssom.MarginBottom
import web.cssom.None
import web.cssom.pct
import web.cssom.px
import web.html.InputType

fun ChildrenBuilder.inputField(
    displayName: String,
    useFor: String,
    iId: String,
    inputType: InputType,
    bottomMargin: MarginBottom = 20.px,
    colors: ThemeColorsPalette,
    textValue: (String) -> Unit
) {
    div {
        css {
            marginBottom = bottomMargin
        }
        label {
            htmlFor = useFor
            css {
                display = Display.block
                marginBottom = 5.px
                color = colors.textSecondary
            }
            +displayName
        }
        input {
            type = inputType
            id = iId
            value = textValue
            css {
                width = 100.pct
                padding = 10.px
                borderRadius = 6.px
                border = Border(1.px, LineStyle.solid, colors.border)
                fontSize = inputFontSize
                backgroundColor = colors.background
                color = colors.text
                transition = "all 0.3s ease".transition()

                focus {
                    borderColor = colors.primary
                    outline = None.none
                }
            }
        }
    }
}