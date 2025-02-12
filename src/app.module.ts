import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoModule } from './crypto/crypto.module';
import { CoinmarketcapModule } from './coinmarketcap/coinmarketcap.module';
import { WordsModule } from './words/words.module';

@Module({
  imports: [CryptoModule, WordsModule, CoinmarketcapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
