package pages

import csstype.*
import csstype.FlexDirection
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.router.useNavigate
import styles.Colors

val DashboardPage = FC<Props> {
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
            +"Dashboard"
        }

        div {
            css {
                display = Display.flex
                gap = 10.px
            }

            div {
                css {
                    padding = Padding(10.px, 20.px)
                    backgroundColor = Colors.primary
                    color = Colors.white
                    borderRadius = 4.px
                    cursor = Cursor.pointer
                    textAlign = TextAlign.center
                }
                onClick = {
                    navigate("/profile")
                }
                +"View Profile"
            }

            div {
                css {
                    padding = Padding(10.px, 20.px)
                    backgroundColor = Color("#6c757d")
                    color = Colors.white
                    borderRadius = 4.px
                    cursor = Cursor.pointer
                    textAlign = TextAlign.center
                }
                onClick = {
                    navigate("/")
                }
                +"Logout"
            }
        }
    }
}
