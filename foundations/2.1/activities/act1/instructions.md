# 2.1 - Activity 1 - Nested HTML Tags: Lists and Tables

Welcome to the first activity of the second section of modules!


Key Terms:

- **nested tags** - When one tag is placed within another, i.e. after it's
  opening tag, and before it's closing tag

- **indenting tags** - Adding (ignored) spaces at the beginning of the line to
  show that one tag is "in" another. This is considered best practice for
  professional code because it makes code easier to read and helps prevent
  mistakes.


----------------------------------

## Learning tips

While it might seem convoluted at first, it's very common to nest tags many
layers deep. HTML documents that power big, real websites may have dozens of
nested tags.

You'll notice this activity quickly "ramps up" in terms of number of tags
and amount of content you'll be handling. It's good to get practice moving
around a lot of text, but it can also be challenging, so it's important to keep
these tips in mind:


1. Don't try to type every tag, otherwise you'll go too slowly and
make too many mistakes. Instead, use lots of copy and paste, changing text or
other attributes each time.
2. Learn shortcuts for your operating system and/or editor. For example:
    - *OS and Browser Shortcuts:* Alt+Tab or Command+Tab (switch windows),
      Ctrl+Shift+R (force refresh browser)
    - *Editor shortcuts:*  "Tab" and "Shift+Tab" to indent and unindent (many
      lines, if done after selecting text), Ctrl+S or Command+S to save
      (desktop only)


----------------------------------


Challenge 1: Paragraph marathon
----------------------------------

This is a review challenge. If you feel confident about your p-tag skills, then
try challenging yourself with seeing how quickly you can "race" through this!

* Objective: Get more practice with the different ways we learned to do tags in
  `1.1 - 1.3`.

1. Open [challenge1.html](./challenge1.html) in your text editor and browser.

2. Examine the existing code. It uses paragraph tags (p-tags) to show the top 5
ranked Women's Tennis Association players in separate paragraphs.

3. Using paragraph tags, display the following information:

        WTA Tour Rankings June 2021

        1. Ashleigh Barty (Australia)
        2. Naomi Osaka (Japan)
        3. Simona Halep (Romania)
        4. Aryna Sabalenka (Belarus)
        5. Sofia Kenin (United States)
        6. Elina Svitolina (Ukraine)
        7. Bianca Andreescu (Canada)
        8. Serena Williams (United States)
        9. Iga Swiatek (Poland)
        10. Karolina Pliskova (Czech Republic)
        11. Belinda Bencic (Switzerland)
        12. Petra Kvitova (Czech Republic)
        13. Garbine Muguruza (Spain)
        14. Jennifer Brady (United States)
        15. Elise Mertens (Belgium)


----------------------------------


Challenge 2: Makin' a list...
----------------------------------

This challenge introduces how to make nicely formatted lists that automatically
count, instead of having to write the numbers manually as in the previous
challenge.

* Objective: Get practice with OL and LI tags.

1. Open `challenge2.html` in your text editor and browser.

2. Examine the existing code.
    - It displays the top 5 ranked Women's Tennis Association singles players
      in the beginning of 2023.
    - It uses two new types of tags: One `<ol>` tag (ordered list tag), and
      five `<li>` tags (list item tag).
    - Note the use of "nesting": That the `<ol>` tag goes on the outside, and
      the `<li>` tags must always go within the `<ol>` tag (and indented).

3. By writing new `<li>` tags within the `<ol>` tag, complete the list to
display the following information:

        WTA Singles Rankings (2023/01/09)

        1. Iga Swiatek
        2. Ons Jabeur
        3. Jessica Pegula
        4. Caroline Garcia
        5. Aryna Sabalenka
        6. Maria Sakkari
        7. Coco Gauff
        8. Daria Kasatkina
        9. Veronika Kudermetova
        10. Madison Keys
        11. Paula Badosa
        12. Simona Halep
        13. Belinda Bencic
        14. Danielle Collins
        15. Beatriz Haddad


* Hint 1: Watch out for accidentally leaving in duplicate numbers. You don't
  want it to say "1. 1. Iga Swiatek"!


