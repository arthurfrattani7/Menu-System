export interface IRegisterPageApplication {
  coupleId: string;
  order: number;
  musicId?: string;
  // Omitido = 15s. null = sem limite de tempo.
  durationSeconds?: number | null;
  musicStartSeconds?: number;
}
