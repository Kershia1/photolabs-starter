import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = () => {
  //container for PhotoListItem
  // const { id, location, imageSource, username, profile } = sampleDataForPhotoListItem;

  // const renderData = [sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem];

  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map((item) => {
        return (
          <PhotoListItem
            key={item.id}
            id={item.id}
            location={item.location}
            imageSource={item.urls.regular}
            username={item.user.username}
            profile={item.user.profile}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;

/**
 * One small suggestion: in your PhotoList.jsx, you're using the index of the array as a key for your PhotoListItem components. While this works, it's generally recommended to use a unique identifier if one is available, like the id property in your data. This helps React optimize re-rendering and can help prevent issues if the order of items changes. So, you could change key={index} to key={item.id}.
 */