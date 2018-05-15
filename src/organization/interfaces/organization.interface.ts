import {Document} from 'mongoose';
import {VehicleInterface} from '../../vehicles/interfaces/vehicle.interface';

export interface OrganizationInterface extends Document {
    name: string;
    qty: number;
    vehicles: VehicleInterface[];
}