export const DataFeedABI = [
	{
		"type": "function",
		"name": "decimals",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "uint8",
				"internalType": "uint8"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "description",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "string",
				"internalType": "string"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getRoundData",
		"inputs": [
			{
				"name": "_roundId",
				"type": "uint80",
				"internalType": "uint80"
			}
		],
		"outputs": [
			{
				"name": "roundId",
				"type": "uint80",
				"internalType": "uint80"
			},
			{
				"name": "answer",
				"type": "int256",
				"internalType": "int256"
			},
			{
				"name": "startedAt",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "updatedAt",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "answeredInRound",
				"type": "uint80",
				"internalType": "uint80"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "latestRoundData",
		"inputs": [],
		"outputs": [
			{
				"name": "roundId",
				"type": "uint80",
				"internalType": "uint80"
			},
			{
				"name": "answer",
				"type": "int256",
				"internalType": "int256"
			},
			{
				"name": "startedAt",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "updatedAt",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "answeredInRound",
				"type": "uint80",
				"internalType": "uint80"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "version",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	}
] as const;
