# Corkboard App

<div>

A cool new way to organize elements and allow users to move them around your page or within a compenent/div.

</div>

<div>

## Getting Started

After forking this repo, install all dependencies: "react-dnd", "react-dnd-html5-backend" via

```
npm install
```

## How to Use

- To change the background image update .App in the App.css file.

- It is currently setup to allow the entire screen size to drag and drop elements. To adjust the allowable size, line 18 & 19, holds the width and height.

- To change the images, go to App.js and update

```
const [images, setImages] = ([
    { url: "your-image-here", x: x-pos, y: y-pos }
])
```

- This is also where you define the position of each image upon the initial render.

</div>

<div>

## How It Works?

- Beginning at the bottom I created 'ImageElement.jsx'. Using React's hooks 'useState' and 'useRef', we need to keep track of weather the element (in our case an image) is being dragged or not and its position.

* The app needs to handle events such as when the mouse clicks down, when it unclicks (mouseUp), and when the mouse moves around.
* Needs to track its relative position as to how much it moved and where iet stopped moving.
* Added a little styling for once the image has been grabbed to change from pointer to a grab cursor.
