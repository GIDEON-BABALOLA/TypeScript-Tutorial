"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getRealTime() {
        return 8;
    }
}
// This won't work because TakePhoto class is abstract
//  const gideon =  new TakePhoto("test", "Test" )
/// But lets do this
class Insta extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const gideon = new Insta("test", "Test", 3);
gideon.getRealTime();
