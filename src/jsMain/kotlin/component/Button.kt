package component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.button
import util.transition
import web.cssom.*

fun ChildrenBuilder.linkButton(
    text: String,
    textColor: Color,
    background: Color,
    shadowColor: Color,
    action: () -> Unit
){
    button {
        onClick = { action() }
        css {
            display = Display.flex
            alignItems = AlignItems.center
            gap = 8.px
            padding = Padding(10.px, 20.px)
            borderRadius = 6.px
            border = None.none
            backgroundColor = background
            color = textColor
            cursor = Cursor.pointer
            fontSize = 14.px
            fontWeight = integer(500)
            transition = "all 0.3s ease".transition()

            hover {
                transform = scale(1.05)
                boxShadow = BoxShadow(0.px, 4.px, 12.px, shadowColor)
            }
        }
        +text
    }
}