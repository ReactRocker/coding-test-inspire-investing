interface IBaseInfo {
  name: string;
  description: string;
  fund: boolean;
}

export interface IFundInfo {
  id?: number;
  ticker?: string;
  exchange?: IBaseInfo;
  name?: string;
  impactScore?: number;
  previousSharePrice?: number;
  sector?: IBaseInfo;
  industry?: null;
  marketCapitalization?: number;
  exchangeLocation?: IBaseInfo;
  domestic?: boolean;
  uniqueKey?: string;
  type?: IBaseInfo;
}

export interface Holding {
  financialInstrumentId: number;
  ticker: string;
  name: string;
  score: number;
  holdingPercentage: number;
}
