# Project 2 - Launch Page

In this second project, we'll get practice integrating a sign-up collection
system to create a "coming soon" launch page. This could be useful for gauging
interest in new art projects or business ventures, and in general to build up
hype about a planned project.

The previous project (Project 1) only involved HTML and CSS we've learned so
far. The remaining projects in this lab are harder than the previous, since
they involve incorporating code from different online services, by means of
copy and pasting "magic snippets" of code that add in lots of functionality at
once. This allows you to integrating different online services with sharable
content, embeddable forms, and other such "third party integrations", allowing
you to collect information with forms, play music or videos, or sign people up
for a newsletter.

- TinyLetter: https://tinyletter.com/

- NOTE: These "magic snippets" usually consist of a "script tag" or an "iframe
  tag", neither of which we have learned about just yet. If it gets confusing,
  keep this in mind: Don't worry about exactly how script tags or iframes work,
  that's more advanced knowledge you can tackle later. The goal for this
  particular Project Lab is to get practice carefully copying and pasting these
  "embedding" tags so you can quickly embed useful services in your website.


--------------------------

## Can you build the design by looking at the solution?

- You will probably get stuck, so use the clues for snippets of code to read,
  understand as best you can, modify, and then include via copy and paste.

- Challenge mode: To truly put your skills to the test, carefully examine the
  solution in your browser, see how much of the solution you can recreate
  without checking the clues.

- Remember: It's always okay to copy & paste from previous activities!


--------------------------

## Clue 1

1. Open `clue1.html` in your text editor
2. Examine the code: This clue will provide most of the HTML for your landing
page, consisting of a mix of h1, h2, img, and p tags.
3. Copy and paste this code into a new HTML document, such as the empty file
called "project2.html" included here




--------------------------

## Clue 2

1. Open `clue2.html` in your text editor
2. Examine the code: This clue consists of a `<style>` tag that provides some
of the colors and layout of the project
3. Copy and paste this code into your project's HTML document, above any
existing code


--------------------------

## Clue 3

1. Open `clue3.html` in your text editor
2. Examine the code. This clue consists of another `<style>` tag that adjusts
image size, margin, padding, text size, and generally "cleans up" the design
compared to the previous version of CSS. It also adds a box-shadow based "glow"
effect around p-tags.
4. Copy and paste the individual properties you see (e.g. `margin: 0;`) into
the rules in your `<style>` tag


* **Hint:** In the end, your H1 rule in your `<style>` tag will look like this:


        h1 {
            margin: 0;
            padding: 30px;
            font-size: 120px;
            color: #a94f1b;
            background: #191c21;
        }



--------------------------

## Clue 4

1. Open `clue4.html` in your text editor
2. Examine the code. This time, we have our first "snippet"! It's an embeddable
TinyLetter form, that allows people to sign-up with the proprietary,
third-party mail service TinyLetter.
3. Note that the snippet has "form" and "input" tags. These are HTML tags that
are beyond what we have taught so far, so don't try to understand what is going
on just yet. Instead, think of it as just a "magic snippet" that will cause the
form to appear!
4. *Optional:* If you are just trying to quickly complete this activity, feel
free to use the clue verbatim, and skip this step.
    - Note that this particular clue is for the mailing-list associated with
      Free Coding Lessons, basically provided as an example.
    - If you want extra practice, you can sign-up and generate one here:
      <http://tinyletter.com/>
5. Copy and paste the TinyLetter snippet (either from the clue or for a
newsletter of your own).

