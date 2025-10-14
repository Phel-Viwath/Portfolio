package styles.animation

import csstype.PropertiesBuilder
import util.toOpacity
import web.cssom.AnimationDelay
import web.cssom.AnimationDuration
import web.cssom.Transform
import web.cssom.Transition
import web.cssom.ms
import web.cssom.pct
import web.cssom.s

fun PropertiesBuilder.slideInRightAnimation(
    duration: AnimationDuration = 1.s,
    delay: AnimationDelay = 0.ms,
    isVisible: Boolean = false
) {
    if (!isVisible) {
        opacity = 0.pct.toOpacity()
        transform = "translateX(30px)".unsafeCast<Transform>()
    } else {
        opacity = 100.pct.toOpacity()
        transform = "translateX(0)".unsafeCast<Transform>()
    }
    transition = "opacity $duration ease-out $delay, transform $duration ease-out $delay".unsafeCast<Transition>()
}