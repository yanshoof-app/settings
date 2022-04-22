import { DayOfWeek, HourOfDay } from '@yanshoof/types';

export type ProblemArray = [DayOfWeek, HourOfDay][];

/**
 * Represents a settings object
 */
export interface ISettings<TLesson, TChange> {
  problems: ProblemArray;

  /**
   * Picks a lesson out of a list
   * @param day the day the lesson takes place in
   * @param hour the hour the lesson takes place in
   * @param schedule the lessons to choose from
   * @returns the lesson chosen
   */
  selectLesson(day: DayOfWeek, hour: HourOfDay, schedule: TLesson[]): TLesson;

  /**
   * Checks if a change is relevant to one's study groups
   * @param day the day the change takes place in
   * @param hour the hour the change takes place in
   * @param change the change to check
   * @returns true if relevant, false otherwise
   */
  isOwnChange(day: DayOfWeek, hour: HourOfDay, change: TChange): boolean;
}
