import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoModule } from './crypto/crypto.module';
import { WordsModule } from './words/words.module';

@Module({
  imports: [CryptoModule, WordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
