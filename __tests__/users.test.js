'use strict';

require('dotenv').config();
const { db, users } = require('../src/models/index.js');

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing user model', () => {
  test('User can have the role of admin, having the access to all CRUD', async () => {
    const user = await users.create({
      username: 'Test',
      password: 'Test',
      role: 'admin'
    });

    console.log(user.token);
    expect(user.username).toEqual('Test');
    expect(user.token).toBeTruthy();
    expect(user.role).toEqual('admin');
    expect(user.capabilities).toEqual(['read', 'create', 'update', 'delete']);
  });
});