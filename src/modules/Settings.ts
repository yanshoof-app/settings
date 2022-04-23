import { DayOfWeek, HourOfDay, IStudyGroup } from '@yanshoof/types';
import { ISettings, ProblemArray } from '../interfaces/ISettings';

export abstract class Settings<TLesson, TChange> implements ISettings<TLesson, TChange> {
  readonly problems: ProblemArray;
  public showOthersChanges: boolean;

  constructor(showOthersChanges: boolean) {
    this.problems = [];
    this.showOthersChanges = showOthersChanges;
  }

  /**
   * Checks if there is a setting to certain hour in the timetable
   * @param day the day of the lesson
   * @param hour the hour of the lesson
   * @returns true if setting exists, false otherwise
   */
  protected abstract hasSetting(day: DayOfWeek, hour: HourOfDay): boolean;

  /**
   * Retrieves a setting
   * @param day the day of the lesson
   * @param hour the hour of the lesson
   * @returns a study group if set, null if setting is set to no study group
   * @throws if hour does not have a setting at all
   */
  protected abstract getSetting(day: DayOfWeek, hour: HourOfDay): IStudyGroup | null;

  /**
   * Rerieve a lesson's study group
   * @param lesson the lesson to map
   */
  protected abstract mapLessonToStudyGroup(lesson: TLesson): IStudyGroup;

  /**
   * Rerieve a change's study group
   * @param change the change to map
   */
  protected abstract mapChangeToStudyGroup(change: TChange): IStudyGroup;

  public abstract repair(): void;

  selectLesson(day: DayOfWeek, hour: HourOfDay, schedule: TLesson[]): TLesson {
    if (!this.hasSetting(day, hour)) {
      // nothing is set, return default lesson of schedule and add problematic hour if there are options
      if (schedule.length > 1) this.problems.push([day, hour]);
      return schedule[0];
    }

    // setting exists for the hour
    const setting = this.getSetting(day, hour);
    if (!setting) {
      // set to window
      return {} as TLesson;
    }

    // setting has actual study group
    const selectedLesson = schedule.find((lesson) => {
      const { subject, teacher } = this.mapLessonToStudyGroup(lesson);
      return subject == setting.subject && teacher == setting.teacher;
    });

    if (!selectedLesson) {
      // setting was wrongly set
      this.problems.push([day, hour]);
      return schedule[0];
    }

    return selectedLesson;
  }

  isOwnChange(day: DayOfWeek, hour: HourOfDay, change: TChange): boolean {
    try {
      const setting = this.getSetting(day, hour);
      const { subject, teacher } = this.mapChangeToStudyGroup(change);
      return subject == setting.subject && teacher == setting.teacher;
    } catch (err) {
      // no setting for hour
      return false;
    }
  }
}
