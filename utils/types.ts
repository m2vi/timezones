import mongoose from 'mongoose';
import { NextPage } from 'next';

export interface TableProps {
  timezone: string;
  name: string;
  offset: string;
}

export type BoxProps = NextPage<{ timezones: Array<string> }>;

export interface Config {
  _id: mongoose.Types.ObjectId;
  primary: boolean;
  timezones: Array<string>;
}

export interface Zones {
  name: string;
  zone: string;
  offset: number;
}
