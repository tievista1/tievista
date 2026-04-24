import React from 'react'

const GiftCity = () => {
  const partners = [
    { name: "ICICI Prudential", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018886/ICICIPRUDENT_GIFTS_ny720k.png" },
    { name: "Mirae Asset", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018885/MIRAEASSET_GIFTS_akxmph.jpg" },
    { name: "Marcellus", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018884/MARCELLUS_GIFTS_g8kqie.jpg" },
    { name: "Franklin Templeton", src: "https://res.cloudinary.com/dck5jgfix/image/upload/v1777018883/FRANKLINTEMPLETON_GIFTS_yphfy3.png" }
  ];

  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-24">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 tracking-wide">
            GiftCity
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

export default GiftCity