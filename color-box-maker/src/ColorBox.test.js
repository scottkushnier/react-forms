
import { render } from "@testing-library/react";
import ColorBox from "./ColorBox";

test("colorbox smoke test", function () {
  render(<ColorBox  color='white' height='10px' width='10px'/>)
});

test("matches snapshot", function() {
    const {asFragment} = render(<ColorBox  color='blue' height='20px' width='20px'/>);
    expect(asFragment()).toMatchSnapshot();
  });

