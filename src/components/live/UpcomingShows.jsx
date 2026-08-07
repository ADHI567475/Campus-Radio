// const shows = [

//   {
//     time: "10:00 AM",
//     title: "Morning Beats",
//   },

//   {
//     time: "12:00 PM",
//     title: "Campus Buzz",
//   },

//   {
//     time: "2:00 PM",
//     title: "Tech Talks",
//   },

//   {
//     time: "5:00 PM",
//     title: "Request Hour",
//   },

// ];

// export default function UpcomingShows() {

//   return (

//     <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

//       <h2 className="mb-6 text-xl font-bold text-white">
//         Upcoming Shows
//       </h2>

//       <div className="space-y-4">

//         {shows.map((show) => (

//           <div
//             key={show.time}
//             className="flex justify-between rounded-xl bg-white/5 p-4"
//           >
//             <span className="text-white">
//               {show.title}
//             </span>

//             <span className="text-violet-400">
//               {show.time}
//             </span>

//           </div>

//         ))}

//       </div>

//     </div>

//   );

// }