
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     let add = 0
//     digits[digits.length - 1] = digits[digits.length - 1] + 1
//     for(let i = digits.length - 1; i >= 0; i--){
//         digits[i] = digits[i] + add
//         add = digits[i] >= 10 ? 1 : 0
//         digits[i] >= 10 && (digits[i] -= 10)
//     }
//     add && digits.unshift(1)
//     return digits
// };

var plusOne = function(digits) {
    let add = 0, len = digits.length
    digits[len- 1]++
    for(let i = len - 1; i >= 0; i--){
        digits[i] += add
        add = 0
        if(digits[i] >= 10 ){
            add = 1
            digits[i] -= 10
        } 
    }
    add && digits.unshift(1)
    return digits
};

void function test(f){
    const mock = [
        [[0]],
        [[1,9]],
        [[9,9]],
        [[8,9,9,9]]
    ]

    const render = function(val){
        console.log(val)
        console.log()
    }

    mock.forEach(function(item, index, array) {
        render(f.apply(null,item))
    })
}(plusOne)
    