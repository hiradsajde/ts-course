interface lengthy { 
    length : number , 
}

function Count<T extends lengthy>(length : T){
    console.log(length.length)
}

Count("HI")