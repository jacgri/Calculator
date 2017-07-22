describe('Calc', function () {
    var calculator
    var numberOne = 10
    var numberTwo = 5
    
    

    beforeEach(function () {
        calculator = new Calculator()
    })
        it('adds two numbers together', function(){
            expect(calculator.addNumbers(numberOne, numberTwo)).toBe(numberOne + numberTwo)
        })
        
        it('subtracts two numbers', function(){
            expect(calculator.subtractNumbers(numberOne, numberTwo)).toBe(numberOne - numberTwo)
        })

})