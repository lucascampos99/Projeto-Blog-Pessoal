import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaController } from "./controller/usuario.controller";
import { Tema } from "./entities/usuario.entity";
import { TemaService } from "./service/usuario.service";



@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    providers:[TemaService],
    controllers:[TemaController],
    exports: [TypeOrmModule],

})
    export class TemaModule { }