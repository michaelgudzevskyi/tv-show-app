import { render } from '@testing-library/react';

import App from './App';

describe('<App/>', () => {
  it('should render', () => {
    const component = render(<App />);
    expect(component).toBeTruthy();
  });
});
