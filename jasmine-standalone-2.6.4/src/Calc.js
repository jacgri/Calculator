
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
    powerOfNumbers: function(numberOne,numberTwo){
        return(Math.pow(numberOne,numberTwo))
    },
    squarerootNumbers: function(numberOne){
        return(Math.sqrt(numberOne))
    }

}