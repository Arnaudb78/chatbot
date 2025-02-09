import { Mongoose } from 'mongoose';
import { WordSchema } from './schemas/word.schema';
export const wordProviders = [
  {
    provide: 'WORD_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Word', WordSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];