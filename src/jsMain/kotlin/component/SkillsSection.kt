package component

import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.section
import styles.animation.slideInLeftAnimation
import styles.animation.slideUpAnimation
import styles.animation.useInViewport
import kotlin.Float
import web.cssom.*

fun ChildrenBuilder.skillSection(skills: Map<String, Float>){

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
                color = Color("#1e293b")
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
                        backgroundColor = Color("white")
                        padding = 20.px
                        borderRadius = 10.px
                        boxShadow = BoxShadow(0.px, 4.px, 6.px, Color("#0000000d"))
                        slideUpAnimation(duration = 0.8.s, delay = (0.2 + index * 0.1).s)
                    }

                    h3 {
                        css {
                            margin = Margin(0.px, 0.px, 15.px, 0.px)
                            fontSize = 18.px
                            color = Color("#1e293b")
                        }
                        +skill
                    }

                    div {
                        css {
                            height = 8.px
                            backgroundColor = Color("#e2e8f0")
                            borderRadius = 4.px
                            overflow = Overflow.hidden
                        }

                        div {
                            css {
                                height = 100.pct
                                width = "$percentage%".unsafeCast<Width>()
                                backgroundColor = Color("#4169e1")
                            }
                        }
                    }

                    div {
                        css {
                            textAlign = TextAlign.right
                            marginTop = 5.px
                            fontSize = 14.px
                            color = Color("#64748b")
                        }
                        +"$percentage%"
                    }
                }
            }
        }
    }
}
