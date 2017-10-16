import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// test async action
describe ('Course actions', () => {
  describe("createCourseSuccess", () => {
    it("should create a CREATE_COURSE_SUCCESS action", () => {
      const course = {id: "ding-dong", title: "ding dong"};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      // action
      const action = courseActions.createCourseSuccess(course);
      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});

// test Thunks
const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);

describe("async actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", (done) => {
    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: "ding-dong", title: "ding dong"}]}}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });
});
