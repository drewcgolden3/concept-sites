/* =========================================================================
   WOODLEDGE POOL CLUB — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Woodledge Pool Club",
    shortName: "WPC",
    tagline: "Swim & Tennis Club in the Farmington Area",
  },

  contact: {
    venueName: "Woodledge Pool Club",
    address: "Farmington area, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Woodledge+Pool+Club+Farmington+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.woodledge-pool-club.example/schedule",
      title: "Book a Court",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pool access", "meta": "Member access"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Court",
        body: "Hi Woodledge Pool Club,\n\nI'd like to book a court. Here are my details:\n\n- Name:\n- Membership status:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.woodledge-pool-club.example/schedule",
      title: "Pool Access",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pool access", "meta": "Member access"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Pool Access",
        body: "Hi,\n\nI'd like to reserve pool access.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.woodledge-pool-club.example/schedule",
      title: "Register for Swim Team",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pool access", "meta": "Member access"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for Swim Team",
        body: "Hi,\n\nI'd like to register for the swim team.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.woodledge-pool-club.example/schedule",
      title: "Come See the Club",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "Tennis court", "meta": "60 min · singles or doubles"}, {"name": "Pool access", "meta": "Member access"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Club",
        body: "Hi Woodledge Pool Club,\n\nI'm interested in coming to see the club and asking about membership.\n\nThank you!",
      },
    },
  },
};
