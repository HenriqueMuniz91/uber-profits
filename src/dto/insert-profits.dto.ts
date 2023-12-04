import { IsNotEmpty, IsNumber, } from "class-validator";

export class InsertProfitsDTO {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  //@IsDate()
  @IsNotEmpty()
  date: Date;
};