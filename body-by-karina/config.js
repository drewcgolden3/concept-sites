/* =========================================================================
   BODY BY KARINA — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Body by Karina",
    shortName: "BK",
    tagline: "Personal Training in Ridgefield",
  },

  contact: {
    venueName: "Body by Karina",
    address: "Ridgefield, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Body+by+Karina+Ridgefield+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bodybykarina.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Small-group coaching", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi Karina,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Goal:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bodybykarina.example/schedule",
      title: "Join a Group",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Small-group coaching", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join a Group",
        body: "Hi,\n\nI'd like to join a small-group coaching session.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bodybykarina.example/schedule",
      title: "Start Nutrition Coaching",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Small-group coaching", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Start Nutrition Coaching",
        body: "Hi,\n\nI'd like to start nutrition coaching.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bodybykarina.example/schedule",
      title: "Come See the Studio",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Small-group coaching", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Studio",
        body: "Hi Karina,\n\nI'm interested in coming to see the studio.\n\nThank you!",
      },
    },
  },
};
