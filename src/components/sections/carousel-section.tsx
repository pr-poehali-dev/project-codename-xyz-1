import { motion } from "framer-motion"

const carouselImages = [
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/566d8832-3482-4ed2-8d00-6609c6c846a2.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/c14079dd-3868-4e52-a205-dee8c38e46ae.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/1ce3a83d-79c6-43ac-876c-6e864d1875a7.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/eef6b3a0-fa34-46a5-8b33-3e438ab0934f.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/450d0cc2-2358-4e18-a7ad-f83703da6de0.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/1ff9bf0d-4af3-4e7b-8993-f9469eed4d85.jpg",
]

export function CarouselSection() {
  const items = [...carouselImages, ...carouselImages]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Хочется отдать всё лучшее тебе.
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-2xl aspect-[3/4]"
            >
              <img
                src={src}
                alt={`Фото ${(i % carouselImages.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}