---
layout: page
title: Why?
permalink: /why/
order: 1
---

We're in the midst of a programming language renaissance, with a host of new
languages that emphasize ergonomics, performance, and correctness.  For programming
close to the metal, there's Rust.  On Apple devices, there's Swift.  The CLR and JVM
offer a variety of good choices.  Haskell is wonderful for high-performance, concurrent
backend services.

But the JavaScript ecosystem doesn't yet have anything at this level.  TypeScript
is wonderful, and I've enjoyed shipping applications with it, but as an application
starts to reach tens of thousands of lines of code, its limitations start to show.

TypeScript's has committed to
[tracking JavaScript's semantics](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md)
(a perfectly valid decision).  However, therefore, TypeScript offers no
mechanism for cost-free abstractions (like new nominal type wrappers) and will never
use type knowledge to generate appropriate code.  You can't compare tuples with `<`,
for example.

In addition, there are situations where TypeScript is
[intentionally unsound](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
for convenience.

Finally, there are situations where type annotations are necessary even though
an accurate type /could/ be inferred.

Again, TypeScript is a huge step forward for the JavaScript community, but we created
Crux so you can continue to have confidence and performance even after applications
grow to hundreds of thousands of lines of code.
