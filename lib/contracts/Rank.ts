export const RankABI = [
	{
		type: "constructor",
		inputs: [
			{
				name: "_initialRate",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "admin",
				type: "address",
				internalType: "address",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "DEFAULT_ADMIN_ROLE",
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
		name: "RATE_UPDATE_ROLE",
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
		name: "SERVICE_ROLE",
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
		name: "batchUpdateMetadata",
		inputs: [
			{
				name: "rankByNames",
				type: "string[]",
				internalType: "string[]",
			},
			{
				name: "metadataUris",
				type: "string[]",
				internalType: "string[]",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "currentRate",
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
		name: "getCurrentRankByStake",
		inputs: [
			{
				name: "stake",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "",
				type: "string",
				internalType: "string",
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
		name: "getCurrentRankByVolume",
		inputs: [
			{
				name: "volume",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "",
				type: "string",
				internalType: "string",
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
		name: "getLowestAmongStakeAndVolume",
		inputs: [
			{
				name: "stake",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "volume",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "",
				type: "string",
				internalType: "string",
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
		name: "getNextRankByOrder",
		inputs: [
			{
				name: "order",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "",
				type: "string",
				internalType: "string",
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
		name: "getNextRankByStake",
		inputs: [
			{
				name: "minStake",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "",
				type: "string",
				internalType: "string",
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
		name: "getNextRankByVolume",
		inputs: [
			{
				name: "volume",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [
			{
				name: "",
				type: "string",
				internalType: "string",
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
		name: "getRankInfo",
		inputs: [
			{
				name: "name",
				type: "string",
				internalType: "string",
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
			{
				name: "",
				type: "uint256",
				internalType: "uint256",
			},
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
		name: "getRankList",
		inputs: [],
		outputs: [
			{
				name: "names",
				type: "string[]",
				internalType: "string[]",
			},
			{
				name: "minStakes",
				type: "uint256[]",
				internalType: "uint256[]",
			},
			{
				name: "volumes",
				type: "uint256[]",
				internalType: "uint256[]",
			},
			{
				name: "payouts",
				type: "uint256[]",
				internalType: "uint256[]",
			},
			{
				name: "orders",
				type: "uint256[]",
				internalType: "uint256[]",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "getRankMetadata",
		inputs: [
			{
				name: "rankName",
				type: "string",
				internalType: "string",
			},
		],
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
		name: "getRankNamesLength",
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
		name: "getRoleAdmin",
		inputs: [
			{
				name: "role",
				type: "bytes32",
				internalType: "bytes32",
			},
		],
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
		name: "grantRole",
		inputs: [
			{
				name: "role",
				type: "bytes32",
				internalType: "bytes32",
			},
			{
				name: "account",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "hasRole",
		inputs: [
			{
				name: "role",
				type: "bytes32",
				internalType: "bytes32",
			},
			{
				name: "account",
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
		name: "rankNames",
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
				type: "string",
				internalType: "string",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "ranks",
		inputs: [
			{
				name: "name",
				type: "string",
				internalType: "string",
			},
		],
		outputs: [
			{
				name: "minStake",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "volume",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "payout",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "order",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "metadataUri",
				type: "string",
				internalType: "string",
			},
			{
				name: "exists",
				type: "bool",
				internalType: "bool",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "renounceRole",
		inputs: [
			{
				name: "role",
				type: "bytes32",
				internalType: "bytes32",
			},
			{
				name: "callerConfirmation",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "revokeRole",
		inputs: [
			{
				name: "role",
				type: "bytes32",
				internalType: "bytes32",
			},
			{
				name: "account",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "supportsInterface",
		inputs: [
			{
				name: "interfaceId",
				type: "bytes4",
				internalType: "bytes4",
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
		name: "updateCurrentRate",
		inputs: [
			{
				name: "newRate",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "updater",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "updateRankMetadata",
		inputs: [
			{
				name: "rankName",
				type: "string",
				internalType: "string",
			},
			{
				name: "newMetadataUri",
				type: "string",
				internalType: "string",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "updateRankMinStake",
		inputs: [
			{
				name: "name",
				type: "string",
				internalType: "string",
			},
			{
				name: "minStake",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "updateRankPayoff",
		inputs: [
			{
				name: "name",
				type: "string",
				internalType: "string",
			},
			{
				name: "payout",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "updateRankVolume",
		inputs: [
			{
				name: "name",
				type: "string",
				internalType: "string",
			},
			{
				name: "volume",
				type: "uint256",
				internalType: "uint256",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "event",
		name: "Initialized",
		inputs: [
			{
				name: "version",
				type: "uint64",
				indexed: false,
				internalType: "uint64",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "RankMetadataUpdated",
		inputs: [
			{
				name: "rankName",
				type: "string",
				indexed: true,
				internalType: "string",
			},
			{
				name: "ipfsHash",
				type: "string",
				indexed: true,
				internalType: "string",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "RankUpdated",
		inputs: [
			{
				name: "name",
				type: "string",
				indexed: true,
				internalType: "string",
			},
			{
				name: "minStake",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
			{
				name: "volume",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
			{
				name: "payout",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
			{
				name: "order",
				type: "uint256",
				indexed: false,
				internalType: "uint256",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "RateUpdated",
		inputs: [
			{
				name: "newRate",
				type: "uint256",
				indexed: true,
				internalType: "uint256",
			},
			{
				name: "updater",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "RoleAdminChanged",
		inputs: [
			{
				name: "role",
				type: "bytes32",
				indexed: true,
				internalType: "bytes32",
			},
			{
				name: "previousAdminRole",
				type: "bytes32",
				indexed: true,
				internalType: "bytes32",
			},
			{
				name: "newAdminRole",
				type: "bytes32",
				indexed: true,
				internalType: "bytes32",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "RoleGranted",
		inputs: [
			{
				name: "role",
				type: "bytes32",
				indexed: true,
				internalType: "bytes32",
			},
			{
				name: "account",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "sender",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "RoleRevoked",
		inputs: [
			{
				name: "role",
				type: "bytes32",
				indexed: true,
				internalType: "bytes32",
			},
			{
				name: "account",
				type: "address",
				indexed: true,
				internalType: "address",
			},
			{
				name: "sender",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "error",
		name: "AccessControlBadConfirmation",
		inputs: [],
	},
	{
		type: "error",
		name: "AccessControlUnauthorizedAccount",
		inputs: [
			{
				name: "account",
				type: "address",
				internalType: "address",
			},
			{
				name: "neededRole",
				type: "bytes32",
				internalType: "bytes32",
			},
		],
	},
	{
		type: "error",
		name: "ArrayLengthMismatch",
		inputs: [],
	},
	{
		type: "error",
		name: "InvalidInitialization",
		inputs: [],
	},
	{
		type: "error",
		name: "NoHigherRankFound",
		inputs: [],
	},
	{
		type: "error",
		name: "NotInitializing",
		inputs: [],
	},
	{
		type: "error",
		name: "RankNotFound",
		inputs: [
			{
				name: "name",
				type: "string",
				internalType: "string",
			},
		],
	},
] as const;
