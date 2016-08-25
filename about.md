---
layout: page
title: About
permalink: /about/
order: 3
---

History.  What it's aiming at.  Design principles.

??? Is this page needed?

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
// build has type () => mutable [String]
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
