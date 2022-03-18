export interface breakpoint {
  percentage: number;
  color: string;
}

interface propTypes {
  breakpoints: breakpoint[];
  onChange: (index: number, breakpoint: breakpoint) => void;
  onDelete: (index: number) => void;
}

export default function renderBreakpointList(props: propTypes) {
  return (
    <>
      {props.breakpoints.map((breakpoint, index) => (
        <div style={{ marginTop: "20px" }} key={index}>
          {/* Techniquement la key devrait encore etre un id unique car l'index ne sert a rien */}
          <span>Breakpoint {index + 1}</span>
          <input
            type="number"
            placeholder="Breakpoint percentage"
            onInput={(e) =>
              props.onChange(index, {
                ...breakpoint,
                percentage: parseFloat(e.currentTarget.value),
              })
            }
            min={index === 0 ? 0 : props.breakpoints[index - 1].percentage}
            max={100}
          />
          <input
            type="color"
            placeholder="Breakpoint color"
            onInput={(e) =>
              props.onChange(index, {
                ...breakpoint,
                color: e.currentTarget.value,
              })
            }
          />
          <button onClick={() => props.onDelete(index)}> Delete</button>
        </div>
      ))}
    </>
  );
}
