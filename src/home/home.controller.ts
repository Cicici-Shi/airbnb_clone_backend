import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('discount')
  getDiscountCampaign() {
    const campaignId = '630428c0c591817931daf312'; // 您提到的活动ID
    return this.homeService.findAllByCampaignId(campaignId);
  }
}
