export interface IUpdatePageTimingApplication {
  // undefined = não altera. null = sem limite de tempo.
  durationSeconds?: number | null;
  musicStartSeconds?: number;
}
