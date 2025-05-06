package component


import csstype.*
import emotion.react.css
import react.ChildrenBuilder
import react.dom.html.ReactHTML.form

fun ChildrenBuilder.formContainer(content: ChildrenBuilder.() -> Unit) {
    form {
        css {
            display = Display.flex
            flexDirection = FlexDirection.column
            alignItems = AlignItems.center
            justifyContent = JustifyContent.center
            width = 100.pct
            height = 100.vh
            background = "linear-gradient(135deg, #6a11cb, #2575fc)".unsafeCast<Background>()
        }
        content()
    }
}
