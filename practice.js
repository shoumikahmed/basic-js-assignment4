// // // 3.
// function paperRequirements(firstBookWantCopy, secondBookWantCopy, thirdBookWantCopy) {
//     var firstBookPageRequirment = 100;
//     var secondBookPageRequirment = 200;
//     var thirdBookPageRequirment = 300;
//     const firstBook = firstBookWantCopy * firstBookPageRequirment;
//     const secondBook = secondBookWantCopy * secondBookPageRequirment;
//     const thirdBook = thirdBookWantCopy * thirdBookPageRequirment;
//     const totalpage = firstBook + secondBook + thirdBook;
//     return totalpage;
// }
// const bookCopyNeeded = paperRequirements(10, 20, 30)
// console.log(bookCopyNeeded);

// // 4.
// let frndsName = ['mahfuzur rahman', 'hasibul islam hasib', 'ahotesham jaky']

// function bestFriend(allfrnds) {
//     let largestName = ''
//     for (let i = 0; i < allfrnds.length; i++) {
//         let element = allfrnds[i];
//         if (element.length > largestName.length) {
//             largestName = element;
//         }
//     }
//     return largestName;
// }
// const result = bestFriend(frndsName);
// console.log(result);






// function mularDam(quantity) {
//     if (typeof quantity != "number") {
//         return "Please enter a valid quantity";
//     }
//     else if (quantity <= 0) {
//         return "Please enter a valid quantity";
//     }
//     else if (quantity > 20) {
//         return "Please want less than that";
//     }

//     let price = 0;
//     if (quantity <= 2) {
//         price = quantity * 30;
//     } else {
//         price = quantity * 25;
//     }
//     return price;
// }

// console.log(mularDam(30))



// function compare(a, b) {
//     if (a == b) {
//         return true;
// //     } else {
// //         return false;
// //     }
// // }
// // const result = compare(15, "15");
// // console.log(result);



// console.log("123" + 123);

// // let a =”hi”
// //     let b =”there”
// //     console.log(a + b)

// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(array[i]);
// }

<p id="name">Programming Hero</p>


const nameOfOrganization = document.getElementById("name").value;

console.log(nameOfOrganization);

