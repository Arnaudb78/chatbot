import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoModule } from './crypto/crypto.module';
import { CoinmarketcapModule } from './coinmarketcap/coinmarketcap.module';

@Module({
  imports: [CryptoModule, CoinmarketcapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
