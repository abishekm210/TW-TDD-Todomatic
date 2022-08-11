import { render } from "@testing-library/react";
import React from "react";
import App from './App.js';

describe("Rendering the app", () => {
    it("Checks the title of the App", () => {
        const { getByText } = render(<App />);
        const linkElement = getByText("Welcome! Abishek Todo list");
        expect(linkElement).toBeInTheDocument();
    });
})