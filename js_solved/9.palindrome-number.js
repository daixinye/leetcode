
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = String(x).split('')
    while(x.length>1)
        if(x.pop() != x.shift()) return false
    return true
};

void function test(f){
    const mock = [
        [123321],
        [123211232112321123211],
        [11111]
    ]

    mock.forEach(function(item, index, array) {
        var start = new Date()
        console.log('#',index+1)
        console.log('input: ', item)
        console.log('output: ', f.apply(null,item))
        console.log('time: %s',new Date() - start)
        console.log()
    })
}(isPalindrome)
    
