import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class InsertProfitsDTO {
  @IsString()
  @IsNotEmpty()
  Value: number;
  };