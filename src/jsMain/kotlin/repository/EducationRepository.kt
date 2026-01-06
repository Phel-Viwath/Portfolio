package repository

import model.Certificate
import model.Education

class EducationRepository {
    private val education: List<Education> = listOf(
        Education(
            id = "sru",
            schoolLogo = "assets/sru_logo.jpg",
            school = "Svay Rieng University",
            major = "Computer Science",
            period = "2020-2024",
            gpa = "3.76"
        ),
        Education(
            id = "chantrea",
            schoolLogo = "assets/chantrea_logo.jpg",
            school = "Bun Rany Hun Sen Chantrea High School",
            major = null,
            period = "2014-2020",
            gpa = null
        ),
    )

    private val certifications: List<Certificate> = listOf(
        Certificate(
            id = "sru",
            name = "Svay Rieng University",
            images = listOf("assets/certificate.jpg", "assets/transcript.jpg")
        ),
        Certificate(
            id = "chantrea",
            name = "Chantrea High School",
            images = listOf("assets/baccII.jpg")
        )
    )

    fun getCertificates(id: String): Certificate? = certifications.find { it.id == id }
    fun getEducation(): List<Education> = education
}