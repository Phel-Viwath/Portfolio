package component

import csstype.*
import emotion.react.css
import react.ChildrenBuilder
import react.dom.events.MouseEventHandler
import react.dom.html.ReactHTML.button
import styles.Colors
import web.html.ButtonType
import web.html.HTMLButtonElement

fun ChildrenBuilder.customButton(
    text: String,
    color: ColorType,
    type: ButtonType = ButtonType.button,
    onClick: MouseEventHandler<HTMLButtonElement>,
){
    button{
        this.type = type
        +text
        this.onClick = onClick
        css {
            marginTop = 16.px
            backgroundColor = color
            border = None.none
            padding = Padding(12.px, 24.px)
            borderRadius = 4.px
            cursor = Cursor.pointer

            hover {
                backgroundColor = Colors.primaryHover
            }
        }
    }
}