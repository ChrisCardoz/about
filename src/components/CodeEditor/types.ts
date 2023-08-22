type MarkupKind = 'plaintext' | 'markdown';
export enum ContextValue {
	CONNECTION = 'connection',
	CONNECTED_CONNECTION = 'connectedConnection',
	COLUMN = 'connection.column',
	FUNCTION = 'connection.function',
	SCHEMA = 'connection.schema',
	RESOURCE_GROUP = 'connection.resource_group',
	DATABASE = 'connection.database',
	TABLE = 'connection.table',
	VIEW = 'connection.view',
	MATERIALIZED_VIEW = 'connection.materializedView',
	NO_CHILD = 'NO_CHILD',
	KEYWORDS = 'KEYWORDS'
}
interface IChildItem {
	type: string;
	label: string;
	schema: string;
	database: string;
}
export interface ITable extends IChildItem {
	isView: boolean;
}
export type Position = {
	/**
   * Line position in a document (zero-based).
   * If a line number is greater than the number of lines in a document, it defaults back to the number of lines in the document.
   * If a line number is negative, it defaults to 0.
   */
	line: number;
	/**
   * Character offset on a line in a document (zero-based). Assuming that the line is
   * represented as a string, the `character` value represents the gap between the
   * `character` and `character + 1`.
   *
   * If the character value is greater than the line length it defaults back to the
   * line length.
   * If a line number is negative, it defaults to 0.
   */
	character: number;
};

export type Range = {
	/**
   * The range's start position
   */
	start: Position;
	/**
   * The range's end position.
   */
	end: Position;
};

export interface MarkupContent {
	/**
   * The type of the Markup
   */
	kind: MarkupKind;
	/**
   * The content itself
   */
	value: string;
}
export interface CompletionItem {
	/**
   * The label of this completion item. By default
   * also the text that is inserted when selecting
   * this completion.
   */
	label: string;
	/**
   * The kind of this completion item. Based of the kind
   * an icon is chosen by the editor.
   */
	kind: string;

	detail?: string;
}
export interface ITableCompletionItem extends CompletionItem {
	schema: string;
}

export interface IColumnCompletionItem extends CompletionItem {
	primaryKey?: boolean;
	foreignKey?: string;
	schema: string;
	table: string;
	label: string;
}
