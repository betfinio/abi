export const BetsMemoryABI = [
	{
		"type": "constructor",
		"inputs": [
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
		"name": "AGGREGATOR",
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
		"name": "TIMELOCK",
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
		"name": "addAggregator",
		"inputs": [
			{
				"name": "_aggregator",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "addBet",
		"inputs": [
			{
				"name": "_bet",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "bets",
		"inputs": [
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "contract BetInterface"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "betsCountByStaking",
		"inputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
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
		"name": "gamesBets",
		"inputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "contract BetInterface"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "gamesVolume",
		"inputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
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
		"name": "getBet",
		"inputs": [
			{
				"name": "_index",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "contract BetInterface"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getBets",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "address[]",
				"internalType": "contract BetInterface[]"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getBets",
		"inputs": [
			{
				"name": "limit",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "offset",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "_game",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address[]",
				"internalType": "contract BetInterface[]"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getBetsCount",
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
		"name": "getGamesBetsCount",
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
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getLastBets",
		"inputs": [
			{
				"name": "count",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address[]",
				"internalType": "contract BetInterface[]"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getPlayerBetsCount",
		"inputs": [
			{
				"name": "_player",
				"type": "address",
				"internalType": "address"
			}
		],
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
		"name": "getPlayersVolume",
		"inputs": [
			{
				"name": "_player",
				"type": "address",
				"internalType": "address"
			}
		],
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
		"name": "pass",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "contract Pass"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "playersBets",
		"inputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "contract BetInterface"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "playersVolume",
		"inputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
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
		"name": "removeAggregator",
		"inputs": [
			{
				"name": "_aggregator",
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
		"name": "setPass",
		"inputs": [
			{
				"name": "_pass",
				"type": "address",
				"internalType": "address"
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
		"name": "totalVolumeOfInvitees",
		"inputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			}
		],
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
		"type": "event",
		"name": "AggregatorRemoved",
		"inputs": [
			{
				"name": "aggregator",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "NewAggregator",
		"inputs": [
			{
				"name": "aggregator",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "NewBet",
		"inputs": [
			{
				"name": "bet",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "player",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
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
		"name": "NewPass",
		"inputs": [
			{
				"name": "pass",
				"type": "address",
				"indexed": true,
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
	}
] as const;
