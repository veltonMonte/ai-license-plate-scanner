import { useState } from "react";

interface Props {
  onSend: (file: File) => void;
  loading: boolean;
}

export function ImageUpload({ onSend, loading }: Props) {

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  function handleFile(selected: File) {

    setFile(selected);

    const imageUrl = URL.createObjectURL(selected);
    setPreview(imageUrl);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    const selected = e.target.files?.[0];
    if (!selected) return;

    handleFile(selected);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {

    e.preventDefault();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (!droppedFile) return;

    handleFile(droppedFile);
  }

  function handleSubmit() {

    if (file) onSend(file);
  }

  return (

    <div>

      <div
        className={`upload-box ${dragActive ? "drag-active" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
      >

        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="file-input"
        />

        <p>
          Arraste uma imagem aqui ou <span>clique para selecionar</span>
        </p>

      </div>

      {preview && (

        <div className="preview-container">

          <h3>Preview</h3>

          <div className={`scanner-wrapper ${loading ? "scanning" : ""}`}>

            <img src={preview} alt="preview" />

            {loading && (
              <>
                <div className="scanner-line"></div>
                <div className="scanner-grid"></div>
              </>
            )}

          </div>

        </div>

      )}

      <button onClick={handleSubmit} disabled={!file || loading}>
        {loading ? "Processando..." : "Enviar imagem"}
      </button>

    </div>

  );
}