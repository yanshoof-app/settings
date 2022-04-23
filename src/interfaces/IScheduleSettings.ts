/**
 * Represents an object of user-defined settings
 */
export interface IScheduleSettings {
  /**
   * An array of [subject, teacher] tuples
   */
  studyGroups: [string, string][];
  /**
   * A map from `day,hour` strings to indexes in the latter array
   */
  studyGroupMap: Map<string, number>;
  /**
   * Determines if changes of others should be shown
   */
  showOthersChanges: boolean;
}
