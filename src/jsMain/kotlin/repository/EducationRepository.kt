package repository

import model.Education

class EducationRepository {
    private val education: List<Education> = listOf(
        Education(
            school = "Svay Rieng University",
            major = "Computer Science",
            period = "2020-2024",
            gpa = "3.74"
        ),
        Education(
            school = "BunRany HunSen High School",
            major = "",
            period = "2014-2020",
            gpa = ""
        ),
    )

    fun getEducation(): List<Education> = education
}