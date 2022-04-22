import { Greeter } from '../src';

describe('Tests the greeter', () => {
  it('Greets Oshri', () => {
    expect(Greeter('Oshri')).toEqual('Hello Oshri');
  });
});
