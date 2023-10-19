/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:


***********************************************************************/


function reverse(str) {
if (str.length <= 1) return str;

return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
