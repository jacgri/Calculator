
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
    }
}