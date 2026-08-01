/* =========================================================================
   KENT FITNESS MATTERS — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Kent Fitness Matters",
    shortName: "KF",
    tagline: "Gym & Personal Training in Kent",
  },

  contact: {
    venueName: "Kent Fitness Matters",
    address: "Kent, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kent+Fitness+Matters+Kent+CT",
    phone: "",
    phoneHref: "",
    email: "fitnessmattersofkent@yahoo.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.kentfitnessmatters.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "fitnessmattersofkent@yahoo.com",
        subject: "Book a Session",
        body: "Hi Kent Fitness Matters,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.kentfitnessmatters.example/schedule",
      title: "Reserve a Spot",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "fitnessmattersofkent@yahoo.com",
        subject: "Reserve a Spot",
        body: "Hi,\n\nI'd like to reserve a spot in a group class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.kentfitnessmatters.example/schedule",
      title: "Register for Kickstart",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "fitnessmattersofkent@yahoo.com",
        subject: "Register for Kickstart",
        body: "Hi,\n\nI'd like to register for the New Member Kickstart program.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.kentfitnessmatters.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min · one-on-one"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "fitnessmattersofkent@yahoo.com",
        subject: "Come See the Gym",
        body: "Hi Kent Fitness Matters,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
