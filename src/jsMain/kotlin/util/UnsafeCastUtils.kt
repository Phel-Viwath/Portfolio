package util

import org.w3c.dom.Element
import web.cssom.*
import react.dom.client.createRoot as reactCreateRoot
import web.dom.Element as WebElement

fun createRoot(container: Element) = reactCreateRoot(container.unsafeCast<WebElement>())

fun Percentage.toOpacity() = this.unsafeCast<Opacity>()
fun String.className() = this.unsafeCast<ClassName>()
fun String.transition() = this.unsafeCast<Transition>()
fun String.fontWeight() = this.unsafeCast<FontWeight>()
fun String.width() = this.unsafeCast<Width>()
fun String.rgba() = this.unsafeCast<Color>()
fun String.gradientShadow() = this.unsafeCast<BoxShadow>()
fun String.willChange() = this.unsafeCast<WillChange>()

fun translateY(px: Int): Transform{
    return "translateY(${px}px)".unsafeCast<Transform>()
}