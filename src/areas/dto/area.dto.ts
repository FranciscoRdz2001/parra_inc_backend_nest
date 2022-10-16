import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


export class CreateAreaDTO{
    
    @IsString()
    @IsNotEmpty()
    public name: string;
    
    @IsString()
    @IsNotEmpty()
    public description: string;

}