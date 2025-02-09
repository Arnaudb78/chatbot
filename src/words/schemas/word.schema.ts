import * as mongoose from 'mongoose';

export const WordSchema = new mongoose.Schema({
  name: String,
  description: String,
});
