// console.log('Hello world')

// take input and print
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim()
    console.log(input)
})*/

// To print last digit of a number
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim()
    console.log(input%10);
})*/

// Basic operation of 2 numbers
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim().split(" ")
    let num1 = parseInt(input[0])
    let num2 = parseInt(input[1])
    console.log(num1 + num2)
    console.log(num1-num2)
    console.log(num1*num2)
    console.log(parseInt(num1/num2))
})*/

// second-to-last digit
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim()
    let num = parseInt(input/10)
    if(input<10){
        console.log("Invalid number")
    }else{
        console.log(num%10)
    }
})*/

// sum of second-to-last digits of 2 numbers
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim().split("\n")
    let num1 = input[0]
    let num2 = input[1]
    if(num1<10 || num2<10){
        console.log("Invalid number");
    }else{
        let digit1 = parseInt(num1/10)%10
        let digit2 = parseInt(num2/10)%10
        console.log(digit1 + digit2)
    }
})*/

// post decimal number
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim()
    let num = parseInt(input*10)
    console.log(Math.abs(num%10))
})*/

// Swap 2 numbers
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim().split(" ")
    let num1 = input[0]
    let num2 = input[1]
    let temp = num1
    num1 = num2
    num2 = temp
    console.log("After swapping:",num1, num2)
})*/

// Odd or Even integer
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim()
    if(input%2==0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
})*/

// Print perimeter and area based on radius
/*process.stdin.on('data', (data) => {
    let radius = parseFloat(data.toString().trim());
    let perimeter = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;
    console.log("Perimeter: " + perimeter.toFixed(4));
    console.log("Area: " + area.toFixed(4));
});*/

// Eligibility for vote
/*process.stdin.on('data', (data) => {
    let age = data.toString().trim()
    if(age<18){
        console.log("Not Eligible")
    }else{
        console.log("Eligible")
    }
})*/

// Number greater than 100 or not
/*process.stdin.on('data', (data) => {
    let num = data.toString().trim()
    if(num<=100){
        console.log("True")
    }else{
        console.log("False")
    }
})*/

// Vowel or not
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim().toLowerCase(); // Convert input to lowercase
    let vowels = ['a', 'e', 'i', 'o', 'u']; // Array of vowels

    if (vowels.includes(input)) {
        console.log("True");
    } else {
        console.log("False");
    }
});*/

// Postive number or not
/*process.stdin.on('data', (data) => {
    let number = parseFloat(data.toString().trim());
    if (number > 0) {
        console.log("positive");
    } else {
        console.log("negative");
    }
});*/

// divisible by 3 and 5 or not
/*process.stdin.on('data', (data) => {
    let num = data.toString().trim()
    if(num%3==0 && num%5==0){
        console.log("Divisible")
    }else{
        console.log("Not Divisible")
    }
})*/

// Fist and last letters vowels or not
/*process.stdin.on('data' , (data) => {
    let input = data.toString().trim().toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u']
    if(input.length>=2){
        let firstLetter = input[0];
        let lastLetter = input[input.length-1];
        if(vowels.includes(firstLetter) && vowels.includes(lastLetter)){
            console.log("Vowel")
        }else{
            console.log("Not Vowel")
        }
    }
})*/

// Character is alphabet or not
/*process.stdin.on('data', (data) => {
    let character = data.toString().trim().toLowerCase();
    let code = character.charCodeAt(0)
    if((code>=97 && code<=122) ||(code>=65 && code<=90)){
        console.log("Alphabet")
    }else{
        console.log("Not Alphabet")
    }
})*/

// Greatest of 2 post decimal numbers
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim().split("\n");
    let num1 = input[0]
    let num2 = input[1]
    let digit1 = parseInt(num1*10)%10
    let digit2 = parseInt(num2*10)%10
    if(digit1==digit2){
        console.log("The numbers are equal")
    }else if(digit1>digit2){
        console.log(digit1)
    }else if(digit2>digit1){
        console.log(digit2)
    }
})*/

// Leap year or not
/*process.stdin.on('data', (data) => {
    let year = data.toString().trim()
    if((year%4==0 && year%100!=0) || year%400==0){
        console.log("leap year")
    }else{
        console.log("not leap year")
    }
})*/

// Nature of roots based on co-efficients
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim().split(" ").map(Number);
    let a = input[0];
    let b = input[1];
    let c = input[2];
    let discriminant = b * b - 4 * a * c;
    if (a === 0) {
        console.log("Invalid Input");
    } else if (discriminant > 0) {
        console.log("Real and distinct");
    } else if (discriminant === 0) {
        console.log("Real and Equal");
    } else if (discriminant < 0) {
        console.log("Complex");
    }
});*/

// Greatest of 3 numbers
/*process.stdin.on('data', (data) => {
    let numbers = data.toString().trim().split(" ").map(Number);
    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2];
    
    let greatest = a;

    if (b > greatest) {
        greatest = b;
    }

    if (c > greatest) {
        greatest = c;
    }

    console.log("The greatest number is: " + greatest);
});*/

// Greatest of 4 numbers
/*process.stdin.on('data', (data) => {
    let numbers = data.toString().trim().split("\n").map(Number);
    
    let greatest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > greatest) {
            greatest = numbers[i];
        }
    }

    console.log("The greatest number is: " + greatest);
});*/

// Print day of the week based on a given number
/*process.stdin.on('data', (data) => {
    let dayNumber = parseInt(data.toString().trim());

    let day = "";

    switch (dayNumber) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid day number";
    }

    console.log("The day of the week is: " + day);
});*/

// Grades based on score
/*process.stdin.on('data', (data) => {
    let score = data.toString().trim();
    if(score>=0 && score<=39){
        console.log("F")
    }else if(score>=40 && score<=50){
        console.log("D")
    }else if(score>=51 && score<=60){
        console.log("C")
    }else if(score>=61 && score<=70){
        console.log("B")
    }else if(score>=71 && score<=80){
        console.log("A")
    }else if(score>=81 && score<=100){
        console.log("S")
    }else{
        console.log("Invalid input")
    }
})*/

// Message based on temperature
/*process.stdin.on('data', (data) => {
    let temp = data.toString().trim();
    if(temp<0){
        console.log("Freezing weather")
    }else if(temp>=0 && temp<=10){
        console.log("Very cold weather")
    }else if(temp>=11 && temp<=20){
        console.log("Cold weather")
    }else if(temp>=21 && temp<=30){
        console.log("Normal in temp");
    }else if(temp>=31 && temp<=40){
        console.log("It's hot")
    }else if(temp>40){
        console.log("It's very hot")
    }
})*/

// Number of days based on month
/*process.stdin.on('data', (data) => {
    let monthNumber = parseInt(data.toString().trim());

    let daysInMonth = "";

    switch (monthNumber) {
        case 1: // January
        case 3: // March
        case 5: // May
        case 7: // July
        case 8: // August
        case 10: // October
        case 12: // December
            daysInMonth = "31 days";
            break;
        case 4: // April
        case 6: // June
        case 9: // September
        case 11: // November
            daysInMonth = "30 days";
            break;
        case 2: // February
            daysInMonth = "28 or 29 days"; // Assuming non-leap year
            break;
        default:
            console.log("Invalid month number");
            return;
    }

    console.log(daysInMonth);
});*/

// Ticket price based on conditions
/*process.stdin.on('data', (data) => {
    const lines = data.toString().split('\n');
    const age = parseInt(lines[0]);
    const hour = parseInt(lines[1]);

    const price = calculateTicketPrice(age, hour);

    console.log("Ticket price: $" + price);
});

function calculateTicketPrice(age, hour) {
    let ticketPrice = 10;

    if (age < 12) {
        ticketPrice -= 5;
    } else if (age >= 60) {
        ticketPrice -= 4;
    }

    if (hour < 12) {
        ticketPrice -= 2;
    } else if (hour >= 18) {
        ticketPrice += 1;
    }

    return ticketPrice;
}*/

// Valid triangle or not
/*process.stdin.on('data', (data) => {
    let angles = data.toString().trim().split(" ").map(Number);
    let angle1 = angles[0];
    let angle2 = angles[1];
    let angle3 = angles[2];

    if ((angle1 + angle2 + angle3) === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
        console.log("Valid Triangle");
    } else {
        console.log("Invalid Triangle");
    }
});*/

// Roots based on coefficients
/*process.stdin.on('data', (data) => {
    let coefficients = data.toString().trim().split(" ").map(Number);
    let a = coefficients[0];
    let b = coefficients[1];
    let c = coefficients[2];

    // Calculate the discriminant
    let discriminant = b * b - 4 * a * c;

    // Check the nature of roots
    if (discriminant > 0) {
        // Two distinct real roots
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`Root 1: ${root1.toFixed(1)}, Root 2: ${root2.toFixed(1)}`);
    } else if (discriminant === 0) {
        // Two equal real roots
        let root = -b / (2 * a);
        console.log(`Root 1: ${root.toFixed(1)}`);
    } else {
        // Complex roots
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        console.log(`Root 1: ${realPart.toFixed(1)} + ${imaginaryPart.toFixed(2)}i, Root 2: ${realPart.toFixed(1)} - ${imaginaryPart.toFixed(2)}i`);
    }
});*/

// Equal no. of zeros, ones, two's
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim();
    let zeroCount = 0;
    let oneCount = 0;
    let twoCount = 0;
    for (let i = 0; i < input.length; ++i) {
        if (input.charAt(i) === '0') {
            zeroCount++;
        } else if (input.charAt(i) === '1') {
            oneCount++;
        } else if (input.charAt(i) === '2') {
            twoCount++;
        }
    }
    if (zeroCount === oneCount && oneCount === twoCount) {
        console.log("Yes");
    } else {
        console.log("No");
    }
});*/

// Count of prime number in an array
/*process.stdin.on('data', (data) => {
    let input = data.toString().split(" ");
    let primeCount = 0;
    for(let i =0;i<input.length;i++){
        let num = parseInt(input[i]);
        let count = 0;
        for(let  j=1;j<=num;j++){
            if(num %j == 0){
                count = count + 1;
            }
        }
        if(count == 2){
            primeCount = primeCount + 1;
        }
    }
    console.log(primeCount);
})*/

// eliminate 'b' and 'ac' in the string
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim();
    let chars = input.split("");
    let len = chars.length;
    let index = 0;
    for (let i = 0; i < len; i++) {
        if (chars[i] === 'b') {
            continue;
        } else if (i < len - 1 && chars[i] === 'a' && chars[i + 1] === 'c') {
            i++;
        } else {
            chars[index++] = chars[i];
        }
    }
    console.log(chars.slice(0, index).join(""));
});*/

// Eliminate special characters and print remaining string
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    let result = "";
    
    for (const char of input) {
        if (/[a-zA-Z]/.test(char)) {
            result += char;
        }
    }
    
    console.log("Output:", result);
});*/

// largest product in a series
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const K = parseInt(input[0]);
    const series = input[1];
    
    let maxProduct = 0;
    for (let i = 0; i <= series.length - K; i++) {
        let product = 1;
        for (let j = i; j < i + K; j++) {
            const digit = parseInt(series[j]);
            product *= digit;
        }
        maxProduct = Math.max(maxProduct, product);
    }
    
    console.log(maxProduct);
});*/

// Fizz - multiples of 3, Buzz - multiples of 5, FizzBuzz - both
/*process.stdin.on('data', (data) => {
    const n = parseInt(data.toString().trim());
    let output = '';
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            output += 'Fizz ';
        } else if (i % 3 !== 0 && i % 5 === 0) {
            output += 'Buzz ';
        } else if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz ';
        } else {
            output += i + ' ';
        }
    }
    
    console.log(output);
});*/

// Swap 1st and last element in an array
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);
    
    // Swap the first and last elements
    const temp = arr[0];
    arr[0] = arr[n - 1];
    arr[n - 1] = temp;
    
    // Output the modified array
    console.log(arr.join(' '));
});*/

// Fibonacci Series upto n
/*process.stdin.on('data', (data) => {
    const N = parseInt(data.toString().trim());
    printFibonacciSeries(N);
});

function printFibonacciSeries(N) {
    let a = 0, b = 1;
    while (a <= N) {
        process.stdout.write(a + ' ');
        const next = a + b;
        a = b;
        b = next;
    }
    console.log(); // Add newline after printing the series
}*/

// Multiplication of a number
/*process.stdin.on('data', (data) => {
    const N = parseInt(data.toString().trim());
    for (let i = 1; i <= 10; i++) {
        console.log(N + 'x' + i + '=' + N * i);
    }
});*/

// Armstrong number or not
/*process.stdin.on('data', (data) => {
    const number = parseInt(data.toString().trim());
    
    if (isArmstrong(number)) {
        console.log("Armstrong");
    } else {
        console.log("Not Armstrong");
    }
});

function isArmstrong(number) {
    const originalNumber = number;
    const numberOfDigits = String(number).length;
    let sum = 0;

    while (number > 0) {
        const digit = number % 10;
        sum += Math.pow(digit, numberOfDigits);
        number = Math.floor(number / 10);
    }

    return sum === originalNumber;
}*/

