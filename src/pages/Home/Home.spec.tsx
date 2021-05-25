import { render } from '@testing-library/react';

import { Home } from './Home';

describe('<Home/>', () => {
  it('should render', () => {
    const component = render(<Home />);
    expect(component).toBeTruthy();
  });
});
