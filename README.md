# uuid-timestamp
> UUID v4 based on timestamp

- Valid UUID version 4
- Built in timestamp in milliseconds
- Absolute uniqueness within your ecosystem
- Super easy and fast
- 940 bytes, 42 lines (40 sloc)

## Install
```
$ npm install uuid-timestamp
```

## Usage
#### Emitting UUID
```js
const { uuidEmit, uuidParse } = require('uuid-timestamp');
const uuid = uuidEmit();
console.log(`Your new UUID v4 is: ${uuid}`);

// Your new UUID v4 is: 15971692-5987-4442-9890-925987442890
```
#### Parsing UUID timestamp
```js
const timestamp = uuidParse(uuid);
console.log(`UUID created at ${new Date(timestamp).toString()}`);

// UUID created at Tue Aug 11 2020 21:07:39 GMT+0300 (Moscow Standard Time)
```

## API
### uuidEmit()

#### returns
Type: `string`  
The function returns a valid UUID v4.

### uuidParse(uuid)
#### uuid
Type: `string`  
Previously generated UUID.

#### returns
Type: `number`  
The function returns a timestamp, parsed from UUID.

## Benchmarks
A comparative performance test based on discussion thread on [stackoverflow](https://stackoverflow.com/questions/105034/how-to-create-guid-uuid/). You can run the test and see the results on [jsben.ch](https://jsben.ch/bvtX3).
