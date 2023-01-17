import { Column, Entity, PrimaryColumn } from "typeorm";
@Entity('crdiential')
export class Bankdatum {

@PrimaryColumn(
{
    unique:true,
    length:16
})
card_number:string

@Column(
    {
        unique:true,
        length:8
    }
)

password: string;

@Column()
Firstname: string;
@Column()
lastname:string    
@Column()
solde:number
}


