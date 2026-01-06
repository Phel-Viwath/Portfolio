package model

data class Education(
    val id: String,
    val schoolLogo: String,
    val school: String,
    val major: String?,
    val period: String,
    val gpa: String?
)
