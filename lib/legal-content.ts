export interface LegalSection {
  heading: string
  callout?: string
  paragraphs: string[]
}

export interface LegalPageData {
  title: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
}

export const DISCLOSURES_DATA: LegalPageData = {
  title: "Website Disclosures",
  lastUpdated: "08.07.2026",
  intro:
    'These Disclosures apply to align.xyz and all content published by [ALIGN LEGAL ENTITY NAME] ("Align," "we," "us") on the Site, including our blog and any materials linked from it. They are incorporated into our Terms of Service. Please read them carefully.',
  sections: [
    {
      heading: "1. No Offer or Solicitation",
      callout:
        "NOTHING ON THIS SITE CONSTITUTES AN OFFER TO SELL, OR A SOLICITATION OF AN OFFER TO BUY, ANY SECURITY, DIGITAL ASSET, TOKEN, FUND INTEREST, OR OTHER FINANCIAL INSTRUMENT, IN ANY JURISDICTION, NOR WILL ANY SUCH INSTRUMENT BE SOLD IN ANY JURISDICTION WHERE THE OFFER OR SALE WOULD BE UNLAWFUL PRIOR TO REGISTRATION OR QUALIFICATION UNDER THE LAWS OF THAT JURISDICTION.",
      paragraphs: [
        "Any offering by Align, its affiliates, or ventures within its network is made only through definitive offering documents (such as a subscription agreement, private placement memorandum, or equivalent), only to persons eligible under applicable law (which may include accredited-investor, qualified-purchaser, or comparable requirements in the relevant jurisdiction), and only pursuant to available exemptions from registration or prospectus requirements. The information on this Site is qualified in its entirety by any such offering documents, which control in the event of any inconsistency.",
      ],
    },
    {
      heading: "2. Not Investment, Legal, or Tax Advice; No Reliance",
      paragraphs: [
        "Content on this Site \u2014 including blog posts, portfolio descriptions, and commentary \u2014 reflects the views of its authors as of the date written, is provided for general information only, and does not constitute investment, legal, tax, accounting, or other professional advice, or a recommendation to buy, sell, or hold any asset. It is not tailored to the circumstances of any person, and no content on this Site takes into account your objectives, financial situation, or needs.",
        "You should consult your own legal, tax, and financial advisers before making any investment or financial decision. You may not rely on any content on this Site as the basis for any decision, and Align accepts no liability for any loss arising from any use of, or reliance on, this Site or its content, to the maximum extent permitted by law.",
      ],
    },
    {
      heading: "3. Regulatory Status",
      paragraphs: [
        "Align operates as a venture studio and network. Align is not registered as a broker-dealer, investment adviser, exchange, or funding portal with the U.S. Securities and Exchange Commission, FINRA, or any other securities regulator, and nothing on this Site should be understood as an indication of such registration or licensing, except as may be expressly stated in writing.",
        "[Counsel note: confirm and tailor this section to reflect the entity's actual regulatory status, licenses, and available exemptions in each jurisdiction in which it operates or solicits.]",
      ],
    },
    {
      heading: "4. Network Introductions and Deal Sharing",
      paragraphs: [
        "Align may, from time to time, share information about startups in its network with investors, or introduce founders and investors to one another. Any such sharing or introduction:",
        "is provided for informational and networking purposes only, and does not constitute a recommendation, endorsement, solicitation, or offer by Align of any investment, or advice that any investment is suitable for any person;",
        "does not mean that Align has verified, performed due diligence on, or vouches for any startup, founder, investor, or the accuracy of any materials shared \u2014 each party is solely responsible for its own independent investigation and diligence;",
        "does not make Align a party to, or agent, broker, placement agent, underwriter, or adviser in respect of, any resulting transaction, and Align does not negotiate terms, handle investor funds, or provide transaction documents on behalf of either party except as expressly agreed in writing; and",
        "creates no obligation on Align, and any transaction between introduced parties is entered into directly between them, at their own risk, and subject to their own documentation and applicable law.",
        "Access to any information about specific opportunities may be limited to persons who meet applicable eligibility requirements in their jurisdiction, and Align reserves the right to decline to share information with, or accept applications from, any person for any reason.",
      ],
    },
    {
      heading: "5. Performance Figures and Portfolio Metrics",
      paragraphs: [
        "Figures presented on this Site \u2014 such as aggregate value across ventures, capital raised, investor counts, and portfolio-company revenue \u2014 are provided solely to illustrate the scale of Align's activities. Unless otherwise stated, such figures:",
        "are estimates prepared internally by Align, are unaudited, and have not been reviewed or verified by any independent party;",
        "may reflect valuations based on the most recent financing rounds or internal marks, which are inherently uncertain, may never be realized, and can decline significantly, particularly for early-stage and digital-asset ventures;",
        "are aggregated across ventures and time periods and are not representative of the performance of any single venture or of results any investor did or will achieve;",
        "may include unrealized amounts, gross figures before fees and expenses, and amounts attributable to parties other than Align; and",
        "speak only as of the date they were prepared and may not reflect subsequent developments.",
      ],
      callout:
        "PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS. THERE CAN BE NO ASSURANCE THAT ANY VENTURE, INVESTMENT, OR STRATEGY REFERENCED ON THIS SITE WILL ACHIEVE ITS OBJECTIVES OR AVOID SUBSTANTIAL OR TOTAL LOSSES.",
    },
    {
      heading: "6. Risk Factors \u2014 Early-Stage Ventures and Digital Assets",
      paragraphs: [
        "Investing in early-stage companies and in businesses connected to blockchain, digital assets, or artificial intelligence involves a high degree of risk, and is suitable only for persons who can bear the loss of their entire investment. Risks include, without limitation:",
        "total loss of capital \u2014 most early-stage ventures fail, and investments are typically illiquid, with no assurance of any secondary market, distribution, or exit;",
        "extreme price volatility of digital assets and tokens, which can lose most or all of their value rapidly and without warning;",
        "legal and regulatory uncertainty \u2014 the treatment of digital assets is evolving and inconsistent across jurisdictions and may adversely affect ventures, tokens, or investors, including through enforcement actions, reclassification, or changes in law;",
        "technology risks, including smart-contract vulnerabilities, protocol failures, custody and key-management failures, hacks, exploits, and fraud prevalent in the digital-asset ecosystem;",
        "venture risks, including valuation uncertainty, limited operating history, unproven business models, dependence on key personnel, and dilution in subsequent financing rounds; and",
        "structural risks, including concentration, conflicts of interest, and information asymmetries inherent in venture-studio and network models.",
        "This list is not exhaustive. Any offering documents will contain a fuller statement of risks, which you must read in their entirety before investing. Never invest more than you can afford to lose.",
      ],
    },
    {
      heading: "7. Forward-Looking Statements",
      paragraphs: [
        'This Site may contain forward-looking statements \u2014 statements about plans, expectations, projections, targets, or beliefs concerning future events, including the prospects of ventures in our network. Words such as "will," "expect," "believe," "anticipate," "target," "aim," and similar expressions identify such statements. Forward-looking statements are inherently uncertain, are based on assumptions that may prove incorrect, and involve known and unknown risks beyond our control. Actual results may differ materially from those expressed or implied. Align undertakes no obligation to update or revise any forward-looking statement, and you should not place any reliance on them.',
      ],
    },
    {
      heading: "8. Conflicts of Interest",
      paragraphs: [
        "Align, its principals, employees, and affiliates may hold equity, tokens, advisory positions, board seats, or other economic interests in ventures described on this Site; may receive fees, carried interest, or other compensation in connection with those ventures; may buy or sell interests in them at any time; and may have interests that differ from, or conflict with, those of investors or other network participants. Content on this Site should be read with these potential conflicts in mind. Material conflicts relevant to a specific offering will be disclosed in that offering's documents.",
      ],
    },
    {
      heading: "9. Testimonials and Endorsements",
      paragraphs: [
        "Any statements on this Site attributable to founders, investors, or other participants in the Align network reflect those individuals' own views and experiences, may not be representative of the experience of others, and are no guarantee of future performance or success. Unless expressly stated, no compensation was provided for such statements; if any endorsement was compensated or given by a person with a material relationship to Align, that fact will be disclosed alongside it.",
      ],
    },
    {
      heading: "10. Third-Party Information",
      paragraphs: [
        "Certain information on this Site is derived from third-party sources believed to be reliable. Align has not independently verified such information and makes no representation or warranty, express or implied, as to its accuracy, completeness, or fitness for any purpose. Links to third-party sites are provided for convenience only and do not constitute endorsement, and Align accepts no responsibility for their content.",
      ],
    },
    {
      heading: "11. Jurisdictional Limitations",
      paragraphs: [
        "The Site is not directed at, and its content is not intended for distribution to or use by, any person in any jurisdiction where such publication, availability, or use would be contrary to law or regulation, or would subject Align or its affiliates to any registration or licensing requirement. Persons who access the Site do so on their own initiative and are responsible for informing themselves about, and observing, all applicable restrictions in their own jurisdictions.",
      ],
    },
    {
      heading: "12. No Reliance; Updates; Precedence",
      paragraphs: [
        'Content on this Site is provided "as is," may contain errors or become outdated, and may be changed or removed at any time without notice. Align is under no obligation to update it and assumes no duty of care to any reader. In the event of any inconsistency between this Site and definitive offering, subscription, or transaction documents, those documents control in all respects.',
      ],
    },
    {
      heading: "13. Contact",
      paragraphs: [
        "Questions regarding these Disclosures may be directed to hello@align.xyz.",
      ],
    },
  ],
}

