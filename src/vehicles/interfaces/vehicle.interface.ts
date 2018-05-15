import {Document} from 'mongoose';

export interface Value extends Document {
    lat: number;
    lon: number;
    time: string;
}

export interface Coordinate extends Document {
    date: Date;
    values: Value[];
}

export interface Result extends Document {
    date: Date;
    workTime: string;
    stayTime: string;
    lossTime: string;
    driveTime: string;
    dist: number;
    square: number;
}

export interface VehicleInterface extends Document {
    number: string;
    type: string;
    coordinates: Coordinate[];
    results: Result[];
}