// Perfect number or not
/*process.stdin.on('data', (data) => {
    const number = parseInt(data.toString().trim());
    if(isPerfect(number)){
        console.log("Perfect");
    }else{
        console.log("Not Perfect");
    }
})
function isPerfect(number){
    let originalNumber = number;
    let sum = 0;
    for(let i=1;i<number;i++){
        if(number%i == 0){
            sum += i;
        }
    }
    if(sum == originalNumber){
        return true;
    }else{
        return false;
    }
}*/

// Pascal's Triangle
/*process.stdin.on('data', (data) => {
    const numRows = parseInt(data.toString().trim());
    printPascalsTriangle(numRows);
});

function printPascalsTriangle(numRows) {
    for (let i = 0; i < numRows; i++) {
        let number = 1;
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += number + ' ';
            number = number * (i - j) / (j + 1);
        }
        console.log(row.trim());
    }
}*/

// Print star pattern based on no. of rows
/*process.stdin.on('data', (data) => {
    const numRows = parseInt(data.toString().trim());
    displayPattern(numRows);
});

function displayPattern(numRows) {
    // Outer loop for rows
    for (let i = 1; i <= numRows; i++) {
        let row = '';
        // Inner loop for columns
        for (let j = 1; j <= i; j++) {
            row += '* '; // Add '*' followed by a space to the row string
        }
        console.log(row); // Print the row
    }
}*/

// Print number pattern based on no. of rows

// Half Diamond pattern
/*process.stdin.on('data', (data) => {
    const N = parseInt(data.toString().trim());
    printHalfDiamondPattern(N);
});

function printHalfDiamondPattern(N) {
    // Upper half of the diamond
    for (let i = 1; i <= N; i++) {
        let row = '';
        // Print stars
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }

    // Lower half of the diamond
    for (let i = N - 1; i >= 1; i--) {
        let row = '';
        // Print stars
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}*/

// Take the matrix and print it
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const rows = parseInt(input[0].split(' ')[0]);
    const cols = parseInt(input[0].split(' ')[1]);

    const matrix = [];
    for (let i = 1; i <= rows; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }

    printMatrix(matrix);
});

function printMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            row += matrix[i][j] + ' ';
        }
        console.log(row.trim());
    }
}*/

// Addition of 2 matrices
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const [rows, cols] = input[0].split(' ').map(Number);

    const matrix1 = [];
    for (let i = 1; i <= rows; i++) {
        matrix1.push(input[i].split(' ').map(Number));
    }

    const matrix2 = [];
    for (let i = rows + 1; i <= rows * 2; i++) {
        matrix2.push(input[i].split(' ').map(Number));
    }

    const sumMatrix = [];
    for (let i = 0; i < rows; i++) {
        sumMatrix.push([]);
        for (let j = 0; j < cols; j++) {
            sumMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    printMatrix(sumMatrix);
});

function printMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            row += matrix[i][j] + ' ';
        }
        console.log(row.trim());
    }
}*/

// Subtraction of 2 matrices
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const [rows, cols] = input[0].split(' ').map(Number);

    const matrix1 = [];
    for (let i = 1; i <= rows; i++) {
        matrix1.push(input[i].split(' ').map(Number));
    }

    const matrix2 = [];
    for (let i = rows + 1; i <= rows * 2; i++) {
        matrix2.push(input[i].split(' ').map(Number));
    }

    const differenceMatrix = [];
    for (let i = 0; i < rows; i++) {
        differenceMatrix.push([]);
        for (let j = 0; j < cols; j++) {
            differenceMatrix[i][j] = matrix1[i][j] - matrix2[i][j];
        }
    }

    printMatrix(differenceMatrix);
});

function printMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            row += matrix[i][j] + ' ';
        }
        console.log(row.trim());
    }
}*/

// Average of elements
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const [m, n] = input[0].split(' ').map(Number);

    const matrix = [];
    for (let i = 1; i <= m; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }

    let sum = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            sum += matrix[i][j];
        }
    }

    const average = sum / (m * n);
    console.log(average.toFixed(1));
});*/

// Matrices are equal or not
/*function readMatrix(input, m, n) {
    const matrix = [];
    for (let i = 0; i < m; i++) {
        matrix.push(input.shift().split(' ').map(Number));
    }
    return matrix;
}

function areMatricesEqual(matrix1, matrix2) {
    const m1 = matrix1.length;
    const n1 = matrix1[0].length;
    const m2 = matrix2.length;
    const n2 = matrix2[0].length;
    if (m1 !== m2 || n1 !== n2) {
        return false;
    }
    for (let i = 0; i < m1; i++) {
        for (let j = 0; j < n1; j++) {
            if (matrix1[i][j] !== matrix2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    let [m1, n1] = input.shift().split(' ').map(Number);
    let matrix1 = readMatrix(input, m1, n1);
    let [m2, n2] = input.shift().split(' ').map(Number);
    let matrix2 = readMatrix(input, m2, n2);
    if (areMatricesEqual(matrix1, matrix2)) {
        console.log("Equal");
    } else {
        console.log("Not Equal");
    }
});*/

// Interchange diagonals
/*function interchangeDiagonals(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        const temp = matrix[i][i];
        matrix[i][i] = matrix[i][n - i - 1];
        matrix[i][n - i - 1] = temp;
    }
}

function printMatrix(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += matrix[i][j] + ' ';
        }
        console.log(row.trim());
    }
}

process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    const matrix = [];
    for (let i = 1; i <= n; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }
    interchangeDiagonals(matrix);
    printMatrix(matrix);
});*/

// Upper Triangular matrix
/*function printUpperTriangularMatrix(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += (j >= i ? matrix[i][j] : 0) + ' ';
        }
        console.log(row.trim());
    }
}

process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    const matrix = [];
    for (let i = 1; i <= n; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }
    printUpperTriangularMatrix(matrix);
});*/

// Lower Triangular matrix

// Multiplication of a matrix

// Copy elements of an array into another array
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const originalArray = input[1].split(' ').map(Number);
    const newArray = new Array(size);

    for (let i = 0; i < size; i++) {
        newArray[i] = originalArray[i];
    }

    console.log(newArray.join(' '));
});*/

// Print 2nd largest element of an array
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const array = input[1].split(' ').map(Number);

    const secondLargest = findSecondLargest(array);
    if (secondLargest !== Number.MIN_SAFE_INTEGER) {
        console.log(secondLargest);
    } else {
        console.log("Does not exist");
    }
});

function findSecondLargest(array) {
    let largest = Number.MIN_SAFE_INTEGER;
    let secondLargest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i];
        } else if (array[i] > secondLargest && array[i] !== largest) {
            secondLargest = array[i];
        }
    }

    return secondLargest;
}
*/

// Check whether the array is sorted or not
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const array = input[1].split(' ').map(Number);

    const result = isAscending(array);
    console.log(result);
});

function isAscending(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return 0;
        }
    }
    return 1;
}
*/

// Separate odd & even elements and print in different lines
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const array = input[1].split(' ').map(Number);

    const evenArray = [];
    const oddArray = [];

    for (let i = 0; i < size; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i]);
        } else {
            oddArray.push(array[i]);
        }
    }

    console.log(evenArray.join(' '));
    console.log(oddArray.join(' '));
});
*/

// Print the array in reverse order
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const array = input[1].split(' ').map(Number);

    reverseArray(array);
    console.log(array.join(' '));
});

function reverseArray(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        // Swap elements using destructuring
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }
}
*/

// Prefix sum array of an array
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const array = input[1].split(' ').map(Number);
    
    const prefixSum = calculatePrefixSum(array);
    console.log(prefixSum.join(' '));
});

function calculatePrefixSum(array) {
    const prefixSum = new Array(array.length);
    prefixSum[0] = array[0];
    for (let i = 1; i < array.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + array[i];
    }
    return prefixSum;
}
*/

// Suffix sum array of an array
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const array = input[1].split(' ').map(Number);
    
    const suffixSum = calculateSuffixSum(array);
    console.log(suffixSum.join(' '));
});

function calculateSuffixSum(array) {
    const suffixSum = new Array(array.length);
    suffixSum[array.length - 1] = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        suffixSum[i] = suffixSum[i + 1] + array[i];
    }
    return suffixSum;
}
*/

// Selection Sort
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const array = input[1].split(' ').map(Number);
    
    selectionSort(array);
    console.log(array.join(' '));
});

function selectionSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
}*/

// Bubble sort algorithm to sort in ascending order
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const array = input[1].split(' ').map(Number);
    
    bubbleSort(array);
    console.log(array.join(' '));
});

function bubbleSort(array) {
    const n = array.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap array[j] and array[j+1]
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        // If no two elements were swapped in the inner loop, then the array is already sorted
        if (!swapped) {
            break;
        }
    }
}
*/

// Insertion Sort
/*process.stdin.on('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const array = input[1].split(' ').map(Number);
    
    insertionSort(array);
    console.log(array.join(' '));
});

function insertionSort(array) {
    const n = array.length;
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}*/

// Count of alphabets, numbers, special characters
/*public class App {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();
        int alphabets = 0;
        int digits = 0;
        int specials = 0;
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (Character.isLetter(ch)) {
                alphabets++;
            } else if (Character.isDigit(ch)) {
                digits++;
            } else {
                specials++;
            }
        }
        System.out.print(alphabets + " " + digits + " " + specials);
        scanner.close();
    }
}*/


// x^n manually   --- 3 test cases pending
// process.stdin.once('data', (data) => {
//     const input = data.toString().trim().split(' ').map(Number);
//     const x = input[0];
//     const n = input[1];
//     const result = myPow(x, n);
//     if (result === Infinity || result === -Infinity) {
//         console.log("Result exceeds representable range");
//     } else {
//         console.log(result.toFixed(2));
//     }
// });

// function myPow(x, n) {
//     if (n === 0) {
//         return 1;
//     }
//     if (n < 0) {
//         x = 1 / x;
//         return n % 2 === 0 ? myPow(x * x, -(n / 2)) : x * myPow(x * x, -(n / 2));
//     }
//     return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, n / 2);
// }
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split(' ').map(Number);
    const x = input[0];
    const n = input[1];
    let result = myPow(x, n);
    if (result === Infinity || result === -Infinity) {
        result = handleInfinity(x, n);
    }
    console.log(result.toFixed(2));
});

function myPow(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        x = 1 / x;
        return n % 2 === 0 ? myPow(x * x, -(n / 2)) : x * myPow(x * x, -(n / 2));
    }
    return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, n / 2);
}

function handleInfinity(x, n) {
    let result = 1;
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            result *= x;
            if (result === Infinity) {
                break;
            }
        }
    } else {
        for (let i = 0; i < -n; i++) {
            result /= x;
            if (result === Infinity) {
                break;
            }
        }
    }
    return result;
}*/

// toggle the case of each character
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim();
    const result = toggleCase(input);
    console.log(result);
});

function toggleCase(str) {
    let modifiedString = '';
    for (let i = 0; i < str.length; i++) {
        const ch = str.charAt(i);
        if (ch >= 'A' && ch <= 'Z') {
            modifiedString += ch.toLowerCase();
        } else if (ch >= 'a' && ch <= 'z') {
            modifiedString += ch.toUpperCase();
        } else {
            modifiedString += ch;
        }
    }
    return modifiedString;
}
*/

// Highest and lowest frequency of characters in the string.
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim();

    const frequencyMap = new Map();

    // Count the frequency of each character
    for (const ch of input) {
        if (ch.match(/[a-zA-Z]/)) { // Exclude non-alphabetic characters
            frequencyMap.set(ch, (frequencyMap.get(ch) || 0) + 1);
        }
    }

    // Find the highest and lowest frequency
    const maxFrequency = Math.max(...frequencyMap.values());
    const minFrequency = Math.min(...frequencyMap.values());

    // Find characters with highest frequency
    const highestFrequencyChars = [];
    for (const [char, freq] of frequencyMap.entries()) {
        if (freq === maxFrequency) {
            highestFrequencyChars.push(char);
        }
    }
    highestFrequencyChars.sort();

    // Find characters with lowest frequency
    const lowestFrequencyChars = [];
    for (const [char, freq] of frequencyMap.entries()) {
        if (freq === minFrequency) {
            lowestFrequencyChars.push(char);
        }
    }
    lowestFrequencyChars.sort();

    // Print characters with highest frequency
    process.stdout.write(`Highest frequency character(s): ${highestFrequencyChars.join(' ')} ${maxFrequency}\n`);

    // Print characters with lowest frequency
    process.stdout.write(`Lowest frequency character(s): ${lowestFrequencyChars.join(' ')} ${minFrequency}\n`);
});
*/

