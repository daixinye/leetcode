/**
 * @leetcode #20
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length < 2) return false
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let stack = []
    return s.split('').every(val => {
        if(map[val]){
            stack.push(val)
            return true
        }
        return map[stack.pop()] == val
    }) && stack.length == 0
};

void function test(f){
    const mock = [
        ["("],
        [")"],
        ["()[]{}"],
        ["(]"],
        ["(])]"],
        ["()[{{}}]"],
        ["(({{"]
    ]

    const render = function(val){
        console.log(val)
        console.log()
    }

    mock.forEach(function(item, index, array) {
        render(f.apply(null,item))
    })
}(isValid)