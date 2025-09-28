package component

import emotion.react.css
import model.MyWork
import org.w3c.dom.HTMLElement
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.section
import styles.animation.fadeInAnimation
import styles.animation.slideUpAnimation
import styles.animation.useInViewport
import util.useThemeColors
import web.cssom.*
import kotlin.js.unsafeCast

fun ChildrenBuilder.workSection(
    myWorks: List<MyWork>,
    onClickEvent: (Int) -> Unit
){
    val colors = useThemeColors()
    val (workRef, isWorkVisible) = useInViewport()

    section {
        id = "works"
        css {
            background = colors.background
            padding = Padding(100.px, 0.px)
        }

        h2 {
            ref = workRef
            css {
                fontSize = 36.px
                marginBottom = 30.px
                color = Color("#1e293b")
                fadeInAnimation(duration = 0.8.s, delay = 0.2.s, isVisible = isWorkVisible)
            }
            +"My Works"
        }

        div {
            css {
                display = Display.grid
                gridTemplateColumns = "repeat(auto-fill, minmax(350px, 1fr))".unsafeCast<GridTemplateTracks>()
                gap = 30.px
            }

            // Portfolio items
            myWorks.forEachIndexed { i: Int, work: MyWork ->
                div {
                    onClick = { onClickEvent(i) }
                    css {
                        borderRadius = 12.px
                        overflow = Overflow.hidden
                        boxShadow = BoxShadow(0.px,4.px, 6.px, Color("#0000000d"))
                        backgroundColor = Color("white")
                        transition = "transform 0.3s ease".unsafeCast<Transition>()
                        cursor = Cursor.pointer
                        slideUpAnimation(duration = 0.8.s, delay = (0.2 + (i-1) * 0.1).s)
                    }
                    onMouseOver = { event ->
                        (event.currentTarget as HTMLElement).style.transform = "translateY(-10px)"
                    }
                    onMouseOut = { event ->
                        (event.currentTarget as HTMLElement).style.transform = "translateY(0)"
                    }

                    img {
                        src = work.image
                        alt = "Work sample $i"
                        css {
                            width = 100.pct
                            height = 200.px
                            objectFit = ObjectFit.cover
                        }
                    }

                    div {
                        css {
                            padding = 20.px
                        }

                        h3 {
                            css {
                                margin = Margin(0.px, 0.px, 10.px, 0.px)
                                fontSize = 18.px
                                color = Color("#1e293b")
                            }
                            +"Project ${work.projectName}"
                        }

                        p {
                            css {
                                margin = 0.px
                                color = Color("#64748b")
                            }
                            +work.projectType
                        }
                    }
                }
            }
        }
    }
}
