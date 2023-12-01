import { IsNotEmpty, IsNumber, } from "class-validator";

export class InsertProfitsDTO {
  @IsNumber()
  @IsNotEmpty()
  Value: number;
  };