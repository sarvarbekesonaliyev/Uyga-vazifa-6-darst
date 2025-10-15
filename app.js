// 1. map - Har bir sonni 2 ga ko‘paytirish
const arr1 = [1, 2, 3, 4];
const res1 = arr1.map(num => num * 2);
console.log("1:", res1); // [2, 4, 6, 8]

// 2. map - Har bir so‘z uzunligini olish
const arr2 = ["apple", "banana", "kiwi"];
const res2 = arr2.map(word => word.length);
console.log("2:", res2); // [5, 6, 4]

// 3. map - Sonlarni stringga o‘girish
const arr3 = [10, 20, 30];
const res3 = arr3.map(String);
console.log("3:", res3); // ["10", "20", "30"]

// 4. filter - Juft sonlarni ajratish
const arr4 = [1, 2, 3, 4, 5, 6];
const res4 = arr4.filter(num => num % 2 === 0);
console.log("4:", res4); // [2, 4, 6]

// 5. filter - 5 ta harfdan uzun so‘zlar
const arr5 = ["cat", "tiger", "elephant", "dog"];
const res5 = arr5.filter(word => word.length > 5);
console.log("5:", res5); // ["tiger", "elephant"]

// 6. filter - Musbat sonlarni ajratish
const arr6 = [-2, -1, 0, 1, 2, 3];
const res6 = arr6.filter(num => num > 0);
console.log("6:", res6); // [1, 2, 3]

// 7. find - Birinchi juft sonni topish
const arr7 = [1, 3, 7, 8, 10];
const res7 = arr7.find(num => num % 2 === 0);
console.log("7:", res7); // 8

// 8. find - "b" bilan boshlanadigan so‘zni topish
const arr8 = ["cat", "bat", "ball", "apple"];
const res8 = arr8.find(word => word.startsWith("b"));
console.log("8:", res8); // "bat"

// 9. some - 0 dan kichik son bormi?
const arr9 = [3, 5, -2, 7];
const res9 = arr9.some(num => num < 0);
console.log("9:", res9); // true

// 10. every - Barcha sonlar musbatmi?
const arr10 = [2, 4, 6, 8];
const res10 = arr10.every(num => num > 0);
console.log("10:", res10); // true

// 11. every - So‘z uzunligi 3 dan katta
const arr11 = ["cat", "dog", "lion"];
const res11 = arr11.every(word => word.length > 3);
console.log("11:", res11); // false

// 12. forEach - Har bir elementni 2 ga ko‘paytirib chiqish
const arr12 = [1, 2, 3];
console.log("12:");
arr12.forEach(num => console.log(num * 2)); // 2, 4, 6

// 13. reduce - Sonlar yig‘indisi
const arr13 = [1, 2, 3, 4];
const res13 = arr13.reduce((sum, num) => sum + num, 0);
console.log("13:", res13); // 10

// 14. reduce - Eng katta son
const arr14 = [5, 8, 2, 10, 3];
const res14 = arr14.reduce((max, num) => num > max ? num : max);
console.log("14:", res14); // 10

// 15. sort - O‘sish tartibida saralash
const arr15 = [4, 2, 8, 1];
const res15 = arr15.sort((a, b) => a - b);
console.log("15:", res15); // [1, 2, 4, 8]

// 16. sort - So‘zlarni alifbo tartibida
const arr16 = ["banana", "apple", "cherry"];
const res16 = arr16.sort();
console.log("16:", res16); // ["apple", "banana", "cherry"]

// 17. splice - 2-chi indeksdan 2 ta o‘chirish
const arr17 = [10, 20, 30, 40, 50];
const deleted17 = arr17.splice(2, 2);
console.log("17:", "O‘chirilgan:", deleted17, "Qolgan:", arr17);
// O‘chirilgan [30, 40], Qolgan [10, 20, 50]

// 18. splice - 1-chi indeksga "orange" qo‘shish
const arr18 = ["apple", "banana"];
arr18.splice(1, 0, "orange");
console.log("18:", arr18); // ["apple", "orange", "banana"]

// 19. map + filter - Juft sonlarni 2 ga ko‘paytirish
const arr19 = [1, 2, 3, 4, 5];
const res19 = arr19.filter(n => n % 2 === 0).map(n => n * 2);
console.log("19:", res19); // [4, 8]

// 20. reduce - O‘rtacha qiymatni topish
const arr20 = [10, 20, 30, 40];
const res20 = arr20.reduce((sum, num) => sum + num, 0) / arr20.length;
console.log("20:", res20); // 25
