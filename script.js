// Выбираем элементы из DOM
const screen = document.querySelector('.calculater_schirm p'); 
const buttons = document.querySelectorAll('.btn'); 

let currentNumber = ''; 
let previousNumber = ''; 
let operator = ''; 

function updateScreen(value) {
    screen.textContent = value;
}


buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const btnClass = button.classList;

       
        if (btnClass.contains('btn_zero') || btnClass.contains('btn_one') || btnClass.contains('btn_two') ||
            btnClass.contains('btn_three') || btnClass.contains('btn_four') || btnClass.contains('btn_five') ||
            btnClass.contains('btn_six') || btnClass.contains('btn_seven') || btnClass.contains('btn_eight') ||
            btnClass.contains('btn_nine')) {
            currentNumber += button.textContent; 
            updateScreen(previousNumber + " " + operator + " " + currentNumber);
             
            
        }

        
        if (btnClass.contains('btn_point')) {
            if (!currentNumber.includes('.')) { 
                currentNumber += '.';
                updateScreen(previousNumber + " " + operator + " " + currentNumber);
            }
        }

        
        if (btnClass.contains('btn_plus') || btnClass.contains('btn_minus') ||
            btnClass.contains('btn_multiply') || btnClass.contains('btn_division')) {
            if (currentNumber) {
                operator = button.textContent; 
                previousNumber = currentNumber; 
                currentNumber = ''; 
                updateScreen(previousNumber + " " + " " + operator + " " + currentNumber);
            }
        }

        
        if (btnClass.contains('btn_equals')) {
            if (previousNumber && currentNumber && operator) {
                let result = 0;
                const num1 = parseFloat(previousNumber);
                const num2 = parseFloat(currentNumber);

                if (operator == '+') {
                    result = ('Ответ: ') + (num1 + num2);

                } else if (operator == '-') {
                    result = ('Ответ: ') + (num1 - num2);

                } else if (operator == 'x') {
                    result = 'Ответ: ' + num1 * num2;

                } else if (operator == '/') {
                    if(num2 !== 0) {
                        result = 'Ответ: ' + num1 / num2;
                    } else {
                        result = 'Ошибка';
                    }
                } 

                
                updateScreen(result);
                previousNumber = ''; 
                currentNumber = '';
                operator = '';
            }
        }

        
        if (btnClass.contains('btn_ac')) {
            currentNumber = '';
            previousNumber = '';
            operator = '';
            updateScreen('0');
        }

        console.log(currentNumber, previousNumber, operator);
    });
});