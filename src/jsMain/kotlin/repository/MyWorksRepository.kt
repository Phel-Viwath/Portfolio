package repository

import model.Feature
import model.MyWork
import model.ProjectDetails

class MyWorksRepository {
    private val myWorks: List<MyWork> = listOf(
        MyWork(
            "assets/sru_lib_web.png",
            "SRU Library Management",
            "Back-end development",
            "Design and develop database (MySQL) and API using Spring Boot WebFlux.",
            "https://github.com/Phel-Viwath/sru_library_ms.git",
            "https://react-js-inky-three.vercel.app/"
        ),
        MyWork(
            "assets/sru_lib_mobile app.jpg",
            "SRU Library Management",
            "Android development",
            "Integrate API with Android via Retrofit and use feature like Biometric, QR Reader, File Upload using Kotlin",
            "https://github.com/Phel-Viwath/sru_lib_android.git",
            "https://drive.google.com/file/d/1OJ95MDL5LqsO1k_NQJSyvpJbpvgYA_v7/view?usp=drive_link"
        ),
        MyWork(
            "assets/mp_1.jpg",
            "Music Player",
            "Android development",
            "Using Kotlin, Jetpack compose and ExoPlayer to create this Music Player.",
            "https://github.com/Phel-Viwath/Music_Player.git",
            "https://drive.google.com/file/d/1j3fwlEN1NvwMEkx4OzCMF9CBiiu3Z7B-/view?usp=drive_link"
        ),
        MyWork(
            "assets/portfolio_.png",
            "Portfolio",
            "Front-End Development",
            "Using Kotlin Multiplatform (Kotlin/Js) to build the project with React Js Library.",
            "https://github.com/Phel-Viwath/Music_Player.git",
            "https://viwath.vercel.app/"
        ),
    )

