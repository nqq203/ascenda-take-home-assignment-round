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
#### 1. Run project with runner
- Command line: 
```bash
./runner hotel_id1, hotel_id2 destination_id1,destination_id2
```
- Example: 
```bash
./runner iJhz,f8c9 5432,1122
```
#### 2. Run project manually
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
