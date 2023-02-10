# 1.2 - Activity 4 - Box-shadow and linear-gradients

In this activity, we'll the CSS required to make shadows and gradients. This
allows us to blend colors together, create shadows and glows, create an effect
of depth, and opens up many more stylistic and aesthetic possibilities.

- `box-shadow` property - Creates a rectangular "shadow" around the element.
  This is a very versatile property and design tool, and can be used for either
  a drop shadow effect, a colorful glow, or various types of outlines.

- `background: linear-gradient( ... )` value - A special background setting
  that can be used to make gradients which blend one or more colors in a
  gradient "rainbow-like" blend, in one or more directions.


-------------


Challenge 1: Adding a box-shadow glow
-----------------------------------------

Let's start by practicing using box-shadow to add a square glow around the
logo, for a "neon glow" effect.

* Objective: Modify CSS to add a violet box-shadow around H1 tags, with a blend
  distance of 30 pixels.

1. Open `challenge1.html` in your text editor and browser.
2. Examine the existing code. This is the beginnings of a menu for a retro, 80s
nightclub themed restaurant. Note how the IMG tag has a steelblue box-shadow.
3. Observe how in the browser the IMG tag has that light blue "neon" glow.
4. The goal for Challenge 1 is to add the same effect to H1 tags, except for
the color violet, by using `box-shadow: 0 0 30px violet;`

* Hint 1: You'll want to put the code around line 13

* Hint 2: Once complete, the H1 tag CSS will look like:

```css
h1 {
    color: plum;
    font-size: 100px;
    padding: 15px;
    margin: 40px;
    box-shadow: 0 0 30px violet;
}
```

-------------


Challenge 2: Vertical gradient background
----------------------------------

Now, let's get practice adding a linear gradient for a shaded pink background
on the slogan "Fine Food and Cocktails".

* Objective: Modify the CSS to change the background from white to be a
  vertical linear-gradient of magenta to violet.

1. Open `challenge2.html` in your text editor and browser.
2. Examine the existing code. Now H2 also has a violet box-shadow, although it
still has `background: white`.
3. Observe how in the browser the H2 tag has that bright white background.
4. Replace the `white` with `linear-gradient(0deg, magenta, violet)` to create
a vertical (that is, `0deg` or 0 degrees rotated) linear-gradient, fading from
magenta to violet.

- Hint 1: You'll want to modify code around line 17.

- Hint 2: When complete, the `background` property will look like:

```css
    background: linear-gradient(0deg, magenta, violet);
```

-------------



Challenge 3: Horizontal background gradient
----------------------------------

One fun effect is to use a gradient to "fade" to the page's background. We'll
make the menu headers have a silvery streak that fades into the background.

* Objective: Modify the CSS to for H3 tags background to fade left-to-right
  from the color "steelblue" to the background color ("black")

1. Open `challenge3.html` in your text editor and browser.
2. Examine the existing code. Both the CSS and HTML have, with H3 and P tags.
3. Observe how in the browser the H3 tags aren't even visible, since they are
black text on black background.
4. Add the property `background: linear-gradient(90deg, steelblue, black);` to
the H3 tag to make a horizontal (`90deg` rotated) fade to black

- Hint 1: You'll want to add code at around line 26.

- Hint 2: When complete, the H3 tag's CSS will look like:

```html
h3 {
    background: linear-gradient(90deg, steelblue, black);
    padding: 10px;
    font-size: 40px;
    margin-top: 100px;
}
```




Challenge 4: Center-aligning text
------------------------------------------

Almost done! Our last challenge will be making the paragraphs "pop" a little,
but instead of the fading neon-glow of the H1, H2, and image tags, or the
fading background of H3, we'll be using a different retro-style trend: a crisp
drop-shadow silhouette.

* Objective: Modify the CSS to add a darkviolet dropshadow, offset to the
  bottom-right by 5 pixels, with no blur or spread.

1. Open `challenge4.html` in your text editor and browser.
2. Examine the existing code. We'll be adding to the P-tag CSS.
3. Observe how in the browser the P-tags have no outline or shadow.
4. Add `box-shadow: 5px 5px 0 darkviolet;` to P-tag CSS, for a drop shadow that
is configured to have the color of `darkviolet`, and be moved 5 pixel to the
bottom, 5 pixel to the right, with 0 blur or spread.

- Hint 1: You'll want to modify code at around line 35.

- Hint 2: When complete, the CSS will look like:

```css
p {
    background: steelblue;
    box-shadow: 5px 5px 0 darkviolet;
    width: 300px;
    padding: 10px;
    margin-top: 30px;
    font-size: 20px;
}
```

