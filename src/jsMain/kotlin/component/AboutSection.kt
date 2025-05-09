package component

import csstype.Color
import csstype.Padding
import csstype.em
import csstype.px
import csstype.s
import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.section
import util.fadeInAnimation
import util.slideUpAnimation

fun ChildrenBuilder.aboutSection(){
    section {
        id = "about"
        css {
            padding = Padding(100.px, 0.px)
        }

        h2 {
            css {
                fontSize = 36.px
                marginBottom = 30.px
                color = Color("#1e293b")
                fadeInAnimation(duration = 0.8.s)
            }
            +"About Me"
        }

        p {
            css {
                fontSize = 18.px
                lineHeight = 1.6.em
                color = Color("#64748b")
                maxWidth = 800.px
                slideUpAnimation(duration = 0.8.s, delay = 0.2.s)
            }
            +"I'm a passionate Web Designer with expertise in creating visually appealing and user-friendly websites. With a strong foundation in design principles and a keen eye for aesthetics, I strive to deliver engaging digital experiences that meet client objectives while exceeding user expectations."
        }

        p {
            css {
                fontSize = 18.px
                lineHeight = 1.6.em
                color = Color("#64748b")
                maxWidth = 800.px
                marginTop = 20.px
                slideUpAnimation(duration = 0.8.s, delay = 0.4.s)
            }
            +"My approach combines creativity with technical skills to produce responsive designs that work seamlessly across all devices. I'm constantly learning and adapting to the latest design trends and technologies to ensure my work remains current and innovative."
        }
    }
}
