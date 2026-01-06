package pages.home.component

import component.workItem
import emotion.react.css
import model.MyWork
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.section
import react.useState
import styles.animation.fadeInAnimation
import styles.animation.useInViewport
import util.useThemeColors
import web.cssom.*

fun ChildrenBuilder.workSection(
    myWorks: List<MyWork>,
    onItemClick: (Int) -> Unit
){
    val colors = useThemeColors()
    val (workRef, isWorkVisible) = useInViewport()

    var hoveredIndex by useState<Int?>(null)

    section {
        ref = workRef
        id = "works"
        css {
            padding = Padding(100.px, 0.px)
        }

        h2 {
            css {
                fontSize = 36.px
                marginBottom = 30.px
                color = colors.text
                fadeInAnimation(duration = 0.8.s, delay = 0.2.s, isVisible = isWorkVisible)
            }
            +"My Works"
        }

        div {
            css {
                display = Display.grid
                gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))".unsafeCast<GridTemplateTracks>()
                gap = 30.px
            }

            // Portfolio items
            myWorks.forEachIndexed { i: Int, work: MyWork ->
                workItem(
                    onClicked = { onItemClick(i) },
                    isVisible = isWorkVisible,
                    work = work,
                    colors = colors,
                    index = i,
                    isHovered = i == hoveredIndex,
                    onHoverChange = { index, hovered ->
                        hoveredIndex = if (hovered) index else null
                    }
                )
            }
        }
    }
}
