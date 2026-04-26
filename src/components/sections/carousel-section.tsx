import { motion } from "framer-motion"

const carouselImages = [
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/02c6e5cb-7d03-4fb4-afc6-1365b586e65b.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/dabd801b-a872-4f2a-bccc-0cb22710aabd.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/b6cca1f2-0643-4a99-8717-28a240e420f1.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/407414cd-5b27-4893-a0b3-35fa551e0376.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/7f413789-c72a-4ff8-8ce9-607a26915613.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/fffeb69b-8856-49b1-adc5-66f536e9b6da.jpg",
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
          Всё самое нежное — для тебя. 🎀
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
