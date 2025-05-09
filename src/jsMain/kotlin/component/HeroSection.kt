package component

import csstype.*
import emotion.react.css
import js.core.jso
import kotlinx.browser.document
import react.ChildrenBuilder
import react.dom.html.ReactHTML.a
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.section
import react.dom.html.ReactHTML.span
import util.fadeInAnimation
import util.slideInLeftAnimation
import util.slideInRightAnimation
import util.slideUpAnimation

fun ChildrenBuilder.heroSection(name: String){


    section {
        id = "home"
        css {
            display = Display.flex
            justifyContent = JustifyContent.spaceBetween
            alignItems = AlignItems.center
            minHeight = "calc(100vh - 120px)".unsafeCast<MinHeight>()
            padding = Padding(60.px, 0.px)
        }

        // Left content
        div {
            id = "home_text"
            css {
                maxWidth = 500.px
                slideInLeftAnimation(duration = 0.8.s)
            }
            h1 {
                css {
                    fontSize = 48.px
                    margin = 0.px
                    color = Color("#1e293b")
                }
                +"Hi,"
            }

            h1 {
                css {
                    fontSize = 48.px
                    margin = Margin(10.px, 0.px)
                    color = Color("#1e293b")
                }
                +"I'm "
                span {
                    css {
                        color = Color("#4169e1")
                    }
                    +name
                }
            }

            h2 {
                css {
                    fontSize = 36.px
                    margin = Margin(10.px, 0.px, 20.px, 0.px)
                    color = Color("#1e293b")
                }
                +"Android Developer"
            }

            a {
                href = "#contact"
                css {
                    display = Display.inlineBlock
                    padding = Padding(12.px, 30.px)
                    backgroundColor = Color("#4169e1")
                    color = Color("white")
                    borderRadius = 8.px
                    textDecoration = None.none
                    fontWeight = "600".unsafeCast<FontWeight>()
                    fontSize = 16.px
                    marginTop = 20.px
                    transition = "all 0.3s ease".unsafeCast<Transition>()
                }
                onClick = { event ->
                    event.preventDefault()
                    val contactSection = document.getElementById("contact")
                    contactSection?.asDynamic().scrollIntoView(jso {
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
            css {
                width = 400.px
                height = 400.px
                backgroundColor = Color("#4169e1")
                borderRadius = 50.pct
                overflow = Overflow.hidden
                display = Display.flex
                justifyContent = JustifyContent.center
                alignItems = AlignItems.flexEnd
                slideInRightAnimation(duration = 0.8.s)
            }
            img {
                src = "assets/profile_pic.png"
                alt = "Profile photo"
                css {
                    width = 350.px
                    height = Auto.auto
                }
            }
        }
    }
}
