import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoinmarketcapService } from './coinmarketcap.service';
import { CreateCoinmarketcapDto } from './dto/create-coinmarketcap.dto';
import { UpdateCoinmarketcapDto } from './dto/update-coinmarketcap.dto';

@Controller('coinmarketcap')
export class CoinmarketcapController {
  constructor(private readonly coinmarketcapService: CoinmarketcapService) {}

  @Post()
  create(@Body() createCoinmarketcapDto: CreateCoinmarketcapDto) {
    return this.coinmarketcapService.create(createCoinmarketcapDto);
  }

  @Get()
  findAll() {
    return this.coinmarketcapService.findAll();
  }

  @Get('api/coinmarketcap/:cryptoName')
  ApiCall(@Param('cryptoName') cryptoName: string) {
    return this.coinmarketcapService.getCoinMarketCap(cryptoName);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoinmarketcapDto: UpdateCoinmarketcapDto) {
    return this.coinmarketcapService.update(+id, updateCoinmarketcapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coinmarketcapService.remove(+id);
  }
}
