import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import type { PlateData } from "../services/api";

interface Props {
  history: PlateData[];
}

export default function ConfidenceChart({ history }: Props) {

  const data = history.map((item, index) => ({
    leitura: index + 1,
    confianca: item.confianca
  }));

  return (

    <div className="chart-container">

      <h3>Média de confiança das leituras</h3>

      <ResponsiveContainer width="100%" height={250}>

        <LineChart data={data}>

          <XAxis dataKey="leitura" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="confianca"
            stroke="#3b82f6"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}