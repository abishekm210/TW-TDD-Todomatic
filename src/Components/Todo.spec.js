import React from "react";
import { fireEvent, getByText, render } from "@testing-library/react";
import Todo from "./Todo";
import Form from "./Form";

describe("Render the Todo", () => {
    it("Should be able to render the text-box filed", () => {
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("item-name")).toBeDefined();
    });

    it("Should be able to render the complete button", () => {
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("complete-button")).toBeDefined();
    });

    it("Should be able to render the trash button", () => {
        const { getByTestId } = render(<Todo />);
        expect(getByTestId("trash-button")).toBeDefined();
    });
});

describe("Testing functionality of TODO", () => {
    it("Should be able to check-out if complete button is clicked", () => {
        const { getByTestId } = render(<Form />);
        fireEvent.change(getByTestId("input-field"), { "target": { "value": "Homework" } });
        fireEvent.click(getByTestId("submit-button"));
        fireEvent.click(getByTestId("complete-button"));
        expect(getByTestId("item-name")).toHaveAttribute("class", "todo-item completed");
    });

    it("Should be able to uncheck if again complete button is clicked", () => {
        const { getByTestId } = render(<Form />);
        fireEvent.change(getByTestId("input-field"), { "target": { "value": "Homework" } });
        fireEvent.click(getByTestId("submit-button"));
        fireEvent.click(getByTestId("complete-button"));
        fireEvent.click(getByTestId("complete-button"));
        expect(getByTestId("item-name")).toHaveAttribute("class", "todo-item ");
    });

    it("Should be able to delete if trash button is clicked", () => {
        const { getByTestId, queryByText } = render(<Form />);
        fireEvent.change(getByTestId("input-field"), { "target": { "value": "Homework" } });
        fireEvent.click(getByTestId("submit-button"));
        fireEvent.click(getByTestId("trash-button"));
        expect(queryByText("Homework")).not.toBeInTheDocument();
    });
})