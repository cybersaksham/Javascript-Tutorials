const str = "hello6 this is hello world";

const r1 = /h[a-z]lo/; // means h_lo where _ have character from a to z
console.log(r1.test(str)); // false

const r2 = /h[e-t][klb]lo/; // means h12lo where 1 have character from e to t & 2 have character from k, l or b
console.log(r2.test(str)); // true

const r3 = /he[^klb]lo/; // means he_lo where _ does not have characters from k, l or b
console.log(r3.test(str)); // false

const r4 = /hello[5-9]/; // means hello_ where _ does not have numbers from 5 to 9
console.log(r4.test(str)); // true