/* =========================================================================
   FIT FACTORY / CROSSFIT WEST HARTFORD — CONCEPT SITE CONFIG
   -------------------------------------------------------------------------
   Design concept prepared by The Switchboard Company.
   Every editable value lives here. The booking buttons currently open an
   in-page preview scheduler; going live means dropping in the real booking
   URL and nothing else on the site has to change.
   ========================================================================= */

window.SITE_CONFIG = {

  brand: {
    name: "Fit Factory / CrossFit West Hartford",
    shortName: "FF",
    tagline: "CrossFit in West Hartford",
  },

  contact: {
    venueName: "Fit Factory / CrossFit West Hartford",
    address: "West Hartford, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fit+Factory+CrossFit+West+Hartford+West+Hartford+CT",
    phone: "",
    phoneHref: "",
    email: "",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fitfactorywh.example/schedule",
      title: "Book a WOD",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "CrossFit class", "meta": "60 min · coach led"}, {"name": "Olympic lifting", "meta": "60 min · technique focus"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a WOD",
        body: "Hi Fit Factory / CrossFit West Hartford,\n\nI'd like to book. Here are my details:\n\n- Name:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fitfactorywh.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "CrossFit class", "meta": "60 min · coach led"}, {"name": "Olympic lifting", "meta": "60 min · technique focus"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Book a Session",
        body: "Hi,\n\nI'd like to book an Olympic lifting session.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fitfactorywh.example/schedule",
      title: "Register for On-Ramp",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "CrossFit class", "meta": "60 min · coach led"}, {"name": "Olympic lifting", "meta": "60 min · technique focus"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Register for On-Ramp",
        body: "Hi,\n\nI'd like to register for the On-Ramp Fundamentals program.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.fitfactorywh.example/schedule",
      title: "Come See the Box",
      subtitle: "Have a look around, meet whoever is on that day, and decide from there. No pressure either way.",
      services: [{"name": "CrossFit class", "meta": "60 min · coach led"}, {"name": "Olympic lifting", "meta": "60 min · technique focus"}],
      fallbackEmail: {
        to: "hello@example.com",
        subject: "Come See the Box",
        body: "Hi Fit Factory / CrossFit West Hartford,\n\nI'm interested in coming to see the box.\n\nThank you!",
      },
    },
  },
};
