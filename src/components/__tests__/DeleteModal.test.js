import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DeleteModal from "../DeleteModal";

test("renders DeleteModal with correct content", () => {
  render(<DeleteModal show={true} />);

  expect(screen.getByText("Confirm Deletion")).toBeInTheDocument();
  expect(
    screen.getByText("Are you sure you want to delete this item?")
  ).toBeInTheDocument();
  expect(screen.getByText("Cancel")).toBeInTheDocument();
  expect(screen.getByText("Delete")).toBeInTheDocument();
});

test("calls the handleClose function when Cancel button is clicked", () => {
  // jest.fn is used for creating a mock function for the handle close
  const handleClose = jest.fn();
  render(<DeleteModal show={true} handleClose={handleClose} />);

  const cancelButton = screen.getByText("Cancel");
  fireEvent.click(cancelButton);

  expect(handleClose).toHaveBeenCalled();
});

test("calls the handleConfirm function when Delete button is clicked", () => {
  const handleConfirm = jest.fn();
  render(<DeleteModal show={true} handleConfirm={handleConfirm} />);

  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  expect(handleConfirm).toHaveBeenCalled();
});
