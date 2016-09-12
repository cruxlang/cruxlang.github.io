---
layout: page
title: Why?
permalink: /why/
order: 1
---

We're in the midst of a programming language renaissance, with a host of new
languages that emphasize ergonomics, performance, and correctness.  For programming
close to the metal, there's Rust.  On Apple devices, we have Swift.  The CLR and JVM
offer a variety of good choices.  Haskell is wonderful for high-performance, concurrent
backend services.

But the JavaScript ecosystem doesn't yet have anything at this level.  TypeScript
is wonderful, and I've enjoyed shipping applications with it, but as an application
starts to reach tens of thousands of lines of code, its limitations start to show.

TypeScript's has committed to
[tracking JavaScript's semantics](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)
-- a perfectly valid decision.  That is, the JavaScript produced by the TypeScript compiler is nearly
one-to-one.  Unfortunately, this implies that TypeScript lacks some useful cost-free abstractions,
like strong type aliases (aka newtypes) and type-directed name resolution (like traits).  TypeScript
does not use type knowledge to generate code, so you can't compare tuples with `<`, for example.

In addition, there are situations where TypeScript is
[intentionally unsound](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
for convenience.

In TypeScript, sometimes there are situations where type annotations are necessary even though
an accurate type /could/ be inferred.

We created Crux to solve these problems, while not tying ourselves to JavaScript semantics.
While far off at this point, it's easy to imagine a native parallel output mode for Crux so you
could share code between the frontend and backend.   You could benefit from the confidence and
performance of a static language like Crux, while also running the same code across multiple
backend threads.
