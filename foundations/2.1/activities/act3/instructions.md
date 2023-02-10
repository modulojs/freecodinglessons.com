# 2.1 - Activity 2 - Anchor tags

Key Terms:

- **boilerplate** - Code that goes at the top of every file, the standard
  "starting arrangement" for coding in a particular programming language

- **doctype** - A special tag-like text that goes at the beginning of every
  "proper" or valid HTML file

- **html**, **head**, **body** - A set of special tags
  that don't do anything by themselves, but instead form a sort of "outline"
  that structures every "proper" or valid HTML file, as a way to keep your HTML
  code more conveniently "sorted" or arranged

- **title** tag - Goes in the head, lets you change the title in the tab or
  browser window

- **meta** - Used in a few different boilerplate statements for configuring the
  HTML document

- **link** tag - Goes in the head, lets you combine a separate CSS file into an
  HTML file so multiple HTML files can share the same CSS file



----------------------------------



Challenge 1: Adding in boilerplate
----------------------------------

Let's practice adding in boilerplate to avoid bugs in how our HTML pages are shown.

* Objective: Get practice identifying boilerplate in an HTML file, and copying
  it and pasting it into another HTML file.

1. Navigate to the `ch1` directory. Open either the `index.html` or `photos.html`
file in your text editor and browser.

2. Examine the existing code.
    - It has many of the "boilerplate" code that forms the standard structure
      for "proper" HTML documents. This includes the `<!DOCTYPE html>` at the
      top, the `<html>`, `<head>`, `<body>`, and `<meta>`
    - It has a `<title>` tag which changes the window or tab title

3. Now, open the `art.html` file in your text editor and browser.

4. Examine the existing code
    - Unlike `photos.html` and `index.html`, this one is missing boilerplate

5. Click between the pages and see if you can spot the visual differences
between the pages.
    - The title shows the default of "art.html", instead of something
      friendlier
    - Possibly: Due to lacking the `<!DOCTYPE html>` and other boilerplate, the
      text might "move over" just a little bit compared to other page (less
      default margin)
    - Possibly: Due to `art.html` not having the `<meta charset="utf8" />`
      boilerplate, the emojis might be broken on  art`

6. Fix these issues by copying the boilerplate from `index.html` into
`art.html`
    - Hint: Use Copy and Paste for this! Never type by hand what you can copy
      and paste, as that reduces mistakes and speeds up coding.
    - Hint: Notice where the top and bottom of the boilerplate is, and copy it
      over to the equivalent spot in the other file

7. Finally, fix the lack of `<title>` by changing the `<title>` of `art.html`
to say: "Art projects"



----------------------------------



Challenge 2: Adding in a stylesheet
----------------------------------

Let's practice including a CSS file (called a "stylesheet"), and making changes
to that file.

* Objective: Get practice adding in a link tag to include a CSS file.

1. Navigate to the `ch1` directory. Open either the `index.html` file in your
text editor and browser, and `mystyles.css` in just your text editor.

2. Examine the HTML and CSS files.
    - HTML: Notice how it now has a `<link>` tag that references this separate
      CSS file.
    - CSS: Notice how you don't need to write `<style>` at all, and that the
      styles here apply to the HTML page. It's much more managable this way!

3. Now, open the `art.html` file in your text editor and browser.

4. Copy over the `<link>` tag `index.html` to the `art.html` file.
    - Hint: Notice where it is in the index.html. Move it to the equivalent
      spot in art.html (e.g. before the `</head>` closing tag)

5. Refresh your browser and confirm that

6. Now, try making changes to the CSS file, and confirm they apply to all 3
pages simultaneously




Challenge 3: Adding in a stylesheet
----------------------------------

Let's practice including a CSS file (called a "stylesheet"), and making changes
to that file.

* Objective: Get practice adding in a link tag to include a CSS file.

