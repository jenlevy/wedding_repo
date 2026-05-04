import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.resolve("data", "wedding.db");

const db = new Database(DB_PATH);

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
	CREATE TABLE IF NOT EXISTS rsvps (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		email TEXT,
		attending INTEGER NOT NULL,
		meal_choice TEXT,
		dietary_restrictions TEXT,
		plus_one_name TEXT,
		message TEXT,
		created_at TEXT DEFAULT (datetime('now'))
	)
`);

export interface RsvpRow {
  id: number;
  name: string;
  email: string | null;
  attending: number;
  meal_choice: string | null;
  dietary_restrictions: string | null;
  plus_one_name: string | null;
  message: string | null;
  created_at: string;
}

export interface RsvpInsert {
  name: string;
  email?: string;
  attending: boolean;
  meal_choice?: string;
  dietary_restrictions?: string;
  plus_one_name?: string;
  message?: string;
}

const insertStmt = db.prepare(`
	INSERT INTO rsvps (name, email, attending, meal_choice, dietary_restrictions, plus_one_name, message)
	VALUES (@name, @email, @attending, @meal_choice, @dietary_restrictions, @plus_one_name, @message)
`);

export function insertRsvp(rsvp: RsvpInsert): RsvpRow {
  const result = insertStmt.run({
    name: rsvp.name,
    email: rsvp.email ?? null,
    attending: rsvp.attending ? 1 : 0,
    meal_choice: rsvp.meal_choice ?? null,
    dietary_restrictions: rsvp.dietary_restrictions ?? null,
    plus_one_name: rsvp.plus_one_name ?? null,
    message: rsvp.message ?? null,
  });

  return db
    .prepare("SELECT * FROM rsvps WHERE id = ?")
    .get(result.lastInsertRowid) as RsvpRow;
}

export function getAllRsvps(): RsvpRow[] {
  return db
    .prepare("SELECT * FROM rsvps ORDER BY created_at DESC")
    .all() as RsvpRow[];
}

export default db;
