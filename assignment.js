
function kilometerToMeter(km) {
    if (km < 1) {
        return console.log("You can't input a value less than one!")
    }

    var meter = km * 1000;
    return meter;
}


function budgetCalculator(watch, phone, laptop) {
    var budgetForWatch = watch * 50;
    var budgetForPhone = phone * 100;
    var budgetForLaptop = laptop * 500;
    var totalBudget = budgetForWatch + budgetForPhone + budgetForLaptop;
    return totalBudget;
}


function hotelCost(days) {
    if (days < 1) {
        return console.log("You can't input a value less than one!")
    }

    var cost = 0;
    if (days <= 10) {
        cost = days * 100;

    } else if (days > 10 && days <= 20) {
        var firstTenDaysCost = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDaysCost = remainingDays * (100 - 20);
        cost = firstTenDaysCost + secondTenDaysCost;

    } else {
        var firstTenDaysCost = 10 * 100;
        var secondTenDaysCost = 10 * 80;
        var remainingDays = days - 20;
        var thirdTenDaysCost = remainingDays * (100 - 50);
        cost = firstTenDaysCost + secondTenDaysCost + thirdTenDaysCost;
    }

    return cost;
}


function megaFriend(friendsArray) {

    var megaName = friendsArray[0];

    for (let i = 0; i < friendsArray.length; i++) {

        var friendName = friendsArray[i];
        if (typeof friendName !== 'string') {
            return console.log('Please provide a string value!')
        }

        if (friendName.length > megaName.length) {
            megaName = friendName;
        }
    }

    return megaName;
}
