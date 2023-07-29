// Remainder calculator

var btn = document.getElementById('btn');

btn.addEventListener('click', function(divideNumber, byNumber){
    var divideNumber = parseInt(document.getElementById('divideNumber').value);
    var byNumber = parseInt(document.getElementById('byNumber').value);
    var divide = divideNumber / byNumber;
    // Show if it is not a number
    if (isNaN(divideNumber) || isNaN(byNumber)) {
        alert('Enter a valid number');
        return;
    }
    
    // Function argument and defines a variable
    var remainder = myFunction(divideNumber, byNumber);
    
    // Output
    var print = document.getElementById('print')
    print.style.background = '#000';
    print.innerHTML = `The number you divide is: <span style="color:#3cffd4">${divideNumber}</span> <br>
    The number you divide by is: <span style="color:#3cffd4">${byNumber}</span>, <br> 
    and divide result is: <span style="color:#3cffd4">${divide.toFixed(2)}</span>. <br>
    So remainder is: <span style="color:#ffeb3b">${remainder}</span>`;
});
// This function returns the calculation
function myFunction (divideNumber, byNumber) {
    return divideNumber % byNumber;
};


