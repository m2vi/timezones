import moment from 'moment-timezone';
import _ from 'underscore';
import { Config, TableProps, Zones } from './types';
import mongoose from 'mongoose';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment as any);

class Tz {
  public get moment() {
    return moment;
  }

  private get _zones(): Array<Zones> {
    const temp: any = {};

    return _.unique(
      this.moment.tz.names().map((name) => {
        const mtz = this.moment.tz(name);

        const zone = mtz.format('z');
        const offset = mtz.utcOffset();

        temp[name] = { offset, zone };

        return name;
      })
    ).map((name) => ({ name, ...temp[name] }));
  }

  public table(): TableProps[] {
    const zones = this._zones;

    const newZones: TableProps[] = zones.map(({ zone, name, offset }) => {
      return {
        name: zone,
        timezone: name,
        offset: offset.toString(),
      };
    });

    return newZones;
  }

  private async config(): Promise<Config> {
    const db = await mongoose.connect(process.env.MONGO_URI!, { dbName: 'smarthub' });

    const config = await db.connection.collection<Config>('timezones').findOne({ primary: true });

    return config;
  }

  async boxTimezones(): Promise<string[]> {
    const config = await this.config();

    return config?.timezones;
  }
}

export const tz = new Tz();
export default tz;
