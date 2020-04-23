import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetchShow");
// console.log(mockFetchShow);

test("App fetches show data and renders data", async () => {
  // const mockData = {
  //   data: {
  //     id: "id1",
  //     name: "name1",
  //     image: {
  //       original:
  //         "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
  //     },
  //     summary: "this is a show!",
  //     _embedded: [{}]
  //   }
  // };
  const mockData = {
    data: {
      name: "rabah",
      image: { original: "/original" },
      summary: "<p>A love letter<p>",
      _embedded: {
        episodes: [
          {
            id: 101,
            name: "chapter 11",
            runtime: 100,
            season: 100,
            number: 11,
            image: { medium: "" },
            summary: "<p>just watch it</p>"
          }
        ]
      }
    }
  };

  mockFetchShow.mockResolvedValueOnce(mockData);

  render(<App />);
});
