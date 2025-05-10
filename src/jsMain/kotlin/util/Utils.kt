package util

import csstype.ClassName
import csstype.FontWeight
import csstype.Opacity
import csstype.Percentage
import csstype.Transition
import org.w3c.dom.Element
import react.dom.client.createRoot as reactCreateRoot
import web.dom.Element as WebElement

fun createRoot(container: Element) = reactCreateRoot(container.unsafeCast<WebElement>())

fun Percentage.toOpacity() = this.unsafeCast<Opacity>()
fun String.className() = this.unsafeCast<ClassName>()
fun String.transition() = this.unsafeCast<Transition>()
fun String.fontWeight() = this.unsafeCast<FontWeight>()