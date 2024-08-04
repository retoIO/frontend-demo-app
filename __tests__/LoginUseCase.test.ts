import {it, describe, expect} from '@jest/globals';
import {LoginUseCase} from '../src/domain/usecases/LoginUseCase';
import {User} from '../src/domain/entities/User';

describe('LoginUseCase', () => {
  it('should return a user on successful login', async () => {
    const loginUseCase = new LoginUseCase();
    const user = await loginUseCase.execute(
      'juanpablocs21@gmail.com',
      'password',
    );

    expect(user).toBeInstanceOf(User);
    expect(user.id).toBe('12345');
    expect(user.email).toBe('juanpablocs21@gmail.com');
  });
});
