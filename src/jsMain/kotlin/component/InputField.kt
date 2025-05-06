package component

import csstype.*
import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.input
import web.html.InputType

fun ChildrenBuilder.inputField(
    type: InputType,
    placeholder: String,
    value: String,
    onValueChange: (String) -> Unit
) {
    input {
        this.type = type
        this.placeholder = placeholder
        this.value = value
        onChange = { event -> onValueChange(event.target.value) }

        css {
            width = 100.pct
            marginBottom = 12.px
            padding = Padding(10.px, 12.px)
            borderRadius = 4.px
            border = Border(1.px, LineStyle.solid, Color("#ccc"))
            fontSize = 16.px
            boxSizing = BoxSizing.borderBox
        }
    }
}


