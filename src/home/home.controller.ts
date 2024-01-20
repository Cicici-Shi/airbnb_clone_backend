import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
@ApiTags('首页')
@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('discount')
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        _id: '630428c0c591817931daf312',
        type: 'spring_discount',
        title: '热门目的地',
        subtitle: '品质房源，低至 5 折',
        dest_address: [
          {
            name: '佛山',
            homes: ['48973338', '50993279', '600556552427992207'],
          },
          // ... other destinations
        ],
        dest_list: {
          佛山: [
            {
              id: '48973338',
              picture_url: 'https://example.com/picture.jpg',
              name: 'O宿【R-06】暖暖的首尔...',
              price: 254.0,
              star_rating: 5,
              reviews_count: 51,
              reviews: [
                {
                  comments: 'Great place to stay!',
                  localized_date: '2022年5月',
                  reviewer_image_url: 'https://example.com/user.jpg',
                },
                // ... other reviews
              ],
              lat: 23.06851,
              lng: 113.15989,
              verify_info: 'Verified information',
            },
            // ... other rooms
          ],
          // ... other cities
        },
      },
    },
  })
  getDiscountCampaign() {
    const campaignId = '630428c0c591817931daf312';
    return this.homeService.findAllByCampaignId(campaignId);
  }
  @Get('hotrecommenddest')
  @ApiResponse({
    status: 200,
    description:
      'The hot recommended destinations have been successfully fetched.',
    schema: {
      example: {
        _id: '63042a81c591817931daf36b',
        type: 'hot_recommend_dest',
        title: '探索佛山的精彩之地',
        dest_address: [
          {
            name: '南海千灯湖公园',
            homes: ['28439421', '43815169', '29505386'],
          },
          // ... other destinations
        ],
        dest_list: {
          南海千灯湖公园: [
            {
              id: '28439421',
              picture_url: 'https://example.com/picture1.jpg',
              name: '环球旅行家的家...',
              price: 598,
              star_rating: 5,
              reviews_count: 110,
              reviews: [
                {
                  comments: 'Awesome place!',
                  localized_date: '2021年11月',
                  reviewer_image_url: 'https://example.com/reviewer.jpg',
                },
                // ... other reviews
              ],
              lat: 23.04469,
              lng: 113.14074,
              verify_info:
                '{"messages":["整套公寓","2室1卫2床"],"text_color":"#767676"}',
            },
            // ... other rooms in 南海千灯湖公园
          ],
          // ... other cities and their rooms
        },
      },
    },
  })
  getHotRecommendDest() {
    const campaignId = '63042a81c591817931daf36b';
    return this.homeService.findAllByCampaignId(campaignId);
  }
  @Get('highscore')
  @ApiResponse({
    status: 200,
    description: 'Successful response for high score listings',
    schema: {
      example: {
        _id: '630429cbc591817931daf346',
        type: 'high_score',
        title: '佛山高分好评房源',
        subtitle: '来看看这些颇受房客好评的房源吧',
        list: [
          {
            id: 'room1',
            picture_url: 'https://example.com/room1.jpg',
            name: 'Luxury Room',
            price: 200,
            star_rating: 5,
            reviews_count: 150,
            lat: 34.0522,
            lng: -118.2437,
            verify_info:
              '{"messages":["整套公寓型住宅","1室1.5卫1床"],"text_color":"#767676"}',
            reviews: [
              {
                comments: 'Great place to stay!',
                localized_date: '2022年5月',
                reviewer_image_url: 'https://example.com/user.jpg',
              },
            ],
          },
          // ... more rooms
        ],
      },
    },
  })
  getHighScore() {
    const campaignId = '630429cbc591817931daf346';
    return this.homeService.findPlusByCampaignId(campaignId);
  }
  @Get('goodprice')
  @ApiResponse({
    status: 200,
    description: 'Successful response for good price listings',
    schema: {
      example: {
        _id: '630429a1c591817931daf341',
        type: 'good_price',
        title: '佛山高性价比房源',
        subtitle: null,
        list: [
          {
            id: 'room1',
            picture_url: 'https://example.com/room1.jpg',
            name: 'Luxury Room',
            price: 200,
            star_rating: 5,
            reviews_count: 150,
            lat: 34.0522,
            lng: -118.2437,
            verify_info:
              '{"messages":["整套公寓型住宅","1室1.5卫1床"],"text_color":"#767676"}',
          },
        ],
      },
    },
  })
  getGoodPrice() {
    const campaignId = '630429a1c591817931daf341';
    return this.homeService.findPlusByCampaignId(campaignId);
  }
  @Get('plus')
  @ApiResponse({
    status: 200,
    description: 'Successful response for plus listings',
    schema: {
      example: {
        _id: '63042a90c591817931daf372',
        type: 'plus',
        title: '佛山的爱彼迎Plus房源',
        subtitle: '品质和设计经过验证的房源',
        list: [
          {
            id: 'room1',
            picture_url: 'https://example.com/room1.jpg',
            name: 'Luxury Room',
            price: 200,
            star_rating: 5,
            reviews_count: 150,
            lat: 34.0522,
            lng: -118.2437,
            verify_info:
              '{"messages":["整套公寓型住宅","1室1.5卫1床"],"text_color":"#767676"}',
            reviews: [
              {
                comments: 'Great place to stay!',
                localized_date: '2022年5月',
                reviewer_image_url: 'https://example.com/user.jpg',
              },
            ],
          },
        ],
      },
    },
  })
  getPlus() {
    const campaignId = '63042a90c591817931daf372';
    return this.homeService.findPlusByCampaignId(campaignId);
  }
  @Get('longfor')
  @ApiResponse({
    status: 200,
    description: 'Successful response for long for listings',
    schema: {
      example: {
        _id: '6304294fc591817931daf32f',
        type: 'discover',
        title: '你可能想去',
        subtitle: '发现更多出行灵感',
        list: [
          {
            city: '佛山',
            price: 200,
            picture_url: 'https://example.com/room1.jpg',
          },
          // ... other cities
        ],
      },
    },
  })
  getLongFor() {
    const campaignId = '6304294fc591817931daf32f';
    return this.homeService.discoverByCampaignId(campaignId);
  }
}
