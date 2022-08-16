// problem-1: anaToVori
function anaToVori(ana) {
    // error handling start
    if (ana == 0) {
        return 'please enter a valid quantity';
    }
    // 16 ana = 1 vori
    let vori = ana / 16;
    return vori;
}
let myAna = 32;
let vori = anaToVori(myAna);
console.log(vori);



// problem-2: pandaCost
function pandaCost(shingaraQuantity, somusaQuantity, jilapiQuantity) {
    // error handling start
    if (shingaraQuantity, somusaQuantity, jilapiQuantity == 0) {
        return 'please enter a valid quantity';
    }
    // error handling end
    ShingaraPrice = 7;
    SomusaPrice = 10;
    JilapiPrice = 15;

    // allFood = foodQuantity * perFoodPrice
    const allShingaraPrice = shingaraQuantity * ShingaraPrice;
    const allSomusaPrice = somusaQuantity * SomusaPrice;
    const allJilapiPrice = jilapiQuantity * JilapiPrice;
    // totalFoodCost = sum of all food
    const totalPrice = allShingaraPrice + allSomusaPrice + allJilapiPrice;
    return totalPrice;
}
const needFood = pandaCost(0, 0, 5)
console.log(needFood);



// // problem-3: picnicBudget
function picnicBudget(persons) {
    const budgetForFirst100Persons = 5000;
    const budgetForSecond100Persons = 4000;
    const budgetForRestPersons = 3000;
    // error handling start
    if (persons == 0) {
        return 'no bill will be counted';
    }
    // error handling end
    // condition start
    // first condition
    if (persons <= 100) {
        const hotelBill = persons * budgetForFirst100Persons;
        return hotelBill;
    }
    // second condition
    else if (persons <= 200) {
        const firstHotelBill = 100 * budgetForFirst100Persons;
        const restPersons = persons - 100;
        const secondHotelBill = restPersons * budgetForSecond100Persons;
        const totalHotelBill = firstHotelBill + secondHotelBill;
        return totalHotelBill;
    }
    // last condition
    else {
        const firstHotelBill = 100 * budgetForFirst100Persons;
        const secondHotelBill = 100 * budgetForSecond100Persons;
        const restPersons = persons - 200;
        const restHotelBill = restPersons * budgetForRestPersons;
        const totalHotelBill = firstHotelBill + secondHotelBill + restHotelBill;
        return totalHotelBill;
    }
}
const totalBill = picnicBudget(160)
console.log(totalBill);





// problem-4: oddFriend
function oddFriend(allfriends) {
    let oddName = ''
    for (let i = 0; i < allfriends.length; i++) {
        let element = allfriends[i];
        // error handling start
        if (allfriends == 0) {
            return 'i have no friend';
        }
        // error handling end
        // conditions start
        if ((element.length % 2) != 0) {
            oddName = element;
            return oddName;
        }
    }

}
let friendsName = ['rahman', 'hasib', 'shoumik', 'hasib', 'shoumik', 'fahim', 'jaky', 'hasib',]
const result = oddFriend(friendsName);
console.log(result);
