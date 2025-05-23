import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavLink } from './NavLink.jsx'; // The memoized component
import { SECTIONS } from '../config.js'; // For default props

// Mock the onClick function
const mockOnClick = jest.fn();

describe('NavLink Component', () => {
  const defaultProps = {
    section: SECTIONS.HOME,
    activeSection: SECTIONS.HOME,
    onClick: mockOnClick,
    darkMode: false,
    children: 'Home',
  };

  test('should render correctly with default props', () => {
    render(<NavLink {...defaultProps} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('text-blue-600'); // Active and light mode
  });

  test('should be a memoized component', () => {
    // Check if the component's $$typeof property indicates it's a memoized component
    // React.memo wraps the component, and the resulting component has a specific $$typeof value.
    expect(NavLink.$$typeof).toBe(Symbol.for('react.memo'));
  });

  test('should call onClick when clicked', () => {
    render(<NavLink {...defaultProps} />);
    screen.getByText('Home').click();
    expect(mockOnClick).toHaveBeenCalledWith(SECTIONS.HOME);
  });

  test('should display dark mode active styles correctly', () => {
    render(<NavLink {...defaultProps} darkMode={true} />);
    expect(screen.getByRole('button')).toHaveClass('text-blue-400'); // Active and dark mode
  });

  test('should display inactive styles correctly', () => {
    render(<NavLink {...defaultProps} activeSection={SECTIONS.PROJECTS} />);
    // For inactive, the specific active color class should not be present.
    // It will have hover:text-blue-500 but not the specific active text color.
    expect(screen.getByRole('button')).not.toHaveClass('text-blue-600');
    expect(screen.getByRole('button')).not.toHaveClass('text-blue-400');
  });
});
