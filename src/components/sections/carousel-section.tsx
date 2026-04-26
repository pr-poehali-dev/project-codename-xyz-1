import { motion } from "framer-motion"

const carouselImages = [
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/621a0408-e1eb-4146-9e76-e7268f61e8dd.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/e21fefa7-eab6-484a-9033-ff238bb38b08.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/72f58caa-d11d-42f6-b2b6-48e620cc833a.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/e8d9943d-96b8-4a4f-87cc-ae3636a7de96.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/9a85675a-be34-4179-9713-3d77e36093b7.jpg",
  "https://cdn.poehali.dev/projects/f7b81972-ffd0-49bb-9545-6833459c8674/files/cdfe7e4f-841c-4613-b5aa-fc9370db3a9b.jpg",
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