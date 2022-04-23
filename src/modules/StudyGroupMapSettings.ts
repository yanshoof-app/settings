import { DayOfWeek, HourOfDay, IStudyGroup } from '@yanshoof/types';
import { IScheduleSettings } from '../interfaces/IScheduleSettings';
import { Settings } from './Settings';

/** Represents settings implemented with a study group and a study group map technique
 * @author Itay Schechner
 * @version 1.0.0
 */
export abstract class StudyGroupMapSettings<TLesson, TChange>
  extends Settings<TLesson, TChange>
  implements IScheduleSettings
{
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
}
