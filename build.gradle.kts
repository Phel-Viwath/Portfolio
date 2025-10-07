plugins {
    kotlin("multiplatform") version "2.1.20"
    kotlin("plugin.serialization") version "2.1.20"
}

repositories {
    mavenCentral()
}

kotlin {
    js(IR) {
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
            binaries.executable()
            webpackTask {
                mainOutputFileName = "main.js"
            }
            runTask {
                mainOutputFileName = "main.js"
            }
        }
    }

    sourceSets {
        jsMain{
            dependencies {
                implementation(npm("react-toastify", "11.0.2")) // <-- latest stable at the moment
                implementation(kotlin("stdlib-js"))

                implementation("org.jetbrains.kotlin-wrappers:kotlin-react:2025.5.8-19.1.0")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:2025.5.8-19.1.0")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-router-dom:2025.1.6-6.28.0")

                implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion:2025.3.26")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-csstype:2025.5.8-3.1.3")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-web:2025.5.8")

                runtimeOnly("org.jetbrains.kotlin:kotlinx-atomicfu-runtime:2.1.21")
            }
        }
    }

}

tasks.register("dev") {
    group = "application"
    description = "Run Kotlin/JS browser development server"
    dependsOn("jsBrowserDevelopmentRun")
}
