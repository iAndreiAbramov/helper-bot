export const getZeroXRoute = {
  Price: ({ sellToken, buyToken, sellAmount, gasPrice, excludedSources }: {
    sellToken: string,
    buyToken: string,
    sellAmount: string,
    gasPrice?: string,
    excludedSources?: string,
  }): string => {
    const gasPriceParam = gasPrice ? `&gasPrice=${gasPrice}` : '';
    const excludedSourcesParam = excludedSources ? `&excludedSources=${excludedSources}` : '';
    return `https://api.0x.org/swap/v1/price?sellToken=${sellToken}&buyToken=${buyToken}&sellAmount=${sellAmount}${gasPriceParam}${excludedSourcesParam}`;
  },
};
