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
