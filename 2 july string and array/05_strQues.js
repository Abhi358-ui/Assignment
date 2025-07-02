
// Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`

function charFrequency(str){

    let arr = str.split('');
    let obj={}
    let k=0;
    
    for(let i of arr)
    {
        if(!obj[`${i}`]){
            obj[`${i}`]=k
        }

        
    }

    return obj;
}

console.log(charFrequency("aabb"));