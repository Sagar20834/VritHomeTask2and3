import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Fetchuser from "../Components/Fetchuser";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "123-456-7890",
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "jane@example.com",
          phone: "098-765-4321",
        },
      ]),
  })
);

describe("Fetchuser component", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  test("renders correctly when data is fetched successfully", async () => {
    render(<Fetchuser />);

    // Check for loading state
    expect(screen.getByText(/fetch user data task 2/i)).toBeInTheDocument();

    // Wait for the users to be rendered
    await waitFor(() => {
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      expect(screen.getByText(/jane doe/i)).toBeInTheDocument();
    });
  });

  test("handles errors and displays the error message", async () => {
    // Mock fetch to simulate a failed API call
    fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Network response was not ok"))
    );

    render(<Fetchuser />);

    // Wait for the error message to be displayed
    await waitFor(() => {
      expect(screen.getByText(/error:/i)).toBeInTheDocument();
      expect(
        screen.getByText(/network response was not ok/i)
      ).toBeInTheDocument();
    });
  });

  test("displays the correct URL in the error message", async () => {
    const errorUrl = "https://jsonplaceholder.typicode.com/users/";

    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: "Not Found",
        url: errorUrl,
        type: "basic",
      })
    );

    render(<Fetchuser />);

    await waitFor(() => {
      expect(screen.getByText(/404/i)).toBeInTheDocument();
      expect(screen.getByText(errorUrl)).toBeInTheDocument();
    });
  });
});
