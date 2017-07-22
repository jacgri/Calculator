describe('Add', function () {
    var numberOne
    var numberTwo
    

    beforeEach(function () {
        calculator = new Calculator()
    })
        it('it adds two numbers together', function(){
                expect(calculator.addNumbers(numberOne, numberTwo)).toBe(Number(numberOne) + Number(numberTwo))
        })

})