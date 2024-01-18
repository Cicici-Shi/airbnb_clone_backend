import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { Campaign } from './entities/campaign.entity';
import { Destination } from './entities/destination.entity';
import { Room } from './entities/room.entity';
import { Review } from './entities/review.entity';
import { Plus } from './entities/plus.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([Campaign, Destination, Room, Review, Plus]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
