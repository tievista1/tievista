import React from 'react'

const PMS = () => {
  const partners = [
    { name: "Helios", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019085/HELIOS_PMS_a6xukw.png" },
    { name: "Alchemy Capital Management", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019084/ALCHEMY_PMS_bebjwd.jpg" },
    { name: "Ambit", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019083/AMBIT_PMS_ew3cqb.png" },
    { name: "PGIM India Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019082/PGIM_PMS_yteli6.png" },
    { name: "TCG Asset Management", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019081/TCG_PMS_ojsvh1.jpg" },
    { name: "AAA (Alfaccurate Advisors)", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019081/AAA_PMS_wedav4.jpg" },
    { name: "ICICI Prudential Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019080/ICICIPRUDENT_PMS_ljr0sh.png" },
    { name: "Whiteoak Capital", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019079/WHITEOAK_PMS_nefzcb.jpg" },
    { name: "Carnelian", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019078/CARNELIAN_PMS_tbnlmq.png" },
    { name: "SBI Mutual Fund", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019077/SBI_PMS_jfemfl.jpg" },
    { name: "Dolat Capital", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019076/DOLATCAPITAL_PMS_fwghli.jpg" },
    { name: "Equitree", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019075/EQUITREE_PMS_jzxaml.png" },
    { name: "Buoyant", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019074/BUOYANT_PMS_tuocao.jpg" },
    { name: "ABSL", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019073/ABSL_PMS_ohdc2z.png" },
    { name: "Marcellus", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019072/MARCELLUS_PMS_iypk0a.jpg" },
    { name: "Abakkus", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777019071/ABAKKUS_PMS_z8xirz.jpg" },
    { name: "Rostrum Grand", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777025314/ROSTRUMGRAND_PMS_jpzpjs.png" },
  ];

  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-24">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 tracking-wide">
            PMS
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

export default PMS