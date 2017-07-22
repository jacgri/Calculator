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

        it('divides two numbers', function(){
            expect(calculator.divideNumbers(numberOne, numberTwo)).toBe(numberOne / numberTwo)
        })

        it('multiplies two numbers', function(){
            expect(calculator.multiplyNumbers(numberOne, numberTwo)).toBe(numberOne * numberTwo)
        })
        it('work out the value of a number to the power of another number',function(){
            expect(calculator.powerOfNumbers(numberOne, numberTwo)).toBe(Math.pow(numberOne,numberTwo))
            
        })
        it('work out the square root of a number', function(){
            expect(calculator.squarerootNumbers(numberOne)).toBe(Math.sqrt(numberOne))
        })

})