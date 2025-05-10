package component

import csstype.*
import emotion.react.css
import kotlinx.browser.window
import react.ChildrenBuilder
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.form
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.section
import react.dom.html.ReactHTML.strong
import react.dom.html.ReactHTML.textarea
import styles.fadeInAnimation
import styles.slideInLeftAnimation
import styles.slideInRightAnimation
import styles.useInViewport
import web.html.ButtonType
import web.html.InputType

fun ChildrenBuilder.contactSection(
    email: String,
    phone: String,
    address: String,
    contactPlatform: Map<SocialUrl, PathD>
){
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
                color = Color("#1e293b")
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
                        color = Color("#1e293b")
                        marginBottom = 20.px
                    }
                    +"Get in Touch"
                }

                p {
                    css {
                        color = Color("#64748b")
                        lineHeight = 1.6.em
                        marginBottom = 20.px
                    }
                    +"I'm currently available for freelance work. Feel free to reach out if you have a project in mind or just want to say hello."
                }

                div {
                    css {
                        marginBottom = 15.px
                    }
                    strong {
                        +"Email: "
                    }
                    +email
                }

                div {
                    css {
                        marginBottom = 15.px
                    }
                    strong {
                        +"Phone: "
                    }
                    +phone
                }

                div {
                    css {
                        marginBottom = 15.px
                    }
                    strong {
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
                    backgroundColor = Color("white")
                    padding = 30.px
                    borderRadius = 12.px
                    boxShadow = BoxShadow(0.px, 4.px, 6.px, rgba(0, 0, 0, 0.05))
                    slideInRightAnimation(duration = 0.8.s, delay = 0.2.s, isVisible = rightColumnVisible)
                }

                form {
                    div {
                        css {
                            marginBottom = 20.px
                        }
                        label {
                            htmlFor = "name"
                            css {
                                display = Display.block
                                marginBottom = 5.px
                                color = Color("#64748b")
                            }
                            +"Name"
                        }
                        input {
                            type = InputType.text
                            id = "name"
                            css {
                                width = 100.pct
                                padding = 10.px
                                borderRadius = 6.px
                                border = Border(1.px, LineStyle.solid, Color("#e2e8f0"))
                                fontSize = 16.px
                            }
                        }
                    }

                    div {
                        css {
                            marginBottom = 20.px
                        }
                        label {
                            htmlFor = "email"
                            css {
                                display = Display.block
                                marginBottom = 5.px
                                color = Color("#64748b")
                            }
                            +"Email"
                        }
                        input {
                            type = InputType.email
                            id = "email"
                            css {
                                width = 100.pct
                                padding = 10.px
                                borderRadius = 6.px
                                border = Border(1.px, LineStyle.solid, Color("#e2e8f0"))
                                fontSize = 16.px
                            }
                        }
                    }

                    div {
                        css {
                            marginBottom = 20.px
                        }
                        label {
                            htmlFor = "message"
                            css {
                                display = Display.block
                                marginBottom = 5.px
                                color = Color("#64748b")
                            }
                            +"Message"
                        }
                        textarea {
                            id = "message"
                            css {
                                width = 100.pct
                                padding = 10.px
                                borderRadius = 6.px
                                border = Border(1.px, LineStyle.solid, Color("#e2e8f0"))
                                fontSize = 16.px
                                minHeight = 150.px
                                resize = Resize.vertical
                            }
                        }
                    }

                    button {
                        type = ButtonType.submit
                        css {
                            width = 100.pct
                            backgroundColor = Color("#4169e1")
                            color = Color("white")
                            padding = Padding(12.px, 30.px)
                            borderRadius = 8.px
                            border = None.none
                            fontWeight = "600".unsafeCast<FontWeight>()
                            fontSize = 16.px
                            cursor = Cursor.pointer
                            transition = "background-color 0.3s ease".unsafeCast<Transition>()
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
