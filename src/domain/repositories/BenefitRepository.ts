import {Benefit} from '../entities/Benefit';

export interface BenefitRepository {
  fetchUserBenefits(userId: string): Promise<Benefit[]>;
}
