# IP Address Locator CLI Tool

An IP address locator CLI tool built using Node.js and the Commander library. This tool allows you to retrieve location information for a given IP address or for your own IP address.

## Features

- Fetches and displays geographical and ISP information for an IP address.
- Supports specifying the target IP address as a command-line argument.
- Defaults to locating your own IP address if no IP address is specified.

## Prerequisites

- Before using the tool, make sure you have **Node.js** installed on your machine.

### Installation


1. Clone the repository:

   ```bash
   git clone https://github.com/Shivanshm001/IP-Locator-CLI.git

2. Navigate to the repository directory:
   ```bash
   cd IP-Locator-CLI

3. Install dependencies
   ```bash
   npm install

## Usage

### Options
  - -V, --version                 output the version number
  - -i, --ip-address <ipAddress>  Specify the IP address
  - -h, --help                    display help for command
 
 - To retrieve information about an IP address, use the following command :
   ```bash
   node locator.js -i <ip_address>

   Replace <ip_address> with the IP address you want to locate. If you omit the -i option, the tool will fetch information about your own IP address.

### Example
  ```bash
  node locator.js -i 8.8.8.8

  **Output:**
  Fetching info...
  IP : 8.8.8.8
  City : Mountain View
  Region : California
  Country : US
  Postal : 94035
  Longitude/Latitude : 37.3860,-122.0838
  ISP : AS15169 Google LLC


 