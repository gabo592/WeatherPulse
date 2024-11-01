import { render, screen } from '@testing-library/react';
import Header from '@/components/common/header';

describe('Header Component', () => {
  it('renders the logo image with alt text "logo"', () => {
    render(<Header />);
    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeInTheDocument();
  });

  it('renders the title "Weather Pulse"', () => {
    render(<Header />);
    const title = screen.getByText('Weather Pulse');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-2xl font-bold');
  });

  it('renders the ModeToggle component', () => {
    render(<Header />);
    const modeToggleButton = screen.getByRole('button');
    expect(modeToggleButton).toBeInTheDocument();
  });

  it('renders link to the home page', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: /Weather Pulse/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
