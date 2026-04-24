import React from 'react'

const AIF = () => {
  const partners = [
    { name: "Alchemy Capital Management", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018793/ALCHEMY_AIF_lj1v7s.jpg" },
    { name: "Whiteoak Capital", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018792/WHITEOAK_AIF_ga6zae.jpg" },
    { name: "Ambit", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018792/AMBIT_AIF_cpqy4a.png" },
    { name: "TCG Asset Management", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018791/TCG_AIF_rlr30z.jpg" },
    { name: "ICICI Prudential Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018790/ICICIPRUDENT_AIF_vpepam.png" },
    { name: "SBI Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018790/SBI_AIF_uydnsa.jpg" },
    { name: "Dolat Capital", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018789/DOLATCAPITAL_AIF_jjfbxm.jpg" },
    { name: "Buoyant", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018788/BUOYANT_AIF_pptpqj.jpg" },
    { name: "Franklin Templeton", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018787/FRANKLINTEMPLETON_AIF_oxwsvw.png" },
    { name: "PGIM India Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018787/PGIM_AIF_bnskng.png" },
    { name: "Abakkus", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018787/ABAKKUS_AIF_vdqucf.jpg" }
  ];

  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-24">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 tracking-wide">
            AIF
          </h1>
          <div className="w-full h-[1.5px] bg-[#E5C367] max-w-6xl shadow-sm"></div>
        </div>

        {/* Logos Flex Container */}
        <div className="flex flex-wrap justify-center items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="w-1/2 md:w-1/4 h-32 md:h-44 flex items-center justify-center px-8 md:px-12 transition-all duration-500 hover:scale-110 cursor-pointer"
            >
              <img 
                src={partner.src} 
                alt={partner.name} 
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

export default AIF