import { DayOfWeek, HourOfDay, IStudyGroup } from '@yanshoof/types';

export type ProblemArray = [DayOfWeek, HourOfDay][];

/**
 * Represents a settings object
 */
export interface ISettings<TLesson> {
  problems: ProblemArray;
  showOthersChanges: boolean;

  /**
   * Picks a lesson out of a list
   * @param day the day the lesson takes place in
   * @param hour the hour the lesson takes place in
   * @param schedule the lessons to choose from
   * @returns the lesson chosen, undefined if window at current hour
   */
  selectLesson(day: DayOfWeek, hour: HourOfDay, schedule: TLesson[]): TLesson | undefined;

  /**
   * Checks if a change is relevant to one's study groups
   * @param day the day the change takes place in
   * @param hour the hour the change takes place in
   * @param studyGroup the study group to check
   * @returns true if relevant, false otherwise
   */
  isOwnStudyGroup(day: DayOfWeek, hour: HourOfDay, studyGroup: IStudyGroup): boolean;

  /**
   * Repair settings
   */
  repair(): void;
}
