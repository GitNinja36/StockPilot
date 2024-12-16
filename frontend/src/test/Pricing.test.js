import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Pricing from "../landing_page/home/Pricing";

describe("Pricing Component", () => {
    test("renders main heading", () => {
        render(<Pricing />);
        const heading = screen.getByText(/Unbeatable pricing/i);
        expect(heading).toBeInTheDocument();
    });

    test("renders pricing boxes", () => {
        render(<Pricing />);
        const pricingBoxes = screen.getAllByRole("img");
        expect(pricingBoxes.length).toBeGreaterThan(0);
    });

    test("renders 'See Pricing' link", () => {
        render(<Pricing />);
        const pricingLink = screen.getByText(/See Pricing/i);
        expect(pricingLink).toBeInTheDocument();
        expect(pricingLink.closest("a")).toHaveAttribute("href", "#");
    });
});
