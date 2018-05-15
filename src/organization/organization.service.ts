import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {OrganizationModelToken} from '../core/constants';
import {Model} from 'mongoose';
import {OrganizationInterface} from './interfaces/organization.interface';
import {CreateOrganizationDto} from './dto/create-organization.dto';

@Injectable()
export class OrganizationService {

    constructor(@InjectModel(OrganizationModelToken) private readonly organizationModel: Model<OrganizationInterface>) {}

    async create(createOrganizationDto: CreateOrganizationDto): Promise<OrganizationInterface> {
        const createdOrganization = new this.organizationModel(createOrganizationDto);
        return await createdOrganization.save();
    }

    async findAll(): Promise<OrganizationInterface[]> {
        return await this.organizationModel.find().exec();
    }
}