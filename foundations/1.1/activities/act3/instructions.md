# 1.1 - Activity 3 - Style Tag

While we can produce some simple content, our HTML is very boring to look at.
We'll now learn the CSS programming language, which is the coding language that
we use to specify the style and appearance of our HTML.

- CSS - CSS, an acronym for the older term *Cascading Style Sheets*, is
  another coding language which allows creation of designs, specifications of
  colors and sizes, and much more. Without CSS, HTML is mostly black-and-white
  and has no interesting layout or appearance. With CSS, HTML gets displayed
  with style and color.

- `<style> </style>` Style tag - Text inside of style tags does not display,
  but instead is interpreted as the CSS coding language. This will "transform"


- `p { ... }` CSS Rule - All CSS is in the format of "Rules"

- `p { color: green; }` CSS color property - One CSS "property" you can adjust
  is color, which controls the color of the text


-------------


Challenge 1: Turning the Frog Green
----------------------------------

Let's get with modifying a style tag to change the color of H1 tags.

* Objective: Modify CSS to turn the H1 tag green.

1. Open [challenge1.html](./challenge1.html) in your text editor and browser.
2. Examine the existing code. It has a style tag that contains a single rule to
style H1 tags with the color "orange".
3. Observe how in the browser the H1 tag has orange text.
4. The goal for Challenge 1 is to change the CSS code to make the H1 tag
"green" instead of "orange".

Hint 1: Don't over think this. You'll only need to make a single change in the
"style-tag" near the top of the file.

Hint 2: The only modification you'll need to do is delete the existing word
"orange" and replace it with the word "green".


-------------


Challenge 2: Filling in a property
----------------------------------

Let's style H2-tags to be "teal", getting practice writing the full property.

* Objective: Modify the CSS to fill in a new property causing H2-tags to be teal.

1. Open [challenge2.html](./challenge2.html) in your text editor and browser.
2. Examine the existing code. The HTML has grown slightly, and it has a style
tag that contains a two rules: One from before, and a new empty rule for
H2-tags.
3. Observe how in the browser the H2 tag still has the default text color. This
is because the H2 CSS rule is empty, i.e. no color was specified.
4. Type `color: teal;` in the line between the `h2 {` and the `}`
    - `color:` (the property name, followed by a colon)
    - `teal` (the property value)
    - `;` (semicolon, ends the property)

- Hint: Stuck? In the end, the CSS inside the `<style>` tag should look like:

```css
h1 {
    color: green;
}

h2 {
    color: teal;
}
```




-------------



Challenge 3: Writing a new rule
----------------------------------

Let's style the H3-tags to be "chartreuse", getting practice writing a full CSS
rule.

* Objective: Modify the CSS to create a new rule causing H3-tags to be
  chartreuse.

1. Open [challenge3.html](./challenge3.html) in your text editor and browser.
2. Examine the existing code. The HTML has grown even more, and it has a style
tag that contains the two rules from before, and an empty space for the new
rule.
3. Observe how in the browser the H3 tag still has the default text color.
4. Type `h3 {`, followed by `color: chartreuse;`, followed by `}`
    - `h3 {` (the "CSS selector", indicates which tag we are referencing,
      followed by a "opening curly bracket")
    - `color: chartreuse;` (the property name, value, and semicolon )
    - `}` (ends the rule with a "opening curly bracket")

- Hint: Stuck? In the end, the CSS inside the `<style>` tag should look like:

```css
h1 {
    color: green;
}

h2 {
    color: teal;
}

h3 {
    color: chartreuse;
}
```


-------------



Challenge 4: Styling Paragraphs
----------------------------------

Let's apply all we've learned to make paragraphs "forestgreen" colored.

* Objective: Modify the CSS to create a new rule causing all P-tags to be forestgreen.

1. Open [challenge4.html](./challenge4.html) in your text editor and browser.
2. Examine the existing code.
3. Observe how in the browser the P tag still has the default text color.
4. Your goal for Challenge 4 is to apply what you've learned in the previous
challenges to add the CSS code necessary to make all P-tags forestgreen.

- Hint: Stuck? In the end, the CSS inside the `<style>` tag should look like:

```css
h1 {
    color: green;
}

h2 {
    color: teal;
}

h3 {
    color: chartreuse;
}

p {
    color: forestgreen;
}
```

