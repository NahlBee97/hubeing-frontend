import { SectionScroller } from "./sectionScroller";

export const ServicesSection = () => {
  const services = [
    {
      title: "General Consultation",
      description:
        "Comprehensive health assessments and personalized care plans.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBk1L9GCQ3JgdMNzV7JLyXq68GsgeB3fVQkf1dOXPq_gxbr62eJQ002GhOW2apNTvtMU-Hnc1tOQyZS0z_MBdE1-C_ANDUBS39fme3frdTlw3BVosxP1pTYre7llneKIo-4OjH_UHymYgZP1hWv6nuoukB-iKXSsEoBDH3OKA8nuS9r45494-3zik_EXaXuuNS2lflpuvnbYii-9JlBrvWWsxBx2lzAqGaigjS15xhmlQ-j-evCrix7ZdzanAUEPcekUltM0uHjLgVg",
    },
    {
      title: "Physical Therapy",
      description:
        "Rehabilitation and recovery programs tailored to your needs.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCWFp832gTp_hMODD-yZERJmnFi-Fn67_NmXO4-WDs9AYMeh1oR4-ooHdyllwwfnJniO2rnXTl35L_EypSqqRY3Y-G_a_DP3ggGIQKinrp9Wc__cc4sTQX_eT2pOnQODTwl6uNEiekp28OcE9pxHFUAb_Zh_Ad__gKI_3A2qhy2vUn3olVXRaQPjK8li0qXSWoTVgmclsQssJo-r9gPAbRVHEuweVZ0lVg7Yfe_G_i3-Qlgi-pzeDYtVlSYLybM8nzy3otkWQ85PU6e",
    },
    {
      title: "Mental Health Support",
      description: "Confidential counseling and support for mental well-being.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPKF6AQZcF7lFTY3IUDNxC7-km-KCk1lwVi-YyUbVov8kxHiHpkMG-SCuz2aUWbmalEgZ3mKfnazAzyfYyeNI-RkC6l8ou1Td5p_ftQH4EMNsEyI9_y1peGs1rxvHyJ1flRGNVCmPgStzjlxTkNYEDCDFVSluwMcoFNVf50ZJ48zRAT6TU8gTjRJ3RVy-SYgLMpWglQThOWthBly4E3TGhCTGgHAMtGiTFMq06jdlxa_M8jRpT-YPvRdqD1yelgDihpvIyZpCBdXJV",
    },
    {
      title: "Nutrition Planning",
      description:
        "Dietary guidance and meal planning for a healthier lifestyle.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCC1uyVCuwr47wIOU8Zne4wfUXV3Ons01YtzR3JGVhFW7tIxWUtFVIvvNAiwviwafEJ-8C-DhIkGcgwBe-0giV3XAP7Nm_V3vyf0ZpFh-gVVEelW2vfxfrnTyqONDl_0i3EBCw96bQgOBbXnG58eyS6bpH50gVJZ2cNunZzQOaduVdHc2BCMjTVC3wcllnq9O5wHAKHoytzfcZWISO520KMJOt69sKbX6hKqaXorUJ6-bGVH34TWOx0NVYaVhhHF_5eeMeQ6CXw0CFy",
    },
  ];

  return <SectionScroller title="Services Offered" items={services} />;
};