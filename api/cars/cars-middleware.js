const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

async function checkCarId (req, res, next) {
  try {
    const car = await Cars.getById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    req.car = car;
    next();
  } catch (err) {
    next(err);
  }
}

function checkCarPayload(req, res, next) {
  const { vin, make, model, mileage, title, transmission } = req.body;
  if (!vin) return res.status(400).json({ message: 'Vin number is required' });
  if (!make) return res.status(400).json({ message: 'Make is required' });
  if (!model) return res.status(400).json({ message: 'Model is required' });
  if (!mileage) return res.status(400).json({ message: 'Mileage is required' });
  if (!title) return res.status(400).json({ message: 'Title is required' });
  if (!transmission) return res.status(400).json({ message: 'Transmission is required' });
  next();
}

function checkVinNumberValid (req, res, next) {
  const { vin } = req.body;
  if (!vinValidator.validate(vin)) {
    return res.status(400).json({ message: `vin ${vin} is invalid` });
  }
  next();
}

async function checkVinNumberUnique (req, res, next) {
  try {
    const existingCar = await Cars.getAll().where('vin', req.body.vin).first();
    if (existingCar) {
      return res.status(400).json({ message: `vin ${req.body.vin} already exists` });
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};
