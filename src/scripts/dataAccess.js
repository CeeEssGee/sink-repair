const applicationState = {
    requests: [], // add this as a place for fetchRequests to store its data
    plumbers: [], // added this as a place for fetchPlumbers to store its data
    completions: []
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

// row9 instructions had fetchRequests, changed it to fetchPlumbers
export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.plumbers = data
            }
        )
}

export const getPlumbers = () => {
    return applicationState.plumbers.map(plumber => ({ ...plumber }))
}

// row9 saveCompletion() - This will perform the POST request to save the completion object to the API
export const saveCompletion = (completion) => {
    const fetchOptions = {
        method: "POST", // tells them that it is a POST
        headers: { // tells them what format the data should is int
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completion)
    }

    return fetch(`${API}/completions`, fetchOptions)
    .then(response => response.json())
    .then(
        () => { //We do NOT want to put a variable name in the parentheses - if you don't need what comes back, you leave the variable blank
           // Update your sendRequest() function's fetch call to dispatch the custom event after the POST operation has been completed.
           mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })

}

// row9 fetchCompletions() - This will retrieve all completion objects from the API
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.completions = data
            }
        )
}

export const getCompletions = () => {
    return applicationState.completions.map(completion => ({ ...completion }))
}

export const getOpenRequests = () => {
    let requests = getRequests()
    let completions = getCompletions()
    let filtered = requests.filter(r => !completions.find(c => parseInt(c.requestId) === r.id))
    return filtered.map(item => ({ ...item }))
}