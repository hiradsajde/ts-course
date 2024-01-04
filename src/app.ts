const information : Array<string | number> = ['hirad' , 1]

const promise : Promise<string> = new Promise((resolve , reject) => {
    setTimeout(() => resolve('hi') , 2000)
})