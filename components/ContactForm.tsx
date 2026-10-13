"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Sends messages through Formspree (free tier is enough).
 * Only rendered when NEXT_PUBLIC_FORMSPREE_ID is set, so the form never
 * pretends to send when there's nowhere for the message to go.
 */
export default function ContactForm({ formId }: { formId: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Record<string, string> = {};
    if (!name) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address, like name@example.com.";
    if (message.length < 10) next.message = "Write a message of at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-card border border-mint/40 bg-mint/[0.07] p-6">
        <p className="font-display text-xl font-bold text-mint">Message sent.</p>
        <p className="mt-1 text-dim">Thanks for writing. I&apos;ll reply to the email address you gave.</p>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-tile border border-line bg-ink px-3.5 py-2.5 text-text placeholder:text-dim/60 focus:border-mint focus:outline-none aria-[invalid=true]:border-pink";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {(["name", "email"] as const).map((f) => (
        <div key={f}>
          <label htmlFor={f} className="text-sm font-medium capitalize">
            {f}
          </label>
          <input
            id={f}
            name={f}
            type={f === "email" ? "email" : "text"}
            autoComplete={f}
            aria-invalid={!!errors[f]}
            aria-describedby={errors[f] ? `${f}-error` : undefined}
            className={field}
          />
          {errors[f] && (
            <p id={`${f}-error`} className="mt-1 text-sm text-pink">
              {errors[f]}
            </p>
          )}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={field}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-pink">
            {errors.message}
          </p>
        )}
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm text-pink">
          The message didn&apos;t send. Check your connection and try again, or email me directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-mint px-5 py-2.5 font-medium text-ink transition-opacity disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
