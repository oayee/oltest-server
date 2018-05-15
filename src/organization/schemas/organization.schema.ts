import * as mongoose from 'mongoose';
import {VehicleSchema} from '../../vehicles/schemas/vehicle.schema';

export const OrganizationSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    vehicles: [VehicleSchema]
},
    {
    collection: 'organization',
    versionKey: false
});