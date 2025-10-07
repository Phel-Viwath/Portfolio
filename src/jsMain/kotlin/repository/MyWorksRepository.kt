package repository

import model.MyWork

class MyWorksRepository {
    private val myWorks: List<MyWork> = listOf(
        MyWork(
            "assets/monkey_avatar.png",
            "SRU Library Management",
            "Back-end development",
            "Design and develop database and API.",
            "https://github.com/Phel-Viwath/sru_library_ms.git"
        ),
        MyWork(
            "assets/monkey_avatar.png",
            "SRU Library Management",
            "Android development",
            "Integrate API with Android via Retrofit and use feature like Biometric, QR Reader, File Upload.",
            "https://github.com/Phel-Viwath/sru_lib_android.git"
        ),
        MyWork(
            "assets/monkey_avatar.png",
            "Music Player",
            "Android development",
            "Create music player with Jetpack compose UI.",
            "https://github.com/Phel-Viwath/Music_Player.git"
        ),
        MyWork(
            "assets/monkey_avatar.png",
            "Portfolio",
            "Front-End Development",
            "Using Kotlin Multiplatform (Kotlin/Js) to build the project with React Js Library.",
            "https://github.com/Phel-Viwath/Music_Player.git"
        ),
    )

    fun getMyWorks() : List<MyWork>{
        return myWorks
    }
}