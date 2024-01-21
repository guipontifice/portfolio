import React from "react";
import "@testing-library/jest-dom";
import { beforeAll, beforeEach, describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";
import DarkMode from "../Components/DarkMode";

describe('Darkmode Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<DarkMode />);
        expect(container).toBeTruthy();
    })
});

if ('has a button in the document', () => {

    const { getByRole } = render(<DarkMode />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
});

if ('sets the initial theme correctly ', () => {
    matchMedia = jest.fn().mockImplementation((query) => {
        return {
            matches: query === '(prefers-color-scheme: dark)',
            addListener: jest.fn(),
            removeEventListener: jest.fn(),
        };
    });
    const { getByRole } = render(<DarkMode />);
    const button = getByRole('button', { name: /Menu/i });
    expect(button).toHaveClass('dark');
});

it('toggles theme when button is clicked', () => {
    const { getByRole } = render(<DarkMode />);
    const button = getByRole('button', { name: /Menu/i});
    fireEvent.click(button);
    expect(button).not.toHaveClass('dark');
    fireEvent.click(button);
});

    global.matchMedia = global.matchMedia || function () {
        return {
            matches: false,
            addListener: function () { },
            removeListener: function () { }
        }
    }
