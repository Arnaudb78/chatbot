import * as mongoose from 'mongoose';

export const CryptoSchema = new mongoose.Schema({
  name: String,
  description: String,
  founder: String,
  categorie: String,
});
