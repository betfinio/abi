export const MultiPlayerTableABI = [
	{
		type: "constructor",
		inputs: [
			{
				name: "_liro",
				type: "address",
				internalType: "address",
			},
			{
				name: "_interval",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "getBitMapPayout",
		inputs: [
			{
				name: "bitmap",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "getCurrentRound",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "getPossibleWin",
		inputs: [
			{
				name: "_bitmaps",
				type: "tuple[]",
				internalType: "struct Library.Bet[]",
				components: [
					{
						name: "amount",
						type: "uint256",
						internalType: "uint256",
					},
					{
						name: "bitmap",
						type: "uint256",
						internalType: "uint256",
					},
				],
			},
		],
		outputs: [
			{
				name: "maxPossible",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "totalAmount",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "getRoundBank",
		inputs: [
			{
				name: "_round",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "interval",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "limits",
		inputs: [
			{
				name: "name",
				type: "string",
				internalType: "string",
			},
		],
		outputs: [
			{
				name: "min",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "max",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "payout",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "liro",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract LiveRoulette",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "owner",
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
		name: "placeBet",
		inputs: [
			{
				name: "data",
				type: "bytes",
				internalType: "bytes",
			},
		],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "address",
			},
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "refund",
		inputs: [
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "renounceOwnership",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "result",
		inputs: [
			{
				name: "_round",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_winNumber",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "roundStatus",
		inputs: [
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "status",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "setLimit",
		inputs: [
			{
				name: "_name",
				type: "string",
				internalType: "string",
			},
			{
				name: "_min",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_max",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "setMaxBets",
		inputs: [
			{
				name: "_max",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "spin",
		inputs: [
			{
				name: "_round",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "",
				type: "bytes",
				internalType: "bytes",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "transferOwnership",
		inputs: [
			{
				name: "newOwner",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "event",
		name: "BetEnded",
		inputs: [
			{
				name: "bet",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "round",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "value",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
			{
				name: "winAmount",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "BetPlaced",
		inputs: [
			{
				name: "bet",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "round",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "LimitChanged",
		inputs: [
			{
				name: "limit",
				type: "string",
				indexed: true,
				internalType: "string",
			},
			{
				name: "min",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
			{
				name: "max",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "MaxBetsChanged",
		inputs: [
			{
				name: "max",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "OwnershipTransferred",
		inputs: [
			{
				name: "previousOwner",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "newOwner",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "error",
		name: "OwnableInvalidOwner",
		inputs: [
			{
				name: "owner",
				type: "address",
				internalType: "address",
			},
		],
	},
	{
		type: "error",
		name: "OwnableUnauthorizedAccount",
		inputs: [
			{
				name: "account",
				type: "address",
				internalType: "address",
			},
		],
	},
] as const;