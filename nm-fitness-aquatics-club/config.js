/* =========================================================================
   §BIZ_UPPER§ — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "NM Fitness & Aquatics Club",
    shortName: "NM",
    tagline: "Fitness & Swim Club in New Milford",
  },

  contact: {
    venueName: "NM Fitness & Aquatics Club",
    address: "New Milford, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=NM+Fitness+%26+Aquatics+Club+New+Milford+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.nm-fitness-and-aquatics-club.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Group fitness class", "meta": "45 min \u00b7 all levels"}, {"name": "Swim lesson", "meta": "30 min \u00b7 kids or adults"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join a Class",
        body: "Hi NM Fitness & Aquatics Club,\n\nI'd like to join a class. Here are my details:\n\n- Name:\n- Preferred class:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.nm-fitness-and-aquatics-club.example/schedule",
      title: "Book Swim Lessons",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Group fitness class", "meta": "45 min \u00b7 all levels"}, {"name": "Swim lesson", "meta": "30 min \u00b7 kids or adults"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book Swim Lessons",
        body: "Hi,\n\nI'd like to book swim lessons.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.nm-fitness-and-aquatics-club.example/schedule",
      title: "Register for Camp",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Group fitness class", "meta": "45 min \u00b7 all levels"}, {"name": "Swim lesson", "meta": "30 min \u00b7 kids or adults"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for Camp",
        body: "Hi,\n\nI'd like to register for Summer Swim Camp.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.nm-fitness-and-aquatics-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Group fitness class", "meta": "45 min \u00b7 all levels"}, {"name": "Swim lesson", "meta": "30 min \u00b7 kids or adults"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Club",
        body: "Hi NM Fitness & Aquatics Club,\n\nI'm interested in coming to see the club.\n\nThank you!",
      },
    },
  },
};
