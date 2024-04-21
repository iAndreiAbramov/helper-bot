export interface ZeroXRateResponse {
  chainId: number;
  price: string;
  grossPrice: string;
  estimatedPriceImpact: string;
  value: string;
  gasPrice: string;
  gas: string;
  estimatedGas: string;
  protocolFee: string;
  minimumProtocolFee: string;
  buyTokenAddress: string;
  buyAmount: string;
  grossBuyAmount: string;
  sellTokenAddress: string;
  sellAmount: string;
  grossSellAmount: string;
  sources: {
    name: string;
    proportion: string;
  }[];
  allowanceTarget: string;
  sellTokenToEthRate: string;
  buyTokenToEthRate: string;
  fees: {
    zeroExFee: null;
  };
  auxiliaryChainData: Record<string, unknown>;
}
