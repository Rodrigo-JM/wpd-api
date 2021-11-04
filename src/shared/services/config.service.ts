import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
@Injectable()
export class ConfigService {
  constructor() {
    dotenv.config({
      path: `.env`,
    });
  }

  public get(key: string): string {
    return process.env[key];
  }

  public getNumber(key: string): number {
    return Number(this.get(key));
  }
}
