export type TGrid = string[][];
export type GridPosition = {
  row: number;
  col: number;
  section: number;
};

export const SECTION_INDEXES = [
  { rows: [0, 2], cols: [0, 2] },
  { rows: [0, 2], cols: [3, 5] },
  { rows: [0, 2], cols: [6, 8] },
  { rows: [3, 5], cols: [0, 2] },
  { rows: [3, 5], cols: [3, 5] },
  { rows: [3, 5], cols: [6, 8] },
  { rows: [6, 8], cols: [0, 2] },
  { rows: [6, 8], cols: [3, 5] },
  { rows: [6, 8], cols: [6, 8] },
];
