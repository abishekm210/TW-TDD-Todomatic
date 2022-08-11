import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Form from "./Form";

describe("Rendering the Form", () => {
    it("Should be able to render the input text filed", () => {
        const { getByTestId } = render(<Form />);
        expect(getByTestId("input-field")).toHaveAttribute('type', 'text');
    });

    it("Should be able to render the submit button", () => {
        const { getByTestId } = render(<Form />);
        expect(getByTestId("submit-button")).toHaveAttribute('type', 'submit');
    });

    it("Submit button should be able to disable when there is no text", () => {
        const { getByTestId } = render(<Form />);
        expect(getByTestId("submit-button")).toBeDisabled();
    });
});

describe("Testing functionality for Form", () => {
    it("Should be able to submit text", () => {
        const { getByTestId } = render(<Form />);
        fireEvent.change(getByTestId("input-field"), { "target": { "value": "Homework" } });
        expect(getByTestId("submit-button")).not.toBeDisabled();
    });

    it("Text field should be able to clear after submit and submit button need to be disabled", () => {
        const { getByTestId } = render(<Form />);
        fireEvent.change(getByTestId("input-field"), { "target": { "value": "Hai" } });
        fireEvent.click(getByTestId("submit-button"));
        expect(getByTestId("input-field").value).toBe("");
        expect(getByTestId("submit-button")).toBeDisabled();
    });
});