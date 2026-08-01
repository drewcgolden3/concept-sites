/* =========================================================================
   TWIN LAKES BEACH CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Twin Lakes Beach Club",
    shortName: "TLBC",
    tagline: "Swim & Tennis Club in Salisbury",
  },

  contact: {
    venueName: "Twin Lakes Beach Club",
    address: "Salisbury, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Twin+Lakes+Beach+Club+Salisbury+CT",
    phone: "",
    phoneHref: "",
    email: "tlbcinformation@gmail.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.twin-lakes-beach-club.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Beach & swim access", "meta": "Member access"}],
      fallbackEmail: {
        to: "tlbcinformation@gmail.com",
        subject: "Book a Court",
        body: "Hi Twin Lakes Beach Club,\n\nI'd like to book a court. Here are my details:\n\n- Name:\n- Membership status:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.twin-lakes-beach-club.example/schedule",
      title: "Swim & Beach Access",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Beach & swim access", "meta": "Member access"}],
      fallbackEmail: {
        to: "tlbcinformation@gmail.com",
        subject: "Swim & Beach Access",
        body: "Hi,\n\nI'd like to reserve swim & beach access.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.twin-lakes-beach-club.example/schedule",
      title: "Register for Summer Camp",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Beach & swim access", "meta": "Member access"}],
      fallbackEmail: {
        to: "tlbcinformation@gmail.com",
        subject: "Register for Summer Camp",
        body: "Hi,\n\nI'd like to register for Summer Camp.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.twin-lakes-beach-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Beach & swim access", "meta": "Member access"}],
      fallbackEmail: {
        to: "tlbcinformation@gmail.com",
        subject: "Come See the Club",
        body: "Hi Twin Lakes Beach Club,\n\nI'm interested in coming to see the club.\n\nThank you!",
      },
    },
  },
};
