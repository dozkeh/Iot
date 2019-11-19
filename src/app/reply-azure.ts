import { SensorRaw } from './sensor-raw';

export interface ReplyAzure {
    odata: string;
    value: SensorRaw[];
}
