import react.FC
import react.Props
import router.AppRouter
import styled.injectGlobal
import styles.Typography

// Global styles
fun globalStyles() {
    injectGlobal("""
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: ${Typography.BASE_FONT_FAMILY};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        html, body {
            height: 100%;
            width: 100%;
        }
        
        #root {
            height: 100%;
            width: 100%;
        }
    """.trimIndent())
}

val App = FC<Props> {
    AppRouter {}
}