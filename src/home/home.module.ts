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
import { City } from './entities/city.entity';
import { Detail } from '../entire/entities/detail.entity';
import { Picture } from '../entire/entities/picture.entity';
@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      Campaign,
      Destination,
      Room,
      Review,
      Plus,
      City,
      Detail,
      Picture,
    ]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
