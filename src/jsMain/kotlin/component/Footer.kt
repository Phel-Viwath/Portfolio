package component

import csstype.Color
import csstype.Padding
import csstype.TextAlign
import csstype.pct
import csstype.px
import csstype.vh
import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.footer
import react.dom.html.ReactHTML.p

fun ChildrenBuilder.footer(name: String){
    footer {
        css {
            width = 100.pct
            backgroundColor = Color("white")
            textAlign = TextAlign.center
            padding = Padding(30.px, 0.px)
            marginTop = 50.px
        }

        p {
            css {
                color = Color("#64748b")
            }
            +"© ${js("new Date().getFullYear()")} $name. All Rights Reserved."
        }
    }
}