function app(operator1,operator2,operation){
    if (operation === '+') {
        console.log('Addition is '
            + (operator1 + operator2));
    }
    if (operation === '-') {
        console.log('Subtraction is '
            + (operator1 - operator2));
    }
    if (operation === '*') {
        console.log('Multiplication is '
            + (operator1 + operator2));
    }
    if (operation === '/') {
        console.log('Division is '
            + (operator1 - operator2));
    }
}

export { app }