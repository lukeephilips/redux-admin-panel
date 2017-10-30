import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';


describe("Manage course page", () => {
  it("sets error message when trying to save empty title", () => {
    const props ={
      course: {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""},
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve();}}
    };

    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find("input").last();
    expect(saveButton.prop("type")).toBe("submit");

    saveButton.simulate("click");
    expect(wrapper.state().errors.title).toBe("Title must be at least 5 characters");
  });
  it("Saves a new course", () => {
    const props ={
      course: {id: "test-course", watchHref: "", title: "Test Course", authorId: "billy-bones", length: "", category: ""},
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve();}}
    };

    const wrapper = mount(<ManageCoursePage {...props} />);
    const saveButton = wrapper.find("input").last();

    saveButton.simulate("click");
    expect(wrapper.state().course.title).toBe("Test Course");
  });
  // it("Deletes a course", () => {
  //   const props ={
  //     course: {id: "test-course", watchHref: "", title: "Test Course", authorId: "billy-bones", length: "", category: ""},
  //     authors: [],
  //     actions: {saveCourse: () => {return Promise.resolve();}}
  //   };
  //
  //   const wrapper = mount(<ManageCoursePage {...props} />);
  //   const saveButton = wrapper.find("input").last();
  //
  //   saveButton.simulate("click");
  //   expect(wrapper.state().course.title).toBe("Test Course");
  // });
});
