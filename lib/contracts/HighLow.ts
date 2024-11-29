export const HighLowABI = [
	{
		type: "constructor",
		inputs: [
			{
				name: "_core",
				type: "address",
				internalType: "address",
			},
			{
				name: "_staking",
				type: "address",
				internalType: "address",
			},
			{
				name: "_subscriptionId",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_vrfCoordinator",
				type: "address",
				internalType: "address",
			},
			{
				name: "_keyHash",
				type: "bytes32",
				internalType: "bytes32",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "MAX_THRESHOLD",
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
		name: "MIN_BET",
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
		name: "MIN_THRESHOLD",
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
		name: "REQUIRED_FUNDS_COEFFICIENT",
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
		name: "acceptOwnership",
		inputs: [],
		outputs: [],
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
				internalType: "contract CoreInterface",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "getAddress",
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
		name: "getFeeType",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "pure",
	},
	{
		type: "function",
		name: "getKeyHash",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "bytes32",
				internalType: "bytes32",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "getPlayerRequestsCount",
		inputs: [
			{
				name: "player",
				type: "address",
				internalType: "address",
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
		name: "getPossibleWin",
		inputs: [
			{
				name: "_threshold",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_side",
				type: "bool",
				internalType: "bool",
			},
			{
				name: "_amount",
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
		name: "getRequestBet",
		inputs: [
			{
				name: "requestId",
				type: "uint256",
				internalType: "uint256",
			},
		],
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
		name: "getStaking",
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
		name: "getSubscriptionId",
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
		name: "getVersion",
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
		name: "getVrfCoordinator",
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
		name: "keyHash",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "bytes32",
				internalType: "bytes32",
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
				name: "_player",
				type: "address",
				internalType: "address",
			},
			{
				name: "_amount",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_data",
				type: "bytes",
				internalType: "bytes",
			},
		],
		outputs: [
			{
				name: "betAddress",
				type: "address",
				internalType: "address",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "playerRequests",
		inputs: [
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
		name: "rawFulfillRandomWords",
		inputs: [
			{
				name: "requestId",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "randomWords",
				type: "uint256[]",
				internalType: "uint256[]",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "requestBets",
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
				type: "address",
				internalType: "contract DiceBet",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "requestConfirmations",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint16",
				internalType: "uint16",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "reservedFunds",
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
		name: "s_vrfCoordinator",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract IVRFCoordinatorV2Plus",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "setCoordinator",
		inputs: [
			{
				name: "_vrfCoordinator",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "staking",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract StakingInterface",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "transferOwnership",
		inputs: [
			{
				name: "to",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "vrfCoordinator",
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
		type: "event",
		name: "CoordinatorSet",
		inputs: [
			{
				name: "vrfCoordinator",
				type: "address",
				indexed: false,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "Landed",
		inputs: [
			{
				name: "bet",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "requestId",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "roller",
				type: "address",
				indexed: false,
				internalType: "address",
			},
			{
				name: "result",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "OwnershipTransferRequested",
		inputs: [
			{
				name: "from",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "to",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "OwnershipTransferred",
		inputs: [
			{
				name: "from",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "to",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "Rolled",
		inputs: [
			{
				name: "bet",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "requestId",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "roller",
				type: "address",
				indexed: false,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "error",
		name: "OnlyCoordinatorCanFulfill",
		inputs: [
			{
				name: "have",
				type: "address",
				internalType: "address",
			},
			{
				name: "want",
				type: "address",
				internalType: "address",
			},
		],
	},
	{
		type: "error",
		name: "OnlyOwnerOrCoordinator",
		inputs: [
			{
				name: "have",
				type: "address",
				internalType: "address",
			},
			{
				name: "owner",
				type: "address",
				internalType: "address",
			},
			{
				name: "coordinator",
				type: "address",
				internalType: "address",
			},
		],
	},
	{
		type: "error",
		name: "ZeroAddress",
		inputs: [],
	},
] as const;
