import { Injectable } from '@nestjs/common';
import { CreateCoinmarketcapDto } from './dto/create-coinmarketcap.dto';
import { UpdateCoinmarketcapDto } from './dto/update-coinmarketcap.dto';
import axios from 'axios';

@Injectable()
export class CoinmarketcapService {
  create(createCoinmarketcapDto: CreateCoinmarketcapDto) {
    return 'This action adds a new coinmarketcap';
  }

  findAll() {
    return `This action returns all coinmarketcap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coinmarketcap`;
  }

  update(id: number, updateCoinmarketcapDto: UpdateCoinmarketcapDto) {
    return `This action updates a #${id} coinmarketcap`;
  }

  remove(id: number) {
    return `This action removes a #${id} coinmarketcap`;
  }

  async getCoinMarketCap(cryptoName: string): Promise<any> {
    try {
      const response = await axios.get(
        'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
            Accepts: 'application/json',
          },
          params: {
            symbol: cryptoName.toUpperCase(),
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching CoinMarketCap data:', error.message);
      throw new Error('Failed to fetch CoinMarketCap data');
    }
  }
}
