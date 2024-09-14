import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Form from "../Components/Form";

describe("Testing ContactForm Component", () => {
  test("Should render first input", () => {
    render(<Form />);
    const correo = screen.getByRole("nombre");
    expect(correo).toBeDefined();
  });
  test("Should change second input", () => {
    render(<Form />);
    const correo = screen.getByTestId("correo");
    fireEvent.change(correo, { target: { value: "donra2210@gmail.com" } });
    expect(correo.value).toBe("donra2210@gmail.com"); 
  });
  test("Should call button function", () => {
    const handleSubmit = vi.fn();
    render(<Form handleSubmit={handleSubmit} />);
    const button = screen.getByText("Enviar");
    fireEvent.click(button);
    expect(handleSubmit).toBeCalledTimes(1);
  });
});