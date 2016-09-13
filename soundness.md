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
type checks.  It's a different goal: rather than trying to prove the absence of type
errors, gradual typing systems try uncover the existence of possible type errors
(but admit that they won't uncover every possible type error).  We're thrilled to see
progress in this area.  [TypeScript](https://www.typescriptlang.org/), [mypy](http://mypy-lang.org/),
[Dialyzer](http://erlang.org/doc/man/dialyzer.html), and [Flow](https://flowtype.org) are
gradual typing systems worth looking at.

Why does Crux aim for soundness instead of gradual typing?  In a rich, sound type system like, for
example, Haskell's, programmers can accurately refactor large codebases with utmost confidence:
leaning on the compiler (for a large class of code changes) is guaranteed to result in a correct
program.  This benefit alone is worth striving for.  Additionally, when a type system provides
guarantees, the optimizer has more opportunities to improve the generated code.  (This, by the way,
is how a lazy, "boxy" language like Haskell can be made fast at all.)

And even though Crux's type system is sound, it is not onerous to use.  Because Crux has 
[full bidirectional type inference](/inference), it never _requires_ the use of type annotations,
and thus feels like a dynamic language while still providing type safety.  Of course, if you want
to use type annotations on function parameters, return values, or local variables for your
own sanity or for documentation purposes, then by all means.  :)
