import { Document } from 'mongoose';

export interface Crypto extends Document {
  readonly name: string;
}