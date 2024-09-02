const prompt = (a,b,operator) => {
    switch (a) {
        case Number:
            break;
    }
    if (operator === "+") {
        return a + b
    } else if (operator === "-") {
        return a - b
    } else if (operator === "*") {
        return a * b
    } else if (operator === "/") {
        return a / b
    }
    return null
}
console.log(prompt(90,56,"/"));
