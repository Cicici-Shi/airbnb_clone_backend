import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Campaign } from './home/entities/campaign.entity';
import { Destination } from './home/entities/destination.entity';
import { Room } from './home/entities/room.entity';
import { Picture } from './home/entities/picture.entity';
import { Review } from './home/entities/review.entity';
import { Plus } from './home/entities/plus.entity';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 's2001021',
      database: 'airbnb_clone',
      synchronize: true,
      logging: true,
      entities: [Campaign, Destination, Room, Review, Picture, Plus],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    HomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
