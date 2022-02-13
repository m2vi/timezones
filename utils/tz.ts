import moment from 'moment-timezone';
import _ from 'underscore';
import { TableProps } from './types';

class Tz {
  private get _zones() {
    const temp: any = {};

    return _.unique(
      moment.tz.names().map((name) => {
        const mtz = moment.tz(name);

        const zone = mtz.format('z');
        const offset = mtz.utcOffset();

        temp[name] = { offset, zone };

        return name;
      })
    ).map((name) => ({ name, ...temp[name] }));
  }

  private regionName(key: string): string {
    const names = new Intl.DisplayNames(['en'], { type: 'region' });

    return names.of(key);
  }

  table(): TableProps[] {
    const zones = this._zones;

    const newZones: TableProps[] = zones.map(({ zone, name, offset }) => {
      return {
        name: zone,
        timezone: name,
        offset,
      };
    });

    return newZones;
  }
}

export const tz = new Tz();
export default tz;
