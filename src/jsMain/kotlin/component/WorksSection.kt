package component

import csstype.*
import emotion.react.css
import org.w3c.dom.HTMLElement
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.section

val WorksSection = FC<Props> {
    section {
        id = "works"
        css {
            padding = Padding(100.px, 0.px)
        }

        h2 {
            css {
                fontSize = 36.px
                marginBottom = 30.px
                color = Color("#1e293b")
            }
            +"My Works"
        }

        div {
            css {
                display = Display.grid
                gridTemplateColumns = "repeat(auto-fill, minmax(350px, 1fr))".unsafeCast<GridTemplateTracks>()
                gap = 30.px
            }

            // Portfolio items
            for (i in 1..6) {
                div {
                    css {
                        borderRadius = 12.px
                        overflow = Overflow.hidden
                        boxShadow = BoxShadow(0.px, 4.px, 6.px, rgba(0, 0, 0, 0.05))
                        backgroundColor = Color("white")
                        transition = "transform 0.3s ease".unsafeCast<Transition>()
                        cursor = Cursor.pointer
                    }
                    onMouseOver = { event ->
                        (event.currentTarget as HTMLElement).style.transform = "translateY(-10px)"
                    }
                    onMouseOut = { event ->
                        (event.currentTarget as HTMLElement).style.transform = "translateY(0)"
                    }

                    img {
                        src = "https://via.placeholder.com/350x200"
                        alt = "Work sample $i"
                        css {
                            width = 100.pct
                            height = 200.px
                            objectFit = ObjectFit.cover
                        }
                    }

                    div {
                        css {
                            padding = 20.px
                        }

                        h3 {
                            css {
                                margin = Margin(0.px, 0.px, 10.px, 0.px)
                                fontSize = 18.px
                                color = Color("#1e293b")
                            }
                            +"Project $i"
                        }

                        p {
                            css {
                                margin = 0.px
                                color = Color("#64748b")
                            }
                            +"Web Design & Development"
                        }
                    }
                }
            }
        }
    }
}