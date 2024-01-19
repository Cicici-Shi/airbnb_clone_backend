// src/entire/entire.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { EntireService } from './entire.service';

@Controller('entire')
export class EntireController {
  constructor(private readonly entireService: EntireService) {}

  @Get('list')
  getList(@Query('offset') offset?: number, @Query('size') size?: number) {
    return this.entireService.findAll(offset, size);
  }
}
