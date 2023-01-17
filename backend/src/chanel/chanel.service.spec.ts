import { Test, TestingModule } from '@nestjs/testing';
import { ChanelService } from './chanel.service';

describe('ChanelService', () => {
  let service: ChanelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChanelService],
    }).compile();

    service = module.get<ChanelService>(ChanelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
