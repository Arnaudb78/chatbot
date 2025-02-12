import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum Categorie {
    FIRST_CRYPTO= 'Cryptomonnaie principale',
    MEMECOIN= 'Memecoin',
    STABLECOIN= 'Stablecoin',
    ALTCOIN= 'Altcoin',
    RWA= 'Real World Asset',
}

export class CreateCryptoDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    founder: string;

    @IsEnum(Categorie, {
        message: 'La catégorie doit être l\'une des suivantes : Memecoin, Stablecoin, Altcoin, Real World Asset',
    })
    categorie: Categorie;
}
