import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { DatabaseModule } from 'src/database/database.module';
import { wordProviders } from './word.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [WordsController],
  providers: [
    WordsService,
    ...wordProviders,
  ],
})
export class WordsModule {}
