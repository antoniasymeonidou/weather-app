import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/search-form";

describe("SeachForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchForm />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders a text input", () => {
    const { getByTestId } = render(<SearchForm />);
    const input = getByTestId("input-id");

    expect(input).toHaveAttribute("type", "text");
  });
  it("renders a button", () => {
    const { getByTestId } = render(<SearchForm />);
    const button = getByTestId("button-id");

    expect(button).toHaveClass("button");
    expect(button).toHaveTextContent("Search");
  });
});