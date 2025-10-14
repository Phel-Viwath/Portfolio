package pages.home.component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.section
import styles.animation.slideInLeftAnimation
import styles.animation.slideUpAnimation
import styles.animation.useInViewport
import styles.paragraphStyles
import util.Constant.ABOUT_FIRST_PARAGRAPH
import util.Constant.ABOUT_SECOND_PARAGRAPH
import util.toOpacity
import util.useThemeColors
import web.cssom.Padding
import web.cssom.Transform
import web.cssom.pct
import web.cssom.px
import web.cssom.s

fun ChildrenBuilder.aboutSection() {

    val colors = useThemeColors()
    val (aboutRef, isAboutVisible) = useInViewport()

    section {
        ref = aboutRef
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
                slideInLeftAnimation(delay = 0.2.s, isVisible = isAboutVisible)
            }
            +"About Me"
        }

        p {
            id = "about-paragraph-first"
            css {
                this.paragraphStyles()
                color = colors.textSecondary
                slideUpAnimation(delay = 0.4.s, isVisible = isAboutVisible)
            }
            + ABOUT_FIRST_PARAGRAPH
        }
        p {
            id = "about-paragraph-second"
            css {
                this.paragraphStyles()
                color = colors.textSecondary
                slideUpAnimation(delay = 0.6.s, isVisible = isAboutVisible)
            }
            + ABOUT_SECOND_PARAGRAPH
        }
    }
}