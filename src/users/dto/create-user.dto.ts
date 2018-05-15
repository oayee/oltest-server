import {OrganizationInterface} from '../../organization/interfaces/organization.interface';

export class CreateUserDto {
    readonly name: string; // имя
    readonly firstname: string; // фамилия
    readonly lasname: string; // отчество
    readonly organization: OrganizationInterface;
}