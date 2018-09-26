
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var a = [1,2]
    for(var i = 2; i < n ; i++){
        a[i] = a[i-1] + a[i-2]
    }
    return a[n-1]
};

void function test(f){
    const mock = [
        [1],
        [2],
        [3],
        [40]
    ]

    mock.forEach(function(item, index, array) {
        var start = new Date()
        console.log('#',index+1)
        console.log('input: ', item)
        console.log('output: ', f.apply(null,item))
        console.log('time: %s',new Date() - start)
        console.log()
    })
}(climbStairs)
    