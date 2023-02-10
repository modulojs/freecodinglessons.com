# 2.1 - Activity 2 - Anchor tags

Key Terms:

- **anchor tags** - Anchors are the old fashioned name for "links", which is
  how a-tags get their name. A-tags provide links from one HTML document to
  another, so a browser can navigate between them.

- **multi-page** - A website that has multiple HTML files, typically linked
  together using anchor tags (commonly called links)

- **broken link** - A link that has a typo, or is pointing to a now deleted
  file, thus causing the browser to display an error when you click on it



Key Term Review:

- **attribute** - Extra information that goes inside the opening tag, always in
  the format of something="anotherthing". Example: `<img src="myphoto.jpg" />`

- **single-page** - A website that consists of only a single HTML file



----------------------------------



Challenge 1: Linking HTML
----------------------------------

Let's learn how to use a-tags to link together our HTML documents. This allows
us to create a "multi-page" website.

* Objective: Get practice writing basic A tags to link HTML documents together

1. Navigate to the `ch1` directory. Open the `index.html` file in your text
editor and browser.

2. Examine the existing code.
    - It also has 1 a-tag: Clicking on the underlined phrase "Click here to
      learn more about Charles Babbage" makes the browser navigate to a new
      page: `babbage.html`
    - There are two more names in the paragraph code that also have
      biographical data: Alan Turing and Ada Lovelace. They both have `<a>`
      tags written for them, but they are missing the `href=` attribute that
      makes it functional.
3. Modify the two non-functioning a tags to make the links work correctly to
the new biography pages
    - Hint 1: href="turing.html"
    - Hint 2: href="lovelace.html"


Challenge 2: Nested a-tags
----------------------------------

Now, we'll look at slightly more complex websites, with more styling and
content. We'll practice putting A-tags within paragraph tags, and also making
sure that our pages can "link back" so our website visitors don't get
"stranded" in a page that is a "dead end" (e.g., no "back links" or ways to get
back to the main page or index page).

* Objective: Get more practice writing A tags to link HTML documents together

1. Navigate to the `ch2` directory. Open the `index.html` file in your text
editor and browser.

2. Examine the existing code.
    - It has paragraphs and images with biographical information on famous
      mathematicians
    - It also has 1 a-tag: Clicking on the underlined "Charles Babbage" makes
      the browser navigate to a new page: `babbage.html`
    - There are two more names in the paragraph code that also have
      biographical data: Alan Turing and Ada Lovelace. They are missing both
      the `<a href=""></a>` tag.
3. Add a tags to the names Alan Turing and Ada Lovelace in order to make the
links work correctly to the new biography pages
    - Hint 1: `<a href="turing.html">Alan Turing</a>`
    - Hint 2: `<a href="lovelace.html">Ada Lovelace</a>`

4. Open the `turing.html` file in your text editor and browser.

5. Examine the existing code. Note that it has a `<a>` tag at the bottom that
is also broken. Fix it by adding the href="index.html"

6. Confirm that index.html links to all three biography pages, and that all
three biography pages have a "back link" going back to index.html




Challenge 2: Linking HTML
----------------------------------




