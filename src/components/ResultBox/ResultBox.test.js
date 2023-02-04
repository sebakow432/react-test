import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
	it('should render without crashing', () => {
		const testCases = [
			{ amount: 100, from: 'PLN', to: 'USD' },
			{ amount: 20, from: 'USD', to: 'PLN' },
			{ amount: 200, from: 'PLN', to: 'USD' },
			{ amount: 345, from: 'USD', to: 'PLN' },
		];

		for (let objTest of testCases) {
			render(
				<ResultBox from={objTest.from} to={objTest.from} amount={objTest.amount}/>
			);
    }
	});
	it('should render proper info about conversion when PLN -> USD', () => {
		render(<ResultBox from='PLN' to='USD' amount={100} />);

		const output = screen.getByTestId('output');
		expect(output).toHaveTextContent('PLN 100.00 = $28.57');
	});
	it('should render proper info about conversion when USD -> PLN', () => {
		render(<ResultBox from='USD' to='PLN' amount={25} />);

		const output = screen.getByTestId('output');
		expect(output).toHaveTextContent('$25.00 = PLN 87.50');
	});
	it('should render proper info when same currency selected', () => {
		render(<ResultBox from='PLN' to='PLN' amount={125} />);

		const output = screen.getByTestId('output');
		expect(output).toHaveTextContent('PLN 125.00 = PLN 125.00');
	});
	it('should render "Wrong value..." when value is smaller than zero', () => {
		render(<ResultBox from='PLN' to='PLN' amount={-55} />);

		const output = screen.getByTestId('output');
		expect(output).toHaveTextContent('Wrong value...');
	});
});