// Merge the 2 arrays and print them in sorted order
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n1 = parseInt(input[0]);
    const arr1 = input[1].split(' ').map(Number);
    const n2 = parseInt(input[2]);
    const arr2 = input[3].split(' ').map(Number);

    let i = 0, j = 0;
    const mergedArray = [];

    // Merge the arrays while keeping them sorted
    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements of the first array, if any
    while (i < n1) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements of the second array, if any
    while (j < n2) {
        mergedArray.push(arr2[j]);
        j++;
    }

    // Print the merged array
    process.stdout.write(`${mergedArray.join(' ')}\n`);
});*/

// Remove leading and trailing white space and print remaining string
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim(); // Remove leading and trailing white space
    const modifiedString = removeWhiteSpace(input);
    console.log(modifiedString);
});

function removeWhiteSpace(str) {
    return str.trim();
}
*/

// Remove last occurrence of the given word from the string
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const sentence = input[0];
    const wordToRemove = input[1];
    const modifiedString = removeLastOccurrence(sentence, wordToRemove);
    console.log(modifiedString);
});

function removeLastOccurrence(str, word) {
    const lastIndex = str.lastIndexOf(word);
    if (lastIndex !== -1) {
        const startIndex = lastIndex;
        const endIndex = startIndex + word.length;
        return str.substring(0, startIndex) + str.substring(endIndex);
    }
    return str;
}
*/

// Remove first occurrence of the given word from the string
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const sentence = input[0];
    const wordToRemove = input[1];
    const modifiedString = removeFirstOccurrence(sentence, wordToRemove);
    console.log(modifiedString);
});

function removeFirstOccurrence(str, word) {
    const firstIndex = str.indexOf(word);
    if (firstIndex !== -1) {
        const startIndex = firstIndex;
        const endIndex = startIndex + word.length;
        return str.substring(0, startIndex) + str.substring(endIndex);
    }
    return str;
}*/

// Remove duplicate elements and print remaining array
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);
    const uniqueArray = removeDuplicates(arr);
    console.log(uniqueArray.join(' '));
});

function removeDuplicates(arr) {
    const set = new Set();
    const uniqueArray = [];
    for (let num of arr) {
        if (!set.has(num)) {
            set.add(num);
            uniqueArray.push(num);
        }
    }
    return uniqueArray;
}
*/

// Compress the string with count of letters
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim();
    const compressedString = compressString(input);
    if (compressedString.length < input.length) {
        console.log(compressedString);
    } else {
        console.log(input);
    }
});

function compressString(str) {
    let compressed = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1 && str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    return compressed;
}
*/

// Left rotate the array
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const [n, d] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);

    const result = leftRotateArray(arr, d);
    console.log(result.join(' '));
});

function leftRotateArray(arr, d) {
    const n = arr.length;
    d = d % n; // handling cases where d is greater than n

    const rotatedArray = [];
    for (let i = 0; i < n; i++) {
        rotatedArray.push(arr[(i + d) % n]);
    }

    return rotatedArray;
}*/

// Right rotate the array
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const [n, d] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);

    const result = rightRotateArray(arr, d);
    console.log(result.join(' '));
});

function rightRotateArray(arr, d) {
    const n = arr.length;
    d = d % n; // handling cases where d is greater than n

    const rotatedArray = [];
    for (let i = 0; i < n; i++) {
        rotatedArray.push(arr[(i - d + n) % n]);
    }

    return rotatedArray;
}*/

// Reverse Array
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const arr = input[0].split(' ').map(Number);

    reverseArray(arr);
    console.log(arr.join(' '));
});

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements at left and right pointers
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move pointers towards the center
        left++;
        right--;
    }
}*/

// Create separate list for greater and lesser than the targetted number
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);
    const x = parseInt(input[2]);

    const greaterThanX = [];
    const lessThanOrEqualX = [];

    for (let num of arr) {
        if (num > x) {
            greaterThanX.push(num);
        } else {
            lessThanOrEqualX.push(num);
        }
    }

    console.log(greaterThanX.join(' '));
    console.log(lessThanOrEqualX.join(' '));
});
*/

// Insert or delete nodes from the beginning.
/*class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function insert(head, data){
    let newNode = new Node(data);
    if(head == null){
        head = newNode;
    }else{
        let current = head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}
function deleteBeginning(head){
    if(head == null || head.next == null){
        return null;
    }
    return head.next;
}
function printList(head){
    let current = head;
    let result = [];
    while(current != null){
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(' '));
}
process.stdin.on('data', (data) => {
    let input = data.toString().split('\n');
    let n = input[0];
    let head = null;
    let nums = input[1].split(' ').map(Number);
    for(let i=0;i<nums.length;i++){
        head = insert(head, nums[i]);
    }
    head = deleteBeginning(head);
    printList(head);
})*/

// Print all the subarrays of array in increasing order
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    const arr = input[1].split(' ').map(Number);

    printSubarrays(arr, n);
});

function printSubarrays(arr, n) {
    for (let i = 0; i < n; i++) {
        let subarray = [];
        for (let j = i; j < n; j++) {
            subarray.push(arr[j]);
            console.log(subarray.join(' '));
        }
    }
}
 */

// Anagrams or not
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split(' ');
    const str1 = input[0];
    const str2 = input[1];
    if(areAnagrams(str1, str2)){
        console.log('Anagrams');
    }else{
        console.log('Not Anagrams');
    }
});
function areAnagrams(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}*/

// subarray with largest sum
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    if(n == 0){
        console.log(0);
    }else{
        const arr = input[1].split(' ').map(Number);
        const maxSum = maxSubArraySum(arr);
        console.log(maxSum);
    }
    
})
function maxSubArraySum(arr){
    const n = arr.length;
    if(n == 0){
        return 0;
    }
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];
    for(let i=1;i<n;i++){
        maxEndingHere = Math.max(arr[i], maxEndingHere+arr[i]);
        maxSoFar = Math.max(maxEndingHere, maxSoFar);
    }
    return maxSoFar;
}*/

// Rotated string is palindrome or not
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim();
    if(canFormPalindrome(input)){
        console.log('Yes, the rotated string is a palindrome.');
    }else{
        console.log('No, the rotated string is not a palindrome.');
    }
})
function isPalindrome(s){
    let left = 0;
    let right = s.length;-1
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
function canFormPalindrome(s){
    const n = s.length;
    for(let i=0;i<n;i++){
        const rotated = s.slice(n-i) + s.slice(0, n-i);
        if(isPalindrome(rotated)){
            return true;
        }
    }
    return false;
}*/

// Sort in-place without using any additional data structures
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    const nums = input[1].split(' ').map(Number);
    sortColors(nums);
    console.log(nums.join(' '));
})
function sortColors(nums){
    let low = 0;
    let mid = 0;
    let high = nums.length-1;
    while(mid<=high){
        if(nums[mid] == 0){
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }else if(nums[mid] == 1){
            mid++;
        }else{
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}*/

// Indices of two numbers such that they add up to target.
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    const nums = input[1].split(' ').map(Number);
    const target = parseInt(input[2]);
    const result = twoSum(nums, target);
    if(result[0] !== -1 && result[1] !== -1){
        console.log(result[0] + " " + result[1]);
    }else{
        console.log(-1);
    }
});
function twoSum(nums, target){
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        const complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [-1, -1];
}*/

// Find whether a pair of indices exist such that, A[i] - A[j] = k
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    const nums = input[1].split(' ').map(Number);
    const k = parseInt(input[2]);
    const result = findPair(nums, k);
    console.log(result);
})
function findPair(nums, k){
    nums.sort((a,b) => a-b);
    let i = 0;
    let j = 1;
    const n = nums.length;
    while(i < n && j < n){
        if(i !== j && nums[j]-nums[i] == k){
            return 1;
        }else if(nums[j] - nums[i] < k){
            j++;
        }else{
            i++;
        }
        if(i == j){
            j++;
        }
    }
    return 0;
}*/

// Reverse the linked list -- 1 test pending
/*class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function insertAtEnd(head, newData){
    let newNode = new Node(newData);
    if(head === null){
        return newNode;
    }
    let current = head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
    return head;
}
function reverseList(head){
    let prev = null;
    let curr = head;
    while(curr != null){
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}
function printList(head){
    let current = head;
    let result = [];
    while(current !== null){
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(' '));
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    const nums = input[1].split(' ').map(Number);
    let head = null;
    for(let i=0;i<n;i++){
        head = insertAtEnd(head, nums[i]);
    }
    head = reverseList(head);
    printList(head);
})*/

// Print the label of town judge if the town judge exists and can be identified.
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0].trim());
    const n = parseInt(input[1].trim());
    const trust = [];
    for(let i=0;i<size;i++){
        trust.push(input[i+2].trim().split(' ').map(Number));
    }
    const townJudge = findJudge(n, trust);
    console.log(townJudge);
});
function findJudge(n, trust){
    if(n == 1){
        return 1;
    }
    const trustCounts = new Map();
    for(let i=1;i<=n;i++){
        trustCounts.set(i,0);
    }
    for(let relationship of trust){
        let trustor = relationship[0];
        let trustee = relationship[1];
        trustCounts.set(trustee, trustCounts.get(trustee) + 1);
        trustCounts.set(trustor, trustCounts.get(trustor)-1);
    }
    for(let [person, count] of trustCounts){
        if(count === n-1){
            return person;
        }
    }
    return -1;
}*/

// Determine whether you can pay correct change based on the bills of lemonade
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0].trim());
    const bills = input[1].trim().split(' ').map(Number);

    const result = canGiveChange(bills);
    console.log(result);
});

function canGiveChange(bills) {
    let fives = 0; // Number of $5 bills
    let tens = 0;  // Number of $10 bills

    for (const bill of bills) {
        if (bill === 5) {
            fives++;
        } else if (bill === 10) {
            if (fives === 0) { // We don't have enough change
                return false;
            }
            fives--;
            tens++;
        } else { // bill === 20
            if (tens > 0 && fives > 0) { // Give back a $10 and a $5 bill
                tens--;
                fives--;
            } else if (fives >= 3) { // Give back three $5 bills
                fives -= 3;
            } else { // We don't have enough change
                return false;
            }
        }
    }

    return true;
}

// Example usage for testing:
const input = `5
5 5 5 10 20`;
const data = input.split('\n');
const n = parseInt(data[0].trim());
const bills = data[1].trim().split(' ').map(Number);

const result = canGiveChange(bills);
console.log(result); // Expected output: true
 */

// Linked list has a cycle or not
/*class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function insert(head, data){
    const newNode = new Node(data);
    if(head == null){
        return newNode;
    }
    let current = head;
    while(current.next != null){
        current = current.next;
    }
    current.next = newNode;
    return head;
}
function createCycle(head, position){
    let tail = head;
    let cycleNode = head;
    while(position > 1){
        cycleNode = cycleNode.next;
        position--;
    }
    while(tail.next != null){
        tail = tail.next;
    }
    tail.next = cycleNode;
}
function hasCycle(head){
    if(head == null || head.next == null){
        return false;
    }
    let slow = head;
    let fast = head.next;
    while(fast !== null && fast.next != null){
        if(slow == fast){
            return true;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0].trim());
    const elements = input[1].trim().split(' ').map(Number);
    const cyclePosition = parseInt(input[2].trim());
    let head = null;
    for(let i=0;i<size;i++){
        head = insert(head, elements[i]);
    }
    if(cyclePosition > 0){
        createCycle(head, cyclePosition);
    }
    const result = hasCycle(head);
    console.log(result);
})*/

// Group odd and even elements and print reordered linked list
/*class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function insert(head, data){
    const newNode = new Node(data);
    if(head == null){
        return newNode;
    }
    let current = head;
    while(current.next != null){
        current = current.next;
    }
    current.next = newNode;
    return head;
}
function reorderList(head){
    if(head == null || head.next == null){
        return head;
    }
    let odd = head;
    let even = head.next;
    let evenHead = even;

    while(even != null && even.next != null){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
}
function printList(head){
    let current = head;
    while(current != null){
        process.stdout.write(current.data + " ");
        current = current.next;
    }
    console.log();
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0].trim());
    if(size === 0){
        console.log(" ");
        return;
    }
    const elements = input[1].trim().split(' ').map(Number);
    let head = null;
    for(let i=0;i<size;i++){
        head = insert(head, elements[i]);
    }
    head = reorderList(head);
    printList(head);
})*/

