
# Crypto CLI
A simple yet powerful CLI for fetching the current rate of a Cryptocurrency or Currency.


## Environment Variables

To run this project, you will need to add an `API_KEY` from [RapidAPI](https://rapidapi.com)


## API Reference

### Get all common commands

```
    $ crypto-cli-node
```
#### output(options)

```
  -V, --version  : output the version number
  -h, --help     : display help for command
```

#### output(commands)

```
   key           : manage API key
   help          : display help for command
```

### Set API key
```
    $ crypto-cli-node key set
```
### Show API key
```
    $ crypto-cli-node key show
```
### Remove API key
```
    $ crypto-cli-node key remove
```


### Get a currency's price

```
  $ crypto-cli-node check price --asset=btc
```

