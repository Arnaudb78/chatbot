import { Inject, Injectable } from '@nestjs/common';
import { CreateCryptoDto } from './dto/create-crypto.dto';
import { UpdateCryptoDto } from './dto/update-crypto.dto';
import { Model } from 'mongoose';

@Injectable()
export class CryptoService {
  constructor(
    @Inject('CRYPTO_MODEL')
    private cryptoModel: Model<Crypto>,
  ) {}

  async create(createCryptoDto: CreateCryptoDto): Promise<Crypto> {
    const createdCrypto = new this.cryptoModel(createCryptoDto);
    return createdCrypto.save();
  }

  async findAll(): Promise<Crypto[]> {
    return this.cryptoModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} crypto`;
  }

  update(id: number, updateCryptoDto: UpdateCryptoDto) {
    return `This action updates a #${id} crypto`;
  }

  remove(id: number) {
    return `This action removes a #${id} crypto`;
  }

  async getOpenIA(cryptoName: string): Promise<any> {
    try {
      if (!process.env.OPENAI_API_KEY) {
        throw new Error("L'API Key OpenAI est manquante !");
      }

      const userMessage =
        `En te basant sur ce modéle de réponse, génére moi la reponse pour ${cryptoName} en te basant sur https://www.coingecko.com/ pour les chiffres\n` +
        "pour les types de crypto-monnaie choisie parmis les categories existantes comme: meme-coin, stable-coin, alt-coin\n" +
        "\n" +
        "Présentation du Dogecoin via le Chatbot IA\n" +
        "\n" +
        "Présentation du Dogecoin :\n" +
        "Type de Crypto-monnaie : Meme-coin Histoire et Contexte : Dogecoin a été créé en décembre 2013 par Billy Markus et Jackson Palmer. Initialement conçu comme une blague basée sur le mème populaire \"Doge\", il a rapidement gagné en popularité grâce à sa communauté active et son approche décontractée. Dogecoin a été utilisé pour des collectes de fonds et des pourboires en ligne, renforçant son image de crypto-monnaie communautaire. 2. Rôle sur le Marché :\n" +
        "\n" +
        "Dogecoin est connu pour sa forte communauté et sa capacité à générer de l'enthousiasme autour des crypto-monnaies. Bien qu'il ait commencé comme une blague, il a attiré l'attention des investisseurs et des célébrités, contribuant à sa notoriété et à sa volatilité sur le marché. 3. Performances et Classement :\n" +
        "\n" +
        "Performance sur Diverses Périodes : Dernier Jour : +2.5% Dernière Semaine : -1.2% Dernier Mois : +8.3% Dernière Année : +45.0% Classement Actuel : 9ème en termes de capitalisation boursière parmi les crypto-monnaies. 4. Statistiques et Évolution :\n" +
        "\n" +
        "Capitalisation Boursière : Environ 10 milliards de dollars. Volume d'Échange (24h) : Environ 500 millions de dollars. Tendance Récente : Dogecoin a connu une hausse récente, partiellement alimentée par des mentions sur les réseaux sociaux et des soutiens de personnalités influentes. 5. Graphiques :\n" +
        "\n" +
        "Évolution du Prix : Un graphique montrant la tendance du prix du Dogecoin sur les 12 derniers mois, illustrant ses pics et ses creux. Volume d'Échange : Un graphique montrant les fluctuations du volume d'échange au cours des dernières semaines.\n";
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: userMessage }],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Erreur lors de la requête OpenAI :', error.message);
      return { error: error.message };
    }
  }
}