// Insert a node at position K in doubly linked list  --- 1 test case pending
/*class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function insertNode(head, k, val) {
    const newNode = new Node(val);

    if (k === 0) {
        // Insert at the head
        newNode.next = head;
        if (head !== null) {
            head.prev = newNode;
        }
        return newNode;
    }

    let current = head;
    for (let i = 0; i < k - 1 && current !== null; i++) {
        current = current.next;
    }

    if (current === null) {
        // Insert at the end if position k exceeds the length of the list
        if (head === null) {
            // Empty list
            return newNode;
        }
        let tail = head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        newNode.prev = tail;
    } else {
        // Insert in the middle
        newNode.next = current.next;
        if (current.next !== null) {
            current.next.prev = newNode;
        }
        current.next = newNode;
        newNode.prev = current;
    }

    return head;
}

function insertInitialElements(head, elements) {
    let tail = null;
    for (let data of elements) {
        const newNode = new Node(data);
        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
    }
    return head;
}

function printList(head) {
    while (head !== null) {
        process.stdout.write(head.data + " ");
        head = head.next;
    }
    console.log();
}

process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const [n, k, val] = input[0].match(/\d+/g).map(Number);
    if (n === 0) {
        console.log(" ");
        return;
    }
    const elements = input[1].trim().split(' ').map(Number);

    let head = null;
    head = insertInitialElements(head, elements);

    // Insert a node at position K
    head = insertNode(head, k, val);

    // Print the doubly linked list after insertion
    console.log('Doubly linked list after insertion:');
    printList(head);
})*/

// sort the linked list
/*class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insert(head, data){
    const newNode = new Node(data);
    if(head == null){
        return newNode;
    }else{
        let current = head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}

function sortLinkedList(head){
    if(head == null){
        return null;
    }
    let values = [];
    let current = head;
    while(current != null){
        values.push(current.data);
        current = current.next;
    }
    values.sort((a,b) => a-b);
    let dummy = new Node(0);
    let tail = dummy;
    for(let val of values){
        tail.next = new Node(val);
        tail = tail.next;
    }
    return dummy.next;
}

function printLinkedList(head){
    let current = head;
    let ans = []
    while(current != null){
        ans.push(current.data);
        current = current.next;
    }
    console.log(ans.join(' '));
}

process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0].trim());
    if(size == 0){
        console.log("Empty list");
        return;
    }
    const elements = input[1].trim().split(' ').map(Number);
    let head = null;
    for(let i=0; i<size; i++){
        head = insert(head, elements[i]);
    }
    head = sortLinkedList(head);
    printLinkedList(head);
})*/

// Sort the linked list with Time Complexity - O(n) and Space Complexity - O(1)
/*class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function insert(head, val){
    const newNode = new Node(val);
    if(head == null){
        return newNode;
    }else{
        let current = head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}
function sortList(head){
    if(head == null || head.next == null){
        return head;
    }
    let zero = new Node(0);
    let one = new Node(0);
    let two = new Node(0);

    let zeroPtr = zero;
    let onePtr = one;
    let twoPrt = two;

    let current = head;

    while(current != null){
        if(current.data == 0){
            zeroPtr.next = current;
            zeroPtr = zeroPtr.next;
        }else if(current.data == 1){
            onePtr.next = current;
            onePtr = onePtr.next;
        }else{
            twoPrt.next = current;
            twoPrt = twoPrt.next;
        }
        current = current.next;
    }
    zeroPtr.next = one.next != null ? one.next : two.next;
    onePtr.next = two.next;

    twoPrt.next = null;
    return zero.next;
}
function printList(head){
    let current = head;
    let ans = [];
    while(current != null){
        ans.push(current.data);
        current = current.next;
    }
    console.log(ans.join(' '));
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0].trim());
    if(size == 0){
        console.log(0);
        return;
    }
    const elements = input[1].trim().split(' ').map(Number);
    let head = null;
    for(let i=0;i<size;i++){
        head = insert(head, elements[i]);
    }
    head = sortList(head);
    printList(head);
})*/

// Remove all the duplicate elements from the list
/*class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function insert(head, val){
    const newNode = new Node(val);
    if(head == null){
        return newNode;
    }else{
        let current = head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}
function removeDuplicates(head){
    if(head == null || head.next == null){
        return head;
    }
    let current = head;
    let prev = null;
    let set = new Set();
    while(current != null){
        if(set.has(current.data)){
            prev.next = current.next;
        }else{
            set.add(current.data);
            prev = current;
        }
        current = current.next;
    }
    return head;
}
function printList(head){
    let current = head;
    let ans = [];
    while(current != null){
        ans.push(current.data);
        current = current.next;
    }
    console.log(ans.join(' '));
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split(' ').map(Number);
    const size = parseInt(input[0].trim());
    if(size == 0){
        console.log(" ");
        return;
    }
    const elements = input[1].trim().split(' ').map(Number);
    let head = null;
    for(let i=0;i<size;i++){
        head = insert(head, elements[i]);
    }
    head = removeDuplicates(head);
    if(head == null){
        console.log(" ");
    }else{
        printList(head);
    }
})*/

// Find whether there exists a pair of elements in the linked list 
/*class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insert(head, val) {
    const newNode = new Node(val);
    if (head == null) {
        return newNode;
    } else {
        let current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}

function findPair(head, X) {
    let set = new Set();
    let current = head;
    while (current != null) {
        let complement = X - current.data;
        if (set.has(complement)) {
            let first = Math.min(complement, current.data);
            let second = Math.max(complement, current.data);
            console.log(first + " " + second);
            return;
        }
        set.add(current.data);
        current = current.next;
    }
    console.log(-1);
}

process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const X = parseInt(input[0].trim());
    const size = parseInt(input[1].trim());
    if (size === 0) {
        console.log(-1);
        return;
    }
    const elements = input[2].trim().split(' ').map(Number);
    let head = null;
    for (let i = 0; i < size; i++) {
        head = insert(head, elements[i]);
    }
    findPair(head, X);
});*/

// MinStack
/*class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return -1; // Stack underflow
        }
        const popped = this.stack.pop();
        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return popped;
    }

    top() {
        if (this.stack.length === 0) {
            return -1; // Stack is empty
        }
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) {
            return -1; // Stack is empty
        }
        return this.minStack[this.minStack.length - 1];
    }
}

process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const q = parseInt(input[0].trim());

    const stack = new MinStack();

    for (let i = 1; i <= q; i++) {
        const query = input[i].trim().split(' ').map(Number);
        const queryType = query[0];

        switch (queryType) {
            case 1:
                const val = query[1];
                stack.push(val);
                break;
            case 2:
                const popped = stack.pop();
                console.log(popped !== -1 ? popped + " " : "-1 ");
                break;
            case 3:
                const min = stack.getMin();
                console.log(min !== -1 ? min + " " : "-1 ");
                break;
            default:
                console.log("-1 ");
        }
    }
});
*/

// MaxStack
/*class MaxStack{
    constructor(){
        this.stack = [];
        this.maxStack = [];
    }
    push(val){
        this.stack.push(val);
        if(this.maxStack.length == 0 || val >= this.maxStack[this.maxStack.length-1]){
            this.maxStack.push(val);
        }
    }
    pop(){
        if(this.stack.length == 0){
            return -1;
        }
        const popped = this.stack.pop();
        if(popped == this.maxStack[this.maxStack.length-1]){
            this.maxStack.pop();
        }
        return popped;
    }
    top(){
        if(this.stack.length == 0){
            return -1;
        }
        return this.stack[this.stack.length-1];
    }
    getMax(){
        if(this.maxStack.length == 0){
            return -1;
        }
        return this.maxStack[this.maxStack.length-1];
    }
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const q = parseInt(input[0].trim());
    const stack = new MaxStack();
    for(let i=1;i<=q;i++){
        const query = input[i].trim().split(' ').map(Number);
        const queryType = query[0];
        let ans = []
        switch(queryType){
            case 1:
                const val = query[1];
                stack.push(val);
                break;
            case 2:
                const popped = stack.pop();
                ans.push(popped != -1 ? popped : -1);
                break;
            case 3:
                const max = stack.getMax();
                ans.push(max != -1 ? max : -1);
                break;
            default:
                ans.push(-1);
        }
        console.log(ans.join(' '));
    }
})*/

// Linked list is a palindrome or not
/*class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertAtEnd(head, val) {
    const newNode = new Node(val);
    if (head === null) {
        return newNode;
    } else {
        let current = head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}

function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

function isPalindrome(head) {
    if (head === null) {
        return true;
    }

    let fast = head;
    let slow = head;

    // Find the middle of the linked list
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // Reverse the second half of the linked list
    let secondHalf = reverseList(slow);
    let secondHalfCopy = secondHalf; // Keep a copy to restore later

    // Compare the first half with the reversed second half
    let firstHalf = head;
    while (secondHalf !== null) {
        if (firstHalf.data !== secondHalf.data) {
            // Restore the second half to its original order
            reverseList(secondHalfCopy);
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    // Restore the second half to its original order
    reverseList(secondHalfCopy);
    return true;
}

process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0].trim());
    if (size === 0) {
        console.log(true);
        return;
    }
    const elements = input[1].trim().split(' ').map(Number);
    let head = null;
    for (let i = 0; i < size; i++) {
        head = insertAtEnd(head, elements[i]);
    }
    const isPalindromic = isPalindrome(head);
    console.log(isPalindromic);
});*/

// Delete the nth node from the end and print remaining list  --- 1 test case pending
/*class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function insert(head, val){
    const newNode = new Node(val);
    if(head == null){
        return newNode;
    }else{
        let current = head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}
function removeNthFromEnd(head, n){
    const dummy = new Node(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    for(let i=0;i<=n;i++){
        fast = fast.next;
    }
    while(fast != null){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
function printList(head){
    let current = head;
    while(current != null){
        process.stdout.write(current.data.toString());
        if(current.next != null){
            process.stdout.write(" -> ");
        }
        current = current.next;
    }
    console.log(" ->nullptr");
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0].trim());
    const elements = input[1].trim().split(' ').map(Number);
    let head = null;
    for(let i=0;i<size;i++){
        head = insert(head, elements[i]);
    }
    const n = parseInt(input[2].trim());
    head = removeNthFromEnd(head, n);
    printList(head);
})*/
/*class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function createLinkedList(arr){
    let dummy = new Node();
    let current = dummy;
    for(let val of arr){
        current.next = new Node(val);
        current = current.next;
    }
    return dummy.next;
}
function removeNthFromEnd(head, n){
    let dummy = new Node(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    for(let i=0; i<=n; i++){
        fast = fast.next;
    }

    while(fast != null){
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    return dummy.next;
}
function printLinkedList(head){
    let result = [];
    while(head != null){
        result.push(head.data);
        head = head.next;
    }
    console.log(result.join(" -> ") + " -> nullptr");
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let nums = input[1].trim().split(' ').map(Number);
    let pos = parseInt(input[2].trim());

    if(n == 1){
        console.log("nullptr");
    }else{
        let list = createLinkedList(nums);
        let newHead = removeNthFromEnd(list, pos);
        printLinkedList(newHead);
    }
})*/

// Merge two linked lists l1, l2 and print the merged list in ascending order
/*class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertAtEnd(head, val) {
    const newNode = new Node(val);
    if (head == null) {
        return newNode;
    } else {
        let current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    return head;
}

function mergeTwoLists(l1, l2) {
    // Handle cases where one or both lists are empty
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    const dummy = new Node(0);
    let current = dummy;

    // Merge the two lists in ascending order
    while (l1 != null && l2 != null) {
        if (l1.data <= l2.data) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Attach any remaining elements from either list
    if (l1 != null) {
        current.next = l1;
    } else if (l2 != null) {
        current.next = l2;
    }

    return dummy.next;  // Skip the dummy node
}

function printList(head) {
    let current = head;
    while (current != null) {
        process.stdout.write(current.data.toString());
        if (current.next != null) {
            process.stdout.write(" -> ");
        }
        current = current.next;
    }
    console.log(" -> nullptr");
}

// Main logic to take input and invoke the functions
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    
    // List 1
    const size1 = parseInt(input[0].trim());
    let l1 = null;
    if (size1 > 0) {
        const elements1 = input[1].trim().split(' ').map(Number);
        for (let i = 0; i < size1; i++) {
            l1 = insertAtEnd(l1, elements1[i]);
        }
    }

    // List 2
    const size2 = parseInt(input[2].trim());
    let l2 = null;
    if (size2 > 0) {
        const elements2 = input[3].trim().split(' ').map(Number);
        for (let i = 0; i < size2; i++) {
            l2 = insertAtEnd(l2, elements2[i]);
        }
    }

    // Merge and print the merged list
    const mergedList = mergeTwoLists(l1, l2);
    printList(mergedList);
});*/


// print true if new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise
/*process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const n = parseInt(input[1]);
    const flowerbed = input[2].split(' ').map(Number);
    const result = canPlaceFlowers(flowerbed, n);
    console.log(result ? "true" : "false");
})
function canPlaceFlowers(flowerbed, n){
    let count = 0;
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i] == 0){
            if((i==0 || flowerbed[i-1] == 0) && (i == flowerbed.length-1 || flowerbed[i+1] == 0)){
                flowerbed[i] = 1;
                count++;
            }
        }
    }
    return count >= n;
}*/

