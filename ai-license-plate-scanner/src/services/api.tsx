const API_URL = "http://localhost:8000/api/recognize-plate";

export interface PlateData {
  placa: string;
  confianca: number;
}

export interface ApiResponse {
  status: string;
  mensagem: string;
  dados: PlateData[];
}

export async function recognizePlate(file: File): Promise<ApiResponse> {

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData
  });

  if (!response.ok) {
    throw new Error("Erro ao reconhecer placa");
  }

  return await response.json();
}