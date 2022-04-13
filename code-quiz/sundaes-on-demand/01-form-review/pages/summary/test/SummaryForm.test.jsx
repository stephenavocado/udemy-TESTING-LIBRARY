import { render, screen } from '@testing-library/react';
import SummaryForm from "../SummaryForm";
import userEvent from '@testing-library/user-event';

test('Initial Conditions', () => {
	render(<SummaryForm />);

	const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
	expect(checkbox).not.toBeChecked();

	const confirmButton = screen.getByRole('button', { name: /confirm order/i });
    expect(confirmButton).toBeDisabled();
});

test('Checkbox enables button on first click and disabled on second click', () => {
	render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
	const confirmButton = screen.getByRole('button', { name: /confirm order/i });
	
	userEvent.click(checkbox);
	expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
	expect(confirmButton).toBeDisabled();
});

test('Popover responds to hover', () => {
	render(<SummaryForm />);
    
    // popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expext(nullPopover).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label

    // popover dissapers when we mouse out 
});
