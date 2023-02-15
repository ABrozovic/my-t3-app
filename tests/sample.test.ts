import {env} from "../src/env.mjs"
test("Initial test", () => {
  expect(env.NODE_ENV).toEqual("Development");
});