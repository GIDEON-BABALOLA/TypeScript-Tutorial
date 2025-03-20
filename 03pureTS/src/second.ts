interface TakePhoto{
    cameraMode: string
    filter: string
    burst: number
}
interface Story {
    createStory(): void;
}
class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    )
    {}
}
// Here the interface enables the class to be able to add more properties
class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string  
    ){

    }
    createStory(): void{
        console.log("story was created")
    }
}