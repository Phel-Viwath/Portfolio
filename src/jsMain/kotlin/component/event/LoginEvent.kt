package component.event

sealed interface LoginEvent {
    data class EmailChanged(val email: String) : LoginEvent
    data class PasswordChanged(val password: String) : LoginEvent
    data class RememberMeChanged(val checked: Boolean) : LoginEvent
    object Submit : LoginEvent
}
