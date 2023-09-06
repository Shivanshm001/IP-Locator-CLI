const axios = require('axios');
const { program } = require('commander');
const colors = require('colors');

program
    .version("1.0.0")
    .description("An IP address locator CLI tool.")
    .option("-i, --ip-address <ipAddress>", "Specify the IP address")
    .action(async (args) => {
        const { ipAddress } = args;
        console.log(colors.blue("Fetching info..."));
        try {
            let response;
            if (ipAddress) response = await axios.get(`https://ipinfo.io/${ipAddress}/json`);
            else response = await axios.get(`https://ipinfo.io/`);

            const { data } = response;
            console.log(colors.yellow(`IP : ${data.ip}`));
            console.log(colors.yellow(`City : ${data.city}`));
            console.log(colors.yellow(`Region : ${data.region}`));
            console.log(colors.yellow(`Country : ${data.country}`));
            console.log(colors.yellow(`Postal : ${data.postal}`));
            console.log(colors.yellow(`Longitude/Latitude : ${data.loc}`));
            console.log(colors.yellow(`ISP : ${data.org}`));
        } catch (error) {
            console.log(colors.red(`Error locating IP address!`));
            console.error(error.message);
            process.exit(1);
        }
    });

program.parse(process.argv);