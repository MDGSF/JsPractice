
/*
async/await hell means: use await everywhere.
(async () => {
    const pizzaData = await getPizzaData();
    const drinkData = await getDrinkData();
    const chosenPizza = choosePizza();
    const chosenDrink = chooseDrink();
    await addPizzaToCart(chosenPizza);
    await addDrinkToCart(chosenDrink);
    orderItems();
})()
*/

async function selectPizza() {
    const pizzaData = await getPizzaData();
    const chosenPizza = choosePizza();
    await addPizzaToCart(chosenPizza);
}

async function selectDrink() {
    const drinkData = await getDrinkData();
    const chosenDrink = chooseDrink();
    await addDrinkToCart(chosenDrink);
}

// call function 
(async() => {
    const pizzaPromise = selectPizza();
    const drinkPromise = selectDrink();
    await pizzaPromise;
    await drinkPromise;
    orderItems();
})()

// other call function
(async() => {
    Promise.all([selectPizza(), selectDrink()]).then(orderItems);
})()