    private val projectDetails = mapOf(
        0 to ProjectDetails(
            fullDescription = """
                A comprehensive library management system backend built with Spring Boot WebFlux(Reactor-Coroutines) for reactive programming. 
                This system handles book cataloging, user management, borrowing/returning workflows, and administrative operations. 
                The reactive architecture ensures high scalability and efficient resource utilization, making it suitable for 
                large-scale library operations with concurrent user access.
            """.trimIndent(),
            techStack = mapOf(
                "Backend Framework" to listOf("Spring Boot 3.x", "Spring WebFlux", "Project Reactor"),
                "Database" to listOf("MySQL 8.0", "Spring Data R2DBC"),
                "Security" to listOf("Spring Security", "JWT Authentication", "BCrypt Password Encoding"),
                "API Documentation" to listOf("OpenAPI 3.0", "Swagger UI"),
                "Build Tools" to listOf("Gradle Kotlin DSL", "Docker", "Docker Compose")
            ),
            features = listOf(
                Feature(
                    "Reactive Architecture",
                    "Built with Spring WebFlux for non-blocking, reactive programming ensuring high performance and scalability"
                ),
                Feature(
                    "RESTful API Design",
                    "Well-structured REST endpoints following best practices with proper HTTP methods and status codes"
                ),
                Feature(
                    "Database Design",
                    "Normalized MySQL database schema with proper relationships, indexes, and constraints for data integrity"
                ),
                Feature(
                    "Authentication & Authorization",
                    "JWT-based authentication with role-based access control for secure API endpoints"
                ),
                Feature(
                    "Book Management",
                    "Complete CRUD operations for books including search, filter, and categorization features"
                ),
                Feature(
                    "User Management",
                    "Comprehensive user registration, profile management, and borrowing history tracking"
                ),
                Feature(
                    "Transaction Handling",
                    "Robust book borrowing and returning system with due date tracking and late fee calculations"
                ),
                Feature(
                    "API Documentation",
                    "Interactive Swagger UI documentation for easy API exploration and testing"
                )
            )
        ),
        1 to ProjectDetails(
            fullDescription = """
                A modern Android application that serves as the mobile client for the SRU Library Management System. 
                Built with Kotlin and following MVVM architecture, it provides an intuitive interface for students and staff 
                to interact with the library system. The app integrates cutting-edge Android features like biometric authentication, 
                QR code scanning, and efficient API communication through Retrofit.
            """.trimIndent(),
            techStack = mapOf(
                "Language & Framework" to listOf("Kotlin", "XML", "Material Design 3"),
                "Architecture" to listOf("MVVM", "Clean Architecture", "Repository Pattern"),
                "Networking" to listOf("Retrofit 2", "OkHttp", "Gson Converter"),
                "Async Operations" to listOf("Kotlin Coroutines", "Flow", "StateFlow", "ShareFlow", "LiveData"),
                "Local Storage" to listOf("Room Database", "DataStore", "Encrypted Shared Preferences"),
                "Security" to listOf("Biometric API", "Android Keystore"),
                "Additional Features" to listOf("QR Code Scanner (ZXing)", "CameraX", "File Upload/Download"),
                "Dependency Injection" to listOf("Hilt", "Dagger")
            ),
            features = listOf(
                Feature(
                    "Biometric Authentication",
                    "Secure login using fingerprint or face recognition with fallback to PIN authentication"
                ),
                Feature(
                    "QR Code Scanner",
                    "Fast student card scanning using CameraX and ZXing library for quick borrowing/returning"
                ),
                Feature(
                    "Real-time Updates",
                    "Kotlin Flow for reactive UI updates and efficient state management"
                ),
                Feature(
                    "Search & Filter",
                    "Advanced search with multiple filters, sorting options, and instant results"
                ),
                Feature(
                    "Borrowing History",
                    "Complete transaction history with status tracking and due date reminders"
                )
            )
        ),
        2 to ProjectDetails(
            fullDescription = """
                A feature-rich music player application built entirely with Kotlin and Jetpack Compose. This app provides 
                a smooth and enjoyable music listening experience with a modern, intuitive interface. Powered by ExoPlayer, 
                it handles various audio formats efficiently while offering advanced playback controls and playlist management.
            """.trimIndent(),
            techStack = mapOf(
                "Language & UI" to listOf("Kotlin", "Jetpack Compose", "Material Design 3"),
                "Media Playback" to listOf("ExoPlayer", "Media3", "Audio Focus Management"),
                "Architecture" to listOf("MVVM", "Clean Architecture", "Use Cases"),
                "Async Operations" to listOf("Kotlin Coroutines", "Flow", "StateFlow"),
                "Local Storage" to listOf("Room Database", "DataStore Preferences"),
                "Permissions" to listOf("Storage Access Framework", "MediaStore API"),
                "Dependency Injection" to listOf("Hilt", "Dagger")
            ),
            features = listOf(
                Feature(
                    "ExoPlayer Integration",
                    "Robust audio playback with support for multiple formats (MP3, FLAC, WAV, AAC) and gapless playback"
                ),
                Feature(
                    "Beautiful UI",
                    "Fully built with Jetpack Compose featuring smooth animations and modern design patterns"
                ),
                Feature(
                    "Playlist Management",
                    "Create, edit, and manage custom playlists with drag-and-drop reordering"
                ),
                Feature(
                    "Advanced Controls",
                    "Shuffle, repeat modes, sleep timer, equalizer, and playback speed control"
                ),
                Feature(
                    "Background Playback",
                    "Continue playing music with notification controls even when app is in background"
                ),
                Feature(
                    "Search & Filter",
                    "Quick search across songs, albums, artists with smart filtering options"
                ),
                Feature(
                    "Favorites System",
                    "Mark favorite songs and albums for quick access with persistent storage"
                ),
                Feature(
                    "Audio Visualization",
                    "Dynamic waveform and spectrum visualizer for an immersive experience"
                )
            )
        ),
        3 to ProjectDetails(
            fullDescription = """
                A modern, responsive portfolio website built using Kotlin Multiplatform targeting JavaScript/Web. 
                This project showcases the power of Kotlin/JS with React integration, demonstrating that Kotlin 
                can be used for full-stack development. The site features smooth animations, theme switching, 
                and a contact form with email integration.
            """.trimIndent(),
            techStack = mapOf(
                "Language & Platform" to listOf("Kotlin", "Kotlin/JS", "Kotlin Multiplatform"),
                "UI Framework" to listOf("React", "React Router", "Emotion CSS-in-JS"),
                "Styling" to listOf("CSS-in-JS", "Responsive Design", "CSS Grid & Flexbox"),
                "Animations" to listOf("Custom CSS Animations", "Intersection Observer API"),
                "Email Service" to listOf("EmailJS", "Contact Form Integration"),
                "State Management" to listOf("React Hooks", "Context API", "Local Storage"),
                "Build Tools" to listOf("Gradle", "Webpack", "NPM")
            ),
            features = listOf(
                Feature(
                    "Kotlin/JS with React",
                    "Demonstrates type-safe web development using Kotlin with React library integration"
                ),
                Feature(
                    "Theme Switching",
                    "Light/Dark theme with smooth transitions and persistent preference storage"
                ),
                Feature(
                    "Smooth Animations",
                    "Custom scroll-triggered animations using Intersection Observer for engaging user experience"
                ),
                Feature(
                    "Responsive Design",
                    "Mobile-first approach ensuring perfect display across all device sizes"
                ),
                Feature(
                    "Contact Form",
                    "Integrated EmailJS for serverless email functionality with form validation"
                ),
                Feature(
                    "Project Showcase",
                    "Interactive portfolio grid with hover effects and detailed project pages"
                ),
                Feature(
                    "Skills Visualization",
                    "Animated progress bars showing technology proficiency levels"
                ),
                Feature(
                    "SEO Optimized",
                    "Proper meta tags, semantic HTML, and structured data for better search visibility"
                )
            )
        )
    )

    fun getMyWorks() : List<MyWork>{
        return myWorks
    }

    fun getProjectDetails(index: Int): ProjectDetails = projectDetails[index] ?: ProjectDetails()
}