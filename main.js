//selectors
const camelizeButton = document.querySelector('.camelizeButton');
const camelizeInput = document.querySelector('.camelizeInput');

//event listeners
camelizeButton.addEventListener("click", camelize);

//functions
function camelize() {
    let camelizeInputValue = camelizeInput.value; // Get the input value when the button is clicked

    if (!camelizeInputValue.includes('-')) {
        alert("Your text doesn't include dashes, please try again");
    } else {
        let arr = camelizeInputValue.split('-');

        // Capitalize each part after the first one
        for (let i = 1; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }

        // Join the array back into a string
        let arrTwo = arr.join('');

        // Alert the result
        alert(arrTwo);
    }
}
