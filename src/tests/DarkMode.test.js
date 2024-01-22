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

it ('has a button in the document', () => {

    const { getByRole } = render(<DarkMode />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
});

it ('sets the initial theme correctly ', () => {
    matchMedia = jest.fn().mockImplementation((query) => {
        return {
            matches: query === '(prefers-color-scheme: dark)',
            addListener: jest.fn(),
            removeEventListener: jest.fn(),
        };
    });
    render(<DarkMode />);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
});

it('toggles theme when button is clicked', () => {
    const { getByRole } = render(<DarkMode />);
    const button = getByRole('button', { name: /Menu/i});
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
});

    global.matchMedia = global.matchMedia || function () {
        return {
            matches: false,
            addListener: function () { },
            removeListener: function () { }
        }
    }
