import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const wishes = [
  {
    title: "Ты невероятно красивая",
    category: "Внешность",
    text: "Можно смотреть на тебя часами.",
    image: "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/e21fefa7-eab6-484a-9033-ff238bb38b08.jpg",
  },
  {
    title: "Хороший человек",
    category: "Общение",
    text: "Вся опора в тебе. Спасибо, что балуешь.",
    image: "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/72f58caa-d11d-42f6-b2b6-48e620cc833a.jpg",
  },
  {
    title: "Ты такая смешная и интересная",
    category: "Характер",
    text: "Пожалуйста, говори чаще.",
    image: "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/cdfe7e4f-841c-4613-b5aa-fc9370db3a9b.jpg",
  },
  {
    title: "У тебя будет всё",
    category: "Пожелание",
    text: "Сколько песен про твой возраст.. и все тебе.",
    image: "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/9a85675a-be34-4179-9713-3d77e36093b7.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          О тебе с любовью
        </motion.p>

        <div className="divide-y divide-border">
          {wishes.map((wish, i) => (
            <motion.div
              key={i}
              className="group flex items-center justify-between py-6 relative cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{wish.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {wish.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{wish.text}</p>
              </div>
              <span className="text-2xl ml-4">🌸</span>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={wishes[hoveredIndex].image}
                alt={wishes[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}