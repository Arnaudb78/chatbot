import { Test, TestingModule } from '@nestjs/testing';
import { CoinmarketcapController } from './coinmarketcap.controller';
import { CoinmarketcapService } from './coinmarketcap.service';

describe('CoinmarketcapController', () => {
  let controller: CoinmarketcapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoinmarketcapController],
      providers: [CoinmarketcapService],
    }).compile();

    controller = module.get<CoinmarketcapController>(CoinmarketcapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
