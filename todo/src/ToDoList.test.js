import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";
import '@testing-library/jest-dom'

test("todolist smoke test", function () {
  render(<ToDoList />)
});

test("matches snapshot", function() {
    const {asFragment} = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should add new todo item", function() {
    const {getByLabelText, queryByTestId} = render(<ToDoList />);
    const itemInput = getByLabelText('New Item:');
    const div = queryByTestId('todolist');
    const form = queryByTestId('form')
    expect(div).not.toContainHTML("shopping");
    fireEvent.change(itemInput, {target: {value: 'shopping'}});
    fireEvent.submit(form);
    expect(div).toContainHTML("shopping");
});
