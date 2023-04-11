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
