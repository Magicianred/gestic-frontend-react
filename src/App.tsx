import React from 'react';

import { Navigation } from './navigation';
import TemplateProvider from './providers/TemplateProvider';
import { AuthProvider } from './providers/AuthProvider';

const App = () => (
  <AuthProvider>
    <TemplateProvider>
      <Navigation />
    </TemplateProvider>
  </AuthProvider>
);

export default App;
