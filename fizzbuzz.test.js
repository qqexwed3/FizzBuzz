const fizzbuzz = require('./fizzbuzz')

test('A number divisible by 3 equal Fizz ', () => {
    for(i = 1;i<=50;i++){
        if(i % 3 === 0 && i % 5 !== 0){
            expect(fizzbuzz(i)).toBe("Fizz");  
        }
    }
})

test('A number divisible by 5 equal Buzz ', () => {
    for(i = 1;i<=50;i++){
        if(i % 5 === 0 && i % 3 !== 0){
            expect(fizzbuzz(i)).toBe("Buzz");  
        }
    }
})

test('A number divisible by 3 and 5 equal FizzBuzz ', () => {
    for(i = 1;i<=50;i++){
        if(i % 3 === 0 && i % 5 === 0){
            expect(fizzbuzz(i)).toBe("FizzBuzz");  
        }
    }
})

test('A number not divisible by 3 or 5 equal number itself ', () => {
    for(i = 1;i<=50;i++){
        if(i % 3 !== 0 && i % 5 !== 0){
            expect(fizzbuzz(i)).toBe(i);  
        }
    }
})
