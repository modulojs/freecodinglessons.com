# 2.1 - Activity 2 - Anchor tags

Key Terms:

- **index.html** - The "default" file or "homepage" for a website. You
  typically name the first HTML file you compose "index.html" for any website
  project, since that is the one that will be sent to visitors by default.

- **relative path** - When you reference a local file (e.g. "about.html" or
  "images/myimage.jpg" or something) - both links and images can do this.

- **multi-page** - A website that has multiple HTML files, typically linked
  together using anchor tags (commonly called links)


Key Term Review:

- **attribute** - Extra information that goes inside the opening tag, always in
  the format of something="anotherthing". Example: `<img src="myphoto.jpg" />`

- **single-page** - A website that consists of only a single HTML file

- **broken link** - A link that has a typo, or is pointing to a now deleted
  file, thus causing the browser to display an error when you click on it



----------------------------------



Challenge 1: Including local IMG in an index.html
----------------------------------

Let's learn how to use IMG-tags to include a local image tag. This allows us to
much more conveniently include more images into our HTML.

* Objective: Get practice writing basic IMG tags to include local images

1. Navigate to the `ch1` directory. Open the `index.html` file in your text
editor and browser.
2. Examine the existing files & code. Note how there are 3 image files
(`charlesbabbage.jpg`, `alanturing.png`, `adalovelace.png`)  included next to
the `index.html` file. Note that we call our HTML file "index.html" now because
we are making multi-page sites, so that makes it open by default.
3. Examine the results in the browser.  In the HTML code, note how 1 image is
correctly included, but 2 are incomplete.
4. Modify the index.html file to fix the broken link IMG tag, and add a new IMG
tag to make images display in the browser

- Hint 1: `src="charlesbabbage.jpg"`
- Hint 2: `src="alanturing.png"`


Challenge 2: Multi-page sites
----------------------------------

Time to build a multipage site! To build a multi-page site, you can create as
many HTML files as you'd like in a directory (folder), and them "link" them
together using A-tags. In this challenge we'll practice linking to each page,
as well as linking back to the homepage (index.html), so our website visitors
don't get "stranded" in a page that is a "dead end" (e.g., no "back links" or
ways to get back to the main page or index page).

* Objective: Get more practice writing A tags to link HTML documents together

1. Open the `ch2` directory (folder). Open the HTML files in your text editor
and browser.
2. Examine the existing code. It has P-tags and IMG-tags with biographical
information on famous mathematicians. The index.html file is missing A-tags to
the turing.html and lovelace.html pages. Furthermore, those pages are missing
A-tags as well, causing visitors to get stranded.
3. Examine the browser behavior: Now, clicking on the underlined "Charles
Babbage" makes the browser navigate to a new page: `babbage.html`. Clicking the
link back causes the browser to return to the previous page. This is what we
want for all 3 pages.
4. Complete this challenge by completing all 3 A-tags in the index.html file so
that Alan Turing and Ada Lovelace pages get linked. Then, you must add the
reverse links as well: Go into the turing.html and lovelace.html files and add
in links back to the index.html file

- Hint 1: Examine the Charles Babbage example: It is the most fully functioning
- Hint 2: `<a href="turing.html">`
- Hint 3: `<a href="lovelace.html">`
- Hint 4: `<a href="index.html">`



Challenge 3: Building a "navigation bar"
----------------------------------

Most modern websites don't have "back links", but instead use "navigation" or
"navigation bars". This is when you have a bunch of links in a row at the top
of every page, so users can navigate directly without having to go back to the
`index.html` starting point.

* Objective: Get practice with the "navigation bar" design technique.

1. Open the `ch3` directory (folder). Open the HTML files in your text editor
and browser.
2. Examine the existing code. Note that the babbage.html page has the same
P-tag "navigation bar" that the index.html page has, while the other two HTML
pages don't have this "navigation bar".
3. Examine the browser behavior: On the "Charles Babbage" page, we can navigate
directly to the other pages. However, upon going to the other pages, we are
"stranded" and can't navigate back to the "Charles Babbage" page directly.
4. Complete this challenge by adding the identical P-tag "navigation bar" to
each all 4 HTML pages, so you can navigate around directly (consider using
"copy and paste")


- Hint 1: Examine the Charles Babbage example: It is the most fully functioning
- Hint 2: Copy the P-tag that has all 3 links from the either the index.html or
  the babbage.html file, and paste it into the lovelace.html file. Do the same
  for the turing.html file (and be sure to remove existing back links).





Challenge 4: Embedding links
----------------------------------

Often, we want to put A-tags as "inline" links or embedded inside of paragraph
tags to provide more context to users wanting to explore a certain topic.

* Objective: Get practice embedding A tags in text.

1. Open the `ch4` directory (folder). Open the HTML files in your text editor
and browser.
2. Examine the existing code. The site is almost complete, with only 1 thing
missing: The opening paragraph has broken A-tags.
3. Examine the browser behavior: The links on the index.html do not work.
4. Complete this challenge by fixing the links in the opening paragraph to
provide an additional way to navigate to the other HTML pages.

- Hint 1: Don't over think this one -- you've been making links all this
  activity, just apply the same patterns and techniques you've seen to this
  paragraph (and check the solution if you get stuck)!

