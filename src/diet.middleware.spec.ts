import { DietMiddleware } from './diet.middleware';

describe('DietMiddleware', () => {
  it('should be defined', () => {
    expect(new DietMiddleware()).toBeDefined();
  });
});
