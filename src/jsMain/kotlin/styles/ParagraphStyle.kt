package styles


import csstype.PropertiesBuilder
import styles.Typography.paragraphFontSize
import util.toOpacity
import web.cssom.*

fun PropertiesBuilder.paragraphStyles() {
    fontSize = paragraphFontSize
    lineHeight = 1.6.em
    color = Color("#64748b")
    maxWidth = 800.px
    marginTop = 20.px
    opacity = 0.pct.toOpacity()
    transform = "translateY(30px)".unsafeCast<Transform>()
}

//fun paragraphStyles(): PropertiesBuilder.() -> Unit = {
//    fontSize = paragraphFontSize
//    lineHeight = 1.6.em
//    color = Color("#64748b")
//    maxWidth = 800.px
//    marginTop = 20.px
//    opacity = 0.pct.toOpacity()
//    transform = "translateY(30px)".unsafeCast<Transform>()
//}
