import {render, fireEvent, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Game } from './Game';

describe('Game component', () => {
    it('renders without crashing', () => {
        render(<Game />);
    });

    it('displays the score', () => {
        const { getByText } = render(<Game />);
        expect(getByText(/You: \d/)).toBeInTheDocument();
        expect(getByText(/Computer: \d/)).toBeInTheDocument();
    });

    it('updates the result', () => {
        const { getByAltText, getByTestId } = render(<Game />);
        const scissors = getByAltText('scissors');
        fireEvent.click(scissors);
        expect(getByTestId("result")).toBeInTheDocument();
    });
});
