package model

data class MyWork(
    val image: String,
    val projectName: String,
    val projectType: String,
    val description: String,
    val codeLink: String,
    val viewLing: String? = null
)