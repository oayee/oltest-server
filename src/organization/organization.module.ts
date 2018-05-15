import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {OrganizationModelName} from '../core/constants';
import {OrganizationSchema} from './schemas/organization.schema';
import {OrganizationController} from './organization.controller';
import {OrganizationService} from './organization.service';

@Module({
    imports: [MongooseModule.forFeature([{name: OrganizationModelName, schema: OrganizationSchema }])],
    controllers: [OrganizationController],
    providers: [OrganizationService]
})
export class OrganizationModule {}