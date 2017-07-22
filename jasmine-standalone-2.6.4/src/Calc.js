
function Calculator() {

}

Calculator.prototype = {
    
    addNumbers: function(numberOne, numberTwo){
        return(Number(numberOne) + Number(numberTwo))  
    },

    subtractNumbers: function(numberOne, numberTwo){
        return(Number(numberOne) - Number(numberTwo))
    },

    divideNumbers: function(numberOne, numberTwo){
        return(Number(numberOne)/Number(numberTwo))
    },
    multiplyNumbers: function(numberOne, numberTwo){
        return(Number(numberOne)*Number(numberTwo))
    },
    squarerootNumbers: function(numberOne,numberTwo){
        return(Math.pow(numberOne,numberTwo))
    }

}