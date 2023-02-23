import { expect, describe, it } from 'vitest';
import { parseRegexp } from '../index.js';

describe('Backspace', () => {
  it('should correctly parse backspace', () => {
    expect(parseRegexp(/[\b]/)).toMatchSnapshot();
  });
});
