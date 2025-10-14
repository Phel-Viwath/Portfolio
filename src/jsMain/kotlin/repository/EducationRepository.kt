package repository

import model.Education

class EducationRepository {
    private val education: List<Education> = listOf(
        Education(
            schoolLogo = "assets/sru_logo.jpg",
            school = "Svay Rieng University",
            major = "Computer Science",
            period = "2020-2024",
            gpa = "3.74"
        ),
        Education(
            schoolLogo = "assets/chantrea_logo.jpg",
            school = "Bun Rany Hun Sen Chantrea High School",
            major = null,
            period = "2014-2020",
            gpa = null
        ),
    )

    fun getEducation(): List<Education> = education
}