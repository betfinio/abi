export const CoreABI = [
	{
		type: "constructor",
		inputs: [
			{
				name: "_token",
				type: "address",
				internalType: "address",
			},
			{
				name: "_betsMemory",
				type: "address",
				internalType: "address",
			},
			{
				name: "_pass",
				type: "address",
				internalType: "address",
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
		name: "PARTNER",
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
		name: "TIMELOCK",
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
		name: "addGame",
		inputs: [
			{
				name: "game",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "addPartner",
		inputs: [
			{
				name: "_tariff",
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
		name: "addStaking",
		inputs: [
			{
				name: "staking",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "addTariff",
		inputs: [
			{
				name: "_price",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_profit",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "_stakeProfit",
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
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "betsMemory",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract BetsMemory",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "fee",
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
		name: "getGames",
		inputs: [],
		outputs: [
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
		name: "getPartners",
		inputs: [],
		outputs: [
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
		name: "getStakings",
		inputs: [],
		outputs: [
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
		name: "getTariffs",
		inputs: [],
		outputs: [
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
		name: "isGame",
		inputs: [
			{
				name: "_game",
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
		name: "isStaking",
		inputs: [
			{
				name: "_staking",
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
		name: "pass",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract Pass",
			},
		],
		stateMutability: "view",
	},
	{
		type: "function",
		name: "placeBet",
		inputs: [
			{
				name: "player",
				type: "address",
				internalType: "address",
			},
			{
				name: "game",
				type: "address",
				internalType: "address",
			},
			{
				name: "totalAmount",
				type: "uint256",
				internalType: "uint256",
			},
			{
				name: "data",
				type: "bytes",
				internalType: "bytes",
			},
		],
		outputs: [
			{
				name: "bet",
				type: "address",
				internalType: "address",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "removeGame",
		inputs: [
			{
				name: "game",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "removeStaking",
		inputs: [
			{
				name: "staking",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "removeTariff",
		inputs: [
			{
				name: "tariffAddress",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
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
		name: "stake",
		inputs: [
			{
				name: "player",
				type: "address",
				internalType: "address",
			},
			{
				name: "staking",
				type: "address",
				internalType: "address",
			},
			{
				name: "amount",
				type: "uint256",
				internalType: "uint256",
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
		type: "event",
		name: "GameCreated",
		inputs: [
			{
				name: "game",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "GameRemoved",
		inputs: [
			{
				name: "game",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "PartnerCreated",
		inputs: [
			{
				name: "partner",
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
		type: "event",
		name: "StakingCreated",
		inputs: [
			{
				name: "staking",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "StakingRemoved",
		inputs: [
			{
				name: "staking",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "TariffCreated",
		inputs: [
			{
				name: "tariff",
				type: "address",
				indexed: true,
				internalType: "address",
			},
		],
		anonymous: false,
	},
	{
		type: "event",
		name: "TariffRemoved",
		inputs: [
			{
				name: "tariff",
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
] as const;
