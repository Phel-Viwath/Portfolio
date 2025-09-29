package pages.home.component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.section
import styles.animation.slideInLeftAnimation
import styles.animation.slideUpAnimation
import styles.animation.useInViewport
import util.useThemeColors
import kotlin.Float
import web.cssom.*

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
                div {
                    css {
                        backgroundColor = colors.surface
                        padding = 20.px
                        borderRadius = 10.px
                        boxShadow = BoxShadow(0.px, 4.px, 6.px, colors.shadow)
                        slideUpAnimation(duration = 0.4.s, delay = (0.2 + index * 0.1).s)
                    }

                    h3 {
                        css {
                            margin = Margin(0.px, 0.px, 15.px, 0.px)
                            fontSize = 18.px
                            color = colors.text
                        }
                        +skill
                    }

                    div {
                        css {
                            height = 8.px
                            backgroundColor = colors.border
                            borderRadius = 4.px
                            overflow = Overflow.hidden
                        }

                        div {
                            css {
                                height = 100.pct
                                width = "$percentage%".unsafeCast<Width>()
                                backgroundColor = colors.primary
                                transition = "width 1s ease-out".unsafeCast<Transition>()
                            }
                        }
                    }

                    div {
                        css {
                            textAlign = TextAlign.right
                            marginTop = 5.px
                            fontSize = 14.px
                            color = colors.textSecondary
                        }
                        +"$percentage%"
                    }
                }
            }
        }
    }
}
