package repository

import model.MyWork

class MyWorksRepository {
    private val myWorks: List<MyWork> = listOf(
        MyWork("https://via.placeholder.com/350x200", "SRU Library Management", "Back-end development"),
        MyWork("https://via.placeholder.com/350x200", "SRU Library Management", "Android development"),
        MyWork("https://via.placeholder.com/350x200", "SRU Library Management", "Android development"),
        MyWork("https://via.placeholder.com/350x200", "SRU Library Management", "Android development"),
        MyWork("https://via.placeholder.com/350x200", "SRU Library Management", "Android development"),
    )

    fun getMyWorks() : List<MyWork>{
        return myWorks
    }
}