export const TariffV2ABI = [
	{
		"type": "constructor",
		"inputs": [
			{
				"name": "_betProfit",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "_stakeProfit",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "betProfit",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "stakeProfit",
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