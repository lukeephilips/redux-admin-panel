import expect from 'expect';
import CourseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe("Course reducer", () => {
  it("should add course when passed CREATE_COURSE_SUCCESS", () => {
    const initalState =[
      {title: "A"},
      {title: "B"}
    ];
    const newCourse = {title: "C"};
    const action = actions.createCourseSuccess(newCourse);

    const newState = CourseReducer(initalState, action);
    expect(newState.length).toEqual(3);
    let last = newState.length -1;
    expect(newState[last].title).toEqual(newCourse.title);
  });
  it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
    const initalState = [
      {id: "A", title: "A"},
      {id: "B", title: "B"},
      {id: "C", title: "C"}
    ];
    const course = {id: "B", title: "taco salad"};
    const action = actions.updateCourseSuccess(course);

    const newState = CourseReducer(initalState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == "A");

    expect(updatedCourse.title).toEqual("taco salad");
    expect(untouchedCourse.title).toEqual("A");
    expect(newState.length).toEqual(3);
  });
});
