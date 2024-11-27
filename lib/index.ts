import type { Address, Narrow } from "viem";
import type { AbiConstructor, AbiError, AbiEvent, AbiFallback, AbiFunction, AbiReceive, } from "abitype";
import TokenABI from "./contracts/Token.json";
import ConservativeStakingPoolABI from "./contracts/ConservativeStakingPool.json";
import DynamicStakingPoolABI from "./contracts/DynamicStakingPool.json";
import ConservativeStakingABI from "./contracts/ConservativeStaking.json";
import DynamicStakingABI from "./contracts/DynamicStaking.json";
import PassABI from "./contracts/Pass.json";
import RouletteABI from "./contracts/Roulette.json";
import RouletteBetABI from "./contracts/RouletteBet.json";
import PredictGameABI from "./contracts/PredictGame.json";
import StonesABI from "./contracts/Stones.json";
import StonesBetABI from "./contracts/StonesBet.json";
import BetInterfaceABI from "./contracts/BetInterface.json";
import PartnerABI from "./contracts/Partner.json";
import CoreABI from "./contracts/Core.json";
import MultimintABI from "./contracts/Multimint.json";
import DataFeedABI from "./contracts/DataFeed.json";
import BetsMemoryABI from "./contracts/BetsMemory.json";
import AffiliateABI from "./contracts/Affiliate.json";
import AffiliateFundABI from "./contracts/AffiliateFund.json";
import PredictABI from "./contracts/Predict.json";
import PredictBetABI from "./contracts/PredictBet.json";
import HelperABI from "./contracts/Helper.json";
import LuckyRoundABI from "./contracts/LuckyRound.json";
import LuckyRoundBetABI from "./contracts/LuckyRoundBet.json";
import EventFactoryABI from "./contracts/EventFactory.json";
import EventABI from "./contracts/Event.json";
import EventBetABI from "./contracts/EventBet.json";

export const TokenContract = {
	abi: TokenABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const ConservativeStakingPoolContract = {
	abi: ConservativeStakingPoolABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const DynamicStakingPoolContract = {
	abi: DynamicStakingPoolABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const ConservativeStakingContract = {
	abi: ConservativeStakingABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const DynamicStakingContract = {
	abi: DynamicStakingABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const LuckyRoundContract = {
	abi: LuckyRoundABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const LuckyRoundBetContract = {
	abi: LuckyRoundBetABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const PassContract = {
	abi: PassABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const RouletteContract = {
	abi: RouletteABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const RouletteBetContract = {
	abi: RouletteBetABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const GameContract = {
	abi: PredictGameABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const BetInterfaceContract = {
	abi: BetInterfaceABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const PartnerContract = {
	abi: PartnerABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const DataFeedContract = {
	abi: DataFeedABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const CoreContract = {
	abi: CoreABI,
};
export const MultimintContract = {
	abi: MultimintABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const BetsMemoryContract = {
	abi: BetsMemoryABI,
};
export const AffiliateContract = {
	abi: AffiliateABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const AffiliateFundContract = {
	abi: AffiliateFundABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const PredictContract = {
	abi: PredictABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const PredictBetContract = {
	abi: PredictBetABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const StonesContract = {
	abi: StonesABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const StonesBetContract = {
	abi: StonesBetABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};
export const HelperContract = {
	abi: HelperABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const EventFactoryContract = {
	abi: EventFactoryABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const EventContract = {
	abi: EventABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const EventBetContract = {
	abi: EventBetABI as readonly Narrow<
		Narrow<
			| AbiConstructor
			| AbiError
			| AbiEvent
			| AbiFallback
			| AbiFunction
			| AbiReceive
		>
	>[],
};

export const defaultMulticall: Address =
	"0xcA11bde05977b3631167028862bE2a173976CA11";

export * from "./utils";

export * from "./contracts/Token.ts";
