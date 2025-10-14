package styles.animation

import csstype.PropertiesBuilder
import util.toOpacity
import web.cssom.AnimationDelay
import web.cssom.AnimationDuration
import web.cssom.Transition
import web.cssom.ms
import web.cssom.pct
import web.cssom.s

fun PropertiesBuilder.fadeInAnimation(
    duration: AnimationDuration = 1.s,
    delay: AnimationDelay = 0.ms,
    isVisible: Boolean = false
) {
    opacity = if (!isVisible) {
        0.pct.toOpacity()
    } else {
        100.pct.toOpacity()
    }
    transition = "opacity $duration ease-out $delay".unsafeCast<Transition>()
}