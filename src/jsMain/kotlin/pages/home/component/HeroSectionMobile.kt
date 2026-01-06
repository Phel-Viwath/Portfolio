package pages.home.component

import emotion.react.css
import js.objects.unsafeJso
import kotlinx.browser.document
import react.ChildrenBuilder
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.section
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg
import react.dom.svg.StrokeLinecap
import react.dom.svg.StrokeLinejoin
import styles.animation.fadeInAnimation
import styles.animation.slideUpAnimation
import styles.animation.useInViewport
import util.fontWeight
import util.useThemeColors
import web.cssom.AlignItems
import web.cssom.AnimationIterationCount
import web.cssom.AnimationName
import web.cssom.AnimationTimingFunction
import web.cssom.Color
import web.cssom.Cursor
import web.cssom.Display
import web.cssom.Filter
import web.cssom.FlexDirection
import web.cssom.JustifyContent
import web.cssom.Margin
import web.cssom.MinHeight
import web.cssom.Padding
import web.cssom.Position
import web.cssom.TextAlign
import web.cssom.TextTransform
import web.cssom.Transform
import web.cssom.Transition
import web.cssom.em
import web.cssom.number
import web.cssom.pct
import web.cssom.px
import web.cssom.s
import kotlin.js.unsafeCast

fun ChildrenBuilder.heroSectionMobile(name: String) {

    val colors = useThemeColors()
    val (heroRef, isHeroVisible) = useInViewport()

    section {
        ref = heroRef
        id = "home"
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            justifyContent = JustifyContent.center
            alignItems = AlignItems.center
            minHeight = "calc(100vh - 120px)".unsafeCast<MinHeight>()
            padding = Padding(40.px, 20.px)
            textAlign = TextAlign.center
            position = Position.relative
        }

        // Welcome text
        p {
            css {
                fontSize = 16.px
                color = colors.textSecondary
                marginBottom = 10.px
                letterSpacing = 2.px
                textTransform = TextTransform.uppercase
                fadeInAnimation(duration = 0.8.s, delay = 0.2.s, isVisible = isHeroVisible)
            }
            +"Welcome to my portfolio"
        }

        // Name
        h1 {
            css {
                fontSize = 42.px
                margin = Margin(10.px, 0.px)
                color = colors.text
                fontWeight = "700".fontWeight()
                slideUpAnimation(duration = 0.8.s, delay = 0.4.s, isVisible = isHeroVisible)
            }
            +name
        }

        // Role/Title
        h2 {
            css {
                fontSize = 20.px
                margin = Margin(15.px, 0.px, 0.px, 0.px)
                color = colors.green
                fontWeight = "600".fontWeight()
                lineHeight = 1.5.em
                slideUpAnimation(duration = 0.8.s, delay = 0.6.s, isVisible = isHeroVisible)
            }
            +"Android & Spring Boot Developer"
        }

        // Decorative line or accent
        div {
            css {
                width = 60.px
                height = 4.px
                backgroundColor = colors.green
                marginTop = 25.px
                borderRadius = 2.px
                fadeInAnimation(duration = 0.8.s, delay = 0.8.s, isVisible = isHeroVisible)
            }
        }

        // Animated down arrow only
        div {
            css {
                position = Position.absolute
                bottom = 40.px
                left = 50.pct
                transform = "translateX(-50%)".unsafeCast<Transform>()
                cursor = Cursor.pointer
                fadeInAnimation(duration = 0.8.s, delay = 1.s, isVisible = isHeroVisible)

                // Bouncing glowing animation
                animationName = "bounceGlow".unsafeCast<AnimationName>()
                animationDuration = 2.s
                animationIterationCount = "infinite".unsafeCast<AnimationIterationCount>()
                animationTimingFunction = AnimationTimingFunction.easeInOut

                transition = "opacity 0.3s ease".unsafeCast<Transition>()
                opacity = number(0.9)

                hover {
                    opacity = number(1.0)
                }
            }

            onClick = {
                val aboutSection = document.getElementById("about")
                aboutSection?.asDynamic().scrollIntoView(unsafeJso {
                    behavior = "smooth"
                    block = "start"
                })
            }

            // Down arrow SVG
            svg {
                width = 36.0
                height = 36.0
                viewBox = "0 0 24 24"
                fill = "none"
                stroke = colors.green.toString()
                strokeWidth = 2.0
                strokeLinecap = StrokeLinecap.round
                strokeLinejoin = StrokeLinejoin.round
                css {
                    filter = "drop-shadow(0 0 6px ${colors.primary})".unsafeCast<Filter>()
                    transition = "opacity 0.3s ease, transform 0.3s ease".unsafeCast<Transition>()
                    hover {
                        transform = "translateY(4px)".unsafeCast<Transform>()
                        opacity = number(1.0)
                    }
                }

                path {
                    d = "M12 5v14M19 12l-7 7-7-7"
                }
            }
        }
    }
}