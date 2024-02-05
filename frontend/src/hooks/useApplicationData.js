/*
We can use the custom Hook instead of useState. We store the object that the Hook returns in a separate variable per input. The spread operator provides an easy way to pass the value and onChange props directly to each input element.

import { useEffect } from "react";

export default function useDebounce(operation, ms) {
  useEffect(() => {
    const handle = setTimeout(operation, ms);
    return () => clearTimeout(handle);
  }, [operation, ms]);
}


Our useApplicationData Hook will return an object with four keys representing the following items:

The state object will contain the entire state of the application.
The updateToFavPhotoIds action can be used to set the favourite photos.
The setPhotoSelected action can be used when the user selects a photo.
The onClosePhotoDetailsModal action can be used to close the modal */