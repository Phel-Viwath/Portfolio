package util

import org.w3c.dom.Element
import csstype.*
import web.cssom.*
import react.dom.client.createRoot as reactCreateRoot
import web.dom.Element as WebElement

fun createRoot(container: Element) = reactCreateRoot(container.unsafeCast<WebElement>())

fun Percentage.toOpacity() = this.unsafeCast<Opacity>()
fun String.className() = this.unsafeCast<ClassName>()
fun String.transition() = this.unsafeCast<Transition>()
fun String.fontWeight() = this.unsafeCast<FontWeight>()