import {Document} from 'mongoose';
import {OrganizationInterface} from '../../organization/interfaces/organization.interface';

export interface UserInterface extends Document {
    name: string; // имя
    firstname: string; // фамилия
    lasname: string; // отчество
    organization: OrganizationInterface;
}