import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Stats from "../landing_page/home/Stats";

describe("Stats Component", () => {
    test("renders main heading", () => {
        render(<Stats />);
        const heading = screen.getByText(/Free and open market education/i);
        expect(heading).toBeInTheDocument();
    });

    test("renders Varsity link", () => {
        render(<Stats />);
        const varsityLink = screen.getByText(/Varsity/i);
        expect(varsityLink).toBeInTheDocument();
        expect(varsityLink.closest("a")).toHaveAttribute("href");
    });

    test("renders TradingQ&A link", () => {
        render(<Stats />);
        const tradingLink = screen.getByText(/TradingQ&A/i);
        expect(tradingLink).toBeInTheDocument();
        expect(tradingLink.closest("a")).toHaveAttribute("href");
    });
});
