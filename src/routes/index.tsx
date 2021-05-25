import { Route, Switch } from 'react-router-dom';

import { Details } from 'pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Details} />
  </Switch>
);

export default Routes;
