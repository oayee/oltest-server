import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CatsModule} from './cats/cats.module';
import {dbConnection} from './core/constants';
import {VehiclesModule} from './vehicles/vehicles.module';
import {OrganizationModule} from './organization/organization.module';

@Module({
    imports: [
        MongooseModule.forRoot(dbConnection),
        CatsModule,
        VehiclesModule,
        OrganizationModule
    ],
})
export class ApplicationModule {}