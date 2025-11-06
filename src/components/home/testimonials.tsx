import { SectionScroller } from "./sectionScroller";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      title: "Sophia's Story",
      description:
        "HealthConnect made it so easy to find a specialist and book an appointment. The doctor was amazing!",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPXnopulybSae3xBlwzMnklejF7u5JbTEyYEuAvW8J50ozrd1inj529QwyZcJMjtUfLUgRwFtohwExhaDs_IT8WDxiHXoHIt9x_e-tPePUwti9Xlb8R2Eip4gY8wXWK6oHgyGddav0X3LyqvxMfGqCjttyNv7zf9ywXODjZcz58_jf1zSKyxMlWEhsYCWl-CNGORM80y3eZ3Xp0O-x_-E0casN0j4Z63gyn5pm7fc7Pazk6G3juuD9sLUWOPerj6wFxuCwFw6CWCHk",
    },
    {
      title: "Ethan's Experience",
      description:
        "I was able to schedule my physical therapy sessions without any hassle. The app is user-friendly and efficient.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC4Iu59OMMyRFP0-cxH-i1xbI5JJXkTHtcPhmRNf73pz-vmr0oP-6CygDrHqIYclv9EyWw-BeiPr4uOTmDN62P9GBaH8jNcff3azK5NVWsbkJSDb7_GJkqfQ0WInoqhiKsLXBStdR0aFaXvZCiwvksrct1Mfxiv4X0qe1Bisq969wfGSdFRnVcn4ccL6nr8Z9iXJfistv7LK6BXMsLpAY0rInj4A80_N7QToVWIC3KduH6Tf8QaCO6VuQxsZofc0KxAxLGMmI5wSzIy",
    },
    {
      title: "Olivia's Journey",
      description:
        "The mental health support I received through HealthConnect has been invaluable. I highly recommend it.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBbw4wAENXa6FOW6Nz3_AkgkYAxcwVLHIOUJkhd3jX96OCiky6iN-hNpV9wNfYjRoxGBefq02AyDBHB8r9mW5yBRV_QKzHSZj9DcYBeLW3AKDSQGnFhjkPAewswKEBeDvDq0DdhcpVj_qz9wX5UqnyuNMb0OAYR0GlpNwt-yjSc4Ecd97hXeZFhIsmGAH9ZhQ-_pUezhX4u8XliTzCWdYk-UJAuEISKMkP1hnPsja_ly40JJztnTCbHXH09-yg_AD0jeO02-r2gMH42",
    },
  ];

  return <SectionScroller title="Patient Testimonials" items={testimonials} />;
};
