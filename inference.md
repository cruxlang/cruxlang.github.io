---
layout: page
title: Bidirectional Type Inference
permalink: /inference/
---

Crux has bidirectional type inference, largely inspired by Ocaml and Haskell, which are
derived from [Hindley-Milner](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system).

The benefit is that you can specify type annotations if you want, but they're not
required.

Consider appending items to an array:

```crux
fun makeWeirdArray() {
  let array = mutable []
  array->append("some string")
  return array
}
```

When the `array` variable is initialized, we know it's a `MutableArray`, but we don't know the
the type of the elements yet.  Then we append an element, and now we know the concrete element
type -- String in this case.

If the function's entire type annotation were written out, it would look like:

```crux
fun makeWeirdArray(): mutable [String] {
  ...
}
```

Now consider appending an argument to the array:

```crux
fun wrapInArray(v) {
  let array = mutable []
  array->append(v)
  return array
}
```

Crux infers that the type of the array elements must match the type of the argument, so the
full type annotation is:

```crux
fun wrapInArray<T>(v: T): mutable [T] {
  ...
}
```

Now let's consider a function that appends an argument and a String:

```
fun makeWeirdArray2(v) {
  let array = mutable []
  array->append(v)
  array->append("some string")
  return array
}
```

Crux creates an array with a yet-unknown element type.  Then it sees that we're appending
an argument, so it infers that the argument's type must match the array's element type.
When we then append a `String`, it now knows the element type and the argument type must also
be `String`, producing a final function type of:

```
fun makeWeirdArray2(v: String): mutable [String] {
  ...
}
```

The idea is that, as the program is typechecked (in one pass), Crux collects facts about values and types.
It unifies those facts (producing an error if they're inconsistent with each other) to infer the final types
of functions and values.
