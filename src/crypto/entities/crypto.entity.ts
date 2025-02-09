import { Document } from 'mongoose';

export interface Crypto extends Document {
  readonly name: string;
  readonly description: string;
  readonly founder: string;
  readonly categorie: string;
}