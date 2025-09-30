@file:JsModule("react-toastify")
@file:JsNonModule
package util

import react.ComponentType
import react.Props

//external val ReactToastify: dynamic

external fun toast(message: String, option: dynamic = definedExternally): dynamic

external val ToastContainer: ComponentType<Props>