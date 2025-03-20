//Enums
enum AirplaneSeatChoice {
    AISLE = 10,
    MIDDLE = 22,
    WINDOW,
    FOURTH
}
//numbers are automatically been calculated in enums, when we first create the enum, the values
// will be assigned 0, 1, 2, 3, but if we assign the first member as
// text, then will will also have to assign the next member
enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window",
    FOURTH = 0
}
const enum myAirplane {
    AISLE = "aisle",
    MIDDLE = 3,
    WINDOW,
    FOURTH 
}
const mySeat = myAirplane.AISLE;
const hcSeat = SeatChoice.AISLE
export {}