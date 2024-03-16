set -e

# Compiling the contract
npx hardhat compile

# Run the Node.js script to deploy the contract
echo "Deploying contract"
OUTPUT_DEPLOY=$(npx hardhat run scripts/deploy.js --network sepolia)

# Extract the deployer's address and contract address from the output
DEPLOYER_ADDRESS=$(echo "$OUTPUT_DEPLOY" | awk '/Deployer address:/{print $3}')
CONTRACT_ADDRESS=$(echo "$OUTPUT_DEPLOY" | awk '/Contract deployed to address:/{print $5}')


# Waiting the contract to be available, my bash code usually fails if I execute without waiting the newly contract deployed is available(pre heat)
echo "Waiting 15s for smart contract to be available"
sleep 15

# Run the interact script with address as parameter
echo "Executing Set and Get"
OUTPUT_INTERACT=$(CONTRACT_ADDRESS_ENV="$CONTRACT_ADDRESS" npx hardhat run scripts/interact.js --network sepolia)

