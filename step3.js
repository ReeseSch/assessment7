
function uniqueChars(str) {
    let charArr = str.split('')
    charArr.sort()
    for (let i = 0; i < charArr.length - 1; i++) {
        if (charArr[i] != charArr[i + 1]){
            return true
        } else {
            return false
        }
    }
}
//O(n^2)
uniqueChars("tacos")
uniqueChars("something with repeating letters")


function sumZero(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[i] + arr[j] === 0){
                return true
            } else {
                continue
            }
        }
    }return false
}
//O(n^2)
sumZero([1, 2, 3, 4, 7])
sumZero([1, 2, 3, -2])





