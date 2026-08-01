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
    name: "Phys-Ed Health Club",
    shortName: "PE",
    tagline: "Health Club & Personal Training in New Milford",
  },

  contact: {
    venueName: "Phys-Ed Health Club",
    address: "New Milford, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Phys-Ed+Health+Club+New+Milford+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.phys-ed-health-club.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Group fitness", "meta": "45 min \u00b7 up to 12"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi Phys-Ed Health Club,\n\nI'd like to book a session. Here are my details:\n\n- Name:\n- Goal:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.phys-ed-health-club.example/schedule",
      title: "Join a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Group fitness", "meta": "45 min \u00b7 up to 12"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Join a Class",
        body: "Hi,\n\nI'd like to join a Group Fitness class.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.phys-ed-health-club.example/schedule",
      title: "Register Now",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Group fitness", "meta": "45 min \u00b7 up to 12"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register Now",
        body: "Hi,\n\nI'd like to register for the Wellness Program.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.phys-ed-health-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Personal training", "meta": "60 min \u00b7 1-on-1"}, {"name": "Group fitness", "meta": "45 min \u00b7 up to 12"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Club",
        body: "Hi Phys-Ed Health Club,\n\nI'm interested in coming to see the club.\n\nThank you!",
      },
    },
  },
};
