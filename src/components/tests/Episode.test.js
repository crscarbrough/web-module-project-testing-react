import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Episode from "./../Episode";

const testEpisode = {
  id: 1,
  name: "",
  image:
    "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
  season: 1,
  number: 1,
  summary: "test",
  runtime: 1,
};

const testEpisodeWithoutImage = {
  id: 1,
  name: "",
  image: null,
  season: 1,
  number: 1,
  summary: "test",
  runtime: 1,
};

test("renders without error", () => {
  render(<Episode episode={testEpisode} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={testEpisode} />);
  const summary = screen.queryByText(/test/i);
  expect(summary).toBeInTheDocument();
  expect(summary).toBeTruthy;
  expect(summary).toHaveTextContent("test");
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={testEpisodeWithoutImage} />);
  const image = screen.queryByAltText(
    "https://i.ibb.co/2FsfXqM/stranger-things.png"
  );

  expect(image).toBeInTheDocument();
});
