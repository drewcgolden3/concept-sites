/* =========================================================================
   BETHEL FITNESS 24X7 — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Bethel Fitness 24x7",
    shortName: "BF",
    tagline: "Private, 24-Hour Gym in Bethel",
  },

  contact: {
    venueName: "Bethel Fitness 24x7",
    address: "Bethel, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bethel+Fitness+24x7+Bethel+CT",
    phone: "",
    phoneHref: "",
    email: "BethelFitness24x7@gmail.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bethelfitness24x7.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Small-group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "BethelFitness24x7@gmail.com",
        subject: "Book a Session",
        body: "Hi Bethel Fitness 24x7,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Goal:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bethelfitness24x7.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Small-group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "BethelFitness24x7@gmail.com",
        subject: "Join a Class",
        body: "Hi,\n\nI'd like to join a small-group class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bethelfitness24x7.example/schedule",
      title: "Get a Membership",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Small-group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "BethelFitness24x7@gmail.com",
        subject: "Get a Membership",
        body: "Hi,\n\nI'd like to sign up for a 24-Hour Access Membership.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bethelfitness24x7.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Small-group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "BethelFitness24x7@gmail.com",
        subject: "Come See the Gym",
        body: "Hi Bethel Fitness 24x7,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
