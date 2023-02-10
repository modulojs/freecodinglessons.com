# 3.1 - Activity 1 - CDNs

Key Terms:

- **libraries** and **frameworks** - Other people's code, which is intended to
  be "added on" to your project, for pre-made solutions to common tasks. All
  libraries and frameworks that we cover in this class are open source.

- **CDN** - Content Delivery Network, or a free webhost you can use to bring in
  libraries. Many free / open source CSS frameworks have a CDN link you can
  easily "drop into" an HTML document to skip the step of downloading it.

- **Google Fonts** - A free library of 1000+ fonts that you can browse and
  select from, and then include in your projects

- **Tailwind** - A free library of premade CSS classes that you can incorporate
  into your projects.


Key Term Review:

- **open source** and **free/libre software** - Software and code that is under
  a special type of license, called a "free software license", allowing you to
  incorporate it into your project and expand on it without needing permission
  or paying for licensing.



----------------------------------



Challenge 1: Adding in a CDN link
----------------------------------

* Objective: Get practice copying and pasting in a CDN link

1. Open `challenge_1.html` in your browser and text editor, and optionally also
open `challenge_1_styles.css`. This is supposed to be a showcase of 12 fonts,
but only 6 are showing.

2. Examine the existing code.
    - Note the very long CDN `<link>` tag that brings in 6 Google Fonts
    - These 6 fonts, are used by `challenge_1_style.css` for the classes
      `.font1`, `.font2`, etc, until `.font6`
    - The second `<h1>` has no cool fonts, because `.font7` through `.font12`
      are missing their CDN `<link>`

3. Copy &amp; paste the this long `<link>` tag to fix the remaining 6 fonts:


        <link href="https://fonts.googleapis.com/css2?family=Aboreto&family=Arima&family=Lavishly+Yours&family=Rubik+80s+Fade&family=Twinkle+Star&family=Water+Brush&display=swap" rel="stylesheet">




----------------------------------


Challenge 2: CSS for Font Family
------------------------------------

* Objective: Get practice with using the `font-family` CSS property to specify
  which font to use.

1. Open `challenge_2.html` in your browser and text editor, and also open
`challenge_2_styles.css`.

2. Examine the existing code. The `<link>` tag is already here, so the fonts
are getting included via CDN, but the CSS is missing the `font-family` property
to tell the browser which elements should get which font.

3. Fill in the empty spots in the CSS, with appropriate `font-family` property:
    - `font-sans` should get `font-family: 'Roboto', sans-serif;` (already done
      for you)
    - `font-serif` should get `font-family: 'Playfair Display', serif;`
    - `font-antique` should get `font-family: 'Tapestry', cursive;`
    - `font-fun` should get `font-family: 'Nabla', cursive;`
    - `font-handwritten` should get `font-family: 'Whisper', cursive;`
    - `font-terminal` should get `font-family: 'Source Code Pro', monospace;`
      (in addition to the existing `white-space: pre;`)

4. If done successfully, all the text should get different fonts.




----------------------------------


Challenge 3: Looking up fonts
------------------------------------

* Objective: Get practice with a full workflow of looking up a Google Font,
  including the CDN `<link>`, and also including the correct `font-family` CSS.

1. Open `challenge_3.html` in your browser and text editor, and also open
`challenge_3_styles.css`.

2. Examine the existing code. This time, the code is missing both a `<link>`
tag, and any mention of `font-family`.

3. Pick 2 fonts from Google Fonts ("Quicksand" and "Cormorant"), and then
including them in the `challenge_3.html` file with a `<link>` tag.
    - Step 1: Go to Google Fonts in a new browser tab: <https://fonts.google.com/>
    - Step 2: Search for the font "Quicksand"
        - Hint: Type into the "Search fonts" search box the word "Quicksand"
          and then click on the result you find
    - Step 3: Add the font to the current collection
        - Hint: This button looks something like `Select Regular 400 (+)`.
    - Step 4: Search for the font "Cormorant"
    - Step 5: Add the font to the current collection
    - Step 6: Open the "Selected families" sidebar, if it's not already open
        - Hint: This button looks like squares in the upper right hand corner
    - Step 7: Copy the `<link>` snippet
        - Hint: Look in the section "Use on the web", it should have 3 `<link>`
          tags to connect to the Google Fonts CDN and load Cormorant and
          Quicksand fonts.
        - Hint: Still having trouble? Try just copying the desired snippet below:

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant&family=Quicksand&display=swap" rel="stylesheet">

4. Edit `challenge_3_styles.css`, and add rules such that `<h1>`, `<h2>` and
`<h3>` tags display with the Quicksand font and `<p>` tags use the Cormorant
font.
    - Hint 1: You can find the necessary `font-family` code in the same place
      where you found the `<link>` code copied above. It should look like this:

            font-family: 'Cormorant', serif;
            font-family: 'Quicksand', sans-serif;

    - Hint 2: Once you find the `font-family` code you need to use, you write
      CSS rules to use it. In the end, it should look like this (h1 and p):

            h1 {
                font-family: 'Quicksand', sans-serif;
            }

            p {
                font-family: 'Cormorant', serif;
            }

4. If done successfully, all the text should get new fonts.



--------------



Challenge 4: Including multiple CDNs and links
----------------------------------------------------




