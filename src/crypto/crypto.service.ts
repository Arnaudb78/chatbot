import { Inject, Injectable } from '@nestjs/common';
import { CreateCryptoDto } from './dto/create-crypto.dto';
import { UpdateCryptoDto } from './dto/update-crypto.dto';
import { Model } from 'mongoose';

@Injectable()
export class CryptoService {
  constructor(
    @Inject('CRYPTO_MODEL')
    private cryptoModel: Model<Crypto>,
  ) {}

  async create(createCryptoDto: CreateCryptoDto): Promise<Crypto> {
    const createdCrypto = new this.cryptoModel(createCryptoDto);
    return createdCrypto.save();
  }

  async findAll(): Promise<Crypto[]> {
    return this.cryptoModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} crypto`;
  }

  update(id: number, updateCryptoDto: UpdateCryptoDto) {
    return `This action updates a #${id} crypto`;
  }

  remove(id: number) {
    return `This action removes a #${id} crypto`;
  }

  async getOpenIA(): Promise<any> {
    try {
      if (!process.env.OPENAI_API_KEY) {
        throw new Error("L'API Key OpenAI est manquante !");
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: 'Say this is a test!' }],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Erreur lors de la requête OpenAI :', error.message);
      return { error: error.message };
    }
  }
}
