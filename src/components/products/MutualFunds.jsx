import React from 'react'

const MutualFunds = () => {
  const funds = [
    { name: "PGIM India Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018919/PGIM_MF_goyyzr.png" },
    { name: "Groww", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018918/GROWW_MF_ghjbsr.png" },
    { name: "Quantum Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018917/QUANTUM_MF_hygmvt.png" },
    { name: "Shriram Finance", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018916/SHRIRAM_MF_e6nmzg.jpg" },
    { name: "HDFC Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018916/HDFC_MF_gpj0yd.png" },
    { name: "IDFC FIRST Bank", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018914/IDFC_MF_zqjudy.png" },
    { name: "Kotak Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018914/KOTAK_MF_cqrwz2.png" },
    { name: "Axis Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018913/AXIS_MF_rmuqbl.jpg" },
    { name: "SBI Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018913/SBI_MF_mnccbh.jpg" },
    { name: "Franklin Templeton", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018912/FRANKLINTEMPLETON_MF_psuuwg.jpg" },
    { name: "Abakkus", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018911/ABAKKUS_MF_tm4wxs.jpg" },
    { name: "Canara Bank", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018910/CANARA_MF_flcwv4.jpg" },
    { name: "Whiteoak Capital", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018909/WHITEOAK_MF_h3bogr.jpg" },
    { name: "Mirae Asset", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018908/MIRAEASSET_MF_wkphw0.jpg" },
    { name: "Old Bridge Asset Management", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018908/OLDBRIDGE_MF_igzrw1.png" },
    { name: "DSP Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018907/DSP_MF_m7zdp3.jpg" },
    { name: "Edelweiss Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018906/EDELWEISS_MF_djop7j.png" },
    { name: "Nippon India Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018905/NIPPONINDIA_MF_lujl6q.jpg" },
    { name: "Tata Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018904/TATA_MF_jvpurj.png" },
    { name: "PPFAS Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018903/PPFAS_MF_iixvtu.jpg" },
    { name: "Invesco Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018902/INVESCO_MF_sysace.jpg" },
    { name: "HSBC Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018902/HSBC_MF_n31m5m.jpg" },
    { name: "Sundaram Mutual", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018900/SUNDARAM_MF_ma8c44.jpg" },
    { name: "Birla Sun Life Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018900/BIRLASUNLIFE_MF_ql5rit.png" },
    { name: "ICICI Prudential Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018899/ICICIPRUDENT_MF_mznme0.png" },
    { name: "Helios Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018898/HELIOS_MF_vwa5xm.png" },
    { name: "IDFC Limited", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018898/IDFCLIMITED_MF_pnf8or.png" },
    { name: "Quant Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018897/QUANT_MF_nkfrhe.jpg" }
  ];

  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-24">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 tracking-wide">
            Mutual Funds
          </h1>
          <div className="w-full h-[1.5px] bg-[#E5C367] max-w-6xl shadow-sm"></div>
        </div>

        {/* Logos Flex Container */}
        <div className="flex flex-wrap justify-center items-center">
          {funds.map((fund, index) => (
            <div 
              key={index} 
              className="w-1/2 md:w-1/4 h-32 md:h-44 flex items-center justify-center px-8 md:px-12 transition-all duration-500 hover:scale-110 cursor-pointer"
            >
              <img 
                src={fund.src} 
                alt={fund.name} 
                className="max-w-full max-h-[70%] md:max-h-[80%] w-auto h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MutualFunds