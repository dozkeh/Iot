import { Sensor } from './sensor';
import { ReplyAzure } from './reply-azure';
import { SensorRaw } from './sensor-raw';

export class SensorFactory {

    static fromRaw(s: SensorRaw): Sensor {
    let sensor: Sensor;
    sensor.id = s.ID;
    sensor.location = s.Location;
    sensor.value = s.Value;
    sensor.kind = s.Kind;
    sensor.timestamp = s.Timestamp;
    return sensor;
    }

}

