class Value {
    lat: number;
    lon: number;
    time: string;
}

class Coordinate {
    date: Date = new Date();
    values: Value[] = [];
}

class Result {
    date: Date = new Date();
    workTime: string;
    stayTime: string;
    lossTime: string;
    driveTime: string;
    dist: number;
    square: number;
}

export class CreateVehicleDto {
    readonly number: string;
    readonly type: string;
    readonly coordinates: Coordinate[] = [];
    readonly results: Result[] = [];
}