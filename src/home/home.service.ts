import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campaign.entity';
import { Destination } from './entities/destination.entity';
import { Room } from './entities/room.entity';
import { Review } from './entities/review.entity';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>,
    @InjectRepository(Destination)
    private readonly destinationRepository: Repository<Destination>,
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  async findAllByCampaignId(campaignId: string): Promise<any> {
    const campaign = await this.campaignRepository.findOne({
      where: { id: campaignId },
    });

    if (!campaign) {
      throw new Error('Campaign not found');
    }

    const destinations = await this.destinationRepository.find({
      where: { campaign: { id: campaignId } },
      relations: ['rooms', 'rooms.reviews'],
    });

    const destAddress = destinations.map((destination) => ({
      name: destination.name,
      homes: destination.rooms.map((room) => room.id.toString()), // 假设 room.id 是数字
    }));

    const destList = {};
    destinations.forEach((destination) => {
      destList[destination.name] = destination.rooms.map((room) => {
        return {
          id: room.id.toString(),
          picture_url: room.picture_url,
          name: room.name,
          price: room.price,
          star_rating: room.star_rating,
          reviews_count: room.reviews_count,
          reviews: room.reviews.map((review) => ({
            comments: review.comments,
            localized_date: review.localized_date,
            reviewer_image_url: review.reviewer_image_url,
          })),
          lat: room.lat,
          lng: room.lng,
          verify_info: room.verify_info,
        };
      });
    });

    return {
      _id: campaign.id.toString(),
      type: campaign.type,
      title: campaign.title,
      subtitle: campaign.subtitle,
      dest_address: destAddress,
      dest_list: destList,
    };
  }

  async importCampaignData(apiUrl: string): Promise<void> {
    const response = await lastValueFrom(this.httpService.get(apiUrl));
    const campaignData = response.data;

    let campaign = await this.campaignRepository.findOne({
      where: { id: campaignData._id },
    });

    if (campaign) {
      campaign.type = campaignData.type;
      campaign.title = campaignData.title;
      campaign.subtitle = campaignData.subtitle;
    } else {
      campaign = this.campaignRepository.create({
        id: campaignData._id,
        type: campaignData.type,
        title: campaignData.title,
        subtitle: campaignData.subtitle,
      });
    }

    await this.campaignRepository.save(campaign);
  }

  async importDestinationNames(
    apiUrl: string,
    campaignId: string,
  ): Promise<void> {
    const response$ = this.httpService.get(apiUrl);
    const response = await lastValueFrom(response$);

    const destAddresses = response.data.dest_address;
    const campaignDestinations = destAddresses.map((dest) => {
      return { name: dest.name, campaignId: campaignId };
    });
    let index = 1;
    for (const dest of campaignDestinations) {
      const destination = new Destination();
      destination.id = index;
      destination.name = dest.name;
      destination.campaign = dest.campaignId;
      await this.destinationRepository.save(destination);
      index++;
    }
  }

  async importRooms(apiUrl: string): Promise<void> {
    const response = await lastValueFrom(this.httpService.get(apiUrl));
    const destList = response.data.dest_list;
    let index = 1;

    for (const city in destList) {
      const rooms = destList[city];
      for (const roomData of rooms) {
        const existingRoom = await this.roomRepository.findOne({
          where: { id: roomData.id },
        });
        if (existingRoom) {
          // 更新数据
          existingRoom.picture_url = roomData.picture_url;
          await this.roomRepository.save(existingRoom);
        } else {
          // 新建数据
          const room = this.roomRepository.create({
            id: roomData.id,
            picture_url: roomData.picture_url,
            name: roomData.name,
            price: roomData.price,
            star_rating: roomData.star_rating,
            reviews_count: roomData.reviews_count,
            lat: roomData.lat,
            lng: roomData.lng,
            verify_info: JSON.stringify(roomData.verify_info),
          });
          room.destinationId = index;
          await this.roomRepository.save(room);
        }
      }
      index++;
    }
  }

  async importReviews(apiUrl: string): Promise<void> {
    const response = await lastValueFrom(this.httpService.get(apiUrl));
    const destList = response.data.dest_list;

    for (const city in destList) {
      const rooms = destList[city];
      for (const roomData of rooms) {
        const room = await this.roomRepository.findOne({
          where: { id: roomData.id },
        });

        if (!room) {
          continue;
        }
        if (roomData.reviews) {
          const reviewData = roomData.reviews[0];
          const review = this.reviewRepository.create({
            comments: reviewData.comments,
            localized_date: reviewData.localized_date,
            reviewer_image_url: reviewData.reviewer_image_url,
            room: roomData.id,
          });
          await this.reviewRepository.save(review);
        }
      }
    }
  }
}
