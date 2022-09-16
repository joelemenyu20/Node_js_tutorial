if(process.argv.length <= 2){
    console.log('Profile information is required:');

    console.log(process.argv);
} else {
    // const profile = JSON.stringify(process.argv.slice(2), null, 2);

    const profile = process.argv.slice(2);

    // console.log(profile);

    profile.forEach((item) => {
        // console.log(item.replace(/"/g, ""));

        const [key, value] = item.split("=");

        if (key === "name"){

            console.log(`Name: ${value}`);
        }


    });
}