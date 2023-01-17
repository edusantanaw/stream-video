import { Test, TestingModule } from '@nestjs/testing';
import { ChanelController } from './chanel.controller';
import { ChanelService } from './chanel.service';

describe('ChanelController', () => {
  let controller: ChanelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChanelController],
      providers: [ChanelService],
    }).compile();

    controller = module.get<ChanelController>(ChanelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
