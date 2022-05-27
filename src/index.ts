import { Chess } from 'chess.ts';
import { minimax } from './engine';

export function bestMove(FEN: string, depth: number): string {
	const chess = new Chess(FEN);

	let bestValue = 0;
	let bestMove = "";
	const moves = chess.moves();
	for (let i = 0; i < moves.length; i++) {
		const move = moves[i];
		chess.move(move);
		let value = minimax(chess, depth, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, true);
		if (value > bestValue) {
			bestMove = move;
			bestValue = value;
		}
		chess.undo(); 
	}
	return bestMove;
}

export function legalMoves(FEN: string): string[] {
	const chess = new Chess(FEN);
	return chess.moves();
}
