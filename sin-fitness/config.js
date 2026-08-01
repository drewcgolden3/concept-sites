/* =========================================================================
   SIN FITNESS — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "SIN Fitness",
    shortName: "SIN",
    tagline: "Strength & Conditioning in Berlin",
  },

  contact: {
    venueName: "SIN Fitness",
    address: "Berlin, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=SIN+Fitness+Berlin+CT",
    phone: "",
    phoneHref: "",
    email: "sinteam@sinfitberlin.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.sin-fitness.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "1-on-1 training", "meta": "60 min · personal coaching"}, {"name": "Open gym", "meta": "60 min · member access"}],
      fallbackEmail: {
        to: "sinteam@sinfitberlin.com",
        subject: "Book a Session",
        body: "Hi SIN Fitness,\n\nI'd like to book a session. Here are my details:\n\n- Name:\n- Goals:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.sin-fitness.example/schedule",
      title: "Group Classes",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "1-on-1 training", "meta": "60 min · personal coaching"}, {"name": "Open gym", "meta": "60 min · member access"}],
      fallbackEmail: {
        to: "sinteam@sinfitberlin.com",
        subject: "Group Classes",
        body: "Hi,\n\nI'd like to register for a group class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.sin-fitness.example/schedule",
      title: "Join the Transformation Program",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "1-on-1 training", "meta": "60 min · personal coaching"}, {"name": "Open gym", "meta": "60 min · member access"}],
      fallbackEmail: {
        to: "sinteam@sinfitberlin.com",
        subject: "Join the Transformation Program",
        body: "Hi,\n\nI'd like to join the Transformation Program.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.sin-fitness.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "1-on-1 training", "meta": "60 min · personal coaching"}, {"name": "Open gym", "meta": "60 min · member access"}],
      fallbackEmail: {
        to: "sinteam@sinfitberlin.com",
        subject: "Come See the Gym",
        body: "Hi SIN Fitness,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
