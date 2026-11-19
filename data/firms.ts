// Edit firms here. Any field left undefined is hidden on the live page. Verify every value on the firm's official site.
export type Firm = {
  slug: string; name: string; kind: 'Forex' | 'Futures'; location?: string; split?: string; plans?: string;
  targets?: string; limits?: string; highlight?: string; platforms?: string; payouts?: string;
  affiliateUrl: string; youtubeId?: string; videoSummary?: string; updated: string; whoFor?: string;
  pros?: string[]; cons?: string[]; faq?: { q: string; a: string }[]; featured?: boolean;
};
const AFF = '[AFFILIATE_URL]';
export const firms: Firm[] = [
  { slug:'ftmo', name:'FTMO', kind:'Forex', location:'', split:'80%, up to 90%', plans:'2-step', targets:'10% then 5%', limits:'5% daily; 10% max (static)', highlight:'Longest track record, scaling plan', affiliateUrl:AFF, updated:'[DATE]', featured:true },
  { slug:'the5ers', name:'The5ers', kind:'Forex', split:'50-100%', plans:'Several programs', limits:'Max drawdown 6-10% by program', highlight:'Low entry cost, fee refunded with payouts', affiliateUrl:AFF, updated:'[DATE]', featured:true },
  { slug:'fundednext', name:'FundedNext', kind:'Forex', split:'Up to 95%', plans:'1- and 2-step', highlight:'Profit share during the challenge, lower fees', affiliateUrl:AFF, updated:'[DATE]', featured:true },
  { slug:'alpha-futures', name:'Alpha Futures', kind:'Futures', affiliateUrl:AFF, updated:'[DATE]', featured:true },
  { slug:'funding-pips', name:'Funding Pips', kind:'Forex', location:'Dubai, UAE', split:'60-100%', plans:'1-Step, 2-Step, 2-Step Pro, Zero', targets:'2-Step Standard: 8% + 5%', limits:'5% daily; 10% max', highlight:'Instant funding option', affiliateUrl:AFF, updated:'[DATE]' },
  { slug:'e8-markets', name:'E8 Markets', kind:'Forex', location:'United States', split:'80-100%', plans:'E8 One (custom), Signature (fixed)', targets:'E8 One: 6-21%', limits:'E8 One: daily 3-9.2%, drawdown 4-14%', highlight:'Customizable rules at checkout', affiliateUrl:AFF, updated:'[DATE]' },
  { slug:'alpha-capital-group', name:'Alpha Capital Group', kind:'Forex', location:'United Kingdom', split:'80%', plans:'One, Pro, Swing, Three', targets:'6-10%', limits:'Daily 3-5%, drawdown 6-10%', highlight:'Four plan types', affiliateUrl:AFF, updated:'[DATE]' },
];
export const getFirm = (s: string) => firms.find(f => f.slug === s);
