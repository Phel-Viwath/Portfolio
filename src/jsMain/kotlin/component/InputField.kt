package component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import styles.Typography.inputFontSize
import styles.color.ThemeColorsPalette
import util.transition
import web.cssom.*
import web.html.InputType

fun ChildrenBuilder.inputField(
    displayName: String,
    useFor: String,
    iId: String,
    inputType: InputType,
    bottomMargin: MarginBottom = 20.px,
    colors: ThemeColorsPalette,
    value: String,                       // current value
    onValueChange: (String) -> Unit,      // callback when user types
    isDisable: Boolean = false
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
            this.value = value
            onChange = { event ->
                val newValue = event.target.value
                onValueChange(newValue)
            }
            disabled = isDisable
            required = true
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