package styles.animation

import emotion.css.keyframes
import web.cssom.Color
import web.cssom.NamedColor
import web.cssom.pct

val typingAnimation = keyframes {
    0.pct {
        width = 0.pct
    }
    50.pct {
        width = 100.pct
    }
    100.pct {
        width = 100.pct
    }
}

val blinkAnimation = keyframes {
    0.pct { borderRightColor = Color.currentcolor }
    50.pct { borderRightColor = NamedColor.transparent }
    100.pct { borderRightColor = Color.currentcolor }
}