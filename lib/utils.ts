import type { Address } from 'viem';

export const ZeroAddress: Address = '0x0000000000000000000000000000000000000000';

export const valueToNumber = (rawBalance?: bigint, pow = 18, precise = 3) => {
	return (Number(rawBalance || 0n) / 10 ** pow).round(precise);
};

/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @param length
 * @returns Truncated address
 */
export const truncateEthAddress = (address: Address, length = 3) => {
	if (!address) return '...';
	const match = address.match(new RegExp(`^(0x[a-zA-Z0-9]{${length}})[a-zA-Z0-9]+([a-zA-Z0-9]{${length}})$`));
	if (!match) return address;
	return `${match[1]}…${match[2]}`;
};

export default function arrayFrom(n: number) {
	return Array.from(Array(n).keys());
}

Number.prototype.round = function (places: number) {
	return Math.round(Number(this) * 10 ** places) / 10 ** places || 0;
};
Number.prototype.floor = function () {
	return Math.floor(Number(this));
};

declare global {
	interface Number {
		round: (places: number) => number;
		floor: () => number;
	}
}
