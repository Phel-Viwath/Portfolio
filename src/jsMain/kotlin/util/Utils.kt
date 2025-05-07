package util

import web.dom.Element
import react.dom.client.createRoot as reactCreateRoot


fun createRoot(container: org.w3c.dom.Element) = reactCreateRoot(container.unsafeCast<Element>())

