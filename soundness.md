---
layout: page
title: Soundness
permalink: /soundness/
---

Crux is sound.  In a nutshell, soundness means that if the type checker passes, the
program has no violations of the type system.  This is not a property that, for
example, C++ or TypeScript have (see TypeScript's
[a note on soundness](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)).

Assuming no [explicitly unsafe constructs](/unsafe) are used, the program will never exhibit
errors like 'undefined is not a function' or 'cannot read property of null', and you'll
never accidentally add a number to a string.

How does soundness related to gradual typing?  Gradual typing is an active area of
programming language research where, instead of trying to prove the absence of type
errors, you're trying to take a large existing codebase (usually in a language like
Python, JavaScript, or Erlang), and, over time, opt into increasingly strict
type checks.  We're thrilled to see progress in this area.  However, gradual typing
doesn't carry the same kind of guarantees that soundness does when refactoring code.

TODO: link Dialyzer, MyPy, Flow, TypeScript

Crux takes a different approach: [full bidirectional type inference](/inference).  Because Crux
never requires the use of type annotations, it feels like a dynamic language while
still providing type safety.
