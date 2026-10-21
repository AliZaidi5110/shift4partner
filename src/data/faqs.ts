export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "terminal" | "pricing" | "contract" | "technical" | "support";
}

export const homeFAQs: FAQItem[] = [
  {
    id: "rental-fee",
    question: "Is the Shift4 One card machine really £0 monthly rental?",
    answer: "Yes. Through our authorised partner programme, eligible UK businesses can acquire the Shift4 One smart terminal with zero monthly terminal hire or rental fees*. Unlike legacy providers that charge £20–£40+ per terminal every month, you only pay standard, competitive transaction processing rates when you accept a card payment.",
    category: "pricing",
  },
  {
    id: "free-terminal-offer",
    question: "What is the 'Free Terminal Offer' and who qualifies?",
    answer: "New UK merchant accounts processing regular card turnover can qualify to receive their terminal hardware upfront at zero capital expense*. During your initial quote review, we review your estimated card turnover and assign you the most advantageous onboarding plan.",
    category: "pricing",
  },
  {
    id: "contract-length",
    question: "Are there long multi-year tie-ins like traditional bank terminals?",
    answer: "No. Traditional high-street merchant banks frequently lock small businesses into rigid 36 to 48-month leasing contracts with punitive early termination fees. We prioritize flexibility and transparent terms, keeping you free from onerous multi-year hire lock-ins.",
    category: "contract",
  },
  {
    id: "delivery-speed",
    question: "How fast will I receive my Shift4 One card machine?",
    answer: "Once your digital merchant application is completed and verified, your terminal is typically configured and dispatched via tracked express courier for next-business-day delivery anywhere in the UK mainland.",
    category: "terminal",
  },
  {
    id: "roaming-4g",
    question: "How does the roaming 4G connectivity work?",
    answer: "The Shift4 One comes equipped with an internal multi-network roaming SIM alongside high-speed dual-band Wi-Fi. It automatically locks onto the strongest available UK mobile network (EE, Vodafone, O2, or Three). If your broadband goes down or you're trading outside at an event or market, the terminal switches to 4G seamlessly without dropping transactions.",
    category: "technical",
  },
  {
    id: "accepted-payment-methods",
    question: "Which cards and payment methods can I accept?",
    answer: "You can accept all major card schemes including Visa, Mastercard, Maestro, and American Express. Customers can pay via contactless, chip & PIN, magnetic swipe, Apple Pay, Google Pay, and Samsung Pay with instant confirmation on screen.",
    category: "terminal",
  },
  {
    id: "processing-rates",
    question: "What are the transaction processing fees?",
    answer: "Transaction rates are customized to your business type and card turnover to ensure you receive the lowest interchange-plus or blended rate available. We carry out a free, no-obligation rate review against your current statements to ensure immediate savings.",
    category: "pricing",
  },
  {
    id: "pos-integration",
    question: "Can the Shift4 One integrate with my EPOS system?",
    answer: "Yes. The Shift4 One terminal connects directly with Shift4 POS for restaurants, hospitality, retail, and mobile setups. It also supports standalone operation if you simply need a fast, reliable pay-at-table or counter-top terminal.",
    category: "technical",
  },
  {
    id: "payout-schedule",
    question: "How quickly do card takings land in my bank account?",
    answer: "Funds are deposited directly into your designated UK business bank account with next-business-day settlement as standard, helping you maintain a healthy, predictable cash flow.",
    category: "pricing",
  },
  {
    id: "setup-assistance",
    question: "Do I get help setting up the terminal?",
    answer: "Yes! Every partner merchant receives dedicated personal UK onboarding guidance. Our team pre-configures your terminal before dispatch, and walks you through initial activation, Wi-Fi pairing, and staff training over the phone.",
    category: "support",
  },
  {
    id: "support-hours",
    question: "What happens if my terminal stops working or I need support?",
    answer: "You have access to 7-day UK-based technical support. In the unlikely event of hardware malfunction, we arrange an express swap-out replacement so your business never misses a sale.",
    category: "support",
  },
  {
    id: "switching-providers",
    question: "Can you help me switch from my current card machine provider?",
    answer: "Yes. We handle switching daily from providers like Worldpay, Barclaycard, Clover, Dojo, and Zettle. We'll examine your current statements, verify how much you will save, and help you transition smoothly with zero payment downtime.",
    category: "contract",
  },
];
