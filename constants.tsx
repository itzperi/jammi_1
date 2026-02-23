
export const COLORS = {
  SAFFRON: '#D4882E',
  SAFFRON_LIGHT: '#F0C878',
  GREEN_DEEP: '#2E5339',
  GREEN_MID: '#3D7A52',
  CREAM: '#FAF6F0',
  CREAM_DARK: '#F0E8DC',
  INK: '#1A1A18',
  INK_SOFT: '#4A4A45',
  INK_MUTED: '#7A7A72',
  BORDER: '#E8E0D5',
  DARK_SCENE: '#0C0E0A'
};

export const MOCK_PRODUCTS = [
  {
    id: 'keshpro-hair-oil',
    name: 'Keshpro Ayurvedic Hair Oil',
    label: 'Ayurvedic Proprietary Medicine',
    shortDesc: 'Handcrafted using the ancient Kshir Pak Vidhi process, Keshpro Hair Oil combines 21 potent herbs to reduce hair fall, promote new growth, and prevent premature graying.',
    price: 450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBbzV7L4bJ6zhpjys02dRl7iaLJkqBgePbZHWmvEZvtkXAUd2EWmyhjiRPvcpeZ9btWe-HBHJSb3I4vgy2YRCQ-0sw6R9YSximOX-w3bOb2x2wNWKnoWrwPwcnC3uP8vXes2sVop3gCXeKo1ijPQ2vUt7aoYQEOv6vRJbd4KL8WXnIMjBHMacQA0MHQ2chYUdRta0_sge17bd2SGJnFzQVFwG4t_tJQ_qEWKeAF7JrAlMfBU9cJBb9rJB1vyhTJaUBAAyppGZl5SQ',
    category: 'Hair Care',
    features: [
      { title: '21 Potent Herbs', desc: 'A synergistic blend of Bhringraj, Amla, Brahmi, and more.', icon: 'eco' },
      { title: 'Kshir Pak Vidhi', desc: 'Ancient process where herbs are boiled in milk for maximum potency.', icon: 'auto_awesome' },
      { title: '100% Natural', desc: 'No mineral oils, parabens, or synthetic fragrances.', icon: 'verified' }
    ],
    banner: {
      title: 'Keshpro Hair Oil',
      subtitle: 'Premium Ayurvedic Hair Care',
      desc: 'Handcrafted using the ancient Kshir Pak Vidhi process...',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBbzV7L4bJ6zhpjys02dRl7iaLJkqBgePbZHWmvEZvtkXAUd2EWmyhjiRPvcpeZ9btWe-HBHJSb3I4vgy2YRCQ-0sw6R9YSximOX-w3bOb2x2wNWKnoWrwPwcnC3uP8vXes2sVop3gCXeKo1ijPQ2vUt7aoYQEOv6vRJbd4KL8WXnIMjBHMacQA0MHQ2chYUdRta0_sge17bd2SGJnFzQVFwG4t_tJQ_qEWKeAF7JrAlMfBU9cJBb9rJB1vyhTJaUBAAyppGZl5SQ',
      stats: [
        { label: '98% Hair Fall Reduction', icon: 'trending_down' },
        { label: '4.9/5 Rating', icon: 'star' },
        { label: '15k+ Reviews', icon: 'group' }
      ]
    },
    botanicals: [
      { name: 'Bhringraj', desc: 'The "King of Hair", known for promoting growth and preventing premature graying.', image: 'https://picsum.photos/seed/bhringraj/400/400' },
      { name: 'Amla', desc: 'Rich in Vitamin C, it strengthens hair follicles and adds a natural shine.', image: 'https://picsum.photos/seed/amla/400/400' }
    ],
    ritual: [
      { title: 'Apply', desc: 'Massage gently into scalp using circular motions.' },
      { title: 'Leave', desc: 'Keep for at least 2 hours or overnight for deep penetration.' },
      { title: 'Wash', desc: 'Cleanse with a mild Ayurvedic shampoo.' }
    ],
    results: [
      { percentage: '98%', text: 'Reduction in hair fall within 4 weeks.' },
      { percentage: '92%', text: 'Improvement in hair texture and shine.' },
      { percentage: '85%', text: 'New hair growth observed by users.' }
    ]
  },
  {
    id: 'softlips-lip-balm',
    name: 'SoftLips Natural Lip Balm',
    label: 'Natural Lip Care',
    shortDesc: 'Infused with potent herbal oils for 24-hour hydration. 100% natural, petroleum-free.',
    price: 150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2V2YzTwDuSgJNuu6f2qZNOMJlbiVRwlEDUYH2786Q81XI2gcEq_QTPaOkakVtPks3Gh6dXPIgGulItm2O5Gwfys9wqTD4SqVAAxJC3T7_Yoi4IWzOaDPQnnEV1XyU7wNYSyN8UbvUlmnhsg8Q7SWAISuZ9BN74xjVLCmgsMmVdNHwHqwLjy7GmzP9tzAeNw7ZnERHOb1rp26_1ZzVHp1rSOrdfN9fhaX9SbPCrrAjePHrnJ-D0ttmUWaC4hxJ1SIIhokGr-u_dy4',
    category: 'Skincare',
    features: [
      { title: '24hr Hydration', desc: 'Deeply moisturizes and prevents chapping.', icon: 'water_drop' },
      { title: 'Herbal Infusion', desc: 'Enriched with Manjistha and Almond Oil.', icon: 'eco' },
      { title: 'Petroleum Free', desc: 'Safe, edible-grade ingredients for your lips.', icon: 'verified' }
    ],
    botanicals: [
      { name: 'Manjistha', desc: 'Known for its healing properties and natural tint.', image: 'https://picsum.photos/seed/manjistha/400/400' },
      { name: 'Almond Oil', desc: 'Rich in Vitamin E, it softens and nourishes dry lips.', image: 'https://picsum.photos/seed/almond/400/400' }
    ],
    ritual: [
      { title: 'Apply', desc: 'Glide smoothly over lips as needed throughout the day.' },
      { title: 'Night Care', desc: 'Apply a thick layer before bed for overnight repair.' }
    ],
    results: [
      { percentage: '100%', text: 'Users reported softer lips instantly.' },
      { percentage: '96%', text: 'Saw reduction in lip pigmentation.' }
    ]
  },
  {
    id: 'glow-complexion-cream',
    name: 'Glow Complexion Cream',
    label: 'Ancient Ayurvedic Wisdom',
    shortDesc: 'Unlock modern radiance through ancient secrets. A luxurious, transformative blend of pure Kesar Saffron and Sacred Lotus designed to brighten, hydrate, and transcend ordinary skincare.',
    price: 3999,
    originalPrice: 5300,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx5SCDdEWBP1aXLSfwcjplrzr4lpKleg5lSQotu3PZcBUkL0XlXJOeXtG1SWmiRCMEaN7_jQkwNfez4GMKn5NJIneEzN1sGYX__amkygDCcWys4uazuMMz-wqKkfX95otuPKt_vGa21Od690Oo_GQxuHehfwzGZEIIE8Py6mPIj5dG1e_HqOjsq3Ma_Sn66x8pF66A9b0TE0C_eSkufC0JSN1eEbXFSXmPiYGoGRpg-pNCBTkZEdmzfE4qIG0fcWWcXzW3O0lLBW4',
    category: 'Skincare',
    botanicals: [
      {
        name: 'Saffron (Kesar)',
        desc: "Known as 'Red Gold' in Ayurveda, Saffron is a potent antioxidant that naturally brightens the complexion, fades dark spots, and imparts a celestial glow.",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqlKiMAsUjtVFQQ9Fl_wqjX_tkSh_2ywg_5olZkwiVVWKLKof6LiNbYPzi3kEXi6qd0lMpHoV4e1mkBOGhtAp-VJiWJwEwsxVfea4SzBFgP2tpcGNVyaL-8hvyJ9NbBT76DXrqFu5_t-kx449kNLZqlRon7hkGZ6vIIcSQVK4Sf1efhKMV6OTj4C7aQkfefrP-iXQREDvm1g_HbhIL5iTUIr9YJ_QkKlvm_nmqdCVnrudWN7zYvu5BjKh5i0qcOfjNE6F8Snxzc0k'
      },
      {
        name: 'Sacred Lotus',
        desc: 'A symbol of purity, Lotus extract provides deep hydration while soothing inflammation and refining skin texture for a petal-soft finish.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNQdUvHeHPTgN5tmmFL6IaodxcoarraQU1YrrlDA0bUI8THuDSBF8-JwvDvhElubAKBEmfGHeWYK858vMmSu3BqFK2YN6P7B2LEBsCd6jTMxszlAx3hqllsPtFGJqhco73J2YHU-zvJrB6n_7iKvZ9A_ALGFdupQBGq_pDlIxs7jokZQ5qE1WzERxO7TPr3coMW74tbIAm6EOdJtlaMHYON4LarGXgWVLh7PfikigJjfCDRXSO3LGxGCbvs7u8cWs9-oMMrN8e15w'
      }
    ],
    ritual: [
      { title: 'Purify', desc: 'Cleanse skin with lukewarm water to open pores for wisdom.' },
      { title: 'Invoke', desc: 'Take a pearl-sized amount of Glow Complexion Cream on your fingertips.' },
      { title: 'Massage', desc: 'Gently massage in upward circular motions, focusing on the third eye.' },
      { title: 'Glow', desc: 'Breathe deep and allow the botanicals to merge with your essence.' }
    ],
    results: [
      { percentage: '98%', text: 'Saw immediate radiance after the first ritual.' },
      { percentage: '94%', text: 'Reported significant reduction in dark spots.' },
      { percentage: '100%', text: 'Agreed skin felt more hydrated and balanced.' }
    ],
    quote: {
      text: "Jammi’s Glow Cream has transformed my morning from a chore into a ritual. My skin hasn’t looked this vibrant since my youth. Truly a masterpiece of nature.",
      author: 'Elena R., Wellness Architect'
    }
  },
  {
    id: 'flawless-firming-pack',
    name: 'Flawless Revitalizing & Firming Pack',
    label: 'Anti-Ageing Ritual',
    shortDesc: 'A potent blend of traditional botanicals designed to firm, lift, and revitalize your skin.',
    price: 1250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpW7TPs6FSSNxc9twszyAA7LCwmGyQSwJx4ghMfE3-3c2fFK6LB37EZ5Ju2J5nc8c5Ks0_IOrt6uVX9ebDQlnkKR6VnzFZC-rn4b6rpn_ObjEU7cxwVkSWuu1K9nRL-wRo3SxBfCWs_wEdkXi7ee8eSCJoKo98_WvWtq-i1f1nTk0pVKJ3ie1WsforjWDb27HlkSDT6t1EQXaSp7eIXYJhvwEOWLsG8PxjMENh2kwpT5qAmNhfrRQCBLDtzEiN6wjO9JOzxdkzSw8',
    category: 'Skincare',
    features: [
      { title: 'Firming', desc: 'Improves skin elasticity and reduces sagging.', icon: 'unfold_more' },
      { title: 'Revitalizing', desc: 'Restores natural glow and youthfulness.', icon: 'auto_awesome' },
      { title: 'Vedic Formulation', desc: 'Time-tested herbs for modern skin concerns.', icon: 'history_edu' }
    ],
    botanicals: [
      { name: 'Ashwagandha', desc: 'A powerful adaptogen that boosts collagen and reduces stress on skin.', image: 'https://picsum.photos/seed/ashwagandha/400/400' },
      { name: 'Sandalwood', desc: 'Soothes and cools the skin while providing a natural lift.', image: 'https://picsum.photos/seed/sandalwood/400/400' }
    ],
    ritual: [
      { title: 'Mix', desc: 'Mix with rose water or milk to form a smooth paste.' },
      { title: 'Apply', desc: 'Apply evenly on face and neck, avoiding the eyes.' },
      { title: 'Rest', desc: 'Leave for 15-20 minutes until dry.' },
      { title: 'Rinse', desc: 'Wash off with cool water and pat dry.' }
    ],
    results: [
      { percentage: '95%', text: 'Users felt skin was firmer after 2 weeks.' },
      { percentage: '90%', text: 'Noticed visible reduction in fine lines.' }
    ]
  },
  {
    id: 'jammi-bff',
    name: 'Jammi BFF Foot Cream',
    label: 'Heritage Foot Care',
    shortDesc: 'A premium Ayurvedic blend crafted for cracked heels, honoring a century of natural healing and mindful self-care.',
    price: 499,
    originalPrice: 650,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7G6SUorcNx1ClKLoV2dM4W0hy8aJZnM8yud-KvND4lDf0V1r2fAv254ruL8d4VYlSK5lRHmuQ0gcStC-A9ym4Nipye3JnlXtyEhz1Bd4mhZ_O8BUFwSr9hX9O55mUwWWPIg2OZqhlXneWPrwx_kRqBuBPKHPEgD9FcnJ54SENdLk8f-acSyowOhSG2AluhzQFR2pauwexQogaidz40gYUEncVkQmH8eXkGO_k8fctsy1WIjd_mWgLn6zlOH2OWUnhg-_TWAYsHto',
    category: 'Skincare'
  },
  {
    id: 'aa-caps',
    name: 'AA Caps',
    label: 'Respiratory Wellness',
    shortDesc: 'A time-tested Ayurvedic formulation for respiratory health and allergy relief.',
    price: 350,
    image: '/images/aa-caps.png',
    category: 'Wellness'
  },
  {
    id: 'cyst-evit',
    name: 'Cyst Evit',
    label: 'Women\'s Health',
    shortDesc: 'Natural support for hormonal balance and reproductive wellness.',
    price: 550,
    image: '/images/cyst-evit.png',
    category: 'Wellness'
  },
  {
    id: 'combifore',
    name: 'Combifore',
    label: 'Immunity Booster',
    shortDesc: 'A comprehensive blend of herbs to strengthen your natural defenses.',
    price: 420,
    image: '/images/combifore.png',
    category: 'Wellness'
  },
  {
    id: 'd-tabs',
    name: 'D\'Tabs',
    label: 'Anti-Diarrheal',
    shortDesc: 'Fast-acting Ayurvedic relief for digestive upsets and diarrhea.',
    price: 280,
    image: '/images/d-tabs.png',
    category: 'Wellness'
  },
  {
    id: 'gtp',
    name: 'GTP',
    label: 'for Mental Fitness',
    shortDesc: 'Reduces Stress, Enhances Memory',
    price: 380,
    image: '/images/gtp.png',
    category: 'Wellness'
  },
  {
    id: 'widari-forte',
    name: 'Widari Forte',
    label: 'Male Infertility Crisis & Sexual insufficiencies',
    shortDesc: 'Ayurvedic formulation for male vitality and endurance.',
    price: 650,
    image: '/images/widari-forte.png',
    category: 'Wellness'
  },
  {
    id: 'suventris',
    name: 'Suventris Syrup',
    label: 'Uterine Tonic',
    shortDesc: 'Ayurvedic tonic for women\'s health and wellbeing.',
    price: 240,
    image: '/images/suventris.png',
    category: 'Wellness'
  },
  {
    id: 'triphala-churna',
    name: 'Triphala Churna',
    label: 'Ayurvedic Detoxifier & Rejuvenator',
    shortDesc: 'Classic Ayurvedic powder for digestion and vitality. 100 gms.',
    price: 150,
    image: '/images/triphala-churna.png',
    category: 'Wellness'
  },
  {
    id: 'thyrogard',
    name: 'ThyroGard Capsule',
    label: 'Boosts Thyroid Function',
    shortDesc: '120 years of Ayurvedic Expertise for thyroid support.',
    price: 450,
    image: '/images/thyrogard.png',
    category: 'Wellness'
  },
  {
    id: 'trip-caps',
    name: 'Trip Caps',
    label: 'Constipation Relief capsules',
    shortDesc: 'Smooth movement and relief from constipation.',
    price: 220,
    image: '/images/trip-caps.png',
    category: 'Wellness'
  },
  {
    id: 'madhumehari',
    name: 'Madhumehari Churna',
    label: 'Ayurvedic Anti-Diabetic Management',
    shortDesc: 'Natural support for blood sugar management. 150 gms.',
    price: 290,
    image: '/images/madhumehari.png',
    category: 'Wellness'
  },
  {
    id: 'livercure',
    name: 'Livercure Complex Forte',
    label: 'Complete Liver Protective',
    shortDesc: 'Ayurvedic hepatoprotective formulation for liver health.',
    price: 180,
    image: '/images/livercure.png',
    category: 'Wellness'
  },
  {
    id: 'laksha',
    name: 'Laksha',
    label: 'Ayurvedic Product',
    shortDesc: 'Traditional Ayurvedic formulation nurtured by modern technology.',
    price: 320,
    image: '/images/laksha.png',
    category: 'Wellness'
  }
];

export const MOCK_DOCTORS = [
  {
    id: 'd1',
    name: 'Dr. V. Raghavan, MD (Ay)',
    specialty: 'Ayurvedic Physician & Clinical Researcher',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWv7uisAZHK2OhbqW1yJyLQLuu5GUtQshdmtpssbvU_utXTSesrzE4IP-vOZHpklKHDt5SpbhMjsJUxt3YQb7k6YrDO6CsrY9szTbhu8-ErDCwoQwy6gZ7PAN3_ipetrykzrIJ8TqtdzNk4cJnpDlsoqE5bgNb_615i8_0nhdiVzvA1wTwGjpOlA8AfETG4vEPB9jIk9SQGe-I8HrymBctFYNEfS6bAlHxQRwM0z7xhd918iKxp3P5VuSY7sJmJbTxa1XvIZKF3dw',
    quote: "Jammi's commitment to preserving classical Ayurvedic processes while adhering to modern analytical standards is what makes them a trusted partner for medical professionals."
  }
];
