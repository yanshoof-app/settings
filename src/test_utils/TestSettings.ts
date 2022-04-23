import { ILesson, IStudyGroup } from '@yanshoof/types';
import { StudyGroupMapSettings } from '..';

export class TestSettings extends StudyGroupMapSettings<ILesson> {
  protected mapLessonToStudyGroup(lesson: ILesson): IStudyGroup {
    return lesson;
  }
}
