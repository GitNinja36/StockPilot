import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Awards from "../landing_page/home/Awards";

describe("Awards Component", () => {
    test("renders main heading", () => {
        render(<Awards />);
        const heading = screen.getByText(/Trust with confidence/i);
        expect(heading).toBeInTheDocument();
    });

    test("renders subheading for 'Customer-first always'", () => {
        render(<Awards />);
        const subHeading = screen.getByText(/Customer-first always/i);
        expect(subHeading).toBeInTheDocument();
    });

    test("renders ecosystem image", () => {
        render(<Awards />);
        const ecosystemImage = screen.getByAltText("Eco-System");
        expect(ecosystemImage).toBeInTheDocument();
        expect(ecosystemImage).toHaveAttribute("src", "media/images/ecosystem.png");
    });

    test("renders explore link", () => {
        render(<Awards />);
        const exploreLink = screen.getByText(/Explore our products/i);
        expect(exploreLink).toBeInTheDocument();
        expect(exploreLink.closest("a")).toHaveAttribute("href");
    });
});
