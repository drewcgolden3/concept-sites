/* =========================================================================
   WESTPORT SWIM CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Westport Swim Club",
    shortName: "WSC",
    tagline: "Competitive & Recreational Swim in Westport",
  },

  contact: {
    venueName: "Westport Swim Club",
    address: "Westport, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Westport+Swim+Club+Westport+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.westport-swim-club.example/schedule",
      title: "Register for Lessons",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Learn to swim lesson", "meta": "30 min · small group"}, {"name": "Swim team practice", "meta": "90 min · all levels"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for Lessons",
        body: "Hi Westport Swim Club,\n\nI'd like to register. Here are my details:\n\n- Swimmer name:\n- Age:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.westport-swim-club.example/schedule",
      title: "Join the Team",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Swim team practice", "meta": "90 min · all levels"}, {"name": "Learn to swim lesson", "meta": "30 min · small group"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join the Team",
        body: "Hi,\n\nI'd like to join the swim team.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.westport-swim-club.example/schedule",
      title: "Register for Summer",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Novas summer program", "meta": "Summer session"}, {"name": "All Stars summer program", "meta": "Summer session"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for Summer",
        body: "Hi,\n\nI'd like to register for Novas and All Stars summer swim.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.westport-swim-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on deck that day, and decide from there. No pressure either way.",
      services: [{"name": "Learn to swim lesson", "meta": "30 min · small group"}, {"name": "Swim team practice", "meta": "90 min · all levels"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Club",
        body: "Hi Westport Swim Club,\n\nI'm interested in coming to see the club.\n\nThank you!",
      },
    },
  },
};
