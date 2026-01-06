package styles

import kotlinx.browser.document
import org.w3c.dom.HTMLStyleElement

fun injectGlobalStyles() {
    // Check if styles already injected
    if (document.getElementById("global-theme-styles") != null) return

    val styleElement = document.createElement("style") as HTMLStyleElement
    styleElement.id = "global-theme-styles"
    styleElement.textContent = """
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        body.light-theme {
            background-color: #f8fafc;
            color: #1e293b;
        }
        
        body.dark-theme {
            background-color: #0f172a;
            color: #f1f5f9;
        }
        
        html, body {
            height: 100%;
            width: 100%;
            scroll-behavior: smooth;
        }
        
        #root {
            height: 100%;
            width: 100%;
        }
        
         /* Light theme (default) */
        body, body.light-theme {
            background-color: #f8fafc;
            color: #1e293b;
            font-family: 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        /* Dark theme */
        body.dark-theme {
            background-color: #0f172a !important;
            color: #f1f5f9 !important;
        }
        
        /* Ensure all containers inherit background */
        body.dark-theme * {
            border-color: #334155;
        }
        
        /*    Global Animations Section */
        @keyframes bounceGlow {
             0%, 100% {
                transform: translateX(-50%) translateY(0);
                opacity: 0.9;
            }
            50% {
                transform: translateX(-50%) translateY(8px);
                 opacity: 1;
            }
        }

        /* smooth fade-in utility */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
    """.trimIndent()

    document.head?.appendChild(styleElement)
}