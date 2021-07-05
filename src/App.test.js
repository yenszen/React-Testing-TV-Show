import React from "react";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

test("should display fetching data text", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("fetch-data")).toHaveTextContent("Fetching data...");
});

test("should load and display tv show data", async () => {
  jest.mock("./api/fetchShow");
  mockFetchShow.mockResolvedValueOnce({
    data: {
      name: "Stranger Things"
    }
  });

  const resolvedShowName = await waitForElement(() => {
    getByTestId("show-name");
  });

  expect(resolvedShowName).toHaveTextContent("Stranger Things");
});
