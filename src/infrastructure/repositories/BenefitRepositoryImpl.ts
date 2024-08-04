import {Benefit} from '../../domain/entities/Benefit';
import {BenefitRepository} from '../../domain/repositories/BenefitRepository';
import {BenefitApi} from '../api/BenefitApi';

export class BenefitRepositoryImpl implements BenefitRepository {
  async fetchUserBenefits(userId: string): Promise<Benefit[]> {
    return await BenefitApi.fetchBenefits(userId);
  }
}
