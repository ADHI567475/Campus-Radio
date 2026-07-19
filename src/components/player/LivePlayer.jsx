// import GlassCard from "../ui/GlassCard";
// import SectionHeader from "../ui/SectionHeader";
// import { motion } from "framer-motion";
// import {
//   Radio,
//   Users,
//   Headphones,
//   ArrowRight,
// } from "lucide-react";

// const shows = [
//   {
//     title: "Morning Beats",
//     host: "RJ Alex",
//     genre: "Pop & Indie",
//     listeners: "324",
//     live: true,
//   },
//   {
//     title: "Campus Talks",
//     host: "RJ Maya",
//     genre: "Podcast",
//     listeners: "198",
//     live: false,
//   },
//   {
//     title: "Night Owl",
//     host: "RJ Zara",
//     genre: "Lo-Fi",
//     listeners: "276",
//     live: true,
//   },
//   {
//     title: "Midnight Mix",
//     host: "RJ Ethan",
//     genre: "EDM",
//     listeners: "412",
//     live: false,
//   },
// ];

// export default function LivePlayer() {
//   return (
//     <section className="relative py-28">
//       <div className="mx-auto max-w-7xl px-6">

//         <SectionHeader
//           badge="🎙 LIVE ON AIR"
//           title="Streaming Across"
//           highlight="Campus"
//           description="Discover live shows hosted by students, podcasts, music sessions and campus conversations."
//         />

//         <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
//           {shows.map((show, index) => (
//             <motion.div
//               key={show.title}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: index * 0.12,
//                 duration: 0.7,
//                 ease: "easeOut",
//               }}
//               whileHover={{
//                 y: -5,
//               }}
//             >
//               <GlassCard className="group h-full rounded-3xl p-6 transition-all duration-300">

//                 <div className="flex items-center justify-between">

//                   {show.live ? (
//                     <div className="flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1">

//                       <span className="relative flex h-2 w-2">
//                         <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500"></span>
//                         <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
//                       </span>

//                       <span className="text-xs font-semibold text-red-300">
//                         LIVE
//                       </span>

//                     </div>
//                   ) : (
//                     <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
//                       UPCOMING
//                     </div>
//                   )}

//                   <Radio className="text-violet-300" size={22} />

//                 </div>

//                 <h3 className="mt-8 text-2xl font-bold text-white">
//                   {show.title}
//                 </h3>

//                 <p className="mt-2 text-zinc-400">
//                   Hosted by <span className="text-white">{show.host}</span>
//                 </p>

//                 <div className="mt-5 inline-block rounded-full bg-white/5 px-3 py-1 text-sm text-cyan-300">
//                   {show.genre}
//                 </div>

//                 {/* Equalizer */}

//                 <div className="mt-8 flex items-end gap-1">
//                   {[24, 42, 30, 50, 34, 46].map((h, i) => (
//                     <motion.div
//                       key={i}
//                       className="w-2 rounded-full bg-gradient-to-t from-violet-500 to-cyan-400"
//                       style={{ height: h }}
//                       animate={{
//                         height: [h, h + 6, h],
//                       }}
//                       transition={{
//                         duration: 2.5,
//                         delay: i * 0.15,
//                         repeat: Infinity,
//                         repeatType: "mirror",
//                         ease: "easeInOut",
//                       }}
//                     />
//                   ))}
//                 </div>

//                 <div className="mt-8 flex items-center gap-2 text-zinc-400">
//                   <Users size={18} />
//                   <span>{show.listeners} listening</span>
//                 </div>

//                 <button className="mt-8 flex items-center gap-2 font-medium text-cyan-300 transition-all duration-300 group-hover:gap-2.5">

//                   <Headphones size={18} />

//                   Listen Now

//                   <ArrowRight size={18} />

//                 </button>

//               </GlassCard>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }