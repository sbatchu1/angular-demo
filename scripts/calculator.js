var calculator = function(){
    this.result = 0;
    this.selectedOperation = function(button){
        this.operator = button;
    }

    this.calculate = function(){
        var number1 = parseFloat(this.operand1);
        var number2 = parseFloat(this.operand2);
        if(this.operator === '+')
        {
            this.result = number1 + number2;
        }else if(this.operator === '-')
        {
            this.result = number1 - number2;
        }else if(this.operator === '*')
        {
            this.result = number1 * number2;
        }else if(this.operator === '/')
        {
            this.result = number1 / number2;
        }

    }
}

var  app = angular.module("calculatorApp", []);
app.controller("calculator", calculator);