// Linked list that represents the sum of the 2 numbers
/*class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function createLinkedList(values){
    let head = null;
    let tail = null;
    for(let value of values){
        const newNode = new Node(value);
        if(head == null){
            head = newNode;
            tail = newNode;
        }else{
            tail.next = newNode;
            tail = newNode;
        }
    }
    return head;
}
function reverseList(head){
    let prev = null;
    let current = head;
    while(current != null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
function addTwoNumbers(l1, l2){
    const reversedL1 = reverseList(l1);
    const reversedL2 = reverseList(l2);
    const dummy = new Node(0);
    let current = dummy;
    let carry = 0;

    while(reversedL1 != null || reversedL2 != null || carry != 0){
        let sum = carry;
        if(reversedL1 != null){
            sum += reversedL1.data;
            reversedL1 = reversedL1.next;
        }
        if(reversedL2 != null){
            sum += reversedL2.data;
            reversedL2 = reversedL2.next;
        }
        current.next = new Node(sum % 10);
        current = current.next;
        carry = Math.floor(sum / 10);
    }
    return reverseList(dummy.next);
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const n = parseInt(input[0]);
    const values1 = input[1].split(' ').map(Number);
    const m = parseInt(input[2]);
    const values2 = input[3].split(' ').map(Number);

    const l1 = createLinkedList(values1);
    const l2 = createLinkedList(values2);
    const result = addTwoNumbers(l1, l2);
    printList(result);
})*/

// maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at mot k times.
/*function maxConsecutiveAnswers(answerKey, k){
    let maxCountT = 0;
    let maxCountF = 0;
    let countT = 0;
    let countF = 0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd<answerKey.length; windowEnd++){
        if(answerKey[windowEnd] == 'T'){
            countT++;
        }else{
            countF++;
        }
        while(Math.min(countF, countT) > k){
            if(answerKey[windowStart] == 'T'){
                countT--;
            }else{
                countF--;
            }
            windowStart++;
        }
        maxCountT = Math.max(maxCountT, windowEnd-windowStart+1);
    }
    windowStart = 0;
    countF = 0;
    countT = 0;

    for(let windowEnd = 0; windowEnd<answerKey.length; windowEnd++){
        if(answerKey[windowEnd] == 'T'){
            countT++;
        }else{
            countF++;
        }
        while(Math.min(countT, countF) > k){
            if(answerKey[windowStart] == 'T'){
                countT--;
            }else{
                countF--;
            }
            windowStart++;
        }
        maxCountF = Math.max(maxCountF, windowEnd - windowStart + 1);
    }
    return Math.max(maxCountT, maxCountF);
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const answerKey = input[0].trim();
    const k = parseInt(input[1].trim()); 
    const result = maxConsecutiveAnswers(answerKey, k);
    console.log(result);
})*/

// 6th belt
// asteroid collision
/*function asteroidCollision(asteroids){
    const stack = [];
    for(const asteroid of asteroids){
        if(stack.length == 0 || asteroid > 0){
            stack.push(asteroid);
        }else{
            while (true) {
                const top = stack.length == 0 ? 0 : stack[stack.length-1];
                if(top < 0){
                    stack.push(asteroid);
                    break;
                }else if(top == -asteroid){
                    stack.pop();
                    break;
                }else if(top > -asteroid){
                    break;
                }else{
                    stack.pop();
                    if(stack.length == 0 || stack[stack.length-1] < 0){
                        stack.push(asteroid);
                        break;
                    }
                }
            }
        }
    }
    const result = new Array(stack.length);
    for(let i=result.length-1; i>=0; i--){
        result[i] = stack.pop();
    }
    return result;
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0]);
    const asteroid = input[1].trim().split().map(Number);
    const result = asteroidCollision(asteroid);
    if(result[0] == undefined){
        console.log('Everything Destroyed');
    }else{
        console.log(result.join(' '));
    }
})*/

// Smallest possible integer after removing k digits from number
/*function removeKDigits(num, k){
    const stack = [];
    for(const digit of num){
        while(stack.length > 0 && stack[stack.length-1] > digit && k>0){
            stack.pop();
            k--;
        }
        if(stack.length > 0 || digit != '0'){
            stack.push(digit);
        }
    }
    while(stack.length > 0 && k > 0){
        stack.pop();
        k--;
    }
    const result = stack.join('');
    return result.length == 0 ? '0' : result;
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const num = input[0].trim();
    const k = parseInt(input[1].trim());
    const result = removeKDigits(num, k);
    console.log(result);
})*/

// largest rectangle in the histogram
/*function largestRectangleArea(heights) {
    let n = heights.length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    let myStack = [];

    // Calculate left boundary for each bar
    for (let i = 0; i < n; i++) {
        while (myStack.length !== 0 && heights[myStack[myStack.length - 1]] >= heights[i]) {
            myStack.pop();
        }
        left[i] = myStack.length === 0 ? 0 : myStack[myStack.length - 1] + 1;
        myStack.push(i);
    }

    myStack = [];

    // Calculate right boundary for each bar
    for (let i = n - 1; i >= 0; i--) {
        while (myStack.length !== 0 && heights[myStack[myStack.length - 1]] >= heights[i]) {
            myStack.pop();
        }
        right[i] = myStack.length === 0 ? n - 1 : myStack[myStack.length - 1] - 1;
        myStack.push(i);
    }

    // Calculate the maximum area
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        maxArea = Math.max(maxArea, heights[i] * (right[i] - left[i] + 1));
    }

    return maxArea;
}
process.stdin.once('data', (data) => {
    const input = data.toString().trim().split('\n');
    const size = parseInt(input[0].trim());
    const heights = input[1].trim().split(' ').map(Number);
    const area = largestRectangleArea(heights);
    console.log(area);
})*/

// Max-Sliding window
/*process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let size = parseInt(input[0]);
    let arr = input[1].split(' ').map(Number);
    let length = parseInt(input[2]);

    let result = maxSlidingWindow(arr, length);
    console.log(result.join(' '));
})
function maxSlidingWindow(nums, k){
    let dq = [];
    let ans = [];

    for(let i=0;i<nums.length;i++){
        if(dq.length > 0 && dq[0] == i-k){
            dq.shift();
        }
        while(dq.length > 0 && nums[dq[dq.length-1]] <= nums[i]){
            dq.pop();
        }
        dq.push(i);
        if(i >= k-1){
            ans.push(nums[dq[0]]);
        }
    }
    return ans;
}*/

// Postfix to Prefix
/*function isOperator(c){
    return c == '+' || c == '-' || c == '*' || c == '/';
}
function postfixToPrefix(postfix){
    let stack = [];
    let tokens = postfix.split(/\s+/);

    for(let token of tokens){
        if(!isOperator(token.charAt(0))){
            stack.push(token);
        }else{
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = token + " " + operand1 + " " + operand2;
            stack.push(result);
        }
    }
    return stack[stack.length-1];
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim();
    let prefixExpression = postfixToPrefix(input);
    console.log(prefixExpression);
})*/

// Postfix to Infix
/*function isOperator(c){
    return c == '+' || c == '-' || c == '*' || c == '/';
}
function postfixToInfix(postfix){
    let stack = [];
    let tokens = postfix.split(/\s+/)

    for(let token of tokens){
        if(!isOperator(token.charAt(0))){
            stack.push(token);
        }else{
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let result = "(" + operand1 + " " + token + " " + operand2 + ")";
            stack.push(result); 
        }
    }
    return stack[stack.length-1];
}
process.stdin.on('data', (data) => {
    let input = data.toString().trim();
    let infixExpression = postfixToInfix(input);
    console.log(infixExpression);
})*/

// Infix to Prefix
/*function getPrecedence(c){
    switch(c){
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '^':
            return 3;
    }
    return 0;
}
function infixToPrefix(infix){
    infix = infix.split('').reverse().join('')
    infix = infix.replace(/\(/g, '#').replace(/\)/g, '(').replace(/#/g, ')');

    let stack = [];
    let postfix = [];

    for(let i=0;i<infix.length;i++){
        let c = infix.charAt(i);

        if(/[a-zA-Z0-9]/.test(c)){
            postfix.push(c);
        }else if(c == '('){
            stack.push(c);
        }else if(c == ')'){
            while(stack.length && stack[stack.length-1] != '('){
                postfix.push(stack.pop());
            }
            stack.pop();
        }else{
            while(stack.length && getPrecedence(c) < getPrecedence(stack[stack.length-1])){
                postfix.push(stack.pop());
            }
            stack.push(c);
        }
    }
    while(stack.length){
        postfix.push(stack.pop());
    }
    return postfix.reverse().join('');
}
process.stdin.on('data', (data) => {
    let input = data.toString().trim();
    let prefixExpression = infixToPrefix(input);
    console.log(prefixExpression);
})*/

// Print an array ans of length nums1.length such that ans[i] is the next greater element.
/*function findNextGreater(nums1, nums2){
    if(nums1.length == 0 || nums2.length == 0){
        return [];
    }
    let numberMap = new Map();
    let numStack = [];

    numberMap.set(nums2[nums2.length-1], -1);
    numStack.push(nums2[nums2.length-1]);

    for(let i=nums2.length-2;i>=0;i--){
        if(numStack.length > 0 && nums2[i] < numStack[numStack.length-1]){
            numberMap.set(nums2[i], numStack[numStack.length-1]);
            numStack.push(nums2[i]);
            continue;
        }
        while(numStack.length > 0 && numStack[numStack.length-1] < nums2[i]){
            numStack.pop();
        }
        if(numStack.length == 0){
            numberMap.set(nums2[i], -1);
            numStack.push(nums2[i]);
        }else{
            numberMap.set(nums2[i], nums2[nums2.length-1]);
            numStack.push(nums2[i]);
        }
    }
    for(let i=0;i<nums1.length;i++){
        nums1[i] = numberMap.get(nums1[i]);
    }
    return nums1;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let size1 = parseInt(input[0].trim());
    let nums1 = input[1].split(' ').map(Number);
    let size2 = parseInt(input[2].trim());
    let nums2 = input[3].split(' ').map(Number);
    let result = findNextGreater(nums1, nums2);
    console.log(result.join(' '));
})*/

// Write a program to compute how much water it can trap after raining.  T.C - O(n), S.C - O(1)
/*function calculateWater(heights){
    let n = heights.length;
    if(n <= 2){
        return 0;
    }
    let left = 0;
    let right = heights.length-1;
    let leftMax = 0;
    let rightMax = 0;
    let trappedWater = 0;

    while(left < right){
        if(heights[left] < heights[right]){
            leftMax = Math.max(leftMax, heights[left]);
            trappedWater += leftMax - heights[left];
            left++;
        }else{
            rightMax = Math.max(rightMax, heights[right]);
            trappedWater += rightMax - heights[right];
            right--;
        }
    }
    return trappedWater;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let size = parseInt(input[0].trim());
    let heights = input[1].trim().split(' ');
    let result = calculateWater(heights);
    console.log(result);
})*/

// Find the sum of min(b) ranges over every (contiguous) subarray of arr.  Print the answer modulo 1e9 + 7.
/*function findMinSum(A){
    let n = A.length;
    let stack = [];
    let nextSmaller = new Array(n).fill(0);
    let preSmaller = new Array(n).fill(0);

    // calculate next smaller elements
    for(let i=0;i<n;i++){
        while(stack.length > 0 && A[stack[stack.length-1]] > A[i]){
            nextSmaller[stack.pop()] = i;
        }
        stack.push(i);
    }
    while(stack.length > 0){
        nextSmaller[stack.pop()] = n;
    }

    // calculate previous smaller elements
    for(let i=n-1;i>=0;i--){
        while(stack.length > 0 && A[stack[stack.length-1]] >= A[i]){
            preSmaller[stack.pop()] = i;
        }
        stack.push(i);
    }
    while(stack.length > 0){
        preSmaller[stack.pop()] = -1;
    }
    let ans = 0;
    let mod = 1000000007;

    for(let i=0;i<n;i++){
        let left = i - preSmaller[i];
        let right = nextSmaller[i] - i;
        ans = (ans + A[i] * left * right) % mod;
    }
    return ans;
}
process.stdin.on('data', (data) => {
    let input = data.toString().split('\n');
    let size = parseInt(input[0].trim());
    let nums = input[1].trim().split(" ").map(Number);
    let sumVal = findMinSum(nums);
    console.log(sumVal);
})*/

// Write a program to print the sum of all subarray ranges of nums.  The range of a subarray of nums is the difference between the largest and smallest element in the subarray
/*function sumOfSubarrayRanges(nums){
    let n = nums.length;
    let totalSum = 0;

    for(let i=0;i<n;i++){
        let minVal = Number.MAX_SAFE_INTEGER;
        let maxVal = Number.MIN_SAFE_INTEGER;
        for(let j=i;j<n;i++){
            minVal = Math.min(minVal, nums[j]);
            maxVal = Math.max(maxVal, nums[j]);
            totalSum += maxVal - minVal;
        }
    }
    return totalSum;
}
process.stdin.on('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let arr = input[1].trim().split(' ').map(Number);
    let result = sumOfSubarrayRanges(arr);
    console.log(result);
})*/

