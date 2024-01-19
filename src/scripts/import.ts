import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { HomeService } from '../home/home.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const homeService = app.get(HomeService);
  // await homeService.importCampaignData(
  //   'http://codercba.com:1888/airbnb/api/home/longfor',
  // );

  // await homeService.importDestinationNames(
  //   'http://codercba.com:1888/airbnb/api/home/hotrecommenddest',
  //   '63042a81c591817931daf36b',
  // );
  // await homeService.importRooms(
  //   'http://codercba.com:1888/airbnb/api/home/hotrecommenddest',
  // );
  // await homeService.importReviews(
  //   'http://codercba.com:1888/airbnb/api/home/hotrecommenddest',
  // );

  // await homeService.importPlusData(
  //   'http://codercba.com:1888/airbnb/api/home/goodprice',
  //   '630429a1c591817931daf341',
  // );
  // await homeService.importPlusReviews(
  //   'http://codercba.com:1888/airbnb/api/entire/list?offset=0&size=300',
  // );
  // await homeService.importCities(
  //   'http://codercba.com:1888/airbnb/api/home/longfor',
  // );
  // await homeService.importEntires(
  //   'http://codercba.com:1888/airbnb/api/entire/list?offset=20&size=300',
  // );
  await homeService.importPictures(
    'http://codercba.com:1888/airbnb/api/entire/list?offset=0&size=300',
  );
  await app.close();
}

bootstrap();
