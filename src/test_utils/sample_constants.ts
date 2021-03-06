import { IChange, ILesson, LessonModification } from '@yanshoof/types';
import { IScheduleSettings } from '..';

export const AMI_ASSAF_SYMBOL = '460030';
export const YUD_7_ID = 28;

export const ENGLISH_LESSONS: ILesson[] = [
  {
    subject: 'אנגלית האצה',
    teacher: 'לואיס אינגריד',
    class: 'חדר י 2 אקוסטי',
  },
  {
    subject: 'אנגלית 3',
    teacher: 'לוינשטיין גבע',
    class: 'חדר י 1',
  },
  {
    subject: 'אנגלית 5',
    teacher: 'ורגוליס ארתור',
    class: 'חדר י 3',
  },
  {
    subject: 'אנגלית 4',
    teacher: 'מושקוביץ מירב',
    class: 'חדר ח 1',
  },
  {
    subject: 'אנגלית 5',
    teacher: 'סער אסנת',
    class: 'חדר הקבצה ז',
  },
  {
    subject: 'אנגלית 4',
    teacher: 'עזאם רנא',
    class: 'חדר י 6',
  },
  {
    subject: 'אנגלית האצה',
    teacher: 'פינקלשטיין קרן',
    class: 'כימיה מעבדה 1',
  },
  {
    subject: 'אנגלית 5',
    teacher: 'קישנר לאה',
    class: 'חדר י 8',
  },
  {
    subject: 'אנגלית 4',
    teacher: 'רותם סיגל',
    class: 'חדר י 5',
  },
  {
    subject: 'אנגלית 5',
    teacher: 'רייס יעל',
    class: 'חדר י 9',
  },
  {
    subject: 'אנגלית 5',
    teacher: 'שוורץ יעל',
    class: 'חדר י 7',
  },
];

export const ENGLISH_CANCELLATION: IChange = {
  day: 1,
  hour: 4,
  subject: 'אנגלית 5',
  teacher: 'ורגוליס ארתור',
  modification: LessonModification.Canceled,
};

export const OTHERS_ENGLISH_CHANGE: IChange = {
  day: 1,
  hour: 4,
  subject: 'אנגלית 5',
  teacher: 'שוורץ יעל',
  modification: LessonModification.Canceled,
};

export const SETTINGS: IScheduleSettings = {
  showOthersChanges: true,
  studyGroups: [
    ['כימיה', 'זרסקי יפעת'],
    ['מתמטיקה 5', 'טיראן חוה'],
    ['חנג בנים', 'פריזה אמיר'],
    ['אנגלית 5', 'ורגוליס ארתור'],
    ['מדעי המחשב יחל 1', 'זבלינסקי קונסטנטין'],
  ],
  studyGroupMap: new Map([
    ['0,1', 0],
    ['0,2', 0],
    ['0,5', 1],
    ['0,6', 1],
    ['0,7', 2],
    ['0,8', -1],
    ['0,9', -1],
    ['1,4', 3],
    ['1,5', 3],
    ['1,6', 0],
    ['1,7', -1],
    ['1,8', -1],
    ['1,9', -1],
    ['2,1', 1],
    ['2,2', 1],
    ['2,5', 4],
    ['2,6', 4],
    ['2,8', -1],
    ['2,9', -1],
    ['2,10', 1],
    ['3,0', 1],
    ['3,3', -1],
    ['3,4', 4],
    ['3,6', 3],
    ['3,7', -1],
    ['3,8', 0],
    ['3,9', -1],
    ['4,3', 3],
    ['4,4', 3],
    ['4,6', 2],
    ['4,7', -1],
    ['4,8', -1],
    ['4,9', -1],
    ['5,1', -1],
    ['5,2', -1],
    ['5,3', -1],
  ]),
};

export const OSHRI_SETTINGS: IScheduleSettings = {
  showOthersChanges: true,
  studyGroups: [
    ['פיזיקה מואצת', 'רוזנבלום כרמית'],
    ['מתמטיקה 5', 'טיראן חוה'],
    ['חנג בנים', 'פריזה אמיר'],
    ['אנגלית 5', 'ורגוליס ארתור'],
    ['הנדסת תוכנה יח"ל 1-2', 'כהן ורד'],
  ],
  studyGroupMap: new Map([
    ['0,1', 0],
    ['0,2', 0],
    ['0,5', 1],
    ['0,6', 1],
    ['0,7', 2],
    ['0,8', -1],
    ['0,9', -1],
    ['1,4', 3],
    ['1,5', 3],
    ['1,6', 0],
    ['1,7', -1],
    ['1,8', -1],
    ['1,9', -1],
    ['2,1', 1],
    ['2,2', 1],
    ['2,5', 4],
    ['2,6', 4],
    ['2,8', -1],
    ['2,9', -1],
    ['2,10', 1],
    ['3,3', -1],
    ['3,4', 4],
    ['3,6', 3],
    ['3,7', -1],
    ['3,8', 0],
    ['3,9', -1],
    ['4,3', 3],
    ['4,4', 3],
    ['4,6', 2],
    ['4,7', -1],
    ['4,8', -1],
    ['4,9', -1],
    ['5,1', -1],
    ['5,2', -1],
    ['5,3', -1],
  ]),
};
