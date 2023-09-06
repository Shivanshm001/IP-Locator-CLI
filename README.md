# IP Address Locator CLI Tool

An IP address locator CLI tool built using Node.js and the Commander library. This tool allows you to retrieve location information for a given IP address or for your own IP address.

## Features

- Fetches and displays geographical and ISP information for an IP address.
- Supports specifying the target IP address as a command-line argument.
- Defaults to locating your own IP address if no IP address is specified.

## Prerequisites

- Before using the tool, make sure you have **Node.js** installed on your machine.
- Get if from the official website [here](https://nodejs.org/en).

## Installation


1. Clone the repository:

   ```bash
   git clone https://github.com/Shivanshm001/IP-Locator-CLI.git
    ```
2. Navigate to the repository directory:
   ```bash
   cd IP-Locator-CLI
    ```
3. Install dependencies
   ```bash
   npm install
    ```
## Usage

### Options

 ```bash
  - -V, --version                 Output the version number.
  - -i, --ip-address <ip_address>  Specify the IP address.
  - -h, --help                    Display help for command.
```
 - To retrieve information about an IP address, use the following command :
  
   ```bash
   node locator.js -i <ip_address>
   ```

   - Replace ```<ip_address>``` with the IP address you want to locate.
   - If ```-i``` option is ommited, the tool will fetch information about your own IP address.

### Output

    The tool will fetch and display the following information for the specified or default IP address:

    - IP address
    - City
    - Region
    - Country
    - Postal Code
    - Longitude and latitude
    - Internet Service Provider (ISP)


### Example Usage

 1. Look up information about a specific IP address:
  
    ```bash
    node locator.js -i 8.8.8.8
    ```

 2. Look up information for your own IP address:
    
    ```bash
    node locator.js
    ```

**Example Output**

Upon successful execution, the tool will display information about the specified IP address, 
similar to the following:

  ```bash
  IP : 8.8.8.8
  City : Mountain View
  Region : California
  Country : US
  Postal : 94035
  Longitude/Latitude : 37.3860,-122.0838
  ISP : AS15169 Google LLC
  ```

## Error Handling

If there is an error while locating the IP address, the tool will display an error message and provide details about the error.

## License

This IP Address Locator CLI Tool is open-source software released under the MIT License. 
You can find the full license text in the [LICENSE](https://github.com/Shivanshm001/IP-Locator-CLI/blob/main/LICENSE) file.

## Acknowledgements
    
- This tool was created using Node.js and the [ipinfo.io](https://ipinfo.io/) API.
- It was developed as a practical example of using Node.js and command-line interfaces (CLI).
  
## Contributing

If you encounter any issues or have suggestions for improvements,
please feel free to open an issue or submit a pull request on the GitHub repository.

### Author
Shivansh Mishra

**Gmail :**
Shivanshmishra.web@gmail.com