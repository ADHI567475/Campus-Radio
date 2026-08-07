export default function MessageInput() {

  return (

    <div className="mt-4 flex gap-3">

      <input
        placeholder="Type a message..."
        className="flex-1 rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
      />

      <button className="rounded-xl bg-violet-600 px-6 text-white">
        Send
      </button>

    </div>

  );

}