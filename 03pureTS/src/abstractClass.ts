abstract class TakePhoto{
    constructor(
public cameraMode: string,
public filter: string
    ){

    }
    abstract getSepia(): void
    getRealTime(): number{
        return 8
    }
}
// This won't work because TakePhoto class is abstract
//  const gideon =  new TakePhoto("test", "Test" )
 /// But lets do this

class Insta extends TakePhoto{
constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
     
){
    super(cameraMode, filter)
}
getSepia(): void{
console.log("Sepia")
}
}
const gideon =  new Insta("test", "Test", 3 )
gideon.getRealTime()