package styles

import styled.injectGlobal

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
            background-color: #f8fafc;
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

        /* Animation classes */
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Scroll-triggered animation base classes */
        .fade-in, .slide-up, .slide-in-left, .slide-in-right {
            opacity: 0;
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        /* Animation classes when visible */
        .fade-in.visible {
            opacity: 1;
        }

        .slide-up.visible {
            opacity: 1;
            transform: translateY(0) !important;
        }

        .slide-in-left.visible {
            opacity: 1;
            transform: translateX(0) !important;
        }

        .slide-in-right.visible {
            opacity: 1;
            transform: translateX(0) !important;
        }

        /* Initial states for animations */
        .slide-up:not(.visible) {
            transform: translateY(30px);
        }

        .slide-in-left:not(.visible) {
            transform: translateX(-30px);
        }

        .slide-in-right:not(.visible) {
            transform: translateX(30px);
        }

        /* Legacy animation classes */
        .animate-fade-in {
            animation-name: fadeIn;
            animation-duration: 1s;
            animation-fill-mode: both;
        }

        .animate-slide-up {
            animation-name: slideUp;
            animation-duration: 1s;
            animation-fill-mode: both;
        }

        .animate-slide-in-left {
            animation-name: slideInLeft;
            animation-duration: 1s;
            animation-fill-mode: both;
        }

        .animate-slide-in-right {
            animation-name: slideInRight;
            animation-duration: 1s;
            animation-fill-mode: both;
        }

        /* Animation keyframes */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        /* Animation delays */
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
    """.trimIndent())
}
