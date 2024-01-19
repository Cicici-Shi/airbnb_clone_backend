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
  @Get('highscore')
  getHighScore() {
    const campaignId = '630429cbc591817931daf346';
    return this.homeService.findPlusByCampaignId(campaignId);
  }
  @Get('goodprice')
  getGoodPrice() {
    const campaignId = '630429a1c591817931daf341';
    return this.homeService.findPlusByCampaignId(campaignId);
  }
  @Get('plus')
  getPlus() {
    const campaignId = '63042a90c591817931daf372';
    return this.homeService.findPlusByCampaignId(campaignId);
  }
  @Get('longfor')
  getLongFor() {
    const campaignId = '6304294fc591817931daf32f';
    return this.homeService.discoverByCampaignId(campaignId);
  }
}
