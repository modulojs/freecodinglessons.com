# 2.1 - Activity 4 - Semantic Tags


To round out Lesson 2.1, we'll start with pasting directories with CSS, then
we'll do a tour of a collection of "semantic tags", which are used to arrange
your site into "boxes" or a visual layout.  This will be building up a more
complicated, visually bright and interesting web design. [Consider looking at
the solution before beginning this activity.](../../solutions/sols4/)

> ----
> **Lesson 2.1 - These activities MUST be completed locally.** Learn how to
> install a free and open source in the [instructions at the start of this
> course](../../).


---------------------


### Key Terms

*Semantic Tags* and *Non-Semantic Tags*: Tags meant to be styled with CSS.

* **Semantic Tags** provide more convenient "nouns" to better organize your
  HTML. They typically do not change appearance or behavior, at least by
  default (e.g. without CSS), so pick based on what's easiest to remember.
    * A collection of dozens of tags: `<article>` `<aside>` `<details>` `<figcaption>`
      `<figure>` `<footer>` `<header>` `<main>` `<mark>` `<nav>` `<section>`
      `<summary>` `<time>`

* **Non-semantic tags** are similar, but just their two generically named
  "cousins": the block `<div>`, and the inline `<span>`


-------------------

Challenge 1: Fixing a link
----------------------------------

Let's look at this new, even bigger file.   Note that Challenge 1 and Challenge
2 both reference the same files.  The CSS is already written for you, but the
link is broken. Can you fix it?

* Objective: Get practice navigating an HTML to fix a CSS link to a file in a
  directory (folder).

1. Navigate to the `ch1ch2/` directory. Open the index.html file in
your text editor and browser.

2. Examine the directory structure and `<head>` part of the code.
    - Conclusion: The filename is correct in the `<link>` tag in the code, but
      the directory is not
    - It should be like `css/site.css`

3. Observer the page on the browser. Note how no CSS is working.

4. Fix the link `href` and observe the page change to a centered, larger new
style.


-------------------


Challenge 2: Wrapping with semantic tags
----------------------------------

The style is beginning to take shape, but now we need to add in semantic tags.
Like before, the styling is already done, its just missing the correct HTML.

* Objective: Write open and close semantic tags around blocks of HTML (3 pairs
  total)

1. Navigate to the `ch1ch2` directory. Re-open the same index.html file in your
text editor and browser (the results of Challenge 1)

2. Examine the `<body>` part of the code.
    - Notice that there are 3 "sections" to the code
    - The CSS is already written
    - They should be "wrapped" with `<nav>`, `<article>` and `<footer>`
      respectively

3. Observer the page on the browser. Note how there are no "boxes" around
anything.

4. Wrap the three sections with these semantic tags.

- *Hint 1:* The top one should look like this:

        <nav>
            <h1>Printing Press</h1>
            <a href="index.html">About</a>
            <a href="shop.html">Services</a>
        </nav>

- *Hint 2:* The bottom two will end up looking like:

        <article>
            ...
        </article>
        <footer>
            ...
        </footer>


-------------------


Challenge 3: Nested Block Tags
----------------------------------

It's time to get practice with more sophisticated styling. We'll "design" the
"shop" page next. Like before, the styling is already mostly, its just missing
the correct HTML.

* Objective: Write open and close semantic tags around blocks of HTML (4 pairs
  total)

1. Navigate to the `ch3ch4` directory. Open shop.html file in your
text editor and browser.

2. Examine the `<body>` part of the code.
    - This is just like Challenge 3 in that CSS is written, but this time
      you'll need to fill in 4 sections
    - They should be "wrapped" with `<nav>`, `<aside>`, `<main>` and `<footer>`
      respectively

3. Observer the page on the browser. Note how there are no "boxes" around
anything.

4. Wrap the four sections with these semantic tags.

- Hint #1: The and bottom are just like in `index.html`
- Hint #2: The "Visit Our New Location" goes in: `<aside>...</aside>`
- Hint #3: The bulk of the middle goes into: `<main>...</main>`

-------------


Challenge 4: Nested Block Tags
----------------------------------

This final challenge you will get the fewest hints. Try to add "article" tags
based on these hints to make the `shop.html` page match the solution!

* Objective: Write open and close semantic tags around blocks of HTML (2 pairs
  total), and write a CSS selector.

1. Navigate to the `ch1ch2` directory. Re-open the same shop.html file in your
text editor and browser (the results of Challenge 3)

2. Examine the `<main>` part of the code

3. Observer the page on the browser
    - In the correct version, each H2-tag and A-tag is "grouped" together in a
      box (an `<article>` semantic tag)

4. Wrap the 2 shopping items with "article" semantic tags.


