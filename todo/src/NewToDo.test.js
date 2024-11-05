import { render } from "@testing-library/react";
import NewToDo from "./NewToDo";

test("newtodo smoke test", function () {
  render(<NewToDo />)
});

test("matches snapshot", function() {
    const {asFragment} = render(<NewToDo />);
    expect(asFragment()).toMatchSnapshot();
  });
