'use strict';

require('dotenv').config();
const { db, reservations } = require('../src/models/index.js');

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing reservations model', () => {
  test('User can create a reservation', async () => {
    const guest = await reservations.create({
      Dish: 'beef',
      Drink: 2,
      RSVP: true,
      PlusOne: true,
    });

    expect(guest.Dish).toEqual('beef');
    expect(guest.Drink).toEqual(2);
    expect(guest.RSVP).toBeTruthy();
    expect(guest.RSVP).toBeTruthy();
  });
});