class DataStorage<T>{
    constructor(public data : T[]){
        
    }
    add(value : T){
        this.data.push(value)
    }
    delete(value : T){
        this.data = this.data.splice(this.data.indexOf(value) , 1)
    }
    describe(){
        console.log(this.data)
    }
}

const Data = new DataStorage<string>(['hirad'])
Data.add('roya')
Data.describe()