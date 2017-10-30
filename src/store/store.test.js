import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe("Store", () => {
  it("should handle creating courses", () => {
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "ding dong"
    };
    const course2 = {
      id: "ping-pong",
      title: "ping pong"
    };
    const course3 = {
      id: "ping-pong",
      title: "ching chong"
    };

    const action = courseActions.createCourseSuccess(course);
    const action2 = courseActions.createCourseSuccess(course2);
    const action3 = courseActions.updateCourseSuccess(course3);

    store.dispatch(action);
    store.dispatch(action2);
    store.dispatch(action3);

    const actual = store.getState().courses;
    const expected = {
      title: "ding dong"
    };
    expect(actual.length).toEqual(2);
    expect(actual[0]).toEqual(expected);
    expect(actual[1].title).toEqual("ching chong");

  });
  it("should handle deleting courses", () => {
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "ding dong"
    };
    const add = courseActions.createCourseSuccess(course);
    store.dispatch(add);

    const action = courseActions.deleteCourseSuccess(course);
    store.dispatch(action);
    const actual = store.getState().courses;

    expect(actual).toEqual(0);

  });
});
