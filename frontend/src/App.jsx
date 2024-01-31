import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };

  // const { id, location, imageSource, username, profile } = sampleDataForPhotoListItem;

  const renderData = [sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem];

  return (
    <div className="App">
      {renderData.map((item, index) => {
        return (
          <PhotoListItem
            key={index}
            id={item.id}
            location={item.location}
            imageSource={item.imageSource}
            username={item.username}
            profile={item.profile}
          />
        );
      })}
    </div>
  );
};

export default App;
