export const StonesABI = [
	{
		type: "constructor",
		inputs: [
			{
				name: "_subscriptionId",
				type: "uint256",
				internalType: "uint256",
			},
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
				name: "_vrfCoordinator",
				type: "address",
				internalType: "address",
			},
			{
				name: "_keyHash",
				type: "bytes32",
				internalType: "bytes32",
			},
			{
				name: "_admin",
				type: "address",
				internalType: "address",
			},
		],
		stateMutability: "nonpayable",
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
		name: "betSettled",
		inputs: [
			{
				name: "",
				type: "address",
				internalType: "address",
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
		name: "distributedInRound",
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
		name: "executeResult",
		inputs: [
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "offset",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "limit",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
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
		name: "getRoundBetsCount",
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
		name: "getRoundBetsCountBySide",
		inputs: [
			{
				name: "_round",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_side",
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
		name: "getRoundSideBank",
		inputs: [
			{
				name: "_round",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_side",
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
				name: "_totalAmount",
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
		name: "prepareExecute",
		inputs: [
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "data",
				type: "uint256[]",
				internalType: "uint256[]",
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
		name: "requestRounds",
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
		name: "roll",
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
		name: "roundBankBySide",
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
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "roundBets",
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
				internalType: "contract StonesBet",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "roundBetsBySide",
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
				internalType: "contract StonesBet",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "roundBonusSharesBySide",
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
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "roundProbabilities",
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
				type: "uint256",
				internalType: "uint256",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "roundRequests",
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
		name: "roundStatus",
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
		name: "roundWinnerSide",
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
		name: "settleLostBets",
		inputs: [
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "offset",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "limit",
				type: "uint256",
				internalType: "uint256",
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
		name: "BetCreated",
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
		],
		anonymous: false,
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
		name: "RequestedCalculation",
		inputs: [
			{
				name: "round",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "requestId",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "timestamp",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "RoundStart",
		inputs: [
			{
				name: "round",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "timestamp",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "WinnerCalculated",
		inputs: [
			{
				name: "round",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "side",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
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
		name: "RoundNotFinished",
		inputs: [
			{
				name: "round",
				type: "uint256",
				internalType: "uint256",
			},
		],
	},
	{
		type: "error",
		name: "ZeroAddress",
		inputs: [],
	},
] as const;
