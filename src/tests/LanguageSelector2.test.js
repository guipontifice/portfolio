import React from "react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { getByTestId } from "@testing-library/react";
import { fireEvent, render, screen } from "@testing-library/react";
import LanguageSelector2 from "../Components/LanguageSelector2";
import i18next from 'i18next';
import { act } from "react-dom/test-utils";

jest.mock('i18next', () => ({
    changeLanguage: jest.fn(),
    language: 'pt',
}));

describe('Language Selector Compoment', () => {

    it('renders without crashing', () => {
        const { container } = render(<LanguageSelector2 />);
        expect(container).toBeInTheDocument();
    })
})

it('switches languages when clicked', async () => {
    await act(async () => {
        const { getByRole } = render(<LanguageSelector2 />);
        const button = screen.getByTestId('Language Selector')
        fireEvent.click(button);
    })

    const portuguesButton = screen.getByRole('button', { name: /Português/i });
    fireEvent.click(portuguesButton);
    expect(document.documentElement.classList.contains('pt'));
    expect(button).toHaveTextContent('Português');
    expect(i18next.language).toBe('pt');
})