// Write a program to find all the possible subsequences of the string.  Print it in lexicographically increasing order.
/*function generateSubsequences(inputString, current, index, subsequences){
    if(index == inputString.length){
        subsequences.push(current);
        return;
    }

    // Include the current character and increase the index
    generateSubsequences(inputString, current + inputString[index], index + 1, subsequences);

    // Increase the index without including the character
    generateSubsequences(inputString, current, index + 1, subsequences);
}
process.stdin.on('data', (data) => {
    let inputString = data.toString().trim();

    let subsequences = [];
    generateSubsequences(inputString, "", 0, subsequences);

    // sort the result for lexicographical order
    subsequences.sort();

    console.log(subsequences.join(' '));
})*/

// Write a program to generate all combination of well-formed parenthesis and print it in lexicographically increasing order.
/*function backtrack(openCount, closeCount, current, formedParethesis, n){
    if(openCount == n && closeCount == n){
        formedParethesis.push(current);
        return;
    }
    if(openCount < n){
        backtrack(openCount + 1, closeCount, current + "(", formedParethesis, n);
    }
    if(closeCount < openCount){
        backtrack(openCount, closeCount + 1, current + ")", formedParethesis, n);
    }
}
function generateParenthesis(n){
    let formedParethesis = [];
    backtrack(0, 0, "", formedParethesis, n);
    return formedParethesis;
}
process.stdin.on('data', (data) => {
    let n = parseInt(data.toString().trim());
    let combinations = generateParenthesis(n);
    console.log(combinations.join(' '));
})*/

// Write a program to print a list of all unique combinations of candidates where the chosen numbers sum to target.  Print the combinations result in lexicographically increasing order ---- 1 test case pending
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim().split(/\s+/).map(Number);
    let n = input[0];
    let candidates = input.slice(1, n + 1);
    let target = input[n + 1];

    let result = combinationSum(candidates, target);

    if (result.length === 0) {
        console.log(-1);
    } else {
        result.forEach(combination => {
            console.log(combination.join(' '));
        });
    }
});

function combinationSum(candidates, target) {
    let ans = [];
    findCombinations(0, candidates, target, ans, []);
    return ans;
}

function findCombinations(index, arr, target, ans, ds) {
    if (index === arr.length) {
        if (target === 0) {
            ans.push([...ds]);
        }
        return;
    }
    
    if (arr[index] <= target) {
        ds.push(arr[index]);
        findCombinations(index, arr, target - arr[index], ans, ds);
        ds.pop();
    }
    
    findCombinations(index + 1, arr, target, ans, ds);
}*/

// Return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0]);
    let nums = input[1].split(' ').map(Number);

    function canPartition(nums){
        let totalSum = nums.reduce((acc, num) => acc + num, 0);
        if(totalSum % 2 != 0) return false;
        
        let targetSum = totalSum / 2;
        let dp = new Array(targetSum + 1).fill(false);
        dp[0] = true;

        for(let num of nums){
            for(let j=targetSum; j>=num;j--){
                dp[j] = dp[j] || dp[j-num];
            }
        }
        return dp[targetSum];
    }
    if(canPartition(nums)){
        console.log("true");
    }else{
        console.log("false");
    }
})*/

// koko loves to eat bananas.  Print the minimum integer k such that he can eat all the bananas within h hours.
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let piles = input[1].split(' ').map(Number);
    let h = parseInt(input[2]);

    function minEatSpeed(piles, h){
        let left = 1;
        let right = Math.max(...piles);

        while(left < right){
            let mid = Math.floor(left + (right - left) / 2);
            if(canEatAll(piles, h, mid)){
                right = mid;
            }else{
                left = mid + 1;
            }
        }
        return left;
    }

    function canEatAll(piles, h, k){
        let hoursNeeded = 0;
        for(let pile of piles){
            hoursNeeded += Math.ceil(pile / k);
        }
        return hoursNeeded <= h;
    }
    let minSpeed = minEatSpeed(piles, h);
    console.log(minSpeed);
})*/

// You are given 3 positive integers: n, index, and maxSum.  You want to construct an array nums (0-indexed) that satisfies the following conditions.  Note that abs(x) equals x if x >= 0, and -x otherwise.
// approach - 1
/*function maxValue(n, index, maxSum){
    let left = 1;
    let right = maxSum;
    let res = 1;
    
    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        let sum = mid;
        
        // left Sum
        if(mid > index){
            let leftSum = mid - 1;
            sum += (leftSum + (leftSum - index + 1)) * index / 2;
        }else{
            sum += (mid * (mid - 1)) / 2 + (index - mid + 1);
        }
        
        // right Sum
        let rightElements = n - index - 1;
        if(mid > rightElements){
            let rightSum = mid - 1;
            sum += (rightSum + (rightSum - rightElements + 1)) * (rightElements) / 2;
        }else{
            sum += (mid * (mid - 1)) / 2 + (rightElements - mid + 1);
        }
        
        if(sum <= maxSum){
            result = mid;
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return res;
}*/

// approach - 2
/*function maxValue(n, index, maxSum){
    let leftNumbers = index;
    let rightNumbers = n - index - 1;

    let left = 1;
    let right = maxSum;

    let res = 0;

    while(left < right){
        let mid = Math.floor(left + (right - left) / 2);
        
        // for this particular mid calculate both left sum and right sum
        let leftSum = 0;
        let rightSum = 0;
        let sum = mid;

        // both leftSum and rightSum are going to start from the number mid-1;
        let m = mid - 1;

        // if leftNumbers are less tha m then calculate sum of natural no.'s upto m and subtract from 1 to rightNumbers
        if(rightNumbers <= m)
            rightSum = (m * (m + 1)) / 2 - ((m - rightNumbers) * (m - rightNumbers + 1)) / 2;
        // if we have extra numbers then just fill it with 1
        else
            rightSum = (m * (m + 1))/2 + 1 * (m - rightNumbers);

        // similary for the leftSum
        if(leftSum <= m)
            leftSum = (m*(m+1))/2 - ((m-leftNumbers)*(m-leftNumbers+1))/2
        else
            leftSum = (m*(m+1))/2 + 1*(m-leftNumbers);

        // add leftSum and rightSum to sum
        sum += leftSum + rightSum;
        if(sum <= maxSum){
            res = mid;
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return res;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split(' ');
    let n = parseInt(input[0].trim());
    let index = parseInt(input[1].trim());
    let maxSum = parseInt(input[2].trim());
    console.log(maxValue(n, index, maxSum));
})*/

// A string s is formed by the concatenation of a subsequence of arr that has unique characters. Return the maximum possible length of s.  TC - O(2^n * L),  SC - O(n + L)
/*function isUnique(s){
    let charSet = new Set();
    for(let c in s){
        if(charSet.has(c)){
            return false;
        }
        charSet.add(c);
    }
    return true;
}
function backtrack(arr, index, maxLength, current){
    if(isUnique(current)){
        maxLength[0] = Math.max(maxLength[0], current.length);
    }else{
        return;
    }
    if(index == arr.length){
        return;
    }
    for(let i=index;i<arr.length;i++){
        backtrack(arr, i + 1, maxLength, current + arr[i]);
    }
}
function maxLengthOfConcatenationSubsequence(arr){
    let maxLength = [0];
    backtrack(arr, 0, maxLength, "");
    return maxLength[0];
}
process.stdin.on('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let arr = [];
    for(let i=1;i<=n;i++){
        arr.push(input[i]);
    }
    console.log(maxLengthOfConcatenationSubsequence(arr));
})*/

// Return the number of non-empty beautiful subsets of the array nums.  A subset of nums is beautiful if it does not contain 2 integers with an absolute difference equal to k.
/*function beautifulSubsets(nums, k){
    function helper(index, hashSet){
        if(index == nums.length){
            return 1;
        }
        
        // do not pick case
        let res = helper(index + 1, hashSet);

        // picking case - check whether ele+k and ele-k are present in the hashset or not
        if(!hashSet[nums[index]+k] && !hashSet[nums[index]-k]){
            hashSet[nums[index]] = (hashSet[nums[index]] || 0) + 1;
            res += helper(index + 1, hashSet);
            hashSet[nums[index]] -= 1;
        }
        return res;
    }
    return helper(0, {}) - 1;
}
process.stdin.on('data', (data) => {
    let input = data.toString().trim().split(' ');
    let nk = input[0].split(' ');
    let n = parseInt(nk[0]);
    let k = parseInt(nk[1]);
    let nums = input[1].split(' ').map(Number);
    console.log(beautifulSubsets(nums, k));
})*/

// perm[i] is divisible by i, i is divisible by perm[i].  Given an integer n, return the number of the beautiful arrangements that you can construct.
/*function countArrangement(n){
    let count = 0;
    let arr = [];
    for(let i=1;i<=n;i++){
        arr.push(i);
    }
    function check(arr, j){
        if(j == arr.length){
            count++;
            return;
        }
        for(let i=j;i<arr.length;i++){
            swap(arr, i, j);
            if(arr[i] % (j+1 == 0) || (j+1)%arr[j] == 0){
                check(arr, j+1);
            }
            swap(arr, i, j); // backtrack
        }
        function swap(arr, i, j){
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    check(arr, 0);
    return count;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    console.log(countArrangement(n));
})*/

// Given n and k, return the kth permutation sequence.
/*function getPermutation(n, k){
    let fact = 1;
    let numbers = [];
    // get the factorial value for n-1 - no. of permutations for the 1st block
    for(let i=1;i<n;i++){
        fact = fact * i;
        numbers.push(i);
    }
    numbers.push(n);
    let ans = "";
    // since we are dealing with 0-based index, decrease k by 1
    k = k - 1
    while(true){
        // add the value to ans from numbers array which is present at the index k/fact
        ans += numbers[Math.floor(k/fact)];
        // after adding, remove the number from array
        numbers.splice(Math.floor(k/fact), 1);
        // if numbers array is empty just break from the loop
        if(numbers.length == 0){
            break;
        }
        // next block permutation
        k = k % fact;
        // no. of permutations for the new block
        fact = fact / numbers.length;
    }
    return ans;
}
process.stdin.on('data', (data) => {
    let input = data.toString().trim().split(' ');
    let n = parseInt(input[0].trim());
    let k = parseInt(input[1].trim());
    console.log(getPermutation(n, k));   
})*/

// Return the maximum possible greatness you can achieve after permuting nums.
/*function maximumGreatness(nums){
    nums.sort((a, b) => a - b);
    // count to store the result
    let count = 0;
    // r pointer to iterate and find the next smallest possible number
    let r = 0;
    let n = nums.length;

    for(let i=0;i<n;i++){
        // move the r pointer until it is less than or equal to current num
        while(r < n && nums[r] <= nums[i]){
            r++;
        }
        // if the nums[r] is < than num[i] then we found the next greater element.  So increase the count and move the pointer(not to recount the same number)
        if(r < n){
            count++;
            r++;
        }
    }
    return count;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let nums = input[1].split(' ').map(Number);
    console.log(maximumGreatness(nums));
})*/

// 2 Sum - Return the maximum number of operations you can perfrom on the array.  In one operation, you can pick 2 no.'s from the array whose sum equals k and remove them from the array.
/*process.stdin.on('data', (data) => {
    let input = data.toString().trim().split('\n');
    let nk = input[0].split(' ').map(Number);
    let n = parseInt(nk[0]);
    let k = parseInt(nk[1]);
    let nums = input[1].trim().split(' ').map(Number);
    function twoSum(nums, k, n){
        nums.sort((a, b) => a - b);
        let i = 0;
        let j = n - 1;
        let count = 0;
        while(i < j){
            if(nums[i] + nums[j] == k){
                count++;
                i++;
                j--;
            }else if(nums[i] + nums[j] < k){
                i++;
            }else{
                j--;
            }
        }
        return count;
    }
    console.log(twoSum(nums, k, n));
})*/

// Return minimum number of boats to carry every given person.  Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
/*function numRescueBoats(people, limit){
    // sort the people array to get heavier and lighter people separately
    people.sort((a, b) => a - b);

    let boats = 0;
    // left pointer at lighter weight and right pointer at heavier weight
    let left = 0, right = people.length - 1;

    while(left <= right){
        // addition of lighter and heavier people is less than limit then add them to the boat (increase the left pointer)
        if(people[left] + people[right] <= limit){
            left++;
        }
        // defaultly the heavier person will taken by the boat(right pointer)
        right--;
        // increase the boat count
        boats++;
    }
    return boats;
}
process.stdin.on('data', (data) => {
    let input = data.toString().trim().split('\n');
    let [n, limit] = input[0].trim().split(' ').map(Number);
    let people = input[1].trim().split(' ').map(Number);
    console.log(numRescueBoats(people, limit));
})*/

