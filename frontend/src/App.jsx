import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation

// function App() {
//   const [angryApp, dispatch] = useReducer((angryApp, amount) => {
//     if (angryApp < 1) {
//       return angryApp + amount;
//     } else {
//       return 0;
//     }
//   }, 0);

//   const [light, setLight] = useState("off");
//   const dark = (light === "off") ? "dark" : "";
//   const switchLight = () => setLight((light === "on") ? "off" : "on");


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
      {/* <div className={`App ${dark}`}></div> */}
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
          // <AngryButton increaseAnger={dispatch} />
          // <LightSwitch light={light} switchLight={switchLight} increaseAnger={dispatch} />
        );
      })}
    </div>
  );
};

export default App;
