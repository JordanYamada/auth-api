'use strict';

const reservationModel = (sequelize, DataTypes) => sequelize.define('Reservations', {
  Dish: { type: DataTypes.ENUM('chicken', 'beef', 'fish', 'vegetable'), required: true },
  Drink: { type: DataTypes.INTEGER, required: true },
  RSVP: { type: DataTypes.BOOLEAN, required: true },
  PlusOne: { type: DataTypes.BOOLEAN, required: true },
});

module.exports = reservationModel;
