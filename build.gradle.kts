plugins {
    kotlin("multiplatform") version "2.1.20"
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
                implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.8.0")
                implementation(kotlin("stdlib-js"))
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react:18.2.0-pre.467")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:18.2.0-pre.467")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-router-dom:6.3.0-pre.346")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-styled:5.3.6-pre.510")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion:11.10.5-pre.467")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-csstype:3.1.1-pre.467")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-web:0.0.1-pre.467")

                // Coroutines & serialization
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.6.4")
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.4.1")
            }
        }
    }

}
