import React from 'react';
import { render } from '@testing-library/react';
import HFlex from '.';

describe('HFlex', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<HFlex />);
    expect(container).toMatchSnapshot();
  });  
});