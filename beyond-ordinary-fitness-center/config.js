/* =========================================================================
   BEYOND ORDINARY FITNESS CENTER — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Beyond Ordinary Fitness Center",
    shortName: "BO",
    tagline: "Gym & Personal Training in Thomaston",
  },

  contact: {
    venueName: "Beyond Ordinary Fitness Center",
    address: "Thomaston, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Beyond+Ordinary+Fitness+Center+Thomaston+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.beyondordinaryfitness.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi Beyond Ordinary Fitness Center,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.beyondordinaryfitness.example/schedule",
      title: "Reserve a Spot",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Reserve a Spot",
        body: "Hi,\n\nI'd like to reserve a spot in a group class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.beyondordinaryfitness.example/schedule",
      title: "Register for Kickstart",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for Kickstart",
        body: "Hi,\n\nI'd like to register for the New Member Kickstart program.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.beyondordinaryfitness.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Gym",
        body: "Hi Beyond Ordinary Fitness Center,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
