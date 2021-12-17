var unsortedObject = {
    'caraccidents': {
        'numbers': 805,
        'records': 672
    },
    'murders': {
        'numbers': 81,
        'records': 1553,
    },
    'suicides': {
        'numbers': 485,
        'records': 413
    }
}
// 'An array is an ordered collection of values.'
// 'An object is an unordered collection of properties, if we build an object with presorted properties, it is not guaranteed that they will display in the same order'
// είναι πάντα πιο εύκολα να δουλεύουμαι με arrays, η δική μου λύση είναι να το μετατρέψω σε sorted array of objects

//The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
//Array.prototype.sort() method sorts the elements of an array in place and returns the sorted array.

var keysAndValuesOfUnsortedObject = Object.entries(unsortedObject).sort((a, b) => {
    if (a[1].numbers > b[1].numbers) {
        return -1
    }
})
console.log(keysAndValuesOfUnsortedObject)

//array of shorted objects
var sortedArrayOfObjects = keysAndValuesOfUnsortedObject.map( (each) => {
    var nu = new Object()
    
    nu[each[0]] = each[1]

    return nu
})
console.log(unsortedObject)
console.log(sortedArrayOfObjects)

