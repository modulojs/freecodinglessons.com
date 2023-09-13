# 2.2 - Activity 2 - Time to FLEX!

So far, our designs have had a major deficiency. They only are vertical. Don't
you wish you could do more stuff that was, well, horizontal? Like stacking
tings side-by-side?

It's time for the most powerful CSS skill yet: Flex. This is what lets put
stuff side-by-side.

### Key Terms

- **flex** - CSS alignment system that lets us stack stuff horizontally

- **flex wrapping** - A property of flex that, when turned on, will make things
  "wrap around" if they run out of space (vs getting increasingly squashed)


----------------





Challenge 1: Adding class for flex
----------------------------------

We'll start with a clean, fresh file again, and get practice adding a class. If
you want, you can use the web editor for this one.

* Objective: Get more practice with classes, as we observe the effects of flex on CSS.

1. Open [challenge1.html](./challenge1.html) in your text editor and browser.

2. Examine the existing code.
    - What is missing about the second collection of tags?

3. Observe the results in your browser

4. Fix the code to style each box the same

- Hint #1: Add "nicely-formatted-roster" class to add flex styling to the `main` tag

- Hint #2: Add 5 `student` classes (one to each `article` tag that lacks it)


-----------------





Challenge 2: Flex Layout
----------------------------------

Now we'll practice adding flex to an entire screen layout

* Objective: Practice applying a flex-based column layout

1. Open [challenge2.html](./challenge2.html) in your text editor and browser.

2. Examine the existing code.
    - What new sidebar has been added?

3. Observe the results in your browser
    - How can we make it stack better?

4. Add the "page-container" CSS class to the outermost body, and the
"left-column" CSS class to the nav, and the "right-column" CSS class to the div
that comes after the nav

- Hint: Follow the hints in the code!


-----------------


Challenge 3: Flex-Wrapping
----------------------------------


* Objective: We want our design to handle smaller screen sizes

1. Open [challenge3.html](./challenge3.html) in your text editor and browser.

2. Examine the existing code.

3. Observe the results in your browser
    - What happens when you resize?

4. Add CSS to make the "nicely-formatted-roster" class cause "wrapping"

- Hint: In the end, the class will do this:

    .nicely-formatted-roster {
        display: flex;
        flex-wrap: wrap;
    }



----------------------------------






Challenge 4: Flexible Flex
----------------------------------

Now let's practice using flex wrap with width and max-width to create a
flexible layout that will "adjust" to screen size or browser size. Such layouts
are called "responsive design".

* Objective: Practice setting and max-width along with flex-wrap

1. Open [challenge4.html](./challenge4.html) in your text editor and browser.

2. Examine the existing code.

3. Observe the results in your browser
    - What happens when you resize?

4. Set the `.page-container` to be `flex-wrap: wrap` and the `.main-column` to
be `max-width: 100%;`




