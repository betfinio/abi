export const MultimintABI = [
	{
		type: "function",
		name: "multimint",
		inputs: [
			{
				name: "addresses",
				type: "address[]",
				internalType: "address[]",
			},
			{
				name: "parents",
				type: "address[]",
				internalType: "address[]",
			},
			{
				name: "pass",
				type: "address",
				internalType: "address",
			},
		],
		outputs: [],
		stateMutability: "nonpayable",
	},
] as const;