//Return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range [left, right]
// approach - 1
/*function numSubarrayBoundedMax(nums, left, right){
    let i = 0, j = 0, count = 0, m = 0;

    while(j < nums.length){
        if(nums[j] > right){
            m = 0;
            i = j + 1;
        }else if(nums[j] <= right && nums[j] >= left){
            m = j - i + 1;
        }
        count += m;
        j++;
    }
    return count;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let [left, right] = input[1].trim().split(' ').map(Number);
    let nums = input[2].trim().split(' ').map(Number);

    console.log(numSubarrayBoundedMax(nums, left, right));
});*/
// approach - 2
/*function countSubarrays(nums, bound){
    let count = 0, current = 0;
    for(let num of nums){
        if(num <= bound){
            current++;
            count += current
        }else{
            current = 0;
        }
    }
    return count;
}
function numSubarrayBoundedMax(nums, left, right){
    return countSubarrays(nums, right) - countSubarrays(nums, left-1);
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let [left, right] = input[1].trim().split(' ').map(Number);
    let nums = input[2].trim().split(' ').map(Number);

    console.log(numSubarrayBoundedMax(nums, left, right));
});*/

// Permutations of an array in lexicographical order
/*process.stdin.on('data', (data) => {
    // Split the input by new lines and spaces to parse the numbers
    let input = data.toString().trim().split('\n');
    
    // First line of input: number of elements in the array
    let n = parseInt(input[0]);
    
    // Second line of input: the array of numbers (split by space, and map to integers)
    let nums = input[1].split(' ').map(Number);

    // Print all permutations of the array
    printPermutations(nums);
});

// Function to find the next lexicographical permutation
function nextPermutation(array) {
    // Step 1: Find the first pair from the end where array[i] < array[i+1]
    let i = array.length - 2;
    while (i >= 0 && array[i] >= array[i + 1]) {
        i--;
    }
    
    // If no such pair is found, the array is in descending order, so there's no next permutation
    if (i < 0) {
        return false;
    }
    
    // Step 2: Find the first element from the end that's larger than array[i]
    let j = array.length - 1;
    while (array[j] <= array[i]) {
        j--;
    }
    
    // Step 3: Swap elements array[i] and array[j]
    swap(array, i, j);
    
    // Step 4: Reverse the subarray after index i to get the smallest lexicographical order
    reverse(array, i + 1, array.length - 1);
    
    return true;
}

// Function to swap two elements in an array
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// Function to reverse a subarray from start to end
function reverse(array, start, end) {
    while (start < end) {
        swap(array, start, end);  // Swap the elements at start and end
        start++;
        end--;
    }
}

// Function to generate and print all lexicographical permutations
function printPermutations(nums) {
    // Sort the array to get the smallest lexicographical permutation first
    nums.sort((a, b) => a - b); 

    // Print the current permutation, and find the next one using nextPermutation
    do {
        console.log(nums.join(' '));  // Print the array as a string with space-separated elements
    } while (nextPermutation(nums));  // Keep finding the next permutation until no more is available
}*/

// Maximum number of consecutive 1's in the array if you can flip at most k 0's
/*function maxConsecutiveOnes(nums, k){
    let start = 0;
    let maxConsecutive = 0;
    let zeroCount = 0;

    for(let end = 0; end < nums.length; end++){
        if(nums[end] == 0){
            zeroCount++;
        }

        while(zeroCount > k){
            if(nums[start] == 0){
                zeroCount--;
            }
            start++;
        }
        
        maxConsecutive = Math.max(maxConsecutive, end - start + 1);
    }
    return maxConsecutive;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let nums = input[1].trim().split(' ').map(Number);
    let k = parseInt(input[2].trim());
    console.log(maxConsecutiveOnes(nums, k));
})*/

// Return all distinct solutions to the n-queens puzzle.
/*function solveNQueens(n){
    function DFS(queens, xy_dif, xy_sum){
        let p = queens.length;
        if(p == n){
            result.push(queens.map(q => '.'.repeat(q) + 'Q' + '.'.repeat(n-q-1)));
            return;
        }
        for(let q=0;q<n;q++){
            if(!queens.includes(q) && !xy_dif.includes(p-q) && !xy_sum.includes(p+q)){
                DFS(queens.concat(q), xy_dif.concat(p-q), xy_sum.concat(p+q));
            }
        }
    }
    let result = [];
    DFS([], [], []);
    result.sort();
    return result;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let queenArrangements = solveNQueens(n);
    queenArrangements.forEach((arrangement, index) => {
        arrangement.forEach(row => {
            console.log(row);
        })
    })
})*/

// pairs[i] = [left, right] and left < right.  Return the length longest chain which can be formed.
// approach-1
/*class Pair {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
}
function maxChainLength(arr){
    const n = arr.length;
    arr.sort((x, y) => x.a - y.a);
    const mcl = new Array(n).fill(1);

    for(let i=1;i<n;i++){
        for(let j=0;j<i;j++){
            if(arr[i].a > arr[j].b && mcl[i] <= mcl[j]){
                mcl[i] = mcl[j] + 1;
            }
        }
    }
    let max = 0;
    for(let i=0;i<n;i++){
        if(max < mcl[i]){
            max = mcl[i];
        }
    }
    return max;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    const pairs = [];
    for(let i=1;i<=n;i++){
        const [a, b] = input[i].trim().split(' ').map(Number);
        pairs.push(new Pair(a, b)); 
    }
    const length = maxChainLength(pairs);
    console.log(length);
})*/
// approach - 2
/*function longestChain(pairs){
    pairs.sort((a, b) => a[1] - b[1]);
    let currentEnd = Number.MIN_SAFE_INTEGER;
    let count = 0;

    for(let pair of pairs){
        if(pair[0] > currentEnd){
            currentEnd = pair[1];
            count++;
        }
    }
    return count;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let pairs = [];
    for(let i=1; i<=n; i++){
        const [a, b] = input[i].trim().split(' ').map(Number);
        pairs.push([a, b]);
    }
    console.log(longestChain(pairs));
})*/

// Maximum amount of gold you can collect from "grid m x n"
/*class GoldMine{
    getMaxGold(grid){
        const m = grid.length;
        const n = grid[0].length;
        let maxGoldCollected = 0;

        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(grid[i][j] > 0){
                    maxGoldCollected = Math.max(maxGoldCollected, this.dfs(grid, i, j, m, n));
                }
            }
        }
        return maxGoldCollected;
    }
    dfs(grid, x, y, m, n){
        if(x < 0 || x >= m || y < 0 || y >= n || grid[x][y] == 0){
            return 0;
        }
        let originalGold = grid[x][y];
        grid[x][y] = 0;
        let maxGold = 0;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        for(let direction of directions){
            const nx = x + direction[0];
            const ny = y + direction[1];
            maxGold = Math.max(maxGold, this.dfs(grid, nx, ny, m, n));
        }

        grid[x][y] = originalGold;
        return originalGold + maxGold;
    }
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let [m, n] = input[0].trim().split(' ').map(Number);
    let grid = [];
    for(let i=1;i<m;i++){
        grid.push(input[i].trim().split(' ').map(Number));
    }
    const solution = new GoldMine();
    const maxGold = solution.getMaxGold(grid);
    console.log(maxGold);
})*/

// push the dominoes
/*function pushDominoes(dominoes){
    let n = dominoes.length;
    let right = new Array(n).fill(0);
    let left = new Array(n).fill(0);

    let prev = '.';
    let count = 1;

    // traverse from left to right and marks all the dominoes which fall towards right
    for(let i=0;i<n;i++){
        if(dominoes == 'R'){
            prev = 'R';
            count = 1;
            continue;
        }else if(dominoes == 'L'){
            prev = 'L';
        }
        if(prev == 'R' && dominoes[i] == '.'){
            right[i] = count;
            count++;
        }
    }

    prev = '.';
    count = 1;

    // traverse from right to left and marks all the dominoes which fall towards left
    for(let i=n-1;i>=0;i--){
        if(dominoes[i] == 'L'){
            prev = 'L';
            count = 1;
            continue;
        }else if(dominoes[i] == 'R'){
            prev = 'R';
        }
        if(prev == 'L' && dominoes[i] == '.'){
            left[i] = count;
            count++;
        }
    }

    let finalResult = '';
    for(let i=0;i<n;i++){
        if(left[i] == 0 && right[i] == 0){
            finalResult += dominoes[i];
        }else if(left[i] == 0){
            finalResult += 'R';
        }else if(right[i] == 0){
            finalResult += 'L';
        }else if(left[i] == right[i]){
            finalResult += '.';
        }else if(left[i] > right[i]){
            finalResult += 'R';
        }else{
            finalResult += 'L';
        }
    }
    return finalResult;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split(' ');
    let dominoes = input[0].trim();
    console.log(pushDominoes(dominoes));
})*/

// Return true if one of s1's permutations is the substring of s2
/*function checkInclusion(s1, s2){
    if(s1.length > s2.length) return false;

    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    // count the frequency of each character in s1 and the first window of s2
    for(let i=0;i<s1.length;i++){
        s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // sliding window technique to compare segments of s2 with s1
    for(let i=s1.length; i<s2.length; i++){
        if(arraysEqual(s1Count, s2Count)) return false;

        // Move the window to the right : remove the leftmost character of the previous window
        s2Count[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]--;

        // Add the new character to the current window
        s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    return arraysEqual(s1Count, s2Count);
}
// Helper function to compare two arrays
function arraysEqual(arr1, arr2){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] != arr2[i]) return false;
    }
    return true;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let s1 = input[0].trim();
    let s2 = input[1].trim();
    let result = checkInclusion(s1, s2);
    console.log(result);
})*/

// Return the total number of friend requests made

// There are n persons on a social media website.  You are given an integer array ages where ages[i] is the age pf the ith person.  
// A person x will not send a friend request to a person y (x != y) if any of the following conditions is true:
// age[y] <= 0.5 * age[x] + 7
// age[y] > age[x]
// age[y] > 100 && age[x] < 100
/*function numFriendRequests(ages){
    const n = ages.length; // number of people
    let count = 0; // to store the total no. of friend requests

    // array to store how many people are of a particular age (ages range from 1 to 120)
    const ageCount = new Array(121).fill(0);
    ages.forEach(age => {
        ageCount[age]++; // Increment the count for the person's age
    });

    // loop through each possible pair of ages
    // ageX is the age of person X, and ageY is the age of person Y
    for(let ageX=1; ageX <= 120; ageX++){
        for(let ageY=1; ageY<=120;ageY++){
            // skip if there are no people of this age
            if(ageCount[ageX] == 0 || ageCount[ageY] == 0) continue;

            // check if a friend request can be sent from ageX to ageY
            if(canSendRequest(ageX, ageY)){
                if(ageX == ageY){
                    // If both people have the same age, person X can send request to everyone except themselves
                    count += ageCount[ageX] * (ageCount[ageX] - 1);
                }else{
                    // If ages are different, count how many request can be send from ageX to ageY
                    count += ageCount[ageX] * ageCount[ageY];
                }
            }
        }
    }
    return count;
}
// Function to check if person X (with ageX) can send a request to person Y (with ageY)
function canSendRequest(ageX, ageY){
    return !(ageY <= 0.5 * ageX + 7 || ageY > ageX || (ageY > 100 && ageX < 100));
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let ages = input[1].trim().split(' ').map(Number);
    console.log(numFriendRequests(ages));
})*/

// Maximun no. of fruits you can pick
/*function totalFruits(fruits){
    // if fruits is null or if it has no fruits return 0
    if(!fruits || fruits.length == 0){
        return 0;
    }

    let maxFruits = 0;
    let left = 0;
    let basket = new Map(); // to keep track of all types of fruits and their count

    // Iterate over the fruits array with the right pointer
    for(let right=0; right < fruits.length; right++){
        // Add the current fruit to the basket and increment its frequency count
        basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);

        // If there are more than 2 types of fruits in the basket, shrink the window from the left
        while(basket.size > 2){
            basket.set(fruits[left], basket.get(fruits[left] - 1));

            // if the count fruit becomes 0, then remove that particular fruit from the basket
            if(basket.get(fruits[left]) == 0){
                basket.delete(fruits[left]);
            }
            left++; // Move the left pointer to the right to shrink the window
        }
        // calculate the max number of fruits we can pick in the current window
        maxFruits = Math.max(maxFruits, right - left + 1);
    }
    return maxFruits;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let fruits = input[1].trim().split(' ').map(Number);
    let result = totalFruits(fruits);
    console.log(result);
})*/

// Find 3 integers in nums such that the sum is closest to target.  Return the sum of the 3 integers.
/*function threeSumClosest(nums, target){
    // sort the array in ascending order
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let closestSum = nums[0] + nums[1] + nums[2]; // Initialize with the sum of the first 3 elements

    // Iterate throught the array
    for(let i=0;i<n-2;i++){
        let left = i+1;
        let right = n-1;

        // use the two-pointer technique
        while(left < right){
            let currentSum = nums[i] + nums[left] + nums[right];

            if(Math.abs(target - currentSum) < Math.abs(target - closestSum)){
                closestSum = currentSum;
            }

            // Adjust the pointers based on the sum
            if(currentSum < target){
                // Move the left pointer to the right to increase the sum
                left++;
            }else if(currentSum > target){
                // Move the right pointer to the left to decrease the sum
                right--;
            }else{
                // If the current sum equals the target, return it as the closest possible sum
                return currentSum;
            }
        }
    }
    return closestSum;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let nums = input[1].trim().split(' ').map(Number);
    let target = parseInt(input[2].trim());
    console.log(threeSumClosest(nums, target));
})*/

