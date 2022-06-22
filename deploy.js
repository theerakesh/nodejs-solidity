const HDWalletProvider = require("@truffle/hdwallet-provider")
const Web3 = require('web3')
require('dotenv').config()
const { abi, evm } = require('./compile')

const provider = new HDWalletProvider(process.env.PHRASE,
  process.env.ENDPOINT_URL
)
const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()
  console.log("Attempting to deply from account ", accounts[0])
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ["Hi There"] })
    .send({ gas: '1000000', from: accounts[0] })
  console.log('Contract deployed to ', result.options.address)
}
deploy()