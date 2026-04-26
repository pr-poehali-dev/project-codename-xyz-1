import { motion } from "framer-motion"

const wishes = [
  {
    name: "17 лет",
    emoji: "🎂",
    description: "Твой особенный день",
    features: [
      "Самая красивая из всех",
      "Липсингует лучше всех",
      "Про геймер",
      "Ночной житель с кайфом",
    ],
  },
  {
    name: "С днём рождения!",
    emoji: "🎀",
    description: "Только для тебя",
    features: [
      "Бесконечное счастье",
      "Много улыбок каждый день",
      "Все мечты сбываются",
      "Любовь и поддержка",
      "Всегда рядом",
    ],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Каришке — с любовью 🐰</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Ты особенная. И это не обсуждается!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {wishes.map((wish, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${wish.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {wish.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Для тебя 💕
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <h3 className="font-serif text-xl text-foreground">{wish.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-6xl">{wish.emoji}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{wish.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {wish.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <span className="text-primary flex-shrink-0">🌸</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}