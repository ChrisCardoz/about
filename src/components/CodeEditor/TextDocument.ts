import {Range, Position} from './types';

export const lineFeed = 10;
export const carriageReturn = 13;
const spaceCode = 32;
const commaCode = 44;
export const tokenDelimiters = [lineFeed, carriageReturn, spaceCode, commaCode];
function computeLineOffsets(
	text: string,
	isAtLineStart: boolean,
	textOffset = 0
): number[] {
	const result: number[] = isAtLineStart ? [textOffset] : [];
	for (let i = 0; i < text.length; i++) {
		let ch = text.charCodeAt(i);
		if (ch === carriageReturn || ch === lineFeed) {
			if (
				ch === carriageReturn &&
				i + 1 < text.length &&
				text.charCodeAt(i + 1) === lineFeed
			) {
				i++;
			}
			result.push(textOffset + i + 1);
		}
	}
	return result;
}
export class TextDocument {
	private _content: string;
	private _lineOffsets: number[] | undefined;

	public constructor(content: string) {
		this._content = content;
		this._lineOffsets = undefined;
	}
	private getLineOffsets(): number[] {
		if (this._lineOffsets === undefined) {
			this._lineOffsets = computeLineOffsets(this._content, true);
		}
		return this._lineOffsets;
	}
	public getText(range?: Range): string {
		if (range) {
			const start = this.offsetAt(range.start);
			const end = this.offsetAt(range.end);
			return this._content.substring(start, end);
		}
		return this._content;
	}

	public positionAt(offset: number): Position {
		offset = Math.max(Math.min(offset, this._content.length), 0);

		let lineOffsets = this.getLineOffsets();
		let low = 0,
			high = lineOffsets.length;
		if (high === 0) {
			return {line: 0, character: offset};
		}
		while (low < high) {
			let mid = Math.floor((low + high) / 2);
			if (lineOffsets[mid] > offset) {
				high = mid;
			} else {
				low = mid + 1;
			}
		}
		// low is the least x for which the line offset is larger than the current offset
		// or array.length if no line offset is larger than the current offset
		let line = low - 1;
		return {line, character: offset - lineOffsets[line]};
	}

	public offsetAt(position: Position) {
		let lineOffsets = this.getLineOffsets();
		if (position.line >= lineOffsets.length) {
			return this._content.length;
		} else if (position.line < 0) {
			return 0;
		}
		let lineOffset = lineOffsets[position.line];
		let nextLineOffset =
			position.line + 1 < lineOffsets.length
				? lineOffsets[position.line + 1]
				: this._content.length;
		return Math.max(
			Math.min(lineOffset + position.character, nextLineOffset),
			lineOffset
		);
	}
}
// export class TextDocument {
// 	lines: string[];
// 	constructor(text: string) {
// 		const lines = text.split('\n');
// 		this.lines = lines;
// 	}
// 	/**
//      * Get the text of this document. A substring can be retrieved by
//      * providing a range.
//      *
//      * @param range (optional) An range within the document to return.
//      * If no range is passed, the full content is returned.
//      * Invalid range positions are adjusted as described in [Position.line](#Position.line)
//      * and [Position.character](#Position.character).
//      * If the start range position is greater than the end range position,
//      * then the effect of getText is as if the two positions were swapped.

//      * @return The text of this document or a substring of the text if a
//      *         range is provided.
//      */
// 	getText(range?: Range): string {
// 		if (!range) return this.lines.join('\n');
// 		const minLine = range.start.line;
// 		const maxLine = range.end.line;
// 		const minChar = range.start.character;
// 		const maxChar = range.end.character;
// 		const linesInRange = this.lines.filter((_, i) => i >= minLine && i <= maxLine);
// 		linesInRange[0] = linesInRange[0].slice(minChar);
// 		linesInRange[linesInRange.length - 1] = linesInRange[linesInRange.length - 1].slice(
// 			0,
// 			maxChar
// 		);
// 		return linesInRange.join('\n');
// 	}
// 	/**
//      * Converts a zero-based offset to a position.
//      *
//      * @param offset A zero-based offset.
//      * @return A valid [position](#Position).
//      */
// 	positionAt(offset: number): Position {
// 		const text = this.lines.join('\n');
// 		let line = 0;
// 		let character = 0;
// 		for (let i = 0; i < offset; i++) {
// 			const c = text.charAt(i);
// 			if (c === '\n') {
// 				line += 1;
// 				character = 0;
// 			} else {
// 				character += 1;
// 			}
// 		}
// 		return {
// 			character,
// 			line
// 		};
// 	}
// 	/**
//      * Converts the position to a zero-based offset.
//      * Invalid positions are adjusted as described in [Position.line](#Position.line)
//      * and [Position.character](#Position.character).
//      *
//      * @param position A position.
//      * @return A valid zero-based offset.
//      */
// 	offsetAt(position: Position): number {
// 		const lineChars = this.lines
// 			.filter((_, i) => i < position.line)
// 			.reduce((acc, cur) => acc + cur.length, 0);

// 		return lineChars + position.character;
// 	}
// }
