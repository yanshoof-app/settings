import { ILesson } from '@yanshoof/types';
import { Settings } from '../src';
import { ENGLISH_LESSONS, SETTINGS } from '../src/test_utils/sample_constants';
import { TestSettings } from '../src/test_utils/TestSettings';

describe('Tests the settings module', () => {
  let settings: Settings<ILesson>;

  beforeEach(() => {
    settings = new TestSettings(SETTINGS); // remove problems
  });

  it('Picks an hour out of a list', () => {
    expect(settings.selectLesson(1, 4, ENGLISH_LESSONS)).toBe(ENGLISH_LESSONS[2]);
    expect(settings.problems.length).toBe(0);
  });

  it('Picks an hour with missing settings', () => {
    expect(settings.selectLesson(6, 9, ENGLISH_LESSONS)).toBe(ENGLISH_LESSONS[0]);
    expect(settings.problems.length).toBe(1);
    expect(settings.problems[0]).toStrictEqual([6, 9]);
  });

  it('Picks an hour with settings that do not apply', () => {
    expect(settings.selectLesson(2, 10, ENGLISH_LESSONS)).toBe(ENGLISH_LESSONS[0]);
    expect(settings.problems.length).toBe(1);
    expect(settings.problems[0]).toStrictEqual([2, 10]);
  });
});
