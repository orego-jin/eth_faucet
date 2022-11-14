# Eth Faucet on Ganache (test)

Eth faucet running on ganache local network.

## Steps to Deploy the Faucet
1. ensure 'ganache' is running on localhost (chainid = 1337)
2. update the privateKey value
3. run the script to deploy the contract </br>
npx hardhat run scripts/deploy.js --network localhost

## Notes
compile with hardhat if there is no artifacts <br />
npx hardhat compile