/*!
 * dashify-unicode <https://github.com/smrsan76/dashify-unicode>
 *
 * Copyright (c) 2017 smrsan76.
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function dashifyUnicode(str) {
  if (typeof str !== "string") {
    throw new TypeError("expected a string");
  }

  // 1. Convert Camel-Case ( ASCII ) into Dash-Separated
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");

  // 2. Convert All Non-Alphabetic ( ASCII ) Characters into (-) Separators
  // Thanks to <http://www.theasciicode.com.ar/>
  str = str.replace(/[\s\t\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF]+/g, "-");

  // 3. Remove The Last and The First (-) Separators
  str = str.replace(/^-+|-+$/g, "");

  // 4. Make All English-Alphabetical Characters Lower Case
  str = str.toLowerCase();

  // 5. Remove Double Dashes
  str = str.replace(/-{2,}/g, "-");

  return str;
};
