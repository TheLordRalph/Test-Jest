export class Room {

    name: string;
    bookings: Booking[];
    rate: number;
    discount: number;

    constructor(name: string, bookings: Booking[], rate: number, discount: number) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }


    isOccupied(date: Date) {
        for (let i = 0; i < this.bookings.length; i++) {
            if (date >= this.bookings[i].checkIn && date <= this.bookings[i].checkOut) {
                return true;
            } 
        }
        return false;
    }

    occupancyPercentage(startDate: Date, endDate: Date) {
        const numeroDeDiasSeleccionados = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
        let date = new Date(startDate);
        let countDays = 0;
        for (let i = 0; i < numeroDeDiasSeleccionados; i++) {
            if (this.isOccupied(date)) { countDays += 1 };
            date.setDate(date.getDate() + 1);
        }

        return (countDays * 100) / (numeroDeDiasSeleccionados + 1);
    }

    static totalOccupancyPercentage(rooms: Room[], startDate: Date, endDate: Date) {
        let totalOccupancy = 0;
        rooms.map(room => (
            totalOccupancy += room.occupancyPercentage(startDate, endDate)
        ))
        return (totalOccupancy / (rooms.length * 100)) * 100;
    }

    static availableRooms(rooms: Room[], startDate: Date, endDate: Date) {
        let roomsAvailable: Room[] = [];
        rooms.map(room => (
            room.occupancyPercentage(startDate, endDate) === 0 ? roomsAvailable.push(room) : null
        ))
        return roomsAvailable;
    }
}

export class Booking {

    name: string;
    email: string;
    checkIn: Date;
    checkOut: Date;
    discount: number;
    room: Room;

    constructor(name: string, email: string, checkIn: Date, checkOut: Date, discount: number, room: Room) {
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room = room;
    }

    getFee() {
        let rateRoom = this.room.rate - (this.room.rate * this.room.discount) / 100;
        return rateRoom - (rateRoom * this.discount) / 100;
    }
}