import * as mongoose from 'mongoose';
import {OrganizationSchema} from '../../organization/schemas/organization.schema';

export const UserSchema = new mongoose.Schema({
    name: String, // имя
    firstname: String, // фамилия
    lasname: String, // отчество
    organization: OrganizationSchema
});