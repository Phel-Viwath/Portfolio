package pages

import emotion.react.css
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.h2
import react.dom.html.ReactHTML.img
import react.dom.html.ReactHTML.p
import react.router.useParams
import repository.MyWorksRepository
import web.cssom.*

fun workDetailPage() = FC<Props> {

    val param = useParams()
    val id = param["id"]

    // Get work details from repository
    val repository = MyWorksRepository()
    val works = repository.getMyWorks()
    val work = id?.toIntOrNull()?.let { index -> works.getOrNull(index) }
    console.log("id: $id")
    console.log(work)

    // Find the work by ID (index) or use default values if not found

    // Default values if work is not found
    val projectName = work?.projectName ?: "Work not found"
    val projectType = work?.projectType ?: "Unknown"
    val image = work?.image ?: "https://via.placeholder.com/350x200"

    div {
        css {
            padding = Padding(50.px, 20.px)
            textAlign = TextAlign.center
        }
        h2 {
            +"Work Detail"
        }
        p {
            +"You are viewing: $projectName"
        }
        img {
            src = image
            alt = projectName
            css {
                maxWidth = 400.px
                width = 100.pct
                marginTop = 20.px
            }
        }
        p {
            +"Role: $projectType"
        }
    }

}
