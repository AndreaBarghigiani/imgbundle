import { motion } from "framer-motion";

function Avatar() {
  return (
    <div className="fixed top-6 right-6 flex items-center">
      <motion.span
        className="mr-4 h-auto rounded-md bg-white px-3 py-2 text-slate-800"
        initial={{ x: 100, opacity: 0, scale: 0.75 }}
        animate={{ x: 0, opacity: [0, 1, 1, 0], scale: 1 }}
        transition={{
          x: { delay: 4, duration: 1 },
          scale: { delay: 4.2, duration: 0.75 },
          opacity: { delay: 4.5, duration: 6 },
        }}
      >
        Available for hire
      </motion.span>

      <motion.div
        className="relative flex h-16 w-16 origin-center animate-shadow-pulse flex-col items-center justify-center overflow-hidden rounded-full bg-white"
        initial={{
          borderRadius: 10,
          scale: 0,
        }}
        animate={{
          rotate: 360,
          scale: 1,
          borderRadius: [10, 10, 100],
        }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute flex h-14 w-14 origin-bottom-right items-center justify-center text-5xl"
          initial={{
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: -100,
            opacity: 1,
            rotate: [20, -20, 10, -10, 5, -5, 0],
          }}
          transition={{
            duration: 1,
            delay: 1.4,
            y: { delay: 3 },
          }}
        >
          👋
        </motion.div>
        <a
          href="https://cupofcraft.dev"
          title="Andrea Barghigiani"
          target="_blank"
          className="absolute"
        >
          <motion.img
            src={import.meta.env.BASE_URL + "images/andrea-barghigiani.jpg"}
            alt="Andrea Barghigiani"
            className="h-14 w-14 rounded-full"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ y: { delay: 3.3 }, scale: { duration: 0.1 } }}
            whileHover={{ scale: 1.2 }}
          />
        </a>
      </motion.div>
    </div>
  );
}

export default Avatar;
