export const LotteryRoundABI = [
	{
		type: "constructor",
		inputs: [
			{
				name: "_lottery",
				type: "address",
				internalType: "address"
			},
			{
				name: "_finish",
				type: "uint256",
				internalType: "uint256"
			},
			{
				name: "_coordinator",
				type: "address",
				internalType: "address"
			},
			{
				name: "_subscriptionId",
				type: "uint256",
				internalType: "uint256"
			},
			{
				name: "_keyHash",
				type: "bytes32",
				internalType: "bytes32"
			},
			{
				name: "_ticketPrice",
				type: "uint256",
				internalType: "uint256"
			}
		],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "RECOVER_PERIOD",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "REQUEST_PERIOD",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "acceptOwnership",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "bitmaps",
		inputs: [
			{
				name: "bitmap",
				type: "bytes",
				internalType: "bytes"
			}
		],
		outputs: [
			{
				name: "bet",
				type: "address",
				internalType: "address"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "claim",
		inputs: [
			{
				name: "_bet",
				type: "address",
				internalType: "address"
			}
		],
		outputs: [
			{
				name: "",
				type: "bool",
				internalType: "bool"
			}
		],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "editTickets",
		inputs: [
			{
				name: "_bet",
				type: "address",
				internalType: "address"
			},
			{
				name: "_tickets",
				type: "tuple[]",
				internalType: "struct Library.Ticket[]",
				components: [
					{
						name: "symbol",
						type: "uint8",
						internalType: "uint8"
					},
					{
						name: "numbers",
						type: "uint32",
						internalType: "uint32"
					}
				]
			}
		],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "getBet",
		inputs: [
			{
				name: "bitmap",
				type: "bytes",
				internalType: "bytes"
			}
		],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "address"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "getBetsCount",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "getFinish",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "getStatus",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint8",
				internalType: "uint8"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "getTicketsCount",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "isBitmapEmpty",
		inputs: [
			{
				name: "bitmap",
				type: "bytes",
				internalType: "bytes"
			}
		],
		outputs: [
			{
				name: "",
				type: "bool",
				internalType: "bool"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "isOpen",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "bool",
				internalType: "bool"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "jackpotWon",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "bool",
				internalType: "bool"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "owner",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "address"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "processJackpot",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "rawFulfillRandomWords",
		inputs: [
			{
				name: "requestId",
				type: "uint256",
				internalType: "uint256"
			},
			{
				name: "randomWords",
				type: "uint256[]",
				internalType: "uint256[]"
			}
		],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "refund",
		inputs: [
			{
				name: "offset",
				type: "uint256",
				internalType: "uint256"
			},
			{
				name: "limit",
				type: "uint256",
				internalType: "uint256"
			}
		],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "registerBet",
		inputs: [
			{
				name: "_bet",
				type: "address",
				internalType: "address"
			}
		],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "requestRandomness",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "requestedTime",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "s_vrfCoordinator",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "address",
				internalType: "contract IVRFCoordinatorV2Plus"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "setCoordinator",
		inputs: [
			{
				name: "_vrfCoordinator",
				type: "address",
				internalType: "address"
			}
		],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "startRecover",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "startRefund",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "ticketPrice",
		inputs: [],
		outputs: [
			{
				name: "",
				type: "uint256",
				internalType: "uint256"
			}
		],
		stateMutability: "view"
	},
	{
		type: "function",
		name: "transferOwnership",
		inputs: [
			{
				name: "to",
				type: "address",
				internalType: "address"
			}
		],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "updateFinish",
		inputs: [
			{
				name: "_finish",
				type: "uint256",
				internalType: "uint256"
			}
		],
		outputs: [],
		stateMutability: "nonpayable"
	},
	{
		type: "function",
		name: "winTicket",
		inputs: [],
		outputs: [
			{
				name: "symbol",
				type: "uint8",
				internalType: "uint8"
			},
			{
				name: "numbers",
				type: "uint32",
				internalType: "uint32"
			}
		],
		stateMutability: "view"
	},
	{
		type: "event",
		name: "CoordinatorSet",
		inputs: [
			{
				name: "vrfCoordinator",
				type: "address",
				indexed: false,
				internalType: "address"
			}
		],
		anonymous: false
	},
	{
		type: "event",
		name: "OwnershipTransferRequested",
		inputs: [
			{
				name: "from",
				type: "address",
				indexed: true,
				internalType: "address"
			},
			{
				name: "to",
				type: "address",
				indexed: true,
				internalType: "address"
			}
		],
		anonymous: false
	},
	{
		type: "event",
		name: "OwnershipTransferred",
		inputs: [
			{
				name: "from",
				type: "address",
				indexed: true,
				internalType: "address"
			},
			{
				name: "to",
				type: "address",
				indexed: true,
				internalType: "address"
			}
		],
		anonymous: false
	},
	{
		type: "event",
		name: "RecoverInitiated",
		inputs: [],
		anonymous: false
	},
	{
		type: "event",
		name: "RefundInitiated",
		inputs: [],
		anonymous: false
	},
	{
		type: "event",
		name: "RoundFinished",
		inputs: [
			{
				name: "winTicket",
				type: "tuple",
				indexed: false,
				internalType: "struct Library.Ticket",
				components: [
					{
						name: "symbol",
						type: "uint8",
						internalType: "uint8"
					},
					{
						name: "numbers",
						type: "uint32",
						internalType: "uint32"
					}
				]
			}
		],
		anonymous: false
	},
	{
		type: "event",
		name: "RoundRequested",
		inputs: [
			{
				name: "requestId",
				type: "uint256",
				indexed: true,
				internalType: "uint256"
			}
		],
		anonymous: false
	},
	{
		type: "event",
		name: "TicketClaimed",
		inputs: [
			{
				name: "bet",
				type: "address",
				indexed: true,
				internalType: "address"
			}
		],
		anonymous: false
	},
	{
		type: "error",
		name: "OnlyCoordinatorCanFulfill",
		inputs: [
			{
				name: "have",
				type: "address",
				internalType: "address"
			},
			{
				name: "want",
				type: "address",
				internalType: "address"
			}
		]
	},
	{
		type: "error",
		name: "OnlyOwnerOrCoordinator",
		inputs: [
			{
				name: "have",
				type: "address",
				internalType: "address"
			},
			{
				name: "owner",
				type: "address",
				internalType: "address"
			},
			{
				name: "coordinator",
				type: "address",
				internalType: "address"
			}
		]
	},
	{
		type: "error",
		name: "ZeroAddress",
		inputs: []
	}
] as const;
