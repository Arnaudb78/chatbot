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
}
