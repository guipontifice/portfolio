import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";

describe('Navbar Component', () => {
    it('renders without errors', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    })
})