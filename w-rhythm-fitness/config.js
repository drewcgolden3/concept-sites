/* =========================================================================
   W. RHYTHM FITNESS — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "W. Rhythm Fitness",
    shortName: "WR",
    tagline: "Rhythm-Based Fitness in Kent",
  },

  contact: {
    venueName: "W. Rhythm Fitness",
    address: "Kent, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=W.+Rhythm+Fitness+Kent+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.w-rhythm-fitness.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Rhythm class", "meta": "50 min · all levels"}, {"name": "Private session", "meta": "50 min · one-on-one"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi W. Rhythm Fitness,\n\nI'd like to book a session. Here are my details:\n\n- Name:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.w-rhythm-fitness.example/schedule",
      title: "Group Classes",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Rhythm class", "meta": "50 min · all levels"}, {"name": "Private session", "meta": "50 min · one-on-one"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Group Classes",
        body: "Hi,\n\nI'd like to register for a group class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.w-rhythm-fitness.example/schedule",
      title: "Join a Coached Program",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Rhythm class", "meta": "50 min · all levels"}, {"name": "Private session", "meta": "50 min · one-on-one"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join a Coached Program",
        body: "Hi,\n\nI'd like to join a coached program.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.w-rhythm-fitness.example/schedule",
      title: "Come See the Studio",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Rhythm class", "meta": "50 min · all levels"}, {"name": "Private session", "meta": "50 min · one-on-one"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Studio",
        body: "Hi W. Rhythm Fitness,\n\nI'm interested in coming to see the studio.\n\nThank you!",
      },
    },
  },
};
