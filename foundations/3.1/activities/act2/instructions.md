# 3.1 - Activity 2 - Tailwind Take-Off

Congrats on getting to this important lesson!

You, as a students in this class, might have felt some frustration at this
point. Do all your websites look, well, _bad_?  Making something "professional"
looking takes *so much* time.  Don't you wish there was a shortcut, or a way we
could "skip ahead" with styling?  Well, when flying an airplane, a *tailwind*
can give you a speed boost.  Similarly, Tailwind CSS is intended gives your CSS
development a speed-boost!

### Tailwind FAQ

- *How does it work?* - It's simple in concept: A huge collection of
  pre-written classes for you to use, that let you forget about writing CSS for
  a moment and just quickly spice up your HTML with professionally pre-designed
  CSS. Think of it like a free "CSS design library".

- *Is it free?* It's free, but is originally by a for-profit company, which
  also sells Tailwind-related software subscriptions. None of those are needed
  for anything in this course.

- *Are there alternatives?* Dozens! Some old classics include Bootstrap 5
  (Twitter) and Materialize CSS (Google). Somewhat newer ones include Theme UI,
  and Base Web (Uber).


-----------------


# Tailwind Learning Tips

1. Tailwind is a bunch of tiny CSS classes (e.g. `class="text-lg"`)
2. The typical Tailwind class only does one or two things by itself
3. Keep the Tailwind documentation handy at all times: <https://tailwindcss.com/>
4. As you do this lesson, search for each Tailwind class you encounter, so you
can learn the "underlying" CSS

### Example

For example, searching for `text-lg`, you'll find it is a "Font Size", defined
as such:

<https://tailwindcss.com/docs/font-size>

    .text-lg {
        font-size: 1.125rem; /* 18px */
        line-height: 1.75rem; /* 28px */
    }



-----------------


Challenge 1: Lift Off
-----------------------------------------------------

We'll start by enabling Tailwind on a page, using a CDN script tag.

* Objective: Activate Tailwind.

1. Open [challenge1.html](./challenge1.html) in your text editor and browser.

2. Examine the existing code.
    - Note the commented out (disabled) "script" tag at the top
        - This is the code that "activates" Tailwind CSS
        - Note there is non-Tailwind CSS code as well (the style tag)
    - Examine the code before "Deutsch Prize" - so many classes!

3. Observe the results in your browser
    - Why is nothing styled?

4. Fix the code to turn on Tailwind and see the page (partially) come to life

- Hint: To enable Tailwind, uncomment the CDN script tag:


        <!--
        <script src="https://cdn.tailwindcss.com"></script>
        -->

        <!-- Turns into: -->
        <script src="https://cdn.tailwindcss.com"></script>


-----------------





Challenge 2: Typography
----------------------------------

An initial tour of any CSS framework  should always start at _typography_. What
does that mean? That's simply the tools the framework provides designers to
have consistent, professional, clean looking paragraphs, headers, and written
text or content.

* Objective: Activate typography classes, for font-size, color, spacing,
  weight, and other such modifiers

1. Open [challenge2.html](./challenge2.html) in your text editor and browser.

2. Examine the existing code.
    - The only thing that has changed is "empty" class tags were added, to
      indicate what's left to do
    - Challenges 2-3 will be spent filling these in with the same pattern you
      observe in the top section

3. Observe the results in your browser

4. Fix the code to make the H1, H2, H3, P of the main typography (e.g. the
paragraphs of text and headers) use the same classes as the top elements

- *HINT 1:* p class is `leading-7 text-slate-900 dark:text-slate-200`
- *HINT 2:* h2 class is `text-3xl font-medium text-slate-500 mb-3 dark:text-slate-400`
- *HINT 3:* h3 class is `text-2xl font-medium text-slate-500 mb-3 dark:text-slate-400`



-----------------


Challenge 3: Design element classes
----------------------------------

* Objective: Get practice setting sizes, adding rounded corners and shadows,
  and other design elements.

1. Open [challenge3.html](./challenge3.html) in your text editor and browser.

2. Examine the existing code.

3. Observe the results in your browser
    - This time all that's left is DIV and IMG code, with the P tag captions

4. Fix the code to make the DIV and IMG-tags all have the correct classes, just
like the top ones


- *Hint 1:* Outer div is `class="bg-slate-50 rounded-xl"`
- *Hint 2:* Inner div is `class="w-48 h-48 rounded-lg bg-white shadow-md text-center overflow-hidden"`
- *Hint 3:* Inner caption p tag is `class="font-medium text-md text-slate-900"`




----------------------------------



Challenge 4: Margins and padding utility classes
----------------------------------

As you may haven noticed, Tailwind is just a collection of a bunch of tiny
classes. One commonly used set of these is for _padding_ and _margin_, and they
are `p` and `m` respectively, in the format of `p8` (padding on all sides of
size-8), or `pt8` (padding on the top of size-8).

Classes in use: `p-8` (padding 8, all around), `pt-5` (padding top 5), `pt-10`,
`mb-3` (margin bottom 3),

* Objective: Learn margin and padding utility classes.

1. Open [challenge4.html](./challenge4.html) in your text editor and browser.

2. Examine the existing code.

3. Observe the results in your browser while comparing it with the [the way the
solution looks](/foundations/3.1/solutions/sols2.html)
    -  Look carefully at margin and padding. Do you see different intervals of
       padding and margin?

4. Add the classes based on observed differences




