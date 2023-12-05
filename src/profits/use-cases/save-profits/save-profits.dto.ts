import { IsNotEmpty, IsNumber, IsString, } from "class-validator";

export class SaveProfitsDTO {
  @IsNumber()
  @IsNotEmpty()
  value: number;

  //@IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  name: string;
};