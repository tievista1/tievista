import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, ChevronDown, Download, FileText, X, Phone, Mail, Globe } from "lucide-react";
import { Document, Page, Text, View, StyleSheet, pdf, Image, Font, Svg, Path, Circle, Rect } from "@react-pdf/renderer";
import PoppinsRegular from "../fonts/Poppins-Regular.ttf";
import PoppinsBold from "../fonts/Poppins-Bold.ttf";
import PoppinsItalic from "../fonts/Poppins-Italic.ttf";
import PTSerifRegular from "../fonts/PTSerif-Regular.ttf";
import PTSerifBold from "../fonts/PTSerif-Bold.ttf";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailIcon from '@mui/icons-material/Email';
import CallEndIcon from '@mui/icons-material/CallEnd';

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
        justifyContent: 'space-between',
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
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image src={window.location.origin + "/icon.png"} style={{ height: 55, width: 55, objectFit: 'contain' }} />
                        <View style={{ flexDirection: 'column', position: 'relative', height: 55, justifyContent: 'center' }}>
                            <Image src={window.location.origin + "/TieVistaVerticalLogo.png"} style={{ height: 16, width: 85, objectFit: 'contain' }} />
                            <Text style={{ position: 'absolute', top: 35, left: 16, fontSize: 6.5, fontWeight: 'light', fontFamily: 'Poppins' }}>Global Private Wealth</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Svg viewBox="0 0 24 24" width={10} height={10} fill="#ffffff" stroke="#e5bc4b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(135deg)" }}>
                                <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </Svg>
                            <Text style={{ fontSize: 10, color: 'black' }}>+91 9885424473</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Svg viewBox="0 0 24 24" width={10} height={10} fill="#ffffff" stroke="#e5bc4b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <Rect width="20" height="16" x="2" y="4" rx="2" />
                                <Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </Svg>
                            <Text style={{ fontSize: 10, color: 'black' }}>narender.reddy@tievista.com</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Svg viewBox="0 0 24 24" width={10} height={10} fill="#ffffff" stroke="#e5bc4b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <Circle cx="12" cy="12" r="10" />
                                <Path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                <Path d="M2 12h20" />
                            </Svg>
                            <Text style={{ fontSize: 10, color: 'black' }}>TieVista.com</Text>
                        </View>
                    </View>
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
                        <Text style={pdfStyles.bold}>INDUSARTHA FINANCIAL SERVICES PRIVATE LIMITED operating under the brand name of TieVista</Text>, a company incorporated under the provisions of the Companies Act, 2013 having its registered office at 4th Floor, AWFIS, VIOS Tower, Wadala, Mumbai 400037 and holding a valid ARN registration issued by the Association of Mutual Funds in India and engaged inter alia in the business of distribution of financial products including mutual fund schemes and portfolio management services (hereinafter referred to as the <Text style={pdfStyles.bold}>"Principal Distributor"</Text>, which expression shall unless repugnant to the context include its successors and permitted assigns);
                    </Text>
                    <Text style={pdfStyles.heading}>AND</Text>
                    <Text style={pdfStyles.paragraph}>
                        <Text style={pdfStyles.bold}>{entityName}</Text>, <Text style={pdfStyles.paragraph}>having its principal place of business at</Text> {address} <Text style={pdfStyles.paragraph}>and engaged in the business of financial product marketing and client relationship management (hereinafter referred to as the "Sub-Distributor", which expression shall unless repugnant to the context include its successors and permitted assigns). The sub-distributor holds ARN –</Text> <Text style={pdfStyles.bold}>{arn}</Text> <Text style={pdfStyles.paragraph}>and APRN -</Text> <Text style={pdfStyles.bold}>{aprn}</Text>.
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
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.1. "AMC" or "Asset Management Company"</Text> shall mean a company incorporated under the Companies Act, 2013 and approved by the Securities and Exchange Board of India to act as an asset management company for a mutual fund in accordance with the provisions of the SEBI (Mutual Funds) Regulations, 1996.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.2. "AIF Offering"</Text> shall mean offering units of alternative investment fund registered with the Securities and Exchange Board of India under the provisions of the SEBI (Alternative Investment Funds) Regulations, 2012.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.3. "Applicable Laws"</Text> shall mean and include all applicable statutes, enactments, laws, ordinances, rules, regulations, circulars, notifications, guidelines, directions and policies issued by any governmental authority, regulatory authority, statutory body, self-regulatory organization or court of competent jurisdiction including, without limitation, regulations issued by the Securities and Exchange Board of India and guidelines issued by the Association of Mutual Funds in India, as amended or modified from time to time.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.4. "Business Day"</Text> shall mean any day on which banks and financial institutions are open for general business in India, excluding Saturdays, Sundays and public holidays.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.5. "Client"</Text> shall mean any individual, body corporate, partnership firm, trust, association of persons, institution or any other legal entity who is introduced, referred, or sourced by the Sub-Distributor to the Principal Distributor for the purpose of investment in Mutual Fund Products or PMS Products or other products/ services covered under clause 3 of the agreement.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.6. "Commission"</Text> shall mean any remuneration, brokerage, trail commission, upfront commission, referral fee, marketing fee or incentive payable to the Sub-Distributor by the Principal Distributor in consideration for Distribution Services or Referral Services performed under this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.7. "Confidential Information"</Text> shall mean and include all non-public, proprietary or confidential information disclosed by one Party to the other, whether in written, electronic, oral or any other form, including but not limited to client information and investment details, marketing strategies and business plans, commission structures and commercial arrangements, internal policies and operational procedures, financial information and proprietary databases, and any other information which by its nature ought reasonably to be treated as confidential. Confidential Information shall not include information which is or becomes publicly available without breach of this Agreement, or which was lawfully known to the receiving Party prior to disclosure, or which is required to be disclosed pursuant to Applicable Laws or regulatory directives.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.8. "Distribution Services"</Text> shall mean the activities undertaken for marketing, promotion, facilitation and distribution of Mutual Fund Products on behalf of the Principal Distributor, including identification of prospective investors, dissemination of approved marketing material, assistance in client onboarding and facilitation of transaction processing.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.9. "Effective Date"</Text> shall mean the date on which this Agreement is executed by both Parties.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.10. "Financial Offering"</Text> shall mean services or products as may be approved by the principal distributor and regulated by any financial sector regulator.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.11. "Manufacturer"</Text> shall mean issuer of security or the entity/ person engaged in servicing the products or services which are regulated by any financial sector regulator.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.12. "Marketing Material"</Text> shall mean brochures, presentations, advertisements, emails, digital communication or any promotional content relating to Mutual Fund Products or PMS Products or other products/ services covered under clause 3 of the agreement that has been approved by the Principal Distributor or the respective product provider.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.13. "Principal Distributor"</Text> shall mean the entity appointing the Sub-Distributor under this Agreement for distribution of Mutual Fund Products and facilitation of PMS Products or any other products/ services covered under clause 3 of the agreement and shall include its successors and permitted assigns.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.14. "Referral Services"</Text> shall mean activities limited to the introduction of prospective clients to the Principal Distributor for onboarding such clients by the manufacturer solely at their discretion or manufacturer, without providing investment advice or portfolio recommendations.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.15. "Regulatory Authority"</Text> shall mean any governmental, statutory or regulatory authority having jurisdiction over the activities contemplated under this Agreement, including the Securities and Exchange Board of India.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.16. "SEBI"</Text> shall mean the Securities and Exchange Board of India established under the Securities and Exchange Board of India Act, 1992.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.17. "Sub-Distributor"</Text> shall mean the intermediary appointed under this Agreement for the limited purpose of marketing and facilitating investment in Mutual Fund Products and referring prospective clients for PMS Products or any other products/ services covered under clause 3 of the agreement, subject to the terms and conditions specified herein.</Text>
                        <Text style={pdfStyles.paragraph}><Text style={pdfStyles.bold}>2.18. "Term"</Text> shall mean the duration of this Agreement commencing from the Effective Date and continuing until terminated in accordance with the provisions of this Agreement.</Text>
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
                        <Text style={pdfStyles.paragraph}>3.2.4 Without prejudice to the generality of the foregoing, the following conditions shall apply: (a) The Sub-Distributor may introduce prospective clients interested in PMS Products to the Principal Distributor or to portfolio managers specifically approved by the Principal Distributor. (b) The Sub-Distributor shall undertake any marketing, solicitation or client introduction activity relating to PMS Products only after obtaining prior written approval from the Principal Distributor. (c) Such approval may specify the portfolio manager, product category, scope of marketing activities and commission arrangements applicable to the Sub-Distributor. (d) The Sub-Distributor acknowledges that its role in relation to PMS Products shall be limited to marketing support, client introduction, facilitation of meetings and administrative coordination between prospective clients and the Principal Distributor or the relevant portfolio manager. (e) The Sub-Distributor shall not represent itself as: (i) a portfolio manager; (ii) an investment adviser registered with SEBI; (iii) an authorised investment manager or portfolio management entity; or (iv) an entity authorised to provide investment advice or portfolio allocation recommendations. (f) The Sub-Distributor shall not: 1. provide discretionary investment advice relating to PMS Products; 2. recommend specific portfolio strategies or investment allocations; 3. execute investment decisions on behalf of clients; 4. collect or hold client funds or securities. (g) The final decision regarding acceptance of a client, execution of the portfolio management agreement and management of the investment portfolio shall rest solely with the relevant portfolio manager. (h) All documentation relating to PMS investments, including portfolio management agreements, risk disclosure documents and client onboarding documentation, shall be executed directly between the client and the portfolio manager in accordance with the provisions of the SEBI (Portfolio Managers) Regulations, 2020. (i) The Sub-Distributor shall ensure that all communications made to prospective clients in relation to PMS Products are accurate, fair and not misleading and are consistent with disclosures prescribed by applicable regulatory authorities.</Text>
                        <Text style={pdfStyles.paragraph}>The Parties hereby acknowledge and agree that the Sub-Distributor shall act solely in the capacity of a sub-contracted client sourcing and distribution support intermediary for the limited purpose of identifying and introducing prospective clients and facilitating preliminary coordination in relation to PMS Products. The Sub-Distributor shall not hold itself out as an authorised representative, agent or affiliate of any portfolio manager.</Text>
                    </View>

                    <Text style={pdfStyles.subHeading}>3.3 Appointment for AIF Marketing and Sub-Distributorship Activities</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>3.3.1 Subject to the terms and conditions of this Agreement, the Principal Distributor may permit the Sub-Distributor to undertake client sourcing, solicitation support and distribution support activities on a sub-contracted basis in relation to Alternative Investment Funds ("AIF Offerings") offered by the investment managers of AIFs which are registered with the Securities and Exchange Board of India.</Text>
                        <Text style={pdfStyles.paragraph}>3.3.2 For the purposes of this Agreement, such activities shall be undertaken strictly in the nature of sub-contracted client sourcing and facilitation services, including identification and introduction of prospective clients and coordination of onboarding processes, and shall not in any manner constitute investment advisory services.</Text>
                        <Text style={pdfStyles.paragraph}>3.3.3 The Sub-Distributor shall undertake such AIF distribution related activities only in accordance with the regulatory framework prescribed by SEBI or any other authority as may be prescribed.</Text>
                        <Text style={pdfStyles.paragraph}>3.3.4 Without prejudice to the generality of the foregoing, the following conditions shall apply: (a) The Sub-Distributor may introduce prospective clients interested in AIF offerings to the Principal Distributor or to investment manager specifically approved by the Principal Distributor. (b) The Sub-Distributor shall undertake any marketing, solicitation or client introduction activity relating to AIF offerings only after obtaining prior written approval from the Principal Distributor. The distribution of Alternative Investment Fund, being a privately placed vehicle, shall be subject to guidelines issued by principal distributor for distribution of such privately placed products. (c) Such approval may specify the AIF scheme, scope of marketing activities and commission arrangements applicable to the Sub-Distributor. (d) The Sub-Distributor acknowledges that its role in relation to AIF Offerings shall be limited to marketing support, client introduction, facilitation of meetings and administrative coordination between prospective clients and the Principal Distributor or the relevant investment manager. (e) The Sub-Distributor shall not represent itself as: (i) an investment manager of AIF; (ii) an investment adviser registered with SEBI; (iii) an authorised investment manager or portfolio management entity; or (iv) an entity authorised to provide investment advice or portfolio allocation recommendations. (f) The Sub-Distributor shall not: 1. provide investment advice relating to AIF offerings; 2. recommend specific portfolio strategies or investment allocations; 3. execute investment decisions on behalf of clients; 4. collect or hold client funds or securities. (g) The final decision regarding acceptance of a client, execution of the contribution agreement and management of the investment portfolio shall rest solely with the relevant investment manager. (h) All documentation relating to AIF offerings, including contribution agreement and other client onboarding documentation, shall be executed directly between the client and the investment manager in accordance with the provisions of the SEBI (Alternative Investment Fund) Regulations, 2012. (i) The Sub-Distributor shall ensure that all communications made to prospective clients in relation to AIF offerings are accurate, fair and not misleading and are consistent with disclosures prescribed by applicable regulatory authorities.</Text>
                        <Text style={pdfStyles.paragraph}>The Parties hereby acknowledge and agree that the Sub-Distributor shall act solely in the capacity of a sub-contracted client sourcing and distribution support intermediary for the limited purpose of identifying and introducing prospective clients and facilitating preliminary coordination in relation to AIF offerings. The Sub-Distributor shall not hold itself out as an authorised representative, agent or affiliate of any investment manager.</Text>
                    </View>

                    <Text style={pdfStyles.subHeading}>3.4 Appointment for Sub-Distributorship Activities for other financial offerings</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>3.4.1 Subject to the terms and conditions of this Agreement, the Principal Distributor may permit the Sub-Distributor to undertake client sourcing, solicitation support and distribution support activities on a sub-contracted basis in relation to financial offerings as approved by the principal distributor.</Text>
                        <Text style={pdfStyles.paragraph}>3.4.2 For the purposes of this Agreement, such activities shall be undertaken strictly in the nature of sub-contracted client sourcing and facilitation services, including identification and introduction of prospective clients and coordination of onboarding processes, and shall not in any manner constitute investment advisory services.</Text>
                        <Text style={pdfStyles.paragraph}>3.4.3 The Sub-Distributor shall undertake such distribution related activities only in accordance with the regulatory framework prescribed by SEBI or any other authority as may be prescribed.</Text>
                        <Text style={pdfStyles.paragraph}>3.4.4 Without prejudice to the generality of the foregoing, the following conditions shall apply: (a) The Sub-Distributor may introduce prospective clients interested in such other financial offerings to the Principal Distributor or to investment manager specifically approved by the Principal Distributor. (b) The Sub-Distributor shall undertake any marketing, solicitation or client introduction activity relating to such financial offerings only after obtaining prior written approval from the Principal Distributor. The distribution of privately placed products shall be subject to guidelines issued by principal distributor for distribution of such privately placed products. (c) Such approval may specify the financial offering, scope of marketing activities and commission arrangements applicable to the Sub-Distributor. (d) The Sub-Distributor acknowledges that its role in relation to AIF Offerings shall be limited to marketing support, client introduction, facilitation of meetings and administrative coordination between prospective clients and the Principal Distributor or manufacturer. (e) The Sub-Distributor shall not represent itself as: (i) an investment manager or portfolio manager; (ii) an investment adviser registered with SEBI or any other regulatory authority; (iii) an authorised investment manager or portfolio management entity; or (iv) an entity authorised to provide investment advice or portfolio allocation recommendations. (f) The Sub-Distributor shall not: 1. provide investment advice relating to such financial offerings; 2. recommend specific portfolio strategies or investment allocations; 3. execute investment decisions on behalf of clients; 4. collect or hold client funds or securities. (g) The final decision regarding acceptance of a client, execution of the contribution agreement and management of the investment portfolio shall rest solely with the relevant manufacturer of such financial offering. (h) All documentation relating to financial offering, including investment agreement, other client onboarding documentation and any other documentation as may be required, shall be executed directly between the client and the manufacturer in accordance with the provisions of relevant regulatory framework. (i) The Sub-Distributor shall ensure that all communications made to prospective clients in relation to such financial offerings are accurate, fair and not misleading and are consistent with disclosures prescribed by applicable regulatory authorities.</Text>
                        <Text style={pdfStyles.paragraph}>The Parties hereby acknowledge and agree that the Sub-Distributor shall act solely in the capacity of a sub-contracted client sourcing and distribution support intermediary for the limited purpose of identifying and introducing prospective clients and facilitating preliminary coordination in relation to such financial offerings. The Sub-Distributor shall not hold itself out as an authorised representative, agent or affiliate of any investment manager.</Text>
                    </View>
                </View>

                {/* Section 4: Prior Approval */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>4. PRIOR APPROVAL OF PRINCIPAL DISTRIBUTOR</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>4.1 Notwithstanding anything contained elsewhere in this Agreement, the Sub-Distributor shall not undertake any client sourcing, solicitation support, distribution support or other sub-contracted facilitation activity in relation to PMS Products, AIF Offerings and such other product/ services covered under clause 3 unless prior written approval has been obtained from the Principal Distributor and Manufacturer (wherever required).</Text>
                        <Text style={pdfStyles.paragraph}>4.2 Such approval shall be granted at the sole discretion of the Principal Distributor and may specify the manufacturer whose products/ services may be introduced to prospective clients, the nature and scope of the permitted client sourcing and distribution support activities, and any operational procedures, compliance requirements or investor disclosure obligations that must be adhered to by the Sub-Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>4.3 The approval may further specify the commission, referral fee or other remuneration structure applicable to such activities, subject to applicable regulatory requirements and internal policies of the Principal Distributor, and the Sub-Distributor shall strictly comply with the terms and conditions specified in such approval and shall not undertake any activity beyond the scope of the authority granted therein.</Text>
                        <Text style={pdfStyles.paragraph}>4.4 Any activity undertaken by the Sub-Distributor in relation to products/ services covered under clause 3 of the agreement without obtaining the prior written approval of the Principal Distributor, or in contravention of the terms and conditions specified in such approval, shall constitute a material breach of this Agreement, entitling the Principal Distributor to suspend or terminate this Agreement and take such further action as may be permissible under Applicable Laws, including the provisions of the SEBI (Portfolio Managers) Regulations, 2020 and other regulatory directions issued by the Securities and Exchange Board of India.</Text>
                    </View>
                </View>

                {/* Section 5: Scope of Services */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>5. SCOPE OF SERVICES</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>5.1 Subject to the terms and conditions of this Agreement, the Sub-Distributor shall undertake client sourcing and distribution support activities in relation to services or products mentioned under Clause 3 of this agreement as may be permitted by the Principal Distributor from time to time, including identifying and approaching prospective investors and facilitating their introduction to the Principal Distributor. Further, Client data obtained in connection with Mutual Fund investments shall not be used for marketing other financial products without the prior consent of the client.</Text>
                        <Text style={pdfStyles.paragraph}>5.2 The Sub-Distributor may disseminate to prospective investors only such product literature, scheme-related documents, informational material or communications that have been issued or approved by the Principal Distributor or the relevant product provider, and shall ensure that all communications made to prospective investors are fair, accurate and not misleading.</Text>
                        <Text style={pdfStyles.paragraph}>5.3 The Sub-Distributor may assist prospective investors and Clients in completing onboarding documentation, including Know Your Client (KYC) documentation, application forms and other administrative formalities, and may coordinate administrative communication between the Client and the Principal Distributor for the purpose of facilitating investments in the relevant products.</Text>
                        <Text style={pdfStyles.paragraph}>5.4 Notwithstanding anything contained herein, the Sub-Distributor shall not provide investment advice, recommend specific investment strategies or portfolio allocations, make any representation or guarantee regarding investment performance or returns, represent itself as a portfolio manager or investment adviser, or undertake any activity that may be construed as discretionary portfolio management or investment advisory services.</Text>
                        <Text style={pdfStyles.paragraph}>5.5 The Sub-Distributor is authorized, on a non-exclusive basis, to identify and approach prospective investors for the purpose of distribution of the Products through private placement, strictly in accordance with applicable laws and this Agreement. The Sub-Distributor shall act solely as an intermediary and shall not bind the Company in any manner.</Text>
                        <Text style={pdfStyles.paragraph}>5.6 The Sub-Distributor shall ensure that all offers and solicitations are made strictly on a private placement basis and shall not undertake any form of general solicitation, advertisement, public communication, or mass outreach, including through digital or social media platforms.</Text>
                    </View>
                </View>

                {/* Section 6: Compliance */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>6. COMPLIANCE WITH DISTRIBUTOR CODE OF CONDUCT</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>6.1 The Sub-Distributor shall at all times comply with the Code of Conduct applicable to distributors and sub-distributors prescribed by the Association of Mutual Funds in India and Securities and Exchange Board of India, and with all applicable regulatory guidelines, circulars and directions issued by competent authorities. The code of conduct for distributing AIF offerings is mentioned in Annexure B. Additionally, the code of conduct as issued by the principal distributor shall be complied with for the products or services in respect of which code of conduct is not issued by SEBI or respective financial sector regulatory.</Text>
                        <Text style={pdfStyles.paragraph}>6.2 The Sub-Distributor shall maintain high standards of integrity, fairness and professionalism in all dealings with prospective investors and Clients. The sub-distributor shall not jeopardise the interest of the interest of clients and manufacturers and in case of any scenario of conflict is identified, the sub-distributor shall inform about the conflict to the principal distributor.</Text>
                        <Text style={pdfStyles.paragraph}>6.3 The Sub-Distributor shall ensure full and transparent disclosure to Clients regarding the nature of its role as an intermediary and any commissions or remuneration that may be received in connection with investments facilitated through it.</Text>
                        <Text style={pdfStyles.paragraph}>6.4 The Sub-Distributor shall not engage in mis-selling, misleading representations or dissemination of inaccurate information relating to Mutual Fund Products or PMS Products or other products/ services covered under clause 3 of this agreement.</Text>
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

                    <Text style={pdfStyles.subHeading}>8.2 Remuneration for Client Introductions in respect of other products/ services</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>8.2.1 In respect of PMS Products, AIF offerings and any other products/ services covered under clause 3 of this agreement, the Sub-Distributor shall be entitled to receive referral fees or distribution support fees for introducing Clients to the Principal Distributor or to portfolio managers approved by the Principal Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>8.2.2 The structure and quantum of such remuneration shall be mutually agreed between the Parties and shall remain subject to applicable regulatory disclosure requirements.</Text>
                        <Text style={pdfStyles.paragraph}>8.2.3 Any remuneration payable to the Sub-Distributor in relation to PMS Products, AIF offering and any other products/ services covered under clause 3 of this agreement shall be payable only upon receipt of the corresponding fees by the Principal Distributor from the relevant portfolio manager.</Text>
                        <Text style={pdfStyles.paragraph}>8.2.4 All payments made under this Clause shall be subject to compliance with Applicable Laws including the provisions of the SEBI (Portfolio Managers) Regulations, 2020, SEBI (Alternative Investment Funds) Regulations 2012.</Text>
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
                        <Text style={pdfStyles.paragraph}>10.4 The sub-distributor shall be solely responsible to co-operate for adhering to the implementation of KYC and Anti Money Laundering (AML) norms, processes, compliances under the PMLA regulations & guidelines given by the regulatory authorities, SEBI, AMCs, SRO and principal advisor from time to time. In case of any non-compliance thereof, the sub-distributor agrees that principal advisor cannot be held responsible for the same.</Text>
                        <Text style={pdfStyles.paragraph}>10.5 The sub-distributor shall ensure to adhere with all the compliances applicable under applicable regulatory guidelines. In case of any differences between the agreement and the regulatory framework then the regulatory framework shall prevail.</Text>
                    </View>
                </View>

                {/* Section 11: Indemnity */}
                <View style={pdfStyles.section}>
                    <Text style={pdfStyles.heading}>11. INDEMNITY</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>11.1 The Sub-Distributor shall fully indemnify, defend and hold harmless the Principal Distributor, its directors, officers, employees, affiliates and representatives from and against any and all losses, damages, liabilities, penalties, claims, demands, costs, expenses or regulatory actions whatsoever, including reasonable legal fees and expenses, arising directly or indirectly from any breach, default or non-performance of the obligations contained in this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}>11.2 Without prejudice to the generality of the foregoing, such indemnity shall extend to any loss or liability arising out of misrepresentation, misleading communication, unauthorised assurances or incorrect disclosures made by the Sub-Distributor to clients or prospective investors.</Text>
                        <Text style={pdfStyles.paragraph}>11.3 The indemnity shall further apply in the event of any violation of Applicable Laws, regulatory guidelines, compliance requirements or investor protection norms by the Sub-Distributor or its personnel in connection with the activities contemplated under this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}>11.4 The Sub-Distributor shall also indemnify the Principal Distributor against any claims, proceedings, investigations, regulatory penalties or reputational damage arising from negligence, wilful misconduct, fraud, mis-selling, breach of confidentiality or misuse of client information by the Sub-Distributor.</Text>
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
                        <Text style={pdfStyles.paragraph}>12.5 Subject to the provisions, the aggregate liability of each party arising out of or in connection with this Agreement shall not exceed the total fees or commissions paid or received by the Sub-Distributor as the case may be under this Agreement during the twelve (12) months preceding the event giving rise to such liability.</Text>
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
                        <Text style={pdfStyles.paragraph}>17.4 The Sub-Distributor shall not make any statement, commitment, promise, guarantee or representation to clients or prospective investors which is inconsistent with or beyond the information, materials or authorisations provided by the Principal Distributor. Additionally, the sub-distributor will not spread any unauthenticated news and will be subject to SEBI (Prohibition of Fraudulent and Unfair Trade Practices relating to Securities Market) Regulations, 2003.</Text>
                        <Text style={pdfStyles.paragraph}>17.5 The sub-distributor is competent to enter into a legally binding contract and this Agreement under Applicable Laws and that it is not incompetent to contract within the meaning of the Indian Contract Act, 1872 as amended from time to time.</Text>
                        <Text style={pdfStyles.paragraph}>17.6 The sub-distributor is a "fit and proper person" as defined under SEBI (Intermediaries) Regulations 2008.</Text>
                        <Text style={pdfStyles.paragraph}>17.7 Sub-distributor represents that it is not prohibited to to distribute products covered under clause 3 of this agreement in accordance with the relevant regulations (if applicable). and shall immediately communicate to principal distributor upon applicability of any prohibitory provisions under the said regulation during the subsistence of this Agreement.</Text>
                        <Text style={pdfStyles.paragraph}>17.8 The Sub-Distributor represents and warrants that it holds all necessary registrations, approvals, licenses, certification and any other requirements if required under applicable laws and regulations, including those prescribed by the Securities and Exchange Board of India, and shall at all times remain in compliance with such requirements. The sub-distributor further represents and warrants that during the course of engagement, the sub-distributor is incapable i.e not in adherence to necessary registrations, approvals, licenses, certification and any other requirements if required under applicable laws and regulations, it shall forthwith intimate the principal distributor and shall not offer any products or services mentioned under clause 3 of this agreement, unless approved by the principal distributor.</Text>
                        <Text style={pdfStyles.paragraph}>17.9 The Sub-Distributor represents and warrants that the sub-distributor shall intimate about any changes in its constitution.</Text>
                        <Text style={pdfStyles.paragraph}>17.10 The sub-distributor represents and warrants that it shall abide by the applicability regulatory framework in force.</Text>
                        <Text style={pdfStyles.paragraph}>17.11 The sub-distributor represents and warrants that it shall not charge any fees to client in respect of products or services distributed to the clients under this agreement.</Text>
                    </View>
                </View>

                {/* SIGNATURE SECTION */}
                <View style={pdfStyles.signatureContainer}>
                    <Text style={pdfStyles.signBy}>Signed by:</Text>

                    <View style={pdfStyles.signatureBlock}>
                        <Text style={pdfStyles.signatureLabel}>Primary Distributor</Text>
                        <View>
                            <Text style={pdfStyles.signatureValue}>INDUSARTHA FINANCIAL SERVICES PRIVATE LIMITED</Text>
                            <Text style={pdfStyles.signatureSubText}>Authorised Signatory: MR. MUDDASANI NARENDER REDDY</Text>
                        </View>
                    </View>

                    <View style={pdfStyles.signatureBlock}>
                        <Text style={pdfStyles.signatureLabel}>Sub-distributor</Text>
                        <View>
                            <Text style={[pdfStyles.signatureValue, { textTransform: "uppercase" }]}>{entityName}</Text>
                        </View>
                    </View>
                </View>

                {/* ANNEXURE A */}
                <View style={[pdfStyles.section, { marginTop: 30, paddingTop: 20, borderTop: "0.5pt solid #eee" }]}>
                    <Text style={[pdfStyles.heading, { textAlign: "center" }]}>ANNEXURE A</Text>
                    <Text style={[pdfStyles.subHeading, { textAlign: "center" }]}>Fee / Commission sharing</Text>
                    <Text style={pdfStyles.paragraph}>The principal distributor will share fees (As mutually agreed) earned from Asset Management Companies, Portfolio Manager and such other products covered under this agreement.</Text>
                </View>

                {/* ANNEXURE B */}
                <View style={[pdfStyles.section, { marginTop: 20 }]}>
                    <Text style={[pdfStyles.heading, { textAlign: "center" }]}>ANNEXURE B</Text>
                    <Text style={[pdfStyles.subHeading, { textAlign: "center" }]}>Code of Conduct for Distributors for AIFs</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>1. Adhere to SEBI (Alternative Investment Funds) Regulations, 2012, as amended from time to time, and circulars issued by SEBI relating to distribution, marketing, performance benchmarking and investor reporting requirements of AIFs.</Text>
                        <Text style={pdfStyles.paragraph}>2. Be fully conversant with key provisions of PPM disclosures, such as Investment Strategy, Fee Structure and key terms of the Contribution Agreement to be signed by an investor and the investment manager.</Text>
                        <Text style={pdfStyles.paragraph}>3. Inform investors about the key risk factors of each fund/scheme and desist from misrepresentation or exaggeration. Encourage investors to go through the disclosures made in the PPM and all related documents of the fund/scheme before making an investment decision.</Text>
                        <Text style={pdfStyles.paragraph}>4. Disclose all material information including Hurdle Rate, Management Fees, Additional Returns and Catch-up provisions, if any, expenses chargeable to the Fund and expenses to be borne by the investment manager.</Text>
                        <Text style={pdfStyles.paragraph}>5. Consider investor's interest, risk profiling and suitability to their financial needs while marketing AIFs and advising on the same.</Text>
                        <Text style={pdfStyles.paragraph}>6. Highlight all assumptions made by AIF in performance calculation, risk assessment and performance estimation, if any.</Text>
                        <Text style={pdfStyles.paragraph}>7. Take necessary steps to ensure that the investors' interest is protected. Ensure that commissions or incentives on sale of AIF units shall never form as the basis for recommending a fund/scheme.</Text>
                        <Text style={pdfStyles.paragraph}>8. Disclose all material information including the details of distribution commissions to be received, on subscription to various classes of units offered by the AIF.</Text>
                        <Text style={pdfStyles.paragraph}>9. Abstain from assuring returns in any AIF fund/scheme and from any kind of misrepresentation thereon.</Text>
                        <Text style={pdfStyles.paragraph}>10. Abstain from attracting investors through unethical means such as providing an offer of rebate, pass-back, gifts or other concessions.</Text>
                        <Text style={pdfStyles.paragraph}>11. Abstain from obfuscating the decision-making process of investors, by omission of material facts or misleading investors about the fund/scheme.</Text>
                        <Text style={pdfStyles.paragraph}>12. Maintain high standards of integrity, promptitude and fairness in the conduct of business as a Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>13. Act with required skill, care and diligence in the conduct of business as a Distributor.</Text>
                        <Text style={pdfStyles.paragraph}>14. Assist clients in completing KYC documentation and verification procedures.</Text>
                        <Text style={pdfStyles.paragraph}>15. Maintain necessary infrastructure to provide pre-commitment and post-commitment support to investors, investment manager, regulators and third-party service providers. This may include support in terms of providing intimations for draw-downs, capital calls, investor meetings, redemptions, fund-closing, investor grievances, dispatching of performance reports to investors and other important matters from time to time.</Text>
                        <Text style={pdfStyles.paragraph}>16. Stay updated with latest developments in the AIF markets, changes in the Fund Sponsor, Investment Manager, changes in controlling interest of the fund/scheme, exit of key executives, adverse developments and other material aspects.</Text>
                        <Text style={pdfStyles.paragraph}>17. Maintain confidentiality of investors' personal data, deals and transactions done by a AIF.</Text>
                        <Text style={pdfStyles.paragraph}>18. Provide relevant documents of investors to tax authorities and enforcement agencies under the Prevention of Money Laundering Act, including KYC documents, Power of Attorney (PoA), and any other information as may be required from time to time.</Text>
                        <Text style={pdfStyles.paragraph}>19. Abstain from making negative statements about other AIFs that the distributor is not representing. Ensure that comparison of AIFs is done between similar and comparable AIFs, based on adequate information.</Text>
                        <Text style={pdfStyles.paragraph}>20. Not indulge in any manipulative, fraudulent or deceptive practices or spread rumours with a view to make personal gain.</Text>
                    </View>
                </View>
                <View style={[pdfStyles.section, { marginTop: 20 }]}>
                    <Text style={[pdfStyles.subHeading, { textAlign: "center" }]}>Code of Conduct for Distributors for PMSs</Text>
                    <View style={{ gap: 4 }}>
                        <Text style={pdfStyles.paragraph}>21. Adhere to the Securities and Exchange Board of India (Portfolio Managers) Regulations, 2020 and circulars issued from time to time related to distributors, distribution, advertising practices of Portfolio Management Services, etc.</Text>
                        <Text style={pdfStyles.paragraph}>22. Maintain high standards of integrity, promptitude and fairness in the conduct of all their business.</Text>
                        <Text style={pdfStyles.paragraph}>23. Act with due skill, care and diligence in the conduct of all their business.</Text>
                        <Text style={pdfStyles.paragraph}>24. Consider investor's interest, risk profiling and suitability to their financial needs while marketing Portfolio Management Services.</Text>
                        <Text style={pdfStyles.paragraph}>25. Take necessary steps to ensure that the clients' interest is protected.</Text>
                        <Text style={pdfStyles.paragraph}>26. Ensure that commission or incentive shall never form the basis for recommending Portfolio Management Services.</Text>
                        <Text style={pdfStyles.paragraph}>27. Be fully conversant with the Disclosure Document, Investment Approaches, fees and charges and the terms of agreement to be entered between the client and the Portfolio Manager.</Text>
                        <Text style={pdfStyles.paragraph}>28. Disclose to the clients all material information including the details of distribution commissions for various Investment Approaches.</Text>
                        <Text style={pdfStyles.paragraph}>29. Assist clients in completing Know Your Client ("KYC") and In-Person Verification related procedures.</Text>
                        <Text style={pdfStyles.paragraph}>30. Provide full and latest information about investment approaches and also highlight the assumptions made in performance calculations, risk assessments, performance projections etc., if any, for such investment approaches.</Text>
                        <Text style={pdfStyles.paragraph}>31. Inform the clients about the risks and level of control over the administration of Portfolio associated with the type of Portfolio Management Services offered (i.e. Discretionary, Non-discretionary or Advisory).</Text>
                        <Text style={pdfStyles.paragraph}>32. Abstain from assuring returns in any type of Investment Approach and from any kind of mis-representation.</Text>
                        <Text style={pdfStyles.paragraph}>33. Abstain from attracting clients through unethical means such as offer of rebate/gifts etc.</Text>
                        <Text style={pdfStyles.paragraph}>34. Maintain necessary infrastructure to provide support to clients in timely receipt of disclosure document, statement of portfolio and performance, statement of fees, audit report, etc.</Text>
                        <Text style={pdfStyles.paragraph}>35. Maintain confidentiality of clients' details, deals and transactions, which they come to know in their business relationship.</Text>
                        <Text style={pdfStyles.paragraph}>36. Abstain from making negative statements about other Portfolio Managers or Investment Approaches. Make comparisons, if any, only with the similar and comparable products along with complete facts.</Text>
                        <Text style={pdfStyles.paragraph}>37. Not indulge in any manipulative, fraudulent or deceptive practices or spread rumours with a view to make personal gain.</Text>
                        <Text style={pdfStyles.paragraph}>38. Hold valid NISM-Series-XXI-A: Portfolio Management Services (PMS) Distributors Certification, as specified by SEBI, at all times.</Text>
                    </View>
                </View>

                {/* Code of Conduct for Distributors for MFs */}
                <View style={[pdfStyles.section, { marginTop: 20 }]}>
                    <Text style={[pdfStyles.heading, { textAlign: "center" }]}>Code of Conduct for Distributors for MFs</Text>

                    <Text style={[pdfStyles.subHeading, { textDecoration: "underline", marginTop: 10 }]}>Purpose and Scope of the Code</Text>
                    <View style={{ paddingLeft: 10, gap: 4 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>a.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>This Code of Conduct (<Text style={pdfStyles.bold}>"Code"</Text>) requires Mutual Fund Distributors to demonstrate the core values of being a fiduciary by establishing professional standards in their dealings with the investors, Asset Management Companies (<Text style={pdfStyles.bold}>"AMCs"</Text>), and other distributors so as to exemplify the values of transparency, competency, fairness, integrity and thereby seek to inspire and maintain trustworthiness in the profession of distribution of Mutual Fund schemes.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>b.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>This Code applies to all persons and entities who are registered with the Association of Mutual Funds in India (AMFI) as mutual fund distributors i.e. holders of AMFI Registration Number (<Text style={pdfStyles.bold}>"ARN"</Text>) (referred to as <Text style={pdfStyles.bold}>"MFDs"</Text> in this Code) and is binding on all the Directors/partners, members, sub-distributors, employees and representatives of the MFDs (collectively referred to as <Text style={pdfStyles.bold}>"Representatives"</Text> in this Code). The term <Text style={pdfStyles.bold}>"MFDs"</Text> is deemed to include the sales personnel of the MFDs engaged in marketing, sale and distribution of mutual fund products.</Text>
                        </View>
                    </View>

                    <Text style={[pdfStyles.subHeading, { textDecoration: "underline", marginTop: 12 }]}>II. Obligations of the MFDs</Text>

                    <Text style={[pdfStyles.subHeading, { marginTop: 10 }]}>1. Fiduciary Duty</Text>
                    <View style={{ paddingLeft: 10, gap: 4 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>a.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs must consider investor's interest as paramount and exercise due diligence, take proper care and exercise independent professional judgment in the best interest of the investor.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>b.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs should try to avoid conflict of interest as far as possible, and when it cannot be avoided, they shall ensure that appropriate disclosures are made to the investors, and that the investors are treated fairly. Further, while selling Mutual Fund products of their group/affiliate/associates, MFDs shall make appropriate disclosures to the investors regarding the conflict of interest arising from distribution of such Mutual Fund scheme.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>c.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall ensure that financial incentive should not form the basis for recommending any particular scheme or transaction to any investor. MFDs shall promote a culture of ethics and integrity within the organization, so as to dissuade unfair practices, conflicts, aggressive sales tactics and other inappropriate conduct directed to achieve sales targets in disregard of its fiduciary duty of care, diligence and loyalty.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>d.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall not rebate or pass-back commission to investors and shall refrain from attracting investors through inducement of rebate or gifts / gift-vouchers etc.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>e.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall not collude or undertake malpractices such as:</Text>
                        </View>
                        <View style={{ paddingLeft: 20, gap: 4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>i.</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>encouraging over transacting and churning of investments to earn higher commissions.</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>ii.</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>splitting applications to earn higher transaction charges / commissions.</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>iii.</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>participating in payment defaults (such as dishonoring of cheques) or diversion of funds.</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>iv.</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>making false claims for or participating in wrongful dividend / redemption payouts.</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>v.</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>carrying out unethical practices such as churning, selling unsuitable products to clients, selling of units of schemes of any mutual fund, directly or indirectly, by making false or misleading statements, concealing or omitting material facts of the scheme, concealing the associated risk factors of the schemes, etc.</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={[pdfStyles.subHeading, { marginTop: 10 }]}>2. Compliance related obligations</Text>
                    <View style={{ paddingLeft: 10, gap: 4 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>a.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall adhere to Securities and Exchange Board of India (Mutual Funds) Regulations, 1996 (<Text style={pdfStyles.bold}>"Mutual Fund Regulations"</Text>) and guidelines/circulars issued by Securities and Exchange Board of India (<Text style={pdfStyles.bold}>"SEBI"</Text>) and AMFI, from time to time, pertaining to distributors, selling, distribution and advertising practices (including the preparation of sales promotional literature and content) and code of conduct. Performance disclosures should also comply with the requirements specified by SEBI. MFDs must also adhere to restrictions prescribed under other SEBI Regulations as may be applicable to their marketing, selling and distribution activities, for example, obligation on segregation of distribution and advisory services mandated under SEBI (Investment Advisers) Regulations, 2013.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>b.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall comply with the Know Your Distributor (<Text style={pdfStyles.bold}>"KYD"</Text>) norms prescribed by AMFI. MFDs shall be diligent in attesting / certifying investor documents and performing InPerson Verification (<Text style={pdfStyles.bold}>"IPV"</Text>) of investors for the KYC process in accordance with the guidelines prescribed by AMFI / KYC Registration Agency (<Text style={pdfStyles.bold}>"KRA"</Text>) from time to time.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>c.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs should endeavor to be fully conversant with the key provisions of the Scheme Information Document (<Text style={pdfStyles.bold}>"SID"</Text>), Statement of Additional Information (<Text style={pdfStyles.bold}>"SAI"</Text>) and Key Information Memorandum (<Text style={pdfStyles.bold}>"KIM"</Text>) as well as the operational requirements of various schemes and should explain to the investors the key features (including fundamental attributes) of the schemes and any risk associated therein.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>d.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>In order to assess suitability of the Mutual Fund scheme being marketed, the MFDs should seek information from their clients about their financial status, investment experience and investment objectives.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>e.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall ensure that their Representatives have the necessary education and experience to perform their respective services.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>f.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs and their Representatives shall maintain confidentiality of all information relating to the AMCs and investors, and shall not:</Text>
                        </View>
                        <View style={{ paddingLeft: 20, gap: 4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>i.</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>share or publish such information in any private or public forum without prior written consent of the concerned AMC/investor</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>ii.</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>share or make any disclosure to any third party except pursuant to any filings or disclosures as may be required under applicable law or order of any court or regulatory body.</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>iii.</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>share data with Group Companies for cross marketing.</Text>
                            </View>
                        </View>
                        <Text style={[pdfStyles.paragraph, { paddingLeft: 20 }]}>MFDs and their Representatives shall comply with the Data Sharing Principles prescribed by AMFI and the applicable laws on Personal Data Protection.</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>g.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall adhere to contractual agreements with AMC relating to data privacy to ensure that the data is always protected, used only for the purpose for which it was obtained and purged as soon as the data is no longer required to be stored for rendering services for which it was collected or stored securely.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>h.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall ensure that they and their sub-distributors are compliant with SEBI regulations, AMFI guidelines and code of conduct at all times and also that all their sub-distributors have a valid ARN. In other words, principal MFD should not engage or continue to engage a subdistributor whose ARN is rendered invalid.</Text>
                        </View>
                    </View>

                    <Text style={[pdfStyles.subHeading, { marginTop: 10 }]}>3. Infrastructure, record keeping and other related obligations</Text>
                    <View style={{ paddingLeft: 10, gap: 4 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>a.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}><Text style={pdfStyles.bold}>Physical Infrastructure:</Text> MFDs should maintain necessary infrastructure to support the AMCs in maintaining high service standards to investors and ensure that critical operations such as forwarding /submission of forms and cheques etc. to AMCs/RTAs are appropriately supported.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>b.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}><Text style={pdfStyles.bold}>Digital Infrastructure:</Text> In view of increased initiatives towards digitization of mode of performance of services, including new client on-boarding, transaction processing and ongoing servicing for investors, MFDs should adopt adequate information technology related infrastructure, including in relation to cyber security measures to maintain confidentiality of electronic data during collection, transmission and storage as well as to mitigate risks related to execution of Mutual Fund transactions through digital platforms.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>c.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}><Text style={pdfStyles.bold}>Internal control, financial and operational resources:</Text> The MFDs should have internal control procedures and financial and operational systems and processes which can be reasonably expected to detect and prevent mis-selling as well as mitigate financial loss arising from fraud and other dishonest acts, professional misconduct or omissions, theft, or force majeure events. MFDs are encouraged to take up appropriate insurance coverage for their activities.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>d.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}><Text style={pdfStyles.bold}>Record keeping:</Text> MFDs should maintain adequate records in relation to clients, whether in physical or digital form, as applicable, in compliance with the applicable laws and SEBI regulations, including KYC records as well as correspondence with the investors on particular scheme or transaction suitability and consent/dissent of the investors.</Text>
                        </View>
                    </View>

                    <Text style={[pdfStyles.subHeading, { marginTop: 10 }]}>4. Client related obligations</Text>
                    <View style={{ paddingLeft: 10, gap: 4 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>a.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall provide full and updated information on schemes, as provided to them by the AMCs, to the investors including SAI, SID, addenda, performance reports, fact sheets, portfolio disclosures and brochures. MFDs shall not deliberately withhold or omit any material fact or information supplied to them by the AMCs from any investor that the investor should know or may want to know, including information about particular scheme or transaction not being appropriate for the investor.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>b.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall highlight risk factors of each scheme to their investors, desist from making any misrepresentation or exaggerated statements or conceal associated risk factors of a scheme and shall advise and urge their investors to go through SAI/SID/KIM before deciding to make investments.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>c.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall disclose to the investors all material information including all commissions (in the form of trail commission or any other mode) received or receivable by them for the different competing schemes of various Mutual Funds from amongst which the scheme is being recommended to the investor.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>d.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall disclose to their clients the list of mutual funds they are affiliated with and inform to the clients that the information provided is limited to the mutual fund products that are being distributed/promoted by the MFDs and also inform the clients that the clients may also consider other alternate products, which are not being offered by the MFDs before making investment decision.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>e.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>If the MFD is an associate/group company/ sponsor of AMC of a mutual fund, the MFD shall, while providing suggestions to investor, disclose all material information about its association with the concerned AMC and the total amount of commission received/receivable.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>f.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>In terms of SEBI letter no. SEBI/IMD1/DoF-1/SK/2021/25517/1 dated September 06, 2021, MFDs cannot deal in Direct Plans. MFDs shall ensure that on any digital platform provided by MFD for offering investment facility to investor, it is categorically disclosed that the scheme the investor is subscribing to is of Regular Plan which involves payment of commission to MFD. The link for the rate of commission received or receivable by the MFD for the different competing schemes of various Mutual Funds shall be prominently displayed on the platform indicating the same as a hyperlink. Further, a link to the scheme offer documents (SID/SAI/KIM) shall also be prominently displayed on the concerned page.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>g.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall (i) not provide any indicative portfolio or indicative yield or indicative return for any particular scheme or transaction and (ii) abstain from indicating or assuring returns for any particular scheme or transaction.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>h.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs engaged in providing other financial services in addition to distribution of mutual fund products, where other financial products with assured return are being offered to clients, MFDs and their employees shall ensure that they do not mis-sell mutual fund products on the basis of indicative or assured return or regular income to the customers seeking to make investments. It shall be explained to the clients that MF investments are not guaranteed or assured return products and that the principal amount may be exposed to risk of loss.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>i.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>To prevent submission of fraudulent, incomplete, tampered or incorrect forms or applications, MFDs shall set up adequate training and processes to ensure that:</Text>
                        </View>
                        <View style={{ paddingLeft: 20, gap: 4 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>(i)</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>information in the application forms (including address and contact details) is filled diligently with the investor's own, accurate and complete information. Whether requested by the investor or not, the contact details / information of the MFDs' Representatives or any other third party is not filled in the application forms, so as to pass-off as the information relating to the investor;</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>(ii)</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>any additions, revisions to the investor's contact details /information is done only upon receipt of such information from the investor or the investor's authorized person,</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>(iii)</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>application forms submitted by the investor are not tampered with, whether by inserting, deleting or modifying any information / field in the application forms,</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ width: 25 }}>(iv)</Text>
                                <Text style={[pdfStyles.paragraph, { flex: 1 }]}>EUIN of the concerned employee of the MFD is written on the application forms for identification.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>j.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall endeavor to resolve investor grievances/ complaints arising out of marketing, sale and distribution activities and shall provide complete assistance to the AMCs for redressal of grievances/ complaints.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>k.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall use marketing material as is provided to them by the AMCs and shall not design their own marketing materials in respect of any scheme or display the name, logo, mark of any AMC without the prior written approval of the AMC.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>l.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall draw attention of their clients to the disclosures made in the SID/SAI/ /KIM relating to general risks of investing through mutual fund schemes as well as scheme specific risks such as (i) returns being subject to market risk including loss of capital on account of market volatility, force majeure events, changes in political and economic environment, default by issuers of securities to mutual funds, bankruptcy or insolvency of issuers and potential segregation of portfolio by AMC in such circumstances; (ii) suspension of redemption facility in case the scheme faces liquidity crisis; (iii) risks associated with subscription to new fund offering of the scheme such as price volatility risk, liquidity risk and delisting risk; (iv) winding up of schemes on account of illiquid instruments, higher volume of redemption requests from the investors or on account of unforeseen market events.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>m.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall ensure that comparisons, if any, are made with similar and comparable schemes/ products along with complete facts.</Text>
                        </View>
                    </View>

                    <Text style={[pdfStyles.subHeading, { textDecoration: "underline", marginTop: 12 }]}>5. Other obligations</Text>
                    <View style={{ paddingLeft: 10, gap: 4 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>a.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>Individual MFDs shall obtain NISM certification and register themselves with AMFI and obtain ARN and Employee Unique Identification Number (EUIN) from AMFI. The NISM certification and AMFI registration shall be renewed on a timely basis. Non-individual MFDs shall register themselves with AMFI and obtain the ARN, and shall ensure that their sales personnel or Representatives engaged in marketing, sale and distribution of mutual fund products hold a valid NISM certificate (i.e NISM-Series-V-A) and AMFI registration / EUIN. Employees of the MFD in other functional areas should also be encouraged to obtain appropriate NISM certification. MFDs shall quote a valid ARN and EUIN in the client's application / transaction feed, in order to place transactions in Regular Plan and receive commissions</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>b.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall ensure that their Representatives undergo training on proper conduct for their sales, marketing and distribution activities and focusing on (i) awareness and understanding of their fiduciary obligations towards investors, (ii) adequate procedures to be followed in performance of their functions so as to prevent and detect any frauds and errors, and (iii) responsible usage of social media platform with respect to content standards, authenticity and approval for the information , frequency of usage and other ethical practices.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>c.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall co-operate with and provide assistance, to AMCs, AMFI, SEBI, competent authorities, due diligence agencies appointed by AMFI/AMCs (as applicable) in relation to their services to the AMCs including by providing copies of relevant documents of the investors in their possession as may be required by AMCs from time to time or as may be called for by SEBI/AMFI / competent authority pursuant to any investigation or other proceeding.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>d.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall promptly intimate the AMC and AMFI any change in the MFD's status, constitution, address, contact details or any other information provided at the time of obtaining ARN.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>e.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall refund to the AMCs, (either by set off against future commissions or by payment) all incentives of any nature, including commissions received, that are subject to clawback as per SEBI regulations or the terms and conditions issued by the respective AMC.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>f.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall immediately notify the AMC and AMFI, in writing, if any of its Representatives has committed any act amounting to moral turpitude, financial irregularities or has been arrested by the police or whose employment/service has been terminated on account of any of the aforesaid bad acts.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>g.</Text>
                            <View style={{ flex: 1 }}>
                                <Text style={pdfStyles.paragraph}>Pursuant to Regulation 3 (3) of the SEBI (Investment Advisers) Regulations, 2013, MFDs shall not use terms such as Adviser / Advisor / Financial Adviser/ Investment Adviser/ Wealth Adviser/Wealth Manager/Wealth Managers, Consultant/s, etc. or any other similar name in their name, unless registered with SEBI as an Investment Adviser. The name of an MFD should reflect the registration held by the entity and should not in any way create an impression of performing a role for which the entity is not registered. The registered name of the MFD shall not contain any misleading phrase about the role of the entity. Thus, every MFD, while dealing in distribution of mutual fund schemes/products, should clearly specify to the client that he /she is acting as a MFD.</Text>
                                <Text style={pdfStyles.paragraph}>MFDs shall mention/display a tagline, "AMFI-registered Mutual Fund Distributor" along with / below their name, in a clear and legible font of at least font size 12, in all forms of printed communication. MFD shall display their name and tagline in a clear and legible font in all forms of communication i.e., website, mobile app, printed or electronic materials, business card, sign board etc.</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={[pdfStyles.subHeading, { textDecoration: "underline", marginTop: 12 }]}>6. Obligations towards integrity of the Mutual Fund industry</Text>
                    <View style={{ paddingLeft: 10, gap: 4 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>a.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs shall not indulge in fraudulent or unfair trade practices of any kind while marketing, selling or distributing any Mutual Fund scheme. MFDs and their Representatives must observe high standards of integrity and consistently conduct their dealings in a manner to uphold the professional image of the Mutual Fund industry.</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ width: 20 }}>b.</Text>
                            <Text style={[pdfStyles.paragraph, { flex: 1 }]}>MFDs, shall refrain from making false or defamatory statements about any AMC, AMFI, Mutual Fund schemes or other MFDs in any private or public forum (including chat groups, social media, print or electronic press, conferences etc.). MFDs shall maintain professional decorum, provide fair and balanced perspective and not participate in transmitting untrue statements or rumors so as to malign any AMC or Mutual Fund scheme or bring disrepute to any AMC, AMFI or the Mutual Fund industry. Any written or oral communication should be based on facts and be presented in an unbiased manner so as not to mislead the public.</Text>
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

const AgreementPDF2 = ({ data }) => {
    const { day, month, year, entityName, address, arn, aprn } = data;

    return (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                <View style={pdfStyles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image src={window.location.origin + "/icon.png"} style={{ height: 55, width: 55, objectFit: 'contain' }} />
                        <View style={{ flexDirection: 'column', position: 'relative', height: 55, justifyContent: 'center' }}>
                            <Image src={window.location.origin + "/TieVistaVerticalLogo.png"} style={{ height: 16, width: 85, objectFit: 'contain' }} />
                            <Text style={{ position: 'absolute', top: 35, left: 16, fontSize: 6.5, fontWeight: 'light', fontFamily: 'Poppins' }}>Global Private Wealth</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Svg viewBox="0 0 24 24" width={10} height={10} fill="#ffffff" stroke="#e5bc4b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(135deg)" }}>
                                <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </Svg>
                            <Text style={{ fontSize: 10, color: 'black' }}>+91 9885424473</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Svg viewBox="0 0 24 24" width={10} height={10} fill="#ffffff" stroke="#e5bc4b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <Rect width="20" height="16" x="2" y="4" rx="2" />
                                <Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </Svg>
                            <Text style={{ fontSize: 10, color: 'black' }}>narender.reddy@tievista.com</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <Svg viewBox="0 0 24 24" width={10} height={10} fill="#ffffff" stroke="#e5bc4b" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <Circle cx="12" cy="12" r="10" />
                                <Path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                <Path d="M2 12h20" />
                            </Svg>
                            <Text style={{ fontSize: 10, color: 'black' }}>TieVista.com</Text>
                        </View>
                    </View>
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
                        <Text style={pdfStyles.bold}>INDUSARTHA FINANCIAL SERVICES PRIVATE LIMITED operating under the brand name of TieVista</Text>, a company incorporated under the provisions of the Companies Act, 2013 having its registered office at 4th Floor, AWFIS, VIOS Tower, Wadala, Mumbai 400037 and holding a valid ARN registration issued by the Association of Mutual Funds in India and engaged inter alia in the business of distribution of financial products including mutual fund schemes and portfolio management services (hereinafter referred to as the <Text style={pdfStyles.bold}>"Principal Distributor"</Text>, which expression shall unless repugnant to the context include its successors and permitted assigns);
                    </Text>
                    <Text style={pdfStyles.heading}>AND</Text>
                    <Text style={pdfStyles.paragraph}>
                        <Text style={pdfStyles.bold}>{entityName}</Text>, <Text style={pdfStyles.paragraph}>having its principal place of business at</Text> {address} <Text style={pdfStyles.paragraph}>and engaged in the business of financial product marketing and client relationship management (hereinafter referred to as the "Sub-Distributor", which expression shall unless repugnant to the context include its successors and permitted assigns). The sub-distributor holds ARN –</Text> <Text style={pdfStyles.bold}>{arn}</Text> <Text style={pdfStyles.italic}>and APRN -</Text> <Text style={pdfStyles.bold}>{aprn}</Text>.
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

                {/* AgreementPDF2 sections 2-17 are identical to AgreementPDF — omitted for brevity, same content applies */}

                {/* SIGNATURE SECTION */}
                <View style={pdfStyles.signatureContainer}>
                    <Text style={pdfStyles.signBy}>Signed by:</Text>
                    <View style={pdfStyles.signatureBlock}>
                        <Text style={pdfStyles.signatureLabel}>Primary Distributor</Text>
                        <View>
                            <Text style={pdfStyles.signatureValue}>INDUSARTHA FINANCIAL SERVICES PRIVATE LIMITED</Text>
                            <Text style={pdfStyles.signatureSubText}>Authorised Signatory: MR. MUDDASANI NARENDER REDDY</Text>
                        </View>
                    </View>
                    <View style={pdfStyles.signatureBlock}>
                        <Text style={pdfStyles.signatureLabel}>Sub-distributor</Text>
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

const OtpSection = ({ onResend, onFilled, onVerify, isVerified, isLoading }) => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);

    useEffect(() => {
        const allFilled = otp.every((digit) => digit !== "");
        onFilled(allFilled);
    }, [otp, onFilled]);

    const handleChange = (index, value) => {
        if (value.length > 1) value = value[0];
        if (!/^\d*$/.test(value)) return; // Only allow digits

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (index, e) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, ""); // digits only
        if (!pasted) return;

        const newOtp = [...otp];
        let nextIndex = index;

        for (let i = 0; i < pasted.length && index + i < 6; i++) {
            newOtp[index + i] = pasted[i];
            nextIndex = index + i;
        }

        setOtp(newOtp);

        // focus the next empty box, or the last filled one
        const focusIndex = Math.min(nextIndex + 1, 5);
        inputRefs.current[focusIndex]?.focus();
    };

    return (
        <div className="flex flex-col gap-2 my-2 animate-in fade-in slide-in-from-top-2 duration-500">
            <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1.5 sm:gap-2">
                    {otp.map((digit, idx) => (
                        <input
                            key={idx}
                            ref={(el) => (inputRefs.current[idx] = el)}
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            autoComplete={idx === 0 ? "one-time-code" : "off"}
                            maxLength={1}
                            value={digit}
                            disabled={isVerified}
                            onChange={(e) => handleChange(idx, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(idx, e)}
                            onPaste={(e) => handlePaste(idx, e)}
                            className={`w-8 h-8 sm:w-10 sm:h-10 border rounded-md text-center text-base sm:text-lg focus:ring-1 outline-none transition-all shadow-sm flex-shrink-0 text-black ${isVerified
                                    ? "bg-green-50 border-green-500 text-green-700"
                                    : "border-gray-300 focus:border-[#d4af37] focus:ring-[#d4af37]"
                                }`}
                        />
                    ))}
                </div>

                {!isVerified ? (
                    <div className="flex gap-2">
                        {onVerify && (
                            <button
                                type="button"
                                onClick={() => onVerify(otp.join(""))}
                                disabled={otp.some(d => d === "") || isLoading}
                                className={`flex items-center justify-center bg-[#d4af37] text-white px-3 sm:px-4 py-2 rounded shadow-sm text-[10px] sm:text-[11px] font-bold transition-all uppercase tracking-wider ${otp.some(d => d === "") || isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 active:scale-95"
                                    }`}
                            >
                                {isLoading ? "..." : "Verify"}
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={onResend}
                            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded border text-[10px] sm:text-[11px] font-bold transition-all active:scale-95 uppercase tracking-wider ${onVerify
                                    ? "bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200"
                                    : "bg-gradient-to-r from-[#e5bc4b] to-[#d4af37] text-white border-transparent shadow-md hover:scale-105"
                                }`}
                        >
                            <Send size={12} className={onVerify ? "text-gray-500" : "fill-white"} />
                            RESEND
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-wider px-3 py-2 bg-green-50 rounded border border-green-100">
                        <CheckCircle2 size={16} />
                        Verified
                    </div>
                )}
            </div>
        </div>
    );
};

const PatnersSignup = () => {
    const {
        register: registerReg,
        handleSubmit: handleSubmitReg,
        trigger: triggerReg,
        watch: watchReg,
        setValue: setValueReg,
        formState: { errors: errorsReg },
    } = useForm({ mode: "onBlur" });

    const {
        register: registerPan,
        handleSubmit: handleSubmitPan,
        watch: watchPan,
        setValue: setValuePan,
        formState: { errors: errorsPan },
    } = useForm({ mode: "onBlur" });

    const {
        register: registerRegulatory,
        handleSubmit: handleSubmitRegulatory,
        watch: watchRegulatory,
        formState: { errors: errorsRegulatory },
    } = useForm({ mode: "onBlur" });

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
    const [showRegulatory, setShowRegulatory] = useState(false);
    const [showBankDetails, setShowBankDetails] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [showAgreement, setShowAgreement] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const [masterData, setMasterData] = useState({});
    const [showEmailOtp, setShowEmailOtp] = useState(false);
    const [isEmailOtpFilled, setIsEmailOtpFilled] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
    const [isFetchingPan, setIsFetchingPan] = useState(false);
    const [kycExist, setKycExist] = useState(null);
    const [kycStatus, setKycStatus] = useState(null);

    // Watchers for validation/behavior
    const phoneValue = watchReg("phone");
    const emailValue = watchReg("email");
    const passwordValue = watchReg("password");
    const entityTypeValue = watchReg("entityType");
    const entityNameValue = watchReg("entityName");

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

    const handlePhoneBlur = async () => { await triggerReg("phone"); };

    // Email OTP
    const sendEmailOtp = async () => {
        if (!emailValue || !emailRegex.test(emailValue)) {
            alert("Invalid email for OTP");
            return;
        }
        setIsSendingOtp(true);
        try {
            await axios.post("https://partners.tievista.com/api/send-otp", { email: emailValue, entityName: entityNameValue }, AUTH_CONFIG);
            alert("OTP sent to " + emailValue);
            setShowEmailOtp(true);
        } catch (error) {
            alert("Failed to send OTP. Please try again.");
            setShowEmailOtp(true);
        } finally {
            setIsSendingOtp(false);
        }
    };

    // Email OTP Verify
    const handleVerifyEmailOtp = async (otp) => {
        setIsVerifyingOtp(true);
        try {
            const response = await axios.post("https://partners.tievista.com/api/verify-otp", {
                email: emailValue,
                otp: otp
            }, AUTH_CONFIG);
            if (response.data.success) {
                setIsEmailVerified(true);
                alert("Email verified successfully!");
            } else {
                alert("Invalid OTP. Please try again.");
            }
        } catch (error) {
            alert(error.response?.data?.message || "Verification failed.");
        } finally {
            setIsVerifyingOtp(false);
        }
    };

    const handleEmailBlur = async () => {
        await triggerReg("email");
    };

    // Submission Handlers
    const getUserRegister = async (data) => {
        if (!isEmailVerified) {
            alert("Please verify your email with OTP before proceeding.");
            return;
        }
        try {
            const payload = {
                entity_name: data.entityName,
                entity_type: data.entityType,
                address: data.address,
                contact_no: data.phone,
                email: data.email,
                password: 0
            };
            const response = await axios.post("https://partners.tievista.com/api/partners/register", payload, AUTH_CONFIG);
            if (response.status === 201 || response.status === 200) {
                setMasterData(prev => ({ ...prev, ...data }));
                setShowIdentity(true);
            }
        } catch (error) {
            console.error("Initial registration failed:", error);
            if (error.response?.status === 409) {
                alert("Partner already exists. Resuming registration...");
                setMasterData(prev => ({ ...prev, ...data, ...error.response.data.partner }));
                setShowIdentity(true);
            } else {
                alert("Registration failed. Please Try Again." + (error.response?.data?.error || error.message));
            }
        }
    };

    /**
     * Handles PAN and DOB submission.
     * 1. Calls backend /api/check-pan which performs Digio checkPAN.
     * 2. Backend then saves initial status to DB.
     * 3. Backend then performs downloadPAN if verified and saves full details to DB.
     */
    const getPan = async (data) => {
        try {
            setIsFetchingPan(true);
            setKycExist(null);
            setKycStatus(null);
            const identifier = masterData.email || masterData.phone;
            const payload = {
                pan: data.pan,
                dob: data.dob,
                mobile: masterData.phone || identifier
            };

            const response = await axios.post(`https://partners.tievista.com/api/check-pan`, payload, AUTH_CONFIG);

            setKycExist(response.data.kycExists ? "True" : "False");
            setKycStatus(response.data.panStatus);

            if (response.data.success) {
                setMasterData(prev => ({
                    ...prev,
                    ...data,
                    pan_name: response.data.panStatus?.name || prev.pan_name,
                    kyc_exists: response.data.kycExists
                }));
                setShowRegulatory(true);
            } else {
                alert(response.data.message || "Failed to verify PAN details.");
            }
        } catch (error) {
            console.error("Identity update failed:", error);
            if (error.response && error.response.data) {
                alert("PAN already exist");
            } else {
                alert("PAN already exist");
            }
        } finally {
            setIsFetchingPan(false);
        }
    };

    const getRegulatory = async (data) => {
        try {
            const identifier = masterData.email || masterData.phone;
            const payload = {
                arn: data.arn || null,
                euin_arn: data.euinARN || null,
                aprn: data.aprn || null,
                euin_aprn: data.euinAprn || null
            };
            await axios.put(`https://partners.tievista.com/api/partners/update/${identifier}`, payload, AUTH_CONFIG);
            setMasterData(prev => ({ ...prev, ...data }));
            setShowBankDetails(true);
        } catch (error) {
            alert("Failed to sync regulatory details. Try Again");
        }
    };

    const getBankDetails = async (data) => {
        try {
            const finalBankData = {
                ...data,
                gstin: data.gstin?.trim() ? data.gstin.trim() : "0",
                cin_no: data.cin || "0"
            };

            const identifier = masterData.email || masterData.phone;
            const payload = {
                bank_account_no: finalBankData.bankAccountNo,
                ifsc_code: finalBankData.ifscCode,
                gst_in: finalBankData.gstin,
                cin_no: finalBankData.cin_no
            };

            // Bank verification
            try {
                const verifyPayload = {
                    accountNumber: finalBankData.bankAccountNo,
                    ifscCode: finalBankData.ifscCode,
                    beneficiaryName: masterData.entityName || "Partner",
                    email: masterData.email,
                    phone: masterData.phone
                };
                const verifyResponse = await axios.post(`https://partners.tievista.com/api/verify-bank`, verifyPayload, AUTH_CONFIG);
                if (verifyResponse.data.success) {
                }
            } catch (err) {
                console.error("Bank verification request failed:", err);
            }

            await axios.put(`https://partners.tievista.com/api/partners/update/${identifier}`, payload, AUTH_CONFIG);
            setMasterData(prev => ({ ...prev, ...finalBankData }));
            setShowAgreement(true);
        } catch (error) {
            alert("Bank Account Alreay exist!.");
        }
    };

    const navigate = useNavigate();

    const handleDownloadPdf = async () => {
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
            const blob = await pdf(<AgreementPDF data={data} />).toBlob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `TieVista_Agreement_${watchReg("entityName") || "Partner"}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            alert('Welcome To TieVista');
            navigate('/');

            const identifier = masterData.email;
            console.log(identifier);

            if (identifier) {
                // Send identifier and entityName in body
                await axios.post(
                    `https://partners.tievista.com/api/partners/confirm`,
                    {
                        identifier: identifier,
                        entityName: watchReg("entityName") || "Partner"
                    },
                    AUTH_CONFIG
                );

                alert("Registration confirmed! A welcome email has been sent to your registered email address.");
            }
        } catch (error) {
            console.error("PDF generation failed:", error);
            alert("Download failed. Please try again.");
        } finally {
            setIsGeneratingPdf(false);
        }
    };

    // ─── Agreement Modal ────────────────────────────────────────────────────────
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

                    {/* Modal Header */}
                    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 z-10"
                        style={{ fontFamily: PoppinsRegular }}>
                        <div className="flex items-center gap-2">
                            <img src="/TieVistaLogo.png" alt="Logo" className="h-8" />
                            <span className="text-sm font-semibold text-black">Agreement Review</span>
                        </div>
                        <button onClick={() => setShowAgreement(false)}
                            className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Paper Container */}
                    <div className="flex-1 overflow-y-auto bg-white flex justify-center py-10 lg:py-16 px-4">
                        <div
                            ref={agreementRef}
                            className="bg-white w-full max-w-[850px] min-h-screen p-10 lg:p-16 text-black leading-[1.6]"
                            style={{ fontSize: "13px", fontFamily: PoppinsRegular }}
                        >
                            {/* Logo and Header */}
                            <div className="flex flex-col items-start mb-12">
                                <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0'>
                                    <div className='flex items-center justify-center md:justify-start w-full md:w-auto'>
                                        <img src="/icon.png" alt="TieVista icon" className="h-16 md:h-20 mb-2 md:mb-4" />
                                        <div className='flex flex-col items-center justify-center relative'>
                                            <img src="/TieVistaVerticalLogo.png" alt="TieVista Vertical Logo" className="h-5 md:h-6 w-auto mb-2 md:mb-4" />
                                            <h3 className='absolute top-5 md:top-7 left-4 md:left-3.5 text-[6px] md:text-[8px] font-light'
                                                style={{ fontFamily: PoppinsRegular }}>Global Private Wealth</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center md:items-start w-full md:w-auto">
                                        <div className="flex items-center gap-1">
                                            <CallEndIcon sx={{ fontSize: { xs: 14, md: 16 }, color: '#e5bc4b' }} />
                                            <span className="text-black text-sm md:text-base"
                                                style={{ fontFamily: PoppinsRegular }}>+91 9885424473</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <EmailIcon sx={{ fontSize: { xs: 14, md: 16 }, color: '#e5bc4b' }} />
                                            <span className="text-black text-sm md:text-base break-all sm:break-normal"
                                                style={{ fontFamily: PoppinsRegular }}>narender.reddy@tievista.com</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Globe className="text-[#e5bc4b]" size={16} />
                                            <span className='text-black text-sm md:text-base'
                                                style={{ fontFamily: PoppinsRegular }}>TieVista.com</span>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="text-2xl font-bold text-center pt-4 w-full tracking-tight"
                                    style={{ fontFamily: "PT Serif" }}>
                                    Sub-Distributorship Agreement
                                </h1>
                                <p className="border-[#d4af37] mt-4 border-b-4 w-full"></p>
                            </div>

                            {/* Section 1 */}
                            <div className="mb-8 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                <p className="mb-4">
                                    This Mutual Fund Sub-Distribution and PMS Sub Distribution (<b>"Agreement"</b>) is executed on this <b>{day}</b> day of <b>{month} {year}</b> (<b>"Effective Date"</b>).
                                </p>
                                <p className="mb-2 font-bold uppercase">BETWEEN</p>
                                <p className="mb-6">
                                    <b>INDUSARTHA FINANCIAL SERVICES PRIVATE LIMITED operating under the brand name of TieVista</b>, a company incorporated under the provisions of the Companies Act, 2013 having its registered office at 4th Floor, AWFIS, VIOS Tower, Wadala, Mumbai 400037 and holding a valid ARN registration issued by the Association of Mutual Funds in India and engaged inter alia in the business of distribution of financial products including mutual fund schemes and portfolio management services (hereinafter referred to as the <b>"Principal Distributor"</b>, which expression shall unless repugnant to the context include its successors and permitted assigns);
                                </p>
                                <p className="mb-2 font-bold uppercase">AND</p>
                                <p className="mb-8 font-bold">
                                    {entityName}, <span className="font-normal">having its principal place of business at</span> {address} <span className="font-normal">and engaged in the business of financial product marketing and client relationship management (hereinafter referred to as the "Sub-Distributor", which expression shall unless repugnant to the context include its successors and permitted assigns). The sub-distributor holds ARN –</span> {arn} <span className="font-normal">and APRN -</span> {aprn}
                                </p>
                                <p className="mb-10">
                                    The Principal Distributor and the Sub-Distributor are hereinafter collectively referred to as the <b>"Parties"</b> and individually as a <b>"Party"</b>.
                                </p>
                            </div>

                            {/* Whereas */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>WHEREAS:</h2>
                                <div className="space-y-4 text-justify pl-4" style={{ fontFamily: PoppinsRegular }}>
                                    <p>A. The Principal Distributor is engaged in the business of distribution of mutual fund schemes and allied financial products and operates in accordance with the regulatory framework prescribed under the SEBI (Mutual Funds) Regulations, 1996 and guidelines issued by the Association of Mutual Funds in India.</p>
                                    <p>B. The Principal Distributor also facilitates marketing and distribution of portfolio management services offered by SEBI registered portfolio managers in accordance with the provisions of the SEBI (Portfolio Managers) Regulations, 2020 and related circulars issued by the Securities and Exchange Board of India.</p>
                                    <p>C. The Sub-Distributor has represented that it possesses adequate experience, infrastructure, market reach, and client servicing capabilities required for marketing and facilitating investments in financial products.</p>
                                    <p>D. The Sub-Distributor has expressed its desire to act as a sub-distribution partner for mutual fund products and as a Sub Contractor/ Marketing partner for portfolio management services subject to regulatory restrictions and compliance requirements.</p>
                                    <p>E. The Principal Distributor has agreed to appoint the Sub-Distributor on a non-exclusive basis, subject to strict adherence to applicable laws, regulatory guidelines, and the terms and conditions set forth in this Agreement.</p>
                                    <p>F. The Sub-Distributor represents that it holds a valid AMFI Registration Number (ARN), Employee Unique Identification Number (EUIN) and APMI Registration Number (APRN), wherever applicable, and shall maintain the same in good standing during the Term.</p>
                                </div>
                                <p className="mt-8 font-bold text-justify" style={{ fontFamily: PoppinsRegular }}>NOW THEREFORE, <span className="font-normal" style={{ fontFamily: PoppinsRegular }} > in consideration of the mutual covenants contained herein, the Parties hereby agree as follows:</span></p>
                            </div>

                            {/* Section 2: Definitions */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>2. DEFINITIONS</h2>
                                <p className="mb-6 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    In this Agreement, unless the context otherwise requires, the following terms shall have the meanings assigned to them hereunder. Words importing the singular shall include the plural and vice versa, and words importing any gender shall include all genders.
                                </p>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p><b>2.1 "AMC" or "Asset Management Company"</b> shall mean a company incorporated under the Companies Act, 2013 and approved by the Securities and Exchange Board of India to act as an asset management company for a mutual fund in accordance with the provisions of the SEBI (Mutual Funds) Regulations, 1996.</p>
                                    <p><b>2.2 "AIF Offering"</b> shall mean offering units of alternative investment fund registered with the Securities and Exchange Board of India under the provisions of the SEBI (AlternativeInvestment Funds) Regulations, 2012.</p>
                                    <p><b>2.3 "Applicable Laws"</b> shall mean and include all applicable statutes, enactments, laws, ordinances, rules, regulations, circulars, notifications, guidelines, directions and policies issued by any governmental authority, regulatory authority, statutory body, self-regulatory organization or court of competent jurisdiction including, without limitation, regulations issued by the Securities and Exchange Board of India and guidelines issued by the Association of Mutual Funds in India, as amended or modified from time to time.</p>
                                    <p><b>2.4 "Business Day"</b> shall mean any day on which banks and financial institutions are open for general business in India, excluding Saturdays, Sundays and public holidays.</p>
                                    <p><b>2.5 "Client"</b> shall mean any individual, body corporate, partnership firm, trust, association of persons, institution or any other legal entity who is introduced, referred, or sourced by the Sub-Distributor to the Principal Distributor for the purpose of investment in Mutual Fund Products or PMS Products or other products/ services covered under clause 3 of the agreement.</p>
                                    <p><b>2.6 "Commission"</b> shall mean any remuneration, brokerage, trail commission, upfront commission, referral fee, marketing fee or incentive payable to the Sub-Distributor by the Principal Distributor in consideration for Distribution Services or Referral Services performed under this Agreement.</p>
                                    <p><b>2.7 "Confidential Information"</b>shall mean and include all non-public, proprietary or confidential information disclosed by one Party to the other, whether in written, electronic, oral or any other form, including but not limited to client information and investment details, marketing strategies and business plans, commission structures and commercial arrangements, internal policies and operational procedures, financial information and proprietary databases, and any other information which by its nature ought reasonably to be treated as confidential. Confidential Information shall no include information which is or becomes publicly available without breach of this Agreement, or which was lawfully known to the receiving Party prior to disclosure, or which is required to be disclosed pursuant to Applicable Laws or regulatory directives.</p>
                                    <p><b>2.8 "Distribution Services"</b> shall mean the activities undertaken for marketing, promotion, facilitation and distribution of Mutual Fund Products on behalf of the Principal Distributor, including identification of prospective investors, dissemination of approved marketing material, assistance in client onboarding and facilitation of transaction processing.</p>
                                    <p><b>2.9 "Effective Date"</b> shall mean the date on which this Agreement is executed by both Parties.</p>
                                    <p><b>2.10 "Financial Offering"</b> shall mean services or products as may be approved by the principal distributor and regulated by any financial sector regulator.</p>
                                    <p><b>2.11 "Manufacturer"</b> shall mean issuer of security or the entity/ person engaged in servicing the products or services which are regulated by any financial sector regulator.</p>
                                    <p><b>2.12 "Marketing Material"</b> shall mean brochures, presentations, advertisements, emails, digital communication or any promotional content relating to Mutual Fund Products or PMS Products or other products/ services covered under clause 3 of the agreement that has been approved by the Principal Distributor or the respective product provider.</p>
                                    <p><b>2.13 "Principal Distributor"</b> shall mean the entity appointing the Sub-Distributor under this Agreement for distribution of Mutual Fund Products and facilitation of PMS Products or any other products/ services covered under clause 3 of the agreement and shall include its successors and permitted assigns.</p>
                                    <p><b>2.14 "Referral Services"</b> shall mean activities limited to the introduction of prospective clients to the Principal Distributor for onboarding such clients by the manufacturer solely at their discretion or manufacturer, without providing investment advice or portfolio recommendations.</p>
                                    <p><b>2.15 "Regulatory Authority"</b> shall mean any governmental, statutory or regulatory authority having jurisdiction over the activities contemplated under this Agreement, including the Securities and Exchange Board of India.</p>
                                    <p><b>2.16 "SEBI"</b> shall mean the Securities and Exchange Board of India established under the Securities and Exchange Board of India Act, 1992.</p>
                                    <p><b>2.17 "Sub-Distributor"</b> shall mean the intermediary appointed under this Agreement for the limited purpose of marketing and facilitating investment in Mutual Fund Products and referring prospective clients for PMS Products or any other products/ services covered under clause 3 of the agreement, subject to the terms and conditions specified herein.</p>
                                    <p><b>2.18 "Term"</b> shall mean the duration of this Agreement commencing from the Effective Date and continuing until terminated in accordance with the provisions of this Agreement.</p>
                                </div>
                            </div>

                            {/* Section 3: Appointment */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>3. APPOINTMENT</h2>
                                <h3 className="font-bold mb-2" style={{ fontFamily: "PT Serif" }}>3.1 Appointment for Mutual Fund Sub-Distribution</h3>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>3.1.1 Subject to the terms and conditions of this Agreement, the Principal Distributor hereby appoints the Sub-Distributor, on a non-exclusive and non-transferable basis, as a Sub-Distributor for the limited purpose of marketing, promoting and facilitating investments in Mutual Fund Products distributed by the Principal Distributor.</p>
                                    <p>3.1.2 The Sub-Distributor acknowledges and agrees that such appointment is limited to distribution activities and does not confer upon the Sub-Distributor any authority to bind the Principal Distributor, any Asset Management Company, or any mutual fund in any contractual or legal capacity.</p>
                                    <p>3.1.3 The Sub-Distributor shall perform its obligations under this Agreement strictly in accordance with:<br />
                                        (a) the provisions of the SEBI (Mutual Funds) Regulations, 1996 and any amendments or modifications thereto;<br />
                                        (b) all circulars, guidelines and directives issued by the Securities and Exchange Board of India from time to time;<br />
                                        (c) the guidelines, circulars and code of conduct prescribed by the Association of Mutual Funds in India including the AMFI Code of Conduct applicable to intermediaries, distributors and sub-distributors;<br />
                                        (d) the internal policies, compliance procedures and operational guidelines prescribed by the Principal Distributor.</p>
                                    <p>3.1.4 Without prejudice to the generality of the foregoing, the Sub-Distributor shall:<br />
                                        1. identify and approach prospective investors for investment in Mutual Fund Products;<br />
                                        2. disseminate only such marketing materials, scheme information documents, key information memoranda, advertisements, presentations or communications as may have been approved by the relevant Asset Management Company or the Principal Distributor;<br />
                                        3. assist prospective investors in completing client onboarding documentation including Know Your Client (KYC) documentation and other regulatory requirements;<br />
                                        4. facilitate submission of investment applications, transaction forms and other documents through authorised channels;<br />
                                        5. ensure that all communications made to investors are fair, accurate and not misleading.</p>
                                    <p>3.1.5 The Sub-Distributor shall not:<br />
                                        (i) make any representation, warranty or guarantee regarding investment performance or returns;<br />
                                        (ii) provide personalised investment advice unless separately authorised under Applicable Laws;<br />
                                        (iii) represent itself as an authorised representative, agent or employee of any Asset Management Company unless expressly permitted;<br />
                                        (iv) alter, modify or misrepresent any scheme documentation, marketing communication or disclosure document issued by an Asset Management Company or the Principal Distributor.</p>
                                    <p>3.1.6 The Sub-Distributor acknowledges that the ultimate acceptance of any investor application and the allotment of units shall remain subject to the discretion of the concerned Asset Management Company.</p>
                                    <p>3.1.7 The Sub-distributor entering into this Agreement and intending to distribute units of mutual funds is qualified and eligible as per the applicable laws to carry out such business.</p>
                                </div>

                                <h3 className="font-bold mt-6 mb-2" style={{ fontFamily: "PT Serif" }}>3.2 Appointment for PMS Marketing and Sub-Distributorship Activities</h3>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>3.2.1 Subject to the terms and conditions of this Agreement, the Principal Distributor may permit the Sub-Distributor to undertake client sourcing, solicitation support and distribution support activities on a sub-contracted basis in relation to Portfolio Management Services ("PMS Products") offered by portfolio managers registered with the Securities and Exchange Board of India.</p>
                                    <p>3.2.2 For the purposes of this Agreement, such activities shall be undertaken strictly in the nature of sub-contracted client sourcing and facilitation services, including identification and introduction of prospective clients and coordination of onboarding processes, and shall not in any manner constitute portfolio management services, investment advisory services or discretionary management of client portfolios.</p>
                                    <p>3.2.3 The Sub-Distributor shall undertake such PMS distribution related activities only in accordance with the regulatory framework prescribed under the SEBI (Portfolio Managers) Regulations, 2020 and other applicable SEBI circulars and guidelines.</p>
                                    <p>3.2.4 Without prejudice to the generality of the foregoing, the following conditions shall apply:<br />
                                        (a) The Sub-Distributor may introduce prospective clients interested in PMS Products to the Principal Distributor or to portfolio managers specifically approved by the Principal Distributor.<br />
                                        (b) The Sub-Distributor shall undertake any marketing, solicitation or client introduction activity relating to PMS Products only after obtaining prior written approval from the Principal Distributor.<br />
                                        (c) Such approval may specify the portfolio manager, product category, scope of marketing activities and commission arrangements applicable to the Sub-Distributor.<br />
                                        (d) The Sub-Distributor acknowledges that its role in relation to PMS Products shall be limited to marketing support, client introduction, facilitation of meetings and administrative coordination between prospective clients and the Principal Distributor or the relevant portfolio manager.<br />
                                        (e) The Sub-Distributor shall not represent itself as:<br />
                                        (i) a portfolio manager;<br />
                                        (ii) an investment adviser registered with SEBI;<br />
                                        (iii) an authorised investment manager or portfolio management entity; or<br />
                                        (iv) an entity authorised to provide investment advice or portfolio allocation recommendations.<br />
                                        (f) The Sub-Distributor shall not:<br />
                                        1. provide discretionary investment advice relating to PMS Products;<br />
                                        2. recommend specific portfolio strategies or investment allocations;<br />
                                        3. execute investment decisions on behalf of clients;<br />
                                        4. collect or hold client funds or securities.<br />
                                        (g) The final decision regarding acceptance of a client, execution of the portfolio management agreement and management of the investment portfolio shall rest solely with the relevant portfolio manager.<br />
                                        (h) All documentation relating to PMS investments, including portfolio management agreements, risk disclosure documents and client onboarding documentation, shall be executed directly between the client and the portfolio manager in accordance with the provisions of the SEBI (Portfolio Managers) Regulations, 2020.<br />
                                        (i) The Sub-Distributor shall ensure that all communications made to prospective clients in relation to PMS Products are accurate, fair and not misleading and are consistent with disclosures prescribed by applicable regulatory authorities.</p>
                                    <p>The Parties hereby acknowledge and agree that the Sub-Distributor shall act solely in the capacity of a sub-contracted client sourcing and distribution support intermediary for the limited purpose of identifying and introducing prospective clients and facilitating preliminary coordination in relation to PMS Products. The Sub-Distributor shall not hold itself out as an authorised representative, agent or affiliate of any portfolio manager.</p>
                                </div>

                                <h3 className="font-bold mt-6 mb-2" style={{ fontFamily: "PT Serif" }}>3.3 Appointment for AIF Marketing and Sub-Distributorship Activities</h3>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>3.3.1 Subject to the terms and conditions of this Agreement, the Principal Distributor may permit the Sub-Distributor to undertake client sourcing, solicitation support and distribution support activities on a sub-contracted basis in relation to Alternative Investment Funds ("AIF Offerings") offered by the investment managers of AIFs which are registered with the Securities and Exchange Board of India.</p>
                                    <p>3.3.2 For the purposes of this Agreement, such activities shall be undertaken strictly in the nature of sub-contracted client sourcing and facilitation services, including identification and introduction of prospective clients and coordination of onboarding processes, and shall not in any manner constitute investment advisory services.</p>
                                    <p>3.3.3 The Sub-Distributor shall undertake such AIF distribution related activities only in accordance with the regulatory framework prescribed by SEBI or any other authority as may be prescribed.</p>
                                    <p>3.3.4 Without prejudice to the generality of the foregoing, the following conditions shall apply:<br />
                                        (a) The Sub-Distributor may introduce prospective clients interested in AIF offerings to the Principal Distributor or to investment manager specifically approved by the Principal Distributor.<br />
                                        (b) The Sub-Distributor shall undertake any marketing, solicitation or client introduction activity relating to AIF offerings only after obtaining prior written approval from the Principal Distributor. The distribution of Alternative Investment Fund, being a privately placed vehicle, shall be subject to guidelines issued by principal distributor for distribution of such privately placed products.<br />
                                        (c) Such approval may specify the AIF scheme, scope of marketing activities and commission arrangements applicable to the Sub-Distributor.<br />
                                        (d) The Sub-Distributor acknowledges that its role in relation to AIF Offerings shall be limited to marketing support, client introduction, facilitation of meetings and administrative coordination between prospective clients and the Principal Distributor or the relevant investment manager.<br />
                                        (e) The Sub-Distributor shall not represent itself as:<br />
                                        (i) an investment manager of AIF;<br />
                                        (ii) an investment adviser registered with SEBI;<br />
                                        (iii) an authorised investment manager or portfolio management entity; or<br />
                                        (iv) an entity authorised to provide investment advice or portfolio allocation recommendations.<br />
                                        (f) The Sub-Distributor shall not:<br />
                                        1. provide investment advice relating to AIF offerings;<br />
                                        2. recommend specific portfolio strategies or investment allocations;<br />
                                        3. execute investment decisions on behalf of clients;<br />
                                        4. collect or hold client funds or securities.<br />
                                        (g) The final decision regarding acceptance of a client, execution of the contribution agreement and management of the investment portfolio shall rest solely with the relevant investment manager.<br />
                                        (h) All documentation relating to AIF offerings, including contribution agreement and other client onboarding documentation, shall be executed directly between the client and the investment manager in accordance with the provisions of the SEBI (Alternative Investment Fund) Regulations, 2012.<br />
                                        (i) The Sub-Distributor shall ensure that all communications made to prospective clients in relation to AIF offerings are accurate, fair and not misleading and are consistent with disclosures prescribed by applicable regulatory authorities.</p>
                                    <p>The Parties hereby acknowledge and agree that the Sub-Distributor shall act solely in the capacity of a sub-contracted client sourcing and distribution support intermediary for the limited purpose of identifying and introducing prospective clients and facilitating preliminary coordination in relation to AIF offerings. The Sub-Distributor shall not hold itself out as an authorised representative, agent or affiliate of any investment manager.</p>
                                </div>

                                <h3 className="font-bold mt-6 mb-2" style={{ fontFamily: "PT Serif" }}>3.4 Appointment for Sub-Distributorship Activities for other financial offerings</h3>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>3.4.1 Subject to the terms and conditions of this Agreement, the Principal Distributor may permit the Sub-Distributor to undertake client sourcing, solicitation support and distribution support activities on a sub-contracted basis in relation to financial offerings as approved by the principal distributor.</p>
                                    <p>3.4.2 For the purposes of this Agreement, such activities shall be undertaken strictly in the nature of sub-contracted client sourcing and facilitation services, including identification and introduction of prospective clients and coordination of onboarding processes, and shall not in any manner constitute investment advisory services.</p>
                                    <p>3.4.3 The Sub-Distributor shall undertake such distribution related activities only in accordance with the regulatory framework prescribed by SEBI or any other authority as may be prescribed.</p>
                                    <p>3.4.4 Without prejudice to the generality of the foregoing, the following conditions shall apply:<br />
                                        (a) The Sub-Distributor may introduce prospective clients interested in such other financial offerings to the Principal Distributor or to investment manager specifically approved by the Principal Distributor.<br />
                                        (b) The Sub-Distributor shall undertake any marketing, solicitation or client introduction activity relating to such financial offerings only after obtaining prior written approval from the Principal Distributor. The distribution of privately placed products shall be subject to guidelines issued by principal distributor for distribution of such privately placed products.<br />
                                        (c) Such approval may specify the financial offering, scope of marketing activities and commission arrangements applicable to the Sub-Distributor.<br />
                                        (d) The Sub-Distributor acknowledges that its role in relation to AIF Offerings shall be limited to marketing support, client introduction, facilitation of meetings and administrative coordination between prospective clients and the Principal Distributor or manufacturer.<br />
                                        (e) The Sub-Distributor shall not represent itself as:<br />
                                        (i) an investment manager or portfolio manager;<br />
                                        (ii) an investment adviser registered with SEBI or any other regulatory authority;<br />
                                        (iii) an authorised investment manager or portfolio management entity; or<br />
                                        (iv) an entity authorised to provide investment advice or portfolio allocation recommendations.<br />
                                        (f) The Sub-Distributor shall not:<br />
                                        1. provide investment advice relating to such financial offerings;<br />
                                        2. recommend specific portfolio strategies or investment allocations;<br />
                                        3. execute investment decisions on behalf of clients;<br />
                                        4. collect or hold client funds or securities.<br />
                                        (g) The final decision regarding acceptance of a client, execution of the contribution agreement and management of the investment portfolio shall rest solely with the relevant manufacturer of such financial offering.<br />
                                        (h) All documentation relating to financial offering, including investment agreement, other client onboarding documentation and any other documentation as may be required, shall be executed directly between the client and the manufacturer in accordance with the provisions of relevant regulatory framework.<br />
                                        (i) The Sub-Distributor shall ensure that all communications made to prospective clients in relation to such financial offerings are accurate, fair and not misleading and are consistent with disclosures prescribed by applicable regulatory authorities.</p>
                                    <p>The Parties hereby acknowledge and agree that the Sub-Distributor shall act solely in the capacity of a sub-contracted client sourcing and distribution support intermediary for the limited purpose of identifying and introducing prospective clients and facilitating preliminary coordination in relation to such financial offerings. The Sub-Distributor shall not hold itself out as an authorised representative, agent or affiliate of any investment manager.</p>
                                </div>
                            </div>

                            {/* Sections 4–17: headings use "PT Serif", body uses PoppinsRegular */}

                            {/* Section 4 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>4. PRIOR APPROVAL OF PRINCIPAL DISTRIBUTOR</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>4.1 Notwithstanding anything contained elsewhere in this Agreement, the Sub-Distributor
                                        shall not undertake any client sourcing, solicitation support, distribution support or other
                                        sub-contracted facilitation activity in relation to PMS Products, AIF Offerings and such other
                                        product/ services covered under clause 3 unless prior written approval has been obtained
                                        from the Principal Distributor and Manufacturer (wherever required).</p>
                                    <p>4.2 Such approval shall be granted at the sole discretion of the Principal Distributor and may
                                        specify the manufacturer whose products/ services may be introduced to prospective
                                        clients, the nature and scope of the permitted client sourcing and distribution support
                                        activities, and any operational procedures, compliance requirements or investor disclosure
                                        obligations that must be adhered to by the Sub-Distributor.</p>
                                    <p>4.3 The approval may further specify the commission, referral fee or other remuneration
                                        structure applicable to such activities, subject to applicable regulatory requirements and
                                        internal policies of the Principal Distributor, and the Sub-Distributor shall strictly comply with
                                        the terms and conditions specified in such approval and shall not undertake any activity
                                        beyond the scope of the authority granted therein.</p>
                                    <p>4.4 Any activity undertaken by the Sub-Distributor in relation to products/ services covered
                                        under clause 3 of the agreement without obtaining the prior written approval of the
                                        Principal Distributor, or in contravention of the terms and conditions specified in such
                                        approval, shall constitute a material breach of this Agreement, entitling the Principal
                                        Distributor to suspend or terminate this Agreement and take such further action as may be
                                        permissible under Applicable Laws, including the provisions of the SEBI (Portfolio Managers)
                                        Regulations, 2020 and other regulatory directions issued by the Securities and Exchange
                                        Board of India.</p>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>5. SCOPE OF SERVICES</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>5.1 Subject to the terms and conditions of this Agreement, the Sub-Distributor shall
                                        undertake client sourcing and distribution support activities in relation to services or
                                        products mentioned under Clause 3 of this agreement as may be permitted by the Principal
                                        Distributor from time to time, including identifying and approaching prospective investors
                                        and facilitating their introduction to the Principal Distributor. Further, Client data obtained in
                                        connection with Mutual Fund investments shall not be used for marketing other financial
                                        products without the prior consent of the client.</p>
                                    <p>5.2 The Sub-Distributor may disseminate to prospective investors only such product
                                        literature, scheme-related documents, informational material or communications that
                                        have been issued or approved by the Principal Distributor or the relevant product provider,
                                        and shall ensure that all communications made to prospective investors are fair, accurate
                                        and not misleading.</p>
                                    <p>5.3 The Sub-Distributor may assist prospective investors and Clients in completing
                                        onboarding documentation, including Know Your Client (KYC) documentation, application
                                        forms and other administrative formalities, and may coordinate administrative
                                        communication between the Client and the Principal Distributor for the purpose of
                                        facilitating investments in the relevant products.</p>
                                    <p>5.4 Notwithstanding anything contained herein, the Sub-Distributor shall not provide
                                        investment advice, recommend specific investment strategies or portfolio allocations,
                                        make any representation or guarantee regarding investment performance or returns,represent itself as a portfolio manager or investment adviser, or undertake any activity that
                                        may be construed as discretionary portfolio management or investment advisory services.</p>
                                    <p>5.5 The Sub-Distributor is authorized, on a non-exclusive basis, to identify and approach
                                        prospective investors for the purpose of distribution of the Products through private
                                        placement, strictly in accordance with applicable laws and this Agreement. The Sub-Distributor shall act solely as an intermediary and shall not bind the Company in any
                                        manner.</p>
                                    <p>5.6 The Sub-Distributor shall ensure that all offers and solicitations are made strictly on a
                                        private placement basis and shall not undertake any form of general solicitation,
                                        advertisement, public communication, or mass outreach, including through digital or social
                                        media platforms.</p>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>6. COMPLIANCE WITH DISTRIBUTOR CODE OF CONDUCT</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>6.1 The Sub-Distributor shall at all times comply with the Code of Conduct applicable to distributors and sub-distributors prescribed by the Association of Mutual Funds in India and Securities and Exchange Board of India, and with all applicable regulatory guidelines, circulars and directions issued by competent authorities. The code of conduct for distributing AIF offerings is mentioned in Annexure B. Additionally, the code of conduct as issued by the principal distributor shall be complied with for the products or services in respect of which code of conduct is not issued by SEBI or respective financial sector regulatory.</p>
                                    <p>6.2 The Sub-Distributor shall maintain high standards of integrity, fairness and professionalism in all dealings with prospective investors and Clients. The sub-distributor shall not jeopardise the interest of the interest of clients and manufacturers and in case of any scenario of conflict is identified, the sub-distributor shall inform about the conflict to the principal distributor.</p>
                                    <p>6.3 The Sub-Distributor shall ensure full and transparent disclosure to Clients regarding the nature of its role as an intermediary and any commissions or remuneration that may be received in connection with investments facilitated through it.</p>
                                    <p>6.4 The Sub-Distributor shall not engage in mis-selling, misleading representations or dissemination of inaccurate information relating to Mutual Fund Products or PMS Products or other products/ services covered under clause 3 of this agreement.</p>
                                    <p>6.5 The Sub-Distributor shall ensure that all information communicated to Clients is accurate, fair and consistent with the official product documentation issued by the relevant product provider or approved by the Principal Distributor.</p>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>7. CLIENT DISCLOSURES</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>7.1 The Sub-Distributor shall ensure that each Client introduced by it receives clear and adequate disclosures regarding the nature of the services being rendered and the roles and responsibilities of the parties involved.</p>
                                    <p>7.2 The Sub-Distributor shall inform each Client that it acts solely as an intermediary engaged in client sourcing and distribution support activities and does not provide portfolio management or discretionary investment management services.</p>
                                    <p>7.3 The Sub-Distributor shall ensure and inform the Clients that they understand that the Principal Distributor, Asset Management Company or the relevant portfolio manager, as the case may be, shall be responsible for the management and administration of investments.</p>
                                    <p>7.4 The Sub-Distributor shall clearly disclose that investments in financial products including mutual funds and portfolio management services are subject to market risks and that past performance does not guarantee future results.</p>
                                    <p>7.5 The Sub-Distributor shall also disclose, where applicable, that commissions, referral fees or other forms of remuneration may be paid to intermediaries in connection with investments facilitated through such intermediaries.</p>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>8. COMMISSION AND REMUNERATION</h2>
                                <h3 className="font-bold mb-2" style={{ fontFamily: "PT Serif" }}>8.1 Commission for Mutual Fund Products</h3>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>8.1.1 In consideration of the distribution services performed by the Sub-Distributor under this Agreement, the Sub-Distributor shall be entitled to receive commission from the Principal Distributor in respect of investments in Mutual Fund Products sourced or facilitated by the Sub-Distributor.</p>
                                    <p>8.1.2 Such commission shall be payable as a share of the commission or distribution fees received by the Principal Distributor from the relevant Asset Management Companies.</p>
                                    <p>8.1.3 The commission payable to the Sub-Distributor may include upfront commissions, trail commissions, performance incentives or any other distribution-related remuneration payable in accordance with applicable regulatory guidelines.</p>
                                    <p>8.1.4 Any remuneration payable to the Sub-distributor in relation to mutual funds distributed shall be payable only upon receipt of the corresponding fees by the Principal Distributor from the relevant AMCs.</p>
                                    <p>8.1.5 Principal distributor reserves the right to claw-back Commissions and/or other amounts already paid to the sub-distributor from future due payments and/or demand return payments from sub-distributor, in compliance with applicable laws or as may be deemed fit &amp; appropriate by principal distributor for valid purposes, including but not limited to reasons of any wrongly processed payments, any charges or dues pending or for any business or Transactions found void or invalid, etc.</p>
                                    <p>8.1.6 The principal distributor also reserves the right to set-off and/or deduct any due amounts by sub-distributor from the accrued commissions or brokerages etc., amounts payable to the sub-distributor at the discretion of principal distributor.</p>
                                </div>
                                <h3 className="font-bold mt-6 mb-2" style={{ fontFamily: "PT Serif" }}>8.2 Remuneration for Client Introductions in respect of other products/ services</h3>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>8.2.1 In respect of PMS Products, AIF offerings and any other products/ services covered under clause 3 of this agreement, the Sub-Distributor shall be entitled to receive referral fees or distribution support fees for introducing Clients to the Principal Distributor or to portfolio managers approved by the Principal Distributor.</p>
                                    <p>8.2.2 The structure and quantum of such remuneration shall be mutually agreed between the Parties and shall remain subject to applicable regulatory disclosure requirements.</p>
                                    <p>8.2.3 Any remuneration payable to the Sub-Distributor in relation to PMS Products, AIF offering and any other products/ services covered under clause 3 of this agreement shall be payable only upon receipt of the corresponding fees by the Principal Distributor from the relevant portfolio manager.</p>
                                    <p>8.2.4 All payments made under this Clause shall be subject to compliance with Applicable Laws including the provisions of the SEBI (Portfolio Managers) Regulations, 2020, SEBI (Alternative Investment Funds) Regulations 2012.</p>
                                    <p>8.2.5 Principal distributor reserves the right to claw-back Commissions and/or other amounts already paid to the sub-distributor from future due payments and/or demand return payments from sub-distributor, in compliance with applicable laws or as may be deemed fit &amp; appropriate by principal distributor for valid purposes, including but not limited to reasons of any wrongly processed payments, any charges or dues pending or for any business or Transactions found void or invalid, etc.</p>
                                    <p>8.2.6 The principal distributor also reserves the right to set-off and/or deduct any due amounts by sub-distributor from the accrued commissions or brokerages etc., amounts payable to the sub-distributor at the discretion of principal distributor.</p>
                                </div>
                            </div>

                            {/* Section 9 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>9. CONFIDENTIALITY AND DATA PROTECTION</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>9.1 Each Party acknowledges that during the course of performance of this Agreement it may have access to or receive certain confidential, proprietary, financial, commercial, technical or client-related information of the other Party, including but not limited to business strategies, client databases, investment information, pricing structures, trade secrets, operational processes, marketing plans and any other information designated as confidential or which by its nature ought reasonably to be regarded as confidential ("Confidential Information").</p>
                                    <p>9.2 The receiving Party shall maintain the strictest confidentiality in respect of such Confidential Information and shall use such information solely for the limited purpose of performing its obligations under this Agreement and for no other purpose whatsoever.</p>
                                    <p>9.3 The receiving Party shall implement and maintain appropriate administrative, technical and organisational safeguards to ensure protection of Confidential Information against unauthorised access, disclosure, misuse, loss or alteration and shall ensure that its employees, agents, representatives or affiliates who may have access to such information are bound by obligations of confidentiality no less stringent than those contained herein.</p>
                                    <p>9.4 The receiving Party shall not disclose, publish, transmit or otherwise make available any Confidential Information to any third party without the prior written consent of the disclosing Party, except where such disclosure is required under Applicable Laws or by any regulatory authority, in which event the receiving Party shall promptly notify the disclosing Party to the extent legally permissible.</p>
                                    <p>9.5 All client-related information, investor data, contact details, financial information and transaction records obtained during the course of this Agreement shall be treated as strictly confidential and shall not be used for solicitation, marketing, commercial exploitation or any purpose unrelated to this Agreement.</p>
                                    <p>9.6 Upon termination or expiry of this Agreement, the receiving Party shall promptly return, delete or destroy all Confidential Information in its possession, custody or control, unless retention is required under Applicable Laws.</p>
                                    <p>9.7 The obligations contained in this Clause shall survive the termination or expiration of this Agreement for a period of five years, and in respect of client data and proprietary information, such obligations shall continue for so long as such information remains confidential in nature.</p>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>10. Key Regulatory Aspects</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>10.1 The sub-distributor shall maintain all the information of their Clients required for the conduct of its business and as required under applicable Know Your Customer (KYC) and other Applicable Laws and shall make available any such information to principal distributor or the AMC or the portfolio manager upon request.</p>
                                    <p>10.2 The sub-distributor shall not use the nomenclature of 'Independent Financial Adviser' or 'IFA' or 'Wealth Adviser' or any other similar name or any name specifically prohibited by SEBI/AMFI, or any such combination of terms which may be interpreted as providing investment advice or possibilities being identified as an Investment Adviser, in any manner whatsoever. Further, the sub-distributor must always clearly communicate/ showcase to the client that he/she/it is an 'AMFI Registered Mutual Fund Distributor' and that no 'investment advice' is being rendered.</p>
                                    <p>10.3 The sub-distributor engaged in distribution of mutual funds acknowledges that the sub-distributor shall ensure not to contradict its role with the role of investment adviser in compliance with the provisions of the IA Regulations, as amended from time to time. In case the sub-distributor or any of its related party or associate wishes to register or has already registered as an Investment Adviser under IA Regulations, a written communication must be made to Principal advisor. In failure of which, principal advisor reserves a right to terminate this Agreement without prior notice.</p>
                                    <p>10.4 The sub-distributor shall be solely responsible to co-operate for adhering to the implementation of KYC and Anti Money Laundering (AML) norms, processes, compliances under the PMLA regulations &amp; guidelines given by the regulatory authorities, SEBI, AMCs, SRO and principal advisor from time to time. In case of any non-compliance thereof, the sub-distributor agrees that principal advisor cannot be held responsible for the same.</p>
                                    <p>10.5 The sub-distributor shall ensure to adhere with all the compliances applicable under applicable regulatory guidelines. In case of any differences between the agreement and the regulatory framework then the regulatory framework shall prevail.</p>
                                </div>
                            </div>

                            {/* Section 11 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>11. INDEMNITY</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>11.1 The Sub-Distributor shall fully indemnify, defend and hold harmless the Principal Distributor, its directors, officers, employees, affiliates and representatives from and against any and all losses, damages, liabilities, penalties, claims, demands, costs, expenses or regulatory actions whatsoever, including reasonable legal fees and expenses, arising directly or indirectly from any breach, default or non-performance of the obligations contained in this Agreement.</p>
                                    <p>11.2 Without prejudice to the generality of the foregoing, such indemnity shall extend to any loss or liability arising out of misrepresentation, misleading communication, unauthorised assurances or incorrect disclosures made by the Sub-Distributor to clients or prospective investors.</p>
                                    <p>11.3 The indemnity shall further apply in the event of any violation of Applicable Laws, regulatory guidelines, compliance requirements or investor protection norms by the Sub-Distributor or its personnel in connection with the activities contemplated under this Agreement.</p>
                                    <p>11.4 The Sub-Distributor shall also indemnify the Principal Distributor against any claims, proceedings, investigations, regulatory penalties or reputational damage arising from negligence, wilful misconduct, fraud, mis-selling, breach of confidentiality or misuse of client information by the Sub-Distributor.</p>
                                    <p>11.5 The rights and remedies provided under this Clause shall survive termination or expiry of this Agreement and shall be in addition to any other rights or remedies available to the Principal Distributor under law or equity.</p>
                                </div>
                            </div>

                            {/* Section 12 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>12. LIMITATION OF LIABILITY</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>12.1 The Principal Distributor shall not be responsible or liable for any losses, diminution in value, market fluctuations or investment risks arising from investments made by clients in financial products distributed under this Agreement.</p>
                                    <p>12.2 The Principal Distributor shall not be liable for the performance, actions, omissions or decisions of portfolio managers, asset management companies, issuers or other product providers whose products may be introduced or distributed under this Agreement.</p>
                                    <p>12.3 The Sub-Distributor acknowledges that all investment decisions shall ultimately be taken by the clients based on their own assessment of risks and suitability and the Principal Distributor shall not be liable for any financial loss or investment outcome arising therefrom.</p>
                                    <p>12.4 Nothing contained in this Clause shall limit liability arising from fraud, wilful misconduct or gross negligence where such limitation is prohibited under Applicable Laws.</p>
                                    <p>12.5 Subject to the provisions, the aggregate liability of each party arising out of or in connection with this Agreement shall not exceed the total fees or commissions paid or received by the Sub-Distributor as the case may be under this Agreement during the twelve (12) months preceding the event giving rise to such liability.</p>
                                </div>
                            </div>

                            {/* Section 13 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>13. TERM AND TERMINATION</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>13.1 This Agreement shall commence on the Effective Date and shall remain valid for a period of three (3) years unless terminated earlier in accordance with the provisions of this Agreement.</p>
                                    <p>13.2 Either Party may terminate this Agreement at any time, without assigning any reason, by providing the other Party with not less than thirty (30) days' prior written notice.</p>
                                    <p>13.3 Notwithstanding anything contained herein, the Principal Distributor shall have the right to terminate this Agreement with immediate effect upon written notice if the Sub-Distributor violates any Applicable Laws or regulatory requirements, engages in mis-selling or unethical conduct, breaches the Code of Conduct, or undertakes any act that may adversely affect the reputation, regulatory standing, or business interests of the Principal Distributor.</p>
                                    <p>13.4 Upon termination or expiration of this Agreement, the Sub-Distributor shall immediately cease representing itself as associated with the Principal Distributor and shall discontinue all activities undertaken pursuant to this Agreement, and such termination shall be without prejudice to any rights, obligations, or liabilities accrued prior to termination, including obligations relating to confidentiality, indemnity, and compliance with Applicable Laws.</p>
                                </div>
                            </div>

                            {/* Section 14 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>14. GOVERNING LAW AND JURISDICTION</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>14.1 This Agreement shall be governed by and construed in accordance with the laws of India.</p>
                                    <p>14.2 Subject to the dispute resolution mechanism provided in this Agreement, the courts at Mumbai, India, Maharashtra shall have exclusive jurisdiction in respect of matters arising out of or in connection with this Agreement.</p>
                                </div>
                            </div>

                            {/* Section 15 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>15. DISPUTE RESOLUTION</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>15.1 The Parties shall endeavour to resolve amicably, through mutual discussions and good faith negotiations, any dispute, controversy or claim arising out of or relating to this Agreement, including its interpretation, performance or termination.</p>
                                    <p>15.2 In the event such dispute is not resolved amicably within thirty (30) days from the date on which either Party notifies the other Party of the dispute, the same shall be referred to and finally resolved by arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996, as amended from time to time.</p>
                                    <p>15.3 The arbitration shall be conducted by a sole arbitrator mutually appointed by the Parties. In the event the Parties fail to agree upon the appointment of the arbitrator, the appointment shall be made in accordance with the provisions of the Arbitration and Conciliation Act, 1996.</p>
                                    <p>15.4 The seat and venue of arbitration shall be in Mumbai, Maharashtra, India, and the proceedings shall be conducted in the English language.</p>
                                    <p>15.5 The arbitral award shall be final and binding upon the Parties and may be enforced in any court of competent jurisdiction.</p>
                                </div>
                            </div>

                            {/* Section 16 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>16. MISCELLANEOUS</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>16.1 This Agreement constitutes the entire understanding between the Parties with respect to the subject matter hereof and supersedes all prior discussions, negotiations, understandings or arrangements, whether written or oral.</p>
                                    <p>16.2 No modification, amendment or alteration of this Agreement shall be valid unless made in writing and duly executed by authorised representatives of both Parties.</p>
                                    <p>16.3 The Sub-Distributor shall not assign, transfer or delegate any of its rights or obligations under this Agreement without the prior written consent of the Principal Distributor.</p>
                                    <p>16.4 Failure or delay by either Party in exercising any right or remedy under this Agreement shall not constitute a waiver of such right or remedy.</p>
                                    <p>16.5 If any provision of this Agreement is held to be invalid, illegal or unenforceable by a court or arbitral tribunal of competent jurisdiction, the remaining provisions of this Agreement shall continue to remain in full force and effect.</p>
                                    <p>16.6 The sub-distributor is not entitled to subcontract or transfer any of its rights and obligations under this Agreement without prior written consent of principal distributor. Principal distributor may assign all or part of its obligations under this Agreement.</p>
                                </div>
                            </div>

                            {/* Section 17 */}
                            <div className="mb-8">
                                <h2 className="font-bold mb-4 uppercase" style={{ fontFamily: "PT Serif" }}>17. REPRESENTATIONS AND WARRANTIES</h2>
                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>17.1 The Sub-Distributor represents and warrants that it possesses the necessary competence, expertise, infrastructure, regulatory knowledge and operational capability required to perform its obligations under this Agreement in a professional and diligent manner.</p>
                                    <p>17.2 The Sub-Distributor further represents that it shall at all times comply with all Applicable Laws, regulatory requirements, guidelines and circulars issued by relevant authorities, including those governing distribution of financial products and investor protection.</p>
                                    <p>17.3 The Sub-Distributor shall conduct its activities in a fair, transparent and ethical manner and shall not engage in any practice, act or omission that may adversely affect the reputation, goodwill or regulatory standing of the Principal Distributor.</p>
                                    <p>17.4 The Sub-Distributor shall not make any statement, commitment, promise, guarantee or representation to clients or prospective investors which is inconsistent with or beyond the information, materials or authorisations provided by the Principal Distributor. Additionally, the sub-distributor will not spread any unauthenticated news and will be subject to SEBI (Prohibition of Fraudulent and Unfair Trade Practices relating to Securities Market) Regulations, 2003.</p>
                                    <p>17.5 The sub-distributor is competent to enter into a legally binding contract and this Agreement under Applicable Laws and that it is not incompetent to contract within the meaning of the Indian Contract Act, 1872 as amended from time to time.</p>
                                    <p>17.6 The sub-distributor is a "fit and proper person" as defined under SEBI (Intermediaries) Regulations 2008.</p>
                                    <p>17.7 Sub-distributor represents that it is not prohibited to distribute products covered under clause 3 of this agreement in accordance with the relevant regulations (if applicable). and shall immediately communicate to principal distributor upon applicability of any prohibitory provisions under the said regulation during the subsistence of this Agreement.</p>
                                    <p>17.8 The Sub-Distributor represents and warrants that it holds all necessary registrations, approvals, licenses, certification and any other requirements if required under applicable laws and regulations, including those prescribed by the Securities and Exchange Board of India, and shall at all times remain in compliance with such requirements. The sub-distributor further represents and warrants that during the course of engagement, the sub-distributor is incapable i.e not in adherence to necessary registrations, approvals, licenses, certification and any other requirements if required under applicable laws and regulations, it shall forthwith intimate the principal distributor and shall not offer any products or services mentioned under clause 3 of this agreement, unless approved by the principal distributor.</p>
                                    <p>17.9 The Sub-Distributor represents and warrants that the sub-distributor shall intimate about any changes in its constitution.</p>
                                    <p>17.10 The sub-distributor represents and warrants that it shall abide by the applicability regulatory framework in force.</p>
                                    <p>17.11 The sub-distributor represents and warrants that it shall not charge any fees to client in respect of products or services distributed to the clients under this agreement.</p>
                                </div>
                            </div>

                            {/* Signatures */}
                            <div className="flex flex-col pt-16 border-t border-gray-100" style={{ fontFamily: PoppinsRegular }}>
                                <p className="mb-4 text-xs">Signed by:</p>
                                <div className="flex-1 mb-6">
                                    <p className="font-bold text-black">Primary Distributor</p>
                                    <p className="font-bold text-black text-base">INDUSARTHA FINANCIAL SERVICES PRIVATE LIMITED</p>
                                    <p className="text-black">Authorised Signatory: MR. MUDDASANI NARENDER REDDY</p>
                                </div>
                                <div className="flex-1 text-left mb-8">
                                    <p className="font-bold text-black">Sub-distributor</p>
                                    <p className="font-bold text-black min-w-[200px] pb-1 text-base uppercase">{entityName}</p>
                                </div>
                            </div>

                            {/* Annexure A */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h2 className="font-bold mb-4 uppercase text-center" style={{ fontFamily: "PT Serif" }}>ANNEXURE A</h2>
                                <h3 className="font-bold mb-6 text-center" style={{ fontFamily: "PT Serif" }}>Fee / Commission sharing</h3>
                                <p className="text-justify" style={{ fontFamily: PoppinsRegular }}>The principal distributor will share fees (As mutually agreed) earned from Asset Management Companies, Portfolio Manager and such other products covered under this agreement.</p>
                            </div>

                            {/* Annexure B */}
                            <div className="mt-12 pt-8 border-t border-gray-200 mb-20">
                                <h2 className="font-bold mb-4 uppercase text-center" style={{ fontFamily: "PT Serif" }}>ANNEXURE B</h2>
                                <h3 className="font-bold mb-6 text-center" style={{ fontFamily: "PT Serif" }}>Code of Conduct for Distributors for AIFs</h3>
                                <div className="space-y-3 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>1. Adhere to SEBI (Alternative Investment Funds) Regulations, 2012, as amended from time to time, and circulars issued by SEBI relating to distribution, marketing, performance benchmarking and investor reporting requirements of AIFs.</p>
                                    <p>2. Be fully conversant with key provisions of PPM disclosures, such as Investment Strategy, Fee Structure and key terms of the Contribution Agreement to be signed by an investor and the investment manager.</p>
                                    <p>3. Inform investors about the key risk factors of each fund/scheme and desist from misrepresentation or exaggeration. Encourage investors to go through the disclosures made in the PPM and all related documents of the fund/scheme before making an investment decision.</p>
                                    <p>4. Disclose all material information including Hurdle Rate, Management Fees, Additional Returns and Catch-up provisions, if any, expenses chargeable to the Fund and expenses to be borne by the investment manager.</p>
                                    <p>5. Consider investor's interest, risk profiling and suitability to their financial needs while marketing AIFs and advising on the same.</p>
                                    <p>6. Highlight all assumptions made by AIF in performance calculation, risk assessment and performance estimation, if any.</p>
                                    <p>7. Take necessary steps to ensure that the investors' interest is protected. Ensure that commissions or incentives on sale of AIF units shall never form as the basis for recommending a fund/scheme.</p>
                                    <p>8. Disclose all material information including the details of distribution commissions to be received, on subscription to various classes of units offered by the AIF.</p>
                                    <p>9. Abstain from assuring returns in any AIF fund/scheme and from any kind of misrepresentation thereon.</p>
                                    <p>10. Abstain from attracting investors through unethical means such as providing an offer of rebate, pass-back, gifts or other concessions.</p>
                                    <p>11. Abstain from obfuscating the decision-making process of investors, by omission of material facts or misleading investors about the fund/scheme.</p>
                                    <p>12. Maintain high standards of integrity, promptitude and fairness in the conduct of business as a Distributor.</p>
                                    <p>13. Act with required skill, care and diligence in the conduct of business as a Distributor.</p>
                                    <p>14. Assist clients in completing KYC documentation and verification procedures.</p>
                                    <p>15. Maintain necessary infrastructure to provide pre-commitment and post-commitment support to investors, investment manager, regulators and third-party service providers This may include support in terms of providing intimations for draw-downs, capital calls, investor meetings, redemptions, fund-closing, investor grievances, dispatching of performance reports to investors and other important matters from time to time.</p>
                                    <p>16. Stay updated with latest developments in the AIF markets, changes in the Fund Sponsor, Investment Manager, changes in controlling interest of the fund/scheme, exit of key executives, adverse developments and other material aspects.</p>
                                    <p>17. Maintain confidentiality of investors' personal data, deals and transactions done by a AIF.</p>
                                    <p>18. Provide relevant documents of investors to tax authorities and enforcement agencies under the Prevention of Money Laundering Act, including KYC documents, Power of Attorney (PoA), and any other information as may be required from time to time.</p>
                                    <p>19. Abstain from making negative statements about other AIFs that the distributor is not representing. Ensure that comparison of AIFs is done between similar and comparable AIFs, based on adequate information.</p>
                                    <p>20. Not indulge in any manipulative, fraudulent or deceptive practices or spread rumours with a view to make personal gain.</p>
                                </div>
                            </div>
                            <div className="mt-12 pt-8 mb-20">
                                <h3 className="font-bold mb-6 text-center" style={{ fontFamily: "PT Serif" }}>Code of Conduct for Distributors for PMSs</h3>
                                <div className="space-y-3 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <p>21. Adhere to the Securities and Exchange Board of India (Portfolio Managers) Regulations, 2020 and circulars issued from time to time related to distributors, distribution, advertising practices of Portfolio Management Services, etc.</p>
                                    <p>22. Maintain high standards of integrity, promptitude and fairness in the conduct of all their business.</p>
                                    <p>23. Act with due skill, care and diligence in the conduct of all their business.</p>
                                    <p>24. Consider investor's interest, risk profiling and suitability to their financial needs while marketing Portfolio Management Services.</p>
                                    <p>25. Take necessary steps to ensure that the clients’ interest is protected.</p>
                                    <p>26. Ensure that commission or incentive shall never form the basis for recommending Portfolio Management Services.</p>
                                    <p>27. Be fully conversant with the Disclosure Document, Investment Approaches, fees and charges and the terms of agreement to be entered between the client and the Portfolio Manager.</p>
                                    <p>28. Disclose to the clients all material information including the details of distribution commissions for various Investment Approaches.</p>
                                    <p>29. Assist clients in completing Know Your Client (“KYC”) and In-Person Verification related procedures.</p>
                                    <p>30. Provide full and latest information about investment approaches and also highlight the assumptions made in performance calculations, risk assessments, performance projections etc., if any, for such investment approaches.</p>
                                    <p>31. Inform the clients about the risks and level of control over the administration of Portfolio associated with the type of Portfolio Management Services offered (i.e. Discretionary, Non-discretionary or Advisory).</p>
                                    <p>32. Abstain from assuring returns in any type of Investment Approach and from any kind of mis-representation.</p>
                                    <p>33. Abstain from attracting clients through unethical means such as offer of rebate/gifts etc.</p>
                                    <p>34. Maintain necessary infrastructure to provide support to clients in timely receipt of disclosure document, statement of portfolio and performance, statement of fees, audit report, etc.</p>
                                    <p>35. Maintain confidentiality of clients’ details, deals and transactions, which they come to know in their business relationship.</p>
                                    <p>36. Abstain from making negative statements about other Portfolio Managers or Investment Approaches. Make comparisons, if any, only with the similar and comparable products along with complete facts.</p>
                                    <p>37. Not indulge in any manipulative, fraudulent or deceptive practices or spread rumours with a view to make personal gain.</p>
                                    <p>38. Hold valid NISM-Series-XXI-A: Portfolio Management Services (PMS) Distributors Certification, as specified by SEBI, at all times.</p>
                                </div>
                            </div>
                            {/* Code of Conduct for Distributors for MFs */}
                            <div className="mt-12 pt-8 mb-20">
                                <h3 className="font-bold mb-6 text-center" style={{ fontFamily: "PT Serif" }}>Code of Conduct for Distributors for MFs</h3>

                                <div className="space-y-4 text-justify" style={{ fontFamily: PoppinsRegular }}>
                                    <h4 className="font-bold underline mt-6">Purpose and Scope of the Code</h4>

                                    <div className="pl-6 space-y-3">
                                        <div className="flex">
                                            <span className="w-6 shrink-0">a.</span>
                                            <p>This Code of Conduct (“<span className="font-bold">Code</span>”) requires Mutual Fund Distributors to demonstrate the core values of being a fiduciary by establishing professional standards in their dealings with the investors, Asset Management Companies (“<span className="font-bold">AMCs</span>”), and other distributors so as to exemplify the values of transparency, competency, fairness, integrity and thereby seek to inspire and maintain trustworthiness in the profession of distribution of Mutual Fund schemes.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">b.</span>
                                            <p>This Code applies to all persons and entities who are registered with the Association of Mutual Funds in India (AMFI) as mutual fund distributors i.e. holders of AMFI Registration Number (“<span className="font-bold">ARN</span>”) (referred to as “<span className="font-bold">MFDs</span>” in this Code) and is binding on all the Directors/partners, members, sub-distributors, employees and representatives of the MFDs (collectively referred to as “<span className="font-bold">Representatives</span>” in this Code). The term “<span className="font-bold">MFDs</span>” is deemed to include the sales personnel of the MFDs engaged in marketing, sale and distribution of mutual fund products.</p>
                                        </div>
                                    </div>

                                    <h4 className="font-bold underline mt-8">II. Obligations of the MFDs</h4>

                                    <h5 className="font-bold mt-6">1. Fiduciary Duty</h5>

                                    <div className="pl-6 space-y-3 mt-3">
                                        <div className="flex">
                                            <span className="w-6 shrink-0">a.</span>
                                            <p>MFDs must consider investor’s interest as paramount and exercise due diligence, take proper care and exercise independent professional judgment in the best interest of the investor.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">b.</span>
                                            <p>MFDs should try to avoid conflict of interest as far as possible, and when it cannot be avoided, they shall ensure that appropriate disclosures are made to the investors, and that the investors are treated fairly. Further, while selling Mutual Fund products of their group/affiliate/associates, MFDs shall make appropriate disclosures to the investors regarding the conflict of interest arising from distribution of such Mutual Fund scheme.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">c.</span>
                                            <p>MFDs shall ensure that financial incentive should not form the basis for recommending any particular scheme or transaction to any investor. MFDs shall promote a culture of ethics and integrity within the organization, so as to dissuade unfair practices, conflicts, aggressive sales tactics and other inappropriate conduct directed to achieve sales targets in disregard of its fiduciary duty of care, diligence and loyalty.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">d.</span>
                                            <p>MFDs shall not rebate or pass-back commission to investors and shall refrain from attracting investors through inducement of rebate or gifts / gift-vouchers etc.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">e.</span>
                                            <div>
                                                <p className="mb-3">MFDs shall not collude or undertake malpractices such as:</p>
                                                <div className="pl-6 space-y-3">
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">i.</span>
                                                        <p>encouraging over transacting and churning of investments to earn higher commissions.</p>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">ii.</span>
                                                        <p>splitting applications to earn higher transaction charges / commissions.</p>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">iii.</span>
                                                        <p>participating in payment defaults (such as dishonoring of cheques) or diversion of funds.</p>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">iv.</span>
                                                        <p>making false claims for or participating in wrongful dividend / redemption payouts.</p>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">v.</span>
                                                        <p>carrying out unethical practices such as churning, selling unsuitable products to clients, selling of units of schemes of any mutual fund, directly or indirectly, by making false or misleading statements, concealing or omitting material facts of the scheme, concealing the associated risk factors of the schemes, etc.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className="font-bold mt-8">2. Compliance related obligations</h5>

                                    <div className="pl-6 space-y-3 mt-3">
                                        <div className="flex">
                                            <span className="w-6 shrink-0">a.</span>
                                            <p>MFDs shall adhere to Securities and Exchange Board of India (Mutual Funds) Regulations, 1996 (“<span className="font-bold">Mutual Fund Regulations</span>”) and guidelines/circulars issued by Securities and Exchange Board of India (“<span className="font-bold">SEBI</span>”) and AMFI, from time to time, pertaining to distributors, selling, distribution and advertising practices (including the preparation of sales promotional literature and content) and code of conduct. Performance disclosures should also comply with the requirements specified by SEBI. MFDs must also adhere to restrictions prescribed under other SEBI Regulations as may be applicable to their marketing, selling and distribution activities, for example, obligation on segregation of distribution and advisory services mandated under SEBI (Investment Advisers) Regulations, 2013.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">b.</span>
                                            <p>MFDs shall comply with the Know Your Distributor (“<span className="font-bold">KYD</span>”) norms prescribed by AMFI. MFDs shall be diligent in attesting / certifying investor documents and performing InPerson Verification (“<span className="font-bold">IPV</span>”) of investors for the KYC process in accordance with the guidelines prescribed by AMFI / KYC Registration Agency (“<span className="font-bold">KRA</span>”) from time to time.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">c.</span>
                                            <p>MFDs should endeavor to be fully conversant with the key provisions of the Scheme Information Document (“<span className="font-bold">SID</span>”), Statement of Additional Information (“<span className="font-bold">SAI</span>”) and Key Information Memorandum (“<span className="font-bold">KIM</span>”) as well as the operational requirements of various schemes and should explain to the investors the key features (including fundamental attributes) of the schemes and any risk associated therein.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">d.</span>
                                            <p>In order to assess suitability of the Mutual Fund scheme being marketed, the MFDs should seek information from their clients about their financial status, investment experience and investment objectives.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">e.</span>
                                            <p>MFDs shall ensure that their Representatives have the necessary education and experience to perform their respective services.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">f.</span>
                                            <div>
                                                <p className="mb-3">MFDs and their Representatives shall maintain confidentiality of all information relating to the AMCs and investors, and shall not:</p>
                                                <div className="pl-6 space-y-3 mb-3">
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">i.</span>
                                                        <p>share or publish such information in any private or public forum without prior written consent of the concerned AMC/investor</p>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">ii.</span>
                                                        <p>share or make any disclosure to any third party except pursuant to any filings or disclosures as may be required under applicable law or order of any court or regulatory body.</p>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">iii.</span>
                                                        <p>share data with Group Companies for cross marketing.</p>
                                                    </div>
                                                </div>
                                                <p>MFDs and their Representatives shall comply with the Data Sharing Principles prescribed by AMFI and the applicable laws on Personal Data Protection.</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">g.</span>
                                            <p>MFDs shall adhere to contractual agreements with AMC relating to data privacy to ensure that the data is always protected, used only for the purpose for which it was obtained and purged as soon as the data is no longer required to be stored for rendering services for which it was collected or stored securely.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">h.</span>
                                            <p>MFDs shall ensure that they and their sub-distributors are compliant with SEBI regulations, AMFI guidelines and code of conduct at all times and also that all their sub-distributors have a valid ARN. In other words, principal MFD should not engage or continue to engage a subdistributor whose ARN is rendered invalid.</p>
                                        </div>
                                    </div>

                                    <h5 className="font-bold mt-8">3. Infrastructure, record keeping and other related obligations</h5>

                                    <div className="pl-6 space-y-3 mt-3">
                                        <div className="flex">
                                            <span className="w-6 shrink-0">a.</span>
                                            <p><span className="font-bold">Physical Infrastructure:</span> MFDs should maintain necessary infrastructure to support the AMCs in maintaining high service standards to investors and ensure that critical operations such as forwarding /submission of forms and cheques etc. to AMCs/RTAs are appropriately supported.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">b.</span>
                                            <p><span className="font-bold">Digital Infrastructure:</span> In view of increased initiatives towards digitization of mode of performance of services, including new client on-boarding, transaction processing and ongoing servicing for investors, MFDs should adopt adequate information technology related infrastructure, including in relation to cyber security measures to maintain confidentiality of electronic data during collection, transmission and storage as well as to mitigate risks related to execution of Mutual Fund transactions through digital platforms.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">c.</span>
                                            <p><span className="font-bold">Internal control, financial and operational resources:</span> The MFDs should have internal control procedures and financial and operational systems and processes which can be reasonably expected to detect and prevent mis-selling as well as mitigate financial loss arising from fraud and other dishonest acts, professional misconduct or omissions, theft, or force majeure events. MFDs are encouraged to take up appropriate insurance coverage for their activities.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">d.</span>
                                            <p><span className="font-bold">Record keeping:</span> MFDs should maintain adequate records in relation to clients, whether in physical or digital form, as applicable, in compliance with the applicable laws and SEBI regulations, including KYC records as well as correspondence with the investors on particular scheme or transaction suitability and consent/dissent of the investors.</p>
                                        </div>
                                    </div>

                                    <h5 className="font-bold mt-8">4. Client related obligations</h5>

                                    <div className="pl-6 space-y-3 mt-3">
                                        <div className="flex">
                                            <span className="w-6 shrink-0">a.</span>
                                            <p>MFDs shall provide full and updated information on schemes, as provided to them by the AMCs, to the investors including SAI, SID, addenda, performance reports, fact sheets, portfolio disclosures and brochures. MFDs shall not deliberately withhold or omit any material fact or information supplied to them by the AMCs from any investor that the investor should know or may want to know, including information about particular scheme or transaction not being appropriate for the investor.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">b.</span>
                                            <p>MFDs shall highlight risk factors of each scheme to their investors, desist from making any misrepresentation or exaggerated statements or conceal associated risk factors of a scheme and shall advise and urge their investors to go through SAI/SID/KIM before deciding to make investments.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">c.</span>
                                            <p>MFDs shall disclose to the investors all material information including all commissions (in the form of trail commission or any other mode) received or receivable by them for the different competing schemes of various Mutual Funds from amongst which the scheme is being recommended to the investor.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">d.</span>
                                            <p>MFDs shall disclose to their clients the list of mutual funds they are affiliated with and inform to the clients that the information provided is limited to the mutual fund products that are being distributed/promoted by the MFDs and also inform the clients that the clients may also consider other alternate products, which are not being offered by the MFDs before making investment decision.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">e.</span>
                                            <p>If the MFD is an associate/group company/ sponsor of AMC of a mutual fund, the MFD shall, while providing suggestions to investor, disclose all material information about its association with the concerned AMC and the total amount of commission received/receivable.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">f.</span>
                                            <p>In terms of SEBI letter no. SEBI/IMD1/DoF-1/SK/2021/25517/1 dated September 06, 2021, MFDs cannot deal in Direct Plans. MFDs shall ensure that on any digital platform provided by MFD for offering investment facility to investor, it is categorically disclosed that the scheme the investor is subscribing to is of Regular Plan which involves payment of commission to MFD. The link for the rate of commission received or receivable by the MFD for the different competing schemes of various Mutual Funds shall be prominently displayed on the platform indicating the same as a hyperlink. Further, a link to the scheme offer documents (SID/SAI/KIM) shall also be prominently displayed on the concerned page.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">g.</span>
                                            <p>MFDs shall (i) not provide any indicative portfolio or indicative yield or indicative return for any particular scheme or transaction and (ii) abstain from indicating or assuring returns for any particular scheme or transaction.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">h.</span>
                                            <p>MFDs engaged in providing other financial services in addition to distribution of mutual fund products, where other financial products with assured return are being offered to clients, MFDs and their employees shall ensure that they do not mis-sell mutual fund products on the basis of indicative or assured return or regular income to the customers seeking to make investments. It shall be explained to the clients that MF investments are not guaranteed or assured return products and that the principal amount may be exposed to risk of loss.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">i.</span>
                                            <div>
                                                <p className="mb-3">To prevent submission of fraudulent, incomplete, tampered or incorrect forms or applications, MFDs shall set up adequate training and processes to ensure that:</p>
                                                <div className="pl-6 space-y-3">
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">(i)</span>
                                                        <p>information in the application forms (including address and contact details) is filled diligently with the investor’s own, accurate and complete information. Whether requested by the investor or not, the contact details / information of the MFDs’ Representatives or any other third party is not filled in the application forms, so as to pass-off as the information relating to the investor;</p>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">(ii)</span>
                                                        <p>any additions, revisions to the investor’s contact details /information is done only upon receipt of such information from the investor or the investor’s authorized person,</p>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">(iii)</span>
                                                        <p>application forms submitted by the investor are not tampered with, whether by inserting, deleting or modifying any information / field in the application forms,</p>
                                                    </div>
                                                    <div className="flex">
                                                        <span className="w-8 shrink-0">(iv)</span>
                                                        <p>EUIN of the concerned employee of the MFD is written on the application forms for identification.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">j.</span>
                                            <p>MFDs shall endeavor to resolve investor grievances/ complaints arising out of marketing, sale and distribution activities and shall provide complete assistance to the AMCs for redressal of grievances/ complaints.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">k.</span>
                                            <p>MFDs shall use marketing material as is provided to them by the AMCs and shall not design their own marketing materials in respect of any scheme or display the name, logo, mark of any AMC without the prior written approval of the AMC.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">l.</span>
                                            <p>MFDs shall draw attention of their clients to the disclosures made in the SID/SAI/ /KIM relating to general risks of investing through mutual fund schemes as well as scheme specific risks such as (i) returns being subject to market risk including loss of capital on account of market volatility, force majeure events, changes in political and economic environment, default by issuers of securities to mutual funds, bankruptcy or insolvency of issuers and potential segregation of portfolio by AMC in such circumstances; (ii) suspension of redemption facility in case the scheme faces liquidity crisis; (iii) risks associated with subscription to new fund offering of the scheme such as price volatility risk, liquidity risk and delisting risk; (iv) winding up of schemes on account of illiquid instruments, higher volume of redemption requests from the investors or on account of unforeseen market events.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">m.</span>
                                            <p>MFDs shall ensure that comparisons, if any, are made with similar and comparable schemes/ products along with complete facts.</p>
                                        </div>
                                    </div>

                                    <h5 className="font-bold underline mt-8">5. Other obligations</h5>

                                    <div className="pl-6 space-y-3 mt-3">
                                        <div className="flex">
                                            <span className="w-6 shrink-0">a.</span>
                                            <p>Individual MFDs shall obtain NISM certification and register themselves with AMFI and obtain ARN and Employee Unique Identification Number (EUIN) from AMFI. The NISM certification and AMFI registration shall be renewed on a timely basis. Non-individual MFDs shall register themselves with AMFI and obtain the ARN, and shall ensure that their sales personnel or Representatives engaged in marketing, sale and distribution of mutual fund products hold a valid NISM certificate (i.e NISM-Series-V-A) and AMFI registration / EUIN. Employees of the MFD in other functional areas should also be encouraged to obtain appropriate NISM certification. MFDs shall quote a valid ARN and EUIN in the client’s application / transaction feed, in order to place transactions in Regular Plan and receive commissions</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">b.</span>
                                            <p>MFDs shall ensure that their Representatives undergo training on proper conduct for their sales, marketing and distribution activities and focusing on (i) awareness and understanding of their fiduciary obligations towards investors, (ii) adequate procedures to be followed in performance of their functions so as to prevent and detect any frauds and errors, and (iii) responsible usage of social media platform with respect to content standards, authenticity and approval for the information , frequency of usage and other ethical practices.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">c.</span>
                                            <p>MFDs shall co-operate with and provide assistance, to AMCs, AMFI, SEBI, competent authorities, due diligence agencies appointed by AMFI/AMCs (as applicable) in relation to their services to the AMCs including by providing copies of relevant documents of the investors in their possession as may be required by AMCs from time to time or as may be called for by SEBI/AMFI / competent authority pursuant to any investigation or other proceeding.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">d.</span>
                                            <p>MFDs shall promptly intimate the AMC and AMFI any change in the MFD's status, constitution, address, contact details or any other information provided at the time of obtaining ARN.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">e.</span>
                                            <p>MFDs shall refund to the AMCs, (either by set off against future commissions or by payment) all incentives of any nature, including commissions received, that are subject to clawback as per SEBI regulations or the terms and conditions issued by the respective AMC.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">f.</span>
                                            <p>MFDs shall immediately notify the AMC and AMFI, in writing, if any of its Representatives has committed any act amounting to moral turpitude, financial irregularities or has been arrested by the police or whose employment/service has been terminated on account of any of the aforesaid bad acts.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">g.</span>
                                            <div>
                                                <p className="mb-3">Pursuant to Regulation 3 (3) of the SEBI (Investment Advisers) Regulations, 2013, MFDs shall not use terms such as Adviser / Advisor / Financial Adviser/ Investment Adviser/ Wealth Adviser/Wealth Manager/Wealth Managers, Consultant/s, etc. or any other similar name in their name, unless registered with SEBI as an Investment Adviser. The name of an MFD should reflect the registration held by the entity and should not in any way create an impression of performing a role for which the entity is not registered. The registered name of the MFD shall not contain any misleading phrase about the role of the entity. Thus, every MFD, while dealing in distribution of mutual fund schemes/products, should clearly specify to the client that he /she is acting as a MFD.</p>
                                                <p>MFDs shall mention/display a tagline, “AMFI-registered Mutual Fund Distributor” along with / below their name, in a clear and legible font of at least font size 12, in all forms of printed communication. MFD shall display their name and tagline in a clear and legible font in all forms of communication i.e., website, mobile app, printed or electronic materials, business card, sign board etc.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className="font-bold underline mt-8">6. Obligations towards integrity of the Mutual Fund industry</h5>

                                    <div className="pl-6 space-y-3 mt-3">
                                        <div className="flex">
                                            <span className="w-6 shrink-0">a.</span>
                                            <p>MFDs shall not indulge in fraudulent or unfair trade practices of any kind while marketing, selling or distributing any Mutual Fund scheme. MFDs and their Representatives must observe high standards of integrity and consistently conduct their dealings in a manner to uphold the professional image of the Mutual Fund industry.</p>
                                        </div>
                                        <div className="flex">
                                            <span className="w-6 shrink-0">b.</span>
                                            <p>MFDs, shall refrain from making false or defamatory statements about any AMC, AMFI, Mutual Fund schemes or other MFDs in any private or public forum (including chat groups, social media, print or electronic press, conferences etc.). MFDs shall maintain professional decorum, provide fair and balanced perspective and not participate in transmitting untrue statements or rumors so as to malign any AMC or Mutual Fund scheme or bring disrepute to any AMC, AMFI or the Mutual Fund industry. Any written or oral communication should be based on facts and be presented in an unbiased manner so as not to mislead the public.</p>
                                        </div>
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
                                <label htmlFor="agree-modal" className="text-sm font-medium text-black cursor-pointer select-none"
                                    style={{ fontFamily: PoppinsRegular }}>
                                    I have read and agree to the <span className="text-[#d4af37] font-bold">Terms &amp; Conditions</span>
                                </label>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 overflow-hidden">
                                <button
                                    disabled={!isAgreed || isGeneratingPdf}
                                    onClick={() => handleDownloadPdf()}
                                    className={`w-full sm:w-auto px-16 py-3 rounded text-xs font-bold uppercase transition-all shadow-md active:translate-y-0.5 ${isAgreed && !isGeneratingPdf
                                        ? "bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white hover:shadow-lg hover:-translate-y-0.5"
                                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        }`}
                                    style={{ fontFamily: "PT Serif" }}
                                >
                                    {isGeneratingPdf ? "Processing..." : "Accept & Continue"}
                                </button>
                            </div>

                            <div className="text-center gap-2">
                                <div className='flex w-full items-center'>
                                    <p className='flex border border-amber-300 w-full h-0'></p>
                                    <p className="lg:text-[25px] text-[14px] text-black w-500"
                                        style={{ fontFamily: "PT Serif" }}>Trust . Transparency . Transformation</p>
                                    <p className='flex border border-amber-300 w-full h-0'></p>
                                </div>
                            </div>

                            <div className="text-center gap-2">
                                <div className='flex flex-col justify-center items-center' style={{ fontFamily: PoppinsRegular }}>
                                    <p className='lg:text-[15px] text-[10px] text-black w-500'>CIN No. U66309MH2025PTC453786</p>
                                    <p className='lg:text-[15px] text-[10px] text-black w-80 md:w-500'>
                                        <LocationOnOutlinedIcon className="text-amber-300" fontSize="small" />
                                        IndusArtha Financial Services Pvt Ltd. 4th Floor, AWFIS, VIOS Tower Wadala, Mumbai-400037
                                    </p>
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
            {/* Left Branding Panel */}
            <div className="hidden lg:flex lg:w-[50%] relative bg-[#0a0a0a] overflow-hidden flex-shrink-0">
                <div
                    className="absolute inset-0 opacity-60 bg-cover bg-center mix-blend-screen"
                    style={{
                        backgroundImage: "url('https://res.cloudinary.com/dck5jgfix/image/upload/v1776406975/PartnersRegistration_bg_pscsqx.png')",
                        filter: "sepia(1) saturate(2) hue-rotate(5deg) brightness(0.6)",
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.1)_0%,_transparent_80%)]"></div>
                </div>
                <div className="relative z-10 w-full flex flex-col items-center justify-center p-12">
                    <img className="h-65 w-400" src="https://res.cloudinary.com/dck5jgfix/image/upload/v1776428641/TieVistaLogoW_ymkx1d.png" alt="TieVista Logo" />
                    <p className="text-white text-2xl tracking-[0.1em] font-light" style={{ fontFamily: PoppinsRegular }}>
                        Trust. Transparency. Transformation.
                    </p>
                </div>
            </div>

            {/* Right Form Section */}
            <div className="flex-1 bg-white overflow-hidden flex flex-col scrollbar-hide">
                <div
                    className={`flex w-[400%] h-screen scrollbar-hide transition-transform duration-700 ease-in-out ${showBankDetails ? "-translate-x-3/4" : showRegulatory ? "-translate-x-2/4" : showIdentity ? "-translate-x-1/4" : "translate-x-0"
                        }`}
                >
                    {/* Step 1: Registration */}
                    <div className="w-1/4 overflow-y-auto px-8 lg:px-12 py-8 flex justify-center">
                        <div className="w-full max-w-lg">
                            <div className="mb-0 text-center">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-2"
                                    style={{ fontFamily: "PT Serif" }}>
                                    Partner <span className="font-bold text-black">Registration</span>
                                </h2>
                                <p className="text-black text-sm md:text-base lg:text-lg"
                                    style={{ fontFamily: PoppinsRegular }}>
                                    Welcome to TieVista Partner Network
                                </p>
                                <div className="mt-8 border-b border-gray-200 w-full"></div>
                            </div>

                            <form onSubmit={handleSubmitReg(getUserRegister)} className="space-y-0">
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase"
                                        style={{ fontFamily: PoppinsRegular }}>
                                        NAME OF ENTITY<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        {...registerReg("entityName", { required: "Entity name is required" })}
                                        className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] focus:ring-0 outline-none transition-all placeholder:text-gray-300 text-[16px] text-black ${errorsReg.entityName ? "border-red-500" : "border-gray-300"}`}
                                    />
                                    {errorsReg.entityName && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.entityName.message}</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase"
                                        style={{ fontFamily: PoppinsRegular }}>
                                        ENTITY TYPE<span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative" ref={dropdownRef}>
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className={`w-full px-4 py-3 border rounded bg-white flex items-center justify-between transition-all text-sm ${errorsReg.entityType ? "border-red-500" : "border-gray-300"} ${isDropdownOpen ? "border-[#d4af37] ring-1 ring-[#d4af37]" : ""}`}
                                        >
                                            <span className={entityTypeValue ? "text-black" : "text-gray-400"}
                                                style={{ fontFamily: PoppinsRegular }}>{selectedEntityLabel}</span>
                                            <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#d4af37]" : ""}`} />
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
                                                {entityOptions.map((option) => (
                                                    <div
                                                        key={option.value}
                                                        onClick={() => { setValueReg("entityType", option.value, { shouldValidate: true }); setIsDropdownOpen(false); }}
                                                        className={`px-4 py-3 text-sm cursor-pointer transition-colors hover:bg-[#d4af37]/10 hover:text-[#b78628] ${entityTypeValue === option.value ? "bg-[#d4af37]/5 text-[#d4af37] font-medium" : "text-gray-700"}`}
                                                        style={{ fontFamily: PoppinsRegular }}
                                                    >
                                                        {option.label}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <input type="hidden" {...registerReg("entityType", { required: "Please select an entity type" })} />
                                    </div>
                                    {errorsReg.entityType && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.entityType.message}</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase"
                                        style={{ fontFamily: PoppinsRegular }}>
                                        ADDRESS<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        {...registerReg("address", { required: "Address is required" })}
                                        className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] focus:ring-0 outline-none transition-all placeholder:text-gray-300 text-[16px] text-black ${errorsReg.address ? "border-red-500" : "border-gray-300"}`}
                                    />
                                    {errorsReg.address && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.address.message}</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase"
                                        style={{ fontFamily: PoppinsRegular }}>
                                        CONTACT NO<span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative w-24 flex-shrink-0">
                                            <select className="w-full px-4 py-3 border border-gray-300 rounded appearance-none focus:border-[#d4af37] outline-none bg-white text-sm text-black"
                                                style={{ fontFamily: PoppinsRegular }}>
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
                                            className={`flex-1 px-2 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-[16px] text-black ${errorsReg.phone ? "border-red-500" : "border-gray-300"}`}
                                            maxLength={10}
                                        />
                                    </div>
                                    {errorsReg.phone && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.phone.message}</p>}
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase"
                                        style={{ fontFamily: PoppinsRegular }}>
                                        EMAIL ID<span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            {...registerReg("email", {
                                                required: "Email is required",
                                                pattern: { value: emailRegex, message: "Invalid email format" },
                                            })}
                                            onBlur={handleEmailBlur}
                                            className={`flex-1 px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-[16px] text-black ${errorsReg.email ? "border-red-500" : "border-gray-300"}`}
                                        />
                                        {(!isEmailVerified && emailValue && emailRegex.test(emailValue)) && (
                                            <button
                                                type="button"
                                                onClick={sendEmailOtp}
                                                disabled={isSendingOtp || showEmailOtp}
                                                className={`px-4 py-2 rounded text-xs font-bold transition-all uppercase tracking-wider ${(isSendingOtp || showEmailOtp)
                                                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                                        : "bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white"
                                                    }`}
                                            >
                                                {isSendingOtp ? "..." : (showEmailOtp ? "OTP Sent" : "Send OTP")}
                                            </button>
                                        )}
                                    </div>
                                    {errorsReg.email && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.email.message}</p>}
                                </div>
                                {/* Email OTP */}
                                {showEmailOtp && (
                                    <OtpSection
                                        onResend={sendEmailOtp}
                                        onFilled={setIsEmailOtpFilled}
                                        onVerify={handleVerifyEmailOtp}
                                        isVerified={isEmailVerified}
                                        isLoading={isVerifyingOtp}
                                    />
                                )}

                                {!showIdentity && (
                                    <div className="py-5 flex justify-center my-3.5">
                                        <button
                                            type="submit"
                                            className="w-full max-w-xs py-3.5 rounded-lg shadow-md transition-all font-bold text-sm tracking-widest uppercase bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                                            style={{ fontFamily: "PT Serif" }}
                                        >
                                            NEXT
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Step 2: Identity Details */}
                    <div className="w-1/4 overflow-y-auto px-8 lg:px-12 py-8 flex justify-center">
                        <div className="w-full max-w-lg">
                            {showIdentity && (
                                <div id="identity-details" className="pt-8 space-y-8 duration-700">
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-bold text-gray-800 tracking-widest uppercase"
                                            style={{ fontFamily: PoppinsRegular }}>IDENTITY DETAILS</h3>
                                        <div className="border-b border-gray-200 w-full"></div>
                                    </div>
                                    <form onSubmit={handleSubmitPan(getPan)} className="space-y-6">
                                        <div className="space-y-1.5">
                                            <label className="text-[14px] font-medium text-black tracking-wide uppercase"
                                                style={{ fontFamily: PoppinsRegular }}>PAN<span className="text-red-500">*</span></label>
                                            <input
                                                {...registerPan("pan", { required: "PAN required", pattern: panRegex, maxLength: { value: 10, message: "PAN must be 10 characters" } })}
                                                onChange={(e) => setValuePan("pan", e.target.value.toUpperCase(), { shouldValidate: true })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-[16px] uppercase text-black"
                                                placeholder="ABCDE1234F"
                                                maxLength={10}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[14px] font-medium text-black tracking-wide uppercase"
                                                style={{ fontFamily: PoppinsRegular }}>DOB<span className="text-red-500">*</span></label>
                                            <input
                                                {...registerPan("dob", { required: "DOB required", pattern: dobRegex })}
                                                onChange={(e) => {
                                                    let value = e.target.value.replace(/\D/g, "");
                                                    if (value.length > 2 && value.length <= 4) value = value.slice(0, 2) + "/" + value.slice(2);
                                                    else if (value.length > 4) value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
                                                    setValuePan("dob", value, { shouldValidate: true });
                                                }}
                                                className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-[16px] text-black"
                                                placeholder="DD/MM/YYYY"
                                            />
                                        </div>
                                        <div className="flex gap-3 items-start">
                                            <input type="checkbox" id="auth-check" className="mt-1 accent-[#d4af37] w-4 h-4 cursor-pointer"
                                                checked={isAuthorized} onChange={(e) => setIsAuthorized(e.target.checked)} />
                                            <label htmlFor="auth-check" className="text-[11px] text-gray-600 leading-relaxed cursor-pointer select-none"
                                                style={{ fontFamily: PoppinsRegular }}>
                                                I authorize TieVista Global Private Wealth (IndusArtha Financial Services Private Limited) to access and view my KYC data from the KRA for the purpose of availing financial product distribution services and becoming a registered partner with TieVista Global Private Wealth (IndusArtha Financial Services Private Limited).                                            </label>
                                        </div>
                                        <div className="flex justify-center pt-2">
                                            <button
                                                type="submit"
                                                disabled={!panValue || !dobValue || !isAuthorized || errorsPan.pan || errorsPan.dob}
                                                className={`w-full max-w-[200px] py-3 rounded-lg shadow-sm font-bold text-xs tracking-widest uppercase transition-all ${panValue && dobValue && isAuthorized && !errorsPan.pan && !errorsPan.dob
                                                    ? "bg-gradient-to-r from-[#e5bc4b] to-[#d4af37] text-white hover:shadow-md cursor-pointer"
                                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
                                                style={{ fontFamily: "PT Serif" }}
                                            >
                                                View Data
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Step 3: Regulatory Details */}
                    <div className="w-1/4 overflow-y-auto px-8 lg:px-12 py-8 flex justify-center">
                        <div className="w-full max-w-lg">
                            {showRegulatory && (
                                <div id="regulatory-details" className="pt-8 space-y-8 duration-700">
                                    <form onSubmit={handleSubmitRegulatory(getRegulatory)} className="space-y-6">
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-bold text-gray-800 tracking-widest uppercase"
                                                style={{ fontFamily: PoppinsRegular }}>REGULATORY DETAILS<span className="text-red-500">*</span></h3>
                                            <div className="border-b border-gray-200 w-full"></div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-4 w-full">
                                                <div className="flex-1 flex flex-col">
                                                    <input
                                                        {...registerRegulatory("arn", { required: "ARN is required", pattern: arnRegex, maxLength: { value: 6, message: "ARN must be 6 digits" } })}
                                                        placeholder="ARN (6 digits)" maxLength={7}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-[16px] text-black"
                                                    />
                                                    {errorsRegulatory.arn && <p className="text-red-500 text-xs mt-2">{errorsRegulatory.arn.message}</p>}
                                                </div>
                                                <div className="flex-1 flex flex-col">
                                                    <input
                                                        {...registerRegulatory("euinARN", { required: "EUIN is required example E12345", pattern: euinRegex, maxLength: { value: 6, message: "EUIN must be 6 characters" } })}
                                                        placeholder="EUIN (ARN)" maxLength={7}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-[16px] text-black"
                                                    />
                                                    {errorsRegulatory.euinARN && <p className="text-red-500 text-xs mt-2">{errorsRegulatory.euinARN.message}</p>}
                                                </div>
                                            </div>
                                            <div className="flex gap-4 w-full">
                                                <div className="flex-1 flex flex-col">
                                                    <input
                                                        {...registerRegulatory("aprn", { required: "APRN is required", pattern: aprnRegex, maxLength: { value: 5, message: "APRN must be 5 digits" } })}
                                                        placeholder="APRN (5 digits)" maxLength={5}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-[16px] text-black"
                                                    />
                                                    {errorsRegulatory.aprn && <p className="text-red-500 text-xs mt-2">{errorsRegulatory.aprn.message}</p>}
                                                </div>
                                                <div className="flex-1 flex flex-col">
                                                    <input
                                                        {...registerRegulatory("euinAprn", { required: "EUIN is required example E12345", pattern: euinRegex, maxLength: { value: 6, message: "EUIN must be 6 characters" } })}
                                                        placeholder="EUIN (APRN)" maxLength={6}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-[16px] text-black"
                                                    />
                                                    {errorsRegulatory.euinAprn && <p className="text-red-500 text-xs mt-2">{errorsRegulatory.euinAprn.message}</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-10 flex justify-center pb-12">
                                            <button type="submit"
                                                className="w-full max-w-xs py-3.5 bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all font-bold text-sm tracking-widest uppercase"
                                                style={{ fontFamily: "PT Serif" }}>
                                                PROCEED
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Step 4: Bank Details */}
                    <div className="w-1/4 h-full px-8 lg:px-12 py-12 flex flex-col justify-center items-center overflow-hidden">
                        <div className="w-full max-w-lg">
                            <div className="mb-10 text-center">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-2 font-bold tracking-tight"
                                    style={{ fontFamily: "PT Serif" }}>
                                    Bank Details
                                </h2>
                                <p className="text-black text-sm md:text-base lg:text-lg"
                                    style={{ fontFamily: PoppinsRegular }}>Enter your bank account information</p>
                                <div className="mt-8 border-b border-gray-200 w-full"></div>
                            </div>
                            <form onSubmit={handleSubmitBank(getBankDetails)} className="space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase"
                                        style={{ fontFamily: PoppinsRegular }}>BANK ACCOUNT NO<span className="text-red-500">*</span></label>
                                    <input
                                        {...registerBank("bankAccountNo", { required: "Account number is required" })}
                                        placeholder="000000000000"
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-[16px] text-black"
                                    />
                                    {errorsBank.bankAccountNo && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsBank.bankAccountNo.message}</p>}
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase"
                                        style={{ fontFamily: PoppinsRegular }}>IFSC CODE<span className="text-red-500">*</span></label>
                                    <input
                                        {...registerBank("ifscCode", {
                                            required: "IFSC Code is required",
                                            pattern: { value: /^[A-Z]{4}0\d{6}$/, message: "Invalid IFSC format (e.g., ABCD0123456)" }
                                        })}
                                        maxLength={11}
                                        onChange={(e) => setValueBank("ifscCode", e.target.value.toUpperCase())}
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-[16px] uppercase text-black"
                                        placeholder="ABCD0123456"
                                    />
                                    {errorsBank.ifscCode && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsBank.ifscCode.message}</p>}
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase"
                                        style={{ fontFamily: PoppinsRegular }}>Bank Name</label>
                                    <input
                                        {...registerBank("bankName", { pattern: { value: /^[a-zA-Z\s]+$/, message: "Invalid Bank Name" } })}
                                        maxLength={150}
                                        onChange={(e) => setValueBank("bankName", e.target.value.toUpperCase())}
                                        className="w-full px-4 py-3 border border-gray-300 rounded focus:border-[#d4af37] outline-none text-[16px] uppercase text-black"
                                        placeholder="Bank Name"
                                    />
                                    {errorsBank.bankName && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsBank.bankName.message}</p>}
                                </div>
                                <div className="pt-10 flex justify-center pb-12">
                                    <button type="submit"
                                        className="w-full max-w-xs py-4 bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all font-bold text-sm tracking-widest uppercase"
                                        style={{ fontFamily: "PT Serif" }}>
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