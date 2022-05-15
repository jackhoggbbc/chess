import { Chess } from 'chess.ts';

const piece_values:  { [piece: string]: number }  = {
    'P': 100,
    'N': 320,
    'B': 330,
    'R': 500,
    'Q': 900,
    'K': 20000,
    'p': -100,
    'n': -320,
    'b': -330,
    'r': -500,
    'q': -900,
    'k': -20000
};

// white is always the maximizing player
export function minimax(position: Chess, depth: number, maximizingPlayer: boolean) {
    if (depth == 0 || position.gameOver()) {
        return evaluate(position);
    }

    const legalMoves = position.moves();

    if (maximizingPlayer) {
        let value = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < legalMoves.length; i++) {
            position.move(legalMoves[i]);
            value = Math.max(value, minimax(position, depth - 1, false));
            position.undo();
        }
        return value;
    } else {
        let value = Number.POSITIVE_INFINITY;
        for (let i = 0; i < legalMoves.length; i++) {
            position.move(legalMoves[i]);
            value = Math.min(value, minimax(position, depth - 1, true));
            position.undo();
        }
        return value;
    }
}

export function evaluate(position: Chess) {
    let score = 0;
    const fen = position.fen().split(' ', 1)[0]; // only get board layout
    fen.split('').forEach( (value) => {
        const pv = piece_values[value];
        if (!isNaN(pv)) {
            score += pv;
        }
    });
    return score;
}
