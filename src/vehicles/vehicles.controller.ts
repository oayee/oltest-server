import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {VehiclesService} from './vehicles.service';
import {CreateVehicleDto} from './dto/create-vehicle.dto';
import {VehicleInterface} from './interfaces/vehicle.interface';
import {Schema} from 'mongoose';
import ObjectId = Schema.Types.ObjectId;

@Controller('vehicles')
export class VehiclesController {
    constructor(private vehiclesService: VehiclesService) {}

    @Post()
    async create(@Body() createVehicleDto: CreateVehicleDto) {
       return this.vehiclesService.create(createVehicleDto);
    }

    @Get()
    async findAll(): Promise<VehicleInterface[]> {
        return this.vehiclesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: ObjectId): Promise<VehicleInterface> {
        return this.vehiclesService.findOne(id);
    }
}