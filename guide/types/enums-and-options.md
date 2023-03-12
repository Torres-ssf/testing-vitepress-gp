# Enums

Here are some examples of `Enums` in Sway:



And the same structures represented in TypeScript, note that an `Enum` is essentially an `Object` in TypeScript.

Here is `SmallEnum`



Here is `BigEnum`



## Options

Sway supports the concept of the `Option` container, which allows for a variable to be either set with an expected value or to be exclusively marked as "no-value" (with an `undefined` in the case of TypeScript).

The `Option` is a special wrapper type of `Enum`.

This example shows that an input param with type `OptionalStringInput` can either be a `string` value or `undefined`

```ts
type OptionalStringInput = Option<string>;

let someInput: OptionalStringInput = "dogs";
let noneInput: OptionalStringInput = undefined;
```

To help us understand how the TS-SDK handles Optional params, take this Sway method that expects three optional params which it attempts to add together.



Using this Contract, our Optional params can either be the values expected, like so:



Or we can supply a partial list, where unsupplied values are converted to `Option<None>` (or `undefined`):


