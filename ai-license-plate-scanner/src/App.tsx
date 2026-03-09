import { useState } from "react";
import { ImageUpload } from "./components/ImageUpload";
import ResultPanel from "./components/ResultPanel";
import ConfidenceChart from "./components/ConfidenceChart";
import HistoryTable from "./components/HistoryTable";
import PipelineStatus from "./components/PipelineStatus";
import { recognizePlate } from "./services/api";
import type { PlateData } from "./services/api";

export default function App() {

  const [results, setResults] = useState<PlateData[]>([]);
  const [history, setHistory] = useState<PlateData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(0);

  async function handleSend(file: File) {

    try {

      setResults([]);
      setLoading(true);
      setError(null);

      setStep(0);

      setTimeout(() => setStep(1), 300);
      setTimeout(() => setStep(2), 700);
      setTimeout(() => setStep(3), 1100);

      const response = await recognizePlate(file);

      setStep(4);

      setResults(response.dados);
      setHistory((prev) => [...prev, ...response.dados]);

    } catch {
      setError("Erro ao conectar com a API.");
    } finally {
      setLoading(false);
    }

  }

  return (

    <div className="container">

      <header className="header">
        <h1>AI License Plate Scanner</h1>
        <p>Sistema de visão computacional para reconhecimento automático de placas</p>
      </header>

      <div className="dashboard">

        <div className="card upload-card">

          <h2>Enviar imagem</h2>

          <ImageUpload onSend={handleSend} loading={loading} />

          {loading && <p className="loading">Processando imagem...</p>}

          {error && <p className="error">{error}</p>}

          <PipelineStatus step={step} />

        </div>

        {results.length > 0 && (
          <div className="card result-card">
            <ResultPanel results={results} history={[]} />
          </div>
        )}

        {history.length > 0 && (
          <div className="card graph-card">
            <ConfidenceChart history={history} />
          </div>
        )}

        {history.length > 0 && (
          <div className="card history-card">
            <HistoryTable history={history} />
          </div>
        )}

      </div>

    </div>

  );

}