export const TERMS_DATA: LegalPageData = {
  title: "Terms of Service",
  lastUpdated: "08.07.2026",
  intro:
    'These Terms of Service govern your access to and use of the website located at align.xyz and any related pages, content, and features we operate (collectively, the "Site"). The Site is operated by [ALIGN LEGAL ENTITY NAME], a [entity type] organized under the laws of [jurisdiction] ("Align," "we," "us," or "our").',
  sections: [
    {
      heading: "1. Who May Use the Site",
      callout:
        "BY ACCESSING OR USING THE SITE, YOU AGREE TO BE BOUND BY THESE TERMS, OUR PRIVACY POLICY, AND OUR DISCLOSURES, EACH OF WHICH IS INCORPORATED INTO THESE TERMS BY REFERENCE. IF YOU DO NOT AGREE, YOU MUST NOT ACCESS OR USE THE SITE. THESE TERMS CONTAIN A BINDING ARBITRATION PROVISION, A CLASS ACTION WAIVER, AND BROAD DISCLAIMERS AND LIMITATIONS OF LIABILITY THAT AFFECT YOUR LEGAL RIGHTS.",
      paragraphs: [
        "You must be at least 18 years of age (or the age of majority in your jurisdiction, if higher) and capable of forming a binding contract to use the Site. By using the Site, you represent and warrant that: (a) you meet these requirements; (b) your use of the Site complies with all laws and regulations applicable to you, including any restrictions in your jurisdiction on accessing content relating to venture investing or digital assets; and (c) you are not located in, organized under the laws of, or a resident of any jurisdiction subject to comprehensive sanctions, and you are not named on any sanctions or restricted-parties list maintained by the United States, the United Nations, the European Union, the United Kingdom, Canada, or any other applicable authority.",
      ],
    },
    {
      heading:
        "2. Informational Purpose Only \u2014 No Offer, No Advice, No Reliance",
      paragraphs: [
        "The Site describes Align's activities as a venture studio and network. It is provided for general informational purposes only. Nothing on the Site constitutes, or should be construed as:",
        "an offer to sell, or a solicitation of an offer to buy, any security, digital asset, token, fund interest, or other financial instrument, in any jurisdiction;",
        "investment, legal, tax, accounting, or other professional advice, or a recommendation regarding any investment strategy or transaction; or",
        "a representation that any venture, investment, or opportunity referenced on the Site is suitable or available to you.",
        "Any offering of securities or other investment opportunities by Align or its affiliates is made only to eligible persons, through definitive offering documents, and pursuant to applicable exemptions from registration \u2014 never through this Site.",
        "You agree that you will not rely, and have not relied, on any content on the Site in making any investment, financial, legal, or other decision, and that any such decision is made solely at your own risk and on the basis of your own independent judgment and professional advice.",
      ],
    },
    {
      heading: "3. No Fiduciary or Advisory Relationship",
      paragraphs: [
        "Your use of the Site does not create, and shall not be deemed to create, any fiduciary, advisory, brokerage, agency, joint-venture, partnership, employment, or client relationship between you and Align. Align owes you no duties (fiduciary or otherwise) by virtue of your access to or use of the Site, and to the maximum extent permitted by law you irrevocably waive any such duties that might otherwise be implied.",
      ],
    },
    {
      heading: "4. Assumption of Risk",
      paragraphs: [
        "To the maximum extent permitted by law, you assume all risks arising out of or relating to your access to and use of the Site and any action you take based on its content, including the risks described in our Disclosures. You acknowledge that early-stage ventures and digital assets involve a high degree of risk, including total loss of capital, and that Align has made no representation or warranty to you regarding any venture, asset, or outcome.",
      ],
    },
    {
      heading: "5. Changes to the Terms and the Site",
      paragraphs: [
        'We may update these Terms at any time in our sole discretion. The "Last updated" date above reflects the most recent version. Changes take effect when posted, and your continued use of the Site after posting constitutes acceptance. We may also modify, suspend, or discontinue any part of the Site at any time, without notice and without liability to you.',
      ],
    },
    {
      heading: "6. Communications and Submissions",
      paragraphs: [
        "If you contact us, subscribe to our blog or mailing list, or submit information through the Site (for example, as a founder or prospective investor), you represent and warrant that the information you provide is accurate, that you have all rights necessary to provide it, and that it does not violate any law or third-party right.",
        'Unsolicited submissions. Any ideas, business plans, pitch materials, feedback, or suggestions you send us through or in connection with the Site ("Submissions") are non-confidential and non-proprietary. You grant Align a perpetual, irrevocable, worldwide, royalty-free, sublicensable, transferable license to use, reproduce, modify, and otherwise exploit Submissions for any purpose, without compensation, attribution, or obligation to you, except as expressly agreed in a separate written agreement signed by Align or as required by law. Do not submit confidential or proprietary information through the Site. Align independently develops, evaluates, and invests in ventures, and you agree that Align\'s activities may resemble your Submissions without giving rise to any claim.',
        "Electronic communications. By using the Site or providing your email address, you consent to receive communications from us electronically, and you agree that all agreements, notices, and disclosures we provide electronically satisfy any legal requirement that such communications be in writing. You may opt out of marketing communications at any time via the unsubscribe mechanism in our emails or by contacting hello@align.xyz.",
      ],
    },
    {
      heading: "7. Intellectual Property",
      paragraphs: [
        'The Site and all of its content \u2014 including text, graphics, logos, trademarks, trade dress, images, data, and software \u2014 are owned by Align or its licensors and are protected by intellectual-property laws. We grant you a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access and view the Site for your personal, non-commercial informational use only. All rights not expressly granted are reserved. You may not copy, reproduce, distribute, modify, create derivative works from, publicly display, scrape, or otherwise exploit any part of the Site without our prior written consent. "Align" and our logos may not be used without our prior written permission.',
      ],
    },
    {
      heading: "8. Acceptable Use",
      paragraphs: [
        "You agree not to:",
        "use the Site in violation of any applicable law or regulation, including securities, anti-money-laundering, sanctions, and export-control laws;",
        "misrepresent your identity, eligibility, or affiliation, or impersonate any person or entity;",
        "interfere with or disrupt the Site, probe or test its vulnerability, introduce malicious code, or circumvent any security or access controls;",
        "use bots, crawlers, scrapers, or other automated means to access the Site or harvest data or content from it \u2014 including for training, fine-tuning, or evaluating machine-learning or artificial-intelligence models \u2014 without our prior written consent;",
        "frame, mirror, or deep-link to the Site in a manner that misrepresents your relationship with Align; or",
        "use the Site to develop a competing product or service.",
        "We may investigate suspected violations and cooperate with law enforcement.",
      ],
    },
    {
      heading: "9. Third-Party Content and Links",
      paragraphs: [
        "The Site may reference or link to third-party websites, ventures, protocols, or services, including portfolio companies. These references are provided for convenience only. We do not control, endorse, or assume any responsibility for third-party content, products, services, or practices, and a link or reference does not imply endorsement or affiliation. Your dealings with any third party are solely between you and that third party, and you agree that Align shall have no liability arising from them.",
      ],
    },
    {
      heading: "10. Disclaimer of Warranties",
      callout:
        'THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, COMPLETENESS, TIMELINESS, OR AVAILABILITY, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE, ALL OF WHICH ALIGN EXPRESSLY DISCLAIMS TO THE MAXIMUM EXTENT PERMITTED BY LAW. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, THAT DEFECTS WILL BE CORRECTED, OR THAT ANY CONTENT \u2014 INCLUDING METRICS, FIGURES, VALUATIONS, OR PORTFOLIO INFORMATION \u2014 IS COMPLETE, CURRENT, OR ACCURATE. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM ALIGN OR THROUGH THE SITE CREATES ANY WARRANTY NOT EXPRESSLY MADE IN THESE TERMS.',
      paragraphs: [],
    },
    {
      heading: "11. Limitation of Liability",
      callout:
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW: (a) ALIGN AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES; (b) THE ALIGN PARTIES' AGGREGATE LIABILITY WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US$100); AND (c) THE EXCLUSIONS AND LIMITATIONS IN THIS SECTION APPLY REGARDLESS OF THE FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY. SOME JURISDICTIONS DO NOT ALLOW CERTAIN EXCLUSIONS OR LIMITATIONS OF LIABILITY, SO SOME OF THE ABOVE MAY NOT APPLY TO YOU; IN THAT CASE THE ALIGN PARTIES' LIABILITY IS LIMITED TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.",
      paragraphs: [
        "Nothing in these Terms excludes liability that cannot be excluded under applicable law, including for fraud, fraudulent misrepresentation, or death or personal injury caused by negligence where such exclusion is prohibited.",
      ],
    },
    {
      heading: "12. Release",
      paragraphs: [
        "To the maximum extent permitted by law, you release the Align Parties from any and all claims, demands, and damages of every kind, known or unknown, arising out of or in any way connected with your use of the Site, content published on it, or your dealings with any third party referenced on or linked from it. If you are a California resident, you waive California Civil Code \u00a7 1542 (and any analogous law of any other jurisdiction), which provides that a general release does not extend to claims the releasing party does not know or suspect to exist in its favor at the time of the release.",
      ],
    },
    {
      heading: "13. Indemnification",
      paragraphs: [
        "You agree to defend, indemnify, and hold harmless the Align Parties from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees and costs) arising out of or related to: (a) your access to or use of the Site; (b) your Submissions; (c) your breach of these Terms or any representation or warranty in them; or (d) your violation of any law or the rights of any third party. We reserve the right, at your expense, to assume the exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with our defense.",
      ],
    },
    {
      heading: "14. Dispute Resolution; Arbitration; Class Action Waiver",
      callout:
        "PLEASE READ THIS SECTION CAREFULLY \u2014 IT AFFECTS YOUR RIGHTS. (a) Informal resolution first. (b) Binding arbitration. (c) CLASS ACTION AND JURY TRIAL WAIVER. ALL CLAIMS MUST BE BROUGHT IN THE PARTIES' INDIVIDUAL CAPACITY. (d) Time limit on claims. (e) Consumer carve-out.",
      paragraphs: [
        "Before filing any claim, you agree to first contact us at hello@align.xyz with a written description of the dispute and give us 30 days to attempt to resolve it informally.",
        "Any dispute, claim, or controversy arising out of or relating to these Terms or the Site that is not resolved informally shall be finally resolved by binding, confidential arbitration administered by [ARBITRAL INSTITUTION] under its rules then in effect, before a single arbitrator, seated in [venue], conducted in English. Judgment on the award may be entered in any court of competent jurisdiction. Either party may seek injunctive or equitable relief in a court of competent jurisdiction to protect intellectual property or confidential information.",
        "To the maximum extent permitted by law, any claim arising out of or relating to the Site or these Terms must be commenced within one (1) year after the claim accrues; otherwise it is permanently barred.",
        "If the law of your place of residence grants you mandatory rights to bring claims in your local courts or under local consumer-protection law, nothing in this Section deprives you of those rights.",
      ],
    },
    {
      heading: "15. Governing Law",
      paragraphs: [
        "These Terms and any dispute arising out of or relating to them or the Site are governed by the laws of [governing jurisdiction], without regard to conflict-of-laws principles, and excluding the United Nations Convention on Contracts for the International Sale of Goods. Subject to Section 14 and any mandatory consumer protections in your place of residence, the courts located in [venue] have exclusive jurisdiction over any matter not subject to arbitration, and each party waives any objection to venue in those courts.",
      ],
    },
    {
      heading: "16. Termination",
      paragraphs: [
        "We may suspend or terminate your access to the Site at any time, with or without notice or cause, without liability to you. Sections 2, 3, 4, 6, 7, and 9 through 18 survive termination.",
      ],
    },
    {
      heading: "17. Force Majeure",
      paragraphs: [
        "Align is not liable for any delay or failure to perform resulting from causes beyond its reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest, labor disputes, governmental action, epidemics, power or internet failures, cyberattacks, or failures of third-party providers.",
      ],
    },
    {
      heading: "18. General",
      paragraphs: [
        "These Terms, together with the Privacy Policy and Disclosures, constitute the entire agreement between you and Align regarding the Site and supersede all prior or contemporaneous understandings on that subject. If any provision is held invalid or unenforceable, it will be modified to the minimum extent necessary to make it enforceable (or severed if it cannot be), and the remaining provisions remain in full force. Our failure to enforce any provision is not a waiver of it. You may not assign or transfer these Terms or any rights under them; any attempted assignment is void. We may assign these Terms freely, including in connection with a merger, acquisition, financing, or sale of assets. Headings are for convenience only.",
      ],
    },
    {
      heading: "19. Contact",
      paragraphs: [
        "Questions about these Terms may be directed to hello@align.xyz or by mail to [ALIGN LEGAL ENTITY NAME], [registered address].",
      ],
    },
  ],
}

