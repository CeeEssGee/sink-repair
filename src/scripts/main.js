import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

// ORIGINAL CODE, REPLACED PER THE INSTRUCTIONS ON ROW 4, COLUMN 1
// import { SinkRepair } from "./SinkRepair.js"


// const mainContainer = document.querySelector("#container")

// const render = () => {
//     mainContainer.innerHTML = SinkRepair()
// }

// render()
