import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('discount')
  getDiscountCampaign() {
    const campaignId = '630428c0c591817931daf312';
    return this.homeService.findAllByCampaignId(campaignId);
  }
  @Get('hotrecommenddest')
  getHotRecommendDest() {
    const campaignId = '63042a81c591817931daf36b';
    return this.homeService.findAllByCampaignId(campaignId);
  }
}
