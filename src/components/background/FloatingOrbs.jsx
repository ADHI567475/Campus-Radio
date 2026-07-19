import { motion } from "framer-motion";

const orbs = [
  { x: "10%", y: "20%", size: 12 },
  { x: "80%", y: "25%", size: 18 },
  { x: "30%", y: "75%", size: 14 },
  { x: "70%", y: "65%", size: 10 },
  { x: "50%", y: "40%", size: 16 },
];

export default function FloatingOrbs() {
  return (
    <>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
          }}
          className="absolute rounded-full bg-white/10 blur-sm"
        />
      ))}
    </>
  );
}