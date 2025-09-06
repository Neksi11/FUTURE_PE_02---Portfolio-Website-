export function MovingTextBanner() {
  const phrases = [
    "Design Systems That Scale",
    "AI-Powered User Experiences", 
    "Motion Design Excellence",
    "Premium Component Libraries",
    "Digital Product Innovation",
    "Frontend Architecture Mastery"
  ];

  return (
    <div className="w-full py-6 bg-elegant-black text-elegant-white overflow-hidden border-y border-elegant-graphite">
      <div className="moving-text text-2xl md:text-3xl font-display font-medium tracking-wide">
        {phrases.map((phrase, index) => (
          <span key={index} className="inline-block mx-12">
            {phrase}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {phrases.map((phrase, index) => (
          <span key={`duplicate-${index}`} className="inline-block mx-12">
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}