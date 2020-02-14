import { PasswordMatchDirective } from './validators/directives/password-match.directive';

describe('PasswordMatchDirective', () => {
  it('should create an instance', () => {
    const directive = new PasswordMatchDirective();
    expect(directive).toBeTruthy();
  });
});
