import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, ChevronDown, Download, FileText, X, Phone, Mail } from "lucide-react";
import { Document, Page, Text, View, StyleSheet, pdf, Image, Font } from "@react-pdf/renderer";
import PoppinsRegular from "../fonts/Poppins-Regular.ttf";
import PoppinsBold from "../fonts/Poppins-Bold.ttf";
import PoppinsItalic from "../fonts/Poppins-Italic.ttf";
import PTSerifRegular from "../fonts/PTSerif-Regular.ttf";
import PTSerifBold from "../fonts/PTSerif-Bold.ttf";
import axios from "axios";

// Register custom fonts for PDF
Font.register({
    family: 'Poppins',
    fonts: [
        { src: PoppinsRegular },
        { src: PoppinsBold, fontWeight: 'bold' },
        { src: PoppinsItalic, fontStyle: 'italic' }
    ]
});

Font.register({
    family: 'PT Serif',
    fonts: [
        { src: PTSerifRegular },
        { src: PTSerifBold, fontWeight: 'bold' }
    ]
});

const pdfStyles = StyleSheet.create({
    page: {
        padding: 40,
        paddingBottom: 60,
        fontSize: 9,
        lineHeight: 1.5,
        fontFamily: "Poppins",
        color: "#1a1a1a",
    },
    section: {
        marginBottom: 12,
    },
    header: {
        marginTop: 10,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
    },
    logo: {
        width: 75,
        height: 75,
        objectFit: 'contain',
    },
    titleContainer: {
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontFamily: "PT Serif",
        fontWeight: "bold",
        textAlign: "center",
        color: "#000",
    },
    goldLine: {
        borderBottom: "2pt solid #d4af37",
        marginTop: 30,
        marginBottom: 35,
        width: '100%',
    },
    heading: {
        fontSize: 10,
        fontFamily: "PT Serif",
        fontWeight: "bold",
        marginBottom: 8,
        marginTop: 15,
        textTransform: "uppercase",
        color: "#000",
    },
    subHeading: {
        fontSize: 9,
        fontFamily: "PT Serif",
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 10,
    },
    paragraph: {
        marginBottom: 8,
        textAlign: "justify",
    },
    bold: {
        fontWeight: "bold",
    },
    italic: {
        fontStyle: "italic",
    },
    signBy: {
        fontSize: 8,
        marginBottom: 10,
        color: "#666",
    },
    signatureContainer: {
        marginTop: 30,
        paddingTop: 20,
        borderTop: "0.5pt solid #eee",
        flexDirection: "column",
        gap: 20,
        break: "avoid",
    },
    signatureBlock: {
        marginBottom: 15,
    },
    signatureLabel: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 4,
    },
    signatureValue: {
        fontSize: 11,
        fontWeight: "bold",
        marginBottom: 2,
    },
    signatureSubText: {
        fontSize: 9,
        color: "#333",
    },
    footer: {
        position: 'absolute',
        bottom: 25,
        left: 40,
        right: 40,
        textAlign: 'center',
        fontSize: 7,
        color: '#999',
        borderTop: '0.5pt solid #eee',
        paddingTop: 8,
    }
});


