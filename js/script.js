// Handle to the Form
const orderForm = document.querySelector('form')
// Add a submit event listener
orderForm.addEventListener('submit', (e) => {
    // Handle to the div element where we will display list of errors
    const showErrors = document.querySelector('#showErrors')
    // Declare an array to be used for an error bucket
    const errorBucket = []
    // Handle to the submit button
    const submitBtn = document.querySelector('#submit')
    // Disable the button while the form is being validated
    submitBtn.disabled = true

    // Handle to any error elements that have the error class set
    const errors = document.querySelectorAll('.error')
    // Iterate through each element and remove the error class and add the hide class
    errors.forEach((element) => {
        element.classList.remove("error")
        element.classList.add("hide")
    })

    // Handle to First Name Input
    let firstName = document.querySelector('#firstName')
    let errorFirstName = document.querySelector('#errorFirstName')

    // Handle to Last Name Input
    let lastName = document.querySelector('#lastName')
    let errorLastName = document.querySelector('#errorLastName')

    // Handle to Address Input
    let address = document.querySelector('#address')
    let errorAddress = document.querySelector('#errorAddress')

    // Handle to City Input
    let city = document.querySelector('#city')
    let errorCity = document.querySelector('#errorCity')

    // Handle to State Selection
    let state = document.querySelector('#state')
    let errorState = document.querySelector('#errorState')

    // Handle to Products Input
    let products = document.querySelector('#products')
    let errorProducts = document.querySelector('#errorProducts')

    // Handle to Quantity
    let qty = document.querySelector('#qty')
    let errorQty = document.querySelector('#errorQty')
    // 

    // Handle to Terms
    let terms = document.querySelector('#terms')
    let errorTerms = document.querySelector('#errorTerms')
    // 

    // Check each field values 
    if (firstName.value.trim() == '') {
        errorBucket.push([firstName, errorFirstName, "Please fill in a First Name."])
    }
    if (lastName.value.trim() == '') {
        errorBucket.push([lastName, errorLastName, "Please fill in a Last Name."])
    }
    if (address.value == '') {
        errorBucket.push([address, errorAddress, "Please fill in an Address."])
    }
    if (city.value == '') {
        errorBucket.push([city, errorCity, "Please fill in an City."])
    }
    if (state.value == '-') {
        errorBucket.push([state, errorState, "Please select a State."])
    }

    if (products.value == '-') {
        errorBucket.push([products, errorProducts, "Please select a Product."])
    }

    if (qty.value == '') {
        errorBucket.push([qty, errorQty, "Please fill in a Quantity."])
    }

    if (terms.checked == '') {
        errorBucket.push([terms, errorTerms, "Please agree with our terms."])
    }

    // If error bucket has elements
    if (errorBucket.length > 0) {
        // Prevent the form from being submitted
        e.preventDefault()
        // Clear out any previous display of error bucket li's
        showErrors.innerHTML = ''
        // Create a new ul element
        const ul = document.createElement('ul')
        // Append it to the showErrors
        showErrors.appendChild(ul)


        // Then add the error class
        errorBucket.forEach((element) => {
            // First remove the CSS hide class
            element[1].classList.remove("hide")
            // Iterate through the error bucket
            element[1].classList.add('error')
            // Now create li elements to show each error
            let li = document.createElement('li')
            li.innerText = element[2]
            showErrors.appendChild(li)
        })

        // Set the focus to the first field. The one in element 0
        errorBucket[0][0].focus()

        // Re-enable the submit button
        submitBtn.disabled = false
    }
})
