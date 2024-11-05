

import { render, fireEvent } from "@testing-library/react";
import ColorBoxList from "./ColorBoxList";
import '@testing-library/jest-dom'

test("colorboxlist smoke test", function () {
  render(<ColorBoxList />)
});

test("matches snapshot", function() {
    const {asFragment} = render(<ColorBoxList />);
    expect(asFragment()).toMatchSnapshot();
  });

test("should add new box", function() {
    const {queryByText, getByLabelText, queryByTestId} = render(<ColorBoxList />);
    const btn = queryByText('Submit');
    const colorInput = getByLabelText('Color:');
    const heightInput = getByLabelText('Height:');
    const widthInput = getByLabelText('Width:');
    const boxList = queryByTestId("boxlist");
    expect(boxList).not.toContainHTML("purple");
    fireEvent.change(colorInput, {target: {value: 'purple'}});
    fireEvent.change(heightInput, {target: {value: 42}});
    fireEvent.change(widthInput, {target: {value: 53}});
    fireEvent.click(btn);
    expect(boxList).toContainHTML("purple");
    expect(boxList).toContainHTML("42px");
    expect(boxList).toContainHTML("53px");
});

