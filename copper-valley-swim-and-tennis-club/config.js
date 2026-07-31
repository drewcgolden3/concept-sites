/* =========================================================================
   COPPER VALLEY SWIM AND TENNIS CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Copper Valley Swim and Tennis Club",
    shortName: "CV",
    tagline: "Swim & Tennis in Wallingford/Meriden",
  },

  contact: {
    venueName: "Copper Valley Swim and Tennis Club",
    address: "Wallingford/Meriden, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Copper+Valley+Swim+and+Tennis+Club+Wallingford+CT",
    phone: "",
    phoneHref: "",
    email: "thecoppervalleyclub@gmail.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.coppervalleyclub.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pool lane", "meta": "60 min · open swim"}],
      fallbackEmail: {
        to: "thecoppervalleyclub@gmail.com",
        subject: "Book a Court",
        body: "Hi Copper Valley Swim and Tennis Club,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Adult or junior:\n- Level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.coppervalleyclub.example/schedule",
      title: "Join Swim Team",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pool lane", "meta": "60 min · open swim"}],
      fallbackEmail: {
        to: "thecoppervalleyclub@gmail.com",
        subject: "Join Swim Team",
        body: "Hi,\n\nI'd like to register for swim team.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.coppervalleyclub.example/schedule",
      title: "Register for Camp",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pool lane", "meta": "60 min · open swim"}],
      fallbackEmail: {
        to: "thecoppervalleyclub@gmail.com",
        subject: "Register for Camp",
        body: "Hi,\n\nI'd like to register for Summer Camp.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.coppervalleyclub.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pool lane", "meta": "60 min · open swim"}],
      fallbackEmail: {
        to: "thecoppervalleyclub@gmail.com",
        subject: "Come See the Club",
        body: "Hi Copper Valley Swim and Tennis Club,\n\nI'm interested in coming to see the club.\n\nThank you!",
      },
    },
  },
};
