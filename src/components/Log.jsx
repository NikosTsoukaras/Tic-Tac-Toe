export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn, turnId) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    Player {turn.player} selected {turn.square.row} ,{" "}
                    {turn.square.col}
                </li>
            ))}
        </ol>
    );
}
