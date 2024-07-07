// STRETCH
const cars = [
    {
        vin: '12345678901234567',
        make: 'Ford',
        model: 'Mustang',
        mileage: 10000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1234567890123abcd',
        make: 'Chevrolet',
        model: 'Impala',
        mileage: 20000,
        title: 'salvage',
    },
    {
        vin: '123456789012abcde',
        make: 'Oldsmobile',
        model: 'Cutlass',
        mileage: 40000,
    }
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars);
    })
};