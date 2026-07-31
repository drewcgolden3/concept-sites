/* =========================================================================
   UNDERGROUND FITNESS — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Underground Fitness",
    shortName: "UF",
    tagline: "Strength Training Gym in Stamford",
  },

  contact: {
    venueName: "Underground Fitness",
    address: "Stamford, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Underground+Fitness+Stamford+CT",
    phone: "",
    phoneHref: "",
    email: "undergroundfitct@aol.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.underground-fitness.example/schedule",
      title: "Join a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Strength training", "meta": "60 min · coached"}, {"name": "Open gym block", "meta": "Self-directed · all levels"}],
      fallbackEmail: {
        to: "undergroundfitct@aol.com",
        subject: "Join a Session",
        body: "Hi Underground Fitness team,\n\nI'd like to join a session. Here are my details:\n\n- Name:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.underground-fitness.example/schedule",
      title: "Check Open Hours",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Strength training", "meta": "60 min · coached"}, {"name": "Open gym block", "meta": "Self-directed · all levels"}],
      fallbackEmail: {
        to: "undergroundfitct@aol.com",
        subject: "Check Open Hours",
        body: "Hi,\n\nI'd like to confirm open gym hours.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.underground-fitness.example/schedule",
      title: "Reserve a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Coached class", "meta": "45 min · group"}, {"name": "Strength training", "meta": "60 min · coached"}],
      fallbackEmail: {
        to: "undergroundfitct@aol.com",
        subject: "Reserve a Class",
        body: "Hi,\n\nI'd like to reserve a spot in a coached class.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.underground-fitness.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is coaching that day, and decide from there. No pressure either way.",
      services: [{"name": "Strength training", "meta": "60 min · coached"}, {"name": "Coached class", "meta": "45 min · group"}],
      fallbackEmail: {
        to: "undergroundfitct@aol.com",
        subject: "Come See the Gym",
        body: "Hi Underground Fitness team,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
