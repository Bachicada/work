import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Page404 from './Page404';

let container: Element | null = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
  }
  container = null;
});

it('renders with 404 status', () => {
  act(() => {
    render(<Page404 />, container);
  });
  if (container) expect(container).toHaveTextContent('404');
});
