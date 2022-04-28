import { act, renderHook } from '@testing-library/react-hooks';
import { useCartStore } from '..';
import { makeServer } from '../../../miragejs/server';

describe('useCartStore', () => {
  let server;
  let result;
  let add;
  let toggle;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
    result = renderHook(() => useCartStore()).result;
    add = result.current.actions.add;
    toggle = result.current.actions.toggle;
  });

  afterEach(() => {
    server.shutdown();
    act(() => result.current.actions.reset());
  });

  it('should return state open equals to falsy on initial state', () => {
    expect(result.current.state.open).toBe(false);
  });

  it('should return an empty array of products on initial state', () => {
    expect(result.current.state.products).toHaveLength(0);
    expect(Array.isArray(result.current.state.products)).toBe(true);
  });

  it('should add products to cart store', async () => {
    const products = server.createList('product', 2);

    for (const product in products) {
      act(() => add(product));
    }

    expect(result.current.state.products).toHaveLength(2);
  });

  it('should toggle open state', () => {
    expect(result.current.state.open).toBe(false);
    expect(result.current.state.products).toHaveLength(0);

    act(() => toggle());
    expect(result.current.state.open).toBe(true);

    act(() => toggle());
    expect(result.current.state.open).toBe(false);
    expect(result.current.state.products).toHaveLength(0);
  });
});
