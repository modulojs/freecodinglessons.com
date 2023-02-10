# 1.1 - Activity 4 - Body & Background

We'll now learn the CSS properties for changing background colors, and the use
of the "body" selector to change the background or text color of the entire
page at once.

- `background: green` background property - Change color of background

- `body { ... }` body selector - If you want to change an aspect of the page, use "body"



-------------


Challenge 1: Changing the background of the page
----------------------------------

Let's get practice changing the background color of the entire page.

* Objective: Modify CSS color of background of body tag.

1. Open `challenge1.html` in your text editor and browser.
2. Examine the existing code. Note the new "body" selector, and the new
"background" property, used together to set the background of the page.
3. Observe how in the browser the site is hard to read with a bright orange
background and white text.
4. The goal for Challenge 1 is to change the CSS code to make the background
"black" instead of "orange".

Hint 1: Don't over think this. You'll only need to make a single change in the
"style-tag" near the top of the file.

Hint 2: The only modification you'll need to do is delete the existing word
"orange" and replace it with the word "black".


-------------


Challenge 2: Adding background to H1
----------------------------------

The H1 tag is invisible since it is black. Let's add a bright "limegreen"
background to give it an inverted or "cut-out" look.

* Objective: Modify the CSS to fill in a `limegreen` background on H1-tags.

1. Open `challenge2.html` in your text editor and browser.
2. Examine the existing code. The HTML has grown with new H1 and H2 tags.
3. Observe how in the browser the H1-tag is black, and thus blending in or
invisible with the black background.
4. Type `background: limegreen;` in the blank line between the `h1 {` and the `}`

- Hint: Stuck? In the end, the CSS should look like:

```css
h1 {
    background: limegreen;
}
```




-------------



Challenge 3: Writing a new rule
----------------------------------

Let's style the H2-tags to have "limegreen" color and a "darkslategray"
background.

* Objective: Fill in CSS to modify both background and color of H2-tags.

1. Open `challenge3.html` in your text editor and browser.
2. Examine the existing code. The HTML has changed slightly since last time,
now including some extra slash symbols (`///`) for a fun "hacker-ish" stylistic
effect.
3. Observe how in the browser the H2 tag still blends in.
4. For this challenge, fill in the empty H2 rule in the style-tag, with
`background: darkslategray;` followed by `color: limegreen;`

- Hint: Stuck? In the end, the CSS inside the `<style>` tag should look like:

```css
body {
    background: black;
}

p {
    color: white;
}

h1 {
    background: limegreen;
}

h2 {
    background: darkslategray;
    color: limegreen;
}
```


-------------



Challenge 4: Styling Paragraphs
----------------------------------

Let's apply all we've learned to make H6 have a limegreen background just like H1.

* Objective: Create a new rule for all H6-tags to have limegreen background.

1. Open `challenge4.html` in your text editor and browser.
2. Examine the existing code. Now there's extra H6 tags with extra symbols for
stylistic effect.
3. Observe how in the browser the H6 tag still has the default text color.
4. Your goal for Challenge 4 is to apply what you've learned in the previous
challenges to add the CSS code necessary to make these new tags `limegreen`.

- Hint: Stuck? In the end, the CSS inside the `<style>` tag should look like:

```css
body {
    background: black;
}

p {
    color: white;
}

h1 {
    background: limegreen;
}

h2 {
    background: darkslategray;
    color: limegreen;
}

h6 {
    background: limegreen;
}
```

