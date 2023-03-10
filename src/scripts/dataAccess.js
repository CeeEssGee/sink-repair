const applicationState = {
    requests: []
}

const API = "http://localhost:8088" // assigns the website where the data is to a variable (API)
// fetch the data
export const fetchRequests = () => { 
    return fetch(`${API}/requests`) // returns a promise to tell you when it returns the information from the website
        .then(response => response.json()) // parses the .json encoded string data
        .then(
            (serviceRequests) => { // returns the data converted from a string into an array
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

// exports the array
export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}

const mainContainer = document.querySelector("#container")

// POST method means that we want the API to create something new
    // GET - please give me this resource
    // POST - please create something new
    // PUT - please modify an existing resource
    // DELETE - please delete an existing resource
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(
            () => { //We do NOT want to put a variable name in the parentheses
               // Update your sendRequest() function's fetch call to dispatch the custom event after the POST operation has been completed.
               mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
}

// The function whose responsiblity it is to initiate the fetch request for DELETE must have the primary key sent to it as an argument. Import it on the Requests.js module
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}