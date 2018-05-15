import {VehicleInterface} from '../../vehicles/interfaces/vehicle.interface';

export class CreateOrganizationDto {
    readonly name: string;
    readonly qty: number;
    readonly vehicles: VehicleInterface[] = [];
}