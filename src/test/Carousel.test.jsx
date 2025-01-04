import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Carousel from "../components/Carousel";

jest.useFakeTimers(); // Use fake timers to control the auto-slide functionality

describe("Carousel Component", () => {
  test("renders all images and texts", () => {
    render(<Carousel />);

    // Check if images and texts are present
    expect(screen.getByAltText("image-1")).toBeInTheDocument();
    expect(
      screen.getByText("Capturing Moments, Creating Memories")
    ).toBeInTheDocument();

    expect(screen.getByAltText("image-2")).toBeInTheDocument();
    expect(screen.getByText("Text 2")).toBeInTheDocument();

    expect(screen.getByAltText("image-3")).toBeInTheDocument();
    expect(screen.getByText("Text 3")).toBeInTheDocument();
  });
});
