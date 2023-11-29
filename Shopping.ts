import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const prompt = (question: string): Promise<string> => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};
const Pay_method = async () => {
    const get = await prompt('How would you like to pay? 1.Cash 2.CreditCard :');
    if(get=== "Cash"){
        console.log("You choose to pay in Cash");
        console.log("Thank you for choosing us");
    }
    else if(get==="CreditCard"){
        const get1= await prompt('Please enter your Credit card number:');
        console.log(`Your credit Card Number is : ${get1}`);
        const get2=await prompt('Enter Pin:');
        console.log(`Pin Entered Correctly`);
        console.log("Transaction Successful");
        console.log("Thank you for choosing us");
    }
    else{
        console.log("Invalid input");
    }
    rl.close();
};
const grocery = async () => {
    const answer = await prompt('Do you want to choose fruits or vegetables? Enter "fruits" or "vegetables": ');

    if (answer === 'fruits') {
        console.log('***********************Fruits************************');

        //array containing objects of fruits
        const fruitList = [
            { item: "apple", price: 12, quantity: "kg" },
            { item: "banana", price: 10, quantity: "dozen" },
            { item: "cherry", price: 22, quantity: "kg" }
        ];
        //array contain price of fruits
        let pr: number[] = [12, 10, 22];
        //loop to display fruits
        for (const fru of fruitList) {
            console.log(`${fru.item} - ${fru.price}$/${fru.quantity}`);
        }
       //ask which fruit to buy
        const ans = await prompt('Which fruit you want to buy? Enter Name of fruits: ');

        if (ans === "apple") {

            const qty = await prompt('Enter Quantity: '); //ask quantity
            console.log(`Item: ${ans}  Quantity:${qty}`);
            let total = pr[0] * parseInt(qty, 10);

            if(total<=50){ //display total
            console.log(`Total Bill: ${total}`);
            Pay_method();
            }
            else if(total>50){ //apply discount
                console.log(`Total Bill: ${total}`);
                total*=0.7;
                console.log(`Discounted Bill: ${total}`);
                Pay_method();
            }
        } if (ans === "banana") {

            const qty = await prompt('Enter Quantity: ');
            console.log(`Item: ${ans} Quantity:${qty}`);
            let total = pr[1] * parseInt(qty, 10);

            if(total<=50){ //display total
                console.log(`Total Bill: ${total}`);
                Pay_method();
                }
                else if(total>50){ //apply discount
                    console.log(`Total Bill: ${total}`);
                    total*=0.7;
                    console.log(`Discounted Bill: ${total}`);
                    Pay_method();
                }
        } if (ans === "cherry") {

            const qty = await prompt('Enter Quantity: ');
            console.log(`Item: ${ans} Quantity:${qty}`);
            let total = pr[2] * parseInt(qty, 10);

            if(total<=50){ //display total
                console.log(`Total Bill: ${total}`);
                Pay_method();
                }
                else if(total>50){ //apply discount
                    console.log(`Total Bill: ${total}`);
                    total*=0.7;
                    console.log(`Discounted Bill: ${total}`);
                    Pay_method();
                }
        } 
    } if (answer === 'vegetables') {
        console.log('***********************Vegetables************************');
        //array containing objects of vegetables
        const VegList = [
            { item: "cabbage", price: 22, quantity: "kg" },
            { item: "onion", price: 30, quantity: "kg" },
            { item: "tomato", price: 12, quantity: "kg" }
        ];
        //array containing price of vegetables
        let pr: number[] = [22, 30, 12];
        //loop to display array
        for (const vegg of VegList) {
            console.log(`${vegg.item} - ${vegg.price}$/${vegg.quantity}`);
        }
        //ask which vegetable to buy
        const ans = await prompt('Which vegetable you want to buy? Enter Name of vegetables: ');

        if (ans === "cabbage") {

            const qty = await prompt('Enter Quantity: '); //ask quantity
            console.log(`Item: ${ans}  Quantity:${qty}`);
            let total = pr[0] * parseInt(qty, 10);

            if(total<=50){ //display total
                console.log(`Total Bill: ${total}`);
                Pay_method();
                }
                else if(total>50){ //apply discount
                    console.log(`Total Bill: ${total}`);
                    total*=0.7;
                    console.log(`Discounted Bill: ${total}`);
                    Pay_method();
                }
        } if (ans === "onion") {

            const qty = await prompt('Enter Quantity: ');
            console.log(`Item: ${ans} Quantity:${qty}`);
            let total = pr[1] * parseInt(qty, 10);

            if(total<=50){ //display total
                console.log(`Total Bill: ${total}`);
                Pay_method();
                }
                else if(total>50){ //apply discount
                    console.log(`Total Bill: ${total}`);
                    total*=0.7;
                    console.log(`Discounted Bill: ${total}`);
                    Pay_method();
                }
        } if (ans === "tomato") {
            const qty = await prompt('Enter Quantity: ');
            console.log(`Item: ${ans} Quantity:${qty}`);
            let total = pr[2] * parseInt(qty, 10);

            if(total<=50){ //display total
                console.log(`Total Bill: ${total}`);
                Pay_method();
                }
                else if(total>50){ //apply discount
                    console.log(`Total Bill: ${total}`);
                    total*=0.7;
                    console.log(`Discounted Bill: ${total}`);
                    Pay_method();
                }
        } 
    }
    await Pay_method();
    rl.close();
};
grocery();
