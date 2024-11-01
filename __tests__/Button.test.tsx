import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders a button element when asChild is false', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveTextContent('Click me');
  });

  it('renders a custom component when asChild is true', () => {
    render(
      <Button asChild={true}>
        <a href="#">Click me</a>
      </Button>
    );
    const link = screen.getByRole('link');
    expect(link.tagName).toBe('A');
    expect(link).toHaveTextContent('Click me');
  });
});
