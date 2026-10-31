import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "./App";

describe("App shell", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the company name as the main heading", () => {
    render(<App />);
    // getByRole throws when the heading is absent, so reaching this line proves it rendered.
    expect(screen.getByRole("heading", { level: 1, name: "Poster Perfect" })).toBeTruthy();
  });
});
