# Structs

A `struct` in Sway is equivalent to an `Object` in TypeScript, where the property names and types must match what is defined in Sway.

Here is an example of the `struct` in Sway:



And the same structure represented in TypeScript:

```ts
type ComplexStruct {
    foo: u8,
    bar: u64,
    baz: str[9],
}

let myStruct: ComplexStruct = {
  foo: 1,
  bar: 11337n,
  baz: "123456789",
};
```
