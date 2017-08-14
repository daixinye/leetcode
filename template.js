/**
 * @leetcode #0
 * @param {number} num
 * @return {boolean}
 */
var leetcode = function(num) {
    return Boolean(num)
};

void function test(f){
    const mock = [
        [0],
        [1],
    ]

    const render = function(val){
        console.log(val)
        console.log()
    }

    mock.forEach(function(item, index, array) {
        render(f.apply(null,item))
    })
}(leetcode)