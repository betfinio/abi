export const LotteryABI = [
	{
		"type": "constructor",
		"inputs": [
			{
				"name": "_staking",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "_core",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "_service",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "_coordinator",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "_keyHash",
				"type": "bytes32",
				"internalType": "bytes32"
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
		"name": "CORE",
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
		"name": "MAX_SHARES",
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
		"name": "MAX_TICKETS_PER_BET",
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
		"name": "ROUND",
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
		"name": "SERVICE",
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
		"name": "additionalJackpot",
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
		"name": "approve",
		"inputs": [
			{
				"name": "to",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "balanceOf",
		"inputs": [
			{
				"name": "owner",
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
		"name": "bets",
		"inputs": [
			{
				"name": "tokenId",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "bet",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "cancelSubscription",
		"inputs": [],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "claim",
		"inputs": [
			{
				"name": "id",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "claimAll",
		"inputs": [
			{
				"name": "ids",
				"type": "uint256[]",
				"internalType": "uint256[]"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "createRound",
		"inputs": [
			{
				"name": "_timestamp",
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
		"name": "editTicket",
		"inputs": [
			{
				"name": "id",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "_newTickets",
				"type": "tuple[]",
				"internalType": "struct Library.Ticket[]",
				"components": [
					{
						"name": "symbol",
						"type": "uint8",
						"internalType": "uint8"
					},
					{
						"name": "numbers",
						"type": "uint32",
						"internalType": "uint32"
					}
				]
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "getAddress",
		"inputs": [],
		"outputs": [
			{
				"name": "gameAddress",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getApproved",
		"inputs": [
			{
				"name": "tokenId",
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
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getFeeType",
		"inputs": [],
		"outputs": [
			{
				"name": "feeType",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"stateMutability": "pure"
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
		"name": "getStaking",
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
		"name": "getToken",
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
		"name": "getVersion",
		"inputs": [],
		"outputs": [
			{
				"name": "version",
				"type": "uint256",
				"internalType": "uint256"
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
		"name": "isApprovedForAll",
		"inputs": [
			{
				"name": "owner",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "operator",
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
		"name": "name",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "string",
				"internalType": "string"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "ownerOf",
		"inputs": [
			{
				"name": "tokenId",
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
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "placeBet",
		"inputs": [
			{
				"name": "",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "amount",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "data",
				"type": "bytes",
				"internalType": "bytes"
			}
		],
		"outputs": [
			{
				"name": "betAddress",
				"type": "address",
				"internalType": "address"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "refund",
		"inputs": [
			{
				"name": "amount",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "removeConsumer",
		"inputs": [
			{
				"name": "_round",
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
		"name": "reserveFunds",
		"inputs": [
			{
				"name": "amount",
				"type": "uint256",
				"internalType": "uint256"
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
		"name": "rounds",
		"inputs": [
			{
				"name": "round",
				"type": "address",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"name": "exists",
				"type": "bool",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "safeTransferFrom",
		"inputs": [
			{
				"name": "from",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "to",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "safeTransferFrom",
		"inputs": [
			{
				"name": "from",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "to",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "data",
				"type": "bytes",
				"internalType": "bytes"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "setApprovalForAll",
		"inputs": [
			{
				"name": "operator",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "approved",
				"type": "bool",
				"internalType": "bool"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "setTicketPrice",
		"inputs": [
			{
				"name": "_price",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "setURI",
		"inputs": [
			{
				"name": "_uri",
				"type": "string",
				"internalType": "string"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "subscriptionId",
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
		"name": "symbol",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "string",
				"internalType": "string"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "ticketPrice",
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
		"name": "tokenByIndex",
		"inputs": [
			{
				"name": "index",
				"type": "uint256",
				"internalType": "uint256"
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
		"name": "tokenOfOwnerByIndex",
		"inputs": [
			{
				"name": "owner",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "index",
				"type": "uint256",
				"internalType": "uint256"
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
		"name": "tokenURI",
		"inputs": [
			{
				"name": "tokenId",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"name": "",
				"type": "string",
				"internalType": "string"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "totalSupply",
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
		"name": "transferFrom",
		"inputs": [
			{
				"name": "from",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "to",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "updateFinish",
		"inputs": [
			{
				"name": "_round",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "_finish",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "updateJackpot",
		"inputs": [
			{
				"name": "_jackpot",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "uri",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "string",
				"internalType": "string"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "event",
		"name": "Approval",
		"inputs": [
			{
				"name": "owner",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "approved",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256",
				"indexed": true,
				"internalType": "uint256"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "ApprovalForAll",
		"inputs": [
			{
				"name": "owner",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "operator",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "approved",
				"type": "bool",
				"indexed": false,
				"internalType": "bool"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "BatchMetadataUpdate",
		"inputs": [
			{
				"name": "_fromTokenId",
				"type": "uint256",
				"indexed": false,
				"internalType": "uint256"
			},
			{
				"name": "_toTokenId",
				"type": "uint256",
				"indexed": false,
				"internalType": "uint256"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "JackpotWon",
		"inputs": [
			{
				"name": "round",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "amount",
				"type": "uint256",
				"indexed": true,
				"internalType": "uint256"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "MetadataUpdate",
		"inputs": [
			{
				"name": "_tokenId",
				"type": "uint256",
				"indexed": false,
				"internalType": "uint256"
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
		"name": "RoundCreated",
		"inputs": [
			{
				"name": "round",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "timestamp",
				"type": "uint256",
				"indexed": true,
				"internalType": "uint256"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "RoundFinished",
		"inputs": [
			{
				"name": "round",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "TicketClaimed",
		"inputs": [
			{
				"name": "bet",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "amount",
				"type": "uint256",
				"indexed": true,
				"internalType": "uint256"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "TicketsEdited",
		"inputs": [
			{
				"name": "id",
				"type": "uint256",
				"indexed": true,
				"internalType": "uint256"
			},
			{
				"name": "bet",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			}
		],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "Transfer",
		"inputs": [
			{
				"name": "from",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "to",
				"type": "address",
				"indexed": true,
				"internalType": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256",
				"indexed": true,
				"internalType": "uint256"
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
		"name": "ERC721EnumerableForbiddenBatchMint",
		"inputs": []
	},
	{
		"type": "error",
		"name": "ERC721IncorrectOwner",
		"inputs": [
			{
				"name": "sender",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256",
				"internalType": "uint256"
			},
			{
				"name": "owner",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "ERC721InsufficientApproval",
		"inputs": [
			{
				"name": "operator",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "tokenId",
				"type": "uint256",
				"internalType": "uint256"
			}
		]
	},
	{
		"type": "error",
		"name": "ERC721InvalidApprover",
		"inputs": [
			{
				"name": "approver",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "ERC721InvalidOperator",
		"inputs": [
			{
				"name": "operator",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "ERC721InvalidOwner",
		"inputs": [
			{
				"name": "owner",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "ERC721InvalidReceiver",
		"inputs": [
			{
				"name": "receiver",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "ERC721InvalidSender",
		"inputs": [
			{
				"name": "sender",
				"type": "address",
				"internalType": "address"
			}
		]
	},
	{
		"type": "error",
		"name": "ERC721NonexistentToken",
		"inputs": [
			{
				"name": "tokenId",
				"type": "uint256",
				"internalType": "uint256"
			}
		]
	},
	{
		"type": "error",
		"name": "ERC721OutOfBoundsIndex",
		"inputs": [
			{
				"name": "owner",
				"type": "address",
				"internalType": "address"
			},
			{
				"name": "index",
				"type": "uint256",
				"internalType": "uint256"
			}
		]
	}
] as const;
