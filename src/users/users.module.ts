import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {UserModelName} from '../core/constants';
import {UserSchema} from './schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: UserModelName, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}