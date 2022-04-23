import { DayOfWeek, HourOfDay, IStudyGroup } from '@yanshoof/types';
import { IScheduleSettings } from '../interfaces/IScheduleSettings';
import { Settings } from './Settings';

/** Represents settings implemented with a study group and a study group map technique
 * @author Itay Schechner
 * @version 1.0.0
 */
export abstract class StudyGroupMapSettings<TLesson> extends Settings<TLesson> implements IScheduleSettings {
  readonly studyGroups: [string, string][];
  readonly studyGroupMap: Map<string, number>;

  static readonly WINDOW_INDEX = -1;

  /**
   * Constructs a new settings object from given settings
   * @param settings the settings to use
   */
  constructor({ showOthersChanges, studyGroupMap, studyGroups }: IScheduleSettings) {
    super(showOthersChanges);
    this.studyGroupMap = studyGroupMap;
    this.studyGroups = studyGroups;
  }

  protected getKey(day: DayOfWeek, hour: HourOfDay) {
    return `${day},${hour}`;
  }

  protected hasSetting(day: DayOfWeek, hour: HourOfDay): boolean {
    return this.studyGroupMap.has(this.getKey(day, hour));
  }

  protected getSetting(day: DayOfWeek, hour: HourOfDay): IStudyGroup {
    const sgIndex = this.studyGroupMap.get(this.getKey(day, hour));
    if (sgIndex === StudyGroupMapSettings.WINDOW_INDEX) return null;
    if (typeof sgIndex !== 'number' || sgIndex < 0 || sgIndex >= this.studyGroups.length)
      throw new Error('Expected setting to be defined');
    const [subject, teacher] = this.studyGroups[sgIndex];
    return { subject, teacher };
  }

  public repair(): boolean {
    let override = false;
    const studyGroupMapValues = new Set(this.studyGroupMap.values());
    // do not change problematic settings
    if (this.problems.length) return;

    for (let i = 0; i < this.studyGroups.length; i++) {
      //detect unused study group
      if (studyGroupMapValues.has(i)) continue;

      // unused study group detected, create overrides
      override = true;

      //remove the unused study group
      this.studyGroups.splice(i, 1);

      //update indexes in studyGroupMap
      for (const key of this.studyGroupMap.keys()) {
        const value = this.studyGroupMap.get(key);
        if (value > i) {
          this.studyGroupMap.set(key, value - 1);
        }
      }
    }

    return override;
  }
}
