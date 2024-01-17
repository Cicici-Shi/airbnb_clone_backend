import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campaign.entity';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
  ) {}

  async findAllByCampaignId(campaignId: string): Promise<Campaign> {
    return await this.campaignRepository.findOne({
      where: { id: campaignId },
      relations: ['destinations'],
    });
  }
}
