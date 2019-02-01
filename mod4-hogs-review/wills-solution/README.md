# Hogwarts: The React app for fans of prize-winning pigs

## React Week 1 Project

This project is intentionally open ended and leaves a lot of the design decisions up to you, the student. Given very little starter code, the goal is to build out an app that has all the deliverables. The 'how' is left up to you. 

## Project deliverables:

* create an index displaying all hog tiles
* render each hog name and picture in a tile
* show the hog's details upon a user's click
* allow users to sort the hogs based on name and weight and filter the hogs that are greased

* BONUS: allow users to hide hogs (not delete them, just hide them from view!)
* BONUS: bring in pig gifs from an API
* BONUS: implement [Semantic Cards](https://semantic-ui.com/views/card.html) for each hog

## Project requirements:

* functional and container components (at least one of each, likely you'll have several of each)
* components using state and props
* re-renders based on client-side events

## What we have so far:

* a file containing all our hog data imported into App.js
* a folder of hog images
* a functional nav component rendered in our App.js

## Trying to figure out where to start?

There are lots of ways to build this project, and while some ways are better than others, there is no 'right' way! Start by thinking about which components you'll be building and whether they'll be presentational or container components.

Take some time to look over and understand your data source (the porkers_data.js file). Then, design on your components, use the MVP approach. What's the simplest thing we can render to the page? Perhaps a paragraph tag displaying each hog's name? Which components would this involve?

When building your filter and sort functionalities, consider what you want to store in state and where that state should be stored. How can a child component pass information up to its parent component? Think about what needs to happen upon each index rerender. What if a user filters out ungreased pigs, and then wants the remaining pigs sorted by weight?

Be sure to use good programming practices, such as clear variable names and single responsibility functions. React apps can quickly become tangled and hard to debug if built without best practices!

## IMPORTANT NOTES

#### Styling
We've imported the Semantic library to keep your piggies looking pretty. We suggest showing your hog tiles in two columns. Therefore, make sure the parent div has the class `ui grid container`. The children div should have class `ui eight wide column`. Semantic grid is sixteen units wide, so `ui eight wide column` divs will take up half the width of the page. Optionally, you can also try implementing [Semantic Cards](https://semantic-ui.com/views/card.html) for each hog tile.

#### Importing images
The image files for all pigs can be accessed using their relative path. Because React uses webpack, we need to first require the file. This step needs to be done in order for your pig images to show up correctly. For example:

```
<img src={require('path/to/pig-name.jpg')} />
```

Or alternatively

```
let pigName = 'pig-name'
let imageURL = require(`path/to/${pig-name}.jpg`)
return <img src={imageURL} />
```
