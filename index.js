export class Room {
    constructor(name, bookings, rate, discount) {
        this.name = name;
        this.bookings = bookings;
        this.rate = rate;
        this.discount = discount;
    }

    isOccupied(date) {
        for (let i = 0; i < this.bookings.length; i++) {
            if (date >= this.bookings[i].checkIn && date <= this.bookings[i].checkOut) {
                return true;
            } 
        }
        return false;
    }

    occupancyPercentage(startDate, endDate) {
        const numeroDeDiasSeleccionados = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
        let date = new Date(startDate);
        let countDays = 0;
        for (let i = 0; i < numeroDeDiasSeleccionados; i++) {
            if (this.isOccupied(date)) { countDays += 1 };
            date.setDate(date.getDate() + 1);
        }

        return (countDays * 100) / (numeroDeDiasSeleccionados + 1);
    }

    static totalOccupancyPercentage(rooms, startDate, endDate) {

    }

    static availableRooms(rooms, startDate, endDate) {

    }
}

export class Booking {
    constructor(name, email, checkIn, checkOut, discount, room) {
        this.name = name;
        this.email = email;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.discount = discount;
        this.room= room;
    }

    getFee() {

    }
}