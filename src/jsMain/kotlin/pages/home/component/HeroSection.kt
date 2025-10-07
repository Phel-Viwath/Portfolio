package pages.home.component

import emotion.react.css
import js.objects.unsafeJso
import kotlinx.browser.document
import react.ChildrenBuilder
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.section
import react.dom.html.ReactHTML.span
import styles.animation.slideInLeftAnimation
import styles.animation.slideInRightAnimation
import styles.animation.useInViewport
import util.fontWeight
import util.transition
import util.useThemeColors
import web.cssom.*

fun ChildrenBuilder.heroSection(name: String){

    val colors = useThemeColors() // theme color

    val (leftContentRef, leftContentVisible) = useInViewport()
    val (profileRef, profileVisible) = useInViewport()

    section {
        id = "home"
        css {
            display = Display.flex
            justifyContent = JustifyContent.spaceBetween
            alignItems = AlignItems.center
            minHeight = "calc(100vh - 120px)".unsafeCast<MinHeight>()
            padding = Padding(0.px, 0.px)
        }

        // Left content
        div {
            id = "home_text"
            ref = leftContentRef
            css {
                maxWidth = 500.px
                slideInLeftAnimation(duration = 0.8.s, isVisible = leftContentVisible)
            }
            h1 {
                css {
                    fontSize = 48.px
                    margin = 0.px
                    color = colors.text
                }
                +"Hi,"
            }

            h1 {
                css {
                    fontSize = 48.px
                    margin = Margin(10.px, 0.px)
                    color = colors.text
                }
                +"I'm "
                span {
                    css {
                        color = colors.primary
                    }
                    +name
                }
            }

            h2 {
                css {
                    fontSize = 36.px
                    margin = Margin(10.px, 0.px, 20.px, 0.px)
                    color = colors.text
                }
                +"Android and Spring Boot Developer"
            }

            a {
                href = "#contact"
                css {
                    display = Display.inlineBlock
                    padding = Padding(12.px, 30.px)
                    backgroundColor = colors.primary
                    color = Color("white")
                    borderRadius = 8.px
                    textDecoration = None.none
                    fontWeight = "600".fontWeight()
                    fontSize = 16.px
                    marginTop = 20.px
                    transition = "all 0.3s ease".transition()
                    hover {
                        backgroundColor = colors.primaryHover
                    }
                }
                onClick = { event ->
                    event.preventDefault()
                    val contactSection = document.getElementById("contact")
                    contactSection?.asDynamic().scrollIntoView(unsafeJso {
                        behavior = "smooth"
                        block = "center"
                    })

                }
                +"Contact"
            }
        }

        // Profile image
        div {
            id = "home_profile"
            ref = profileRef
            css {
                width = 400.px
                height = 400.px
                backgroundColor = colors.primary
                borderRadius = 50.pct
                overflow = Overflow.hidden
                display = Display.flex
                justifyContent = JustifyContent.center
                alignItems = AlignItems.flexEnd
                slideInRightAnimation(duration = 0.8.s, isVisible = profileVisible)
            }
            img {
                src = "assets/monkey_avatar.png"
                alt = "Profile photo"
                css {
                    width = 550.px
                    height = 400.px
                }
            }
        }
    }
}