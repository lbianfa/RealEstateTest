import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PropertiesList } from '.';
import type { Property } from '../../entities/property/model';

// Mock lottie to avoid canvas usage in jsdom
vi.mock('lottie-react', () => ({
  default: () => (<div data-testid="lottie" />),
}));

const sampleProperties: Property[] = [
  {
    id: '1',
    name: 'Casa 1',
    addressProperty: 'Calle 1',
    priceProperty: 250000,
    ownerName: 'Juan',
    picture: 'https://example.com/1.jpg',
  },
  {
    id: '2',
    name: 'Casa 2',
    addressProperty: 'Calle 2',
    priceProperty: 180000,
    ownerName: 'Ana',
    picture: 'https://example.com/2.jpg',
  },
  {
    id: '3',
    name: 'Casa 3',
    addressProperty: 'Calle 3',
    priceProperty: 320000,
    ownerName: 'Luis',
    picture: 'https://example.com/3.jpg',
  },
];

describe('PropertiesList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders 3 properties mapped correctly', () => {
    render(
      <PropertiesList
        properties={sampleProperties}
        hasNextPage={false}
        isFetchingNextPage={false}
      />
    );

    expect(screen.getByText('Casa 1')).toBeInTheDocument();
    expect(screen.getByText('Casa 2')).toBeInTheDocument();
    expect(screen.getByText('Casa 3')).toBeInTheDocument();
    expect(screen.getByText('Calle 1')).toBeInTheDocument();
    expect(screen.getByText('Calle 2')).toBeInTheDocument();
    expect(screen.getByText('Calle 3')).toBeInTheDocument();
    expect(screen.getByText('$250,000.00')).toBeInTheDocument();
    expect(screen.getByText('$180,000.00')).toBeInTheDocument();
    expect(screen.getByText('$320,000.00')).toBeInTheDocument();
  });
});
