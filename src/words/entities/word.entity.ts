import { Document } from 'mongoose';

export interface Word extends Document {
  readonly name: string;
  readonly description: string;
}