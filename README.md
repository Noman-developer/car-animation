# Car Animation

A fun car animation I made with HTML, CSS and JavaScript. The car moves on the road.

## What it does

When you open the page, you see an orange sports car driving on a road. The road scrolls under the car, the wheels spin, and the car shakes a little like it is moving fast. In the background there is a cloudy sky and a line of trees with windmills. An engine sound plays too.

There are no buttons. You just open the page and watch.

## How it works

- `index.html` holds the page. It has four layers: the sky, the trees, the road, and the car.
- `style.css` does the animation with CSS keyframes. The road background moves from right to left so it looks like the car is driving. The wheels rotate with a spin animation. The car shakes up and down a little, and the whole page shakes a bit too.
- `script.js` plays the engine sound (`sound.mp3`) on a loop. Browsers block sound before you click, so if the sound does not start, it starts after your first click or key press on the page.
- The images are in the project folder: `car_body.png` for the car, `car_wheel_left.png` and `car_wheel_right.png` for the wheels, `track.png` for the road, `trees.png` for the tree line, and `background.jpg` for the sky.

## Tech stack

- HTML
- CSS (animations)
- JavaScript (plain, no libraries)
- PNG and JPG images, one MP3 sound file

No build step. No frameworks.

## How to view

Open `index.html` in any browser. That is all.

## Author

Noman Javed
