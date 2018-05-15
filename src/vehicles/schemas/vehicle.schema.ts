import * as mongoose from 'mongoose';

const ValueSchema = new mongoose.Schema({
    lat: Number,
    lon: Number,
    time: String
});

const CoordinateSchema = new mongoose.Schema({
    date: Date,
    values: [ValueSchema]
});

const ResultSchema = new mongoose.Schema({
    date: Date,
    workTime: String,
    stayTime: String,
    lossTime: String,
    driveTime: String,
    dist: Number,
    square: Number
});

export const VehicleSchema = new mongoose.Schema({
        number: String,
        type: String,
        coordinates: [CoordinateSchema],
        results: [ResultSchema],
    },
    {
        collection: 'vehicles',
        versionKey: false
    });