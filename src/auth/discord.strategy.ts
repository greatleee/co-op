import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-discord";
import { AuthService } from "./auth.service";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: '',
      clientSecret: '',
      callbackURL: 'http://localhost:3000/auth/discord/callback',
      scope: ['identify', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any) {
    console.log(profile);
    done(null, profile);
  }
}
