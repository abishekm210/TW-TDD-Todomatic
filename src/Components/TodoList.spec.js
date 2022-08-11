import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

describe("Render the TodoList", () => {
    it("Should be able to render the list", () => {
        const { getByTestId } = render(<TodoList />);
        expect(getByTestId("list-filter")).toBeDefined();
    });
});