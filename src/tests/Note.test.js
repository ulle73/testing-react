import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Note from "../components/Note";
import userEvent from "@testing-library/user-event";

test("renders content", () => {
  const note = {
    // content: "Component testing is done with react-testing-library",
    content: "Component testing",
    important: true,
  };

  //render(<Note note={note} />);
  const {container} = render(<Note note={note} />);


  // const element = screen.getByText(
  //   "Component testing is done with react-testing-library"
  // );

  const li = container.querySelector(".note");
  expect(li).toHaveTextContent("Component testing")
});





test("click button works", async () => {
  const mockFn = jest.fn()

  const note = {
    // content: "Component testing is done with react-testing-library",
    content: "Component testing",
    important: true,
  };

  //render(<Note note={note} />);
  render(<Note note={note} toggleImportance={mockFn} />);


  // const element = screen.getByText(
  //   "Component testing is done with react-testing-library"
  // );

  const user = userEvent.setup()
  const button = screen.getByText("make not important")
  await user.click(button)

  expect(mockFn.mock.calls).toHaveLength(1)
});