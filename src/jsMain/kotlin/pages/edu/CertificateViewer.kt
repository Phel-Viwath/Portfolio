package pages.edu

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.img
import web.cssom.AlignItems
import web.cssom.Auto
import web.cssom.BoxSizing
import web.cssom.Color
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.JustifyContent
import web.cssom.NamedColor
import web.cssom.Overflow
import web.cssom.Padding
import web.cssom.ScrollSnapAlign
import web.cssom.ScrollSnapStop
import web.cssom.integer
import web.cssom.pct
import web.cssom.px
import web.cssom.vw

fun ChildrenBuilder.certificateViewer(
    certificates: List<String>
) {
    certificates.forEachIndexed { index, certUrl ->
        div {
            key = "$certUrl-$index"
            css {
                width = 100.pct
                scrollSnapAlign = ScrollSnapAlign.center
                scrollSnapAlign = ScrollSnapAlign.start
                scrollSnapStop = ScrollSnapStop.always
                display = Display.flex
                flexDirection = FlexDirection.column
                alignItems = AlignItems.center
                justifyContent = JustifyContent.center
                backgroundColor = NamedColor.transparent
                padding = Padding(10.px, 10.px, 10.px, 10.px)
                boxSizing = BoxSizing.borderBox

            }

            // "PDF-like" paper frame
            div {
                css {
                    width = 55.vw
                    maxWidth = 1200.px
                    overflow = Overflow.hidden
                }

                img {
                    src = certUrl
                    alt = "Certificate ${index + 1}"
                    css {
                        width = 100.pct
                        height = Auto.auto
                        display = Display.block
                    }
                }
            }// end of paper frame

            // Page indicator (optional)
            if (certificates.size > 1) {
                div {
                    css {
                        marginTop = 10.px
                        color = "rgba(255, 255, 255, 0.7)".unsafeCast<Color>()
                        fontSize = 14.px
                        fontWeight = integer(500)
                    }
                    +"${index + 1} / ${certificates.size}"
                }
            }

        }// end of certificate page
    }
}