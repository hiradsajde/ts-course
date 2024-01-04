function merge<T,U>(objA : T , objB : U){
    return {...objA , ...objB}
}

const mergeObj = merge({name : 'hirad'} , {age : 19})

console.log(mergeObj.age)