const AgreementPDF = ({ data }) => {
    const { day, month, year, entityName, address, arn, aprn } = data;

    return (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                <View style={pdfStyles.header}>
                    <Image src={window.location.origin + "/TieVistaLogo.png"} style={pdfStyles.logo} />
                </View>

                <View style={pdfStyles.titleContainer}>
                    <Text style={pdfStyles.title}>Sub-Distributorship Agreement</Text>
                </View>

                <View style={pdfStyles.goldLine} />

                {/* Section 1: Intro */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.paragraph}>
                        This Mutual Fund Sub-Distribution and PMS Sub Distribution (<Text style={pdfStyles.bold}>"Agreement"</Text>) is executed on this <Text style={pdfStyles.bold}>{day}</Text> day of <Text style={pdfStyles.bold}>{month} {year}</Text> (<Text style={pdfStyles.bold}>"Effective Date"</Text>).
                    </Text>
                    <Text style={pdfStyles.heading}>BETWEEN</Text>
                    <Text style={pdfStyles.paragraph}>
                        <Text style={pdfStyles.bold}>IndusArtha Financial Services Private Limited operating under the brand name of TieVista</Text>, a company incorporated under the provisions of the Companies Act, 2013 having its registered office at 4th Floor, AWFIS, VIOS Tower, Wadala, Mumbai 400037 and holding a valid ARN registration issued by the Association of Mutual Funds in India and engaged inter alia in the business of distribution of financial products including mutual fund schemes and portfolio management services (hereinafter referred to as the <Text style={pdfStyles.bold}>"Principal Distributor"</Text>, which expression shall unless repugnant to the context include its successors and permitted assigns);
                    </Text>
                    <Text style={pdfStyles.heading}>AND</Text>
                    <Text style={pdfStyles.paragraph}>
                        <Text style={pdfStyles.bold}>{entityName}</Text>, <Text style={pdfStyles.italic}>having its principal place of business at</Text> {address} <Text style={pdfStyles.italic}>and engaged in the business of financial product marketing and client relationship management (hereinafter referred to as the "Sub-Distributor", which expression shall unless repugnant to the context include its successors and permitted assigns). The sub-distributor holds ARN</Text> <Text style={pdfStyles.bold}>{arn}</Text> <Text style={pdfStyles.italic}>and APRN</Text> <Text style={pdfStyles.bold}>{aprn}</Text>.
                    </Text>
                    <Text >
                        The Principal Distributor and the Sub-Distributor are hereinafter collectively referred to as the <Text style={pdfStyles.bold}>"Parties"</Text> and individually as a <Text style={pdfStyles.bold}>"Party"</Text>.
                    </Text>
                </View>

                {/* WHEREAS Section */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>WHEREAS:</Text>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={pdfStyles.paragraph}>A. The Principal Distributor is engaged in the business of distribution of mutual fund schemes and allied financial products and operates in accordance with the regulatory framework prescribed under the SEBI (Mutual Funds) Regulations, 1996 and guidelines issued by the Association of Mutual Funds in India.</Text>
                        <Text style={pdfStyles.paragraph}>B. The Principal Distributor also facilitates marketing and distribution of portfolio management services offered by SEBI registered portfolio managers in accordance with the provisions of the SEBI (Portfolio Managers) Regulations, 2020 and related circulars issued by the Securities and Exchange Board of India.</Text>
                        <Text style={pdfStyles.paragraph}>C. The Sub-Distributor has represented that it possesses adequate experience, infrastructure, market reach, and client servicing capabilities required for marketing and facilitating investments in financial products.</Text>
                        <Text style={pdfStyles.paragraph}>D. The Sub-Distributor has expressed its desire to act as a sub-distribution partner for mutual fund products and as a Sub Contractor/ Marketing partner for portfolio management services subject to regulatory restrictions and compliance requirements.</Text>
                        <Text style={pdfStyles.paragraph}>E. The Principal Distributor has agreed to appoint the Sub-Distributor on a non-exclusive basis, subject to strict adherence to applicable laws, regulatory guidelines, and the terms and conditions set forth in this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}>F. The Sub-Distributor represents that it holds a valid AMFI Registration Number (ARN), Employee Unique Identification Number (EUIN) and APMI Registration Number (APRN), wherever applicable, and shall maintain the same in good standing during the Term.</Text>
                    </View>
                    <Text style={[pdfStyles.bold, { marginTop: 10 }]}>NOW THEREFORE, in consideration of the mutual covenants contained herein, the Parties hereby agree as follows:</Text>
                </View>

                {/* Section 2: Definitions */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>2. DEFINITIONS</Text>
                    <Text style={pdfStyles.paragraph}>
                        In this Agreement, unless the context otherwise requires, the following terms shall have the meanings assigned to them hereunder. Words importing the singular shall include the plural and vice versa, and words importing any gender shall include all genders.
                    </Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.1 "AMC" or "Asset Management Company"</Text> shall mean a company incorporated under the Companies Act, 2013 and approved by the Securities and Exchange Board of India to act as an asset management company for a mutual fund in accordance with the provisions of the SEBI (Mutual Funds) Regulations, 1996.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.2 "AMFI"</Text> shall mean the Association of Mutual Funds in India, being the self-regulatory organization of mutual funds and intermediaries in India responsible for issuing guidelines, codes of conduct and AMFI Registration Numbers to mutual fund distributors and intermediaries.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.3 "Applicable Laws"</Text> shall mean and include all applicable statutes, enactments, laws, ordinances, rules, regulations, circulars, notifications, guidelines, directions and policies issued by any governmental authority, regulatory authority, statutory body, self-regulatory organization or court of competent jurisdiction including, without limitation, regulations issued by the Securities and Exchange Board of India and guidelines issued by the Association of Mutual Funds in India, as amended or modified from time to time.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.4 "ARN" or "AMFI Registration Number"</Text> shall mean the registration number allotted by AMFI to an intermediary or distributor authorising such entity to distribute mutual fund products in accordance with the applicable AMFI guidelines and regulatory framework.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.5 "Business Day"</Text> shall mean any day on which banks and financial institutions are open for general business in India, excluding Saturdays, Sundays and public holidays.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.6 "Client"</Text> shall mean any individual, body corporate, partnership firm, trust, association of persons, institution or any other legal entity who is introduced, referred, or sourced by the Sub-Distributor to the Principal Distributor for the purpose of investment in Mutual Fund Products or PMS Products.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.7 "Commission"</Text> shall mean any remuneration, brokerage, trail commission, upfront commission, referral fee, marketing fee or incentive payable to the Sub-Distributor by the Principal Distributor in consideration for Distribution Services or Referral Services performed under this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.8 "Confidential Information"</Text> shall mean and include all non-public, proprietary or confidential information disclosed by one Party to the other, whether in written, electronic, oral or any other form, including but not limited to client information and investment details, marketing strategies and business plans, commission structures and commercial arrangements, internal policies and operational procedures, financial information and proprietary databases, and any other information which by its nature ought reasonably to be treated as confidential. Confidential Information shall not include information which is or becomes publicly available without breach of this Agreement, or which was lawfully known to the receiving Party prior to disclosure, or which is required to be disclosed pursuant to Applicable Laws or regulatory directives.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.9 "Distribution Services"</Text> shall mean the activities undertaken for marketing, promotion, facilitation and distribution of Mutual Fund Products on behalf of the Principal Distributor, including identification of prospective investors, dissemination of approved marketing material, assistance in client onboarding and facilitation of transaction processing.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.10 "Effective Date"</Text> shall mean the date on which this Agreement is executed by both Parties.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.11 "Marketing Material"</Text> shall mean brochures, presentations, advertisements, emails, digital communication or any promotional content relating to Mutual Fund Products or PMS Products that has been approved by the Principal Distributor or the respective product provider.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.12 "Mutual Fund Products"</Text> shall mean units or schemes offered by mutual funds established and registered with the Securities and Exchange Board of India and managed by Asset Management Companies in accordance with the provisions of the SEBI (Mutual Funds) Regulations, 1996.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.13 "PMS Products"</Text> shall mean discretionary, non-discretionary or advisory portfolio management services provided by portfolio managers registered with the Securities and Exchange Board of India under the provisions of the SEBI (Portfolio Managers) Regulations, 2020.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.14 "Portfolio Manager"</Text> shall mean a body corporate registered with SEBI and authorised to provide portfolio management services in accordance with the provisions of the SEBI (Portfolio Managers) Regulations, 2020.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.15 "Principal Distributor"</Text> shall mean the entity appointing the Sub-Distributor under this Agreement for distribution of Mutual Fund Products and facilitation of PMS Products and shall include its successors and permitted assigns.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.16 "Referral Services"</Text> shall mean activities limited to the introduction of prospective clients to the Principal Distributor or SEBI registered portfolio managers, facilitation of meetings between such clients and the Principal Distributor or portfolio managers, and assistance in administrative documentation, without providing investment advice or portfolio recommendations.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.17 "Regulatory Authority"</Text> shall mean any governmental, statutory or regulatory authority having jurisdiction over the activities contemplated under this Agreement, including the Securities and Exchange Board of India.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.18 "SEBI"</Text> shall mean the Securities and Exchange Board of India established under the Securities and Exchange Board of India Act, 1992.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.19 "Sub-Distributor"</Text> shall mean the intermediary appointed under this Agreement for the limited purpose of marketing and facilitating investment in Mutual Fund Products and referring prospective clients for PMS Products, subject to the terms and conditions specified herein.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.20 "Term"</Text> shall mean the duration of this Agreement commencing from the Effective Date and continuing until terminated in accordance with the provisions of this Agreement.</Text>
                    </View>
                </View>

                {/* Section 3: Appointment */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>3. APPOINTMENT</Text>
                    <Text style={pdfStyles.subHeading}>3.1 Appointment for Mutual Fund Sub-Distribution</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>3.1.1 Subject to the terms and conditions of this Agreement, the Principal Distributor hereby appoints the Sub-Distributor, on a non-exclusive and non-transferable basis, as a Sub-Distributor for the limited purpose of marketing, promoting and facilitating investments in Mutual Fund Products distributed by the Principal Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>3.1.2 The Sub-Distributor acknowledges and agrees that such appointment is limited to distribution activities and does not confer upon the Sub-Distributor any authority to bind the Principal Distributor, any Asset Management Company, or any mutual fund in any contractual or legal capacity.</Text>
                        <Text style={pdfStyles.paragraph}>3.1.3 The Sub-Distributor shall perform its obligations under this Agreement strictly in accordance with: (a) the provisions of the SEBI (Mutual Funds) Regulations, 1996 and any amendments or modifications thereto; (b) all circulars, guidelines and directives issued by the Securities and Exchange Board of India from time to time; (c) the guidelines, circulars and code of conduct prescribed by the Association of Mutual Funds in India including the AMFI Code of Conduct applicable to intermediaries, distributors and sub-distributors; (d) the internal policies, compliance procedures and operational guidelines prescribed by the Principal Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>3.1.4 Without prejudice to the generality of the foregoing, the Sub-Distributor shall: 1. identify and approach prospective investors for investment in Mutual Fund Products; 2. disseminate only such marketing materials, scheme information documents, key information memoranda, advertisements, presentations or communications as may have been approved by the relevant Asset Management Company or the Principal Distributor; 3. assist prospective investors in completing client onboarding documentation including Know Your Client (KYC) documentation and other regulatory requirements; 4. facilitate submission of investment applications, transaction forms and other documents through authorised channels; 5. ensure that all communications made to investors are fair, accurate and not misleading.</Text>
                        <Text style={pdfStyles.paragraph}>3.1.5 The Sub-Distributor shall not: (i) make any representation, warranty or guarantee regarding investment performance or returns; (ii) provide personalised investment advice unless separately authorised under Applicable Laws; (iii) represent itself as an authorised representative, agent or employee of any Asset Management Company unless expressly permitted; (iv) alter, modify or misrepresent any scheme documentation, marketing communication or disclosure document issued by an Asset Management Company or the Principal Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>3.1.6 The Sub-Distributor acknowledges that the ultimate acceptance of any investor application and the allotment of units shall remain subject to the discretion of the concerned Asset Management Company.</Text>
                        <Text style={pdfStyles.paragraph}>3.1.7 The Sub-distributor entering into this Agreement and intending to distribute units of mutual funds is qualified and eligible as per the applicable laws to carry out such business.</Text>
                    </View>

                    <Text style={pdfStyles.subHeading}>3.2 Appointment for PMS Marketing and Sub-Distributorship Activities</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>3.2.1 Subject to the terms and conditions of this Agreement, the Principal Distributor may permit the Sub-Distributor to undertake client sourcing, solicitation support and distribution support activities on a sub-contracted basis in relation to Portfolio Management Services ("PMS Products") offered by portfolio managers registered with the Securities and Exchange Board of India.</Text>
                        <Text style={pdfStyles.paragraph}>3.2.2 For the purposes of this Agreement, such activities shall be undertaken strictly in the nature of sub-contracted client sourcing and facilitation services, including identification and introduction of prospective clients and coordination of onboarding processes, and shall not in any manner constitute portfolio management services, investment advisory services or discretionary management of client portfolios.</Text>
                        <Text style={pdfStyles.paragraph}>3.2.3 The Sub-Distributor shall undertake such PMS distribution related activities only in accordance with the regulatory framework prescribed under the SEBI (Portfolio Managers) Regulations, 2020 and other applicable SEBI circulars and guidelines.</Text>
                        <Text style={pdfStyles.paragraph}>3.2.4 Without prejudice to the generality of the foregoing, the following conditions shall apply: (a) The Sub-Distributor may introduce prospective clients interested in PMS Products to the Principal Distributor or to portfolio managers specifically approved by the Principal Distributor. (b) The Sub-Distributor shall undertake any marketing, solicitation or client introduction activity relating to PMS Products only after obtaining prior written approval from the Principal Distributor. (c) Such approval may specify the portfolio manager, product category, scope of marketing activities and commission arrangements applicable to the Sub-Distributor. (d) The Sub-Distributor acknowledges that its role in relation to PMS Products shall be limited to marketing support, client introduction, facilitation of meetings and administrative coordination between prospective clients and the Principal Distributor or the relevant portfolio manager. (e) The Sub-Distributor shall not represent itself as: (i) a portfolio manager; (ii) an investment adviser registered with SEBI; (iii) an authorised investment manager or portfolio management entity; or (iv) an entity authorised to provide investment advice or portfolio allocation recommendations. (f) The Sub-Distributor shall not: 1. provide discretionary investment advice relating to PMS Products; 2. recommend specific portfolio strategies or investment allocations; 3. execute investment decisions on behalf of clients; 4. collect or hold client funds or securities. (g) The final decision regarding acceptance of a client, execution of the portfolio management agreement and management of the investment portfolio shall rest solely with the relevant portfolio manager. (h) All documentation relating to PMS investments, including portfolio management agreements, risk disclosure documentation and client onboarding documentation, shall be executed directly between the client and the portfolio manager in accordance with the provisions of the SEBI (Portfolio Managers) Regulations, 2020. (i) The Sub-Distributor shall ensure that all communications made to prospective clients in relation to PMS Products are accurate, fair and not misleading and are consistent with disclosures prescribed by applicable regulatory authorities.</Text>
                        <Text style={pdfStyles.paragraph}>The Parties hereby acknowledge and agree that the Sub-Distributor shall act solely in the capacity of a sub-contracted client sourcing and distribution support intermediary for the limited purpose of identifying and introducing prospective clients and facilitating preliminary coordination in relation to PMS Products. The Sub-Distributor shall not hold itself out as an authorised representative, agent or affiliate of any portfolio manager.</Text>
                    </View>
                </View>

                {/* Section 4: Prior Approval */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>4. PRIOR APPROVAL FOR PMS DISTRIBUTION</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>4.1 Notwithstanding anything contained elsewhere in this Agreement, the Sub-Distributor shall not undertake any client sourcing, solicitation support, distribution support or other sub-contracted facilitation activity in relation to Portfolio Management Services ("PMS Products") unless prior written approval has been obtained from the Principal Distributor and Portfolio Manager (wherever required).</Text>
                        <Text style={pdfStyles.paragraph}>4.2 Such approval shall be granted at the sole discretion of the Principal Distributor and may specify the portfolio manager whose PMS Products may be introduced to prospective clients, the nature and scope of the permitted client sourcing and distribution support activities, the categories of PMS Products that may be introduced, and any operational procedures, compliance requirements or investor disclosure obligations that must be adhered to by the Sub-Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>4.3 The approval may further specify the commission, referral fee or other remuneration structure applicable to such activities, subject to applicable regulatory requirements and internal policies of the Principal Distributor, and the Sub-Distributor shall strictly comply with the terms and conditions specified in such approval and shall not undertake any activity beyond the scope of the authority granted therein.</Text>
                        <Text style={pdfStyles.paragraph}>4.4 Any activity undertaken by the Sub-Distributor in relation to PMS Products without obtaining the prior written approval of the Principal Distributor, or in contravention of the terms and conditions specified in such approval, shall constitute a material breach of this Agreement, entitling the Principal Distributor to suspend or terminate this Agreement and take such further action as may be permissible under Applicable Laws, including the provisions of the SEBI (Portfolio Managers) Regulations, 2020 and other regulatory directions issued by the Securities and Exchange Board of India.</Text>
                    </View>
                </View>

                {/* Section 5: Scope of Services */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>5. SCOPE OF SERVICES</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>5.1 Subject to the terms and conditions of this Agreement, the Sub-Distributor shall undertake client sourcing and distribution support activities in relation to Mutual Fund Products and such PMS Products as may be permitted by the Principal Distributor from time to time, including identifying and approaching prospective investors and facilitating their introduction to the Principal Distributor. Further, Client data obtained in connection with Mutual Fund investments shall not be used for marketing other financial products without the prior consent of the client.</Text>
                        <Text style={pdfStyles.paragraph}>5.2 The Sub-Distributor may disseminate to prospective investors only such product literature, scheme-related documents, informational material or communications that have been issued or approved by the Principal Distributor or the relevant product provider, and shall ensure that all communications made to prospective investors are fair, accurate and not misleading.</Text>
                        <Text style={pdfStyles.paragraph}>5.3 The Sub-Distributor may assist prospective investors and Clients in completing onboarding documentation, including Know Your Client (KYC) documentation, application forms and other administrative formalities, and may coordinate administrative communication between the Client and the Principal Distributor for the purpose of facilitating investments in the relevant products.</Text>
                        <Text style={pdfStyles.paragraph}>5.4 Notwithstanding anything contained herein, the Sub-Distributor shall not provide investment advice, recommend specific investment strategies or portfolio allocations, make any representation or guarantee regarding investment performance or returns, represent itself as a portfolio manager or investment adviser, or undertake any activity that may be construed as discretionary portfolio management or investment advisory services.</Text>
                    </View>
                </View>

                {/* Section 6: Compliance */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>6. COMPLIANCE WITH DISTRIBUTOR CODE OF CONDUCT</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>6.1 The Sub-Distributor shall at all times comply with the Code of Conduct applicable to distributors and sub-distributors prescribed by the Association of Mutual Funds in India and Securities and Exchange Board of India, and with all applicable regulatory guidelines, circulars and directions issued by competent authorities.</Text>
                        <Text style={pdfStyles.paragraph}>6.2 The Sub-Distributor shall maintain high standards of integrity, fairness and professionalism in all dealings with prospective investors and Clients.</Text>
                        <Text style={pdfStyles.paragraph}>6.3 The Sub-Distributor shall ensure full and transparent disclosure to Clients regarding the nature of its role as an intermediary and any commissions or remuneration that may be received in connection with investments facilitated through it.</Text>
                        <Text style={pdfStyles.paragraph}>6.4 The Sub-Distributor shall not engage in mis-selling, misleading representations or dissemination of inaccurate information relating to Mutual Fund Products or PMS Products.</Text>
                        <Text style={pdfStyles.paragraph}>6.5 The Sub-Distributor shall ensure that all information communicated to Clients is accurate, fair and consistent with the official product documentation issued by the relevant product provider or approved by the Principal Distributor.</Text>
                    </View>
                </View>

                {/* Section 7: Client Disclosures */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>7. CLIENT DISCLOSURES</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>7.1 The Sub-Distributor shall ensure that each Client introduced by it receives clear and adequate disclosures regarding the nature of the services being rendered and the roles and responsibilities of the parties involved.</Text>
                        <Text style={pdfStyles.paragraph}>7.2 The Sub-Distributor shall inform each Client that it acts solely as an intermediary engaged in client sourcing and distribution support activities and does not provide portfolio management or discretionary investment management services.</Text>
                        <Text style={pdfStyles.paragraph}>7.3 The Sub-Distributor shall ensure and inform the Clients that they understand that the Principal Distributor, Asset Management Company or the relevant portfolio manager, as the case may be, shall be responsible for the management and administration of investments.</Text>
                        <Text style={pdfStyles.paragraph}>7.4 The Sub-Distributor shall clearly disclose that investments in financial products including mutual funds and portfolio management services are subject to market risks and that past performance does not guarantee future results.</Text>
                        <Text style={pdfStyles.paragraph}>7.5 The Sub-Distributor shall also disclose, where applicable, that commissions, referral fees or other forms of remuneration may be paid to intermediaries in connection with investments facilitated through such intermediaries.</Text>
                    </View>
                </View>

                {/* Section 8: Commission */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>8. COMMISSION AND REMUNERATION</Text>
                    <Text style={pdfStyles.subHeading}>8.1 Commission for Mutual Fund Products</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>8.1.1 In consideration of the distribution services performed by the Sub-Distributor under this Agreement, the Sub-Distributor shall be entitled to receive commission from the Principal Distributor in respect of investments in Mutual Fund Products sourced or facilitated by the Sub-Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>8.1.2 Such commission shall be payable as a share of the commission or distribution fees received by the Principal Distributor from the relevant Asset Management Companies.</Text>
                        <Text style={pdfStyles.paragraph}>8.1.3 The commission payable to the Sub-Distributor may include upfront commissions, trail commissions, performance incentives or any other distribution-related remuneration payable in accordance with applicable regulatory guidelines.</Text>
                        <Text style={pdfStyles.paragraph}>8.1.4 Any remuneration payable to the Sub-distributor in relation to mutual funds distributed shall be payable only upon receipt of the corresponding fees by the Principal Distributor from the relevant AMCs.</Text>
                        <Text style={pdfStyles.paragraph}>8.1.5 Principal distributor reserves the right to claw-back Commissions and/or other amounts already paid to the sub-distributor from future due payments and/or demand return payments from sub-distributor, in compliance with applicable laws or as may be deemed fit & appropriate by principal distributor for valid purposes, including but not limited to reasons of any wrongly processed payments, any charges or dues pending or for any business or Transactions found void or invalid, etc.</Text>
                        <Text style={pdfStyles.paragraph}>8.1.6 The principal distributor also reserves the right to set-off and/or deduct any due amounts by sub-distributor from the accrued commissions or brokerages etc., amounts payable to the sub-distributor at the discretion of principal distributor.</Text>
                    </View>

                    <Text style={pdfStyles.subHeading}>8.2 Remuneration for PMS Client Introductions</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>8.2.1 In respect of PMS Products, the Sub-Distributor shall be entitled to receive referral fees or distribution support fees for introducing Clients to the Principal Distributor or to portfolio managers approved by the Principal Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>8.2.2 The structure and quantum of such remuneration shall be mutually agreed between the Parties and shall remain subject to applicable regulatory disclosure requirements.</Text>
                        <Text style={pdfStyles.paragraph}>8.2.3 Any remuneration payable to the Sub-Distributor in relation to PMS Products shall be payable only upon receipt of the corresponding fees by the Principal Distributor from the relevant portfolio manager.</Text>
                        <Text style={pdfStyles.paragraph}>8.2.4 All payments made under this Clause shall be subject to compliance with Applicable Laws including the provisions of the the SEBI (Portfolio Managers) Regulations, 2020.</Text>
                        <Text style={pdfStyles.paragraph}>8.2.5 Principal distributor reserves the right to claw-back Commissions and/or other amounts already paid to the sub-distributor from future due payments and/or demand return payments from sub-distributor, in compliance with applicable laws or as may be deemed fit & appropriate by principal distributor for valid purposes, including but not limited to reasons of any wrongly processed payments, any charges or dues pending or for any business or Transactions found void or invalid, etc.</Text>
                        <Text style={pdfStyles.paragraph}>8.2.6 The principal distributor also reserves the right to set-off and/or deduct any due amounts by sub-distributor from the accrued commissions or brokerages etc., amounts payable to the sub-distributor at the discretion of principal distributor.</Text>
                    </View>
                </View>

                {/* Section 9: Confidentiality */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>9. CONFIDENTIALITY AND DATA PROTECTION</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>9.1 Each Party acknowledges that during the course of performance of this Agreement it may have access to or receive certain confidential, proprietary, financial, commercial, technical or client-related information of the other Party, including but not limited to business strategies, client databases, investment information, pricing structures, trade secrets, operational processes, marketing plans and any other information designated as confidential or which by its nature ought reasonably to be regarded as confidential ("Confidential Information").</Text>
                        <Text style={pdfStyles.paragraph}>9.2 The receiving Party shall maintain the strictest confidentiality in respect of such Confidential Information and shall use such information solely for the limited purpose of performing its obligations under this Agreement and for no other purpose whatsoever.</Text>
                        <Text style={pdfStyles.paragraph}>9.3 The receiving Party shall implement and maintain appropriate administrative, technical and organisational safeguards to ensure protection of Confidential Information against unauthorised access, disclosure, misuse, loss or alteration and shall ensure that its employees, agents, representatives or affiliates who may have access to such information are bound by obligations of confidentiality no less stringent than those contained herein.</Text>
                        <Text style={pdfStyles.paragraph}>9.4 The receiving Party shall not disclose, publish, transmit or otherwise make available any Confidential Information to any third party without the prior written consent of the disclosing Party, except where such disclosure is required under Applicable Laws or by any regulatory authority, in which event the receiving Party shall promptly notify the disclosing Party to the extent legally permissible.</Text>
                        <Text style={pdfStyles.paragraph}>9.5 All client-related information, investor data, contact details, financial information and transaction records obtained during the course of this Agreement shall be treated as strictly confidential and shall not be used for solicitation, marketing, commercial exploitation or any purpose unrelated to this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}>9.6 Upon termination or expiry of this Agreement, the receiving Party shall promptly return, delete or destroy all Confidential Information in its possession, custody or control, unless retention is required under Applicable Laws.</Text>
                        <Text style={pdfStyles.paragraph}>9.7 The obligations contained in this Clause shall survive the termination or expiration of this Agreement for a period of five years, and in respect of client data and proprietary information, such obligations shall continue for so long as such information remains confidential in nature.</Text>
                    </View>
                </View>

                {/* Section 10: Regulatory Aspects */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>10. Key Regulatory Aspects</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>10.1 The sub-distributor shall maintain all the information of their Clients required for the conduct of its business and as required under applicable Know Your Customer (KYC) and other Applicable Laws and shall make available any such information to principal distributor or the AMC or the portfolio manager upon request.</Text>
                        <Text style={pdfStyles.paragraph}>10.2 The sub-distributor shall not use the nomenclature of 'Independent Financial Adviser' or 'IFA' or 'Wealth Adviser' or any other similar name or any name specifically prohibited by SEBI/AMFI, or any such combination of terms which may be interpreted as providing investment advice or possibilities being identified as an Investment Adviser, in any manner whatsoever. Further, the sub-distributor must always clearly communicate/ showcase to the client that he/she/it is an 'AMFI Registered Mutual Fund Distributor' and that no 'investment advice' is being rendered.</Text>
                        <Text style={pdfStyles.paragraph}>10.3 The sub-distributor engaged in distribution of mutual funds acknowledges that the sub-distributor shall ensure not to contradict its role with the role of investment adviser in compliance with the provisions of the IA Regulations, as amended from time to time. In case the sub-distributor or any of its related party or associate wishes to register or has already registered as an Investment Adviser under IA Regulations, a written communication must be made to Principal advisor. In failure of which, principal advisor reserves a right to terminate this Agreement without prior notice.</Text>
                        <Text style={pdfStyles.paragraph}>10.4 The sub-distributor shall be solely responsible to co-operate for adhering to the implementation of KYC and Anti Money Laundering (AML) norms, processes, compliances under the PMLA regulations & guidelines given by the regulatory authorities, SEBI, AMCs, SRO and principal advisor from time to time. In case of any non-compliance thereof, the sub-distributor agrees that principal advisor cannot be held responsible for the same. </Text>
                        <Text style={pdfStyles.paragraph}>10.5. The sub-distributor shall ensure to adhere with all the compliances applicable under PMS regulations, circulars and guidelines for distribution of the portfolio management products offered by any portfolio manager registered with SEBI under applicable regulations.</Text>
                    </View>
                </View>

                {/* Section 11: Indemnity */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>11. INDEMNITY</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>11.1 The Sub-Distributor shall fully indemnify, defend and hold harmless the Principal Distributor, its directors, officers, employees, affiliates and representatives from and against any and all losses, damages, liabilities, penalties, claims, demands, costs, expenses or regulatory actions whatsoever, including reasonable legal fees and expenses, arising directly or indirectly from any breach, default or non-performance of the obligations contained in this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}>11.2 Without prejudice to the generality of the foregoing, such indemnity shall extend to any loss or liability arising out of misrepresentation, misleading communication, unauthorised assurances or incorrect disclosures made by the Sub-Distributor to clients or prospective investors.</Text>
                        <Text style={pdfStyles.paragraph}>11.3 The indemnity shall further apply in the event of any violation of Applicable Laws, regulatory guidelines, compliance requirements or investor protection norms by the Sub-Distributor or its personnel in connection with the activities contemplated under this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}>11.4 The Sub-Distributor shall also indemnify the Principal Distributor against any claims, proceedings, investigations, regulatory penalties or reputational damage arising from negligence, willful misconduct, fraud, mis-selling, breach of confidentiality or misuse of client information by the Sub-Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>11.5 The rights and remedies provided under this Clause shall survive termination or expiry of this Agreement and shall be in addition to any other rights or remedies available to the Principal Distributor under law or equity.</Text>
                    </View>
                </View>

                {/* Section 12: Limitation of Liability */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>12. LIMITATION OF LIABILITY</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>12.1 The Principal Distributor shall not be responsible or liable for any losses, diminution in value, market fluctuations or investment risks arising from investments made by clients in financial products distributed under this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}>12.2 The Principal Distributor shall not be liable for the performance, actions, omissions or decisions of portfolio managers, asset management companies, issuers or other product providers whose products may be introduced or distributed under this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}>12.3 The Sub-Distributor acknowledges that all investment decisions shall ultimately be taken by the clients based on their own assessment of risks and suitability and the Principal Distributor shall not be liable for any financial loss or investment outcome arising therefrom.</Text>
                        <Text style={pdfStyles.paragraph}>12.4 Nothing contained in this Clause shall limit liability arising from fraud, wilful misconduct or gross negligence where such limitation is prohibited under Applicable Laws.</Text>
                    </View>
                </View>

                {/* Section 13: Term */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>13. TERM AND TERMINATION</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>13.1 This Agreement shall commence on the Effective Date and shall remain valid for a period of three (3) years unless terminated earlier in accordance with the provisions of this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}>13.2 Either Party may terminate this Agreement at any time, without assigning any reason, by providing the other Party with not less than thirty (30) days' prior written notice.</Text>
                        <Text style={pdfStyles.paragraph}>13.3 Notwithstanding anything contained herein, the Principal Distributor shall have the right to terminate this Agreement with immediate effect upon written notice if the Sub-Distributor violates any Applicable Laws or regulatory requirements, engages in mis-selling or unethical conduct, breaches the Code of Conduct, or undertakes any act that may adversely affect the reputation, regulatory standing, or business interests of the Principal Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>13.4 Upon termination or expiration of this Agreement, the Sub-Distributor shall immediately cease representing itself as associated with the Principal Distributor and shall discontinue all activities undertaken pursuant to this Agreement, and such termination shall be without prejudice to any rights, obligations, or liabilities accrued prior to termination, including obligations relating to confidentiality, indemnity, and compliance with Applicable Laws.</Text>
                    </View>
                </View>

                {/* Section 14: Governing Law */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>14. GOVERNING LAW AND JURISDICTION</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>14.1 This Agreement shall be governed by and construed in accordance with the laws of India.</Text>
                        <Text style={pdfStyles.paragraph}>14.2 Subject to the dispute resolution mechanism provided in this Agreement, the courts at Mumbai, India, Maharashtra shall have exclusive jurisdiction in respect of matters arising out of or in connection with this Agreement.</Text>
                    </View>
                </View>

                {/* Section 15: Dispute Resolution */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>15. DISPUTE RESOLUTION</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>15.1 The Parties shall endeavour to resolve amicably, through mutual discussions and good faith negotiations, any dispute, controversy or claim arising out of or relating to this Agreement, including its interpretation, performance or termination.</Text>
                        <Text style={pdfStyles.paragraph}>15.2 In the event such dispute is not resolved amicably within thirty (30) days from the date on which either Party notifies the other Party of the dispute, the same shall be referred to and finally resolved by arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996, as amended from time to time.</Text>
                        <Text style={pdfStyles.paragraph}>15.3 The arbitration shall be conducted by a sole arbitrator mutually appointed by the Parties. In the event the Parties fail to agree upon the appointment of the arbitrator, the appointment shall be made in accordance with the provisions of the Arbitration and Conciliation Act, 1996.</Text>
                        <Text style={pdfStyles.paragraph}>15.4 The seat and venue of arbitration shall be in Mumbai, Maharashtra, India, and the proceedings shall be conducted in the English language.</Text>
                        <Text style={pdfStyles.paragraph}>15.5 The arbitral award shall be final and binding upon the Parties and may be enforced in any court of competent jurisdiction.</Text>
                    </View>
                </View>

                {/* Section 16: Miscellaneous */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>16. MISCELLANEOUS</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>16.1 This Agreement constitutes the entire understanding between the Parties with respect to the subject matter hereof and supersedes all prior discussions, negotiations, understandings or arrangements, whether written or oral.</Text>
                        <Text style={pdfStyles.paragraph}>16.2 No modification, amendment or alteration of this Agreement shall be valid unless made in writing and duly executed by authorised representatives of both Parties.</Text>
                        <Text style={pdfStyles.paragraph}>16.3 The Sub-Distributor shall not assign, transfer or delegate any of its rights or obligations under this Agreement without the prior written consent of the Principal Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>16.4 Failure or delay by either Party in exercising any right or remedy under this Agreement shall not constitute a waiver of such right or remedy.</Text>
                        <Text style={pdfStyles.paragraph}>16.5 If any provision of this Agreement is held to be invalid, illegal or unenforceable by a court or arbitral tribunal of competent jurisdiction, the remaining provisions of this Agreement shall continue to remain in full force and effect.</Text>
                        <Text style={pdfStyles.paragraph}>16.6 The sub-distributor is not entitled to subcontract or transfer any of its rights and obligations under this Agreement without prior written consent of principal distributor. Principal distributor may assign all or part of its obligations under this Agreement.</Text>
                    </View>
                </View>

                {/* Section 17: Representations */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>17. REPRESENTATIONS AND WARRANTIES</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>17.1 The Sub-Distributor represents and warrants that it possesses the necessary competence, expertise, infrastructure, regulatory knowledge and operational capability required to perform its obligations under this Agreement in a professional and diligent manner.</Text>
                        <Text style={pdfStyles.paragraph}>17.2 The Sub-Distributor further represents that it shall at all times comply with all Applicable Laws, regulatory requirements, guidelines and circulars issued by relevant authorities, including those governing distribution of financial products and investor protection.</Text>
                        <Text style={pdfStyles.paragraph}>17.3 The Sub-Distributor shall conduct its activities in a fair, transparent and ethical manner and shall not engage in any practice, act or omission that may adversely affect the reputation, goodwill or regulatory standing of the Principal Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>17.4 The Sub-Distributor shall not make any statement, commitment, promise, guarantee or representation to clients or prospective investors which is inconsistent with or beyond the information, materials or authorisations provided by the Principal Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>17.5 The sub-distributor is competent to enter into a legally binding contract and this Agreement under Applicable Laws and that it is not incompetent to contract within the meaning of the Indian Contract Act, 1872 as amended from time to time.</Text>
                        <Text style={pdfStyles.paragraph}>17.6 The sub-distributor is a "fit and proper person" as defined under SEBI (Intermediaries) Regulations 2008.</Text>
                        <Text style={pdfStyles.paragraph}>17.7 Sub-distributor represents that it is not prohibited to act as a mutual fund distributor in accordance with the relevant regulations (if applicable). and shall immediately communicate to principal distributor upon applicability of any prohibitory provisions under the said regulation during the subsistence of this Agreement.</Text>
                    </View>
                </View>

                {/* SIGNATURE SECTION */}
                <View style={pdfStyles.signatureContainer}>
                    <Text style={pdfStyles.signBy}>Sign By</Text>

                    <View style={pdfStyles.signatureBlock}>
                        <Text style={pdfStyles.signatureLabel}>For Primary Distributor</Text>
                        <View>
                            <Text style={pdfStyles.signatureValue}>IndusArtha Financial Services Pvt Ltd</Text>
                            <Text style={pdfStyles.signatureSubText}>Authorised Signatory: Mr. Muddasani Narender Reddy</Text>
                        </View>
                    </View>

                    <View style={pdfStyles.signatureBlock}>
                        <Text style={pdfStyles.signatureLabel}>For Sub-distributor</Text>
                        <View>
                            <Text style={[pdfStyles.signatureValue, { textTransform: "uppercase" }]}>{entityName}</Text>
                        </View>
                    </View>
                </View>

                <Text style={pdfStyles.footer}>
                    This is a digitally signed document. Generated on {day}/{month}/{year}
                </Text>
            </Page>
        </Document>
    );
};

const AUTH_CONFIG = {
    headers: {
        Authorization: "Basic " + btoa("admin:tievista@123")
    }
};


const PatnersSignup = () => {
    // Form 1: User Registration
    const {
        register: registerReg,
        handleSubmit: handleSubmitReg,
        trigger: triggerReg,
        watch: watchReg,
        setValue: setValueReg,
        formState: { errors: errorsReg },
    } = useForm({ mode: "onBlur" });

    // Form 2: Identity (PAN / DOB)
    const {
        register: registerPan,
        handleSubmit: handleSubmitPan,
        watch: watchPan,
        setValue: setValuePan,
        formState: { errors: errorsPan },
    } = useForm({ mode: "onBlur" });

    // Form 3: Regulatory Details
    const {
        register: registerRegulatory,
        handleSubmit: handleSubmitRegulatory,
        watch: watchRegulatory,
        formState: { errors: errorsRegulatory },
    } = useForm({ mode: "onBlur" });

    // Form 4: Bank Details
    const {
        register: registerBank,
        handleSubmit: handleSubmitBank,
        setValue: setValueBank,
        formState: { errors: errorsBank },
    } = useForm({ mode: "onBlur" });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const agreementRef = useRef(null);

    const [showIdentity, setShowIdentity] = useState(false);
    const [showBankDetails, setShowBankDetails] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [showAgreement, setShowAgreement] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const [masterData, setMasterData] = useState({});

    // Watchers for validation/behavior
    const phoneValue = watchReg("phone");
    const emailValue = watchReg("email");
    const passwordValue = watchReg("password");
    const entityTypeValue = watchReg("entityType");

    const panValue = watchPan("pan");
    const dobValue = watchPan("dob");

    // Regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const passwordRegex = /^[A-Z](?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?!.*\s).{7,}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const arnRegex = /^\d{6}$/;
    const euinRegex = /^[A-Z]{1}\d{5}$/;
    const aprnRegex = /^\d{5}$/;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const entityOptions = [
        { value: "individual", label: "Individual" },
        { value: "pvt-ltd", label: "Private Limited Company" },
        { value: "public-ltd", label: "Public Limited Company" },
        { value: "llp", label: "Limited Liability Partnership (LLP)" },
        { value: "huf", label: "Hindu Undivided Family (HUF)" },
        { value: "trust", label: "Trust" },
    ];

    const selectedEntityLabel = entityOptions.find((opt) => opt.value === entityTypeValue)?.label || "Select your entity";

    const handlePhoneBlur = async () => {
        await triggerReg("phone");
    };

    const handleEmailBlur = async () => {
        await triggerReg("email");
    };

    // Submissions Handlers
    const getUserRegister = async (data) => {
        try {
            console.log("User Registration Data:", data);
            
            // Map to backend snake_case
            const payload = {
                entity_name: data.entityName,
                entity_type: data.entityType,
                address: data.address,
                contact_no: data.phone,
                email: data.email,
                password: data.password
            };

            const response = await axios.post("https://partnerregistration.duckdns.org/api/partners/register", payload, AUTH_CONFIG);
            
            if (response.status === 201 || response.status === 200) {
                setMasterData(prev => ({ ...prev, ...data }));
                setShowIdentity(true);
                setTimeout(() => {
                    const element = document.getElementById("identity-details");
                    element?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        } catch (error) {
            console.error("Initial registration failed:", error);
            if (error.response?.status === 409) {
                // Partner exists, just proceed to next step but sync masterData
                alert("Partner already exists. Resuming registration...");
                setMasterData(prev => ({ ...prev, ...data, ...error.response.data.partner }));
                setShowIdentity(true);
            } else {
                alert("Registration failed: " + (error.response?.data?.error || error.message));
            }
        }
    };

    const getPan = async (data) => {
        try {
            console.log("Identity (PAN/DOB) Data:", data);
            
            const identifier = masterData.email || masterData.phone;
            const payload = {
                dob: data.dob,
                pan_no: data.pan
            };

            await axios.put(`https://partnerregistration.duckdns.org/api/partners/update/${identifier}`, payload, AUTH_CONFIG);
            
            setMasterData(prev => ({ ...prev, ...data }));
            alert("PAN Details synced!");
        } catch (error) {
            console.error("Identity update failed:", error);
            alert("Failed to sync identity details.");
        }
    };

    const getRegulatory = async (data) => {
        try {
            console.log("Regulatory Data:", data);
            
            const identifier = masterData.email || masterData.phone;
            const payload = {
                arn: data.arn || null,
                euin_arn: data.euinARN || null,
                aprn: data.aprn || null,
                euin_aprn: data.euinAprn || null
            };

            await axios.put(`https://partnerregistration.duckdns.org/api/partners/update/${identifier}`, payload, AUTH_CONFIG);
            
            setMasterData(prev => ({ ...prev, ...data }));
            setShowBankDetails(true);
        } catch (error) {
            console.error("Regulatory update failed:", error);
            alert("Failed to sync regulatory details.");
        }
    };

    const getBankDetails = async (data) => {
        try {
            const finalBankData = {
                ...data,
                gstin: data.gstin?.trim() ? data.gstin.trim() : "0",
                cin_no: data.cin || "0"
            };
            console.log("Bank details submitted:", finalBankData);

            const identifier = masterData.email || masterData.phone;
            const payload = {
                bank_account_no: finalBankData.bankAccountNo,
                ifsc_code: finalBankData.ifscCode,
                gst_in: finalBankData.gstin,
                cin_no: finalBankData.cin_no
            };

            await axios.put(`https://partnerregistration.duckdns.org/api/partners/update/${identifier}`, payload, AUTH_CONFIG);
            
            setMasterData(prev => ({ ...prev, ...finalBankData }));
            setShowAgreement(true);
        } catch (error) {
            console.error("Bank details update failed:", error);
            alert("Failed to sync bank details.");
        }
    };

    const handleDownloadPdf = async (autoContinue = false) => {
        setIsGeneratingPdf(true);

        try {
            const today = new Date();
            const data = {
                day: today.getDate(),
                month: today.toLocaleString("default", { month: "long" }),
                year: today.getFullYear(),
                entityName: watchReg("entityName") || "[Sub-Distributor Name]",
                address: watchReg("address") || "[address]",
                arn: watchRegulatory("arn") || "[arn]",
                aprn: watchRegulatory("aprn") || "[aprn]",
            };

            // Generate the PDF as a blob
            const blob = await pdf(<AgreementPDF data={data} />).toBlob();

            // Create a download link
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `TieVista_Agreement_${watchReg("entityName") || "Partner"}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            if (autoContinue) {
                setShowAgreement(false);
            }
            alert("Welcome To TieVista!");

        } catch (error) {
            console.error("PDF generation failed:", error);
            alert("Download failed. Please try again.");
        } finally {
            setIsGeneratingPdf(false);
        }
    };


    // Agreement Modal Section
    const AgreementModal = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString("default", { month: "long" });
        const year = today.getFullYear();

        const entityName = watchReg("entityName") || "[Sub-Distributor Name]";
        const address = watchReg("address") || "[address]";
        const arn = watchRegulatory("arn") || "[arn]";
        const aprn = watchRegulatory("aprn") || "[aprn]";

        return (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 lg:p-10 bg-black/60 shadow-2xl backdrop-blur-sm animate-in fade-in duration-300">
                <div className="bg-white w-full max-w-6xl h-screen lg:h-[90vh] flex flex-col shadow-2xl overflow-hidden relative border border-gray-300">
                    {/* Modal Header for the "App" look */}
                    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        <div className="flex items-center gap-2">
                            <img src="/TieVistaLogo.png" alt="Logo" className="h-8" />
                            <span className="text-sm font-semibold text-black">Agreement Review</span>
                        </div>
                        <button
                            onClick={() => setShowAgreement(false)}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* The "Paper" Container */}
                    <div className="flex-1 overflow-y-auto bg-white flex justify-center py-10 lg:py-16 px-4">
                        <div
                            ref={agreementRef}
                            className="bg-white w-full max-w-[850px] min-h-screen p-10 lg:p-16 text-black font-serif leading-[1.6]"
                            style={{ fontSize: "13px" }}

                        >
                            {/* Logo and Header */}
                            <div className="flex flex-col items-start mb-12">
                                <img src="/TieVistaLogo.png" alt="TieVista Logo" className="h-20 mb-4" />
                                <h1 className="text-2xl font-bold text-center pt-4 w-full tracking-tight">
                                    Sub-Distributorship Agreement
                                </h1>
                                <p className="border-[#d4af37] mt-4 border-b-4 w-full"></p>
                            </div>

                            {/* Section 1 */}
                            <div className="mb-8 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                <p className="mb-4">
                                    This Mutual Fund Sub-Distribution and PMS Sub Distribution (<b>"Agreement"</b>) is executed on this <b>{day}</b> day of <b>{month} {year}</b> (<b>"Effective Date"</b>).
                                </p>
                                <p className="mb-2 font-bold uppercase">BETWEEN</p>
                                <p className="mb-6">
                                    <b>IndusArtha Financial Services Private Limited operating under the brand name of TieVista</b>, a company incorporated under the provisions of the Companies Act, 2013 having its registered office at 4th Floor, AWFIS, VIOS Tower, Wadala, Mumbai 400037 and holding a valid ARN registration issued by the Association of Mutual Funds in India and engaged inter alia in the business of distribution of financial products including mutual fund schemes and portfolio management services (hereinafter referred to as the <b>"Principal Distributor"</b>, which expression shall unless repugnant to the context include its successors and permitted assigns);
                                </p>
                                <p className="mb-2 font-bold uppercase">AND</p>
                                <p className="mb-8 font-bold">
                                    {entityName}, <span className="font-normal">having its principal place of business at</span> {address} <span className="font-normal">and engaged in the business of financial product marketing and client relationship management (hereinafter referred to as the "Sub-Distributor", which expression shall unless repugnant to the context include its successors and permitted assigns). The sub-distributor holds ARN</span> {arn} <span className="font-normal">and APRN</span> {aprn}
                                </p>
                                <p className="mb-10">
                                    The Principal Distributor and the Sub-Distributor are hereinafter collectively referred to as the <b>"Parties"</b> and individually as a <b>"Party"</b>.
                                </p>
                            </div>

                            {/* Whereas */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>WHEREAS:</h2>
                                <div className="space-y-4 text-justify pl-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>A. The Principal Distributor is engaged in the business of distribution of mutual fund schemes and allied financial products and operates in accordance with the regulatory framework prescribed under the SEBI (Mutual Funds) Regulations, 1996 and guidelines issued by the Association of Mutual Funds in India.</p>
                                    <p>B. The Principal Distributor also facilitates marketing and distribution of portfolio management services offered by SEBI registered portfolio managers in accordance with the provisions of the SEBI (Portfolio Managers) Regulations, 2020 and related circulars issued by the Securities and Exchange Board of India.</p>
                                    <p>C. The Sub-Distributor has represented that it possesses adequate experience, infrastructure, market reach, and client servicing capabilities required for marketing and facilitating investments in financial products.</p>
                                    <p>D. The Sub-Distributor has expressed its desire to act as a sub-distribution partner for mutual fund products and as a Sub Contractor/ Marketing partner for portfolio management services subject to regulatory restrictions and compliance requirements.</p>
                                    <p>E. The Principal Distributor has agreed to appoint the Sub-Distributor on a non-exclusive basis, subject to strict adherence to applicable laws, regulatory guidelines, and the terms and conditions set forth in this Agreement.</p>
                                    <p>F. The Sub-Distributor represents that it holds a valid AMFI Registration Number (ARN), Employee Unique Identification Number (EUIN) and APMI Registration Number (APRN), wherever applicable, and shall maintain the same in good standing during the Term.</p>
                                </div>
                                <p className="mt-8 font-bold text-justify">NOW THEREFORE, in consideration of the mutual covenants contained herein, the Parties hereby agree as follows:</p>
                            </div>

                            {/* Section 2: Definitions */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>2. DEFINITIONS</h2>
                                <p className="mb-6 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    In this Agreement, unless the context otherwise requires, the following terms shall have the meanings assigned to them hereunder. Words importing the singular shall include the plural and vice versa, and words importing any gender shall include all genders.
                                </p>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p><b>2.1 "AMC" or "Asset Management Company"</b> shall mean a company incorporated under the Companies Act, 2013 and approved by the Securities and Exchange Board of India to act as an asset management company for a mutual fund in accordance with the provisions of the SEBI (Mutual Funds) Regulations, 1996.</p>
                                    <p><b>2.2 "AMFI"</b> shall mean the Association of Mutual Funds in India, being the self-regulatory organization of mutual funds and intermediaries in India responsible for issuing guidelines, codes of conduct and AMFI Registration Numbers to mutual fund distributors and intermediaries.</p>
                                    <p><b>2.3 "Applicable Laws"</b> shall mean and include all applicable statutes, enactments, laws, ordinances, rules, regulations, circulars, notifications, guidelines, directions and policies issued by any governmental authority, regulatory authority, statutory body, self-regulatory organization or court of competent jurisdiction including, without limitation, regulations issued by the Securities and Exchange Board of India and guidelines issued by the Association of Mutual Funds in India, as amended or modified from time to time.</p>
                                    <p><b>2.4 "ARN" or "AMFI Registration Number"</b> shall mean the registration number allotted by AMFI to an intermediary or distributor authorising such entity to distribute mutual fund products in accordance with the applicable AMFI guidelines and regulatory framework.</p>
                                    <p><b>2.5 "Business Day"</b> shall mean any day on which banks and financial institutions are open for general business in India, excluding Saturdays, Sundays and public holidays.</p>
                                    <p><b>2.6 "Client"</b> shall mean any individual, body corporate, partnership firm, trust, association of persons, institution or any other legal entity who is introduced, referred, or sourced by the Sub-Distributor to the Principal Distributor for the purpose of investment in Mutual Fund Products or PMS Products.</p>
                                    <p><b>2.7 "Commission"</b> shall mean any remuneration, brokerage, trail commission, upfront commission, referral fee, marketing fee or incentive payable to the Sub-Distributor by the Principal Distributor in consideration for Distribution Services or Referral Services performed under this Agreement.</p>
                                    <p><b>2.8 "Confidential Information"</b> shall mean and include all non-public, proprietary or confidential information disclosed by one Party to the other, whether in written, electronic, oral or any other form, including but not limited to client information and investment details, marketing strategies and business plans, commission structures and commercial arrangements, internal policies and operational procedures, financial information and proprietary databases, and any other information which by its nature ought reasonably to be treated as confidential. Confidential Information shall not include information which is or becomes publicly available without breach of this Agreement, or which was lawfully known to the receiving Party prior to disclosure, or which is required to be disclosed pursuant to Applicable Laws or regulatory directives.</p>
                                    <p><b>2.9 "Distribution Services"</b> shall mean the activities undertaken for marketing, promotion, facilitation and distribution of Mutual Fund Products on behalf of the Principal Distributor, including identification of prospective investors, dissemination of approved marketing material, assistance in client onboarding and facilitation of transaction processing.</p>
                                    <p><b>2.10 "Effective Date"</b> shall mean the date on which this Agreement is executed by both Parties.</p>
                                    <p><b>2.11 "Marketing Material"</b> shall mean brochures, presentations, advertisements, emails, digital communication or any promotional content relating to Mutual Fund Products or PMS Products that has been approved by the Principal Distributor or the respective product provider.</p>
                                    <p><b>2.12 "Mutual Fund Products"</b> shall mean units or schemes offered by mutual funds established and registered with the Securities and Exchange Board of India and managed by Asset Management Companies in accordance with the provisions of the SEBI (Mutual Funds) Regulations, 1996.</p>
                                    <p><b>2.13 "PMS Products"</b> shall mean discretionary, non-discretionary or advisory portfolio management services provided by portfolio managers registered with the Securities and Exchange Board of India under the provisions of the SEBI (Portfolio Managers) Regulations, 2020.</p>
                                    <p><b>2.14 "Portfolio Manager"</b> shall mean a body corporate registered with SEBI and authorised to provide portfolio management services in accordance with the provisions of the SEBI (Portfolio Managers) Regulations, 2020.</p>
                                    <p><b>2.15 "Principal Distributor"</b> shall mean the entity appointing the Sub-Distributor under this Agreement for distribution of Mutual Fund Products and facilitation of PMS Products and shall include its successors and permitted assigns.</p>
                                    <p><b>2.16 "Referral Services"</b> shall mean activities limited to the introduction of prospective clients to the Principal Distributor or SEBI registered portfolio managers, facilitation of meetings between such clients and the Principal Distributor or portfolio managers, and assistance in administrative documentation, without providing investment advice or portfolio recommendations.</p>
                                    <p><b>2.17 "Regulatory Authority"</b> shall mean any governmental, statutory or regulatory authority having jurisdiction over the activities contemplated under this Agreement, including the Securities and Exchange Board of India.</p>
                                    <p><b>2.18 "SEBI"</b> shall mean the Securities and Exchange Board of India established under the Securities and Exchange Board of India Act, 1992.</p>
                                    <p><b>2.19 "Sub-Distributor"</b> shall mean the intermediary appointed under this Agreement for the limited purpose of marketing and facilitating investment in Mutual Fund Products and referring prospective clients for PMS Products, subject to the terms and conditions specified herein.</p>
                                    <p><b>2.20 "Term"</b> shall mean the duration of this Agreement commencing from the Effective Date and continuing until terminated in accordance with the provisions of this Agreement.</p>
                                </div>
                            </div>

                            {/* Section 3: Appointment */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>3. APPOINTMENT</h2>
                                <h3 className="font-bold mb-2" style={{ fontFamily: "'PT Serif', serif" }}>3.1 Appointment for Mutual Fund Sub-Distribution</h3>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>3.1.1 Subject to the terms and conditions of this Agreement, the Principal Distributor hereby appoints the Sub-Distributor, on a non-exclusive and non-transferable basis, as a Sub-Distributor for the limited purpose of marketing, promoting and facilitating investments in Mutual Fund Products distributed by the Principal Distributor.</p>
                                    <p>3.1.2 The Sub-Distributor acknowledges and agrees that such appointment is limited to distribution activities and does not confer upon the Sub-Distributor any authority to bind the Principal Distributor, any Asset Management Company, or any mutual fund in any contractual or legal capacity.</p>
                                    <p>3.1.3 The Sub-Distributor shall perform its obligations under this Agreement strictly in accordance with: (a) the provisions of the SEBI (Mutual Funds) Regulations, 1996 and any amendments or modifications thereto; (b) all circulars, guidelines and directives issued by the Securities and Exchange Board of India from time to time; (c) the guidelines, circulars and code of conduct prescribed by the Association of Mutual Funds in India including the AMFI Code of Conduct applicable to intermediaries, distributors and sub-distributors; (d) the internal policies, compliance procedures and operational guidelines prescribed by the Principal Distributor.</p>
                                    <p>3.1.4 Without prejudice to the generality of the foregoing, the Sub-Distributor shall: 1. identify and approach prospective investors for investment in Mutual Fund Products; 2. disseminate only such marketing materials, scheme information documents, key information memoranda, advertisements, presentations or communications as may have been approved by the relevant Asset Management Company or the Principal Distributor; 3. assist prospective investors in completing client onboarding documentation including Know Your Client (KYC) documentation and other regulatory requirements; 4. facilitate submission of investment applications, transaction forms and other documents through authorised channels; 5. ensure that all communications made to investors are fair, accurate and not misleading.</p>
                                    <p>3.1.5 The Sub-Distributor shall not: (i) make any representation, warranty or guarantee regarding investment performance or returns; (ii) provide personalised investment advice unless separately authorised under Applicable Laws; (iii) represent itself as an authorised representative, agent or employee of any Asset Management Company unless expressly permitted; (iv) alter, modify or misrepresent any scheme documentation, marketing communication or disclosure document issued by an Asset Management Company or the Principal Distributor.</p>
                                    <p>3.1.6 The Sub-Distributor acknowledges that the ultimate acceptance of any investor application and the allotment of units shall remain subject to the discretion of the concerned Asset Management Company.</p>
                                    <p>3.1.7 The Sub-distributor entering into this Agreement and intending to distribute units of mutual funds is qualified and eligible as per the applicable laws to carry out such business.</p>
                                </div>

                                <h3 className="font-bold mt-6 mb-2" style={{ fontFamily: "'PT Serif', serif" }}>3.2 Appointment for PMS Marketing and Sub-Distributorship Activities</h3>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>3.2.1 Subject to the terms and conditions of this Agreement, the Principal Distributor may permit the Sub-Distributor to undertake client sourcing, solicitation support and distribution support activities on a sub-contracted basis in relation to Portfolio Management Services ("PMS Products") offered by portfolio managers registered with the Securities and Exchange Board of India.</p>
                                    <p>3.2.2 For the purposes of this Agreement, such activities shall be undertaken strictly in the nature of sub-contracted client sourcing and facilitation services, including identification and introduction of prospective clients and coordination of onboarding processes, and shall not in any manner constitute portfolio management services, investment advisory services or discretionary management of client portfolios.</p>
                                    <p>3.2.3 The Sub-Distributor shall undertake such PMS distribution related activities only in accordance with the regulatory framework prescribed under the SEBI (Portfolio Managers) Regulations, 2020 and other applicable SEBI circulars and guidelines.</p>
                                    <p>3.2.4 Without prejudice to the generality of the foregoing, the following conditions shall apply: (a) The Sub-Distributor may introduce prospective clients interested in PMS Products to the Principal Distributor or to portfolio managers specifically approved by the Principal Distributor. (b) The Sub-Distributor shall undertake any marketing, solicitation or client introduction activity relating to PMS Products only after obtaining prior written approval from the Principal Distributor. (c) Such approval may specify the portfolio manager, product category, scope of marketing activities and commission arrangements applicable to the Sub-Distributor. (d) The Sub-Distributor acknowledges that its role in relation to PMS Products shall be limited to marketing support, client introduction, facilitation of meetings and administrative coordination between prospective clients and the Principal Distributor or the relevant portfolio manager. (e) The Sub-Distributor shall not represent itself as: (i) a portfolio manager; (ii) an investment adviser registered with SEBI; (iii) an authorised investment manager or portfolio management entity; or (iv) an entity authorised to provide investment advice or portfolio allocation recommendations. (f) The Sub-Distributor shall not: 1. provide discretionary investment advice relating to PMS Products; 2. recommend specific portfolio strategies or investment allocations; 3. execute investment decisions on behalf of clients; 4. collect or hold client funds or securities. (g) The final decision regarding acceptance of a client, execution of the portfolio management agreement and management of the investment portfolio shall rest solely with the relevant portfolio manager. (h) All documentation relating to PMS investments, including portfolio management agreements, risk disclosure documents and client onboarding documentation, shall be executed directly between the client and the portfolio manager in accordance with the provisions of the SEBI (Portfolio Managers) Regulations, 2020. (i) The Sub-Distributor shall ensure that all communications made to prospective clients in relation to PMS Products are accurate, fair and not misleading and are consistent with disclosures prescribed by applicable regulatory authorities.</p>
                                    <p className="">The Parties hereby acknowledge and agree that the Sub-Distributor shall act solely in the capacity of a sub-contracted client sourcing and distribution support intermediary for the limited purpose of identifying and introducing prospective clients and facilitating preliminary coordination in relation to PMS Products. The Sub-Distributor shall not hold itself out as an authorised representative, agent or affiliate of any portfolio manager.</p>
                                </div>
                            </div>

                            {/* Section 4: Prior Approval */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>4. PRIOR APPROVAL FOR PMS DISTRIBUTION</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>4.1 Notwithstanding anything contained elsewhere in this Agreement, the Sub-Distributor shall not undertake any client sourcing, solicitation support, distribution support or other sub-contracted facilitation activity in relation to Portfolio Management Services ("PMS Products") unless prior written approval has been obtained from the Principal Distributor and Portfolio Manager (wherever required).</p>
                                    <p>4.2 Such approval shall be granted at the sole discretion of the Principal Distributor and may specify the portfolio manager whose PMS Products may be introduced to prospective clients, the nature and scope of the permitted client sourcing and distribution support activities, the categories of PMS Products that may be introduced, and any operational procedures, compliance requirements or investor disclosure obligations that must be adhered to by the Sub-Distributor.</p>
                                    <p>4.3 The approval may further specify the commission, referral fee or other remuneration structure applicable to such activities, subject to applicable regulatory requirements and internal policies of the Principal Distributor, and the Sub-Distributor shall strictly comply with the terms and conditions specified in such approval and shall not undertake any activity beyond the scope of the authority granted therein.</p>
                                    <p>4.4 Any activity undertaken by the Sub-Distributor in relation to PMS Products without obtaining the prior written approval of the Principal Distributor, or in contravention of the terms and conditions specified in such approval, shall constitute a material breach of this Agreement, entitling the Principal Distributor to suspend or terminate this Agreement and take such further action as may be permissible under Applicable Laws, including the provisions of the SEBI (Portfolio Managers) Regulations, 2020 and other regulatory directions issued by the Securities and Exchange Board of India.</p>
                                </div>
                            </div>

                            {/* Section 5: Scope of Services */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>5. SCOPE OF SERVICES</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>5.1 Subject to the terms and conditions of this Agreement, the Sub-Distributor shall undertake client sourcing and distribution support activities in relation to Mutual Fund Products and such PMS Products as may be permitted by the Principal Distributor from time to time, including identifying and approaching prospective investors and facilitating their introduction to the Principal Distributor. Further, Client data obtained in connection with Mutual Fund investments shall not be used for marketing other financial products without the prior consent of the client.</p>
                                    <p>5.2 The Sub-Distributor may disseminate to prospective investors only such product literature, scheme-related documents, informational material or communications that have been issued or approved by the Principal Distributor or the relevant product provider, and shall ensure that all communications made to prospective investors are fair, accurate and not misleading.</p>
                                    <p>5.3 The Sub-Distributor may assist prospective investors and Clients in completing onboarding documentation, including Know Your Client (KYC) documentation, application forms and other administrative formalities, and may coordinate administrative communication between the Client and the Principal Distributor for the purpose of facilitating investments in the relevant products.</p>
                                    <p>5.4 Notwithstanding anything contained herein, the Sub-Distributor shall not provide investment advice, recommend specific investment strategies or portfolio allocations, make any representation or guarantee regarding investment performance or returns, represent itself as a portfolio manager or investment adviser, or undertake any activity that may be construed as discretionary portfolio management or investment advisory services.</p>
                                </div>
                            </div>

                            {/* Section 6: Compliance */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>6. COMPLIANCE WITH DISTRIBUTOR CODE OF CONDUCT</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>6.1 The Sub-Distributor shall at all times comply with the Code of Conduct applicable to distributors and sub-distributors prescribed by the Association of Mutual Funds in India and Securities and Exchange Board of India, and with all applicable regulatory guidelines, circulars and directions issued by competent authorities.</p>
                                    <p>6.2 The Sub-Distributor shall maintain high standards of integrity, fairness and professionalism in all dealings with prospective investors and Clients.</p>
                                    <p>6.3 The Sub-Distributor shall ensure full and transparent disclosure to Clients regarding the nature of its role as an intermediary and any commissions or remuneration that may be received in connection with investments facilitated through it.</p>
                                    <p>6.4 The Sub-Distributor shall not engage in mis-selling, misleading representations or dissemination of inaccurate information relating to Mutual Fund Products or PMS Products.</p>
                                    <p>6.5 The Sub-Distributor shall ensure that all information communicated to Clients is accurate, fair and consistent with the official product documentation issued by the relevant product provider or approved by the Principal Distributor.</p>
                                </div>
                            </div>

                            {/* Section 7: Client Disclosures */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>7. CLIENT DISCLOSURES</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>7.1 The Sub-Distributor shall ensure that each Client introduced by it receives clear and adequate disclosures regarding the nature of the services being rendered and the roles and responsibilities of the parties involved.</p>
                                    <p>7.2 The Sub-Distributor shall inform each Client that it acts solely as an intermediary engaged in client sourcing and distribution support activities and does not provide portfolio management or discretionary investment management services.</p>
                                    <p>7.3 The Sub-Distributor shall ensure and inform the Clients that they understand that the Principal Distributor, Asset Management Company or the relevant portfolio manager, as the case may be, shall be responsible for the management and administration of investments.</p>
                                    <p>7.4 The Sub-Distributor shall clearly disclose that investments in financial products including mutual funds and portfolio management services are subject to market risks and that past performance does not guarantee future results.</p>
                                    <p>7.5 The Sub-Distributor shall also disclose, where applicable, that commissions, referral fees or other forms of remuneration may be paid to intermediaries in connection with investments facilitated through such intermediaries.</p>
                                </div>
                            </div>

                            {/* Section 8: Commission */}
                            <div className="mb-8 " >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>8. COMMISSION AND REMUNERATION</h2>
                                <h3 className="font-bold mb-2" style={{ fontFamily: "'PT Serif', serif" }}>8.1 Commission for Mutual Fund Products</h3>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>8.1.1 In consideration of the distribution services performed by the Sub-Distributor under this Agreement, the Sub-Distributor shall be entitled to receive commission from the Principal Distributor in respect of investments in Mutual Fund Products sourced or facilitated by the Sub-Distributor.</p>
                                    <p>8.1.2 Such commission shall be payable as a share of the commission or distribution fees received by the Principal Distributor from the relevant Asset Management Companies.</p>
                                    <p>8.1.3 The commission payable to the Sub-Distributor may include upfront commissions, trail commissions, performance incentives or any other distribution-related remuneration payable in accordance with applicable regulatory guidelines.</p>
                                    <p>8.1.4 Any remuneration payable to the Sub-distributor in relation to mutual funds distributed shall be payable only upon receipt of the corresponding fees by the Principal Distributor from the relevant AMCs.</p>
                                    <p>8.1.5 Principal distributor reserves the right to claw-back Commissions and/or other amounts already paid to the sub-distributor from future due payments and/or demand return payments from sub-distributor, in compliance with applicable laws or as may be deemed fit & appropriate by principal distributor for valid purposes, including but not limited to reasons of any wrongly processed payments, any charges or dues pending or for any business or Transactions found void or invalid, etc.</p>
                                    <p>8.1.6 The principal distributor also reserves the right to set-off and/or deduct any due amounts by sub-distributor from the accrued commissions or brokerages etc., amounts payable to the sub-distributor at the discretion of principal distributor.</p>
                                </div>

                                <h3 className="font-bold mt-6 mb-2">8.2 Remuneration for PMS Client Introductions</h3>
                                <div className="space-y-4 text-justify">
                                    <p>8.2.1 In respect of PMS Products, the Sub-Distributor shall be entitled to receive referral fees or distribution support fees for introducing Clients to the Principal Distributor or to portfolio managers approved by the Principal Distributor.</p>
                                    <p>8.2.2 The structure and quantum of such remuneration shall be mutually agreed between the Parties and shall remain subject to applicable regulatory disclosure requirements.</p>
                                    <p>8.2.3 Any remuneration payable to the Sub-Distributor in relation to PMS Products shall be payable only upon receipt of the corresponding fees by the Principal Distributor from the relevant portfolio manager.</p>
                                    <p>8.2.4 All payments made under this Clause shall be subject to compliance with Applicable Laws including the provisions of the the SEBI (Portfolio Managers) Regulations, 2020.</p>
                                    <p>8.2.5 Principal distributor reserves the right to claw-back Commissions and/or other amounts already paid to the sub-distributor from future due payments and/or demand return payments from sub-distributor, in compliance with applicable laws or as may be deemed fit & appropriate by principal distributor for valid purposes, including but not limited to reasons of any wrongly processed payments, any charges or dues pending or for any business or Transactions found void or invalid, etc.</p>
                                    <p>8.2.6 The principal distributor also reserves the right to set-off and/or deduct any due amounts by sub-distributor from the accrued commissions or brokerages etc., amounts payable to the sub-distributor at the discretion of principal distributor.</p>
                                </div>
                            </div>

                            {/* Section 9: Confidentiality */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>9. CONFIDENTIALITY AND DATA PROTECTION</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>9.1 Each Party acknowledges that during the course of performance of this Agreement it may have access to or receive certain confidential, proprietary, financial, commercial, technical or client-related information of the other Party, including but not limited to business strategies, client databases, investment information, pricing structures, trade secrets, operational processes, marketing plans and any other information designated as confidential or which by its nature ought reasonably to be regarded as confidential ("Confidential Information").</p>
                                    <p>9.2 The receiving Party shall maintain the strictest confidentiality in respect of such Confidential Information and shall use such information solely for the limited purpose of performing its obligations under this Agreement and for no other purpose whatsoever.</p>
                                    <p>9.3 The receiving Party shall implement and maintain appropriate administrative, technical and organisational safeguards to ensure protection of Confidential Information against unauthorised access, disclosure, misuse, loss or alteration and shall ensure that its employees, agents, representatives or affiliates who may have access to such information are bound by obligations of confidentiality no less stringent than those contained herein.</p>
                                    <p>9.4 The receiving Party shall not disclose, publish, transmit or otherwise make available any Confidential Information to any third party without the prior written consent of the disclosing Party, except where such disclosure is required under Applicable Laws or by any regulatory authority, in which event the receiving Party shall promptly notify the disclosing Party to the extent legally permissible.</p>
                                    <p>9.5 All client-related information, investor data, contact details, financial information and transaction records obtained during the course of this Agreement shall be treated as strictly confidential and shall not be used for solicitation, marketing, commercial exploitation or any purpose unrelated to this Agreement.</p>
                                    <p>9.6 Upon termination or expiry of this Agreement, the receiving Party shall promptly return, delete or destroy all Confidential Information in its possession, custody or control, unless retention is required under Applicable Laws.</p>
                                    <p>9.7 The obligations contained in this Clause shall survive the termination or expiration of this Agreement for a period of five years, and in respect of client data and proprietary information, such obligations shall continue for so long as such information remains confidential in nature.</p>
                                </div>
                            </div>

                            {/* Section 10: Regulatory Aspects */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>10. Key Regulatory Aspects</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>10.1 The sub-distributor shall maintain all the information of their Clients required for the conduct of its business and as required under applicable Know Your Customer (KYC) and other Applicable Laws and shall make available any such information to principal distributor or the AMC or the portfolio manager upon request.</p>
                                    <p>10.2 The sub-distributor shall not use the nomenclature of 'Independent Financial Adviser' or 'IFA' or 'Wealth Adviser' or any other similar name or any name specifically prohibited by SEBI/AMFI, or any such combination of terms which may be interpreted as providing investment advice or possibilities being identified as an Investment Adviser, in any manner whatsoever. Further, the sub-distributor must always clearly communicate/ showcase to the client that he/she/it is an 'AMFI Registered Mutual Fund Distributor' and that no 'investment advice' is being rendered.</p>
                                    <p>10.3 The sub-distributor engaged in distribution of mutual funds acknowledges that the sub-distributor shall ensure not to contradict its role with the role of investment adviser in compliance with the provisions of the IA Regulations, as amended from time to time. In case the sub-distributor or any of its related party or associate wishes to register or has already registered as an Investment Adviser under IA Regulations, a written communication must be made to Principal advisor. In failure of which, principal advisor reserves a right to terminate this Agreement without prior notice.</p>
                                    <p>10.4 The sub-distributor shall be solely responsible to co-operate for adhering to the implementation of KYC and Anti Money Laundering (AML) norms, processes, compliances under the PMLA regulations & guidelines given by the regulatory authorities, SEBI, AMCs, SRO and principal advisor from time to time. In case of any non-compliance thereof, the sub-distributor agrees that principal advisor cannot be held responsible for the same. </p>
                                    <p>10.5. The sub-distributor shall ensure to adhere with all the compliances applicable under PMS regulations, circulars and guidelines for distribution of the portfolio management products offered by any portfolio manager registered with SEBI under applicable regulations.</p>
                                </div>
                            </div>

                            {/* Section 11: Indemnity */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>11. INDEMNITY</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>11.1 The Sub-Distributor shall fully indemnify, defend and hold harmless the Principal Distributor, its directors, officers, employees, affiliates and representatives from and against any and all losses, damages, liabilities, penalties, claims, demands, costs, expenses or regulatory actions whatsoever, including reasonable legal fees and expenses, arising directly or indirectly from any breach, default or non-performance of the obligations contained in this Agreement.</p>
                                    <p>11.2 Without prejudice to the generality of the foregoing, such indemnity shall extend to any loss or liability arising out of misrepresentation, misleading communication, unauthorised assurances or incorrect disclosures made by the Sub-Distributor to clients or prospective investors.</p>
                                    <p>11.3 The indemnity shall further apply in the event of any violation of Applicable Laws, regulatory guidelines, compliance requirements or investor protection norms by the Sub-Distributor or its personnel in connection with the activities contemplated under this Agreement.</p>
                                    <p>11.4 The Sub-Distributor shall also indemnify the Principal Distributor against any claims, proceedings, investigations, regulatory penalties or reputational damage arising from negligence, willful misconduct, fraud, mis-selling, breach of confidentiality or misuse of client information by the Sub-Distributor.</p>
                                    <p>11.5 The rights and remedies provided under this Clause shall survive termination or expiry of this Agreement and shall be in addition to any other rights or remedies available to the Principal Distributor under law or equity.</p>
                                </div>
                            </div>

                            {/* Section 12: Limitation of Liability */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>12. LIMITATION OF LIABILITY</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>12.1 The Principal Distributor shall not be responsible or liable for any losses, diminution in value, market fluctuations or investment risks arising from investments made by clients in financial products distributed under this Agreement.</p>
                                    <p>12.2 The Principal Distributor shall not be liable for the performance, actions, omissions or decisions of portfolio managers, asset management companies, issuers or other product providers whose products may be introduced or distributed under this Agreement.</p>
                                    <p>12.3 The Sub-Distributor acknowledges that all investment decisions shall ultimately be taken by the clients based on their own assessment of risks and suitability and the Principal Distributor shall not be liable for any financial loss or investment outcome arising therefrom.</p>
                                    <p>12.4 Nothing contained in this Clause shall limit liability arising from fraud, wilful misconduct or gross negligence where such limitation is prohibited under Applicable Laws.</p>
                                </div>
                            </div>

                            {/* Section 13: Term */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>13. TERM AND TERMINATION</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>13.1 This Agreement shall commence on the Effective Date and shall remain valid for a period of three (3) years unless terminated earlier in accordance with the provisions of this Agreement.</p>
                                    <p>13.2 Either Party may terminate this Agreement at any time, without assigning any reason, by providing the other Party with not less than thirty (30) days' prior written notice.</p>
                                    <p>13.3 Notwithstanding anything contained herein, the Principal Distributor shall have the right to terminate this Agreement with immediate effect upon written notice if the Sub-Distributor violates any Applicable Laws or regulatory requirements, engages in mis-selling or unethical conduct, breaches the Code of Conduct, or undertakes any act that may adversely affect the reputation, regulatory standing, or business interests of the Principal Distributor.</p>
                                    <p>13.4 Upon termination or expiration of this Agreement, the Sub-Distributor shall immediately cease representing itself as associated with the Principal Distributor and shall discontinue all activities undertaken pursuant to this Agreement, and such termination shall be without prejudice to any rights, obligations, or liabilities accrued prior to termination, including obligations relating to confidentiality, indemnity, and compliance with Applicable Laws.</p>
                                </div>
                            </div>

                            {/* Section 14: Governing Law */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>14. GOVERNING LAW AND JURISDICTION</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>14.1 This Agreement shall be governed by and construed in accordance with the laws of India.</p>
                                    <p>14.2 Subject to the dispute resolution mechanism provided in this Agreement, the courts at Mumbai, India, Maharashtra shall have exclusive jurisdiction in respect of matters arising out of or in connection with this Agreement.</p>
                                </div>
                            </div>

                            {/* Section 15: Dispute Resolution */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>15. DISPUTE RESOLUTION</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>15.1 The Parties shall endeavour to resolve amicably, through mutual discussions and good faith negotiations, any dispute, controversy or claim arising out of or relating to this Agreement, including its interpretation, performance or termination.</p>
                                    <p>15.2 In the event such dispute is not resolved amicably within thirty (30) days from the date on which either Party notifies the other Party of the dispute, the same shall be referred to and finally resolved by arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996, as amended from time to time.</p>
                                    <p>15.3 The arbitration shall be conducted by a sole arbitrator mutually appointed by the Parties. In the event the Parties fail to agree upon the appointment of the arbitrator, the appointment shall be made in accordance with the provisions of the Arbitration and Conciliation Act, 1996.</p>
                                    <p>15.4 The seat and venue of arbitration shall be in Mumbai, Maharashtra, India, and the proceedings shall be conducted in the English language.</p>
                                    <p>15.5 The arbitral award shall be final and binding upon the Parties and may be enforced in any court of competent jurisdiction.</p>
                                </div>
                            </div>

                            {/* Section 16: Miscellaneous */}
                            <div className="mb-8" >
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>16. MISCELLANEOUS</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>16.1 This Agreement constitutes the entire understanding between the Parties with respect to the subject matter hereof and supersedes all prior discussions, negotiations, understandings or arrangements, whether written or oral.</p>
                                    <p>16.2 No modification, amendment or alteration of this Agreement shall be valid unless made in writing and duly executed by authorised representatives of both Parties.</p>
                                    <p>16.3 The Sub-Distributor shall not assign, transfer or delegate any of its rights or obligations under this Agreement without the prior written consent of the Principal Distributor.</p>
                                    <p>16.4 Failure or delay by either Party in exercising any right or remedy under this Agreement shall not constitute a waiver of such right or remedy.</p>
                                    <p>16.5 If any provision of this Agreement is held to be invalid, illegal or unenforceable by a court or arbitral tribunal of competent jurisdiction, the remaining provisions of this Agreement shall continue to remain in full force and effect.</p>
                                    <p>16.6 The sub-distributor is not entitled to subcontract or transfer any of its rights and obligations under this Agreement without prior written consent of principal distributor. Principal distributor may assign all or part of its obligations under this Agreement.</p>
                                </div>
                            </div>

                            {/* Section 17: Representations */}
                            <div className="mb-20">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "'PT Serif', serif" }}>17. REPRESENTATIONS AND WARRANTIES</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    <p>17.1 The Sub-Distributor represents and warrants that it possesses the necessary competence, expertise, infrastructure, regulatory knowledge and operational capability required to perform its obligations under this Agreement in a professional and diligent manner.</p>
                                    <p>17.2 The Sub-Distributor further represents that it shall at all times comply with all Applicable Laws, regulatory requirements, guidelines and circulars issued by relevant authorities, including those governing distribution of financial products and investor protection.</p>
                                    <p>17.3 The Sub-Distributor shall conduct its activities in a fair, transparent and ethical manner and shall not engage in any practice, act or omission that may adversely affect the reputation, goodwill or regulatory standing of the Principal Distributor.</p>
                                    <p>17.4 The Sub-Distributor shall not make any statement, commitment, promise, guarantee or representation to clients or prospective investors which is inconsistent with or beyond the information, materials or authorisations provided by the Principal Distributor.</p>
                                    <p>17.5 The sub-distributor is competent to enter into a legally binding contract and this Agreement under Applicable Laws and that it is not incompetent to contract within the meaning of the Indian Contract Act, 1872 as amended from time to time.</p>
                                    <p>17.6 The sub-distributor is a "fit and proper person" as defined under SEBI (Intermediaries) Regulations 2008.</p>
                                    <p>17.7 Sub-distributor represents that it is not prohibited to act as a mutual fund distributor in accordance with the relevant regulations (if applicable). and shall immediately communicate to principal distributor upon applicability of any prohibitory provisions under the said regulation during the subsistence of this Agreement.</p>
                                </div>
                            </div>

                            {/* Signatures */}
                            <div className="flex flex-col pt-16 border-t border-gray-100 font-poppins">
                                <p className="mb-4 text-xs">Sign By</p>

                                <div className="flex-1 mb-4">
                                    <p className="font-bold text-black">For Primary Distributor</p>
                                    <div>
                                        <p className="font-bold text-black text-base">
                                            IndusArtha Financial Services Pvt Ltd
                                        </p>
                                        <p className="text-black">
                                            Authorised Signatory: Mr. Muddasani Narender Reddy
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1 text-left md:text-left">
                                    <p className="font-bold text-black">For Sub-distributor</p>
                                    <div className="flex flex-col">
                                        <p className="font-bold text-black min-w-[200px] pb-1 text-base uppercase">
                                            {entityName}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fixed Action Footer */}
                    <div className="bg-white border-t border-gray-300 p-6 lg:p-8 shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
                        <div className="max-w-[850px] mx-auto flex flex-col gap-6">
                            <div className="flex items-center gap-3 self-center lg:self-start">
                                <input
                                    type="checkbox"
                                    id="agree-modal"
                                    checked={isAgreed}
                                    onChange={(e) => setIsAgreed(e.target.checked)}
                                    className="w-5 h-5 accent-[#d4af37] border-gray-300 rounded cursor-pointer"
                                />
                                <label htmlFor="agree-modal" className="text-sm font-medium text-black cursor-pointer select-none">
                                    I have read and agree to the <span className="text-[#d4af37] font-bold">Terms & Conditions</span>
                                </label>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 overflow-hidden">
                                <button
                                    onClick={() => handleDownloadPdf(false)}
                                    disabled={!isAgreed || isGeneratingPdf}
                                    className={`w-full sm:w-auto px-8 py-2.5 border border-black rounded text-xs font-bold flex items-center justify-center gap-2 transition-colors uppercase ${isGeneratingPdf
                                        ? "bg-white text-black cursor-not-allowed"
                                        : "text-black hover:bg-gray-50"
                                        }`}
                                    style={{ fontFamily: "PT Serif, serif" }}
                                >
                                    <Download size={16} />
                                    Download Agreement
                                </button>
                                <button
                                    disabled={!isAgreed || isGeneratingPdf}
                                    onClick={() => handleDownloadPdf(true)}
                                    className={`w-full sm:w-auto px-16 py-3 rounded text-xs font-bold uppercase transition-all shadow-md active:translate-y-0.5 ${isAgreed && !isGeneratingPdf
                                        ? "bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white hover:shadow-lg hover:-translate-y-0.5"
                                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        }`}
                                    style={{ fontFamily: "PT Serif, serif" }}
                                >
                                    {isGeneratingPdf ? "Processing..." : "Continue"}
                                </button>
                            </div>

                            <div className="text-center pt-2 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8 border-t border-gray-100 mt-2">
                                <p className="text-[10px] text-gray-400 ">Please connect in case of any questions</p>
                                <div className="flex items-center gap-6">
                                    <a href="tel:9167915615" className="text-[10px] text-black hover:text-[#d4af37] flex items-center gap-2">
                                        <Phone size={12} className="text-[#d4af37]" />
                                        9167915615
                                    </a>
                                    <a href="mailto:connect@tievista.com" className="text-[10px] text-black hover:text-[#d4af37] flex items-center gap-2">
                                        <Mail size={12} className="text-[#d4af37]" />
                                        connect@tievista.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen bg-white">
            {/* Left Branding Panel - PRESERVED UI */}
            <div className="hidden lg:flex lg:w-[50%] relative bg-[#0a0a0a] overflow-hidden flex-shrink-0">
                <div
                    className="absolute inset-0 opacity-60 bg-cover bg-center mix-blend-screen"
                    style={{
                        backgroundImage:
                            "url('https://res.cloudinary.com/dck5jgfix/image/upload/v1776406975/PartnersRegistration_bg_pscsqx.png')",
                        filter: "sepia(1) saturate(2) hue-rotate(5deg) brightness(0.6)",
                    }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.1)_0%,_transparent_80%)]"></div>
                </div>

                <div className="relative z-10 w-full flex flex-col items-center justify-center p-12">
                    <div className="relative">
                        <img className="h-65 w-400" src="https://res.cloudinary.com/dck5jgfix/image/upload/v1776428641/TieVistaLogoW_ymkx1d.png" alt="TieVista Logo" />
                    </div>
                    <div className="text-center">
                        <p className="text-white text-2xl tracking-[0.1em] font-light">
                            Trust. Transparency. Transformation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Form Section - Implementing Slider */}
            <div className="flex-1 bg-white overflow-hidden flex flex-col scrollbar-hide">
                <div
                    className={`flex w-[200%] h-screen scrollbar-hide transition-transform duration-700 ease-in-out ${showBankDetails ? "-translate-x-1/2" : "translate-x-0"
                        }`}
                >
                    {/* Step 1: Registration (NEXT -> FETCH -> PROCEED) */}
                    <div className="w-1/2 overflow-y-auto px-8 lg:px-12 py-12 flex justify-center">
                        <div className="w-full max-w-lg">
                            <div className="mb-10 text-center">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] mb-2 font-bold tracking-tight">
                                    Partner Registration
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base lg:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Welcome to TieVista Partner Network
                                </p>
                                <div className="mt-8 border-b border-gray-200 w-full"></div>
                            </div>

                            <form onSubmit={handleSubmitReg(getUserRegister)} className="space-y-6">
                                {/* Name of Entity */}
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        NAME OF ENTITY<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        {...registerReg("entityName", { required: "Entity name is required" })}
                                        className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] focus:ring-0 outline-none transition-all placeholder:text-gray-300 text-sm text-black ${errorsReg.entityName ? "border-red-500" : "border-gray-300"
                                            }`}
                                    />
                                    {errorsReg.entityName && (
                                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.entityName.message}</p>
                                    )}
                                </div>

                                {/* Entity Type */}
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        ENTITY TYPE<span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative" ref={dropdownRef}>
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className={`w-full px-4 py-3 border rounded bg-white flex items-center justify-between transition-all text-sm ${errorsReg.entityType ? "border-red-500" : "border-gray-300"
                                                } ${isDropdownOpen ? "border-[#d4af37] ring-1 ring-[#d4af37]" : ""}`}
                                        >
                                            <span className={entityTypeValue ? "text-black" : "text-gray-400"}>{selectedEntityLabel}</span>
                                            <ChevronDown
                                                size={18}
                                                className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#d4af37]" : ""
                                                    }`}
                                            />
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                                                {entityOptions.map((option) => (
                                                    <div
                                                        key={option.value}
                                                        onClick={() => {
                                                            setValueReg("entityType", option.value, { shouldValidate: true });
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className={`px-4 py-3 text-sm cursor-pointer transition-colors hover:bg-[#d4af37]/10 hover:text-[#b78628] ${entityTypeValue === option.value ? "bg-[#d4af37]/5 text-[#d4af37] font-medium" : "text-gray-700"
                                                            }`}
                                                    >
                                                        {option.label}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <input type="hidden" {...registerReg("entityType", { required: "Please select an entity type" })} />
                                    </div>
                                    {errorsReg.entityType && (
                                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.entityType.message}</p>
                                    )}
                                </div>

                                {/* Address */}
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        ADDRESS<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        {...registerReg("address", { required: "Address is required" })}
                                        className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] focus:ring-0 outline-none transition-all placeholder:text-gray-300 text-sm text-black ${errorsReg.address ? "border-red-500" : "border-gray-300"
                                            }`}
                                    />
                                    {errorsReg.address && (
                                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.address.message}</p>
                                    )}
                                </div>

                                {/* Contact No */}
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        CONTACT NO<span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative w-24 flex-shrink-0">
                                            <select className="w-full px-4 py-3 border border-gray-300 rounded appearance-none focus:border-[#d4af37] outline-none bg-white text-sm text-black">
                                                <option>+91</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                                        </div>
                                        <input
                                            {...registerReg("phone", {
                                                required: "Mobile number is required",
                                                pattern: { value: phoneRegex, message: "Invalid 10-digit number" },
                                            })}
                                            onBlur={handlePhoneBlur}
                                            className={`flex-1 px-2 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm text-black ${errorsReg.phone ? "border-red-500" : "border-gray-300"
                                                }`}
                                            maxLength={10}
                                        />
                                    </div>
                                    {errorsReg.phone && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.phone.message}</p>}
                                </div>



                                {/* Email Id */}
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        EMAIL ID<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        {...registerReg("email", {
                                            required: "Email is required",
                                            pattern: { value: emailRegex, message: "Invalid email format" },
                                        })}
                                        onBlur={handleEmailBlur}
                                        className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm text-black ${errorsReg.email ? "border-red-500" : "border-gray-300"
                                            }`}
                                    />
                                    {errorsReg.email && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.email.message}</p>}
                                </div>



                                {/* Password */}
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        PASSWORD<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...registerReg("password", {
                                            required: "Password is required",
                                            pattern: { value: passwordRegex, message: "Start with Capital, 8+ chars, mix of number & symbol, no spaces" },
                                        })}
                                        className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all text-sm text-black ${errorsReg.password ? "border-red-500" : "border-gray-300"
                                            }`}
                                    />
                                    {errorsReg.password && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.password.message}</p>}
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        CONFIRM PASSWORD<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...registerReg("confirmPassword", {
                                            required: "Please confirm password",
                                            validate: (val) => watchReg("password") === val || "Passwords do not match",
                                        })}
                                        className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all text-sm text-black ${errorsReg.confirmPassword ? "border-red-500" : "border-gray-300"
                                            }`}
                                    />
                                    {errorsReg.confirmPassword && (
                                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.confirmPassword.message}</p>
                                    )}
                                </div>

                                {/* NEXT Button */}
                                {!showIdentity && (
                                    <div className="py-15 flex justify-center my-3.5">
                                        <button
                                            type="submit"
                                            className="w-full max-w-xs py-3.5 rounded-lg shadow-md transition-all font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                                        >
                                            NEXT
                                        </button>
                                    </div>
                                )}
                            </form>

                            {/* Identity & Regulatory Section */}
                            {showIdentity && (
                                <div id="identity-details" className="pt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold text-gray-800 tracking-widest uppercase">IDENTITY DETAILS</h3>
                                        <div className="border-b border-gray-200 w-full"></div>
                                    </div>

                                    {/* Form 2: Identity (PAN / DOB) */}
                                    <form onSubmit={handleSubmitPan(getPan)} className="space-y-6">
                                        {/* PAN */}
                                        <div className="space-y-1.5">
                                            <label className="text-[14px] font-medium text-black tracking-wide uppercase">PAN <span className="text-red-500">*</span></label>
                                            <input
                                                {...registerPan("pan", {
                                                    required: "PAN required",
                                                    pattern: panRegex,
                                                    maxLength: { value: 10, message: "PAN must be 10 characters" }
                                                })}
                                                onChange={(e) => setValuePan("pan", e.target.value.toUpperCase(), { shouldValidate: true })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-sm uppercase text-black"
                                                placeholder="ABCDE1234F"
                                                maxLength={10}
                                            />
                                        </div>

                                        {/* DOB */}
                                        <div className="space-y-1.5">
                                            <label className="text-[14px] font-medium text-black tracking-wide uppercase">DOB<span className="text-red-500">*</span></label>
                                            <input
                                                {...registerPan("dob", { required: "DOB required", pattern: dobRegex })}
                                                onChange={(e) => {
                                                    let value = e.target.value.replace(/\D/g, "");
                                                    if (value.length > 2 && value.length <= 4) value = value.slice(0, 2) + "/" + value.slice(2);
                                                    else if (value.length > 4) value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
                                                    setValuePan("dob", value, { shouldValidate: true });
                                                }}
                                                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-sm text-black"
                                                placeholder="DD/MM/YYYY"
                                            />
                                        </div>

                                        <div className="flex gap-3 items-start">
                                            <input
                                                type="checkbox"
                                                id="auth-check"
                                                className="mt-1 accent-[#d4af37] w-4 h-4 cursor-pointer"
                                                checked={isAuthorized}
                                                onChange={(e) => setIsAuthorized(e.target.checked)}
                                            />
                                            <label htmlFor="auth-check" className="text-[11px] text-gray-600 leading-relaxed cursor-pointer select-none">
                                                I Authorize TieVista Global Private Wealth (IndusArtha Financial Services Private Limited) to fetch my KYC data from KRA for the purpose of availing Financial Products Distribution service and to become a registered partner with TieVista Global Private Wealth (IndusArtha Financial Services Private Limited).
                                            </label>
                                        </div>

                                        {/* Fetch Data Button - Acts as Submit for Identity Form */}
                                        <div className="flex justify-center pt-2">
                                            <button
                                                type="submit"
                                                disabled={!panValue || !dobValue || !isAuthorized || errorsPan.pan || errorsPan.dob}
                                                className={`w-full max-w-[200px] py-3 rounded-lg shadow-sm font-bold text-xs tracking-widest uppercase transition-all ${panValue && dobValue && isAuthorized && !errorsPan.pan && !errorsPan.dob
                                                    ? "bg-gradient-to-r from-[#e5bc4b] to-[#d4af37] text-white hover:shadow-md cursor-pointer"
                                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                    }`}
                                            >
                                                Fetch Data
                                            </button>
                                        </div>
                                    </form>

                                    {/* Form 3: Regulatory Details */}
                                    <form onSubmit={handleSubmitRegulatory(getRegulatory)} className="space-y-6 pt-4">
                                        {/* Regulatory Details Title */}
                                        <div className="pt-8 space-y-4">
                                            <h3 className="text-sm font-bold text-gray-800 tracking-widest uppercase">REGULATORY DETAILS</h3>
                                            <div className="border-b border-gray-200 w-full"></div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <input
                                                {...registerRegulatory("arn", {
                                                    pattern: arnRegex,
                                                    maxLength: { value: 6, message: "ARN must be 6 digits" }
                                                })}
                                                placeholder="ARN (6 digits)"
                                                maxLength={6}
                                                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-sm text-black"
                                            />
                                            <input
                                                {...registerRegulatory("euinARN", {
                                                    pattern: euinRegex,
                                                    maxLength: { value: 6, message: "EUIN must be 6 characters" }
                                                })}
                                                placeholder="EUIN (E12345)"
                                                maxLength={6}
                                                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-sm text-black"
                                            />
                                            <input
                                                {...registerRegulatory("aprn", {
                                                    pattern: aprnRegex,
                                                    maxLength: { value: 5, message: "APRN must be 5 digits" }
                                                })}
                                                placeholder="APRN (5 digits)"
                                                maxLength={5}
                                                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-sm text-black"
                                            />
                                            <input
                                                {...registerRegulatory("euinAprn", {
                                                    pattern: euinRegex,
                                                    maxLength: { value: 6, message: "EUIN must be 6 characters" }
                                                })}
                                                placeholder="EUIN (APRN)"
                                                maxLength={6}
                                                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-sm text-black"
                                            />
                                        </div>

                                        {/* PROCEED Button */}
                                        <div className="pt-10 flex justify-center pb-12">
                                            <button
                                                type="submit"
                                                className="w-full max-w-xs py-3.5 bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all font-bold text-sm tracking-widest uppercase"
                                            >
                                                PROCEED
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Step 2: Bank Details Form */}
                    <div className="w-1/2 h-full px-8 lg:px-12 py-12 flex flex-col justify-center items-center overflow-hidden">
                        <div className="w-full max-w-lg">
                            <div className="mb-10 text-center">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] mb-2 font-bold tracking-tight">
                                    Bank Details
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base lg:text-lg">Enter your bank account information</p>
                                <div className="mt-8 border-b border-gray-200 w-full"></div>
                            </div>

                            <form onSubmit={handleSubmitBank(getBankDetails)} className="space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase">BANK ACCOUNT NO<span className="text-red-500">*</span></label>
                                    <input
                                        {...registerBank("bankAccountNo", { required: "Account number is required" })}
                                        placeholder="000000000000"
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-sm text-black"
                                    />
                                    {errorsBank.bankAccountNo && (
                                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsBank.bankAccountNo.message}</p>
                                    )}
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase">IFSC CODE<span className="text-red-500">*</span></label>
                                    <input
                                        {...registerBank("ifscCode", {
                                            required: "IFSC Code is required",
                                            pattern: { value: /^[A-Z]{4}0\d{6}$/, message: "Invalid IFSC format (e.g., ABCD0123456)" }
                                        })}
                                        maxLength={11}
                                        onChange={(e) => setValueBank("ifscCode", e.target.value.toUpperCase())}
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-sm uppercase text-black"
                                        placeholder="ABCD0123456"
                                    />
                                    {errorsBank.ifscCode && (
                                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsBank.ifscCode.message}</p>
                                    )}
                                </div>

                                {(entityTypeValue === "pvt-ltd" || entityTypeValue === "public-ltd") && (
                                    <div className="space-y-1.5">
                                        <label className="text-[14px] font-medium text-black tracking-wide uppercase">CIN<span className="text-red-500">*</span></label>
                                        <input
                                            {...registerBank("cin", {
                                                required: "CIN is required",
                                                pattern: { value: /^([LUu][0-9]{5}[A-Za-z]{2}[0-9]{4}[A-Za-z]{3}[0-9]{6})$/, message: "Invalid CIN format (21 characters)" }
                                            })}
                                            maxLength={21}
                                            onChange={(e) => setValueBank("cin", e.target.value.toUpperCase())}
                                            className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-sm uppercase text-black"
                                            placeholder="U72900MH2021PTC363102"
                                        />
                                        {errorsBank.cin && (
                                            <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsBank.cin.message}</p>
                                        )}
                                    </div>
                                )}

                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase">GSTIN</label>
                                    <input
                                        {...registerBank("gstin", {
                                            pattern: { value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, message: "Invalid GSTIN format (e.g., 33AAACI1607G2Z5)" }
                                        })}
                                        maxLength={15}
                                        onChange={(e) => setValueBank("gstin", e.target.value.toUpperCase())}
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-sm uppercase text-black"
                                        placeholder="33AAACI1607G2Z5 (Optional)"
                                    />
                                    {errorsBank.gstin && (
                                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsBank.gstin.message}</p>
                                    )}
                                </div>

                                <div className="pt-10 flex justify-center pb-12">
                                    <button
                                        type="submit"
                                        className="w-full max-w-xs py-4 bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all font-bold text-sm tracking-widest uppercase"
                                    >
                                        Submit Details
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Agreement Modal */}
            {showAgreement && <AgreementModal />}
        </div>
    );
};

export default PatnersSignup;