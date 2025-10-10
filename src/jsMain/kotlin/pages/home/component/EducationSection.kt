package pages.home.component

import emotion.react.css
import model.Education
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.section
import styles.animation.fadeInAnimation
import styles.animation.useInViewport
import util.useThemeColors
import web.cssom.Display
import web.cssom.Padding
import web.cssom.px
import web.cssom.s

fun ChildrenBuilder.educationSection(
    education: List<Education>
) {

    val colors = useThemeColors()
    val (eduRef, isEduVisible) = useInViewport()

    section{
        id = "education"
        css {
            padding = Padding(100.px, 0.px)
        }

        h2 {
            ref = eduRef
            css {
                fontSize = 36.px
                marginBottom = 30.px
                color = colors.text
                fadeInAnimation(duration = 0.8.s, delay = 0.2.s, isVisible = isEduVisible)
            }
            +"My Education"
        }

        div {
            css {
                display = Display.tableColumn
            }



        }
    }

}