package pages

import component.login
import csstype.*
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.router.useNavigate
import styles.Colors

val LoginPage = FC<Props> {
    val navigate = useNavigate()

    val handleLogin = { email: String, password: String ->
        console.log("Login attempt with: $email, $password")
        // In a real application, you would call your authentication service here
        // For demo purposes, we'll just navigate to a dashboard
        navigate("/dashboard")
    }

    div {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = AlignItems.center
            justifyContent = JustifyContent.center
            width = 100.pct
            height = 100.vh
            backgroundColor = Colors.backgroundGradientStart
            background = "linear-gradient(135deg, ${Colors.backgroundGradientStart}, ${Colors.backgroundGradientEnd})".unsafeCast<Background>()
        }

        div {
            css {
                display = Display.flex
                flexDirection = FlexDirection.column
                alignItems = AlignItems.center
                marginBottom = 20.px
            }

            h2 {
                css {
                    color = Colors.primary
                    marginBottom = 10.px
                }
                +"Welcome Back"
            }
        }

        login(handleLogin)
    }
}
