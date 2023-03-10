import { sendRequest } from "./dataAccess.js"

// exports a function that creates the HTML input fields to allow us to collect information from customers
export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceDescription">Description</label>
            <input type="text" name="serviceDescription" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceBudget">Budget</label>
            <input type="number" name="serviceBudget" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

// Add the following event listener to the ServiceForm module. Read each line of code, discuss with your teammates, and see if you can understand what everything is doing. Make sure you write down any questions you have about the code for the review with the instruction team.

// assigning the mainContainer variable to the document.querySelector("#container")
// returns the first element within the document that matches the id of container
const mainContainer = document.querySelector("#container")

// within the element with the id of container, we are looking for a click event for the target id of submitRequest, which is our Submit Request Button - when a user clicks on the Submit Request Button, the next steps will be performed
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})
