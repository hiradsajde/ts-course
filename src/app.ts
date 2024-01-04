interface lengthy { 
    length : number , 
}

function Count<T extends lengthy , U extends keyof T>(length : T , name : U){
    console.log(name)
}

Count({
    length : 5 , 
    name : 'hirad'
} , 'name')