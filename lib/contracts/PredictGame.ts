export const PredictGameABI = [
	{
		type: "constructor",
		inputs: [
			{
				name: "_dataFeed",
				type: "address",
				internalType: "address",
			},
			{
				name: "_symbol",
				type: "string",
				internalType: "string",
			},
			{
				name: "_interval",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_bonus",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_duration",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_threshold",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_recovery",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "activate",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "active",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "bool",
				internalType: "bool",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "bets",
		inputs: [
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
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract PredictBet",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "bonus",
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
		name: "calculateBets",
		inputs: [
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_startRoundId",
				type: "uint80",
				internalType: "uint80",
			},
			{
				name: "_endRoundId",
				type: "uint80",
				internalType: "uint80",
			},
		],
		outputs: [
			{
				name: "count",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "dataFeed",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract AggregatorV3Interface",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "deactivate",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "duration",
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
		name: "end",
		inputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "roundId",
				type: "uint80",
				internalType: "uint80",
			},
			{
				name: "answer",
				type: "int256",
				internalType: "int256",
			},
			{
				name: "timestamp",
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
		name: "getPlayerBets",
		inputs: [
			{
				name: "player",
				type: "address",
				internalType: "address",
			},
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "count",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "",
				type: "address[]",
				internalType: "address[]",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "getPool",
		inputs: [
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "longs",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "shorts",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "getRoundBets",
		inputs: [
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "count",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "",
				type: "address[]",
				internalType: "address[]",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "getTotalBonusStakes",
		inputs: [
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "longs",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "shorts",
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
		name: "longBets",
		inputs: [
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
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract PredictBet",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "longPool",
		inputs: [
			{
				name: "",
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
				name: "amount",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "side",
				type: "bool",
				internalType: "bool",
			},
			{
				name: "player",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "address",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "predict",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract Predict",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "recovery",
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
		name: "renounceOwnership",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "roundCalculated",
		inputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "",
				type: "bool",
				internalType: "bool",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "roundRecovery",
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
		name: "shortBets",
		inputs: [
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
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract PredictBet",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "shortPool",
		inputs: [
			{
				name: "",
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
		name: "start",
		inputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "roundId",
				type: "uint80",
				internalType: "uint80",
			},
			{
				name: "answer",
				type: "int256",
				internalType: "int256",
			},
			{
				name: "timestamp",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "symbol",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "string",
				internalType: "string",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "threshold",
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
		name: "token",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract ERC20",
			},
		],
		stateMutability: "view",
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
		name: "BetCreated",
		inputs: [
			{
				name: "player",
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
				name: "amount",
				type: "uint256",
				indexed: false,
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
		type: "event",
		name: "RoundCalculated",
		inputs: [
			{
				name: "round",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "RoundCreated",
		inputs: [
			{
				name: "round",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "RoundRecevered",
		inputs: [
			{
				name: "round",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
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
