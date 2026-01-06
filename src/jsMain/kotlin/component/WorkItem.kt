package component

import emotion.react.css
import model.MyWork
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import styles.animation.hoverAnimation
import styles.animation.slideUpAnimation
import styles.color.ThemeColorsPalette
import util.gradientShadow
import util.transition
import util.translateY
import web.cssom.*

fun ChildrenBuilder.workItem(
    onClicked: () -> Unit,
    isVisible: Boolean,
    work: MyWork,
    colors: ThemeColorsPalette,
    index: Int,
    isHovered: Boolean,
    onHoverChange: (Int?, Boolean) -> Unit,
) {

    div {
        onClick = { onClicked() }
        className = ClassName("work-item")

        onMouseEnter = { onHoverChange(index, true) }
        onMouseLeave = { onHoverChange(null, false) }

        css {
            borderRadius = 12.px
            overflow = Overflow.hidden
            boxShadow = if (isHovered) {
                "6px 0 15px rgba(0, 255, 255, 0.5), -6px 0 15px rgba(255, 0, 255, 0.5)".gradientShadow()
            } else {
                BoxShadow(0.px, 4.px, 6.px, colors.shadow)
            }
            backgroundColor = colors.surface
            transform = if (isHovered) translateY(-5) else translateY(0)
            //transition = "transform 0.3s ease, box-shadow 0.3s ease".transition()
            cursor = Cursor.pointer
            position = Position.relative
            height = 250.px
            slideUpAnimation(duration = 0.8.s, delay = (0.2 + (index - 1) * 0.1).s, isVisible = isVisible)
        }

        // --- Main content wrapper ---
        div {

            css {
                position = Position.relative
                height = 100.pct
                display = Display.flex
                flexDirection = FlexDirection.column
                transform = if (isHovered) translateY(10) else translateY(0)
                transition = "transform 0.5s ease".transition()
            }

            // Image
            img {
                src = work.image
                alt = "Work sample $index"
                css {
                    width = 100.pct
                    height = 200.px
                    objectFit = ObjectFit.scaleDown
                }
            }

            // Static title bar
            div {
                css {
                    position = Position.absolute
                    bottom = 0.px
                    left = 0.px
                    right = 0.px
                    padding = 16.px
                    backgroundColor = colors.surface
                    transition = "transform 0.4s ease, background-color 0.3s ease".transition()
                    zIndex = integer(5)
                    boxShadow = BoxShadow(0.px, (-5).px, 8.px, colors.shadow)
                    borderTopLeftRadius = 12.px
                    borderTopRightRadius = 12.px
                }
                h3 {
                    css {
                        fontSize = 20.px
                        fontWeight = integer(700)
                        color = colors.text
                    }
                    +work.projectName
                }

                p {
                    css {
                        margin = 0.px
                        fontWeight = integer(600)
                        color = colors.text
                    }
                    +work.projectType
                }
            }
        }

        // --- Detail panel (slide up) ---
        detailPanel(
            isHovered,
            colors
        )

    }
}



fun ChildrenBuilder.detailPanel(
    isHovered: Boolean,
    colors: ThemeColorsPalette
){
    div {
        className = ClassName("detail-panel")
        css {
            position = Position.absolute
            bottom = if (isHovered) 0.px else (-180).px
            left = 0.px
            right = 0.px
            backgroundColor = colors.surface
            padding = 20.px
            boxShadow = BoxShadow(0.px, (-4).px, 12.px, colors.shadow)
            zIndex = integer(10)
            hoverAnimation(isHovered)
        }

        p {
            css {
                // Center text horizontally
                textAlign = TextAlign.center

                // Center within the panel
                display = Display.flex
                justifyContent = JustifyContent.center
                alignItems = AlignItems.center

                // Spacing
                minHeight = 30.px

                // Font styling
                fontSize = 16.px
                fontWeight = integer(500)
                fontStyle = FontStyle.italic
                letterSpacing = 0.5.px
                color = colors.green
                transition = "color 0.3s ease".transition()

                // Subtle hover glow or color effect
                hover {
                    color = colors.text
                }

                // Optional for mobile
                media(MediaQuery("(max-width: 600px)")) {
                    fontSize = 14.px
                }
            }
            +"Click to view more details"
        }

        div {
            css {
                display = Display.flex
                gap = 15.px
                alignItems = AlignItems.center
                justifyContent = JustifyContent.spaceBetween
                paddingLeft = 20.px
                paddingRight = 20.px
            }
        }
    }
}

