import React from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, User, FileText, MapPin, Hash, ArrowRight } from 'lucide-react';

// Reusable error component for consistent validation messaging
function FieldError({ error }) {
  return (
    <AnimatePresence>
      {error && (
        <motion.p
          className="text-red-500 text-[0.7rem] mt-1"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          {error.message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

const BankDetails = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log("Bank Details Submitted:", data);
        alert("Bank Details Submitted Successfully!");
    };

    return (
        <div className="flex min-h-screen bg-white font-sans selection:bg-[#d4af37]/30">
            {/* Left Panel: Brand Visuals and Office Context */}
            <div className="hidden lg:flex w-[45%] relative overflow-hidden items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')" 
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center flex flex-col items-center p-12">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/TieVistaLogoD.png" alt="TieVista Logo" className="w-[30rem] h-auto mb-4" />
                    </motion.div>
                </div>
            </div>

            {/* Right Panel: Bank Details Entry Form */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-16 bg-[#FDFDFD]">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full max-w-xl bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl relative overflow-hidden"
                >
                    {/* Subtle Top Border/Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>Bank Details</h2>
                        <p className="text-gray-500 text-sm font-medium tracking-wide">Enter your bank account information</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="h-[1px] bg-gray-100 w-full mb-8" />

                        {/* BANK NAME */}
                        <div>
                            <label className="block text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-gray-700 mb-2">
                                Bank Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                                    <Landmark className="w-4 h-4" />
                                </div>
                                <input
                                    {...register("bankName", { required: "Bank name is required" })}
                                    className="w-full border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/10 transition-all text-gray-700 font-medium placeholder:text-gray-300"
                                    placeholder="Enter your bank's name"
                                />
                            </div>
                            <FieldError error={errors.bankName} />
                        </div>

                        {/* ACCOUNT HOLDER NAME */}
                        <div>
                            <label className="block text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-gray-700 mb-2">
                                Account Holder Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                                    <User className="w-4 h-4" />
                                </div>
                                <input
                                    {...register("accountHolderName", { required: "Account holder name is required" })}
                                    className="w-full border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/10 transition-all text-gray-700 font-medium placeholder:text-gray-300"
                                    placeholder="Enter name as per bank records"
                                />
                            </div>
                            <FieldError error={errors.accountHolderName} />
                        </div>

                        {/* ACCOUNT NUMBER */}
                        <div>
                            <label className="block text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-gray-700 mb-2">
                                Account No <span className="text-red-500">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                                    <Hash className="w-4 h-4" />
                                </div>
                                <input
                                    {...register("accountNo", { 
                                        required: "Account number is required",
                                        pattern: { value: /^\d+$/, message: "Invalid account number" }
                                    })}
                                    className="w-full border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/10 transition-all text-gray-700 font-medium placeholder:text-gray-300"
                                    placeholder="Enter bank account number"
                                />
                            </div>
                            <FieldError error={errors.accountNo} />
                        </div>

                        {/* BRANCH ADDRESS */}
                        <div>
                            <label className="block text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-gray-700 mb-2">
                                Branch Address <span className="text-red-500">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <input
                                    {...register("branchAddress", { required: "Branch address is required" })}
                                    className="w-full border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/10 transition-all text-gray-700 font-medium placeholder:text-gray-300"
                                    placeholder="e.g. MG Road, Mumbai"
                                />
                            </div>
                            <FieldError error={errors.branchAddress} />
                        </div>

                        {/* IFSC and MICR Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-gray-700 mb-2">
                                    IFSC Code <span className="text-red-500">*</span>
                                </label>
                                <input
                                    {...register("ifscCode", { 
                                        required: "IFSC is required",
                                        pattern: { value: /^[A-Z]{4}0[A-Z0-9]{6}$/, message: "Invalid format (e.g. HDFC0001234)" }
                                    })}
                                    className="w-full border border-gray-200 rounded-xl py-3.5 px-4 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/10 transition-all text-gray-700 font-medium placeholder:text-gray-300 uppercase"
                                    placeholder="ABCD0123456"
                                />
                                <FieldError error={errors.ifscCode} />
                            </div>
                            <div>
                                <label className="block text-[0.7rem] font-extrabold uppercase tracking-[0.15em] text-gray-700 mb-2">
                                    MICR Code <span className="text-red-500">*</span>
                                </label>
                                <input
                                    {...register("micrCode", { 
                                        required: "MICR is required",
                                        pattern: { value: /^\d{9}$/, message: "Must be 9 digits" }
                                    })}
                                    className="w-full border border-gray-200 rounded-xl py-3.5 px-4 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/10 transition-all text-gray-700 font-medium placeholder:text-gray-300"
                                    placeholder="123456789"
                                />
                                <FieldError error={errors.micrCode} />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full h-14 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg
                                           bg-gradient-to-r from-[#F3D34F] to-[#E0B12D] text-white
                                           hover:bg-[linear-gradient(to_right,#F3D34F,#D59D1C,#F5D958,#E0B12D)] hover:text-black flex items-center justify-center gap-3 group"
                            >
                                Submit Details
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>

                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default BankDetails;
