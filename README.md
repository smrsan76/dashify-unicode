# dashify-unicode
> Convert a camelcase or space-separated string to a dash-separated string.

[![NPM](https://nodei.co/npm/dashify-unicode.png)](https://nodei.co/npm/dashify-unicode/)

a Dashifyer for JavaScript that Accepts Unicode Characters ( not just ASCII chars )

It is similar to [dashify](https://npmjs.com/dashify) package, but
it can also convert other characters in addition to ASCII chars.

## Install
```sh
$ npm install dashify --save
```

## Usage
```javascript
const dashify = require("dashify");
const dashifyUnicode = require("dashify-unicode");

dashify("سلام، خوبی !?");
//=> ""
dashifyUnicode("سلام، خوبی !?");
//=> "سلام،-خوبی"


dashify("Hello دنیا !");
//=> "hello"
dashifyUnicode("Hello دنیا !");
//=> "hello-دنیا"

/*** They are similar in English ***/
dashify('fooBar');
//=> 'foo-bar'
dashify('fooBarBaz');
//=> 'foo-bar-baz'
dashify('foo bar');
//=> 'foo-bar'
dashify('foo barBaz');
//=> 'foo-bar-baz'
dashify('foo barBaz quux');
//=> 'foo-bar-baz-quux'

dashifyUnicode('fooBar');
//=> 'foo-bar'
dashifyUnicode('fooBarBaz');
//=> 'foo-bar-baz'
dashifyUnicode('foo bar');
//=> 'foo-bar'
dashifyUnicode('foo barBaz');
//=> 'foo-bar-baz'
dashifyUnicode('foo barBaz quux');
//=> 'foo-bar-baz-quux'
```

Thanks to [@jonschlinkert](https://www.npmjs.com/~jonschlinkert)