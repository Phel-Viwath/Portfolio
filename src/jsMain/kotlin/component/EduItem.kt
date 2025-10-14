package component

import emotion.react.css
import model.Education
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import styles.animation.slideUpAnimation
import styles.color.ThemeColorsPalette
import util.transition
import web.cssom.*

fun ChildrenBuilder.eduItem(
    education: Education,
    colors: ThemeColorsPalette,
    index: Int,
    isVisible: Boolean = false,
) {
    div {
        css {
            backgroundColor = colors.surface
            borderRadius = 12.px
            transition = "transform 0.3s ease, box-shadow 0.3s ease".transition()
            padding = Padding(16.px, 20.px)
            boxShadow = BoxShadow(0.px, 4.px, 10.px, colors.shadow)
            border = Border(1.px, LineStyle.solid, colors.border)
            slideUpAnimation(duration = 0.4.s, delay = (0.2 + index * 0.1).s, isVisible = isVisible)
        }

        // Top row: 3-part row (Logo | School + Major/GPA | Year)
        div {
            css {
                display = Display.flex
                justifyContent = JustifyContent.spaceBetween
                alignItems = AlignItems.center
                margin = Margin(0.px, 0.px, 8.px, 0.px)
                gap = 16.px
            }

            // Left: School logo image
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
                }
            }

            // Middle: School name (top) + Major or GPA (bottom)
            div {
                css {
                    display = Display.flex
                    flexDirection = FlexDirection.column
                    alignItems = AlignItems.flexStart
                    flexGrow = number(1.0)
                }

                h3 {
                    css {
                        margin = 0.px
                        color = colors.text
                        fontSize = 18.px
                        fontWeight = integer(700)
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
                    margin = 0.px
                    color = colors.textSecondary
                    fontSize = 14.px
                    fontWeight = integer(600)
                    textAlign = TextAlign.right
                    minWidth = 80.px
                }
                +education.period
            }
        }

    }
}