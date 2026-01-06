package pages.work

import component.linkButton
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.ReactHTML.button
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.h3
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import react.dom.html.ReactHTML.section
import react.dom.html.ReactHTML.span
import react.dom.svg.ReactSVG.path
import react.dom.svg.ReactSVG.svg
import react.router.useNavigate
import react.router.useParams
import repository.MyWorksRepository
import styles.animation.slideInLeftAnimation
import styles.animation.slideInRightAnimation
import styles.animation.slideUpAnimation
import styles.animation.useInViewport
import util.*
import web.cssom.*

fun workDetailPage() = FC<Props> {

    val navigate = useNavigate()
    val param = useParams()
    val id = param["id"]
    val colors = useThemeColors()

    // Animation hooks
    val (headerRef, _) = useInViewport()
    val (imageRef, imageVisible) = useInViewport()
    val (detailsRef, detailsVisible) = useInViewport()
    val (techRef, techVisible) = useInViewport()
    val (featuresRef, featuresVisible) = useInViewport()

    // Get work details from the repository
    val repository = MyWorksRepository()
    val works = repository.getMyWorks()
    val work = id?.toIntOrNull()?.let { index -> works.getOrNull(index) }

    // If work not found, show the error
    if (work == null) {
        div {
            css {
                minHeight = "100vh".unsafeCast<MinHeight>()
                display = Display.flex
                flexDirection = FlexDirection.column
                alignItems = AlignItems.center
                justifyContent = JustifyContent.center
                padding = 40.px
            }
            h1 {
                css {
                    color = colors.text
                    fontSize = 32.px
                    marginBottom = 20.px
                }
                +"Project Not Found"
            }
            button {
                css {
                    padding = Padding(12.px, 30.px)
                    backgroundColor = colors.primary
                    color = Color("white")
                    border = None.none
                    borderRadius = 8.px
                    fontSize = 16.px
                    fontWeight = "600".fontWeight()
                    cursor = Cursor.pointer
                    transition = "all 0.3s ease".transition()
                    hover {
                        backgroundColor = colors.primaryHover
                        transform = translateY((-2))
                    }
                }
                onClick = { navigate(-1) }
                +"Back to Home"
            }
        }
        return@FC
    }

    // Get project-specific details
    val projectDetails = repository.getProjectDetails(id.toIntOrNull() ?: 0)

    // Main container
    div {
        css {
            minHeight = "100vh".unsafeCast<MinHeight>()
            backgroundColor = colors.background
        }

        // Header with back button
        div {
            ref = headerRef
            css {
                position = Position.sticky
                top = 0.px
                backgroundColor = colors.surface
                boxShadow = BoxShadow(0.px, 2.px, 10.px, colors.shadow)
                zIndex = integer(100)
                padding = Padding(14.px, 40.px)
                display = Display.flex
                justifyContent = JustifyContent.spaceBetween
                alignItems = AlignItems.center
            }

            button {
                css {
                    display = Display.flex
                    alignItems = AlignItems.center
                    gap = 8.px
                    padding = Padding(10.px, 20.px)
                    backgroundColor = colors.surface
                    color = colors.text
                    border = None.none
                    borderRadius = 8.px
                    fontSize = 14.px
                    fontWeight = "500".fontWeight()
                    cursor = Cursor.pointer
                    transition = "all 0.3s ease".transition()
                    hover {
                        backgroundColor = colors.primary
                        color = Color("white")
                        borderColor = colors.primary
                        transform = translateX((-5))
                    }

                    media(MediaQuery("(max-width: 768px)")) {
                        padding = Padding(8.px, 12.px)
                        fontSize = 12.px
                    }

                }
                onClick = { navigate(-1) }

                // Arrow icon
                svg {
                    width = 20.0
                    height = 20.0
                    viewBox = "0 0 24 24"
                    fill = "none"
                    stroke = "currentColor"
                    strokeWidth = 2.0

                    path {
                        d = "M19 12H5M12 19l-7-7 7-7"
                    }
                }
                span {
                    css {
                        media(MediaQuery("(max-width: 768px)")) {
                            display = None.none
                        }
                    }
                    +"Back"
                }
            }

            div {
                css {
                    display = Display.flex
                    gap = 15.px
                }

                linkButton(
                    ref = work.codeLink,
                    text = "</> View Code",
                    textColor = colors.surface,
                    background = colors.text,
                    hoverBackground = colors.primary
                )

                work.viewLing?.let { link ->

                    linkButton(
                        ref = link,
                        text = "🚀 Live Demo",
                        textColor = colors.surface,
                        background = colors.text,
                        hoverBackground = colors.primary
                    )
                }
            }
        }

        // Content wrapper
        div {
            css {
                maxWidth = 1200.px
                margin = "0px auto".unsafeCast<Margin>()
                padding = Padding(30.px, 40.px)
            }

            // Hero section with image
            section {
                ref = imageRef
                css {
                    marginBottom = 60.px
                    slideUpAnimation(duration = 0.8.s, delay = 0.2.s, isVisible = imageVisible)
                }

                h1 {
                    css {
                        fontSize = 48.px
                        fontWeight = "700".fontWeight()
                        color = colors.text
                        marginBottom = 10.px
                    }
                    +work.projectName
                }

                p {
                    css {
                        fontSize = 20.px
                        color = colors.primary
                        fontWeight = "600".fontWeight()
                        marginBottom = 30.px
                    }
                    +work.projectType
                }

                div {
                    css {
                        borderRadius = 16.px
                        overflow = Overflow.hidden
                        boxShadow = BoxShadow(0.px, 10.px, 40.px, colors.shadow)
                    }

                    img {
                        src = work.image
                        alt = work.projectName
                        css {
                            width = 100.pct
                            height = Auto.auto
                            maxHeight = 500.px
                            objectFit = ObjectFit.cover
                            display = Display.block
                        }
                    }
                }
            }

            // Project Overview
            section {
                ref = detailsRef
                css {
                    marginBottom = 60.px
                    slideInLeftAnimation(duration = 0.8.s, delay = 0.3.s, isVisible = detailsVisible)
                }

                h2 {
                    css {
                        fontSize = 32.px
                        fontWeight = "700".fontWeight()
                        color = colors.text
                        marginBottom = 20.px
                    }
                    +"Project Overview"
                }

                p {
                    css {
                        fontSize = 18.px
                        lineHeight = 1.8.em
                        color = colors.textSecondary
                        marginBottom = 30.px
                    }
                    +work.description
                }

                projectDetails.fullDescription?.let { desc ->
                    p {
                        css {
                            fontSize = 16.px
                            lineHeight = 1.8.em
                            color = colors.textSecondary
                        }
                        +desc
                    }
                }
            }

            // Tech Stack
            section {
                ref = techRef
                css {
                    marginBottom = 60.px
                    slideInRightAnimation(duration = 0.8.s, delay = 0.4.s, isVisible = techVisible)
                }

                h2 {
                    css {
                        fontSize = 32.px
                        fontWeight = "700".fontWeight()
                        color = colors.text
                        marginBottom = 30.px
                    }
                    +"Technology Stack"
                }

                div {
                    css {
                        display = Display.grid
                        gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))".unsafeCast<GridTemplateTracks>()
                        gap = 20.px
                    }

                    projectDetails.techStack.forEach { (category, techs) ->
                        div {
                            css {
                                backgroundColor = colors.surface
                                padding = 24.px
                                borderRadius = 12.px
                                border = Border(1.px, LineStyle.solid, colors.border)
                                transition = "all 0.3s ease".transition()
                                hover {
                                    transform = translateY(-5)
                                    boxShadow = BoxShadow(0.px, 8.px, 20.px, colors.shadow)
                                }
                            }

                            h3 {
                                css {
                                    fontSize = 18.px
                                    fontWeight = "600".fontWeight()
                                    color = colors.primary
                                    marginBottom = 15.px
                                }
                                +category
                            }

                            div {
                                css {
                                    display = Display.flex
                                    flexWrap = FlexWrap.wrap
                                    gap = 10.px
                                }

                                techs.forEach { tech ->
                                    span {
                                        css {
                                            padding = Padding(6.px, 12.px)
                                            backgroundColor = colors.background
                                            color = colors.text
                                            borderRadius = 6.px
                                            fontSize = 14.px
                                            fontWeight = "500".fontWeight()
                                            border = Border(1.px, LineStyle.solid, colors.border)
                                        }
                                        +tech
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // Key Features
            if (projectDetails.features.isNotEmpty()) {
                section {
                    ref = featuresRef
                    css {
                        marginBottom = 60.px
                        slideUpAnimation(duration = 0.8.s, delay = 0.5.s, isVisible = featuresVisible)
                    }

                    h2 {
                        css {
                            fontSize = 32.px
                            fontWeight = "700".fontWeight()
                            color = colors.text
                            marginBottom = 30.px
                        }
                        +"Key Features"
                    }

                    div {
                        css {
                            display = Display.grid
                            gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))".unsafeCast<GridTemplateTracks>()
                            gap = 20.px
                        }

                        projectDetails.features.forEachIndexed { index, feature ->
                            div {
                                css {
                                    backgroundColor = colors.surface
                                    padding = 24.px
                                    borderRadius = 12.px
                                    border = Border(1.px, LineStyle.solid, colors.border)
                                    display = Display.flex
                                    gap = 15.px
                                    transition = "all 0.3s ease".transition()
                                    hover {
                                        transform = translateY(-5)
                                        boxShadow = BoxShadow(0.px, 8.px, 20.px, colors.shadow)
                                        borderColor = colors.primary
                                    }
                                }

                                div {
                                    css {
                                        width = 40.px
                                        height = 40.px
                                        borderRadius = 50.pct
                                        backgroundColor = colors.primary
                                        color = Color("white")
                                        display = Display.flex
                                        alignItems = AlignItems.center
                                        justifyContent = JustifyContent.center
                                        fontSize = 18.px
                                        fontWeight = "700".fontWeight()
                                        flexShrink = number(0.0)
                                    }
                                    +"${index + 1}"
                                }

                                div {
                                    css {
                                        flex = number(1.0)
                                    }

                                    h3 {
                                        css {
                                            fontSize = 18.px
                                            fontWeight = "600".fontWeight()
                                            color = colors.text
                                            marginBottom = 8.px
                                        }
                                        +feature.title
                                    }

                                    p {
                                        css {
                                            fontSize = 14.px
                                            lineHeight = 1.6.em
                                            color = colors.textSecondary
                                            margin = 0.px
                                        }
                                        +feature.description
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}