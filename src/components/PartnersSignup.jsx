import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

// OTP Section Component - Extracted for modularity
const OtpSection = ({ onResend, onFilled }) => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);

    useEffect(() => {
        const allFilled = otp.every((digit) => digit !== "");
        onFilled(allFilled);
    }, [otp, onFilled]);

    const handleChange = (index, value) => {
        if (value.length > 1) value = value[0];
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

    return (
        <div className="flex items-center gap-2 sm:gap-3 my-2 animate-in fade-in slide-in-from-top-2 duration-500">
            <div className="flex gap-1.5 sm:gap-2">
                {otp.map((digit, idx) => (
                    <input
                        key={idx}
                        ref={(el) => (inputRefs.current[idx] = el)}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 rounded-md text-center text-base sm:text-lg focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all shadow-sm flex-shrink-0 text-black"
                    />
                ))}
            </div>
            <button
                type="button"
                onClick={onResend}
                className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#e5bc4b] to-[#d4af37] hover:scale-105 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded shadow-md text-[9px] sm:text-[11px] font-bold transition-all active:scale-95 uppercase tracking-wider flex-shrink-0"
            >
                <Send size={12} className="fill-white sm:w-[14px] sm:h-[14px]" />
                RESEND
            </button>
        </div>
    );
};

const PartnersSignup = () => {
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

    const [showIdentity, setShowIdentity] = useState(false);
    const [showBankDetails, setShowBankDetails] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [showMobileOtp, setShowMobileOtp] = useState(false);
    const [showEmailOtp, setShowEmailOtp] = useState(false);
    const [isMobileOtpFilled, setIsMobileOtpFilled] = useState(false);
    const [isEmailOtpFilled, setIsEmailOtpFilled] = useState(false);

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
        { value: "individual", label: "Individual / Proprietor" },
        { value: "partnership", label: "Partnership Firm" },
        { value: "pvt-ltd", label: "Private Limited Company" },
        { value: "llp", label: "Limited Liability Partnership (LLP)" },
    ];

    const selectedEntityLabel = entityOptions.find((opt) => opt.value === entityTypeValue)?.label || "Select your entity";

    const handlePhoneBlur = async () => {
        const result = await triggerReg("phone");
        if (result && phoneRegex.test(phoneValue)) {
            setShowMobileOtp(true);
        } else {
            setShowMobileOtp(false);
        }
    };

    const handleEmailBlur = async () => {
        const result = await triggerReg("email");
        if (result && emailRegex.test(emailValue)) {
            setShowEmailOtp(true);
        } else {
            setShowEmailOtp(false);
        }
    };

    // Submissions Handlers
    const getUserRegister = (data) => {
        console.log("User Registration Data:", data);
        setShowIdentity(true);
        setTimeout(() => {
            const element = document.getElementById("identity-details");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    const getPan = (data) => {
        console.log("Identity (PAN/DOB) Data:", data);
        alert("PAN Details captured!");
    };

    const getRegulatory = (data) => {
        console.log("Regulatory Data:", data);
        setShowBankDetails(true);
    };

    const getBankDetails = (data) => {
        console.log("Bank details submitted:", data);
        alert("Bank Details Submitted successfully!");
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
            <div className="flex-1 bg-white overflow-hidden flex flex-col">
                <div
                    className={`flex w-[200%] h-screen transition-transform duration-700 ease-in-out ${showBankDetails ? "-translate-x-1/2" : "translate-x-0"
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

                                {/* Contact No */}
                                <div className="space-y-1.5">
                                    <label className="text-[14px] font-medium text-black tracking-wide uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        CONTACT NO<span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-3">
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
                                            className={`flex-1 px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm text-black ${errorsReg.phone ? "border-red-500" : "border-gray-300"
                                                }`}
                                            maxLength={10}
                                        />
                                    </div>
                                    {errorsReg.phone && <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsReg.phone.message}</p>}
                                </div>

                                {/* Mobile OTP */}
                                {showMobileOtp && (
                                    <OtpSection onResend={() => alert("Mobile OTP Resent")} onFilled={setIsMobileOtpFilled} />
                                )}

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

                                {/* Email OTP */}
                                {showEmailOtp && (
                                    <OtpSection onResend={() => alert("Email OTP Resent")} onFilled={setIsEmailOtpFilled} />
                                )}

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
                                    <div className="pt-6 flex justify-center">
                                        <button
                                            type="submit"
                                            disabled={!isMobileOtpFilled || !isEmailOtpFilled}
                                            className={`w-full max-w-xs py-3.5 rounded-lg shadow-md transition-all font-bold text-sm tracking-widest uppercase ${isMobileOtpFilled && isEmailOtpFilled
                                                ? "bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white hover:shadow-lg hover:-translate-y-0.5"
                                                : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                }`}
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
                                            <label className="text-[14px] font-medium text-black tracking-wide uppercase">PAN*</label>
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
                                            <label className="text-[14px] font-medium text-black tracking-wide uppercase">DOB*</label>
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
                                                I Authorize TieVista <span className="italic">(IndusArtha Financial Services Pvt Ltd)</span> to fetch my KYC data from KRA for the purpose of availing Financial Products Distribution service and to become Registered Partner with TieVista <span className="italic">(IndusArtha Financial Services Pvt Ltd)</span>.
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
                                        placeholder="ABCD1234567"
                                    />
                                    {errorsBank.ifscCode && (
                                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errorsBank.ifscCode.message}</p>
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
        </div>
    );
};

export default PartnersSignup;