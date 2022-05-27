import { evaluate } from '../src/engine';
import { Chess } from 'chess.ts';

describe('Test evaluate', () => {
    it("White winning", () => {
		const chess = new Chess("rnb1kbnr/ppp2ppp/4p3/3N4/8/8/PPPP1PPP/R1BQKBNR b KQkq - 0 1");
		console.log(evaluate(chess));
		expect(evaluate(chess)).toBe(900);
	});

    it('Black winning', () => {
        const chess = new Chess('r1bqkbnr/p1pp1ppp/p7/4p3/1n2P3/5N2/P1PP1PPP/RNBQK2R w KQkq - 0 1');
        expect(evaluate(chess)).toBe(-430);
    });

    it('Equal', () => {
        const chess = new Chess('rnbqk1nr/ppp2ppp/4p3/3p4/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1');
        expect(evaluate(chess)).toBe(0);
    });
});

describe('Test minimax', () => {
    it('')
})