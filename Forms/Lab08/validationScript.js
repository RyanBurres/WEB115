    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message


let inputElement = document.getElementById('inputField');
let inputValue;
// Gets input value
inputElement.addEventListener('blur', function(){
    inputValue = inputElement.value;
})
// alphanumeric check
let regex = /^[a-zA-Z0-9]*$/;
// checks if input is alphanumeric if form is attempting to submit
let form = document.getElementById('myForm');
form.addEventListener('submit', function(){
    if (regex.test(inputValue)){
        alert('Valid input, form submitted');
    }
    else{
        alert('Invalid input: Must be alphanumeric');
        event.preventDefault();

    }
})


