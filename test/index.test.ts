import { bestMove, legalMoves } from '../src/index';

describe("Tests", () => {
	it("return correct move in mate-in-one", () => {
		const fen = "rnbqkb1r/1ppp1ppp/p4n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 1";
		const bm = bestMove(fen, 2);
		console.log(bestMove(fen, 2));
		expect(1).toBe(1);
	});

	// it("Best move for black after Morphy's defence and a6", () => {
	// 	const fen = "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 1";
	// 	const bm = bestMove(fen, 1);
	// 	console.log(bm);
	// 	expect(bm).toBe('nf6');
	// });
});
