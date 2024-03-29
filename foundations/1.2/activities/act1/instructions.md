# 1.2 - Activity 1 - IMG and A tags

Time to build your first photo gallery!

In this second lesson, we're going to learn two super useful HTML tags that
will dramatically increase what you can build: How to make links, and how to
include images.

- `<a>` tag - Creates a "link" to another website; that is, underlined text
  that you can click on to take you to another page. The `a` tag is often
  colloquially called a "link", which is short for "hyperlink", and older or
  more technical term for the concept. The concept of linking together websites
  with these hyperlinks is what gives the web it's name... the *World Wide
  Web*, a decentralized "web" of HTML documents spanning the entire globe!

- `<img>` tag - Displays an image on the page.

- tag attribute - Extra information that goes inside a tag, used by `<a>` tags
  and `<img>` tags to specify the location ("URL") of the link or image respectively.

- `URL` (also related, `URI`) - The "web location" of a resource. Sharing these
  URLs lets people visit websites or access specific files. For example, this
  `https://www.wikipedia.org/` is a URL, as is
  `https://en.wikipedia.org/wiki/Main_Page` and `https://joinmastodon.org/apps`.

Note: Outside of web development URLs (the are occasionally referred to as
"links" as well. That is a very confusing usage of the word. In this course,
only a-tags ("hyperlinks") will be called "links". Also note that there are
technical distinctions between `URL` and `URI`, and a tag called `link` which
are not important now and will be covered later..

-------------


Challenge 1: Writing A-tag text
----------------------------------

Each photo has credits to the original photographer.  The credits for the
Yumedono photo (second from top) are incomplete.

* Objective: Modify HTML to add text to the second photo's "credits" A-tag.

1. Open [challenge1.html](./challenge1.html) in your text editor and browser.
2. Examine the existing code. It has 4 partially complete entries about
featured photographs. Note that the second photo (Yumedono)
has an `<a>` tag similar to the one in the first photo, however, it is missing
"text content" or what comes before the `</a>` closing tag.
3. Observe how in the browser only the top photo has the name of the
photographer. The second-to-top photo has no name whatsoever, since the A-tag
is incomplete.
4. The goal for Challenge 1 is to complete the A-tag by filling in the text
`Frank J. Gualtieri Jr` (the name of the photographer).

* Hint 1: Examine the code around line 34.

* Hint 2: Since you'll be filling in the text to an HTML element, you'll want
  to fill in between two point brackets, e.g. look for something like `...">
  </a>`, and fill in between the `>` and `<` "style-tag" near the top of the
  file.

* Hint 3: The A-tag will look like this when it's done:

```html
<a href="https://commons.wikimedia.org/wiki/File:HoryujiYumedono0363edit4.jpg">Frank J. Gualtieri Jr</a>
```

-------------


Challenge 2: Filling in an attribute
----------------------------------

Now, it's the opposite: The text is filled in, but the URL is not.

* Objective: Modify the HTML to fix complete the A-tag with a given URL.

1. Open [challenge2.html](./challenge2.html) in your text editor and browser.
2. Examine the existing code. The HTML has grown slightly, this time with
another incomplete A-tag in the next photo.
3. Observe how in the browser the A tag for "Sathyan Velumani" (the
photographer of the Larabanga Mosque photo) is visible, but the quotes are
filled in with `https://???` instead of an actual URL.
4. Replace the `???` with the text
`en.wikipedia.org/wiki/File:Larabanga_Mosque_Ghana.jpg` to complete the
link.

- Hint 1: Look around line 40.

- Hint 2: Since you'll be filling in an attribute to an HTML element, you'll
  want to fill in between quotes, e.g. look for something like: `=""`

- Hint 3: Common gotchas: Don't add any extra spaces when writing attributes,
  and be careful to close your quotes.

- Hint 4: When complete, the HTML will look like:

```html
<a href="https://en.wikipedia.org/wiki/File:Larabanga_Mosque_Ghana.jpg">Sathyan Velumani</a>
```

-------------



Challenge 3: Adding in an image
----------------------------------

We've practiced with A-tags. Let's try adding in an IMG-tag, which takes a
"src" attribute instead of an "href" attribute.

* Objective: Modify the HTML to fill in a new attribute with a URL completing
  the IMG-tag.

1. Open [challenge3.html](./challenge3.html) in your text editor and browser.
2. Examine the existing code. Now, we have an incomplete IMG-tag.
3. Observe how in the browser the image under Larabanga Mosque is broken.
4. Type (or copy and paste) the URL of the image
`https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Larabanga_Mosque_Ghana.jpg/800px-Larabanga_Mosque_Ghana.jpg`
in between the quotes (i.e. in between `<img src="">`)

- Hint 1: Look for the empty attribute around line 43: `=""`

- Hint 2: When complete, the HTML will look like:

```html
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Larabanga_Mosque_Ghana.jpg/800px-Larabanga_Mosque_Ghana.jpg">
```

-------------


Challenge 4: Writing two complete tags
----------------------------------

In this final challenge, we combine all that we've learned to put together both
an A-tag and IMG-tag, given two URLs (one for the A-tag, one for the IMG-tag),
and a text (for the A-tag).

* Objective: Write an A-tag and IMG-tag to complete the photo gallery.

1. Open [challenge4.html](./challenge4.html) in your text editor and browser.
2. Examine the existing code. Notice each of the 4 images now consists of 4
tags, except for the last photo, which has only 2.
3. Observe how the browser also only displays 4 photos.
4. Create a new A-tag and IMG-tag, and  (or copy and paste) the following URLs
and bits of text in the same pattern you see in the previous photos:
    * Author Name
        * `David Iliff`
    * Author URL
        * `https://en.wikipedia.org/wiki/File:Sydney_Opera_House_-_Dec_2008.jpg`
    * Image URL
        * `https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sydney_Opera_House_-_Dec_2008.jpg/800px-Sydney_Opera_House_-_Dec_2008.jpg`

- Hint 1: The key coding skill in play here is "pattern identification". In
  other words, notice how the previous images have an H2, A, P, and IMG
  pattern. Replicate that pattern for the final image.

- Hint 2: When complete, the HTML will have the following two tags added near
  the end:

```
<a href="https://en.wikipedia.org/wiki/File:Sydney_Opera_House_-_Dec_2008.jpg">David Iliff</a>
```

```
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/
Sydney_Opera_House_-_Dec_2008.jpg/800px-Sydney_Opera_House_-_Dec_2008.jpg">
```

