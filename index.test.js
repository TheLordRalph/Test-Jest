import { Room, Booking } from './index';


test('Room is occupied', function() {
    const room01 = new Room('E32', [], 123.23, 20);
    const booking01 = new Booking("Felipe", "felipe@gmail.com", new Date('2022-02-03'), new Date('2022-02-06'), 10, room01);
    const booking02 = new Booking("Gonzalo", "gonzalo@gmail.com", new Date('2022-02-07'), new Date('2022-02-08'), 10, room01);
    const booking03 = new Booking("Pepe", "pepe@gmail.com", new Date('2022-02-12'), new Date('2022-02-14'), 10, room01);
    room01.bookings.push(booking01, booking02, booking03);

    expect(room01.isOccupied(new Date('2022-02-13'))).toBeTruthy();
});

test('Room is not occupied', function() {
    const room01 = new Room('E32', [], 123.23, 20);
    const booking01 = new Booking("Felipe", "felipe@gmail.com", new Date('2022-02-03'), new Date('2022-02-06'), 10, room01);
    const booking02 = new Booking("Gonzalo", "gonzalo@gmail.com", new Date('2022-02-07'), new Date('2022-02-08'), 10, room01);
    const booking03 = new Booking("Pepe", "pepe@gmail.com", new Date('2022-02-12'), new Date('2022-02-14'), 10, room01);
    room01.bookings.push(booking01, booking02, booking03);

    expect(room01.isOccupied(new Date('2022-02-02'))).not.toBeTruthy();
});

test('Room percentage of occupancy', function() {
    const room01 = new Room('E32', [], 123.23, 20);
    const booking01 = new Booking("Felipe", "felipe@gmail.com", new Date('2022-02-03'), new Date('2022-02-06'), 10, room01);
    const booking02 = new Booking("Gonzalo", "gonzalo@gmail.com", new Date('2022-02-07'), new Date('2022-02-08'), 10, room01);
    const booking03 = new Booking("Pepe", "pepe@gmail.com", new Date('2022-02-12'), new Date('2022-02-14'), 10, room01);
    room01.bookings.push(booking01, booking02, booking03);

    expect(room01.occupancyPercentage(new Date('2022-02-03'), new Date('2022-03-03'))).toBeCloseTo(31.03);
});

test('Total room percentage of occupancy', function() {
    const room01 = new Room('E32', [], 123.23, 20);
    const room02 = new Room('E33', [], 323.23, 0);
    const room03 = new Room('E34', [], 203.23, 12);
    const booking01 = new Booking("Felipe", "felipe@gmail.com", new Date('2022-02-03'), new Date('2022-02-06'), 10, room01);
    const booking02 = new Booking("Gonzalo", "gonzalo@gmail.com", new Date('2022-02-07'), new Date('2022-02-08'), 10, room01);
    const booking03 = new Booking("Pepe", "pepe@gmail.com", new Date('2022-02-12'), new Date('2022-02-14'), 10, room02);
    const booking04 = new Booking("Antonio", "antonio@gmail.com", new Date('2022-02-05'), new Date('2022-02-10'), 10, room03);
    const booking05 = new Booking("Luis", "luis@gmail.com", new Date('2022-02-11'), new Date('2022-02-20'), 10, room03);
    room01.bookings.push(booking01, booking02);
    room02.bookings.push(booking03);
    room03.bookings.push(booking04, booking05);

    expect(Room.totalOccupancyPercentage([room01, room02, room03], new Date('2022-02-03'), new Date('2022-03-03'))).toBeCloseTo(28.74);
});

test('Rooms avaliables in especific date', function() {
    const room01 = new Room('E32', [], 123.23, 20);
    const room02 = new Room('E33', [], 323.23, 0);
    const room03 = new Room('E34', [], 203.23, 12);
    const booking01 = new Booking("Felipe", "felipe@gmail.com", new Date('2022-02-03'), new Date('2022-02-06'), 10, room01);
    const booking02 = new Booking("Gonzalo", "gonzalo@gmail.com", new Date('2022-02-07'), new Date('2022-02-08'), 10, room01);
    const booking03 = new Booking("Pepe", "pepe@gmail.com", new Date('2022-02-12'), new Date('2022-02-14'), 10, room02);
    const booking04 = new Booking("Antonio", "antonio@gmail.com", new Date('2022-02-05'), new Date('2022-02-10'), 10, room03);
    const booking05 = new Booking("Luis", "luis@gmail.com", new Date('2022-02-11'), new Date('2022-02-20'), 10, room03);
    room01.bookings.push(booking01, booking02);
    room02.bookings.push(booking03);
    room03.bookings.push(booking04, booking05);

    expect(Room.availableRooms([room01, room02, room03], new Date('2022-02-03'), new Date('2022-02-06'))).toStrictEqual([room02]);
});

test('Get fee of bookings', function() {
    const room01 = new Room('E32', [], 123.23, 20);
    const booking01 = new Booking("Felipe", "felipe@gmail.com", new Date('2022-02-03'), new Date('2022-02-06'), 10, room01);
    room01.bookings.push(booking01);

    expect(booking01.getFee()).toStrictEqual(88.7256);
});