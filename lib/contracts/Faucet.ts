export const FaucetABI = [
	{
		type: "constructor",
		inputs: [
			{
				name: "_token",
				type: "address",
				internalType: "address",
			},
		],
		stateMutability: "nonpayable",
	},
	{
		type: "function",
		name: "get",
		inputs: [],
		outputs: [],
		stateMutability: "nonpayable",
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
] as const;
