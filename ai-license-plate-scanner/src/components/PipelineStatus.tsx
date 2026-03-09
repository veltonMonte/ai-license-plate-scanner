interface Props {
  step: number;
}

export default function PipelineStatus({ step }: Props) {

  const steps = [
    "Upload recebido",
    "Pré-processamento",
    "Detecção de placa",
    "OCR aplicado",
    "Resultado retornado"
  ];

  return (

    <div className="pipeline-card">

      <h3>Pipeline da análise</h3>

      <ul className="pipeline-list">

        {steps.map((label, index) => {

          let status = "";

          if (index < step) status = "done";
          else if (index === step) status = "active";

          return (
            <li key={label} className={`pipeline-step ${status}`}>
              {label}
            </li>
          );

        })}

      </ul>

    </div>

  );
}