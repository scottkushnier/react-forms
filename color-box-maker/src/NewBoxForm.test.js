

import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("newboxform smoke test", function () {
  render(<NewBoxForm />)
});

test("matches snapshot", function() {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });
