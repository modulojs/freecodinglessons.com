# 1.2 - Activity 3 - Width, and auto margin centered layouts,

In this activity, we'll learn a enough CSS to finally start building one of the
simplest beginner layouts for web pages: The single-column, centered layout. To
achieve this layout, we must learn two new CSS properties (`width` and
`text-align`), and also learn the `margin: auto` trick to create simple,
centered layouts.

- `width` property - Set the width of an element. For example, setting it to a
  value like `50px` will attempt to force the element to be 50 pixels wide.
  Like padding, this can increase the width, if it's set to a higher number.
  Unlike padding, this can also actually reduce the width of an element if it's
  set to a lower value.

- `margin: auto` value - A special margin value that will attempt to add enough
  margin on both sides to center the element. Requires that you first set a
  fixed width on a block element; that is, adding `width: 500px` or something
  to an element like `body`, `h1` or `p`.

- `text-align: center` property - Centers all text in the element.


-------------


Challenge 1: Setting image width
----------------------------------

Let's start by fixing image widths.

* Objective: Modify CSS to force all images to be 100 pixels wide.

1. Open `challenge1.html` in your text editor and browser.
2. Examine the existing code. This is the beginnings of a store page for a
sewing school. Note how H1-tags have a width fixed at 260 pixels.
3. Observe how in the browser the H1 tag is only 260 pixels wide. Also, note
how the images are all much too big for this design. We need to shrink them.
4. The goal for Challenge 1 is to add a width property to the img-tag CSS,
such that it has a `width: 100px` of padding around it.

* Hint 1: You'll want to put the code around line 8

* Hint 2: Once complete, the img tag CSS will look like:

```css
img {
    margin: 50px;
    width: 100px;
}
```

-------------


Challenge 2: Adjust body width
----------------------------------

That fixed the images, but all the other elements are still too wide. We can
adjust the width on the body to change the entire page at once.

* Objective: Modify the CSS to constrain the body to only be only 500 pixels wide.

1. Open `challenge2.html` in your text editor and browser.
2. Examine the existing code. The page has grown slightly, adding more content
and a styled H2 tag.
3. Observe how in the browser the H1 tag is limited in width, as are the
images, but the paragraphs and H2 tag is too wide.
4. Add `width: 500px;` to limit the body to 500 pixels wide.

- Hint 1: You'll want to add code at around line 4.

- Hint 2: When complete, the CSS will look like:

```html
body {
    background: bisque;
    width: 500px;
}
```

-------------



Challenge 3: Auto margins
----------------------------------

Our design would look better centered instead of "stuck" on the left side.

* Objective: Modify the CSS to center the body.

1. Open `challenge3.html` in your text editor and browser.
2. Examine the existing code. Both the CSS and HTML has grown slightly, with a
few new H3 tags.
3. Observe how in the browser everything is "stuck" on the left side.
4. Add `margin: auto;` to the both the body and the H1 to get everything
centered.

- Hint 1: You'll want to add code at around line 6.

- Hint 2: When complete, the body tag's CSS will look like:

```html
body {
    background: bisque;
    width: 500px;
    margin: auto;
}
```


- Hint 3: When complete, the H1 tag's CSS will look like:

```html
h1 {
    margin: auto;
    width: 260px;
    font-size: 55px;
    color: bisque;
    background: chocolate;
    padding: 5px;
}
```



Challenge 4: Center-aligning text
------------------------------------------

Our design is almost finished. In this challenge, we finish up our design by
centering the text (along with other inline elements, e.g. images).

* Objective: Modify the CSS to center align the entire page.

1. Open `challenge4.html` in your text editor and browser.
2. Examine the existing code. Note that the CSS and HTML have both grown.
3. Observe how in the browser the images are still off-center, stuck toward the
left, and the H2 and H3 tags have left-aligned text, that looks odd near so
much center alignment.
4. Add `text-align: center;` to the body to center align everything.

- Hint 1: You'll want to modify code at around line 6.

- Hint 2: When complete, the CSS will look like:

```html
body {
    background: bisque;
    width: 500px;
    margin: auto;
    text-align: center;
}
```

