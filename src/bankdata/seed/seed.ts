import { NestFactory } from "@nestjs/core";
import { randCreditCardNumber, randFileName, randLastName, randNumber, randPassword } from "@ngneat/falso";
import { AppModule } from "../../app.module";
import { BankdataService } from "../bankdata.service";
import { Bankdatum } from "../entities/bankdatum.entity";

async function bootstrap() {
    console.log("helooo")
    const app = await NestFactory.createApplicationContext(AppModule);
    console.log("hmm")
    const bankService = app.get(BankdataService);
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiii")
    for(let i=0; i<20;i++){
        const newcridential =new Bankdatum();
        newcridential.card_number=randCreditCardNumber()
        newcridential.Firstname=randFileName()
        newcridential.lastname=randLastName()
        newcridential.solde=randNumber()
        newcridential.password=randPassword()
        await bankService.addcridential(newcridential)
    }
    await app.close();
}
bootstrap()