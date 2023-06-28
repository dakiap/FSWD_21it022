console.log("Connected");

//task 1
let a = 6;
var b = "Hi";
const c = true;

document.getElementById('tsk1').innerHTML = a + `<br>` + b + `<br>` + c;

//task 2
function calc(num1, num2) {
    if (document.getElementById('add').checked) {
        output = num1 + num2;
    }
    else if (document.getElementById('sub').checked) {
        output = num1 - num2;
    }
    else if (document.getElementById('mul').checked) {
        output = num1 * num2;
    }
    else if (document.getElementById('div').checked) {
        output = num1 / num2;
    }
    else {
        console.error("Invalid Input");
    }

    document.getElementById("result").innerHTML = `Answer is ` + output;
}

//task 3
function verify() {
    let age = parseInt(document.getElementById('age').value);
    if (isNaN(age)) {
        document.getElementById('tsk3').innerHTML = `Invalid Input`;
    }
    else {
        if (age < 18) {
            document.getElementById('tsk3').innerHTML = `You are a minor`;
        }
        else if (age > 18 && age < 65) {
            document.getElementById('tsk3').innerHTML = `You are an adult`;
        } else {
            document.getElementById('tsk3').innerHTML = `You are a senior citizen`
        }
    }
}

//task 4
function task4() {

    function findMinMaxSalary(salaries) {
        if (salaries.length === 0) {
            return null;
        }

        let minSalary = salaries[0];
        let maxSalary = salaries[0];

        for (let i = 1; i < salaries.length; i++) {
            if (salaries[i] < minSalary) {
                minSalary = salaries[i];
            }
            if (salaries[i] > maxSalary) {
                maxSalary = salaries[i];
            }
        }
        return { min: minSalary, max: maxSalary };
    }

    const salaries = [30000, 45000, 25000, 60000, 35000];
    const result = findMinMaxSalary(salaries);

    document.getElementById('tsk4').innerHTML = `Minimum Salary: ` + result.min + `<br>Maximum Salary: ` + result.max;
}

//task5
function task5() {
    const favoriteBooks = [
        "To Kill a Mockingbird",
        "1984",
        "Pride and Prejudice",
        "The Great Gatsby",
        "The Catcher in the Rye",
        "The Lord of the Rings",
    ];

    function displayBooks(books) {
        const bookList = document.getElementById("bookList");

        for (let i = 0; i < books.length; i++) {
            const li = document.createElement("li");
            li.textContent = books[i];
            bookList.appendChild(li);
        }
    }

    displayBooks(favoriteBooks);
}

//task 6
function task6() {
    document.getElementById("scope").innerHTML = null;

    const scp = document.getElementById("scope");

    function testVar() {
        var x = 10;
    }

    testVar();
    const li1 = document.createElement("li");
    try {
        li1.textContent = x;
        scp.appendChild(li1);
    } catch (err) {
        li1.textContent = err.message;
        scp.appendChild(li1);
    }

    function testLet() {
        let y = 20;
    }

    testLet();
    const li2 = document.createElement("li");
    try {
        li2.textContent = y;
        scp.appendChild(li2);
    } catch (err) {
        li2.textContent = err.message;
        scp.appendChild(li2);
    }

    function testConst() {
        const z = 30;
    }

    testConst();
    const li3 = document.createElement("li");
    try {
        li3.textContent = z;
        scp.appendChild(li3);
    } catch (err) {
        li3.textContent = err.message;
        scp.appendChild(li3);
    };

}

//task 7
function task7() {
    const button = document.getElementById("myButton");

    button.addEventListener("click", function () {
        button.textContent = "Clicked!";
        button.style.backgroundColor = 'red';
    });

}

//task 8
function task8() {
    let num = document.getElementById('num1').value;

    try {
        if (num > 0) {
            document.getElementById('num0').innerHTML = `Number is Positive`;
        }
        else {
            throw "Number is Negative"
        }
    } catch (err) {
        document.getElementById('num0').innerHTML = err;
    }
}

//task 9
function task9() {
    setTimeout(function () { myFunction("You just click here before 3 seconds!!!"); }, 3000);

    function myFunction(value) {
        document.getElementById("demo").innerHTML = value;
    }
}