// const string1 = new String(341241);
// const str2 = new String(null);
// console.log(string1.charAt(3));
// console.log(str2);

// let str5 =
//   "isfi \
//   ijwaf \
//   idfjqoo";
// console.log(str5);

const string = "The quick fox jumps over the lazy dog";
console.log(string.endsWith("jumps" ,19));

console.log(string.startsWith("The" , 0));

console.log(string.includes("jumps", 0));

const string2 = "The quick fox jumps over the lazy dog";
console.log(string2.charCodeAt(0));
console.log(string2.indexOf("fox", 5));
console.log(string2.lastIndexOf("the",50));

// console.log(string2.length);

// console.log(string2.split(" ", 2));

// console.log(string2[5]);
// string2[5] = "h";
// console.log(string2[5]);

// console.log(string2.repeat(3));

// console.log(string2.replace("fox", "tiger"));
// console.log(string2.replaceAll(/The/ig, "A"));

// console.log(string2.slice(5,11));  //uick f

console.log(string2.search("f"));

console.log(string2.match("the"));
// console.log(string2.match(/the/ig));

// console.log(string2.substring(2, 9));

// const string3 = "        the quick fox jumps over the lazy dog  !  ";
// console.log(string3.trim());
// console.log(string3.trimStart());
// console.log(string3.trimEnd());

const string4 = "325532";
console.log(string4.valueOf());