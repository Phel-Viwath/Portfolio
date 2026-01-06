package model

data class ProjectDetails(
    val fullDescription: String? = null,
    val techStack: Map<String, List<String>> = emptyMap(),
    val features: List<Feature> = emptyList()
)