import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* <div className={`App ${dark}`}></div> */}
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;

//Add the global state to the App component

// import React from 'react';
// import { FavouritesProvider } from './FavouritesContext';
// import HomeRoute from './components/HomeRoute';

// function App() {
//   return (
//     <FavouritesProvider>
//       <HomeRoute />
//     </FavouritesProvider>
//   );
// }