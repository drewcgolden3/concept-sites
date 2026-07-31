/* =========================================================================
   BFIT 369 — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "BFit 369",
    shortName: "B3",
    tagline: "Gym & Personal Training in Bridgeport",
  },

  contact: {
    venueName: "BFit 369",
    address: "Bridgeport, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=BFit+369+Bridgeport+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bfit369.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi BFit 369,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Goal:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bfit369.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join a Class",
        body: "Hi,\n\nI'd like to join a group class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bfit369.example/schedule",
      title: "Register Now",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register Now",
        body: "Hi,\n\nI'd like to register for the Summer Shred Challenge.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.bfit369.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Gym",
        body: "Hi BFit 369,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
