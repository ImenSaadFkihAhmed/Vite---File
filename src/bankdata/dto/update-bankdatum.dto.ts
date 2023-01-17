import { PartialType } from '@nestjs/mapped-types';
import { CreateBankdatumDto } from './create-bankdatum.dto';

export class UpdateBankdatumDto extends PartialType(CreateBankdatumDto) {}
