import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 via-pink-100 to-rose-100 opacity-60 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <motion.h2
            className="text-6xl md:text-8xl font-serif text-foreground"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Карина 🎀
          </motion.h2>

          <p className="text-muted-foreground text-lg max-w-md">
            Хорошей девочке хорошая жизнь. 🤍
          </p>

          <motion.div
            className="flex gap-4 text-3xl mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {["🌷", "👠", "🎀", "🤍", "🌷"].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">С днём рождения, Каришка! 🎂 17 лет — бьюри лайф</p>
        </div>
      </div>
    </footer>
  )
}