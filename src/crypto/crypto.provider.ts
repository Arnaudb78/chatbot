import { Mongoose } from 'mongoose';
import { CryptoSchema } from './schemas/crypto.schema';

export const cryptoProviders = [
  {
    provide: 'CRYPTO_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Crypto', CryptoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];