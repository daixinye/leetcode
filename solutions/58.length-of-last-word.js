
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length
};

var lengthOfLastWord = function(s) {
    return s.trim().length - 1  - s.trim().lastIndexOf(' ')
};

var lengthOfLastWord = function(s) {
    var i = s.length - 1, count = 0
    while(i >=0){
        if(s.charAt(i) !== ' '.charAt(0)){
            count++
        }else{
            if(count) break
        }
        i--
    }

    return count
};

void function test(f){
    const mock = [
        ['d'],
        ['hello world  '],
        [''],
    ]

    mock.forEach(function(item, index, array) {
        var start = new Date()
        console.log('#',index+1)
        console.log('input: ', item)
        console.log('output: ', f.apply(null,item))
        console.log('time: %s',new Date() - start)
        console.log()
    })
}(lengthOfLastWord)
    