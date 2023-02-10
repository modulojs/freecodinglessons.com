# 2.1 - Activity 1 - Nested HTML Tags: Lists and Tables

Key Terms:

- **nested tags** - When one tag is placed within another, i.e. after it's
  opening tag, and before it's closing tag

- **indenting tags** - Adding (ignored) spaces at the beginning of the line to
  show that one tag is "in" another. This is considered best practice for
  professional code because it makes code easier to read and helps prevent
  mistakes.

----------------------------------


Challenge 1: Paragraph marathon
----------------------------------

This is a review challenge. If you feel confident about your p-tag skills, then
try challenging yourself with seeing how quickly you can "race" through this!

* Objective: Get more practice with the different ways we learned to do tags in
  `1.1 - 1.3`.

1. Open `challenge1.html` in your text editor and browser.

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


Challenge 4: Table Time
-------------------------------------------

1. Open `challenge4.html` in your text editor and browser.

2. Examine the existing code.
    - It displays the stats of tournament games for a top WTA player, Naomi Osaka.
    - Currently, it uses 6 p-tags to display the information.
    - We want to switch it to use 1 ul-tag and 6 li-tags instead.





