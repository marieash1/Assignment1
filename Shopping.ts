import inquirer from "inquirer";
async function Pay_method(){
const answer= await inquirer.prompt([{
    type:"input",
        name:"get",
        message:"How would you like to pay? 1.Cash 2.CreditCard"},]);
    if(answer.get=== "Cash"){
        console.log("You choose to pay in Cash");
        console.log("Thank you for choosing us");
    }
    else if(answer.get==="CreditCard"){
        const get1= await inquirer.prompt([{
            type:"input",
            name:"getCC",
            message:"Please enter your Credit card number:"},{
        type: "input",
        name:"getPin",
        message:"Enter Pin"},]);
        console.log(`Your credit Card Number is : ${get1.getCC}`);
        console.log(`Pin Entered Correctly`);
        console.log("Transaction Successful");
        console.log("Thank you for choosing us");
     }
    else{
        console.log("Invalid input");
    }
}
async function grocery(){
     const answer1 = await inquirer.prompt([{
        type:"input",
        name:"getFV",
        message:'Do you want to choose fruits or vegetables? Enter "fruits" or "vegetables"'
     }, ])

    if (answer1.getFV === 'fruits') {
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
            console.log(`${fru.item} - ${fru.price}$/ ${fru.quantity}`);
        }
//        //ask which fruit to buy
        const ans = await inquirer.prompt([{
            type:'input',
            name:'getFrt',
            message:'Which fruit you want to buy? Enter Name of fruits: '}, ]);

        if (ans.getFrt === "apple") {

            const qty = await inquirer.prompt([{
                type:'input',
                name:'getQty',
                message:'Enter Quantity: '}, ]); //ask quantity
            console.log(`Item: ${ans.getFrt}  Quantity:${qty.getQty}`);
            let total = pr[0] * parseInt(qty.getQty, 10);

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
        } if (ans.getFrt === "banana") {

            const qty = await inquirer.prompt([{
                type:'input',
                name:'getQty',
                message:'Enter Quantity: '}, ]); //ask quantity
            console.log(`Item: ${ans.getFrt}  Quantity:${qty.getQty}`);
            let total = pr[1] * parseInt(qty.getQty, 10);

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
        } if (ans.getFrt === "cherry") {

            const qty = await inquirer.prompt([{
                type:'input',
                name:'getQty',
                message:'Enter Quantity: '}, ]); //ask quantity
            console.log(`Item: ${ans.getFrt}  Quantity:${qty.getQty}`);
            let total = pr[1] * parseInt(qty.getQty, 10);

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
    if (answer1.getFV === 'vegetables') {
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
         const ans = await inquirer.prompt([{
            type:'input',
            name:'getVeg',
            message:'Which vegetable you want to buy? Enter Name of Vegetable: '}, ]);
        if (ans.getVeg === "cabbage") {

            const qty = await inquirer.prompt([{
                type:'input',
                name:'getQty',
                message:'Enter Quantity: '}, ]); //ask quantity
            console.log(`Item: ${ans.getFrt}  Quantity:${qty.getQty}`);
            let total = pr[1] * parseInt(qty.getQty, 10);
            
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
        } if (ans.getVeg === "onion") {

             const qty = await inquirer.prompt([{
    type:'input',
    name:'getQty',
    message:'Enter Quantity: '}, ]); //ask quantity
console.log(`Item: ${ans.getFrt}  Quantity:${qty.getQty}`);
let total = pr[1] * parseInt(qty.getQty, 10);

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
        } if (ans.getVeg === "tomato") {          
            const qty = await inquirer.prompt([{
            type:'input',
            name:'getQty',
            message:'Enter Quantity: '}, ]); //ask quantity
        console.log(`Item: ${ans.getFrt}  Quantity:${qty.getQty}`);
        let total = pr[1] * parseInt(qty.getQty, 10);
        
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
        }
 grocery();
