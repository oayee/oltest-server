import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {VehicleModelToken} from '../core/constants';
import {Model, Schema} from 'mongoose';
import {VehicleInterface} from './interfaces/vehicle.interface';
import {CreateVehicleDto} from './dto/create-vehicle.dto';
import ObjectId = Schema.Types.ObjectId;

@Injectable()
export class VehiclesService {
    constructor(@InjectModel(VehicleModelToken) private readonly vehicleModel: Model<VehicleInterface>) {}

    async create(createVehicleDto: CreateVehicleDto): Promise<VehicleInterface> {
        const createdVehicle = new this.vehicleModel(createVehicleDto);
        return await createdVehicle.save();
    }

    async findAll(): Promise<VehicleInterface[]> {
        return await this.vehicleModel.find().exec();
    }

    async findOne(id: ObjectId): Promise<VehicleInterface> {
        return await this.vehicleModel.findById(id).exec();
    }
}