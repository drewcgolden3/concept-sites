/* =========================================================================
   FIT 30 CHESHIRE — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "FIT 30 Cheshire",
    shortName: "F3",
    tagline: "30-Minute Training in Cheshire",
  },

  contact: {
    venueName: "FIT 30 Cheshire",
    address: "Cheshire, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=FIT+30+Cheshire+Cheshire+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fit30cheshire.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "30-minute training", "meta": "30 min · coach led"}, {"name": "Nutrition consult", "meta": "30 min · one-on-one"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi FIT 30 Cheshire,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fit30cheshire.example/schedule",
      title: "Book a Consult",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "30-minute training", "meta": "30 min · coach led"}, {"name": "Nutrition consult", "meta": "30 min · one-on-one"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Consult",
        body: "Hi,\n\nI'd like to book a nutrition consult.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fit30cheshire.example/schedule",
      title: "Register for Intro",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "30-minute training", "meta": "30 min · coach led"}, {"name": "Nutrition consult", "meta": "30 min · one-on-one"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for Intro",
        body: "Hi,\n\nI'd like to register for the New Member Intro session.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fit30cheshire.example/schedule",
      title: "Come See the Studio",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "30-minute training", "meta": "30 min · coach led"}, {"name": "Nutrition consult", "meta": "30 min · one-on-one"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Studio",
        body: "Hi FIT 30 Cheshire,\n\nI'm interested in coming to see the studio.\n\nThank you!",
      },
    },
  },
};
