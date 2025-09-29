package pages.home.component

import component.inputField
import emotion.react.css
import kotlinx.browser.window
import react.ChildrenBuilder
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.section
import react.dom.html.ReactHTML.strong
import react.dom.html.ReactHTML.textarea
import styles.Typography.buttonFontSize
import styles.animation.fadeInAnimation
import styles.animation.slideInLeftAnimation
import styles.animation.slideInRightAnimation
import styles.animation.useInViewport
import util.fontWeight
import util.transition
import util.useThemeColors
import web.cssom.*
import web.html.ButtonType
import web.html.InputType

fun ChildrenBuilder.contactSection(
    email: String,
    phone: String,
    address: String,
    contactPlatform: Map<SocialUrl, PathD>
){
    // theme color
    val colors = useThemeColors()

    // Use the hook to detect if section is in viewport
    val (titleRef, titleVisible) = useInViewport()
    val (leftColumnRef, leftColumnVisible) = useInViewport()
    val (rightColumnRef, rightColumnVisible) = useInViewport()

    section {
        id = "contact"
        css {
            padding = Padding(top =100.px, bottom = 0.px, horizontal = 0.px)
        }

        h2 {
            ref = titleRef
            css {
                fontSize = 36.px
                marginBottom = 30.px
                color = colors.text
                fadeInAnimation(duration = 0.8.s, delay = 0.2.s, isVisible = titleVisible)
            }
            +"Contact Me"
        }

        div {
            css {
                display = Display.grid
                gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))".unsafeCast<GridTemplateTracks>()
                gap = 30.px
            }

            // Contact info
            div {
                ref = leftColumnRef
                css {
                    slideInLeftAnimation(duration = 0.8.s, delay = 0.2.s, isVisible = leftColumnVisible)
                }
                h3 {
                    css {
                        fontSize = 20.px
                        color = colors.text
                        marginBottom = 20.px
                    }
                    +"Get in Touch"
                }

                p {
                    css {
                        color = colors.textSecondary
                        lineHeight = 1.6.em
                        marginBottom = 20.px
                    }
                    +"I'm currently available. Feel free to reach out if you have a project in mind or just want to say hello."
                }

                div {
                    css {
                        marginBottom = 15.px
                        color = colors.textSecondary
                    }
                    strong {
                        css { color = colors.text }
                        +"Email: "
                    }
                    +email
                }

                div {
                    css {
                        marginBottom = 15.px
                        color = colors.textSecondary
                    }
                    strong {
                        css { color = colors.text }
                        +"Phone: "
                    }
                    +phone
                }

                div {
                    css {
                        marginBottom = 15.px
                        color = colors.textSecondary
                    }
                    strong {
                        css { color = colors.text }
                        +"Location: "
                    }
                    +address
                }
                // contact LinkedIn, GitHub, Telegram ...
                socialMediaIcons(contactPlatform)
            }

            // Contact form
            div {
                ref = rightColumnRef
                css {
                    backgroundColor = colors.surface
                    padding = 30.px
                    borderRadius = 12.px
                    boxShadow = BoxShadow(0.px, 4.px, 6.px, colors.shadow)
                    border = Border(1.px, LineStyle.solid, colors.border)
                    slideInRightAnimation(duration = 0.8.s, delay = 0.2.s, isVisible = rightColumnVisible)
                }

                form {
                    inputField(
                        displayName = "Name",
                        useFor = "name",
                        iId = "name",
                        inputType = InputType.text,
                        bottomMargin = 20.px,
                        colors = colors
                    )
                    inputField(
                        displayName = "Email",
                        useFor = "email",
                        iId = "email",
                        inputType = InputType.email,
                        bottomMargin = 20.px,
                        colors = colors
                    )
                    div {
                        css {
                            marginBottom = 20.px
                        }
                        label {
                            htmlFor = "message"
                            css {
                                display = Display.block
                                marginBottom = 5.px
                                color = colors.textSecondary
                            }
                            +"Message"
                        }
                        textarea {
                            id = "message"
                            css {
                                width = 100.pct
                                padding = 10.px
                                borderRadius = 6.px
                                border = Border(1.px, LineStyle.solid, colors.border)
                                fontSize = 16.px
                                minHeight = 150.px
                                resize = Resize.vertical
                                color = colors.text
                                backgroundColor = colors.background
                            }
                        }
                    }

                    button {
                        type = ButtonType.submit
                        css {
                            width = 100.pct
                            backgroundColor = colors.primary
                            color = colors.text
                            padding = Padding(12.px, 30.px)
                            borderRadius = 8.px
                            border = None.none
                            fontWeight = "600".fontWeight()
                            fontSize = buttonFontSize
                            cursor = Cursor.pointer
                            transition = "background-color 0.3s ease".transition()

                            hover {
                                backgroundColor = colors.primaryHover
                            }
                        }
                        onClick = { event ->
                            event.preventDefault()
                            window.alert("Message sent! (This is a demo)")
                        }
                        +"Send Message"
                    }
                }
            }
        }
    }
}
