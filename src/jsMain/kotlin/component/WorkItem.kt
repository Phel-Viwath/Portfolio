package component

import emotion.react.css
import kotlinx.browser.window
import model.MyWork
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import react.useState
import styles.animation.slideUpAnimation
import styles.color.ThemeColorsPalette
import util.gradientShadow
import util.transition
import util.translateY
import web.cssom.*

fun ChildrenBuilder.workItem(
    work: MyWork,
    colors: ThemeColorsPalette,
    index: Int,
    onClickEvent: () -> Unit
) {
    var isHovered by useState(false)
    var isDetailVisible by useState(false)

    div {
        onMouseEnter = {
            isHovered = true
            isDetailVisible = true // keep visible after hover
        }
        onMouseLeave = {
            isHovered = false
        }

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
            transition = "transform 0.3s ease, box-shadow 0.3s ease".transition()
            cursor = Cursor.pointer
            position = Position.relative
            height = 250.px
            slideUpAnimation(duration = 0.8.s, delay = (0.2 + (index - 1) * 0.1).s)
        }

        // --- Main content wrapper ---
        div {
            css {
                position = Position.relative
                height = 100.pct
                display = Display.flex
                flexDirection = FlexDirection.column
                transform = if (isHovered) translateY(20) else translateY(0)
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
                    transition = "transform 0.4s ease".transition()
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
        if (isDetailVisible) {
            div {
                css {
                    position = Position.absolute
                    bottom = if (isHovered) 0.px else (-180).px
                    left = 0.px
                    right = 0.px
                    backgroundColor = colors.surface
                    padding = 20.px
                    boxShadow = BoxShadow(0.px, (-4).px, 12.px, colors.shadow)
                    transition = "bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1)".transition()
                    zIndex = integer(10)
                }

                p {
                    css {
                        margin = Margin(0.px, 0.px, 20.px, 0.px)
                        fontSize = 14.px
                        color = colors.textSecondary
                        lineHeight = number(1.6)
                    }
                    +work.description
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

                    linkButton(
                        text = "👁 View",
                        textColor = colors.surface,
                        background = colors.text,
                        shadowColor = colors.shadow
                    ){
                        onClickEvent()
                    }

                    linkButton(
                        text = "</> Code",
                        textColor = colors.surface,
                        background = colors.text,
                        shadowColor = colors.shadow
                    ){
                        window.open(work.codeLink, "_blank")
                    }
                }
            }
        }
    }
}


//fun ChildrenBuilder.workItem(
//    work: MyWork,
//    colors: ThemeColorsPalette,
//    index: Int,
//    onClickEvent: () -> Unit
//){
//    div {
//        onClick = {onClickEvent()}
//        css {
//            borderRadius = 12.px
//            overflow = Overflow.hidden
//            boxShadow = BoxShadow(0.px,4.px, 6.px, colors.shadow)
//            backgroundColor = colors.surface
//            transition = "transform 0.3s ease".transition()
//            cursor = Cursor.pointer
//            slideUpAnimation(duration = 0.8.s, delay = (0.2 + (index-1) * 0.1).s)
//
//            // Hover effect
//            hover {
//                //boxShadow = BoxShadow(0.px, 0.px, 20.px, "rgba(0, 255, 255, 0.4)".rgba())
//                //boxShadow = BoxShadow((-6).px, 0.px, 15.px, "rgba(255, 0, 255, 0.5)".rgba())
//                boxShadow = "6px 0 15px rgba(0, 255, 255, 0.5), -6px 0 15px rgba(255, 0, 255, 0.5)".gradientShadow()
//                transform = translateY(-5)
//            }
//        }
//        onMouseOver = { event ->
//            event.currentTarget.style.transform = "translateY(-10px)"
//        }
//        onMouseOut = { event ->
//            event.currentTarget.style.transform = "translateY(0)"
//        }
//
//        img {
//            src = work.image
//            alt = "Work sample $index"
//            css {
//                width = 100.pct
//                height = 200.px
//                objectFit = ObjectFit.scaleDown
//            }
//        }
//
//        div {
//            css {
//                padding = 20.px
//            }
//
//            h3 {
//                css {
//                    margin = Margin(0.px, 0.px, 10.px, 0.px)
//                    fontSize = 18.px
//                    color = colors.text
//                }
//                +"Project ${work.projectName}"
//            }
//
//            p {
//                css {
//                    margin = 0.px
//                    color =colors.textSecondary
//                }
//                +work.projectType
//            }
//        }
//    }
//}

//fun ChildrenBuilder.workItem(
//    work: MyWork,
//    colors: ThemeColorsPalette,
//    index: Int,
//    onClickEvent: () -> Unit
//){
//    var isHovered by useState(false)
//
//    div {
//        onClick = {onClickEvent()}
//        onMouseEnter = { isHovered = true }
//        onMouseLeave = { isHovered = false }
//
//        css {
//            borderRadius = 12.px
//            overflow = Overflow.hidden
//            boxShadow = if (isHovered) {
//                "6px 0 15px rgba(0, 255, 255, 0.5), -6px 0 15px rgba(255, 0, 255, 0.5)".gradientShadow()
//            } else {
//                BoxShadow(0.px, 4.px, 6.px, colors.shadow)
//            }
//            backgroundColor = colors.surface
//            transform = if (isHovered) translateY(-5) else translateY(0)
//            transition = "transform 0.3s ease, box-shadow 0.3s ease".transition()
//            cursor = Cursor.pointer
//            position = Position.relative
//            height = 280.px
//            slideUpAnimation(duration = 0.8.s, delay = (0.2 + (index-1) * 0.1).s)
//        }
//
//        // Image
//        img {
//            src = work.image
//            alt = "Work sample $index"
//            css {
//                width = 100.pct
//                height = 200.px
//                objectFit = ObjectFit.scaleDown
//                transform = if (isHovered) scale(1.05) else scale(1.0)
//                transition = "transform 0.4s ease".transition()
//            }
//        }
//
//        // Static title bar (always visible)
//        div {
//            css {
//                padding = 20.px
//                backgroundColor = colors.primary
//            }
//            h3 {
//                css {
//                    margin = Margin(0.px, 0.px, 10.px, 0.px)
//                    fontSize = 20.px
//                    fontWeight = integer(700)
//                    color = colors.text
//                }
//                +"Project ${work.projectName}"
//            }
//
//            p {
//                css {
//                    margin = 0.px
//                    fontWeight = integer(600)
//                    color = colors.text
//                }
//                +work.projectType
//            }
//        }
//
//        // Detail panel that slides up from bottom
//        div {
//            css {
//                position = Position.absolute
//                bottom = if (isHovered) 0.px else (-200).px
//                left = 0.px
//                right = 0.px
//                backgroundColor = colors.surface
//                padding = 20.px
//                boxShadow = BoxShadow(0.px, (-4).px, 12.px, colors.shadow)
//                transition = "bottom 0.4s ease".transition()
//                zIndex = integer(10)
//            }
//
//            p {
//                css {
//                    margin = Margin(0.px, 0.px, 20.px, 0.px)
//                    fontSize = 14.px
//                    color = colors.textSecondary
//                    lineHeight = number(1.6)
//                }
//                +"Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Blanditiis Dolorem Harum Dolorum Debitis."
//            }
//
//            // Button container
//            div {
//                css {
//                    display = Display.flex
//                    gap = 15.px
//                    alignItems = AlignItems.center
//                }
//
//                button {
//                    css {
//                        display = Display.flex
//                        alignItems = AlignItems.center
//                        gap = 8.px
//                        padding = Padding(10.px, 20.px)
//                        borderRadius = 6.px
//                        border = None.none
//                        backgroundColor = colors.text
//                        color = colors.surface
//                        cursor = Cursor.pointer
//                        fontSize = 14.px
//                        fontWeight = integer(500)
//                        transition = "all 0.3s ease".transition()
//
//                        hover {
//                            transform = scale(1.05)
//                            boxShadow = BoxShadow(0.px, 4.px, 12.px, colors.shadow)
//                        }
//                    }
//                    +"👁 View"
//                }
//
//                button {
//                    css {
//                        display = Display.flex
//                        alignItems = AlignItems.center
//                        gap = 8.px
//                        padding = Padding(10.px, 20.px)
//                        borderRadius = 6.px
//                        border = None.none
//                        backgroundColor = colors.text
//                        color = colors.surface
//                        cursor = Cursor.pointer
//                        fontSize = 14.px
//                        fontWeight = integer(500)
//                        transition = "all 0.3s ease".transition()
//
//                        hover {
//                            transform = scale(1.05)
//                            boxShadow = BoxShadow(0.px, 4.px, 12.px, colors.shadow)
//                        }
//                    }
//                    +"</> Code"
//                }
//            }
//        }
//    }
//}
