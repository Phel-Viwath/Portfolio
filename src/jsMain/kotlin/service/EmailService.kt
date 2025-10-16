package service

import config.EmailConfig
import kotlinx.browser.window
import kotlin.js.json

object EmailService {

    private const val PUBLIC_KEY = EmailConfig.PUBLIC_KEY
    private const val SERVICE_ID = EmailConfig.SERVICE_ID
    private const val TEMPLATE_ID = EmailConfig.TEMPLATE_ID

    /**
     * Initialize EmailJS
     * Call this in Main.kt before rendering the app
     */
    fun init() {
        console.log("${PUBLIC_KEY}, ${SERVICE_ID}, $TEMPLATE_ID")
        val emailJs = window.asDynamic().emailjs
        if (emailJs != null) {
            emailJs.init(PUBLIC_KEY)
            console.log("EmailJS initialized successfully")
        } else {
            console.error("EmailJS not loaded. Please include the EmailJS script in your HTML.")
        }
    }

    /**
     * Send email using EmailJS
     * @param name Sender's name
     * @param email Sender's email
     * @param message Message content
     * @param onSuccess Callback for successful sending
     * @param onError Callback for error
     */
    fun sendEmail(
        name: String,
        email: String,
        message: String,
        onSuccess: () -> Unit = {},
        onError: (String) -> Unit = {}
    ) {
        // Validate inputs
        if (name.isBlank() || email.isBlank() || message.isBlank()) {
            onError("All fields are required")
            return
        }

        if (!isValidEmail(email)) {
            onError("Please enter a valid email address")
            return
        }

        val emailJs = window.asDynamic().emailjs

        if (emailJs == null) {
            onError("Email service not initialized")
            return
        }

        val templateParams = json(
            "name" to name,
            "email" to email,
            "message" to message,
            "to_name" to "Phel Viwath"
        )

        emailJs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(
                onFulfilled = { _: dynamic ->
                    console.log("Email sent successfully")
                    onSuccess()
                },
                onRejected = { error: dynamic ->
                    console.error("Email send failed:", error)
                    onError("Failed to send message. Please try again.")
                }
            )
    }

    private fun isValidEmail(email: String): Boolean {
        val emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$".toRegex()
        return emailRegex.matches(email)
    }
}
