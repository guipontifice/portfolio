import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import { beforeAll, beforeEach } from "@jest/globals";
import './matchMedia.js'

describe('Navbar Component', () => {
    it('renders without errors', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        expect(screen.getByText('home')).toBeInTheDocument();
        expect(screen.getByText('about_me')).toBeInTheDocument();
        expect(screen.getByText('projects')).toBeInTheDocument();
        expect(screen.getByText('contact')).toBeInTheDocument();
    })
})

beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    })
})
global.matchMedia = global.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}