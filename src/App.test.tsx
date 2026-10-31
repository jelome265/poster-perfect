import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { App } from "./App";

// These tests guard the content rules in docs/content-structure.md (DEC-014,
// DEC-019): section order, the in-page CTA, placeholders instead of unapproved
// figures and quotations, and no contact or social links without verified values.

function renderApp(): HTMLElement {
  const { container } = render(<App />);
  return container;
}

afterEach(() => {
  cleanup();
});

describe("page composition", () => {
  it("renders the seven approved sections in source order", () => {
    const container = renderApp();
    const sections = Array.from(container.querySelectorAll("main > section"));
    const names = sections.map((section) => section.className.split(" ")[0]);
    expect(names).toEqual(["hero", "about", "value", "services", "statistics", "testimonials", "contact"]);
  });

  it("has one level-one heading with the source headline", () => {
    renderApp();
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.textContent).toBe("Your vision, Our design");
  });

  it("keeps the About heading as the approved editorial heading", () => {
    renderApp();
    expect(screen.getByRole("heading", { level: 2, name: "Distinctive design for growing businesses" })).toBeTruthy();
  });
});

describe("in-page call to action", () => {
  it("links LEARN MORE to the About section, and that target exists", () => {
    const container = renderApp();
    const link = screen.getByRole("link", { name: "LEARN MORE" });
    expect(link.getAttribute("href")).toBe("#about");
    expect(container.querySelector("#about")).not.toBeNull();
  });
});

describe("placeholders instead of unapproved content", () => {
  it("shows three statistic placeholders and no figures", () => {
    const container = renderApp();
    const tiles = container.querySelectorAll(".statistics__tile");
    expect(tiles.length).toBe(3);
    const text = container.textContent ?? "";
    expect(text).not.toContain("99%");
    expect(text).not.toContain("1+");
    expect(text).not.toContain("Worldwide");
  });

  it("shows three testimonial placeholders and no quotations or customer names", () => {
    const container = renderApp();
    expect(container.querySelectorAll(".testimonial-card").length).toBe(3);
    const text = container.textContent ?? "";
    expect(text).not.toContain("Orders went up");
    expect(text).not.toContain("Thandi");
    expect(text).not.toContain("Chisomo");
    expect(text).not.toContain("Daniel");
    expect(text).not.toContain("Founder, Lilongwe");
  });

  it("omits unapproved service promises and personal education details", () => {
    const container = renderApp();
    const text = container.textContent ?? "";
    expect(text).not.toContain("unlimited minor revisions");
    expect(text).not.toContain("24 hours");
    expect(text).not.toContain("3 concepts");
    expect(text).not.toContain("International Management");
    expect(text).not.toContain("student");
  });

  it("never renders a placeholder as a link", () => {
    const container = renderApp();
    const placeholders = Array.from(container.querySelectorAll(".placeholder"));
    expect(placeholders.length).toBeGreaterThan(0);
    for (const node of placeholders) {
      expect(node.closest("a")).toBeNull();
    }
  });
});

describe("contact and footer", () => {
  it("creates no mailto, tel, or external links", () => {
    const container = renderApp();
    const hrefs = Array.from(container.querySelectorAll("a[href]")).map((a) => a.getAttribute("href") ?? "");
    expect(hrefs.filter((href) => href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http"))).toEqual([]);
  });

  it("keeps the source headquarters, telephone, email, office-hours and social regions as placeholders", () => {
    const container = renderApp();
    const contact = container.querySelector("section.contact");
    expect(contact).not.toBeNull();
    const scoped = within(contact as HTMLElement);
    expect(scoped.getByText("Headquarters")).toBeTruthy();
    expect(scoped.getByText("Telephone")).toBeTruthy();
    expect(scoped.getByText("Email")).toBeTruthy();
    expect(scoped.getByText("Monday to Friday")).toBeTruthy();
    expect(scoped.getByText("Weekends by appointment")).toBeTruthy();
    expect(scoped.getByText("Facebook")).toBeTruthy();
    expect(scoped.getByText("X / Twitter")).toBeTruthy();
    expect(scoped.getByText("Instagram")).toBeTruthy();
  });
});

describe("value and services content", () => {
  it("shows the four source value points in order", () => {
    const container = renderApp();
    const labels = Array.from(container.querySelectorAll(".value-badge__label")).map((node) => node.textContent);
    expect(labels).toEqual(["RELIABILITY", "PERSONALIZED APPROACH", "TIMELY DELIVERY", "HIGH STANDARDS"]);
  });

  it("shows the three source service examples as captioned figures", () => {
    const container = renderApp();
    const captions = Array.from(container.querySelectorAll(".service-card__label")).map((node) => node.textContent);
    expect(captions).toEqual(["Brochures", "Logos", "Magazine covers"]);
  });
});
