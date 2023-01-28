import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render with a title", () => {
    render(<App />);

    expect(screen.getByText("Smooth Commerce")).toBeInTheDocument();
  })
})
