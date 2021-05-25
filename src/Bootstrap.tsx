import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes';

const Bootstrap: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Bootstrap;
