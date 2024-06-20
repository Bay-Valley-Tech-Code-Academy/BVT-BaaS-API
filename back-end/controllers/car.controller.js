const {
  createCar,
  getCars,
  getCar,
  updateCar,
} = require("../services/car.services");

async function createCarHandler(req, res) {
  try {
    const data = await createCar(req.body);
    if (!data) {
      return res.status(400).json({
        message: "There was an error with the request",
      });
    }
    return res.status(201).json({
      message: "Car created successfully",
    });
  } catch (e) {
    return res.status(500).json({
      message: "An unexpected error occured please try again later.",
    });
  }
}

async function updateCarHandler(req, res) {
  try {
    const update = await updateCar({ ...req.body, ...req.params });
    if (!update) {
      return res.status(400).json({
        error: "Not Found",
        message: "Car not found",
      });
    }
    return res.status(200).json({
      message: "Car updated successfully",
    });
  } catch (e) {
    return res.status(500).json({
      message: "An unexpected error occured please try again later.",
    });
  }
}

async function getCarsHandler(req, res) {
  try {
    const cars = await getCars();
    return res.status(200).json({
      message: "Cars retrieved successfully",
      data: cars,
    });
  } catch (e) {
    return res.status(500).json({
      message: "An unexpected error occured please try again later.",
    });
  }
}

async function getCarHandler(req, res) {
  try {
    const [car] = await getCar(req.params);

    if (!car) {
      return res.status(400).json({
        message: "There was an error with the request",
      });
    }
    return res.status(200).json({
      message: "Car retrieved successfully",
      data: car,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "An unexpected error occured please try again later.",
    });
  }
}

module.exports = {
  createCarHandler,
  getCarsHandler,
  getCarHandler,
  updateCarHandler,
};
