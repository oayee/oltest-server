import {Body, Controller, Get, Post} from '@nestjs/common';
import {OrganizationService} from './organization.service';
import {CreateOrganizationDto} from './dto/create-organization.dto';
import {OrganizationInterface} from './interfaces/organization.interface';

@Controller('organization')
export class OrganizationController {
    constructor(private organizationService: OrganizationService) {}

    @Post()
    async create(@Body() createOrganizationDto: CreateOrganizationDto) {
        return this.organizationService.create(createOrganizationDto);
    }

    @Get()
    async findAll(): Promise<OrganizationInterface[]> {
        return this.organizationService.findAll();
    }
}