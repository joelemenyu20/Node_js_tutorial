if(process.argv.length <= 2){
    console.log('You did not provide a shopping list');

    console.log(process.argv);
} else {

    const items = process.argv.slice(2);

    console.log("My shopping list is:");
    
    let itemNumber = 1;

    items.forEach((item) => {
        console.log(`${itemNumber}: ${item}`);

        itemNumber++;
    });
}
    
