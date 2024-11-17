'use client';

import { CellChangeInput, Grid } from '@/components/Grid';
import { ALL_NUMBERS, isValidGrid, solveGrid } from '@/lib/solve';
import { TGrid } from '@/lib/types';
import { useState } from 'react';

const CELL_ROWS = 9;
const CELL_COLS = 9;
const ALLOWED_CELL_VALUES = ["", ...ALL_NUMBERS];

function makeEmptyGrid() {
  return Array.from(Array(CELL_ROWS)).map(() => Array(CELL_COLS).fill("") as string[]);
}

export default function Home() {
  const [unsolvedGrid, setUnsolvedGrid] = useState<TGrid>(makeEmptyGrid());
  const [solvedGrid, setSolvedGrid] = useState<TGrid | undefined>();
  const [loading, setLoading] = useState(false);

  const [validGrid, setValidGrid] = useState(true);
  const [hasSolution, setHasSolution] = useState(true);

  function handleCellChange({
    row,
    col,
    value,
  }: CellChangeInput) {
    if (ALLOWED_CELL_VALUES.indexOf(value) === -1) {
      return;
    }

    setSolvedGrid(undefined);
    const newGrid = structuredClone(unsolvedGrid);
    newGrid[row][col] = value;
    setUnsolvedGrid(newGrid);
    setValidGrid(isValidGrid(newGrid));
  };

  function handleSolve() {
    setLoading(true);
    const solution = solveGrid(unsolvedGrid);

    if (solution) {
      setSolvedGrid(solution);
    }

    setHasSolution(!!solution);
    setLoading(false);
  }

  return (
    <div className="font-mono w-full flex flex-col items-center">
      <h1 className="pt-5 text-4xl font-semibold">Sudoku Solver</h1>
      <p className="pt-2 text-sm">By Simon Schippl</p>
      <div className="flex gap-10 items-center">
        <Grid grid={unsolvedGrid} onCellChange={handleCellChange} />
        {solvedGrid && (
          <>
            <div>{'->'}</div>
            <Grid grid={solvedGrid} />
          </>
        )}
      </div>

      {!hasSolution && (
        <div className="text-rose-500">No solution found</div>
      )}

      {validGrid ? (
        <button
          disabled={loading}
          className="mt-10 px-6 py-3 bg-blue-500 text-slate-100 disabled:bg-blue-800 active:bg-blue-600"
          onClick={handleSolve}
        >
          {loading ? 'Loading...' : 'Solve'}
        </button>
      ) : <div className="mt-10 text-rose-500">Grid is invalid</div>}
    </div>
  );
}
