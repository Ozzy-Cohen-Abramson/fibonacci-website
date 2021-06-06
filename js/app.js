const fibIsBtn = document.getElementById('is-btn');

function calculateFibonacci() {
    
    // Get the elements
    
    const inputNum = document.getElementById('calc-input'); // gets X
    const inputNumVal = inputNum.value;
    const fibNum = document.getElementById('calc-end'); // gets Y
    
    let n1 = 0; // 1st number
    let n2 = 1; // 2nd number
    let nextNum; //the number of times the fibonacci siquence repeats it self

    for (i=1 ; i<=inputNumVal ; i++ ) {
        // console.log(n1);
        nextNum = n1 + n2 ; // adding the numbers.
        n1 = n2; //changing the value of the first number
        n2 = nextNum; // getting the next number in the siquence
    }
    
    fibNum.innerText = n1; // returns Y
    console.log(n1); // printing Y
    
    inputNum.value = "";
}

fibIsBtn.addEventListener('click' , calculateFibonacci);

