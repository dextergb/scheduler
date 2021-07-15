import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import Button from "components/Button";

afterEach(cleanup);

/**-----Test 1: Renders its `children` prop as text-----**/

it("renders its `children` prop as text", () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText("Default")).toBeInTheDocument();
});

/**-----Test 2: Renders a default button style-----**/

it("renders a default button style", () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText("Default")).toHaveClass("button");
});

/**-----Test 3: Renders a confirm button-----**/

it("renders a confirm button", () => {
  const { getByText } = render(<Button confirm>Confirm</Button>);
  expect(getByText("Confirm")).toHaveClass("button--confirm");
});

/**-----Test 4: Renders a danger button-----**/

it("renders a danger button", () => {
  const { getByText } = render(<Button danger>Danger</Button>);
  expect(getByText("Danger")).toHaveClass("button--danger");
});

/**-----Test 5: Renders a clickable button-----**/

it("renders a clickable button", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick}>Clickable</Button>
  );
  const button = getByText("Clickable");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

/**-----Test 6: Renders a disabled button-----**/

it("renders a disabled button", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button disabled onClick={handleClick}>
      Disabled
    </Button>
  );
  const button = getByText("Disabled");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(0);
});
