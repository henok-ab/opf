export type Doc = { title: string; intro: string; sections: [string, string][] };
export const legal: Record<string, Doc> = {
 'privacy-policy': { title: 'Privacy Policy', intro: 'How Online Prop Firm handles your personal data.', sections: [
  ['Who we are', 'Online Prop Firm (onlinepropfirm.com) is operated by [LEGAL ENTITY NAME, ADDRESS]. Contact: info@onlinepropfirm.com.'],
  ['What we collect', 'Details you send through the contact form (name, email, message), newsletter email addresses if you subscribe, and anonymised usage data from our analytics tool [PLAUSIBLE/GA4] if you consent where required.'],
  ['How we use it', 'To reply to your messages, send updates you asked for, keep the site secure, and understand how the site is used.'],
  ['Third parties', 'We use [EMAIL SERVICE] to deliver contact messages, [ANALYTICS] for statistics, and YouTube (privacy-enhanced mode) for videos. Firms we link to are separate websites with their own policies, and affiliate links may set cookies that track referrals.'],
  ['Your rights', 'Depending on where you live, you may ask to access, correct or delete your data or object to its use. Email info@onlinepropfirm.com.'],
  ['Retention and changes', 'We keep messages only as long as needed to respond and for [X] months afterwards. We may update this policy and will change the date below when we do.'] ] },
 'terms': { title: 'Terms of Use', intro: 'The rules for using this website.', sections: [
  ['Use of the site', 'By using onlinepropfirm.com you agree to these terms. If you do not agree, please do not use the site.'],
  ['Educational content only', 'Everything on this site is for education and information. It is not financial, investment or legal advice.'],
  ['Accuracy', 'We work to keep information correct, but firm rules, prices and offers change often. Verify details on each firm\'s official site before you buy.'],
  ['Intellectual property', 'Site content belongs to Online Prop Firm unless stated otherwise. Firm names and logos belong to their owners.'],
  ['Third-party links', 'We are not responsible for the content or practices of other websites.'],
  ['Liability', 'To the extent the law allows, we are not liable for losses arising from use of this site or from decisions you make based on it.'],
  ['Changes and law', 'We may update these terms. They are governed by the laws of [JURISDICTION].'] ] },
 'affiliate-disclosure': { title: 'Affiliate Disclosure', intro: 'How we earn money and how it affects our reviews.', sections: [
  ['Affiliate links', 'Some links on this site are affiliate links. If you click one and make a purchase, we may earn a commission at no extra cost to you.'],
  ['Discount codes', 'Some codes on our Discounts page are tied to our affiliate relationships. Codes and terms are set by each firm and can change.'],
  ['Independence', 'Commissions do not buy better reviews. We aim to describe each firm\'s rules and trade-offs fairly, including the drawbacks.'],
  ['Marking', 'Affiliate links are marked rel="sponsored" and are flagged near the button or section where they appear.'],
  ['Questions', 'Email info@onlinepropfirm.com.'] ] },
 'risk-disclaimer': { title: 'Risk Disclaimer', intro: 'Please read this before trading or buying any challenge.', sections: [
  ['Trading is risky', 'Trading forex, futures and other leveraged products involves a high risk of loss. Most traders lose money. Never trade money you cannot afford to lose.'],
  ['Not financial advice', 'Online Prop Firm does not give financial advice. Content on this site is educational and reflects our opinion at the time of writing.'],
  ['Prop firms carry their own risks', 'Challenge fees may be non-refundable, rules can change, and passing an evaluation does not guarantee payouts. Read each firm\'s terms before you pay.'],
  ['Past performance', 'Past results, including any shown by firms or traders, do not guarantee future results.'],
  ['Do your own research', 'Verify all details on the firm\'s official site and consider speaking to a licensed adviser.'] ] },
};
