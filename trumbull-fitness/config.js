/* =========================================================================
   TRUMBULL FITNESS — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Trumbull Fitness",
    shortName: "TF",
    tagline: "Personal Training & Open Gym in Trumbull",
  },

  contact: {
    venueName: "Trumbull Fitness",
    address: "Trumbull, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Trumbull+Fitness+Trumbull+CT",
    phone: "",
    phoneHref: "",
    email: "TrumbullFitnessCT@gmail.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.trumbull-fitness.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · 1-on-1"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "TrumbullFitnessCT@gmail.com",
        subject: "Book a Session",
        body: "Hi Trumbull Fitness team,\n\nI'd like to book a session. Here are my details:\n\n- Name:\n- Goal:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.trumbull-fitness.example/schedule",
      title: "Check Open Hours",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min · 1-on-1"}, {"name": "Open gym block", "meta": "Self-directed · all levels"}],
      fallbackEmail: {
        to: "TrumbullFitnessCT@gmail.com",
        subject: "Check Open Hours",
        body: "Hi,\n\nI'd like to confirm open gym hours.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.trumbull-fitness.example/schedule",
      title: "Reserve a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Group class", "meta": "45 min · small group"}, {"name": "Personal training", "meta": "60 min · 1-on-1"}],
      fallbackEmail: {
        to: "TrumbullFitnessCT@gmail.com",
        subject: "Reserve a Class",
        body: "Hi,\n\nI'd like to reserve a spot in a group class.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.trumbull-fitness.example/schedule",
      title: "Come See the Gym",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min · 1-on-1"}, {"name": "Group class", "meta": "45 min · small group"}],
      fallbackEmail: {
        to: "TrumbullFitnessCT@gmail.com",
        subject: "Come See the Gym",
        body: "Hi Trumbull Fitness team,\n\nI'm interested in coming to see the gym.\n\nThank you!",
      },
    },
  },
};
