// import {
//   Radio,
//   Newspaper,
//   MessageCircle,
//   Calendar,
//   BarChart3,
// } from "lucide-react";

// import FeedCard from "./FeedCard";

// const feed = [
//   {
//     icon: <Radio />,
//     title: "RJ Aryan is Live",
//     subtitle: "Late Night Chill Mix",
//     time: "Live Now",
//     color: "bg-red-500/20 text-red-400",
//     link: "/live",
//   },
//   {
//     icon: <Newspaper />,
//     title: "AI Workshop Registration",
//     subtitle: "ECE Department announced registrations.",
//     time: "5 mins ago",
//     color: "bg-cyan-500/20 text-cyan-400",
//     link: "/campus-news",
//   },
//   {
//     icon: <MessageCircle />,
//     title: "Discussion Trending",
//     subtitle: "Hostel dinner was actually good 😂",
//     time: "12 mins ago",
//     color: "bg-violet-500/20 text-violet-400",
//     link: "/discussions",
//   },
//   {
//     icon: <BarChart3 />,
//     title: "New Poll Live",
//     subtitle: "Vote for Friday Music Theme",
//     time: "20 mins ago",
//     color: "bg-green-500/20 text-green-400",
//     link: "/polls",
//   },
//   {
//     icon: <Calendar />,
//     title: "Open Mic Tomorrow",
//     subtitle: "Auditorium • 6 PM",
//     time: "Tomorrow",
//     color: "bg-yellow-500/20 text-yellow-300",
//     link: "/events",
//   },
// ];

// export default function CampusFeed() {
//   return (
//     <section className="py-24">

//       <div className="mx-auto max-w-7xl px-6">

//         <h2 className="text-5xl font-black text-white">

//           What's Happening

//           <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
//             {" "}
//             Right Now
//           </span>

//         </h2>

//         <p className="mt-5 max-w-2xl text-lg text-zinc-400">
//           Live updates from across the campus.
//         </p>

//         <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

//           {feed.map((item, index) => (
//             <FeedCard
//               key={index}
//               {...item}
//             />
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }