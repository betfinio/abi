export const MultiBetABI = [
	{
		type: "constructor",
		inputs: [
			{
				name: "_token",
				type: "address",
				internalType: "address",
			},
			{
				name: "_core",
				type: "address",
				internalType: "address",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "core",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "address",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "multiPlaceBet",
		inputs: [
			{
				name: "partner",
				type: "address",
				internalType: "address",
			},
			{
				name: "games",
				type: "address[]",
				internalType: "address[]",
			},
			{
				name: "amounts",
				type: "uint256[]",
				internalType: "uint256[]",
			},
			{
				name: "datas",
				type: "bytes[]",
				internalType: "bytes[]",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "placeBet",
		inputs: [
			{
				name: "partner",
				type: "address",
				internalType: "address",
			},
			{
				name: "game",
				type: "address",
				internalType: "address",
			},
			{
				name: "amount",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "data",
				type: "bytes",
				internalType: "bytes",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "token",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract Token",
			},
		],
		stateMutability: "view",
	},
] as const;
