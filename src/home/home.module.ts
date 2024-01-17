import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { Campaign } from './entities/campaign.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Campaign]), // 在这里注册 Campaign 实体
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
