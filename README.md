# @yanshoof/settings

A Class Library for managing and encapsulating settings

## The Object-Oriented Approach

We decided to use the object-oriented approach because of the following reasons:

- Ease of refactoring. With the current architecture, we can switch between implementations of the functionality while maintaining backward compataility easily.
- Encapsulation: Cleaner, more understandable code. So select a lesson out of a list, all you need to do is `settings.selectLesson(day, hour, list)`

## The Class Library

This repository currently offers a few classes to use:

### `abstract class Settings<TLesson> implements ISettings<TLesson>`

Implements the ISettings interface with the core functionality required - selecting lessons and selecting study groups.

**Usage:**

We recommand using this class in type declerations, as it is the most abstract version of settings.

```ts
class Timetable {
  private settings: Settings<ILesson>;

  constructor(settings: Settings<ILesson>) {
    this.settings = settings;
  }
}
```

### StudyGroupMapSettings

A rather implementation of the settings utilities using an array of study groups and a map of days and hours to the indexes of them.

**Usage:**

We recommand extending this class to the type of settings you need

```ts
class LessonListSettings extends StudyGroupMapSettings<ILesson> {
  protected abstract mapLessonToStudyGroup(lesson: ILesson) {
      return lesson;
  }
}

// main file
const settings = new LessonListSettings({ ... });
const timetable = new Timetable(settings);
```

### Implementing other functionalities

Extend the `Settings` class to implement other functionalities.
