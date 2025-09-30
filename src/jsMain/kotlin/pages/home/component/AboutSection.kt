package pages.home.component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.section
import styles.paragraphStyles
import util.Constant
import util.Constant.ABOUT_FIRST_PARAGRAPH
import util.Constant.ABOUT_SECOND_PARAGRAPH
import util.toOpacity
import util.useThemeColors
import web.cssom.*

fun ChildrenBuilder.aboutSection() {

    val colors = useThemeColors()

    section {
        id = "about"
        css {
            padding = Padding(100.px, 0.px)
        }

        h2 {
            id = "about_title"
            css {
                fontSize = 36.px
                marginBottom = 30.px
                color = colors.text
                opacity = 0.pct.toOpacity()
                transform = "translateX(-30px)".unsafeCast<Transform>()
            }
            +"About Me"
        }

        p {
            id = "about-paragraph-first"
            css {
                this.paragraphStyles()
                color = colors.textSecondary
            }
            + ABOUT_FIRST_PARAGRAPH
        }
        p {
            id = "about-paragraph-second"
            css {
                this.paragraphStyles()
                color = colors.textSecondary
            }
            + ABOUT_SECOND_PARAGRAPH
        }
    }
}