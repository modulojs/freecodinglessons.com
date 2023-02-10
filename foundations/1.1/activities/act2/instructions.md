# 1.1 - Activity 2 - More Typography

We've learned how to `<h1>make text bigger</h1>` using h1. We'll now learn the
"p-tag", and the other "cousins" of h1 (h2 through h6).


- `<p>` P Tag - You may have already noticed that hitting "enter" or "return"
  in HTML does not seem to do anything, or create new paragraphs or lines.
  That's because HTML ignores "whitespace", the term used for enter, spaces,
  and such. The solution is the P Tag.

- `<h1>` through `<h6>` - Header 1 isn't the only header. There is also Headers
  1-6 (but none others!).  They let us specify different sizes of text, to
  signifiy different sections, subsections, subsubsections, etc. H1 is the
  biggest, H6 the smallest.


----------------------------------


Challenge 1: Paragraphs
----------------------------------

To create new paragraphs, we must get practice with the `<p>` tag

* Objective: Add a paragraph

1. Open [challenge1.html](./challenge1.html) in your text editor and browser.
2. Observe in the browser how it says "Smoothie ingredients" in large text as
an H1, however, all the ingredients after "bananas" are combined into one line
and difficult to read.
3. Examine the existing code. Do you see the new p-tag, in a similar syntax to
the h1-tag we saw before, while the other code is "loose", or not surrounded by
a tag?
4. The goal for Challenge 1 is to "suround" this code with p-tags, or copy the
p-tag for "bananas" to put each other ingredient on a separate paragraph.

* Hint 1: Stuck? Remember to "enclose" each "paragraph" with both an opening
  `<p>` tag, and closing it with `</p>`.

* Hint 2: The first three paragraphs will look like:

```html
<p>3 chopped bananas</p>
<p>1 cup blueberries</p>
<p>1 sliced apples</p>
```



----------------------------------


Challenge 2: H2
----------------------------------

Let's get practice with H2. This is a slightly smaller tag than H1.

* Objective: Learn to use H2 to title subsections of the page.

1. Open [challenge2.html](./challenge2.html) in your text editor and browser.
2. Now, note how "Smoothie Recipe" and "Description" are in large letters, but
"Ingredients" and "Instructions" are not.
3. Examine the existing code. Do you see the new p-tag, in a similar syntax to
the h1-tag we saw before?
4. The goal for Challenge 2 is to "upgrade" the bottom two and add "h2" tags.

* Hint 1: Stuck? Remember to "enclose" each "header" with both an opening
  `<h2>` tag, and closing it with `</h2>`.




----------------------------------


Challenge 3: Other headers
----------------------------------

Let's get more practice with H3 and H4. These tags are essential for
establishing a web design's hierarchy or structure.

* Objective: Get practice with many headers!

1. Open [challenge3.html](./challenge3.html) in your text editor and browser.
2. Note in your browser how the website has been expanded, but has a lot of
loose text to fix.
3. Examine the existing code. A lot has been added. Note how some of the text,
like before, is "loose" and not wrapped in any tag.
4. The goal for Challenge 3 is to "upgrade" 7 different H-tags:
    - "Fruit" (H3)
    - "Liquid" (H3)
    - "Steps" (H3)
    - "Step 1" (H4)
    - "Step 2" (H4)
    - "Step 3" (H4)
    - "Serving" (H3)

* Hint #1: This might seem tedious, but it's important practice to get used to
  typing out the tag names and correcting the various mistakes you will make
  while typing. You will need to get really good at this to succeed in coding!

* Hint #2: Below are some portions of the solution, as a hint:

```html
<h3>Fruit</h3>
<p>2 chopped bananas</p>

...

<h3>Steps</h3>

<h4>Step 1</h4>
<p>Combine in blender.</p>

```

----------------------------------




Challenge 4: Creating a hierarchy
----------------------------------

So far, we've only edited existing code to add tags to fix the issue of "loose
text". This challenge we'll practice building code from scratch to recreate the
previous design.

* Objective: Get practice building website code from scratch

1. Open [challenge4.html](./challenge4.html) in your text editor and browser.
2. Note how a lot of the site is missing, and there's no loose text.
3. Examine the existing code. To get back to how it was, several tags need to
be added in the big blank spaces.
4. Follow the instructions below to re-build the previous structure:
    - Under "Ingredients", add:
        - Fruit (H3-tag)
        - 2 chopped bananas (P-tag)
        - 1 cup blueberries (P-tag)
        - 1 sliced apple (P-tag)
        - Liquid (H3-tag)
        - 1 cup soy milk (P-tag)
    - Under "Instructions", add:
        - Steps (H3-tag)
        - Step 1 (H4-tag)
        - Combine in blender. (P-tag)
        - Step 2 (H4-tag)
        - Blend for several minutes or until desired consistency. (P-tag)
        - Step 3 (H4-tag)
        - Enjoy! (P-tag)

