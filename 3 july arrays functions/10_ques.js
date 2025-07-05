
// // What’s the difference between Array.prototype.forEach and Array.prototype.map in terms of return value and use-case?


// Array.prototype.forEach() और Array.prototype.map() दोनों JavaScript में arrays पर loop करने के लिए इस्तेमाल होते हैं, लेकिन इन दोनों में return value और use-case के मामले में ज़मीन-आसमान का फर्क है।

// 🔁 1. forEach()
// 📌 Return Value:
// Kuch bhi return nahi karta (undefined).

// Sirf har element ke liye callback function chalata hai.

// 🎯 Use-case:
// Jab aapko array ke elements pe koi side-effect operation perform karna ho, जैसे:

// Console log karna

// DOM update karna

// API call bhejna

// ✅ Example:

// const arr = [1, 2, 3];
// arr.forEach((num) => {
//   console.log(num * 2);
// });

// // Output: 2, 4, 6
// But forEach() khud koi new array return nahi karta.

// 🔁 2. map()
// 📌 Return Value:
// Naya array return karta hai jisme har element callback ke return value ka result hota hai.

// 🎯 Use-case:
// Jab aapko existing array ko transform karke ek naya array banana ho.

// ✅ Example:

// const arr = [1, 2, 3];
// const doubled = arr.map((num) => num * 2);
// console.log(doubled);
 
// // Output: [2, 4, 6]


