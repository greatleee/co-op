import { Controller, Get, Post, Render, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { LoginGuard } from './common/guards/login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('login')
  root(): { message: string } {
    return { message: 'Hello world!!!' };
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Res() res: Response): void {
    res.redirect('/home');
  }

  @Get('/logout')
  logout(@Req() req: Request, @Res() res: Response) {
    req.logout()
    res.redirect('/');
  }

  @UseGuards(AuthGuard('discord'))
  @Get('/auth/discord')
  authDiscord() {}

  @UseGuards(AuthGuard('discord'))
  @Get('/auth/discord/callback')
  authDiscordCallback(@Res() res: Response) {
    res.redirect('/home');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  @Render('home')
  getHome(@Req() req) {
    return { user: req.user };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  @Render('profile')
  getProfile(@Req() req) {
    return { user: req.user };
  }
}
