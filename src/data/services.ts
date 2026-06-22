import { Shield, Database, FileText, Calculator, Scale, CheckSquare, Lightbulb, Package, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem { title: string; brief: string; }
export interface ServiceCategory {
  id: string;
  category: string;
  icon: LucideIcon;
  tagline: string;
  items: ServiceItem[];
}

export const SERVICES: ServiceCategory[] = [
  {
    id: "assurance",
    category: "Assurance Services",
    icon: Shield,
    tagline: "Independent assurance that gives stakeholders confidence.",
    items: [
      { title: "Statutory Audits", brief: "Mandatory audit of financial statements under the Companies Act, 2013, conducted in strict accordance with ICAI Standards on Auditing. We provide an independent opinion on whether your financial statements give a true and fair view, enhancing credibility with regulators, lenders, and investors." },
      { title: "Tax Audits", brief: "Conducted under Section 44AB of the Income Tax Act, 1961, for businesses exceeding the prescribed turnover threshold. We verify the accuracy of income, deductions, and claims reported, file Form 3CA/3CB and 3CD, and proactively identify disallowances to minimise future litigation." },
      { title: "GSTR-9 & GSTR-9C Annual Return Support", brief: "Preparation and filing support for the Annual Return (GSTR-9) and the self-certified Reconciliation Statement (GSTR-9C) under Section 44 of the CGST Act — mandatory for taxpayers with aggregate annual turnover above ₹5 crore. We reconcile turnover declared in GSTR-1 and GSTR-3B against audited books, verify ITC availed, and assess tax discharged — surfacing reconciliation gaps and ITC reversals well before the filing deadline." },
      { title: "Internal and Management Audits", brief: "Systematic, independent evaluation of an organisation's processes, risk management practices, and operational efficiency, benchmarked against IIA Standards. Our audits deliver actionable recommendations to strengthen governance frameworks, tighten controls, and improve overall business performance." },
      { title: "Internal Financial Controls (IFC) Testing", brief: "As mandated under Section 143(3)(i) of the Companies Act, 2013, we test the design and operating effectiveness of IFCs over financial reporting using the COSO framework. Our work equips audit committees to discharge their statutory responsibilities and reduces the risk of material financial misstatement." },
      { title: "Due Diligence", brief: "Comprehensive financial, tax, and regulatory due diligence for M&A transactions, private equity investments, and joint ventures. We surface hidden liabilities, contingent tax obligations, and off-balance-sheet exposures - providing the granular intelligence required to negotiate well-informed deal terms and valuations." },
      { title: "CAG & Bank Audits", brief: "Statutory branch audits of public sector and cooperative banks under RBI guidelines, and CAG-empanelled audits of government bodies and PSUs. We bring deep knowledge of RBI prudential norms, government accounting standards, and CAG audit methodologies to every engagement." },
      { title: "Certifications Under Various Laws", brief: "Issuance of professional certifications under FEMA, SEBI Regulations, the Companies Act, and the Income Tax Act - including Form 15CB for overseas remittances, net worth certificates, and utilisation certificates. These carry statutory accountability and are relied upon by regulators, banks, and financial institutions." },
    ],
  },
  {
    id: "bpo",
    category: "Business Process Outsourcing",
    icon: Database,
    tagline: "Scalable finance operations without the fixed-cost burden.",
    items: [
      { title: "Accounting & Audit Support", brief: "End-to-end accounting support covering ledger maintenance, trial balance preparation, month-end closing, and audit-ready financial statements under Indian GAAP and Ind AS. We act as a confidential extension of your finance function, reducing overheads while ensuring the books are perpetually audit-ready." },
      { title: "Management Accounts & MIS Reporting", brief: "Monthly and quarterly management accounts, variance analysis against budgets, and customised MIS dashboards tailored to your industry and board reporting requirements. Our reports give leadership timely visibility into business performance to drive data-driven decisions." },
      { title: "Book-Keeping & Final Accounts", brief: "Accurate, timely book-keeping on Tally, SAP, QuickBooks, or your preferred ERP, culminating in complete final accounts - Balance Sheet, Profit & Loss, and Cash Flow Statement - fully compliant with the Companies Act and applicable accounting standards." },
      { title: "Outsourced Payroll, AP & AR Management", brief: "Full outsourcing of payroll processing (including PF, ESI, PT, and TDS compliance), accounts payable, and accounts receivable management. We ensure vendor payments, employee disbursements, and collections are processed accurately and within all statutory deadlines." },
      { title: "Fixed Assets Verification & Records", brief: "Physical verification of fixed assets against the Fixed Asset Register, capitalisation of CWIP, computation of depreciation under Companies Act Schedule II and the Income Tax Act, and identification of obsolete or impaired assets - ensuring accurate reporting and clean records for audits." },
      { title: "Accounting Standards Advisory (Indian GAAP, IFRS, US GAAP)", brief: "Expert opinions and position papers on complex transactions under Ind AS, US GAAP, and IFRS - covering revenue recognition (Ind AS 115), leases (Ind AS 116), business combinations (Ind AS 103), and financial instruments (Ind AS 109). We help CFOs and finance teams navigate grey areas with technically defensible positions." },
      { title: "IFRS / Ind-AS Implementation", brief: "Full-cycle transition support for adopting Ind AS, including impact assessment, opening balance sheet preparation, accounting policy drafting, and finance team training. We manage the complexity of MCA's phase-wise rollout so that your first Ind AS financial statements are accurate and compliant." },
    ],
  },
  {
    id: "indirect-tax",
    category: "Indirect Tax Services",
    icon: FileText,
    tagline: "GST and customs strategy - from structuring to appellate courts.",
    items: [
      { title: "Indirect Tax Transaction Advisory", brief: "Structuring advice on GST liability, place of supply, HSN/SAC classification, and valuation for complex transactions including cross-border services, e-commerce, real estate, and works contracts. We ensure tax efficiency while managing compliance risk under the CGST Act, 2017 and Customs Act." },
      { title: "Indirect Tax Reviews & Health Checks", brief: "Diagnostic review of GSTR-1, GSTR-3B, GSTR-9, and ITC ledgers to identify errors, missed credits, and undue exposures. Our health check reports are benchmarked against live GSTN data and departmental audit trends to preempt notices and avoid penalties and interest." },
      { title: "STPI / EOU / SEZ Setup, LOP & Bonding", brief: "End-to-end facilitation for registrations under STPI, EOU, and SEZ schemes - including Letter of Permission (LOP) for STPI/EOU units and Letter of Approval (LOA) for SEZ units, renewals, Customs bonding and de-bonding, and liaison with STPI/SEZ Development Commissioners. We manage the entire regulatory lifecycle so units maintain uninterrupted operational and export benefits." },
      { title: "Duty Free Import Approvals", brief: "Assistance in obtaining Advance Authorisation, EPCG licences, and project import concessions under the Foreign Trade Policy - significantly reducing the landed cost of capital goods and raw materials for exporters and manufacturers meeting eligibility criteria." },
      { title: "GST Refund & Rebate Claims (Including Litigation)", brief: "Preparation and filing of GST refund applications for exporters, inverted duty structure cases, and embassies, with end-to-end follow-up with GST officers. Where refunds are incorrectly rejected, we represent clients before Appellate Authorities with comprehensive legal submissions for timely sanction." },
      { title: "Tax Optimisation & Compliance Study", brief: "Holistic review of an entity's indirect tax structure to identify genuine optimisation opportunities - including supply chain reorganisation for seamless ITC flow, renegotiation of vendor/customer agreements, and transitional planning for mergers or new business lines - within the full bounds of CGST Act compliance." },
      { title: "GST Scrutiny, Summons & Search Support", brief: "Immediate expert response when businesses receive GST scrutiny notices (ASMT-10, DRC-01), summons under Section 70, or face search and inspection operations under Section 67 of the CGST Act. We draft replies, prepare documentary submissions, and liaise with officers to protect clients' rights and interests." },
      { title: "Representation before CESTAT & Appellate Authorities", brief: "Expert advocacy before the Customs, Excise and Service Tax Appellate Tribunal (CESTAT), GST Appellate Authorities, and High Courts in matters of classification disputes, valuation contestations, penalty proceedings, and refund rejections - combining technical tax knowledge with strategic litigation." },
    ],
  },
  {
    id: "direct-tax",
    category: "Direct Tax Services",
    icon: Calculator,
    tagline: "Compliance, advisory, and litigation for corporates and individuals.",
    items: [
      { title: "Corporate & Individual Tax Compliance", brief: "Filing of income tax returns for companies, LLPs, partnerships, HUFs, and individuals - covering computation under all five heads of income, MAT/AMT applicability, advance tax scheduling, and reconciliation of Form 26AS and the Annual Information Statement (AIS) under the Income Tax Act, 1961." },
      { title: "Advisory on Cross-Border Transactions", brief: "Strategic advisory on international transactions considering India's DTAA network, source-vs-residence taxation principles, Permanent Establishment risk, and FEMA regulations. Critical for MNCs, foreign subsidiaries operating in India, and Indian companies with outbound investments or overseas operations." },
      { title: "Transfer Pricing Matters", brief: "Preparation of Transfer Pricing documentation (Form 3CEB), selection of the most appropriate benchmarking method, and TP study reports. We manage assessments before the Transfer Pricing Officer (TPO), handle Advance Pricing Agreement (APA) filings, and represent clients before the Dispute Resolution Panel (DRP)." },
      { title: "Expatriate Taxation", brief: "Comprehensive personal tax compliance and advisory for foreign nationals in India and Indian employees on global assignments - covering residential status determination, treaty benefit claims, shadow payroll structuring, hypothetical tax computation, and year-end tax equalisation reconciliations." },
      { title: "Survey, Search & Seizure Assistance", brief: "Immediate on-site legal support and post-event advisory when the Income Tax Department conducts surveys under Section 133A, searches under Section 132, or requisitions under Section 132A. We protect clients' statutory rights, ensure proper documentation of the panchanama, and guide voluntary disclosure decisions." },
      { title: "Representation before AO, CIT(A), DRP & ITAT", brief: "End-to-end litigation support before the Assessing Officer, the National Faceless Appeal Centre (NFAC/CIT(A)), Joint Commissioner of Income Tax (Appeals) [JCIT(A)] for eligible smaller disputes, Dispute Resolution Panel, and Income Tax Appellate Tribunal - including drafting grounds of appeal, written submissions, and legal briefs for efficient, favourable resolution of assessments." },
      { title: "Lower or Nil TDS Certificates", brief: "Filing of applications under Sections 197 and 195(2) of the Income Tax Act for lower or nil rate TDS deduction certificates. Particularly valuable for taxpayers in perpetual refund positions - eliminating working capital blockage caused by excess TDS deductions on recurring receipts." },
    ],
  },
  {
    id: "corporate-law",
    category: "Corporate & Allied Laws",
    icon: Scale,
    tagline: "Company formations, FEMA, valuations, and MCA compliance.",
    items: [
      { title: "Company & LLP Formation (India & Offshore)", brief: "Complete incorporation services for Private Limited Companies, Public Companies, LLPs, OPCs, and Section 8 entities under the Companies Act, 2013, as well as liaison offices, branch offices, and project offices for foreign corporations under FEMA and RBI guidelines - from name reservation to first board meeting." },
      { title: "Maintenance of Statutory Records & Registers", brief: "Maintenance of mandatory statutory registers (Members, Directors, Charges, Loans etc.), minute books of board and shareholder meetings, and KYC documentation as required by the Companies Act, 2013. Ensures companies are perpetually audit-ready for ROC inspections and acquirer due diligence exercises." },
      { title: "ROC & MCA Compliance", brief: "Filing of annual returns (MGT-7), financial statements (AOC-4), director-related forms (DIR-3 KYC, DIN allotment), and all event-based forms through the MCA21 portal. We calendar and track every deadline so clients avoid the steep penalties under Section 450 of the Companies Act." },
      { title: "FEMA Compliance & Advisory", brief: "Advisory and compliance under the Foreign Exchange Management Act, 1999, covering inbound FDI, outbound investments (ODI), external commercial borrowings (ECBs), repatriation of dividends and profits, and timely reporting to the Reserve Bank of India under applicable FEMA Regulations and RBI Master Directions." },
      { title: "Share Valuation (Registered Valuers / Merchant Bankers)", brief: "Certified business and share valuations by IBBI-registered valuers and SEBI-registered Merchant Bankers for FDI compliance, ESOP grants, M&A transactions, buybacks, rights issues, and fairness opinions - fully compliant with Income Tax Rule 11UA and SEBI (ICDR) Regulations." },
      { title: "FDI & Government Approval Route", brief: "Advisory and filing support for FDI proposals under both the automatic route and the government approval route, sectoral cap compliance, downstream investment structuring, and post-investment reporting to RBI - ensuring seamless capital infusion while satisfying all regulatory conditions." },
    ],
  },
  {
    id: "compliance",
    category: "Compliance Management",
    icon: CheckSquare,
    tagline: "End-to-end statutory filings so you never miss a deadline.",
    items: [
      { title: "GST, Customs & FTP Registrations; E-Invoicing & E-Way Bills", brief: "One-stop compliance management covering GST registration, IEC from DGFT, Foreign Trade Policy registrations, e-invoice generation on the Invoice Registration Portal (IRP), and e-way bill issuance - ensuring businesses are operationally compliant from day one of commercial activity." },
      { title: "TDS Returns", brief: "Preparation and quarterly filing of TDS/TCS returns (Form 24Q, 26Q, 27Q, 27EQ), generation of Form 16 and Form 16A certificates, and reconciliation of TDS credits with Form 26AS and AIS - ensuring accurate compliance under Sections 192 to 206C of the Income Tax Act, 1961." },
      { title: "Income Tax Returns", brief: "Timely and accurate filing of ITR-1 through ITR-7 for all categories of taxpayers, including tax computation, attachment of tax audit reports (3CA/3CB/3CD), and proactive management of responses to intimations under Section 143(1) and notices from the Income Tax Department." },
      { title: "Professional Tax Returns", brief: "Monthly and annual Professional Tax return filings across all applicable Indian states, including initial registration, enrolment certificate management, and amendment filings under respective State Professional Tax Acts - critical for businesses with employees across multiple geographic locations." },
      { title: "STPI, EOU & SEZ Compliance", brief: "Periodic statutory compliance for STPI, EOU, and SEZ-registered units - including Annual Performance Reports (APRs), Net Foreign Exchange (NFE) computation, bond continuation, and regular interface with STPI zonal offices and SEZ Development Commissioner offices." },
      { title: "SOFTEX Filing", brief: "Mandatory SOFTEX form filing for software exporters under STPI registration, certifying the value of software exports for submission to the Reserve Bank of India and MeitY. A critical, time-bound compliance that safeguards STPI benefits and ensures clean export earnings repatriation records." },
    ],
  },
  {
    id: "consulting",
    category: "Other Consulting Services",
    icon: Lightbulb,
    tagline: "Strategic advisory from startup structuring to Virtual CFO.",
    items: [
      { title: "Tax Structuring for Startups", brief: "Holistic entity and tax structuring advisory for founders at inception - covering choice of entity (Pvt Ltd vs LLP), ESOP scheme design under Section 62(1)(b), DPIIT recognition for the Section 80-IAC income tax holiday, and seed and Series-A investment structuring to maximise long-term founder tax efficiency." },
      { title: "Virtual CFO Services", brief: "Dedicated fractional CFO support built around seven core pillars: (1) Financial Planning & Forecasting — long-term budgeting, profitability analysis, and growth scenario modelling; (2) Treasury & Working Capital Management — optimising receivables and payables, cash flow forecasting, and treasury operations for liquidity efficiency; (3) Compliance & Regulatory Support — GST compliance and filing, income tax and TDS returns, MCA and ROC filings; (4) Management Reporting & MIS — monthly MIS reports, variance analysis, and cost tracking and expense control; (5) Fundraising & Investor Relations — preparing investor pitch decks, valuation analysis, and financial due diligence; (6) Risk Management & Internal Controls — internal audit support, risk assessment reports, and fraud prevention systems; (7) Strategic Advisory for Growth — mergers and acquisitions support, business restructuring, and performance benchmarking." },
      { title: "Transaction Structuring", brief: "Advisory on the optimal structuring of business acquisitions, mergers, demergers, slump sales, and joint ventures - considering stamp duty implications, capital gains tax, indirect transfer provisions under Section 9(1)(i), and the requirements of the Companies Act - to achieve the most commercially and tax-efficient outcome." },
      { title: "Costing & Product-Pricing Assistance", brief: "Implementation of standard costing, activity-based costing, and marginal costing systems to support product pricing decisions, competitive tender bids, and cost reduction programmes. Particularly valuable for manufacturing, infrastructure, and FMCG clients seeking to protect margins in competitive markets." },
      { title: "Business Registrations (IEC, Labour, ESI, EPF)", brief: "Assistance in obtaining Import Export Code (IEC) from DGFT, Shop & Establishment licences, MSME (Udyam) registrations, Employees' State Insurance (ESI), Employees' Provident Fund (EPF), and other mandatory licences - enabling seamless commencement of operations across all regulatory touchpoints." },
    ],
  },
  {
    id: "customs",
    category: "Customs",
    icon: Package,
    tagline: "End-to-end customs advisory — from duty recovery to warehouse operations.",
    items: [
      { title: "Duty Drawbacks / Refunds", brief: "Comprehensive assistance in claiming Duty Drawback under Sections 74 & 75 of the Customs Act, 1962, covering drawback on re-export of imported goods and on exports of manufactured products. We handle Fixation of Brand Rate of Drawback where standard rates are inadequate, and manage the claiming and follow-up of Refunds of EDD (Extra Duty Deposit) amount after finalization of SVB proceedings." },
      { title: "Special Valuation Branch (SVB)", brief: "Complete SVB lifecycle management — Filing the Application for Finalization of SVB proceedings with the Customs; Co-ordination with the Customs Department at every stage of finalization; Obtaining the SVB Final Order from the Customs Department; Assessment of provisional Bills of Entry and ensuring they get finalized; Closure of PD Bond (Provisional Duty Bond) executed with the Customs Department; and Preparation, submission and obtaining the refund of EDD amount paid from the Customs Department." },
      { title: "Authorized Economic Operator (AEO) Program", brief: "Advisory and facilitation for obtaining AEO certification under the Customs Act — covering eligibility assessment, documentation preparation, compliance gap analysis, and liaison with the AEO Programme Management Team. AEO status unlocks faster cargo clearance, reduced examinations, and priority treatment from Customs, providing a significant operational and cost advantage for frequent importers and exporters." },
      { title: "MOOWR Scheme", brief: "Advisory and compliance support for the Manufacturing and Other Operations in Warehouse Regulation (MOOWR) Scheme under Section 65 of the Customs Act, 1962. We assist in obtaining warehouse licences, structuring operations to defer customs duty on imported inputs, and maintaining the required records and returns — enabling capital-efficient manufacturing without upfront duty outflow." },
    ],
  },
  {
    id: "ftp",
    category: "Foreign Trade Policy",
    icon: Globe,
    tagline: "Import-export authorisations, DGFT filings, and SEZ advisory.",
    items: [
      { title: "Import Export Code (IEC) & RCMC", brief: "Obtaining the Importer Exporter Code (IEC) from DGFT — the mandatory licence for any entity engaged in import or export of goods or services. We also facilitate Registration Cum Membership Certificate (RCMC) from the relevant Export Promotion Council, which is required for availing a range of FTP benefits and authorisations." },
      { title: "RoDTEP — Remission of Duties and Taxes on Exported Products", brief: "End-to-end advisory and filing support for Remission of Duties and Taxes on Exported Products (RoDTEP) claims. We assist exporters in correctly classifying their products under the RoDTEP schedule, computing eligible rates, filing declarations in shipping bills, and tracking credit into the ICEGATE ledger for timely scrip utilisation or transfer." },
      { title: "Advance Authorization", brief: "Assistance in obtaining Advance Authorisation for duty-free import of inputs physically incorporated in export products. We handle the application to DGFT, obtain the licence, assist with Customs bonding, monitor export obligation fulfilment, file for Duty Free Import Authorisations (DFIA), manage Revalidation of import licences where needed, and apply for Deemed Export benefits under the applicable FTP provisions." },
      { title: "Authorisation for Restricted Items", brief: "Facilitation of authorisations from DGFT for import or export of items appearing in the Restricted List under Schedule I and II of ITC (HS). We prepare and submit applications for specific licences, seek necessary clarifications and relaxations from the DGFT Policy Committee or Inter-Ministerial Committee, and ensure compliance with all conditions attached to the authorisation." },
      { title: "Export Promotion Capital Goods (EPCG) Authorisations", brief: "Complete EPCG authorisation management — from filing the application with DGFT for duty-free import of capital goods, through customs registration, to monitoring export obligation discharge over the prescribed period. We also handle Closure of EPCG and Advance Authorisations with DGFT/Customs once export obligations are fulfilled, preventing excess duty demand and bond/BG releases." },
      { title: "Special Economic Zones (SEZs) & 100% EOU", brief: "Advisory and compliance support for Special Economic Zone related matters — including unit approval, procurement of goods and services without payment of duties or taxes, NFE computation, and Annual Performance Report (APR) filing. We also provide 100% Export Oriented Unit (EOU) consultancy, covering LOP applications, bonding, duty-free procurement, and compliance with FEMA and Customs obligations." },
    ],
  },
];
