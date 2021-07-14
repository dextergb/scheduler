import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";

afterEach(cleanup);

describe("Appointment", () => {
  // Delete this later
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});
