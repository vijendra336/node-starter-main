import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nikhil!';
  }

  getName(name: string): string {
    return `Hello ${name}!`;
  }
}
