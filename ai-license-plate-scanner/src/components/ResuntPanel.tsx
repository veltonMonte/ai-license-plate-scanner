import type { PlateData } from "../services/api";

interface Props {
  results: PlateData[];
}

export default function ResultPanel({ results }: Props) {

  const bestPlate = results.reduce((prev, current) =>
    prev.confianca > current.confianca ? prev : current
  );

  return (

    <div className="result-content">

      <h2>Resultado da análise</h2>

      <div className="best-plate">

        <h3>Placa detectada</h3>

        <p>{bestPlate.placa}</p>

        <span>
          {bestPlate.confianca.toFixed(2)}% de confiança
        </span>

      </div>

      <table>

        <thead>

          <tr>
            <th>Placa</th>
            <th>Confiança</th>
          </tr>

        </thead>

        <tbody>

          {results.map((item, index) => (

            <tr key={index}>

              <td>{item.placa}</td>

              <td>

                {item.confianca.toFixed(2)}%

                <div className="confidence-bar">

                  <div
                    className="confidence-fill"
                    style={{ width: `${item.confianca}%` }}
                  />

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}