----------------------------------


Challenge 3: ...And checkin' it twice!
-------------------------------------------

This challenge introduces unordered lists, which is a fancy way of saying
bulleted lists. They are identical to ordered lists, except you use
`<ul>...</ul>` instead of `<ol>...</ol>`.

* Objective: Get practice with UL and LI tags.

1. Open `challenge3.html` in your text editor and browser.

2. Examine the existing code.
    - It displays information on a top WTA player, Ons Jabeur.
    - Currently, it uses 6 p-tags to display the information.
    - We want to switch it to use 1 ul-tag and 6 li-tags instead.

3. Replace the p-tags with li tags and ul tags, so the information on the
player becomes an unordered, bullet-point list (if stuck, see hint below)

4. Optional: Try switching the "ul" tag to a "ol" tag, and back, and observe
the results in your browser. See how to switch between ordered and unordered?

Hint: Unsure of how to replace p-tags? Follow these steps:

1. Add a `<ul>` opening tag after the h1-tag and before the first p-tag

2. Add a `</ul>` closing tag at the end of the file

3. Change each `<p>` opening tag into a `<li>` opening tag

4. Change each `</p>` closing tag into a `</li>` closing tag

5. Optional, but recommended for good style: Add spaces before each `<li>` line
to indent it (or use the Tab key)



----------------------------------


The Trouble with Tables
-------------------------------------------

Tables are tricky and require more code than the previous elements, since they
have many special tags that go along with them:


- `<table>`
    - outermost tag
- `<thead>`
    - desigantes the "zone" for the table head, e.g. the titles on the top row
      of the table
- `<th>`
    - a single head, e.g. a column title
    - **can hold content** *(e.g. p, a, img, etc)*
- `<tbody>`
    - designates the "zone" for the main content of the table
- `<tr>`
    - a single row of content in the table
- `<td>`
    - a single cell of content in the table
    - **can hold content** *(e.g. p, a, img, etc)*


----------------------------------


Challenge 4: Table Time
-------------------------------------------

This challenge introduces tables, which lets us arrange grid-like information,
much like you'd see in a chart or spreadsheet.

* Objective: Switch P tags to use TABLE, THEAD, TH, TBODY, TR, and TD tags

1. Open [challenge4.html](./challenge4.html) in your text editor and browser.

2. Examine the existing code.
    - It displays the stats of tournament games for a famous tennis player,
      Naomi Osaka.
    - Currently, it displays one row correctly using a table
    - After the correct table, it uses 3 p-tags incorrectly to display the
      information.

3. Observe how in the browser the top row is displayed in a correctly formatted
table grid arrangement

4. Make necessary code changes to change the P-tags into TR and TD tags


Hint: Unsure of how to replace p-tags? Follow these steps:

1. Move the `<p>` tag into the table, before the `</tbody>` tag

2. Change the opening and closing `<p></p>` (paragraph) tag into the `<tr>
</tr>` (table row) tag.

3. In this case, wrap each line into table cell tags: `<td>` and `</td>`

4. In the end, it should resemble the example already completed



----------------------------------


Challenge 4: Bonus Challenge
-------------------------------------------

Looking for more practice with tables? 

* Objective: Add back in P tags for more nesting practice, to display the
  country of each opponent on a separate line

1. Return to the work on [challenge4.html](./challenge4.html) in your text
editor and browser.

2. Examine the following code snippet. This should replace the current `<td>`
with Serena Williams' name.

    <td>
        <p>Serena Jameka Williams</p>
        <p>(United States)</p>
    </td>

3. Examine the following list of countries and player names. These need to be
formatted using code like the above:
    - Petra Kvitová (Czechia)
    - Victória Fyódarauna Azárenka (Belarus)
    - Jennifer Elizabeth Brady (United States)

4. Make necessary code changes to add back in P-tags to better format
paragraphs within table cells


Hint: Unsure of how nest p-tags? Follow these steps:

1. Write a `<p>` tag after the `<td>` on a new line, indented even more

2. Write the first line of text, followed by a `</p>` tag

3. Repeat for the second P tag

