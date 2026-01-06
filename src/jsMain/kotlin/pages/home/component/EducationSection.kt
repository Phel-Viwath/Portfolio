package pages.home.component

import component.eduItem
import emotion.react.css
import model.Education
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.section
import styles.animation.slideInLeftAnimation
import styles.animation.useInViewport
import util.useThemeColors
import web.cssom.Display
import web.cssom.FlexDirection
import web.cssom.Padding
import web.cssom.px
import web.cssom.s

fun ChildrenBuilder.educationSection(
    education: List<Education>,
    onItemClick: (String) -> Unit,
) {

    val colors = useThemeColors()
    val (eduRef, isEduVisible) = useInViewport()

    section {
        ref = eduRef
        id = "education"
        css {
            padding = Padding(100.px, 0.px)

        }

        h2 {
            id = "education_title"
            css {
                fontSize = 36.px
                marginBottom = 30.px
                color = colors.text
                slideInLeftAnimation(delay = 0.2.s, isVisible = isEduVisible)
            }
            +"My Education"
        }

        div {
            css {
                display = Display.flex
                flexDirection = FlexDirection.column
                gap = 16.px
            }

            education.forEachIndexed { index, edu ->
                eduItem(
                    education = edu,
                    colors = colors,
                    index = index,
                    isVisible = isEduVisible,
                    action = { id -> onItemClick(id) }
                )
            }
        }
    }

}