export const PRIVACY_DATA: LegalPageData = {
  title: "Privacy Policy",
  lastUpdated: "08.07.2026",
  intro:
    'This Privacy Policy explains how [ALIGN LEGAL ENTITY NAME] ("Align," "we," "us," or "our") collects, uses, discloses, and protects personal information when you visit align.xyz and related pages we operate (the "Site"), contact us, subscribe to our communications, or otherwise interact with us online. It also describes the rights and choices available to you. Align acts as the data controller for personal information collected through the Site. If you engage with Align or its affiliates as an investor, founder, or counterparty, additional privacy notices may apply to that relationship and will govern to the extent of any conflict.',
  sections: [
    {
      heading: "1. Information We Collect",
      paragraphs: [
        "Information you provide directly. When you use our contact form, subscribe to our blog or mailing list, apply to work with us, or otherwise communicate with us, we collect the information you choose to provide \u2014 typically your name, email address, company or fund affiliation, role (e.g., founder or investor), and the contents of your message.",
        "Information collected automatically. When you visit the Site, we and our service providers automatically collect certain technical data, such as IP address, approximate location derived from IP, device and browser type, operating system, referring pages, pages viewed, and timestamps. This is collected through server logs, cookies, and similar technologies (see Section 6).",
        "Information from third parties. In the course of evaluating potential founders, investors, or business relationships, we may receive or look up publicly available professional information (for example, from company websites or professional networks) and information from referrals within our network.",
        "We do not intentionally collect sensitive categories of personal information (such as health data or government identifiers) through the Site, and we ask that you not submit them.",
      ],
    },
    {
      heading: "2. How We Use Personal Information",
      paragraphs: [
        "We use personal information to:",
        "operate, maintain, secure, and improve the Site;",
        "respond to your inquiries and manage our relationships with founders, investors, and partners;",
        "send you blog posts, newsletters, and updates you have requested, which you can opt out of at any time;",
        "evaluate potential business, investment, and studio opportunities;",
        "comply with legal and regulatory obligations, including anti-money-laundering, sanctions-screening, and record-keeping obligations that may apply to our activities; and",
        "establish, exercise, or defend legal claims, and detect and prevent fraud, abuse, or security incidents.",
        'Where laws such as the EU/UK General Data Protection Regulation ("GDPR") apply, we rely on the following legal bases: your consent (e.g., for marketing emails); performance of, or steps prior to entering, a contract; our legitimate interests (e.g., operating and securing the Site, developing our network and business); and compliance with legal obligations.',
      ],
    },
    {
      heading: "3. How We Share Personal Information",
      paragraphs: [
        "We do not sell personal information, and we do not share it with third parties for their own cross-context behavioral advertising (as those terms are defined under applicable U.S. state privacy laws). We share personal information only:",
        "with service providers who process it on our behalf under contract \u2014 such as website hosting (e.g., Vercel), email delivery, analytics, and customer-relationship tools;",
        "with our affiliates and, where relevant to a prospective relationship you have initiated, within our venture network \u2014 for example, introducing a founder to a portfolio company or investor, where you would reasonably expect it or have asked us to;",
        "with professional advisers (lawyers, accountants, auditors) under duties of confidentiality;",
        "with regulators, courts, or law enforcement where required or permitted by law, and to enforce our terms or protect the rights, safety, or property of Align or others; and",
        "in connection with a corporate transaction such as a financing, merger, reorganization, or sale of assets, subject to appropriate safeguards.",
      ],
    },
    {
      heading: "4. International Transfers",
      paragraphs: [
        "We and our service providers may process personal information in countries other than your own, including countries that may not provide the same level of data protection as your home jurisdiction. Where required, we implement appropriate safeguards for such transfers, such as the European Commission's Standard Contractual Clauses or the UK equivalents. You may contact us for more information about these safeguards.",
      ],
    },
    {
      heading: "5. Retention",
      paragraphs: [
        "We keep personal information only as long as needed for the purposes described above: for as long as we have an active relationship or dialogue with you; for as long as you remain subscribed to our communications; and thereafter as necessary to comply with legal, regulatory, tax, or accounting requirements, resolve disputes, and enforce agreements. When personal information is no longer needed, we delete or de-identify it.",
      ],
    },
    {
      heading: "6. Cookies, Analytics, and Do Not Track",
      paragraphs: [
        "The Site uses strictly necessary cookies to function and may use analytics cookies or similar technologies to understand how the Site is used and to improve it. Where required by law, we will request your consent before setting non-essential cookies and provide a means to withdraw it. You can also control cookies through your browser settings; disabling cookies may affect Site functionality.",
        'Some browsers transmit "Do Not Track" signals; because no common industry standard has been adopted, the Site does not currently respond to them. Where required by applicable law, we honor recognized opt-out preference signals such as the Global Privacy Control.',
      ],
    },
    {
      heading: "7. Your Rights and Choices",
      paragraphs: [
        "Depending on where you live, you may have some or all of the following rights regarding your personal information, subject to legal conditions and exceptions:",
        "to access the personal information we hold about you and receive a copy in a portable format;",
        "to correct inaccurate or incomplete information;",
        "to request deletion of your information;",
        "to object to, or request restriction of, certain processing, including direct marketing;",
        "to withdraw consent at any time, without affecting processing that occurred before withdrawal; and",
        "to lodge a complaint with your data-protection authority (for EEA/UK residents) or exercise rights available under applicable state or provincial privacy laws (for example, the California Consumer Privacy Act or Quebec's Law 25), including the right not to be discriminated against for exercising them.",
        "To exercise any of these rights, contact us at hello@align.xyz. We may need to verify your identity before acting on a request, and we will respond within the timeframe required by applicable law. Authorized agents may submit requests on your behalf where applicable law permits, subject to verification.",
        "Marketing opt-out: every marketing email we send includes an unsubscribe link; you may also opt out by contacting us.",
      ],
    },
    {
      heading: "8. Security",
      paragraphs: [
        "We use administrative, technical, and organizational measures appropriate to the nature of the data we process, including encryption in transit, access controls, and reputable infrastructure providers. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security. Any transmission of information to or from the Site is at your own risk. Please use caution when sending information over the internet.",
      ],
    },
    {
      heading: "9. Children",
      paragraphs: [
        "The Site is not directed to children, and we do not knowingly collect personal information from anyone under 18. If you believe a minor has provided us personal information, contact us and we will delete it.",
      ],
    },
    {
      heading: "10. Third-Party Sites",
      paragraphs: [
        "The Site links to third-party websites and services, including portfolio-company sites. This Policy does not apply to those third parties, and we are not responsible for their privacy practices. Review their privacy policies before providing them information.",
      ],
    },
    {
      heading: "11. Changes to This Policy",
      paragraphs: [
        'We may update this Policy from time to time. The "Last updated" date reflects the most recent version. If we make material changes, we will take reasonable steps to notify you, such as posting a prominent notice on the Site or emailing subscribers. Your continued use of the Site after changes take effect constitutes acceptance of the updated Policy to the extent permitted by law.',
      ],
    },
    {
      heading: "12. Contact Us",
      paragraphs: [
        "Privacy questions, requests, and complaints may be directed to: hello@align.xyz, or by mail to [ALIGN LEGAL ENTITY NAME], [registered address].",
      ],
    },
  ],
}
