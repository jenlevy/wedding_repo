import { createSupabaseAdmin } from './supabase-admin';

/**
 * Supabase `public.rsvps` row shape. Create the table in the SQL editor, for example:
 *
 * create table public.rsvps (
 *   id bigint generated always as identity primary key,
 *   name text not null,
 *   email text,
 *   attending boolean not null,
 *   dietary_restrictions text,
 *   message text,
 *   created_at timestamptz not null default now()
 * );
 *
 * alter table public.rsvps enable row level security;
 * (Inserts from this app use the service role and bypass RLS.)
 */
export interface RsvpRow {
	id: string;
	name: string;
	email: string | null;
	attending: boolean;
	dietary_restrictions: string | null;
	message: string | null;
	created_at: string;
}

export interface RsvpInsert {
	name: string;
	email?: string;
	attending: boolean;
	dietary_restrictions?: string;
	message?: string;
}

export async function insertRsvp(rsvp: RsvpInsert): Promise<RsvpRow> {
	const supabase = createSupabaseAdmin();
	const { data, error } = await supabase
		.from('rsvps')
		.insert({
			name: rsvp.name,
			email: rsvp.email ?? null,
			attending: rsvp.attending,
			dietary_restrictions: rsvp.dietary_restrictions ?? null,
			message: rsvp.message ?? null
		})
		.select()
		.single();

	if (error) {
		throw error;
	}
	if (!data) {
		throw new Error('RSVP insert returned no row');
	}
	return data as RsvpRow;
}
