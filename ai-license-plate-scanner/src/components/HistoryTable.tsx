import type { PlateData } from "../services/api";

interface Props {
  history: PlateData[];
}

export default function HistoryTable({ history }: Props) {

  return (

    <div className="history">

      <h3>Histórico de leituras</h3>

      <table>

        <thead>

          <tr>
            <th>Placa</th>
            <th>Confiança</th>
          </tr>

        </thead>

        <tbody>

          {history.map((item, index) => (

            <tr key={index}>

              <td>{item.placa}</td>
              <td>{item.confianca.toFixed(2)}%</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}