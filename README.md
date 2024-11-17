# Ascenda Take-home Assignment Round
## Introduction: 
Fullname: Ngo Quoc Quy\
Contacts: nqquy21@gmail.com

## How to run this project:
### Install the project: 
- It's required you have to install nodejs first.
- Then run the script bash 
```bash
npm install
```

### Run the project to merge data:
#### 1. Using bash script as "my_hotel_merger": 
- Command line:
```bash 
my_hotel_merger hotel_id1, hotel_id2 destination_id1, destination_id2
my_hotel_merger none 5432
my_hotel_merger iJhz none
```
- Example:
```bash 
my_hotel_merger iJhz,f8c9 5432,1122
my_hotel_merger none destination_id1
my_hotel_merger src/index.js hotel_id1 none
```

#### 2. Using node js bash
- Command line:
```bash
node src/index.js hotel_id1, hotel_id2 destination_id1, destination_id2
node src/index.js none destination_id1
node src/index.js hotel_id1 none
```
- Example:
```bash
node src/index.js iJhz,f8c9 5432,1122
node src/index.js none 5432
node src/index.js iJhz none
```
