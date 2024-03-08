import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Campaign } from './home/entities/campaign.entity';
import { Destination } from './home/entities/destination.entity';
import { Room } from './home/entities/room.entity';
import { Picture } from './entire/entities/picture.entity';
import { Review } from './home/entities/review.entity';
import { Plus } from './home/entities/plus.entity';
import { City } from './home/entities/city.entity';
import { Detail } from './entire/entities/detail.entity';
import { HomeModule } from './home/home.module';
import { EntireModule } from './entire/entire.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      // 使用Docker部署到生产环境时
      // host: 'mysql-container',
      port: 3306,
      username: 'root',
      password: 'cici',
      database: 'airbnb_clone',
      synchronize: true,
      logging: true,
      entities: [
        Campaign,
        Destination,
        Room,
        Review,
        Picture,
        Plus,
        City,
        Detail,
      ],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    HomeModule,
    EntireModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
