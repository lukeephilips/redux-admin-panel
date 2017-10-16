import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe ('Selectors', () => {
  describe("authorsFormattedForDropdown", () => {
    it("should return author data formatted for a dropdown", () => {
      const authors = [
        {id: "ding-dong", firstName: "ding", lastName: "dong"},
        {id: "ping-pong", firstName: "ping", lastName: "pong"}
      ];
      const expected = [
        {value: "ding-dong", text: "ding dong"},
        {value: "ping-pong", text: "ping pong"}
      ];
      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
