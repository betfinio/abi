export const AnnouncementsABI = [
	{
		"type": "constructor",
		"inputs": [],
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
		"name": "SERVICE_ROLE",
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
		"name": "createPost",
		"inputs": [
			{
				"name": "postId",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "postHash",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "audience",
				"type": "string[]",
				"internalType": "string[]"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "deletePost",
		"inputs": [
			{
				"name": "postId",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
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
		"name": "updatePost",
		"inputs": [
			{
				"name": "postId",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "newPostHash",
				"type": "string",
				"internalType": "string"
			},
			{
				"name": "audience",
				"type": "string[]",
				"internalType": "string[]"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "event",
		"name": "PostCreated",
		"inputs": [
			{
				"name": "postId",
				"type": "uint256",
				"indexed": true,
				"internalType": "uint256"
			},
			{
				"name": "postHash",
				"type": "string",
				"indexed": false,
				"internalType": "string"
			},
			{
				"name": "audience",
				"type": "string[]",
				"indexed": false,
				"internalType": "string[]"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "PostDeleted",
		"inputs": [
			{
				"name": "postId",
				"type": "uint256",
				"indexed": true,
				"internalType": "uint256"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "PostUpdated",
		"inputs": [
			{
				"name": "postId",
				"type": "uint256",
				"indexed": true,
				"internalType": "uint256"
			},
			{
				"name": "newPostHash",
				"type": "string",
				"indexed": false,
				"internalType": "string"
			},
			{
				"name": "audience",
				"type": "string[]",
				"indexed": false,
				"internalType": "string[]"
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
] as const