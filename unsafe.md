---
layout: page
title: Unsafe
permalink: /unsafe/
---

Crux is [sound](/sound), but there exists no type system that can prove the
correctness of every valid program.  Thus, one of the following must be true:
either the type system will reject valid programs, or the type system will not
catch all type errors.

Therefore, it is sometimes necessary to subvert the type system.  Crux provides
several clearly-marked features for doing so.

`_unsafe_coerce` allows interpreting a value of any type as a value of any other
type, something like a cast in C.

`_unsafe_js` allows evaluating an arbitrary string of JavaScript as any type,
which is useful for defining primitive functions on top of JavaScript.


TODO: should I talk about this?

These unsafe mechanisms are used to implement higher-level, type-safe APIs.

Every so often someone will argue "If your libraries are built on unsafe functions,
then they can't be safe!"  TODO: gently describe why that's a fallacy
