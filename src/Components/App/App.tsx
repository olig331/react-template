import React, { useEffect } from 'react';
import useLogger from '../../Hooks/useLogger';

const App: React.FC = () => {
  const logger = useLogger('App -> Home');

  useEffect(() => {
    logger.info('App Rendered ');
  }, [logger]);
  return (
    <div>
      <h1>My React Template</h1>
    </div>
  );
};

export default App;
