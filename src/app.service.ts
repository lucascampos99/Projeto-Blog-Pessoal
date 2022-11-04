import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBSM(): string {
    return "BSM's são: Responsabilidade Pessoal, Mentalidade de Crescimento, Orientação ao Futuro, Persistnência, Comunicação, Trabalho em Equipe, Atenção aos Detalhes e Proatividade.";
  }
  getSemana(): string {
    return "Introdução ao backend."
  }
}
