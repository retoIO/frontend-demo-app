import {User} from '../entities/User';

export class LoginUseCase {
  async execute(email: string, password: string): Promise<User> {
    return new Promise(resolve => {
      console.log('LoginUseCase: execute', {email, password});
      setTimeout(() => {
        resolve(new User('12345', 'Juan Pablo', email));
      }, 100);
    });
  }
}
