import { TGrid } from '@/lib/types'

export type CellChangeInput = {
  row: number;
  col: number;
  value: string;
};

type GridProps = {
  grid: TGrid;
  onCellChange?: (input: CellChangeInput) => void;
}

function getColClass(col: number) {
  return (
    (col === 0 || col === 3 || col === 6 ? ' border-l-2 border-l-slate-300 ' : '') +
    (col === 8 ? ' border-r-2 border-r-slate-300 ' : '')
  );
}

function getRowClass(row: number) {
  return (
    (row === 0 || row === 3 || row === 6 ? ' border-t-2 border-t-slate-300 ' : '') +
    (row === 8 ? ' border-b-2 border-b-slate-300 ' : '')
  );
}

export function Grid({ grid, onCellChange }: GridProps) {
  return (
    <table className="mt-10">
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex} className={`p-0 ${getRowClass(rowIndex)} ${getColClass(colIndex)}`}>
                {onCellChange ? (
                  <input
                    className="border-2 border-slate-500 bg-transparent text-center size-12"
                    value={cell}
                    onChange={(e) =>
                      onCellChange({
                        row: rowIndex,
                        col: colIndex,
                        value: e.target.value
                      })
                    }
                  />
                ) : (
                  <div className="size-12 flex justify-center items-center border-2 border-slate-700">
                    {cell}
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
