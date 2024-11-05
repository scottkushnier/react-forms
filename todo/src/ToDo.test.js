
import { render } from "@testing-library/react";
import ToDo from "./ToDo";

test("colorbox smoke test", function () {
  render(<ToDo text="laundry"/>)
});

test("matches snapshot", function() {
    const {asFragment} = render(<ToDo text='shopping'/>);
    expect(asFragment()).toMatchSnapshot();
  });

