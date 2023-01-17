import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankdataModule } from './bankdata/bankdata.module';
import { Bankdatum } from './bankdata/entities/bankdatum.entity';

@Module({
  imports: [BankdataModule,TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'bankdata',
    autoLoadEntities:true,
    logging:true,
    entities: [Bankdatum],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
