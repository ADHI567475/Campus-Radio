import { useRef } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";

export default function ImageUploader({
  image,
  setImage,
}) {
  const inputRef = useRef();

  const handleFile = (file) => {
    if (!file) return;

    const preview = URL.createObjectURL(file);

    setImage({
      file,
      preview,
    });
  };

  return (
    <div className="mt-8">
      <label className="mb-3 flex items-center gap-2 text-white">
        <ImageIcon size={18} />
        Poster / Image
      </label>

      <div
        onClick={() => inputRef.current.click()}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-cyan-400/30 bg-white/5 p-8 text-center transition hover:border-cyan-400 hover:bg-white/10"
      >
        <Upload
          size={40}
          className="mx-auto text-cyan-300"
        />

        <p className="mt-4 text-white">
          Click to Upload
        </p>

        <p className="mt-2 text-sm text-zinc-500">
          PNG, JPG, JPEG
        </p>

        <input
          ref={inputRef}
          hidden
          type="file"
          accept="image/*"
          onChange={(e) =>
            handleFile(e.target.files[0])
          }
        />
      </div>

      {image && (
        <img
          src={image.preview}
          alt=""
          className="mt-6 h-72 w-full rounded-3xl object-cover"
        />
      )}
    </div>
  );
}