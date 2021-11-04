import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forRootAsync({
      imports: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get('MONGO_CONNECTION'),
        };
      },
      inject: [ConfigService],
    }),
    ExercisesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

//MONGO_CONNECTION
export class AppModule {}
