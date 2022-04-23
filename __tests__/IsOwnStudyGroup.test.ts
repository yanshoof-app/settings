import { ILesson } from '@yanshoof/types';
import { Settings } from '../src';
import { ENGLISH_CANCELLATION, OTHERS_ENGLISH_CHANGE, SETTINGS } from '../src/test_utils/sample_constants';
import { TestSettings } from '../src/test_utils/TestSettings';

describe('Tests the settings module', () => {
  let settings: Settings<ILesson>;

  beforeEach(() => {
    settings = new TestSettings(SETTINGS); // remove problems
  });

  it('Tests a change that applies to the user', () => {
    expect(settings.isOwnStudyGroup(ENGLISH_CANCELLATION.day, ENGLISH_CANCELLATION.hour, ENGLISH_CANCELLATION)).toBe(
      true,
    );
  });

  it('Tests a change that does not apply to the user', () => {
    expect(settings.isOwnStudyGroup(OTHERS_ENGLISH_CHANGE.day, OTHERS_ENGLISH_CHANGE.hour, OTHERS_ENGLISH_CHANGE)).toBe(
      false,
    );
  });
});
