import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

const PartnersSignup = () => {
    const {
        register,
        handleSubmit,
        trigger,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const [showIdentity, setShowIdentity] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [showMobileOtp, setShowMobileOtp] = useState(false);
    const [showEmailOtp, setShowEmailOtp] = useState(false);
    const [isMobileOtpFilled, setIsMobileOtpFilled] = useState(false);
    const [isEmailOtpFilled, setIsEmailOtpFilled] = useState(false);

    useEffect(() => {
        document.body.classList.add('scrollbar-hide');
        return () => document.body.classList.remove('scrollbar-hide');
    }, []);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const passwordRegex = /^[A-Z](?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?!.*\s).{7,}$/;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    const arnRegex = /^\d{6}$/;
    const aprnRegex = /^\d{5}$/;
    const euinRegex = /^[A-Z]{1}\d{5}$/;

    const phoneValue = watch("phone");
    const emailValue = watch("email");
    const panValue = watch("pan");
    const dobValue = watch("dob");
    const arnValue = watch("arn");
    const euinValue = watch("euin");
    const aprnValue = watch("aprn");
    const euinAprnValue = watch("euinAprn");

    const handlePhoneBlur = async () => {
        const result = await trigger("phone");
        if (result && phoneRegex.test(phoneValue)) {
            setShowMobileOtp(true);
        } else {
            setShowMobileOtp(false);
        }
    };

    const handleEmailBlur = async () => {
        const result = await trigger("email");
        if (result && emailRegex.test(emailValue)) {
            setShowEmailOtp(true);
        } else {
            setShowEmailOtp(false);
        }
    };

    const onSubmit = (data) => {
        if (!showIdentity) {
            setShowIdentity(true);
            setTimeout(() => {
                const element = document.getElementById("identity-details");
                element?.scrollIntoView({ behavior: "smooth" });
            }, 100);
            return;
        }
        console.log("Full Form Data:", data);
        alert("Registration Successful!");
    };

    const OtpSection = ({ onResend, onFilled }) => {
        const [values, setValues] = useState(new Array(6).fill(""));

        const handleChange = (e, index) => {
            const val = e.target.value;
            if (val.length > 1) return;
            const newValues = [...values];
            newValues[index] = val;
            setValues(newValues);

            // Notify parent if all 6 are filled
            const isFilled = newValues.every(v => v !== "");
            onFilled(isFilled);

            if (val && e.target.nextSibling) {
                e.target.nextSibling.focus();
            }
        };

        return (
            <div className="flex items-center gap-3 my-2 animate-in fade-in slide-in-from-top-2 duration-500">
                <div className="flex gap-2">
                    {values.map((v, idx) => (
                        <input
                            key={idx}
                            type="text"
                            maxLength={1}
                            value={v}
                            onChange={(e) => handleChange(e, idx)}
                            className="w-10 h-10 border border-gray-300 rounded-md text-center text-lg focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all shadow-sm"
                            onKeyDown={(e) => {
                                if (e.key === "Backspace" && !e.target.value && e.target.previousSibling) {
                                    e.target.previousSibling.focus();
                                }
                            }}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    onClick={onResend}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#e5bc4b] to-[#d4af37] hover:scale-105 text-white px-5 py-2.5 rounded shadow-md text-[11px] font-bold transition-all active:scale-95 uppercase tracking-wider"
                >
                    <Send size={14} className="fill-white" />
                    RESEND
                </button>
            </div>
        );
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-white scrollbar-hide">

            {/* Left Branding Panel */}
            <div className="hidden lg:flex lg:w-[50%] relative bg-[#0a0a0a] overflow-hidden flex-shrink-0 lg:sticky lg:top-[60px] lg:h-[calc(100vh-60px)]">
                <div
                    className="absolute inset-0 opacity-60 bg-cover bg-center mix-blend-screen"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')",
                        filter: "sepia(1) saturate(2) hue-rotate(5deg) brightness(0.6)",
                    }}
                ></div>

                {/* Animated Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.1)_0%,_transparent_80%)]"></div>
                </div>

                <div className="relative z-10 w-full flex flex-col items-center justify-center p-12 space-y-4">
                    <div className="relative mb-4">
                        <div className="w-32 h-32 rounded-full border-2 border-white/90 p-1 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            <div className="w-full h-full rounded-full border border-white/40 flex items-center justify-center">
                                <span className="text-white text-7xl font-serif translate-y-[-2px]">T</span>
                            </div>
                        </div>
                        <div className="absolute -inset-6 border border-[#d4af37]/20 rounded-full animate-pulse-slow"></div>
                    </div>

                    <div className="text-center space-y-6">
                        <h1 className="text-7xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                            TIEVISTA
                        </h1>
                        <p className="text-gray-200 text-lg tracking-[0.1em] font-light">
                            Trust. Transparency. Transformation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Form Section */}
            <div className="flex-1 bg-white scrollbar-hide">
                <div className="min-h-full flex flex-col items-center justify-center p-8 lg:p-12">
                    <div className="w-full max-w-lg">
                        <div className="mb-8 text-center">
                            <h2 className="text-5xl font-serif text-[#1a1a1a] mb-2 font-bold tracking-tight">Partner Registration</h2>
                            <p className="text-gray-600 text-lg font-medium opacity-80">Welcome to TieVista Partner Network</p>
                            <div className="mt-8 border-b border-gray-200 w-full"></div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name of Entity */}
                            <div className="space-y-1.5">
                                <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase flex items-center gap-0.5">
                                    NAME OF ENTITY<span className="text-red-500">*</span>
                                </label>
                                <input
                                    {...register("entityName", { required: "Entity name is required" })}
                                    className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] focus:ring-0 outline-none transition-all placeholder:text-gray-300 text-sm ${errors.entityName ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder=""
                                />
                                {errors.entityName && (
                                    <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.entityName.message}</p>
                                )}
                            </div>

                        {/* Entity Type */}
                        <div className="space-y-1.5">
                            <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                ENTITY TYPE<span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    {...register("entityType", { required: "Please select an entity type" })}
                                    className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none bg-white appearance-none transition-all text-sm ${errors.entityType ? "border-red-500" : "border-gray-300"
                                        }`}
                                >
                                    <option value="">Select your entity</option>
                                    <option value="individual">Individual / Proprietor</option>
                                    <option value="partnership">Partnership Firm</option>
                                    <option value="pvt-ltd">Private Limited Company</option>
                                    <option value="llp">Limited Liability Partnership (LLP)</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                            {errors.entityType && (
                                <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.entityType.message}</p>
                            )}
                        </div>

                        {/* Contact No */}
                        <div className="space-y-1.5">
                            <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                CONTACT NO<span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-3">
                                <div className="relative w-24 flex-shrink-0">
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded appearance-none focus:border-[#d4af37] outline-none bg-white text-sm">
                                        <option>+91</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                                </div>
                                <input
                                    {...register("phone", {
                                        required: "Mobile number is required",
                                        pattern: { value: phoneRegex, message: "Invalid 10-digit number" },
                                    })}
                                    onBlur={handlePhoneBlur}
                                    className={`flex-1 px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm ${errors.phone ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder=""
                                    maxLength={10}
                                />
                            </div>
                            {errors.phone && (
                                <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.phone.message}</p>
                            )}
                        </div>

                        {/* Mobile OTP */}
                        {showMobileOtp && <OtpSection onResend={() => alert("Mobile OTP Resent")} onFilled={setIsMobileOtpFilled} />}

                        {/* Email Id */}
                        <div className="space-y-1.5">
                            <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                EMAIL ID<span className="text-red-500">*</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: emailRegex, message: "Invalid email format" },
                                })}
                                onBlur={handleEmailBlur}
                                className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm ${errors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder=""
                            />
                            {errors.email && (
                                <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Email OTP */}
                        {showEmailOtp && <OtpSection onResend={() => alert("Email OTP Resent")} onFilled={setIsEmailOtpFilled} />}

                        {/* Password */}
                        <div className="space-y-1.5">
                            <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                PASSWORD<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    pattern: {
                                        value: passwordRegex,
                                        message: "Start with Capital, 8+ chars, mix of number & symbol, no spaces"
                                    }
                                })}
                                className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all text-sm ${errors.password ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder=""
                            />
                            {errors.password && (
                                <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.password.message}</p>
                            )}
                        </div>
                        {/* Confirm Password */}
                        <div className="space-y-1.5">
                            <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                CONFIRM PASSWORD<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                {...register("confirmPassword", {
                                    required: "Please confirm password",
                                    validate: (val) => watch("password") === val || "Passwords do not match",
                                })}
                                className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all text-sm ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                                    }`}
                                placeholder=""
                            />
                            {errors.confirmPassword && (
                                <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.confirmPassword.message}</p>
                            )}
                        </div>

                        {/* Submit Part 1 */}
                        {!showIdentity && (
                            <div className="pt-4 flex justify-center">
                                <button
                                    type="submit"
                                    disabled={!isMobileOtpFilled || !isEmailOtpFilled}
                                    className={`w-64 py-3 rounded shadow-md transition-all font-bold text-sm tracking-widest uppercase ${
                                        isMobileOtpFilled && isEmailOtpFilled
                                        ? "bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                    Proceed
                                </button>
                            </div>
                        )}

                        {showIdentity && (
                            <div id="identity-details" className="pt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                {/* Identity Details Header */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-gray-800 tracking-widest uppercase">IDENTITY DETAILS</h3>
                                    <div className="border-b border-gray-200 w-full"></div>
                                </div>

                                <div className="space-y-6">
                                    {/* PAN */}
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                            PAN<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            {...register("pan", {
                                                required: "PAN is required",
                                                pattern: { value: panRegex, message: "Format: 5 letters, 4 digits, 1 letter (e.g. ABCDE1234F)" },
                                                maxLength: { value: 10, message: "PAN must be 10 characters" }
                                            })}
                                            maxLength={10}
                                            className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm ${errors.pan ? "border-red-500" : "border-gray-300"}`}
                                            placeholder="ABCDE1234F"
                                        />
                                        {errors.pan && (
                                            <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.pan.message}</p>
                                        )}
                                    </div>

                                    {/* DOB */}
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                            DATE OF BIRTH<span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            {...register("dob", {
                                                required: "DOB is required",
                                                pattern: { value: dobRegex, message: "Use DD/MM/YYYY format" }
                                            })}
                                            className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm ${errors.dob ? "border-red-500" : "border-gray-300"}`}
                                            placeholder="DD/MM/YYYY"
                                        />
                                        {errors.dob && (
                                            <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.dob.message}</p>
                                        )}
                                    </div>

                                    {/* Authorization Checkbox */}
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

                                    {/* Fetch Data Button */}
                                    <div className="flex justify-center pt-2">
                                        <button
                                            type="button"
                                            disabled={!panValue || !dobValue || !isAuthorized || errors.pan || errors.dob}
                                            className={`w-48 py-2.5 rounded shadow-sm font-bold text-xs tracking-widest uppercase transition-all ${
                                                panValue && dobValue && isAuthorized && !errors.pan && !errors.dob
                                                ? "bg-gradient-to-r from-[#e5bc4b] to-[#d4af37] text-white hover:shadow-md cursor-pointer"
                                                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                            }`}
                                            onClick={() => alert("Fetching KYC Data...")}
                                        >
                                            Fetch Data
                                        </button>
                                    </div>

                                    {/* Regulatory Details Header */}
                                    <div className="pt-8 space-y-4">
                                        <h3 className="text-sm font-bold text-gray-800 tracking-widest uppercase">REGULATORY DETAILS</h3>
                                        <div className="border-b border-gray-200 w-full"></div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            {/* ARN */}
                                            <div className="space-y-1.5">
                                                <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                                    ARN<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    {...register("arn", {
                                                        required: showIdentity ? "ARN is required" : false,
                                                        pattern: { value: arnRegex, message: "ARN must be exactly 6 digits" },
                                                        maxLength: { value: 6, message: "ARN must be 6 digits" }
                                                    })}
                                                    maxLength={6}
                                                    className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm ${errors.arn ? "border-red-500" : "border-gray-300"}`}
                                                    placeholder="123456"
                                                />
                                            </div>
                                            {/* EUIN */}
                                            <div className="space-y-1.5">
                                                <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                                    EUIN<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    {...register("euin", {
                                                        required: showIdentity ? "EUIN is required" : false,
                                                        pattern: { value: euinRegex, message: "One letter followed by 5 digits (e.g., E12345)" },
                                                        maxLength: { value: 6, message: "EUIN must be 6 characters" }
                                                    })}
                                                    maxLength={6}
                                                    className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm ${errors.euin ? "border-red-500" : "border-gray-300"}`}
                                                    placeholder="E12345"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mt-2">
                                            {/* APRN */}
                                            <div className="space-y-1.5">
                                                <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                                    APRN<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    {...register("aprn", {
                                                        required: showIdentity ? "APRN is required" : false,
                                                        pattern: { value: aprnRegex, message: "APRN must be exactly 5 digits" },
                                                        maxLength: { value: 5, message: "APRN must be 5 digits" }
                                                    })}
                                                    maxLength={5}
                                                    className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm ${errors.aprn ? "border-red-500" : "border-gray-300"}`}
                                                    placeholder="12345"
                                                />
                                            </div>
                                            {/* EUIN (APRN) */}
                                            <div className="space-y-1.5">
                                                <label className="text-[12px] font-bold text-[#333] tracking-widest uppercase">
                                                    EUIN<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    {...register("euinAprn", {
                                                        required: showIdentity ? "EUIN is required" : false,
                                                        pattern: { value: euinRegex, message: "One letter followed by 5 digits (e.g., E12345)" },
                                                        maxLength: { value: 6, message: "EUIN must be 6 characters" }
                                                    })}
                                                    maxLength={6}
                                                    className={`w-full px-4 py-3 border rounded focus:border-[#d4af37] outline-none transition-all placeholder:text-gray-300 text-sm ${errors.euinAprn ? "border-red-500" : "border-gray-300"}`}
                                                    placeholder="E12345"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Final Submit */}
                                    <div className="pt-10 flex justify-center pb-12">
                                        <button
                                            type="submit"
                                            className="w-64 py-3 bg-gradient-to-r from-[#e5bc4b] via-[#d4af37] to-[#b78628] text-white rounded shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all font-bold text-sm tracking-widest uppercase"
                                        >
                                            Proceed
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </div>
);
};

export default PartnersSignup;