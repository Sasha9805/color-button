import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
	// render App
	render(<App />);

	// find the button
	const buttonElement = screen.getByRole("button", { name: /blue/i });

	// check initial color
	expect(buttonElement).toHaveClass("red");

	// click the button
	fireEvent.click(buttonElement);

	// check button text
	expect(buttonElement).toHaveTextContent(/red/i);

	// check button color
	expect(buttonElement).toHaveClass("blue");
	// expect(buttonElement).toHaveStyle({
	// 	"background-color": "rgb(0, 0, 255)",
	// });
});

test("checkbox flow", () => {
	render(<App />);

	// find elements
	const buttonElement = screen.getByRole("button", { name: /blue/i });
	const checkboxElement = screen.getByRole("checkbox", {
		name: /disable button/i,
	});

	// check initial conditions
	expect(buttonElement).toBeEnabled();
	expect(checkboxElement).not.toBeChecked();

	// click checkbox to disable button
	fireEvent.click(checkboxElement);
	expect(buttonElement).toBeDisabled();
	expect(buttonElement).toHaveClass("gray");

	// click checkbox again to re-enable button
	fireEvent.click(checkboxElement);
	expect(buttonElement).toBeEnabled();
	expect(buttonElement).toHaveClass("red");
});

test("checkbox flow after button click", () => {
	render(<App />);

	// find elements
	const buttonElement = screen.getByRole("button", { name: /blue/i });
	const checkboxElement = screen.getByRole("checkbox", {
		name: /disable button/i,
	});

	// click button to change color to blue
	fireEvent.click(buttonElement);

	// click checkbox to disable button
	fireEvent.click(checkboxElement);
	expect(buttonElement).toBeDisabled();
	expect(buttonElement).toHaveClass("gray");

	// click checkbox again to re-enable button
	fireEvent.click(checkboxElement);
	expect(buttonElement).toBeEnabled();
	expect(buttonElement).toHaveClass("blue");
});
