package component.state

data class LoginState(
    val email: String = "",
    val password: String = "",
    val rememberMe: Boolean = false
)