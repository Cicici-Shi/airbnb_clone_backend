import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Detail } from './entities/detail.entity';

@Injectable()
export class EntireService {
  constructor(
    @InjectRepository(Detail)
    private readonly detailRepository: Repository<Detail>,
  ) {}

  async findAll(offset: number = 0, size: number = 20): Promise<any> {
    const [result, total] = await this.detailRepository.findAndCount({
      relations: ['reviews', 'pictures'],
      skip: offset,
      take: size,
    });

    return {
      list: result.map((detail) => ({
        id: detail.id,
        picture_url: detail.picture_url,
        picture_urls: detail.pictures.map((picture) => picture.url),
        name: detail.name,
        price: detail.price,
        star_rating: detail.star_rating,
        reviews_count: detail.reviews_count,
        reviews: detail.reviews.map((review) => ({
          comments: review.comments,
          localized_date: review.localized_date,
          reviewer_image_url: review.reviewer_image_url,
        })),
        lat: detail.lat,
        lng: detail.lng,
        verify_info: detail.verify_info,
      })),
      errcode: 0,
      totalCount: total,
    };
  }
}
