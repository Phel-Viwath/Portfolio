package component

import emotion.react.css
import model.Education
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import react.useState
import styles.animation.slideUpAnimation
import styles.color.ThemeColorsPalette
import util.transition
import util.translateY
import web.cssom.*

fun ChildrenBuilder.eduItem(
    education: Education,
    colors: ThemeColorsPalette,
    index: Int,
    isVisible: Boolean = false,
    action: (String) -> Unit
) {

    var isHovered by useState(false)

    div {
        onClick = { action(education.id) }
        onMouseOver = { isHovered = true }
        onMouseLeave = { isHovered = false }
        css {
            backgroundColor = colors.surface
            borderRadius = 12.px
            transition = "transform 0.3s ease, box-shadow 0.3s ease".transition()
            boxShadow = BoxShadow(0.px, 4.px, 10.px, colors.shadow)
            border = Border(1.px, LineStyle.solid, colors.border)
            slideUpAnimation(duration = 0.4.s, delay = (0.2 + index * 0.1).s, isVisible = isVisible)
            cursor = Cursor.pointer
            display = Display.flex
            overflow = Overflow.hidden

            hover {
                transform = translateY(-4)
                boxShadow = BoxShadow(0.px, 8.px, 20.px, colors.shadow)
            }

            media(MediaQuery("(max-width: 768px)")) {
                borderRadius = 10.px
            }
        }

        // main content
        div {
            css {
                padding = Padding(16.px, 20.px)
                flexGrow = number(1.0)
                transition = "padding-right 0.3s ease".transition()
                if (isHovered) { paddingRight = 0.px }
            }
            // Top row: 3-part row (Logo | School + Major/GPA | Year)
            div {
                css {
                    display = Display.flex
                    justifyContent = JustifyContent.spaceBetween
                    alignItems = AlignItems.center
                    margin = Margin(0.px, 0.px, 8.px, 0.px)
                    gap = 16.px

                    media(MediaQuery("(max-width: 768px)")) {
                        flexDirection = FlexDirection.column
                        gap = 12.px
                    }
                }

                // School logo image
                img {
                    src = education.schoolLogo
                    alt = "School logo"
                    css {
                        width = 120.px
                        height = 120.px
                        borderRadius = 999.px
                        objectFit = ObjectFit.cover
                        boxShadow = BoxShadow(0.px, 3.px, 8.px, colors.shadow)
                        border = Border(1.px, LineStyle.solid, colors.border)
                        flexShrink = number(0.0)

                        media(MediaQuery("(max-width: 768px)")) {
                            width = 80.px
                            height = 80.px
                        }
                    }
                }

                // Middle: School name (top) + Major or GPA (bottom)
                div {
                    css {
                        display = Display.flex
                        flexDirection = FlexDirection.column
                        alignItems = AlignItems.flexStart
                        flexGrow = number(1.0)

                        media(MediaQuery("(max-width: 768px)")) {
                            alignItems = AlignItems.start
                            marginTop = 4.px
                            justifySelf = JustifySelf.center
                        }
                    }

                    h3 {
                        css {
                            margin = 0.px
                            color = colors.text
                            fontSize = 18.px
                            fontWeight = integer(700)

                            media(MediaQuery("(max-width: 768px)")) {
                                fontSize = 16.px
                                textAlign = TextAlign.center
                            }
                        }
                        +education.school
                    }

                    education.major?.let{ major ->
                        p {
                            css {
                                margin = Margin(4.px, 0.px, 0.px, 0.px)
                                color = colors.textSecondary
                                fontSize = 14.px
                                fontWeight = integer(500)
                            }
                            +"Major: $major"
                        }
                    }

                    education.gpa?.let{ gpa ->
                        p {
                            css {
                                margin = Margin(4.px, 0.px, 0.px, 0.px)
                                color = colors.textSecondary
                                fontSize = 14.px
                                fontWeight = integer(500)
                            }
                            +"GPA: $gpa"
                        }
                    }

                }

                // Right: Year (period), aligned end
                p {
                    css {
                        marginRight = if (isHovered) 8.px else 0.px
                        color = colors.textSecondary
                        fontSize = 14.px
                        fontWeight = integer(600)
                        textAlign = TextAlign.right
                        minWidth = 80.px

                        media(MediaQuery("(max-width: 768px)")) {
                            textAlign = TextAlign.center
                            justifySelf = JustifySelf.center
                            alignSelf = AlignSelf.center
                            fontSize = 13.px
                        }
                    }
                    +education.period
                }
            }// end of three part
        }
    }
}