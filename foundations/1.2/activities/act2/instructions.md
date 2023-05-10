# 1.2 - Activity 2 - Font size, margins, and padding

In this activity, we'll get practice with 3 more CSS properties that control
size and spacing, in order to better adjust the look of a site that is mostly
complete. We'll also learn about "px" - this is a unit of measures that
computers use (pixels) that represent dots on a screen, and is the standard
unit of measure when doing web design.

- `margin` property - Controls spacing around elements on a page. Margin: 0
  will remove spacing, while setting it to some value, e.g. `50px`, will add
  spacing.

- `padding` property - Controls how much "extra space" is WITHIN an element on
  a page. Like margin, setting it to a value like `50px` will add a lot of
  space inside the element.

- `px` - pixel, a unit of measure of space on a screen, hence when referring to
  TVs or computer monitors, 720p meaning 720 pixels tall, or 1080 FHD meaning
  the resolution of 1920x1080, or 4k meaning resolutions that approach 4000
  pixels.


-------------


Challenge 1: Adding padding
----------------------------------

Let's practice giving elements a little more "elbow room"! To add extra space
in an element, we add padding.

* Objective: Modify CSS to add 30 pixels of padding to H2 tags.

1. Open [challenge1.html](./challenge1.html) in your text editor and browser.
2. Examine the existing code. This is the beginnings of a page on computer game
history. Note how P-tags have padding specified to be 20px
3. Observe how in the browser that causes the P-tag to have "20 pixels" worth
of space around the text. Note how the H2 tag ("Exploring the origin of of the
first computer games") has no space around it.
4. The goal for Challenge 1 is to add a padding property to the H2-tag CSS,
such that it has `30px` of padding around it.

* Hint 1: You'll want to put the code around line 14

* Hint 2: Once complete, the H2 tag will look like:

```css
h2 {
    padding: 30px;
    background: white;
    color: midnightblue;
}
```

-------------


Challenge 2: Increasing font size
----------------------------------

Let's make our H1 big! Get practice with using `font-size` to set it to have
100 pixel tall letters.

* Objective: Modify the CSS to add a property to H1 tags to set their font to
  be 100 pixels tall.

1. Open [challenge2.html](./challenge2.html) in your text editor and browser.
2. Examine the existing code. The CSS has grown slightly, adding in a
`font-size` property for P-tags and H2-tags, but nothing for the H1-tag.
3. Observe how in the browser the H1 tag is barely larger than the P-tag and
others. We want to make it BIG.
4. Add `font-size: 100px;` to make the H1 tag text 100 pixels big.

- Hint 1: You'll want to add code at around line 16.

- Hint 2: When complete, the CSS will look like:

```html
h1 {
    color: midnightblue;
    padding: 30px;
    font-size: 100px;
}
```

-------------



Challenge 3: Increase margin
----------------------------------

As we add more content to the page, we notice the elements are too crowded.
Let's add some margins.

* Objective: Modify the CSS to add a 100px margin to H3 tags.

1. Open [challenge3.html](./challenge3.html) in your text editor and browser.
2. Examine the existing code. Both the CSS and HTML has grown: Now there are
image, h3 and a tags in the mix as well.
3. Observe how in the browser the H3 tag (i.e. 1971 - The Oregon Trail), has
only a modest amount of spacing around it.
4. Add `margin: 100px;` to add at least 100 pixels of spacing around H3s.

- Hint 1: You'll want to add code at around line 38.

- Hint 2: When complete, the CSS will look like:

```html
h3 {
    background: midnightblue;
    color: white;
    padding: 20px;
    font-size: 30px;
    margin: 100px;
}
```



-------------



Challenge 4: Adjusting individual margins
------------------------------------------

Too much margin! Sometimes we only want to adjust margin in one direction. For
that, we have `margin-top`, `margin-left`, `margin-right`, and `margin-bottom`.

* Objective: Modify the CSS to set a 10 pixel margin for H3 tags beneath them.

1. Open [challenge4.html](./challenge4.html) in your text editor and browser.
2. Examine the existing code. Note that there is more CSS since last time. See
how in lines 5 and 6 we add a `margin-left` and `margin-right` to the body tag.
We'll want to add a `margin-bottom` to the `h3` tag.
3. Observe how in the browser the H3 tag (i.e. 1971 - The Oregon Trail), has
lots of spacing around all sides of it. For this exercise, we'll reduce the
spacing beneath it.
4. Add `margin-bottom: 10px;` to reduce the H3's bottom margin to 10px.

- Hint 1: You'll want to modify code at around line 41.

- Hint 2: When complete, the CSS will look like:

```html
h3 {
    background: midnightblue;
    color: white;
    padding: 20px;
    font-size: 30px;
    margin: 100px;
    margin-bottom: 10px;
}
```

