import {Benefit} from '../../domain/entities/Benefit';

export class BenefitApi {
  static async fetchBenefits(userId: string): Promise<Benefit[]> {
    // Simular una llamada HTTP
    console.log('BenefitApi.fetchBenefits', {userId});
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          new Benefit(
            '1',
            -12.1207698,
            -77.0304079,
            'KFC Miraflores',
            'https://lh3.googleusercontent.com/p/AF1QipMgTanJHISBSaD6fxt7qbBUFdPyumYn_IV8_acR=s1360-w1360-h1020',
          ),
          new Benefit(
            '2',
            -12.1209514,
            -77.0303299,
            'Pinkberry Miraflores',
            'https://lh5.googleusercontent.com/p/AF1QipPmHePOBo_poF-iS6iTjebY-liHogzgDXc6hoDi=s1354-k-no',
          ),
          new Benefit(
            '3',
            -12.1205409,
            -77.030108,
            'La Lucha Sangucheria',
            'https://lh5.googleusercontent.com/p/AF1QipNdLgeIb8FP_xkffP5Oao9E_omitkkiOgPFFRp0=w222-h100-k-no',
          ),
          new Benefit(
            '4',
            -12.1194952,
            -77.029791,
            'McDonalds Miraflores',
            'https://lh5.googleusercontent.com/p/AF1QipMpMsRMdgF9d28dyR_JshtAEs15Vy2OaERuML1c=w203-h152-k-no',
          ),
        ]);
      }, 500);
    });
  }
}
