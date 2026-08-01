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
    name: "Middletown CrossFit",
    shortName: "MCF",
    tagline: "CrossFit & Group Training in Middletown",
  },

  contact: {
    venueName: "Middletown CrossFit",
    address: "Middletown, CT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Middletown+CrossFit+Middletown+CT",
    phone: "",
    phoneHref: "",
    email: "keenan@middletowncrossfit.com",
  },

  booking: {
    court: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.middletown-crossfit.example/schedule",
      title: "Book a Class",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "CrossFit class", "meta": "60 min \u00b7 coached"}, {"name": "Olympic weightlifting", "meta": "60 min \u00b7 technique focus"}],
      fallbackEmail: {
        to: "keenan@middletowncrossfit.com",
        subject: "Book a Class",
        body: "Hi Middletown CrossFit,\n\nI'd like to book a class. Here are my details:\n\n- Name:\n- Experience level:\n- Preferred days & times:\n\nThank you!",
      },
    },

    pickleball: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.middletown-crossfit.example/schedule",
      title: "Book a Session",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "CrossFit class", "meta": "60 min \u00b7 coached"}, {"name": "Olympic weightlifting", "meta": "60 min \u00b7 technique focus"}],
      fallbackEmail: {
        to: "keenan@middletowncrossfit.com",
        subject: "Book a Session",
        body: "Hi,\n\nI'd like to book an Olympic Weightlifting session.\n\nThank you!",
      },
    },

    camp: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.middletown-crossfit.example/schedule",
      title: "Start Foundations",
      subtitle: "Pick a time that works. Confirmed in a couple of taps.",
      services: [{"name": "CrossFit class", "meta": "60 min \u00b7 coached"}, {"name": "Olympic weightlifting", "meta": "60 min \u00b7 technique focus"}],
      fallbackEmail: {
        to: "keenan@middletowncrossfit.com",
        subject: "Start Foundations",
        body: "Hi,\n\nI'd like to start the Foundations program.\n\nThank you!",
      },
    },

    secondary: {
      type: "embed",
      demo: true,
      embedUrl: "https://book.middletown-crossfit.example/schedule",
      title: "Come See the Box",
      subtitle: "Watch a class, meet the coaches, and decide from there. No pressure either way.",
      services: [{"name": "CrossFit class", "meta": "60 min \u00b7 coached"}, {"name": "Olympic weightlifting", "meta": "60 min \u00b7 technique focus"}],
      fallbackEmail: {
        to: "keenan@middletowncrossfit.com",
        subject: "Come See the Box",
        body: "Hi Middletown CrossFit,\n\nI'm interested in coming to see the box.\n\nThank you!",
      },
    },
  },
};
