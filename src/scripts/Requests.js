import { getRequests, deleteRequest } from "./dataAccess.js" // imports the array of requests 

export const Requests = () => { // to retrieve the requests array from dataAccess.js
    const requests = getRequests() // set as a variable so we can use the data 
    let convertRequestToListElement = (request) => { // create a string from the data incoporating list tags
        return `
        <li id="cust-request--${request.id}" value=${request}>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
        </li>
        `
    }
    // creates the rest of the html incorporating .map(function that creates the list of strings).join("") within unordered list tags. We've incorporated the <li> tags in the function, so no need to include anything within the .join("")
    let html = `
        <ul id="list_descriptions">
            ${
                requests.map(convertRequestToListElement).join("") //
            }
        </ul>
    `

    return html
}


// Now add an event listener to the main container. When the user clicks on any of the delete buttons, invoke the deleteRequest() function you just made above. Make sure you pass the id of the service request to the deleteRequest() function as an argument.
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})















// DIFFERENT WAYS TO DO THE SAME FUNCTION AS Requests
        // export const Requests = () => {
        //     const requests = getRequests()
        //     let description = request => request.description
        //     let html = `
        //         <ul><li>
        //             ${
        //                 requests.map(description).join("</li><li>")
        //             }
        //         </li></ul>
        //     `
        //     return html
        // }

        // export const Requests = () => {
        //     const requests = getRequests()
        //     let html = `
        //         <ul><li>
        //             ${
        //                 requests.map(request => request.description).join("</li><li>")
        //             }
        //         </li></ul>
        //     `
        //     return html
        // }

    // AND ANOTHER ONE
        // export const Requests = () => {
        //     const requests = getRequests()
        //     let descriptions = requests.map(request => request.description) // 
        //     let html = `
        //         <ul><li>
        //             ${descriptions.join(`</li><li>`)}
        //         </li></ul>
        //     `
        //     return html
        // }
