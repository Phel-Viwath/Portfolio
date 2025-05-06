package component

import component.event.LoginEvent
import component.state.LoginState
import csstype.*
import emotion.react.css
import react.ChildrenBuilder
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.dom.html.ReactHTML.label
import react.useState
import styles.Colors
import web.html.ButtonType
import web.html.InputType


external interface LoginProps : Props {
    var onLogin: (email: String, password: String) -> Unit
}

// --- New: Define Login() as a FUNCTION ---
fun ChildrenBuilder.login(
    onLogin: (String, String) -> Unit
) {
    var state by useState(LoginState())

    fun onEvent(event: LoginEvent) {
        state = when (event) {
            is LoginEvent.EmailChanged -> state.copy(email = event.email)
            is LoginEvent.PasswordChanged -> state.copy(password = event.password)
            is LoginEvent.RememberMeChanged -> state.copy(rememberMe = event.checked)
            is LoginEvent.Submit -> {
                onLogin(state.email, state.password)
                state // unchanged after submit
            }
        }
    }

    formContainer {
        div {
            css {
                backgroundColor = Colors.white
                padding = Padding(24.px, 24.px)
                borderRadius = 8.px
                width = 300.px
                boxShadow = BoxShadow(0.px, 4.px, 12.px, rgba(0, 0, 0, 0.1))
            }

            div {
                css {
                    alignSelf = AlignSelf.center
                    fontSize = 48.px
                    marginBottom = 24.px
                }
                +"👤"
            }

            inputField(
                type = InputType.email,
                placeholder = "Email",
                value = state.email,
                onValueChange = { onEvent(LoginEvent.EmailChanged(it)) }
            )

            inputField(
                type = InputType.password,
                placeholder = "Password",
                value = state.password,
                onValueChange = { onEvent(LoginEvent.PasswordChanged(it)) }
            )

            div {
                label {
                    input {
                        type = InputType.checkbox
                        checked = state.rememberMe
                        onChange = { event ->
                            onEvent(LoginEvent.RememberMeChanged(event.target.checked))
                        }
                    }
                    +" Remember Me"
                }
            }

            customButton(
                text = "Login",
                color = Colors.primary,
                type = ButtonType.submit
            ) {
                onEvent(LoginEvent.Submit)
            }
        }
    }
}