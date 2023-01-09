import { Room, Booking } from './index';

const newRoom = new Room('E32', [], 123.23, 20);
const newBooking = new Booking("Felipe", "felipe@gmail.com", new Date('2022-02-03'), new Date('2022-02-06'), 10, newRoom);
newRoom.bookings.push(newBooking);

test('Room is occupied', function() {
    expect(newRoom.isOccupied(new Date('2022-02-04'))).toBeTruthy();
});

test('Room is not occupied', function() {
    expect(newRoom.isOccupied(new Date('2022-02-02'))).not.toBeTruthy();
});

test('Room percentage of occupancy', function() {
    expect(newRoom.occupancyPercentage(new Date('2022-02-03'), new Date('2022-02-12'))).toBe(40);
});

test('Total room percentage of occupancy', function() {
    expect(newRoom.totalOccupancyPercentage([newRoom], '2022-02-03', '2022-02-06')).toBe(100);
});

test('Rooms avaliables in especific date', function() {
    expect(newRoom.availableRooms([newRoom], '2022-02-03', '2022-02-06')).not.toBe([]);
});

test('Get fee of bookings', function() {
    expect(newBooking.getFee()).toBe(100);
});