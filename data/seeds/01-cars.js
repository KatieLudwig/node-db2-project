// STRETCH
const cars = [
    {
        vin: '11111111111111111',
        make: 'Ford',
        model: 'Mustang',
        mileage: 10000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '22222222222222222',
        make: 'Chevrolet',
        model: 'Impala',
        mileage: 20000,
        title: 'salvage',
    },
    {
        vin: '33333333333333333',
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