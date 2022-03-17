import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('Inheritance', () => {
  it('should handle blocks', () => {
    const { expected, actual } = compareFiles(__dirname);
    expect(actual).toBe(expected);
  });
});
