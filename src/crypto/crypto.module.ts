import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CryptoController } from './crypto.controller';
import { DatabaseModule } from 'src/database/database.module';
import { cryptoProviders } from './crypto.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CryptoController],
  providers: [
    CryptoService,
    ...cryptoProviders,
  ],
})
export class CryptoModule {}
