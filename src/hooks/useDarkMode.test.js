import { renderHook, act } from '@testing-library/react';
import useDarkMode from './useDarkMode';

describe('useDarkMode Hook', () => {
  let mockMatchMedia;

  beforeEach(() => {
    // Mock localStorage
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.setItem = jest.fn();

    // Mock window.matchMedia
    mockMatchMedia = jest.fn();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: mockMatchMedia,
    });

    // Clear mocks before each test
    localStorage.getItem.mockClear();
    localStorage.setItem.mockClear();
    mockMatchMedia.mockClear();
  });

  afterEach(() => {
    // Clean up mocks
    jest.restoreAllMocks();
  });

  test('should initialize with system preference (dark) if localStorage is empty', () => {
    localStorage.getItem.mockReturnValue(null);
    mockMatchMedia.mockReturnValue({ matches: true, addListener: jest.fn(), removeListener: jest.fn() });
    
    const { result } = renderHook(() => useDarkMode());
    expect(result.current[0]).toBe(true);
    expect(localStorage.getItem).toHaveBeenCalledWith('darkMode');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('should initialize with system preference (light) if localStorage is empty', () => {
    localStorage.getItem.mockReturnValue(null);
    mockMatchMedia.mockReturnValue({ matches: false, addListener: jest.fn(), removeListener: jest.fn() });

    const { result } = renderHook(() => useDarkMode());
    expect(result.current[0]).toBe(false);
    expect(localStorage.getItem).toHaveBeenCalledWith('darkMode');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  test('should initialize with localStorage value (true) if present', () => {
    localStorage.getItem.mockReturnValue('true');
    mockMatchMedia.mockReturnValue({ matches: false, addListener: jest.fn(), removeListener: jest.fn() }); // System preference is light

    const { result } = renderHook(() => useDarkMode());
    expect(result.current[0]).toBe(true);
    expect(localStorage.getItem).toHaveBeenCalledWith('darkMode');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('should initialize with localStorage value (false) if present', () => {
    localStorage.getItem.mockReturnValue('false');
    mockMatchMedia.mockReturnValue({ matches: true, addListener: jest.fn(), removeListener: jest.fn() }); // System preference is dark

    const { result } = renderHook(() => useDarkMode());
    expect(result.current[0]).toBe(false);
    expect(localStorage.getItem).toHaveBeenCalledWith('darkMode');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  test('should toggle dark mode state and update localStorage and document class', () => {
    localStorage.getItem.mockReturnValue('false'); // Initial state is light mode
    mockMatchMedia.mockReturnValue({ matches: false, addListener: jest.fn(), removeListener: jest.fn() });

    const { result } = renderHook(() => useDarkMode());
    expect(result.current[0]).toBe(false); // Initial: light
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    act(() => {
      result.current[1](); // Call toggleDarkMode
    });

    expect(result.current[0]).toBe(true); // After toggle: dark
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'true');
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    act(() => {
      result.current[1](); // Call toggleDarkMode again
    });

    expect(result.current[0]).toBe(false); // After second toggle: light
    expect(localStorage.setItem).toHaveBeenCalledWith('darkMode', 'false');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  test('should handle localStorage.getItem error gracefully and use system preference', () => {
    localStorage.getItem.mockImplementation(() => {
      throw new Error('Simulated localStorage error');
    });
    mockMatchMedia.mockReturnValue({ matches: true, addListener: jest.fn(), removeListener: jest.fn() }); // System prefers dark

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { result } = renderHook(() => useDarkMode());
    expect(result.current[0]).toBe(true); // Falls back to system preference
    expect(consoleErrorSpy).toHaveBeenCalled();
    
    consoleErrorSpy.mockRestore();
  });

  test('should handle localStorage.setItem error gracefully during toggle', () => {
    localStorage.getItem.mockReturnValue('false');
    mockMatchMedia.mockReturnValue({ matches: false, addListener: jest.fn(), removeListener: jest.fn() });
    localStorage.setItem.mockImplementation(() => {
      throw new Error('Simulated localStorage error');
    });

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { result } = renderHook(() => useDarkMode());
    
    act(() => {
      result.current[1](); // Toggle to dark mode
    });

    expect(result.current[0]).toBe(true); // State should still update
    expect(document.documentElement.classList.contains('dark')).toBe(true); // Document class should still update
    expect(consoleErrorSpy).toHaveBeenCalled(); // Error should be logged
    
    consoleErrorSpy.mockRestore();
  });
});
