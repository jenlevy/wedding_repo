import type { Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { insertRsvp } from "$lib/server/db";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const name = data.get("name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const attending = data.get("attending")?.toString() ?? "";
    const dietary_restrictions =
      data.get("dietary_restrictions")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";

    // TODO(learning): Implement validation here!
    // Check that `name` is not empty and `attending` is either 'yes' or 'no'.
    // If validation fails, return fail(400, { error: '...' , ...submitted fields })
    // so the form can repopulate and show the error.
    //
    // Example of returning a validation error:
    //   return fail(400, { error: 'Please enter your name.', name, email, attending });

    try {
      await insertRsvp({
        name,
        email: email || undefined,
        attending: attending === "yes",
        dietary_restrictions: dietary_restrictions || undefined,
        message: message || undefined,
      });
    } catch (err) {
      console.error(err);
      const errMessage =
        err instanceof Error ? err.message : "Could not save your RSVP.";
      return fail(500, {
        error: errMessage,
        name,
        email,
        attending,
        dietary_restrictions,
        message,
      });
    }

    return { success: true };
  },
} satisfies Actions;
