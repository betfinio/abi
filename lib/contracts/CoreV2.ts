export const CoreV2ABI = [
	{
		"type": "constructor",
		"inputs": [
			{
				"name": "__token",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "__pass",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "__betsMemory",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "admin",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "DEFAULT_ADMIN_ROLE",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "bytes32",
				"internalType": "bytes32"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "GAME",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "bytes32",
				"internalType": "bytes32"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "LICENSOR",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "bytes32",
				"internalType": "bytes32"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "PARTNER",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "bytes32",
				"internalType": "bytes32"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "PROPOSED",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "bytes32",
				"internalType": "bytes32"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "STAKING",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "bytes32",
				"internalType": "bytes32"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "addGame",
		"inputs": [
			{
				"name": "_game",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "addStaking",
		"inputs": [
			{
				"name": "_staking",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "addTariff",
		"inputs": [
			{
				"name": "betProfit",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "stakeProfit",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "betsMemory",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "fee",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"stateMutability": "pure"
	},
	{
		"type": "function",
		"name": "getPartnerLicensor",
		"inputs": [
			{
				"name": "_partner",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getPartnerTariff",
		"inputs": [
			{
				"name": "_partner",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getRoleAdmin",
		"inputs": [
			{
				"name": "role",
				"type": "bytes32",
				"internalType": "bytes32"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bytes32",
				"internalType": "bytes32"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "grantRole",
		"inputs": [
			{
				"name": "role",
				"type": "bytes32",
				"internalType": "bytes32"
			},
			{
				"name": "account",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "hasRole",
		"inputs": [
			{
				"name": "role",
				"type": "bytes32",
				"internalType": "bytes32"
			},
			{
				"name": "account",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "isGame",
		"inputs": [
			{
				"name": "_game",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "isPartner",
		"inputs": [
			{
				"name": "_partner",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "isProposed",
		"inputs": [
			{
				"name": "_game",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "isStaking",
		"inputs": [
			{
				"name": "_staking",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "isTariff",
		"inputs": [
			{
				"name": "_tariff",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "pass",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "pause",
		"inputs": [],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "paused",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "placeBet",
		"inputs": [
			{
				"name": "_player",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "_game",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "_amount",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "_data",
				"type": "bytes",
				"internalType": "bytes"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "proposeGame",
		"inputs": [
			{
				"name": "_game",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "registerPartner",
		"inputs": [
			{
				"name": "_partner",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "_tariff",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "removeGame",
		"inputs": [
			{
				"name": "_game",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "removePartner",
		"inputs": [
			{
				"name": "_partner",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "removeStaking",
		"inputs": [
			{
				"name": "_staking",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "removeTariff",
		"inputs": [
			{
				"name": "_tariff",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "renounceRole",
		"inputs": [
			{
				"name": "role",
				"type": "bytes32",
				"internalType": "bytes32"
			},
			{
				"name": "callerConfirmation",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "revokeRole",
		"inputs": [
			{
				"name": "role",
				"type": "bytes32",
				"internalType": "bytes32"
			},
			{
				"name": "account",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "stake",
		"inputs": [
			{
				"name": "_staker",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "_staking",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "_amount",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "supportsInterface",
		"inputs": [
			{
				"name": "interfaceId",
				"type": "bytes4",
				"internalType": "bytes4"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "bool",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "token",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "unpause",
		"inputs": [],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "event",
		"name": "GameCreated",
		"inputs": [
			{
				"name": "game",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "GameProposed",
		"inputs": [
			{
				"name": "game",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "GameRemoved",
		"inputs": [
			{
				"name": "game",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "PartnerCreated",
		"inputs": [
			{
				"name": "partner",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "PartnerRemoved",
		"inputs": [
			{
				"name": "partner",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "Paused",
		"inputs": [
			{
				"name": "account",
				"type": "address",
				"indexed": false,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "RoleAdminChanged",
		"inputs": [
			{
				"name": "role",
				"type": "bytes32",
				"indexed": true,
				"internalType": "bytes32"
			},
			{
				"name": "previousAdminRole",
				"type": "bytes32",
				"indexed": true,
				"internalType": "bytes32"
			},
			{
				"name": "newAdminRole",
				"type": "bytes32",
				"indexed": true,
				"internalType": "bytes32"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "RoleGranted",
		"inputs": [
			{
				"name": "role",
				"type": "bytes32",
				"indexed": true,
				"internalType": "bytes32"
			},
			{
				"name": "account",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "sender",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "RoleRevoked",
		"inputs": [
			{
				"name": "role",
				"type": "bytes32",
				"indexed": true,
				"internalType": "bytes32"
			},
			{
				"name": "account",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "sender",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "StakingCreated",
		"inputs": [
			{
				"name": "staking",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "StakingRemoved",
		"inputs": [
			{
				"name": "staking",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "TariffCreated",
		"inputs": [
			{
				"name": "tariff",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "TariffRemoved",
		"inputs": [
			{
				"name": "tariff",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "Unpaused",
		"inputs": [
			{
				"name": "account",
				"type": "address",
				"indexed": false,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "error",
		"name": "AccessControlBadConfirmation",
		"inputs": []
	},
	{
		"type": "error",
		"name": "AccessControlUnauthorizedAccount",
		"inputs": [
			{
				"name": "account",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "neededRole",
				"type": "bytes32",
				"internalType": "bytes32"
			}
		]
	},
	{
		"type": "error",
		"name": "EnforcedPause",
		"inputs": []
	},
	{
		"type": "error",
		"name": "ExpectedPause",
		"inputs": []
	},
	{
		"type": "error",
		"name": "GameAlreadyAdded",
		"inputs": [
			{
				"name": "game",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "GameAlreadyProposed",
		"inputs": [
			{
				"name": "game",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "GameNotExists",
		"inputs": [
			{
				"name": "game",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "GameNotProposed",
		"inputs": [
			{
				"name": "game",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "InvalidParameters",
		"inputs": [
			{
				"name": "betProfit",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "stakeProfit",
				"type": "uint256",
				"internalType": "uint256"
			}
		]
	},
	{
		"type": "error",
		"name": "NoPass",
		"inputs": [
			{
				"name": "wallet",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "NotLicensor",
		"inputs": [
			{
				"name": "wallet",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "NotPartner",
		"inputs": [
			{
				"name": "wallet",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "PartnerAlreadyExists",
		"inputs": [
			{
				"name": "partner",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "ReentrancyGuardReentrantCall",
		"inputs": []
	},
	{
		"type": "error",
		"name": "StakingAlreadyAdded",
		"inputs": [
			{
				"name": "staking",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "StakingNotExists",
		"inputs": [
			{
				"name": "staking",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "TariffNotExists",
		"inputs": [
			{
				"name": "tariff",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "ZeroAddress",
		"inputs": [
			{
				"name": "paramName",
				"type": "string",
				"internalType": "string"
			}
		]
	}
] as const;