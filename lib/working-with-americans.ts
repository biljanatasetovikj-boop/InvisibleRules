// Everything date- or price-related for /working-with-americans lives here.
// Times carry their own offset: all of November is winter time in Skopje, so
// +01:00 (CET). If you move a date, change the matching display text right
// next to it.

export type WebinarSession = {
  // Goes into the registration email so Biljana can sort people by date.
  id: string;
  start: string;
  // The date disappears from the form at this moment.
  end: string;
  dayText: string;
  shortText: string;
  weekday: string;
};

export const WWA = {
  siteUrl: "https://theinvisiblerules.com",
  pagePath: "/working-with-americans",
  contactEmail: "biljanatasetovikj@gmail.com",
  linkedIn: "https://www.linkedin.com/in/biljana-kuzmanovska-tasetovikj/",

  webinar: {
    title: "The unwritten rules of working with Americans",
    timeText: "18:30 CET",
    timeTextLong: "18:30 CET (Skopje time)",
    // The same Google Meet link for every date.
    meetLink: "https://meet.google.com/hge-svii-zxd",
    sessions: [
      {
        id: "2026-11-16",
        start: "2026-11-16T18:30:00+01:00",
        end: "2026-11-16T19:30:00+01:00",
        dayText: "Monday 16 November",
        shortText: "Mon 16 Nov",
        weekday: "Monday",
      },
      {
        id: "2026-11-18",
        start: "2026-11-18T18:30:00+01:00",
        end: "2026-11-18T19:30:00+01:00",
        dayText: "Wednesday 18 November",
        shortText: "Wed 18 Nov",
        weekday: "Wednesday",
      },
      {
        id: "2026-11-23",
        start: "2026-11-23T18:30:00+01:00",
        end: "2026-11-23T19:30:00+01:00",
        dayText: "Monday 23 November",
        shortText: "Mon 23 Nov",
        weekday: "Monday",
      },
      {
        id: "2026-11-25",
        start: "2026-11-25T18:30:00+01:00",
        end: "2026-11-25T19:30:00+01:00",
        dayText: "Wednesday 25 November",
        shortText: "Wed 25 Nov",
        weekday: "Wednesday",
      },
    ] as WebinarSession[],
  },

  course: {
    title: "Working with Americans: A 4-Week Starter Course",
    startText: "30 November",
    datesText: "30 November – 25 December",
    price: 139,
    // What the course will cost when it runs again in the spring.
    springPrice: 420,
  },

  zine: {
    title: "Learning a culture is like learning a language.",
    // Lives in public/. Sent by hand after the webinar, not linked on the page.
    file: "/invisible-rules-zine.pdf",
  },
} as const;

// Dates that haven't finished yet, in order.
export function upcomingSessions(now: number) {
  return WWA.webinar.sessions.filter((s) => now < Date.parse(s.end));
}

export function sessionById(id: string) {
  return WWA.webinar.sessions.find((s) => s.id === id);
}

// Google Calendar "add event" link for one webinar date.
export function webinarCalendarUrl(session: WebinarSession) {
  const fmt = (iso: string) =>
    new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Webinar: ${WWA.webinar.title}`,
    dates: `${fmt(session.start)}/${fmt(session.end)}`,
    details: `Free webinar with Biljana, Invisible Rules.\nJoin here: ${WWA.webinar.meetLink}`,
    location: WWA.webinar.meetLink,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
