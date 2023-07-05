# String modifier

## Install

```bash
npm i -E string-modifier
```

## Import

```js
import convertTo from "string-modifier"
```

## Examples

```js
const textToConvert = "Some long text to convert"

const camelText = convertTo.camelCase(textToConvert) // => someLongTextToConvert

const pascalText = convertTo.pascalCase(textToConvert) // => SomeLongTextToConvert

const kebabText = convertTo.kebabCase(textToConvert) // => some-long-text-to-convert

const snakeText = convertTo.snakeCase(textToConvert) // => some_long_text_to_convert
```

## Special Thanks

Special thanks to [lombervid](https://github.com/lombervid) who provided ideas for functionality that could be added to the project
