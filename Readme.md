## Acapela interview task

Welcome! Thank you for taking part in our interview process. We hope it'll be good and valuable experience for both of us, where we can learn from each other.

### The goal

The idea is to see how you'll solve problem that might seem simple on the surface, but has quite some quirks under the hood.

### The task

Before you start, clone this repo, call `yarn install` and `yarn dev` to have visual overview.

![app](preview.png "The app")

The App contains feed with multiple items, where each of them can have various height.

Height of each item can also be dynamic and changed for any reason not-known in advance. (eg. item, when clicked, doubles its height, but height can also change as a result of resizing the window, etc)

The goal is to watch which item is 'the most visible' and highlight it.

Requirements:

- only one item can be highlighted at most at any time
- highlighted item should be up-to-date all the time (eg: while scrolling, etc)
- if 2+ items are fully visible at any moment, the one that is 'the most central' is considered 'the most visible'
- if item is resized for any reason (eg. window resize) - highlighted item should be correctly updated if needed
- if some item was highlighted, but later no item is visible anymore (eg. page has large bottom padding, so you can scroll to the bottom making no items visible) - no item should be highlighted

Additional design / architecture insights:

- if needed, we should be able to have multiple, fully independent groups of such items. eg. we could have 2 feeds side by side (each independently scrollable), and each of them would have 'one most visible item'
- (nice to have) visibility threshold should be configurable (eg. ignore items that are only 20% visible)
- the API should be as composable as possible (meaning it is possible to add 'new group' with minimal boilerplate)
- ideally - the API should not be 'leaking' implementation details to parent components, etc as much as possible
- we should not assume that 'body' is the scrollable element. It could be any element, possibly nested, small or big.
- (extreme nice-to-have): handling list scrolled all the way to the top/bottom.

  If list is scrolled all the way to the top, first item is certainly not 'the most central' (as items below are). Thus first item would never be 'the most visible'. What we can do is to adjust it somehow so we still highlight every of the items at least for a short period at some point. (tip: we can modify what is considered 'central' point when scroll is near the start/end)

Thanks! Good luck!
