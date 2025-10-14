package styles.animation

import csstype.PropertiesBuilder
import util.transition
import util.translateY
import web.cssom.Opacity
import web.cssom.Transform
import web.cssom.pct

fun PropertiesBuilder.hoverAnimation(
    isHovered: Boolean
) {
    // Use a proper transform string for non-hover state. "translateY(100%)" moves it out of view relative to its height.
    transform = if (isHovered) "translateY(0)".unsafeCast<Transform>() else "translateY(100%)".unsafeCast<Transform>()
    opacity = if (isHovered) 1.unsafeCast<Opacity>() else 0.unsafeCast<Opacity>()
    transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.6s ease".transition()
    asDynamic().willChange = "transform, opacity"
}
