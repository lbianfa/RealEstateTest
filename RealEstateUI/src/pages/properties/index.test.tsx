// @ts-nocheck
import { vi, describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { PropertiesPage } from './index';

// Configurable mock for the infinite query hook
let mockInfiniteReturn: any;
vi.mock('./query', () => ({
  useInfiniteProperties: () => mockInfiniteReturn,
}));

// Mock lottie to avoid canvas usage in jsdom
vi.mock('lottie-react', () => ({
  default: () => (<div data-testid="lottie" />),
}));

describe('PropertiesPage - error toast', () => {
  it('shows error toast when request fails', async () => {
    mockInfiniteReturn = {
      data: undefined,
      fetchNextPage: vi.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
      isLoading: false,
      isError: true,
      error: new Error('Network error'),
    };
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <PropertiesPage />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Error to load properties')).toBeInTheDocument();
    });
  });

  it('shows warning toast when list is empty', async () => {
    mockInfiniteReturn = {
      data: { pages: [{ totalCount: 0, items: [] }] },
      fetchNextPage: vi.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
      isLoading: false,
      isError: false,
      error: undefined,
    };
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <PropertiesPage />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('No properties found')).toBeInTheDocument();
    });
  });

  it('renders three properties mapped correctly', async () => {
    mockInfiniteReturn = {
      data: {
        pages: [
          {
            totalCount: 3,
            items: [
              {
                id: '1',
                name: 'Property A',
                addressProperty: '123 Main St',
                priceProperty: 250000,
                ownerName: 'Owner 1',
                picture: 'https://example.com/a.jpg',
              },
              {
                id: '2',
                name: 'Property B',
                addressProperty: '456 Oak Ave',
                priceProperty: 180000,
                ownerName: 'Owner 2',
                picture: 'https://example.com/b.jpg',
              },
              {
                id: '3',
                name: 'Property C',
                addressProperty: '789 Pine Rd',
                priceProperty: 320000,
                ownerName: 'Owner 3',
                picture: 'https://example.com/c.jpg',
              },
            ],
          },
        ],
      },
      fetchNextPage: vi.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
      isLoading: false,
      isError: false,
      error: undefined,
    };

    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <PropertiesPage />
      </QueryClientProvider>
    );

    await waitFor(() => {
      // Names
      expect(screen.getByText('Property A')).toBeInTheDocument();
      expect(screen.getByText('Property B')).toBeInTheDocument();
      expect(screen.getByText('Property C')).toBeInTheDocument();
      // Addresses
      expect(screen.getByText('123 Main St')).toBeInTheDocument();
      expect(screen.getByText('456 Oak Ave')).toBeInTheDocument();
      expect(screen.getByText('789 Pine Rd')).toBeInTheDocument();
      // Prices (formatted)
      expect(screen.getByText('$250,000.00')).toBeInTheDocument();
      expect(screen.getByText('$180,000.00')).toBeInTheDocument();
      expect(screen.getByText('$320,000.00')).toBeInTheDocument();
    });
  });
});
