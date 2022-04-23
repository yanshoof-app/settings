import { IChange, ILesson, IStudyGroup } from '@yanshoof/types';
import { StudyGroupMapSettings } from '..';

export class TestSettings extends StudyGroupMapSettings<ILesson, IChange> {
  protected mapLessonToStudyGroup(lesson: ILesson): IStudyGroup {
    return lesson;
  }
  protected mapChangeToStudyGroup(change: IChange): IStudyGroup {
    return change;
  }
}
