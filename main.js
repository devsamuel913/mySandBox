//selectors
const camelizeButton = document.querySelector('.camelizeButton');
const camelizeInput = document.querySelector('.camelizeInput');


const addRangeButton = document.querySelector('.addRangeButton');



//event listeners
camelizeButton.addEventListener("click", camelize);

addRangeButton.addEventListener("click",filterRange);



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



function filterRange() {
    let arrInput = prompt("Please enter a series of numbers divided by commas:");
    let aInput = parseInt(prompt("Please enter the number a:"));
    let bInput = parseInt(prompt("Please enter the number b:"));
    
    // Split input string into an array of strings, then convert each item to an integer
    let arr = arrInput.split(',').map(item => parseInt(item));
    
    // Filter the array to include only numbers between aInput and bInput (inclusive)
    let filteredArr = arr.filter(item => item >= aInput && item <= bInput);
    
    // Join the filtered array into a string with commas and show the result
    let result = filteredArr.join(',');
    alert("The result is: " + result);
}
