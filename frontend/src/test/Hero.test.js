import React from "react"; 
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Hero from "../landing_page/home/Hero";

//Test Suite
describe('Hero Component', ()=>{
    test('render Hero Image', ()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Images");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
    });

    test("renders Sign-up button", () => {
        render(<Hero />);
        const signUpButton = screen.getByRole("button", { name: /sign up for free/i });
        expect(signUpButton).toBeInTheDocument();
        expect(signUpButton).toHaveClass("btn-primary");
    });
});