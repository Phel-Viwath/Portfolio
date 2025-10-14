package pages.home.component

import component.skillItem
import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.section
import styles.animation.slideInLeftAnimation
import styles.animation.useInViewport
import util.useThemeColors
import web.cssom.*
import kotlin.Float

fun ChildrenBuilder.skillSection(skills: Map<String, Float>){

    val colors = useThemeColors() // theme colors
    val (skillRef, isSkillVisible) = useInViewport()

    section {
        id = "skills"
        css {
            padding = Padding(100.px, 0.px)
        }

        h2 {
            ref = skillRef
            css {
                fontSize = 36.px
                marginBottom = 30.px
                color = colors.text
                slideInLeftAnimation(duration = 0.8.s, delay = 0.2.s, isVisible = isSkillVisible)
            }
            +"My Skills"
        }

        div {
            css {
                display = Display.grid
                gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))".unsafeCast<GridTemplateTracks>()
                gap = 20.px
            }

            // Skill items
            skills.entries.forEachIndexed { index, (skill, percentage) ->
                skillItem(
                    isVisible = isSkillVisible,
                    index = index,
                    skill = skill,
                    percentage = percentage,
                    colors = colors
                )
            }
        }
    }
}
