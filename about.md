---
layout: page
title: About
permalink: /about/
order: 3
---

# History

The Crux project started when Chad and Andy led the
[adoption of Haskell at IMVU](https://chadaustin.me/2016/06/the-story-of-haskell-at-imvu/).
The ideas in Haskell are amazing, and they make us wish every language could express ideas
so accurately and concisely.  (They say learning Haskell makes you a better programmer,
and that's definitely true, but it also makes you sad.  Little else is as good.)

Unfortunately, a lot of engineers just couldn't get over the syntax and unfamiliarity.
Chad has a background in usability and empathizes: Haskell is not that pleasant in many
ways.

Then Chad left IMVU and went to Dropbox, fresh off the static typing high, and found a
significant amount of resistance to even the idea of static typing.  Eventually he traced
this back to peoples' experience with C++ and Java, where static typing is associated with
OOP and mandatory, redundant, and pervasive type annotations.

Of course, static typing doesn't have to be painful -- we have evidence from the ML family
of languages -- and there's no reason we couldn't have a language that's as pleasant to write
as JavaScript, Python, or Go with many of the type safety benefits of Haskell.

And that's how Crux came to be.

# Goals

* Crux is designed to achieve very tight code generation: pay only for what you use, and the
  generated code should be as small as or smaller than the equivalent hand-written code.
* Provide rich data structures out of the box: immutable and mutable arrays, sets, and maps.
* Adopt syntactic conventions from JavaScript (or other languages) whenever possible.
* Natural, familiar syntax but without any contortions -- everything is an expression.
* Direct FFI to JavaScript - benefit from the huge ecosystem of existing JavaScript libraries.

# Examples

## Richer Data Structures

You can use any hashable data structure, including tuples, as keys in a map.

```crux
let ages = Map::new()
ages[("John", "Smith")] = 25
ages[("Mary", "Anderson")] = 32
```

## Bidirectional Type Inference

```crux
fun build() {
  let result = mutable [] // type of result's elements aren't known yet
  result->append("hello") // now we know result contains strings
  return result
}
// build is a function of type () => mutable [String]
```

## Immutable By Default

Crux values and arrays are immutable by default, but mutable variables
are convenient when desired.

## Automatic Generics

```crux
fun maximum(container) {
  // maxBound is the minimum value for any Bounded type
  let mutable current = minBound
  for element in container {
    if element > current {
      current = element
    }
  }
  return current
}
```

`maximum` has no type annotations, but the compiler determines it can work
on any Iterable containing Bounded, Ordered elements.

## Direct Integration with JavaScript

Crux is designed to interoperate smoothly with JavaScript.  Both mutable
and immutable arrays are JavaScript arrays under the hood.  Booleans, strings,
and numbers are all what you'd expect.  Record types are simply objects underneath.

This makes it straightforward to reuse existing libraries in both the browser
and Node.js.

## Everything is an Expression

```crux
fun showMenu(context) {
  let color = match context {
    Sidebar => SidebarMenuColor
    RightClick => RightClickMenuColor
  }
  showMenuWithColor(color)
}
```
