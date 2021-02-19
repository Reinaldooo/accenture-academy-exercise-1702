import { render } from "@testing-library/react";
import React from "react";
import Landing from "../../views/pages/Landing";

describe("Home app", () => {
  it("Find repo", () => {
    const { debug } = render(<Landing />);
    debug();
  });
});
