export default function ChatMessage({ name, message }) {
  return (

    <div className="rounded-xl bg-white/5 p-3">

      <h3 className="font-semibold text-cyan-400">
        {name}
      </h3>

      <p className="mt-1 text-white">
        {message}
      </p>

    </div>

  );
}