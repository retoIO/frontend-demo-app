import {it, describe, expect} from '@jest/globals';
import {Benefit} from '../src/domain/entities/Benefit';
import {BenefitRepository} from '../src/domain/repositories/BenefitRepository';
import {FetchUserBenefitsUseCase} from '../src/domain/usecases/FetchUserBenefitUseCase';

class MockBenefitRepository implements BenefitRepository {
  fetchUserBenefits(_: string): Promise<Benefit[]> {
    return Promise.resolve([
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
    ]);
  }
}

describe('FetchUserBenefitsUseCase', () => {
  it('should fetch and return user benefits', async () => {
    const mockRepository = new MockBenefitRepository();
    const fetchUserBenefitsUseCase = new FetchUserBenefitsUseCase(
      mockRepository,
    );

    const benefits = await fetchUserBenefitsUseCase.execute('12345');

    expect(benefits).toHaveLength(2);
    expect(benefits[0]).toBeInstanceOf(Benefit);
    expect(benefits[0].title).toBe('KFC Miraflores');
    expect(benefits[1].title).toBe('Pinkberry Miraflores');
  });
});
