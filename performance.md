---
layout: page
title: Performance
permalink: /performance/
---

In JavaScript, dynamic dispatch is the default.  Moreover, functions like
[Immutable.is](https://facebook.github.io/immutable-js/docs/#/is)
have to introspect the values to select the appropriate equality algorithm,
which slows down modern JITs.

In Crux, static dispatch is the default, which has two main benefits with regards
to performance.

1. The JIT always knows precisely which function is being called, so it doesn't
   need to dynamically look it up.
2. Ahead-of-time optimizers can inline the function if appropriate, meaning
   lightweight functions are free - a [cost-free abstraction](/abstraction).

Static dispatch is one component of performance - another is type-indexed values.

Crux's traits allow selecting the appropriate function for each type.
Consider the deep equality example above.  Obviously the `==` operator
works on primitive types like Number and String.  But it also works on
arrays: `[0, 1] == [0, 1]`.  At compile time, Crux notices that it's comparing
arrays and looks up the `==` operator implementation for arrays.
This helps the JIT generate the fastest code for equality checks,
while the programmer is able to use the same `==` operator on every
type.
