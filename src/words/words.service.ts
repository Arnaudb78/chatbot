import { Inject, Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { Model } from 'mongoose';
import { Word } from './entities/word.entity';

@Injectable()
export class WordsService {
  constructor(
    @Inject('WORD_MODEL')
    private wordModel: Model<Word>,
  ) {}


  async create(createWordDto: CreateWordDto): Promise<Word> {
    try {
      const save = await this.wordModel.create(createWordDto);
      return save;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du document :', error.message);
      throw new Error('Erreur lors de la sauvegarde du document');
    }
  }

  findAll() {
    return this.wordModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} word`;
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return `This action updates a #${id} word`;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
