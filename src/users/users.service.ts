import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {UserModelToken} from '../core/constants';
import {Model, Schema} from 'mongoose';
import {UserInterface} from './interfaces/user.interface';
import {CreateUserDto} from './dto/create-user.dto';
import ObjectId = Schema.Types.ObjectId;

@Injectable()
export class UsersService {

    constructor(@InjectModel(UserModelToken) private readonly userModel: Model<UserInterface>) {}

    async create(createUserDto: CreateUserDto): Promise<UserInterface> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<UserInterface[]> {
        return await this.userModel.find().exec();
    }

    async findOne(id: ObjectId): Promise<UserInterface> {
        return await this.userModel.findById(id).exec();
    }
}