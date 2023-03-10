import { getRequests } from "./dataAccess.js" // imports the array of requests 

export const Requests = () => { // to retrieve the requests array from dataAccess.js
    const requests = getRequests() // set as a variable so we can use the data 
    let convertRequestToListElement = (request) => { // create a string from the data incoporating list tags
        return `
        <li id="request--${request.id}" value=${request}>
        ${request.description}
        </li>
        `
    }
    // creates the rest of the html incorporating .map(function that creates the list of strings).join("") within unordered list tags. We've incorporated the <li> tags in the function, so no need to include anything within the .join("")
    let html = `
        <ul id="request_list_descriptions">
            ${
                requests.map(convertRequestToListElement).join("") //
            }
        </ul>
    `

    return html
}
















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
