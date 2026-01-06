package service

@JsName("gtag")
external fun gtag(vararg args: Any)

fun trackPageView(path: String) {
    gtag("config", "G-K5N9DVJ3FQ", js("{ page_path: path }"))
}