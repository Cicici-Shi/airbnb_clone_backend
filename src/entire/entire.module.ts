import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntireService } from './entire.service';
import { EntireController } from './entire.controller';
import { Detail } from './entities/detail.entity';
import { Picture } from './entities/picture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Detail, Picture])],
  controllers: [EntireController],
  providers: [EntireService],
})
export class EntireModule {}
