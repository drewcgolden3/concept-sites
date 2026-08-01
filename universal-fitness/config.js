/* =========================================================================
   UNIVERSAL FITNESS — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Universal Fitness",
    shortName: "UF",
    tagline: "Strength & Conditioning in Watertown",
  },

  contact: {
    venueName: "Universal Fitness",
    address: "Watertown, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Universal+Fitness+Watertown+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.universal-fitness.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Open gym", "meta": "60 min · member access"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi Universal Fitness,\n\nI'd like to book a session. Here are my details:\n\n- Name:\n- Goals:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.universal-fitness.example/schedule",
      title: "Group Classes",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Open gym", "meta": "60 min · member access"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Group Classes",
        body: "Hi,\n\nI'd like to register for a group class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.universal-fitness.example/schedule",
      title: "Join a Coached Program",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Open gym", "meta": "60 min · member access"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join a Coached Program",
        body: "Hi,\n\nI'd like to join a coached program.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.universal-fitness.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Open gym", "meta": "60 min · member access"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Gym",
        body: "Hi Universal Fitness,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
