import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { config } from 'dotenv';

config();

export const mongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => ({
  uri: configService.get<string>('MONGODB_URI'),
  dbName: configService.get<string>('MONGO_DB_NAME'),
});
