function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const operator = document.getElementById('operator').value;
    const number2 = parseFloat(document.getElementById('number2').value);

    let result;
    switch (operator) {
        case '==':
            result = number1 == number2;
            break;
        case '!=':
            result = number1 != number2;
            break;
        case '<':
            result = number1 < number2;
            break;
        case '>':
            result = number1 > number2;
            break;
        case '<=':
            result = number1 <= number2;
            break;
        case '>=':
            result = number1 >= number2;
            break;
        default:
            result = 'Operador inválido';
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}