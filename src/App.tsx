import { Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';

const App = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
