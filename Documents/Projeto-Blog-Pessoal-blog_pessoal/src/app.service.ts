import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Funciona!!';
  }
  getAnime(): string {
    return 'One Piece';
  }
  getFilme(): string {
    return 'Bastardos Inglorios';
  }
}
