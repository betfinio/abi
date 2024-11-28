import type { Address } from "viem";

export const defaultMulticall: Address =
	"0xcA11bde05977b3631167028862bE2a173976CA11";

export * from "./utils";

export * from "./contracts/Token.ts";
export * from "./contracts/ConservativeStakingPool.ts";
export * from "./contracts/DynamicStakingPool.ts";
export * from "./contracts/ConservativeStaking.ts";
export * from "./contracts/DynamicStaking.ts";
export * from "./contracts/Pass.ts";
export * from "./contracts/Roulette.ts";
export * from "./contracts/RouletteBet.ts";
export * from "./contracts/PredictGame.ts";
export * from "./contracts/Stones.ts";
export * from "./contracts/StonesBet.ts";
export * from "./contracts/BetInterface.ts";
export * from "./contracts/Partner.ts";
export * from "./contracts/Core.ts";
export * from "./contracts/Multimint.ts";
export * from "./contracts/DataFeed.ts";
export * from "./contracts/BetsMemory.ts";
export * from "./contracts/Affiliate.ts";
export * from "./contracts/AffiliateFund.ts";
export * from "./contracts/Predict.ts";
export * from "./contracts/PredictBet.ts";
export * from "./contracts/LuckyRound.ts";
export * from "./contracts/LuckyRoundBet.ts";
export * from "./contracts/EventFactory.ts";
export * from "./contracts/Event.ts";
export * from "./contracts/EventBet.ts";