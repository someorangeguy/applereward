

const RewardsSection = () => {

  const stats = [
    { label: "Active Members", value: "10M+", emoji: "👥" },
    { label: "Gift Cards Available", value: "1,500+", emoji: "🎁" },
    { label: "Rewards Paid Out", value: "$600M+", emoji: "💵" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">
                {stat.emoji}
              </div>
              <div className="text-2xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RewardsSection;