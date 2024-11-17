import { GridPosition, SECTION_INDEXES, TGrid } from './types';

const ALL_NUMBERS = Array.from(Array(9)).map((_, index) => `${index + 1}`);

function getSectionNumber(row: number, column: number) {
  for (let i = 0; i < SECTION_INDEXES.length; i++) {
    const [rowStart, rowEnd] = SECTION_INDEXES[i].rows;
    const [colStart, colEnd] = SECTION_INDEXES[i].cols;

    if (
      (rowStart <= row && row <= rowEnd) &&
      (colStart <= column && column <= colEnd)
    ) {
      return i;
    }
  }

  return -1;
}

function getNextEmptyPosition(grid: TGrid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "") {
        return {
          row: i,
          col: j,
          section: getSectionNumber(i, j),
        }
      }
    }
  }
}

function isNumberInSection(grid: TGrid, sectionNum: number, num: string) {
  const [rowStart, rowEnd] = SECTION_INDEXES[sectionNum].rows;
  const [colStart, colEnd] = SECTION_INDEXES[sectionNum].cols;

  for (let i = rowStart; i <= rowEnd; i++) {
    for (let j = colStart; j <= colEnd; j++) {
      if (grid[i][j] === num) {
        return true;
      }
    }
  }

  return false;
}

function isPlacable(grid: TGrid, position: GridPosition, num: string) {
  if (grid[position.row].indexOf(num) >= 0) {
    return false;
  }

  if (grid.map((row) => row[position.col]).indexOf(num) >= 0) {
    return false;
  }

  if (isNumberInSection(grid, position.section, num)) {
    return false;
  }

  return true;
}

function isGridFull(grid: TGrid) {
  for (const row of grid) {
    for (const num of row) {
      if (num === "") {
        return false;
      }
    }
  }

  return true;
}

export function solveGrid(grid: TGrid): TGrid | null {
  const position = getNextEmptyPosition(grid);

  console.log(position);

  if (!position) {
    if (isGridFull(grid)) {
      return grid;
    }

    return null;
  }

  for (const num of ALL_NUMBERS) {
    if (isPlacable(grid, position, num)) {
      console.log(`placed ${num} at ${position.row},${position.col}`);
      const newGrid = structuredClone(grid);
      newGrid[position.row][position.col] = num;

      const possiblSolution = solveGrid(newGrid)
      if (possiblSolution) {
        return possiblSolution;
      }
    }
  }

  return null;
}
