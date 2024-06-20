const db = require("../db");

async function createCar({ make, model, year }) {
  const result = await db.query(
    `
    INSERT INTO car (make, model, year, date_created, user_id, deleted_flag)
    VALUES (:make, :model, :year, NOW(), :user_id, :deleted_flag);
  `,
    {
      make,
      model,
      year,
      user_id: 1,
      deleted_flag: 0,
    }
  );
  return result[0];
}

async function getCars() {
  const result = await db.query(
    `
    SELECT * FROM car;
    `
  );
  return result[0];
}

async function getCar({ carId }) {
  const result = await db.query(
    `
    SELECT * from car where id=:carId
    `,
    { carId }
  );

  return result[0];
}

async function updateCar({ carId, make, model, year }) {
  const result = await db.query(
    `UPDATE car SET make = :make, model = :model, year = :year WHERE id = :carId;`,
    {
      carId,
      make,
      model,
      year,
    }
  );

  return result[0].affectedRows === 0 ? false : true;
}

module.exports = {
  createCar,
  getCars,
  getCar,
  updateCar,
};
