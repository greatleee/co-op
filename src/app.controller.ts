import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('login')
  root(): { message: string } {
    return { message: 'Hello world!!!' };
  }

  @Get('/home')
  @Render('home')
  getHome() {
    return { user: 'test' };
  }
}
