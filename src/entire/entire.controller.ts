import { Controller, Get, Query } from '@nestjs/common';
import { EntireService } from './entire.service';
import { ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
@ApiTags('全部数据')
@Controller('entire')
export class EntireController {
  constructor(private readonly entireService: EntireService) {}

  @Get('list')
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
    description: 'Offset for pagination',
  })
  @ApiQuery({
    name: 'size',
    required: false,
    type: Number,
    description: 'Size of the data batch',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the entire list of items',
    schema: {
      example: {
        list: [
          {
            id: '44501166',
            picture_url:
              'https://z1.muscache.cn/im/pictures/205f9323-ff95-4881-9cdf-8640da95035b.jpg?aki_policy=large',
            picture_urls: [
              'https://z1.muscache.cn/im/pictures/205f9323-ff95-4881-9cdf-8640da95035b.jpg?aki_policy=large',
              // ... more picture URLs
            ],
            name: '地铁口/长隆景区附近/可投屏/麻将机/ins北欧风/复式独立三房两卫',
            price: 755,
            star_rating: 5,
            reviews_count: 51,
            reviews: [
              {
                comments: 'Great place to stay!',
                localized_date: '2022年5月',
                reviewer_image_url: 'https://example.com/user.jpg',
              },
            ],
            lat: 22.99029,
            lng: 113.3363,
            verify_info:
              '{"messages":["整套公寓型住宅","1室1卫1床"],"text_color":"#767676"}',
          },
          // ... more items
        ],
        errcode: 0,
        totalCount: 230,
      },
    },
  })
  getList(@Query('offset') offset?: number, @Query('size') size?: number) {
    return this.entireService.findAll(offset, size);
  }
}
