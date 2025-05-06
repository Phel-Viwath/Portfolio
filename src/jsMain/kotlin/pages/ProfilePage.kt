package pages

import component.customButton
import csstype.*
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.p
import react.router.useNavigate
import styles.Colors

val ProfilePage = FC<Props> {
    val navigate = useNavigate()

    div {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = AlignItems.center
            justifyContent = JustifyContent.center
            height = 100.vh
            padding = 20.px
            backgroundColor = Color("#f5f5f5")
        }

        h1 {
            css {
                color = Colors.primary
                marginBottom = 20.px
            }
            +"User Profile"
        }

        div {
            css {
                display = Display.flex
                flexDirection = FlexDirection.column
                alignItems = AlignItems.center
                padding = 20.px
                backgroundColor = Colors.white
                borderRadius = 8.px
                boxShadow = BoxShadow(0.px, 4.px, 12.px, rgba(0, 0, 0, 0.1))
                marginBottom = 20.px
                width = 320.px
            }

            div {
                css {
                    width = 100.px
                    height = 100.px
                    borderRadius = 50.pct
                    backgroundColor = Colors.avatarBackground
                    marginBottom = 16.px
                    display = Display.flex
                    alignItems = AlignItems.center
                    justifyContent = JustifyContent.center
                }

                // Avatar Silhouette
                div {
                    css {
                        width = 60.px
                        height = 60.px
                        backgroundColor = Colors.avatarSilhouette
                        maskImage = url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>")
                        maskSize = MaskSize.cover
                        maskPosition = "center".unsafeCast<MaskPosition>()
                    }
                }
            }

            h3 {
                css {
                    marginBottom = 8.px
                    color = Colors.textColor
                }
                +"John Doe"
            }

            p {
                css {
                    marginBottom = 8.px
                    color = Colors.textColor
                    fontSize = 14.px
                }
                +"john.doe@example.com"
            }
        }

        div {
            css {
                display = Display.flex
                gap = 10.px
            }

            customButton(
                "Back to Dashboard",
                color = Colors.primary,
            ){
                navigate("/dashboard")
            }

            customButton(
                "Logout",
                color = Color("#6c757d"),
            ){
                navigate("/")
            }
        }
    }
}
