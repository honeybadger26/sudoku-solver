'use client';

import { CellChangeInput, Grid } from '@/components/Grid';
import { solveGrid } from '@/lib/solve';
import { TGrid } from '@/lib/types';
import { useState } from 'react';

const CELL_ROWS = 9;
const CELL_COLS = 9;

function makeEmptyGrid() {
  return Array.from(Array(CELL_ROWS)).map(() => Array(CELL_COLS).fill("") as string[]);
}

export default function Home() {
  const [unsolvedGrid, setUnsolvedGrid] = useState<TGrid>(makeEmptyGrid());
  const [solvedGrid, setSolvedGrid] = useState<TGrid | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  function handleCellChange({
    row,
    col,
    value,
  }: CellChangeInput) {
    const newGrid = structuredClone(unsolvedGrid);
    newGrid[row][col] = value;
    setUnsolvedGrid(newGrid);
  };

  function handleSolve() {
    setLoading(true);
    const solution = solveGrid(unsolvedGrid);
    console.log(solution);

    if (solution) {
      setSolvedGrid(solution);
    }

    setLoading(false);
  }

  return (
    <div className="font-mono w-full flex flex-col items-center">
      <h1 className="pt-5 text-4xl font-semibold">Sudoku Solver</h1>
      <p className="pt-2 text-sm">By Simon Schippl</p>
      <div className="flex gap-6 items-center">
        <Grid grid={unsolvedGrid} onCellChange={handleCellChange} />
        {solvedGrid && (
          <>
            <div>{'->'}</div>
            <Grid grid={solvedGrid} />
          </>
        )}
      </div>
      <button
        disabled={loading}
        className="mt-10 px-6 py-3 bg-blue-500 active:bg-blue-600 text-slate-100"
        onClick={handleSolve}
      >{loading ? 'Loading...' : 'Solve'}</button>
    </div>
  );
}
