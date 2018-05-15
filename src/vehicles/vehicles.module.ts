import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {VehicleModelName} from '../core/constants';
import {VehicleSchema} from './schemas/vehicle.schema';
import {VehiclesController} from './vehicles.controller';
import {VehiclesService} from './vehicles.service';

@Module({
    imports: [MongooseModule.forFeature([{name: VehicleModelName, schema: VehicleSchema }])],
    controllers: [VehiclesController],
    providers: [VehiclesService]
})
export class VehiclesModule {}