import './App.css';

import { Button } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [localCount, setLocalCount] = useState(0);

  return (
    <StyledLink isBlue={localCount > 4} className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="./assets/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button type="primary" onClick={() => setLocalCount((count) => count + 1)}>
          count is {localCount}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </StyledLink>
  );
}

interface PStyledLink {
  isBlue?: boolean;
}

const StyledLink = styled.div<PStyledLink>`
  color: ${(props) => (props.isBlue ? 'blue' : 'pink')};
  font-weight: bold;
`;

export default App;
