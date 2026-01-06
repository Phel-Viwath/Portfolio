package component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.a
import util.fontWeight
import util.transition
import util.translateY
import web.cssom.*
import web.window.WindowTarget

fun ChildrenBuilder.linkButton(
    ref: String,
    text: String,
    textColor: Color,
    background: Color,
    hoverBackground: Color
){
    a {
        href = ref
        target = WindowTarget._blank
        css {
            padding = Padding(10.px, 20.px)
            backgroundColor = background
            color = textColor
            border = None.none
            borderRadius = 8.px
            fontSize = 14.px
            fontWeight = "500".fontWeight()
            cursor = Cursor.pointer
            textDecoration = None.none
            display = Display.flex
            alignItems = AlignItems.center
            gap = 8.px
            transition = "all 0.3s ease".transition()
            hover {
                backgroundColor = hoverBackground
                transform = translateY(-2)
            }

            media(MediaQuery("(max-width: 768px)")) {
                padding = Padding(8.px, 12.px)
                fontSize = 10.px
            }
        }
        +text
    }
}