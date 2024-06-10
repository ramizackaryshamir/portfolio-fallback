import { render, screen } from '@testing-library/react';
import App from './App';

test( 'renders Discover Financial Services heading', () => {
  render( <App /> );
  const headingElement = screen.getByText( /Discover Financial Services/i );
  expect( headingElement ).toBeInTheDocument();
} );
