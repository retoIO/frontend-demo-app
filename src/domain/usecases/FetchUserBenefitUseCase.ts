import {Benefit} from '../entities/Benefit';
import {BenefitRepository} from '../repositories/BenefitRepository';

export class FetchUserBenefitsUseCase {
  constructor(private benefitRepository: BenefitRepository) {}

  async execute(userId: string): Promise<Benefit[]> {
    return await this.benefitRepository.fetchUserBenefits(userId);
  }
}
