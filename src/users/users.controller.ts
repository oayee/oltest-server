import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {Schema} from 'mongoose';
import ObjectId = Schema.Types.ObjectId;
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UserInterface} from './interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<UserInterface[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: ObjectId): Promise<UserInterface> {
        return this.usersService.findOne(id);
    }
}