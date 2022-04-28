import { act, renderHook } from '@testing-library/react-hooks';
import { useCartStore } from '..';

describe('useCartStore', () => {
  it('should return state open equals to falsy on initial state', () => {
    const { result } = renderHook(() => useCartStore());

    expect(result.current.state.open).toBe(false);
  });

  it('should return an empty array of products on initial state', () => {
    const { result } = renderHook(() => useCartStore());

    expect(result.current.state.products).toHaveLength(0);
    expect(Array.isArray(result.current.state.products)).toBe(true);
  });

  it('should toggle open state', () => {
    const { result } = renderHook(() => useCartStore());
    // I get only the method toggle() because the value of open will be mutated and can't be destructured.
    const {
      actions: { toggle },
    } = result.current;

    expect(result.current.state.open).toBe(false);

    act(() => toggle());
    expect(result.current.state.open).toBe(true);

    act(() => toggle());
    expect(result.current.state.open).toBe(false);
  });
});
