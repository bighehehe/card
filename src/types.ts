export enum CardCategory {
  ALL = '全部',
  CASHBACK = '返现/消费金',
  TRAVEL = '商旅出行',
  PREMIUM = '高端/白金',
  STUDENT = '学生/年轻',
  NO_FEE = '免年费',
}

export interface CreditCard {
  id: string;
  name: string;
  bank: string;
  image: string;
  category: CardCategory[];
  annualFee: string;
  welcomeBonus: string;
  apr: string;
  rating: number;
  tags: string[];
  pros: string[];
  cons: string[];
  features: {
    rewardsRate: string;
    foreignTxFee: string;
    creditScoreReq: string;
  };
}

export interface GuideArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string;
}
