import { motion } from "framer-motion"

const qualities = [
  {
    emoji: "💄",
    title: "Невероятно красивая",
    description: "Разве есть вообще что-то, что тебе не идет? Про брови тебе наговаривают.",
  },
  {
    emoji: "🤍",
    title: "Хороший человек",
    description: "Всегда приятно, когда ты хочешь и оказываешься рядом.",
  },
  {
    emoji: "😂",
    title: "Смешная и классная",
    description: "Ну ты пиздец смешная 6767хыыыы",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          О тебе
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {qualities.map((q, i) => (
            <motion.div
              key={i}
              className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="flex-1 flex items-center justify-center">
                <motion.span
                  className="text-7xl md:text-8xl"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                >
                  {q.emoji}
                </motion.span>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-xl text-foreground">{q.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{q.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}