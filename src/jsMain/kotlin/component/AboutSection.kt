package component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.section
import styles.paragraphStyles
import util.toOpacity
import csstype.*

fun ChildrenBuilder.aboutSection() {
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
                color = Color("#1e293b")
                opacity = 0.pct.toOpacity()
                transform = "translateX(-30px)".unsafeCast<Transform>()
            }
            +"About Me"
        }

        p {
            id = "about-paragraph-first"
            css { this.paragraphStyles() }
            + "I'm a passionate Web Designer with expertise in creating visually appealing and user-friendly websites. With a strong foundation in design principles and a keen eye for aesthetics, I strive to deliver engaging digital experiences that meet client objectives while exceeding user expectations."
        }
        p {
            id = "about-paragraph-second"
            css { this.paragraphStyles() }
            +"My approach combines creativity with technical skills to produce responsive designs that work seamlessly across all devices. I'm constantly learning and adapting to the latest design trends and technologies to ensure my work remains current and innovative."
        }
    }
}