// Return the sum of the chemistry of all the teams, or return -1 if there is no way to divide the players into teams
/*function divideTeams(skills){
    let n = skills.length;

    // sort the skill array in ascending order
    skills.sort((a, b) => a - b);

    // The total skill that each pair must add up to
    let totalSkill = skills[0] + skills[n-1];
    let totalChemistry = 0;

    // check if teams can be formed by pairing players from the start and end of the sorted array
    for(let i=0;i<n/2;i++){
        // If the pair does not have the same total skill, return -1 (invalid team)
        if(skills[i] + skills[n-1-i] != totalSkill){
            return -1;
        }
        // accumulate the total chemistry for all valid pairs
        totalChemistry += skills[i] * skills[n-1-i];
    }
    return totalChemistry;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let skills = input[1].trim().split(' ').map(Number);
    console.log(divideTeams(skills));
})*/

// Return the kth smallest fraction considered.  Print your answer as numerator space denominator
/*class Fraction {
    constructor(numerator, denominator, numeratorIndex, denominatorIndex){
        this.numerator = numerator;
        this.denominator = denominator;
        this.numeratorIndex = numeratorIndex;
        this.denominatorIndex = denominatorIndex;
        this.value = numerator / denominator;
    }
}
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert a new element into the heap
    offer(fraction){
        this.heap.push(fraction);
        this.heapifyUp();
    }

    // Remove and return the samllest element from the heap
    poll(){
        if(this.size() == 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    // get the size of the heap
    size(){
        return this.heap.length;
    }

    // helper method to maintain the heap property after insertion
    heapifyUp(){
        let index = this.size() - 1;
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            if(this.heap[parentIndex].value <= this.heap[index].value) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    // Helper method to maintain the heap property after removal
    heapifyDown(){
        let index = 0;
        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if(leftChildIndex < this.size() && this.heap[leftChildIndex].value < this.heap[smallestIndex].value){
                smallestIndex = leftChildIndex;
            }

            if(rightChildIndex < this.size() && this.heap[rightChildIndex].value < this.heap[smallestIndex].value){
                smallestIndex = rightChildIndex;
            }

            if(smallestIndex == index) break;

            [this.heap[smallestIndex], this.heap[index]] = [this.heap[index], this.heap[smallestIndex]];
            index = smallestIndex;
        }
    }
}
function findKthSmallestFraction(arr, k){
    const minHeap = new MinHeap();

    // Insert initial fractions into the heap (arr[0] / arr[j])
    for(let j=1;j<arr.length; j++){
        minHeap.offer(new Fraction(arr[0], arr[j], 0, j));
    }

    // Extract the smallest k-1 times to get the kth smallest fraction
    for(let i=0;i<k-1;i++){
        const fraction = minHeap.poll();
        const numeratorIndex = fraction.numeratorIndex;
        const denominatorIndex = fraction.denominatorIndex;

        if(numeratorIndex + 1 < denominatorIndex){
            minHeap.offer(new Fraction(arr[numeratorIndex + 1], arr[denominatorIndex], numeratorIndex + 1, denominatorIndex));
        }
    }

    const kthFraction = minHeap.poll();
    return [kthFraction.numerator, kthFraction.denominator];
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let [n, k] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    const result = findKthSmallestFraction(arr, k);
    console.log(`${result[0]} ${result[1]}`);
})*/

// find the longest palindromic substring
/*function longestPalindrome(s){
    if(s == null || s.length < 1) return "";
    let start = 0;
    let end = 0;

    for(let i=0;i<s.length;i++){
        const len1 = expandAroundCenter(s, i, i); // odd length palindrome
        const len2 = expandAroundCenter(s, i, i+1); // even length palindrome
        const len = Math.max(len1, len2);
        if(len > end - start + 1){
            start = i - Math.floor((len-1)/2);
            end = i + Math.floor(len/2);
        }else if(len == end - start + 1){
            const newStart = i - Math.floor((len-1)/2);
            if(newStart < start){
                start = newStart;
                end = i + Math.floor(len / 2);
            }
        }
    }
    return s.substring(start, end+1);
}
function expandAroundCenter(s, left, right){
    let L = left, R = right;
    while(L >= 0 && R < s.length && s[L] == s[R]){
        L--;
        R++;
    }
    return R - L - 1;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim();
    let string = input.trim();
    console.log(longestPalindrome(string));
})*/

// Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.
/*function successfulPairs(m, n, spells, potions){
    const pairs = new Array(m).fill(0);
    potions.sort((a, b) => a - b);

    for(let i=0;i<m;i++){
        // for every spell find how many potions are greater than that particular spell
        pairs[i] = countSuccessfulPairs(spells[i], potions, success);
    }
    return pairs;
}
function countSuccessfulPairs(spell, potions, success){
    // through binary search find the lower bound
    let left = 0;
    let right = potions.length;
    while(left < right){
        let mid = Math.floor(left + (right - left) / 2);
        // find whether spell * potions[mid] >= success or not
        if(spell * potions[mid] >= success){
            right = mid;
        }else{
            left = mid+1;
        }
    }
    // return the length of entire potions from the lower bound index
    return potions.length - left;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let [m, n] = input[0].trim().split(' ').map(Number);
    let spells = input[1].trim().split(' ').map(Number);
    let potions = input[2].trim().split(' ').map(Number);
    let success = parseInt(input[3].trim());
    console.log(successfulPairs(m, n, spells, potions, success).join(' '));
})*/

// Find all unique combinations in candiates where the candidate numbers sum to the target.  Each number in candiates may only be used once in the combination.  Print the comb in lexicographically increasing order.
/*function backtrack(candiates, target, start, path, result){
    if(target == 0){
        result.push([...path]);
        return;
    }
    if(target < 0){
        return;
    }
    for(let i=start;i<candiates.length;i++){
        if(i > start && candiates[i] == candiates[i-1]){
            continue;
        }
        path.push(candiates[i]);
        backtrack(candiates, target - candiates[i], i+1, path, result);
        path.pop();
    }
}
function combinationSum(candidates, target){
    const result = [];
    candidates.sort((a, b) => a - b);
    backtrack(candidates, target, 0, [], result);
    return result;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let candidates = input[1].trim().split(' ').map(Number);
    let target = parseInt(input[2].trim());
    const result = combinationSum(candidates, target);
    if(result.length == 0){
        console.log(-1);
    }else{
        result.forEach(combination => {
            console.log(combination.join(' '));
        })
    }
})*/

// Return all the different possible non-decreasing subsequences of the given array with at leat 2 elements.  Return the answer in lexicographically sorted order.
/*function findSubsequences(nums){
    const s = new Set();
    const current = [];
    backtrack(nums, 0, current, s);

    const result = Array.from(s).map(subsequence => subsequence.split(',').map(Number));
    result.sort((a, b) => {
        const len = Math.min(a.length, b.length);
        for(let i=0;i<len;i++){
            if(a[i] != b[i]){
                return a[i] - b[i];
            }
        }
        return a.length - b.length;
    });
    return result;
}
function backtrack(nums, index, current, s){
    if(current.length >= 2){
        s.add(current.join(','));
    }
    for(let i=index;i<nums.length;i++){
        if(current.length == 0 || nums[i] >= current[current.length-1]){
            current.push(nums[i]);
            backtrack(nums, i+1, current, s);
            current.pop();
        }
    }
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let nums = input[1].trim().split(' ').map(Number);
    const result = findSubsequences(nums);
    result.forEach(subsequence => {
        console.log(subsequence.join(' '));
    })
})*/

// Print a list of all unique combinations of candidates where the chosen numbers sum to target in lexicographically increasing order.  The same number may be chosen from candidates an unlimited no. of times.
/*function backtrack(candiates, target, start, path, result){
    if(target == 0){
        result.push([...path]);
        return;
    }
    if(target < 0){
        return;
    }
    for(let i=0;i<candiates.length;i++){
        if(i > start && candiates[i] == candiates[i-1]){
            continue;
        }
        path.push(candiates[i]);
        backtrack(candiates, target - candiates[i], i, path, result);
        path.pop();
    }
}
function combinationSum(candidates, target){
    let result = [];
    candidates.sort((a, b) => a - b);
    backtrack(candidates, target, 0, [], result);
    return result;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let candidates = input[1].trim().split(' ').map(Number);
    let target = parseInt(input[2].trim());
    const result = combinationSum(candidates, target);
    if(result.length == 0){
        console.log(-1);
    }else{
        result.forEach(combination => {
            console.log(combination.join(' '));
        })
    }
})*/

// Print all possible subsets (the power set) in lexographically increasing order.  The solution must not contain duplicate subsets.
/*function findSubsets(nums){
    let result = [];
    nums.sort((a, b) => a - b);
    generateSubsets(0, nums, [], result);
    result.sort((a, b) => {
        let len = Math.min(a.length, b.length);
        for(let i=0;i<len;i++){
            if(a[i] != b[i]){
                return a[i] - b[i];
            }
        }
        return a.length - b.length;
    });
    return result;
}
function generateSubsets(index, nums, path, result){
    if(index == nums.length){
        return;
    }
    for(let i=index;i<nums.length;i++){
        path.push(nums[i]);
        result.push([...path]);
        generateSubsets(i+1, nums, path, result);
        path.pop();
    }
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let  n = parseInt(input[0].trim());
    let nums = input[1].trim().split(' ').map(Number);
    let subsets = findSubsets(nums);
    subsets.forEach(subset => {
        console.log(subset.join(' '));   
    })
})*/

// Return the maximum possible score you can achieve after playing any no. of tokens. Maximize the total score by strategically playing these tokens.  In 1 move, you can play an unplayed token in one of the 2 ways (but not both for the same token): 1. Face-up 2. Face-down.
// 1st approach
/*function bagOfTokens(tokens, power) {
    tokens.sort((a, b) => a - b);
    let left = 0;
    let right = tokens.length - 1;
    let score = 0;
    let maxScore = 0; // Track max score

    while (left <= right) {
        if (power >= tokens[left]) {
            power -= tokens[left++];
            score++;
            maxScore = Math.max(maxScore, score); // Track max score
        } else if (score > 0) {
            power += tokens[right--];
            score--;
        } else {
            break;
        }
    }
    return maxScore; // Return max score instead of final score
}*/

// 2nd approach
/*function bagOfTokens(tokens, power){
    tokens.sort((a, b) => a - b);
    let left = 0;
    let right = tokens.length-1;
    let score = 0;

    while(left <= right){
        if(power >= tokens[left]){
            power -= tokens[left++];
            score++;
        }else if(score > 0 && left < right){
            power += tokens[right--];
            score--;
        }else{
            break;
        }
    }
    return score;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n')
    let n = parseInt(input[0].trim());
    let tokens = input[1].trim().split(' ').map(Number);
    let power = parseInt(input[2].trim());
    if(tokens.length == 1){
        console.log(0);
    }
    console.log(bagOfTokens(tokens, power));
})*/

// Letter combinations
/*const KEYPAD = [
    "",    // 0
    "",    // 1
    "abc", // 2
    "def", // 3
    "ghi", // 4
    "jkl", // 5
    "mno", // 6
    "pqrs",// 7
    "tuv", // 8
    "wxyz" // 9
];

function letterCombinations(digits) {
    const result = [];
    
    // Edge case: return an empty array if digits is empty or null
    if (!digits || digits.length === 0) {
        return result;
    }

    backtrack(result, [], digits, 0);
    return result;
}

function backtrack(result, current, digits, index) {
    // If we've reached the length of the digits, add the current combination to the result
    if (index === digits.length) {
        result.push(current.join(""));
        return;
    }

    // Get the letters corresponding to the current digit
    const letters = KEYPAD[digits.charAt(index) - '0'];
    
    for (let letter of letters) {
        current.push(letter); // Add the letter to the current combination
        backtrack(result, current, digits, index + 1); // Move to the next digit
        current.pop(); // Backtrack, remove the last added letter
    }
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim();
    let num = parseInt(input);
    let result = letterCombinations(num);
    console.log(result);
})*/

// Lenght of longest strictly increasing subsequence
/*function longestSubsequence(nums){
    let n = nums.length;
    let dp = new Array(n).fill(1);
    let maxLength = 1;

    for(let i=1; i<n; i++){
        for(let j=0; j<i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j]+1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }
    return maxLength;
}
process.stdin.once('data', (data) => {
    let input = data.toString().trim().split('\n');
    let n = parseInt(input[0].trim());
    let nums = input[1].trim().split(' ').map(Number);
    console.log(longestSubsequence(nums));
})*/




