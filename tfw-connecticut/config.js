/* =========================================================================
   A LASTING FITNESS (FORMERLY TFW CONNECTICUT) — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "A Lasting Fitness",
    shortName: "ALF",
    tagline: "Personal Training & Small Group Fitness in Newtown",
  },

  contact: {
    venueName: "A Lasting Fitness",
    address: "Newtown, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Lasting+Fitness+Newtown+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.a-lasting-fitness.example/schedule",
      title: "Start a Trial",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training trial", "meta": "1 session · 1-on-1"}, {"name": "Small group trial", "meta": "45 min · drop in"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Start a Trial",
        body: "Hi A Lasting Fitness,\n\nI'd like to start a trial. Here are my details:\n\n- Name:\n- Goals:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.a-lasting-fitness.example/schedule",
      title: "Reserve a Spot",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training trial", "meta": "1 session · 1-on-1"}, {"name": "Small group trial", "meta": "45 min · drop in"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Reserve a Spot",
        body: "Hi,\n\nI'd like to reserve a spot in a small group class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.a-lasting-fitness.example/schedule",
      title: "Book a Consult",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training trial", "meta": "1 session · 1-on-1"}, {"name": "Small group trial", "meta": "45 min · drop in"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Consult",
        body: "Hi,\n\nI'd like to book a nutrition consult.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.a-lasting-fitness.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training trial", "meta": "1 session · 1-on-1"}, {"name": "Small group trial", "meta": "45 min · drop in"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Gym",
        body: "Hi A Lasting Fitness,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
