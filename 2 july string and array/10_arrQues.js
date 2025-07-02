
// Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`



function groupByType(arr){

    let obj={
        number:[],
        string:[],
        boolean:[]
    }

    for(let i of arr)
    {
        if(typeof i == 'string')
        {
            obj.string.push(i)
        }
        else if(typeof i == 'number')
        {
            obj.number.push(i)
        }
        else{
            obj.boolean.push(i)
        }

    }
    
    return obj;
}

console.log(groupByType([1, 'a', true, 2, 'b']));