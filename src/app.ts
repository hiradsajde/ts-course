function storage<T extends any[], U extends keyof T>(list : T , key : U){
    return list[key]
}

const list = storage(['hirad' , 'hooman'] , 1)
console.log(list)