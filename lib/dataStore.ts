export interface Specialty {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDesc: string;
  description: string;
  headDoctor: string;
  treatments: string[];
  stats: { surgeries: string; successRate: string };
}

export interface Doctor {
  id: string;
  name: string;
  slug: string;
  qualification: string;
  experienceYr: number;
  designation: string;
  specialty?: string;
  photoUrl: string;
  bio: string;
  consultFee: number;
  rating: number;
  reviewCount: number;
  isAvailable: boolean;
  departmentSlug: string;
  availableSlots: string[];
}

export interface HealthPackage {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  testCount: number;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface Review {
  id: string;
  patientName: string;
  rating: number;
  comment: string;
  treatment: string;
  date: string;
  isApproved: boolean;
  videoThumb?: string;
}

export interface CareerJob {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export interface AppointmentBooking {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  age: number;
  gender: string;
  symptoms?: string;
  departmentSlug: string;
  doctorId: string;
  doctorName: string;
  date: string;
  slotTime: string;
  status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
  ticketQrToken: string;
}

export interface PatientInquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  department?: string;
  message: string;
  isInEmergency: boolean;
  isResolved: boolean;
  createdAt: string;
}

export const SPECIALTIES: Specialty[] = [
  {
    id: '1',
    name: 'Cardiology & Cardiac Surgery',
    slug: 'cardiology',
    icon: 'Heart',
    shortDesc: 'Advanced heart care, robotic bypass surgery, interventional cardiology & 24/7 cath lab.',
    description: 'The Department of Cardiology & Cardiac Surgery at Aarogya Multi-Specialty Hospital offers comprehensive non-invasive and interventional procedures including TAVR, complex angioplasty, electrophysiology studies, and minimal access bypass surgery.',
    headDoctor: 'Dr. Rajeshwar Sharma',
    treatments: ['Coronary Angioplasty & Stenting', 'Robotic CABG Surgery', 'TAVR & TMVR Valve Replacement', 'Pacemaker Implantation', 'Pediatric Heart Defects Care'],
    stats: { surgeries: '18,500+', successRate: '99.4%' }
  },
  {
    id: '2',
    name: 'Neurology & Neurosurgery',
    slug: 'neurology',
    icon: 'Brain',
    shortDesc: 'Comprehensive stroke management, neuro-trauma care, epilepsy & spine surgery.',
    description: 'Our Neurosciences Institute features state-of-the-art biplane neuronavigation systems and high-speed robotic microscopes for precision brain tumor excisions, spinal fusion, and acute stroke thrombolysis within the golden hour.',
    headDoctor: 'Dr. Meenakshi Sundaram',
    treatments: ['Acute Stroke Thrombolysis', 'Deep Brain Stimulation (DBS)', 'Microscopic Spine Surgery', 'Brain Tumor Resection', 'Epilepsy & Movement Disorder Therapy'],
    stats: { surgeries: '12,000+', successRate: '98.8%' }
  },
  {
    id: '3',
    name: 'Medical & Surgical Oncology',
    slug: 'oncology',
    icon: 'ShieldAlert',
    shortDesc: 'Precision cancer therapy, Immunotherapy, CyberKnife Radiotherapy & surgical oncology.',
    description: 'We offer multidisciplinary cancer care combining targeted molecular chemotherapy, TrueBeam STx radiation, and minimal access robotic tumor resections backed by international tumor boards.',
    headDoctor: 'Dr. Vikramaditya Rathore',
    treatments: ['Robotic Tumor Excision', 'TrueBeam Radiotherapy', 'Targeted Immunotherapy', 'Bone Marrow Transplant', 'Breast & Gynecological Oncology'],
    stats: { surgeries: '9,500+', successRate: '97.9%' }
  },
  {
    id: '4',
    name: 'Orthopedics & Joint Replacement',
    slug: 'orthopedics',
    icon: 'Bone',
    shortDesc: 'MAKO Robotic total knee/hip replacement, sports medicine & spine trauma reconstruction.',
    description: 'Specializing in computer-navigated joint replacements that ensure sub-millimeter surgical precision, rapid recovery protocols, and same-day mobilization for knee and hip replacements.',
    headDoctor: 'Dr. Alok Banerjee',
    treatments: ['Robotic Total Knee Replacement', 'Total Hip Arthroplasty', 'Arthroscopic ACL/PCL Reconstruction', 'Complex Spine Trauma Surgery', 'Pediatric Deformity Correction'],
    stats: { surgeries: '22,000+', successRate: '99.6%' }
  },
  {
    id: '5',
    name: 'Pediatrics & Neonatology',
    slug: 'pediatrics',
    icon: 'Baby',
    shortDesc: 'Level IV NICU, pediatric intensive care, growth evaluation & immunization clinics.',
    description: 'Dedicated to child wellness from prematurely born neonates weighing under 600 grams to adolescents. Equipped with specialized pediatric ventilation and continuous hemodynamic monitoring.',
    headDoctor: 'Dr. Ananya Sengupta',
    treatments: ['Level IV NICU Care', 'Pediatric Critical Care (PICU)', 'Developmental Pediatrics', 'Pediatric Cardiology & Surgery', 'Comprehensive Vaccination'],
    stats: { surgeries: '8,000+', successRate: '99.2%' }
  },
  {
    id: '6',
    name: 'Obstetrics & Gynecology',
    slug: 'gynecology',
    icon: 'UserCheck',
    shortDesc: 'High-risk pregnancy delivery, laparoscopic gynecology, IVF & fertility solutions.',
    description: 'Offering luxurious birthing suites, water birthing facilities, high-risk maternal-fetal medicine, and painless labor delivery protocols handled by senior gynecologists.',
    headDoctor: 'Dr. Sunita Deshmukh',
    treatments: ['Painless Labor & Delivery', 'High-Risk Pregnancy Management', 'Laparo-Hysteroscopic Surgeries', 'IVF & Reproductive Medicine', 'Urogynecology'],
    stats: { surgeries: '15,000+', successRate: '99.8%' }
  },
  {
    id: '7',
    name: 'Urology & Kidney Transplant',
    slug: 'urology',
    icon: 'Activity',
    shortDesc: 'Laser stone removal (RIRS/HOLEP), robotic prostatectomy & renal transplant procedures.',
    description: 'Equipped with 100W Holmium lasers and Da Vinci surgical robots for scarless stone management and complex reconstructive urology with rapid hospital discharge.',
    headDoctor: 'Dr. Pradeep Nambiar',
    treatments: ['RIRS & PCNL Laser Stone Removal', 'Robotic Radical Prostatectomy', 'Live Donor Renal Transplant', 'Reconstructive Urology', 'Pediatric Urology'],
    stats: { surgeries: '11,200+', successRate: '99.1%' }
  },
  {
    id: '8',
    name: 'Gastroenterology & Hepatology',
    slug: 'gastroenterology',
    icon: 'Stethoscope',
    shortDesc: 'Advanced therapeutic endoscopy, EUS, ERCP, liver disease care & GI surgery.',
    description: 'Leading center for digestive health offering painless colonoscopies, GI bleeding management, liver cirrhosis care, and laparoscopic colorectal surgeries.',
    headDoctor: 'Dr. Arvind Kulkarni',
    treatments: ['Therapeutic ERCP & EUS', 'Laparoscopic Colectomy', 'Liver Failure Management', 'Inflammatory Bowel Disease Care', 'Bariatric Weight Loss Surgery'],
    stats: { surgeries: '14,000+', successRate: '99.3%' }
  },
  {
    id: '9',
    name: 'Nephrology & Dialysis',
    slug: 'nephrology',
    icon: 'Droplet',
    shortDesc: '24/7 online hemodiafiltration, CRRT for ICU patients & chronic kidney disease therapy.',
    description: 'Our state-of-the-art dialysis lounge provides ultra-pure RO water systems, single-use dialyzers, and continuous renal replacement therapies for critically ill patients.',
    headDoctor: 'Dr. S. K. Nair',
    treatments: ['24/7 Hemodialysis & Hemodiafiltration', 'Peritoneal Dialysis', 'CKD Progression Management', 'Post-Transplant Immunology Care', 'CRRT in Intensive Care'],
    stats: { surgeries: '60,000+ Dialysis', successRate: '99.5%' }
  },
  {
    id: '10',
    name: 'Dermatology & Cosmetology',
    slug: 'dermatology',
    icon: 'Sparkles',
    shortDesc: 'Clinical dermatology, FDA-approved laser aesthetics, hair restoration & vitiligo surgery.',
    description: 'Combining medical dermatology with advanced aesthetic cosmetology including Q-switched lasers, PRP hair restoration, chemical peels, and scar revision surgeries.',
    headDoctor: 'Dr. Neha Batra',
    treatments: ['Laser Skin Rejuvenation & Pigmentation', 'PRP Hair Restoration & Transplant', 'Clinical Acne & Scar Revision', 'Vitiligo Melanocyte Transplant', 'Pediatric Dermatology'],
    stats: { surgeries: '9,000+', successRate: '99.7%' }
  },
  {
    id: '11',
    name: 'ENT & Head-Neck Surgery',
    slug: 'ent',
    icon: 'Ear',
    shortDesc: 'Cochlear implants, endoscopic sinus surgery, micro-ear surgeries & voice disorders.',
    description: 'Offering microscopic ear surgeries, balloon sinuplasty, voice restoration therapy, and complex head and neck skull base tumor excisions.',
    headDoctor: 'Dr. Sameer Kapoor',
    treatments: ['Cochlear Implantation Program', 'Endoscopic Skull Base Surgery', 'Micro-Laryngeal Voice Surgery', 'Snoring & Sleep Apnea Surgery', 'Pediatric ENT Procedures'],
    stats: { surgeries: '10,500+', successRate: '99.4%' }
  },
  {
    id: '12',
    name: 'Pulmonology & Sleep Medicine',
    slug: 'pulmonology',
    icon: 'Wind',
    shortDesc: 'Advanced bronchoscopy, EBUS, severe asthma care, COPD management & sleep labs.',
    description: 'Equipped with endobronchial ultrasound (EBUS) and computerized polysomnography labs for treating interstitial lung diseases, chronic bronchitis, and sleep apnea.',
    headDoctor: 'Dr. Deepak Verma',
    treatments: ['EBUS & Rigid Bronchoscopy', 'Severe Asthma Biological Therapy', 'Polysomnography Sleep Study', 'Pulmonary Rehabilitation', 'Pleural Intervention Surgery'],
    stats: { surgeries: '7,800+', successRate: '99.0%' }
  },
  {
    id: '13',
    name: 'Ophthalmology & Eye Care',
    slug: 'ophthalmology',
    icon: 'Eye',
    shortDesc: 'Femto-LASIK blade-free vision correction, retinal vitrectomy & cataract phaco surgery.',
    description: 'Delivering precision ocular care utilizing Zeiss surgical lasers for cataract lens implantation, diabetic retinopathy laser procedures, and corneal transplants.',
    headDoctor: 'Dr. Kavita Menon',
    treatments: ['Bladeless Femto-LASIK', 'Phaco Cataract with Multifocal IOL', 'Vitreo-Retinal Microsurgery', 'Glaucoma Valve Implants', 'Pediatric Squint Correction'],
    stats: { surgeries: '25,000+', successRate: '99.9%' }
  },
  {
    id: '14',
    name: 'Psychiatry & Behavioral Health',
    slug: 'psychiatry',
    icon: 'Smile',
    shortDesc: 'Holistic mental wellness, cognitive behavioral therapy, addiction medicine & neuro-psychiatry.',
    description: 'Providing confidential, compassionate counseling and clinical therapies for anxiety, depression, OCD, bipolar disorders, and adolescent neurodevelopmental issues.',
    headDoctor: 'Dr. Rohan Chawla',
    treatments: ['Cognitive Behavioral Therapy (CBT)', 'Clinical Depression Management', 'De-Addiction & Rehabilitation', 'Adolescent Counseling', 'Transcranial Magnetic Stimulation'],
    stats: { surgeries: '15,000+ Consults', successRate: '98.5%' }
  },
  {
    id: '15',
    name: 'Dental Sciences & Maxillofacial',
    slug: 'dentistry',
    icon: 'Smile',
    shortDesc: 'Guided dental implants, full-mouth rehabilitation, cosmetic smile design & jaw surgery.',
    description: 'Our sterile dental institute offers same-day CAD/CAM zirconium crowns, microscopic root canals, and complex orthognathic facial trauma reconstruction.',
    headDoctor: 'Dr. Siddharth Jain',
    treatments: ['Immediate Loaded Dental Implants', 'Microscopic Single-Sitting RCT', 'Invisible Aligners & Orthodontics', 'Maxillofacial Trauma Reconstruction', 'Pediatric Laser Dentistry'],
    stats: { surgeries: '18,000+', successRate: '99.7%' }
  },
  {
    id: '16',
    name: 'General & Minimal Access Surgery',
    slug: 'general-surgery',
    icon: 'Scissors',
    shortDesc: 'Scarless 3D laparoscopic gallbladder, hernia repair, laser proctology & bariatrics.',
    description: 'Specializing in fast-track surgical care using 4K imaging laparoscopic towers for hernia mesh repairs, appendectomy, and laser hemorrhoid treatment with minimal pain.',
    headDoctor: 'Dr. Hemant Joshi',
    treatments: ['Laparoscopic Cholecystectomy', 'Complex Ventral Hernia Mesh Repair', 'Laser Proctology (Piles/Fistula)', 'Metabolic Bariatric Surgery', 'Emergency Abdominal Trauma'],
    stats: { surgeries: '30,000+', successRate: '99.8%' }
  },
  {
    id: '17',
    name: 'Plastic & Reconstructive Surgery',
    slug: 'plastic-surgery',
    icon: 'Sparkles',
    shortDesc: 'Aesthetic body contouring, burn reconstruction, cleft lip repair & microsurgery.',
    description: 'Combining artistic finesse with microscopic precision for post-trauma reconstruction, rhinoplasty, liposuction, and congenital deformity corrective surgeries.',
    headDoctor: 'Dr. Natasha Oberoi',
    treatments: ['Microsurgical Free Flap Reconstruction', 'Aesthetic Rhinoplasty & Facelift', 'HD Liposuction & Abdominoplasty', 'Post-Burn Scar Revision', 'Cleft Lip & Palate Repair'],
    stats: { surgeries: '6,500+', successRate: '99.4%' }
  },
  {
    id: '18',
    name: 'Endocrinology & Diabetology',
    slug: 'endocrinology',
    icon: 'Activity',
    shortDesc: 'Advanced insulin pump therapy, thyroid disorder care, obesity management & bone metabolism.',
    description: 'Offering integrated metabolic clinics equipped with continuous glucose monitoring sensors, gestational diabetes care, and thyroid nodule radiofrequency ablation.',
    headDoctor: 'Dr. Anupama Srinivasan',
    treatments: ['Continuous Glucose Monitoring & Pump', 'Thyroid Nodule Ablation', 'PCOS & Hormonal Balance Clinic', 'Osteoporosis & Metabolic Bone Care', 'Pediatric Endocrinology'],
    stats: { surgeries: '20,000+ Patients', successRate: '99.1%' }
  },
  {
    id: '19',
    name: 'Rheumatology & Immunology',
    slug: 'rheumatology',
    icon: 'Shield',
    shortDesc: 'Rheumatoid arthritis biologic therapy, lupus management, gout & autoimmune therapies.',
    description: 'Specialized diagnostic and biological treatment center for chronic autoimmune joint diseases, vasculitis, and systemic lupus erythematosus.',
    headDoctor: 'Dr. Varun Singhania',
    treatments: ['Targeted Biologic Infusion Therapy', 'Rheumatoid Arthritis Management', 'Systemic Lupus (SLE) Care', 'Ankylosing Spondylitis Therapy', 'Musculoskeletal Ultrasound Clinic'],
    stats: { surgeries: '11,000+ Patients', successRate: '98.9%' }
  },
  {
    id: '20',
    name: 'Critical Care & Emergency Trauma',
    slug: 'critical-care',
    icon: 'Ambulance',
    shortDesc: 'Level 1 24/7 Trauma center, ECMO life support, advanced toxicological & septic shock care.',
    description: 'Manned 24/7 by American Board-certified intensivists and emergency trauma specialists, supported by advanced life support ACLS ambulances and rooftop helipad access.',
    headDoctor: 'Dr. Sanjay Bhardwaj',
    treatments: ['24/7 Level 1 Trauma Resuscitation', 'Venovenous & Venoarterial ECMO', 'Multi-Organ Failure Management', 'Toxicology & Snake Bite Unit', 'Advanced Mechanical Ventilation'],
    stats: { surgeries: '35,000+ Emergencies', successRate: '98.4%' }
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Rajeshwar Sharma',
    slug: 'dr-rajeshwar-sharma',
    qualification: 'MBBS, MD (Med), DM (Cardiology), FACC (USA)',
    experienceYr: 28,
    designation: 'Director & Chief Interventional Cardiologist',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Pioneer of transradial angioplasty in India with over 18,500 successful interventional procedures. Recipient of National Healthcare Excellence Award.',
    consultFee: 1500,
    rating: 4.98,
    reviewCount: 420,
    isAvailable: true,
    departmentSlug: 'cardiology',
    availableSlots: ['09:30 AM', '10:15 AM', '11:00 AM', '02:30 PM', '04:00 PM', '05:30 PM']
  },
  {
    id: 'doc-2',
    name: 'Dr. Meenakshi Sundaram',
    slug: 'dr-meenakshi-sundaram',
    qualification: 'MBBS, MS (General Surgery), MCh (Neurosurgery), FRCS (London)',
    experienceYr: 25,
    designation: 'Head of Neurosciences & Skull Base Surgeon',
    photoUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
    bio: 'Acclaimed robotic neurosurgeon specializing in awake craniotomies and vascular neurosurgery. Trained at Johns Hopkins Medical Center.',
    consultFee: 1800,
    rating: 4.96,
    reviewCount: 380,
    isAvailable: true,
    departmentSlug: 'neurology',
    availableSlots: ['10:00 AM', '11:30 AM', '03:00 PM', '04:30 PM']
  },
  {
    id: 'doc-3',
    name: 'Dr. Vikramaditya Rathore',
    slug: 'dr-vikramaditya-rathore',
    qualification: 'MBBS, MS, DNB (Surgical Oncology), Fellowship at Memorial Sloan Kettering',
    experienceYr: 22,
    designation: 'Senior Consultant Robotic Surgical Oncologist',
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    bio: 'Specialist in organ-preserving oncological resections and minimally invasive robotic procedures for gastrointestinal and thoracic cancers.',
    consultFee: 1600,
    rating: 4.95,
    reviewCount: 310,
    isAvailable: true,
    departmentSlug: 'oncology',
    availableSlots: ['09:00 AM', '10:30 AM', '01:30 PM', '03:30 PM']
  },
  {
    id: 'doc-4',
    name: 'Dr. Alok Banerjee',
    slug: 'dr-alok-banerjee',
    qualification: 'MBBS, MS (Ortho), MCh (Orthopedics UK), Fellow Arthroplasty (Germany)',
    experienceYr: 26,
    designation: 'Chairman - Institute of Joint Replacement & Sports Injury',
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    bio: 'Performed over 22,000 computer-navigated total knee and hip replacements. Pioneered fast-track outpatient knee arthroplasty protocols.',
    consultFee: 1500,
    rating: 4.99,
    reviewCount: 512,
    isAvailable: true,
    departmentSlug: 'orthopedics',
    availableSlots: ['09:30 AM', '11:00 AM', '12:30 PM', '04:00 PM', '06:00 PM']
  },
  {
    id: 'doc-5',
    name: 'Dr. Ananya Sengupta',
    slug: 'dr-ananya-sengupta',
    qualification: 'MBBS, MD (Pediatrics), DM (Neonatology), NNN Fellowship (Australia)',
    experienceYr: 19,
    designation: 'Senior Lead Consultant - Neonatology & PICU',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: 'Renowned pediatric critical care specialist dedicated to saving extremely premature infants and complex pediatric cardiovascular cases.',
    consultFee: 1200,
    rating: 4.97,
    reviewCount: 290,
    isAvailable: true,
    departmentSlug: 'pediatrics',
    availableSlots: ['10:00 AM', '11:15 AM', '02:00 PM', '05:00 PM']
  },
  {
    id: 'doc-6',
    name: 'Dr. Sunita Deshmukh',
    slug: 'dr-sunita-deshmukh',
    qualification: 'MBBS, MD (OBG), FICOG, Diploma in Laparoscopy (France)',
    experienceYr: 24,
    designation: 'Director - Obstetrics, Gynecology & Fertility Medicine',
    photoUrl: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80',
    bio: 'Leading high-risk pregnancy specialist and advanced laparoscopic gynecological surgeon with over 15,000 successful maternal deliveries.',
    consultFee: 1400,
    rating: 4.98,
    reviewCount: 460,
    isAvailable: true,
    departmentSlug: 'gynecology',
    availableSlots: ['09:00 AM', '10:45 AM', '12:00 PM', '03:30 PM']
  },
  {
    id: 'doc-7',
    name: 'Dr. Pradeep Nambiar',
    slug: 'dr-pradeep-nambiar',
    qualification: 'MBBS, MS (Gen Surgery), MCh (Urology), DNB',
    experienceYr: 21,
    designation: 'Chief Urologist & Renal Transplant Surgeon',
    photoUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
    bio: 'Expert in robotic renal transplants and scarless laser kidney stone surgeries (RIRS). Author of 45+ indexed urological research publications.',
    consultFee: 1500,
    rating: 4.94,
    reviewCount: 230,
    isAvailable: true,
    departmentSlug: 'urology',
    availableSlots: ['10:30 AM', '12:00 PM', '02:30 PM', '04:30 PM']
  },
  {
    id: 'doc-8',
    name: 'Dr. Arvind Kulkarni',
    slug: 'dr-arvind-kulkarni',
    qualification: 'MBBS, MD, DM (Gastroenterology), FACG',
    experienceYr: 23,
    designation: 'Head - Advanced Therapeutic Endoscopy & Liver Care',
    photoUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80',
    bio: 'Master of therapeutic ERCP and endoscopic ultrasound (EUS). Spearheads Aarogya’s comprehensive fatty liver and cirrhosis reversal program.',
    consultFee: 1500,
    rating: 4.96,
    reviewCount: 340,
    isAvailable: true,
    departmentSlug: 'gastroenterology',
    availableSlots: ['09:30 AM', '11:30 AM', '03:00 PM', '05:30 PM']
  },
  {
    id: 'doc-9',
    name: 'Dr. S. K. Nair',
    slug: 'dr-s-k-nair',
    qualification: 'MBBS, MD, DM (Nephrology), FASN',
    experienceYr: 27,
    designation: 'Chief Consultant Nephrologist & Transplant Coordinator',
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    bio: 'Managed over 60,000 dialysis sessions and 800+ successful kidney transplant management protocols. Passionate about preventive renal wellness.',
    consultFee: 1400,
    rating: 4.95,
    reviewCount: 280,
    isAvailable: true,
    departmentSlug: 'nephrology',
    availableSlots: ['10:00 AM', '11:45 AM', '02:15 PM', '04:15 PM']
  },
  {
    id: 'doc-10',
    name: 'Dr. Neha Batra',
    slug: 'dr-neha-batra',
    qualification: 'MBBS, MD (Dermatology & Venereology), Fellowship Laser Aesthetic (Seoul)',
    experienceYr: 16,
    designation: 'Senior Consultant Aesthetic Dermatologist & Trichologist',
    photoUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80',
    bio: 'Celebrity aesthetic dermatologist combining evidence-based clinical dermatology with state-of-the-art laser skin rejuvenation and PRP therapies.',
    consultFee: 1300,
    rating: 4.97,
    reviewCount: 390,
    isAvailable: true,
    departmentSlug: 'dermatology',
    availableSlots: ['11:00 AM', '12:30 PM', '03:00 PM', '05:00 PM']
  },
  {
    id: 'doc-11',
    name: 'Dr. Sameer Kapoor',
    slug: 'dr-sameer-kapoor',
    qualification: 'MBBS, MS (ENT), Fellowship Skull Base Surgery (Switzerland)',
    experienceYr: 20,
    designation: 'Head of Cochlear Implant & Micro-Ear Surgery',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    bio: 'Restored hearing to over 1,500 children via cochlear implantations. Specialist in minimally invasive endoscopic sinus and voice restoration surgeries.',
    consultFee: 1300,
    rating: 4.95,
    reviewCount: 260,
    isAvailable: true,
    departmentSlug: 'ent',
    availableSlots: ['09:30 AM', '11:00 AM', '02:00 PM', '04:00 PM']
  },
  {
    id: 'doc-12',
    name: 'Dr. Kavita Menon',
    slug: 'dr-kavita-menon',
    qualification: 'MBBS, MS (Ophthalmology), FRCS (Glasgow), Fellowship Vitreo-Retina',
    experienceYr: 22,
    designation: 'Senior Director - Eye Institute & Laser Vision Centre',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    bio: 'Pioneered bladeless Femto-LASIK vision correction in the region. Expert in complicated diabetic vitreo-retinal eye surgeries.',
    consultFee: 1200,
    rating: 4.98,
    reviewCount: 410,
    isAvailable: true,
    departmentSlug: 'ophthalmology',
    availableSlots: ['10:00 AM', '11:30 AM', '03:30 PM', '05:30 PM']
  },
  {
    id: 'doc-13',
    name: 'Dr. Hemant Joshi',
    slug: 'dr-hemant-joshi',
    qualification: 'MBBS, MS (Gen Surgery), FMAS, FIAGES',
    experienceYr: 24,
    designation: 'Director - Minimal Access & Bariatric Surgery',
    photoUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    bio: 'Spearheads fast-track 3D laparoscopic surgical interventions with over 30,000 successful hernia, gallbladder, and metabolic bariatric procedures.',
    consultFee: 1500,
    rating: 4.97,
    reviewCount: 480,
    isAvailable: true,
    departmentSlug: 'general-surgery',
    availableSlots: ['09:00 AM', '10:30 AM', '01:30 PM', '04:30 PM']
  },
  {
    id: 'doc-14',
    name: 'Dr. Sanjay Bhardwaj',
    slug: 'dr-sanjay-bhardwaj',
    qualification: 'MBBS, MD (Emergency Medicine), FCCM (USA), EDIC',
    experienceYr: 21,
    designation: 'Chief of Critical Care & 24/7 Level 1 Emergency Trauma',
    photoUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
    bio: 'American Board-certified emergency intensivist leading acute trauma resuscitation, ECMO life support, and disaster medical response.',
    consultFee: 1600,
    rating: 4.99,
    reviewCount: 550,
    isAvailable: true,
    departmentSlug: 'critical-care',
    availableSlots: ['08:00 AM (24/7 On-Call)', '10:00 AM', '02:00 PM', '06:00 PM']
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'pkg-1',
    slug: 'basic-wellness-checkup',
    name: 'Aarogya Essential Wellness Checkup',
    tagline: 'Comprehensive 45-parameter screening for adults under 40',
    price: 2499,
    originalPrice: 5500,
    testCount: 45,
    features: [
      'Complete Blood Count (CBC & ESR)',
      'Fasting Blood Sugar & HbA1c',
      'Lipid Profile (Cholesterol & Triglycerides)',
      'Liver & Kidney Function Screen',
      'ECG (Electrocardiogram)',
      'Physician & Dietitian Consultation'
    ],
    recommendedFor: 'Adults aged 20-40 seeking annual preventive checkup'
  },
  {
    id: 'pkg-2',
    slug: 'executive-comprehensive-package',
    name: 'Executive Comprehensive Heart & Body Shield',
    tagline: '75+ advanced diagnostic markers including Cardiac Echo & TMT',
    price: 5999,
    originalPrice: 12500,
    testCount: 78,
    isPopular: true,
    features: [
      'All Essential Wellness Tests',
      'Advanced Thyroid Profile (T3, T4, TSH)',
      'Vitamin D3 & Vitamin B12 Screening',
      'Echocardiography or TMT (Treadmill Test)',
      'USG Whole Abdomen & Pelvis',
      'Pulmonary Function Test (PFT)',
      'Senior Cardiologist & Physician Consultation'
    ],
    recommendedFor: 'Professionals & individuals above 35 years'
  },
  {
    id: 'pkg-3',
    slug: 'women-platinum-health-package',
    name: 'Women Platinum Preventive Health Shield',
    tagline: 'Tailored maternal, bone density & gynecological wellness screen',
    price: 6499,
    originalPrice: 14000,
    testCount: 82,
    features: [
      'Digital Mammography / Breast Ultrasound',
      'Pap Smear Screening for Cervical Care',
      'DEXA Scan (Bone Mineral Density)',
      'Hormonal & Thyroid Screening Panel',
      'Complete Iron Profile & Ferritin',
      'Senior Gynecologist & Nutritionist Consultation'
    ],
    recommendedFor: 'Women of all age groups prioritizing total well-being'
  },
  {
    id: 'pkg-4',
    slug: 'senior-citizen-golden-care',
    name: 'Senior Citizen Golden Years Shield',
    tagline: 'Specialized geriatric evaluation covering joints, heart & vision',
    price: 7499,
    originalPrice: 16500,
    testCount: 90,
    features: [
      'Comprehensive Cardiac & Renal Screen',
      'DEXA Bone Density & Joint Arthritis Screen',
      'Comprehensive Eye & Hearing Evaluation',
      'Prostate Specific Antigen (PSA for Men)',
      'Detailed Memory & Geriatric Evaluation',
      'Complimentary Home Sample Collection'
    ],
    recommendedFor: 'Elders & parents aged 55+ years'
  },
  {
    id: 'pkg-5',
    slug: 'corporate-employee-wellness',
    name: 'Corporate Annual Employee Shield (Group)',
    tagline: 'Customized on-site corporate checkups with digital health cards',
    price: 1999,
    originalPrice: 4500,
    testCount: 35,
    features: [
      'On-site Sample Collection at Office Campus',
      'Digital Health Passport & Instant Reports',
      'Ergonomic & Posture Consultation',
      'Mental Health & Stress Management Workshop',
      'Dedicated Corporate TPA Account Manager'
    ],
    recommendedFor: 'Corporate HR leaders & enterprise employee programs'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    patientName: 'Capt. Rakesh Malhotra (Retd.)',
    rating: 5,
    treatment: 'Robotic CABG Heart Surgery',
    date: '12 June 2026',
    comment: 'Dr. Rajeshwar Sharma and the entire cardiac team at Aarogya Hospital saved my life. The robotic bypass procedure was painless, and I was walking in the corridor within 48 hours. World-class cleanliness and nursing compassion!',
    isApproved: true
  },
  {
    id: 'rev-2',
    patientName: 'Mrs. Priya Nair',
    rating: 5,
    treatment: 'High-Risk Twin Delivery',
    date: '20 June 2026',
    comment: 'Our birthing experience under Dr. Sunita Deshmukh was extraordinary. The NICU team handled our premature babies with divine care. Aarogya feels less like a hospital and more like a luxury healing sanctuary.',
    isApproved: true
  },
  {
    id: 'rev-3',
    patientName: 'Mr. David Miller (UK Medical Tourist)',
    rating: 5,
    treatment: 'MAKO Robotic Knee Replacement',
    date: '25 June 2026',
    comment: 'Traveled from Manchester to Mumbai specifically for Dr. Alok Banerjee’s robotic joint surgery. Saved 70% cost compared to private UK clinics with superior technology and VIP airport concierge care.',
    isApproved: true
  }
];

export const CAREER_JOBS: CareerJob[] = [
  {
    id: 'job-1',
    title: 'Senior Resident Consultant - Interventional Cardiology',
    department: 'Cardiology',
    location: 'Main Hospital Campus, Floor 3',
    type: 'Full-Time',
    experience: '3 - 6 Years post DM/DNB',
    description: 'Seeking dynamic interventional cardiologist experienced in primary angioplasties, OCT, and IVUS imaging in high-volume 24/7 cath lab settings.'
  },
  {
    id: 'job-2',
    title: 'ICU Senior Staff Nurse (Level 1 Trauma & ECMO)',
    department: 'Critical Care',
    location: 'Trauma Center & ICU',
    type: 'Full-Time (Rotational Shifts)',
    experience: '2 - 5 Years in ICU/CCU',
    description: 'Responsible for acute hemodynamics monitoring, ventilator management, and patient bedside care in accredited 40-bed multidisciplinary ICU.'
  },
  {
    id: 'job-3',
    title: 'Biomedical Robotics Engineer',
    department: 'Surgical Technology',
    location: 'Modular OT Deck',
    type: 'Full-Time',
    experience: '4+ Years in Medical Robotics',
    description: 'Oversee calibration, sterile maintenance, and software diagnostics for Da Vinci Surgical Towers and MAKO Orthopedic navigation arms.'
  }
];

// LocalStorage Helper for dynamic bookings
const BOOKING_KEY = 'aarogya_appointments_v1';
const INQUIRY_KEY = 'aarogya_inquiries_v1';

export function getLocalAppointments(): AppointmentBooking[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(BOOKING_KEY);
  if (!raw) {
    const demoBookings: AppointmentBooking[] = [
      {
        id: 'apt-demo-1',
        patientName: 'Suresh Kumar',
        patientPhone: '+91 98765 43210',
        patientEmail: 'suresh@example.com',
        age: 52,
        gender: 'Male',
        symptoms: 'Mild chest tightness during stairs',
        departmentSlug: 'cardiology',
        doctorId: 'doc-1',
        doctorName: 'Dr. Rajeshwar Sharma',
        date: '2026-07-02',
        slotTime: '10:15 AM',
        status: 'CONFIRMED',
        createdAt: new Date().toISOString(),
        ticketQrToken: 'AAR-QR-8891'
      },
      {
        id: 'apt-demo-2',
        patientName: 'Anjali Sharma',
        patientPhone: '+91 98111 22334',
        patientEmail: 'anjali@example.com',
        age: 34,
        gender: 'Female',
        symptoms: 'Regular prenatal checkup 24 weeks',
        departmentSlug: 'gynecology',
        doctorId: 'doc-6',
        doctorName: 'Dr. Sunita Deshmukh',
        date: '2026-07-02',
        slotTime: '12:00 PM',
        status: 'PENDING',
        createdAt: new Date().toISOString(),
        ticketQrToken: 'AAR-QR-3342'
      }
    ];
    localStorage.setItem(BOOKING_KEY, JSON.stringify(demoBookings));
    return demoBookings;
  }
  return JSON.parse(raw);
}

export function saveLocalAppointment(apt: Omit<AppointmentBooking, 'id' | 'createdAt' | 'ticketQrToken'>): AppointmentBooking {
  const current = getLocalAppointments();
  const newApt: AppointmentBooking = {
    ...apt,
    id: `apt-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    ticketQrToken: `AAR-QR-${Math.floor(1000 + Math.random() * 9000)}`
  };
  current.unshift(newApt);
  if (typeof window !== 'undefined') {
    localStorage.setItem(BOOKING_KEY, JSON.stringify(current));
  }
  return newApt;
}

export function updateAppointmentStatus(id: string, status: AppointmentBooking['status']): void {
  if (typeof window === 'undefined') return;
  const current = getLocalAppointments();
  const updated = current.map(item => item.id === id ? { ...item, status } : item);
  localStorage.setItem(BOOKING_KEY, JSON.stringify(updated));
}

export function getLocalInquiries(): PatientInquiry[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(INQUIRY_KEY);
  if (!raw) {
    const demoInquiries: PatientInquiry[] = [
      {
        id: 'inq-1',
        name: 'Corporate HR - Infosys Tech',
        phone: '+91 99887 76655',
        email: 'hr.health@company.com',
        department: 'Corporate Employee Shield',
        message: 'Looking to organize an annual health checkup camp for 450 employees at our Pune IT Park.',
        isInEmergency: false,
        isResolved: false,
        createdAt: new Date().toISOString()
      },
      {
        id: 'inq-2',
        name: 'Amitabh Verma',
        phone: '+91 91234 56789',
        email: 'verma.a@example.com',
        department: 'Critical Care',
        message: 'Need urgent ICU bed inquiry for 68 yr old patient recovering from stroke.',
        isInEmergency: true,
        isResolved: false,
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem(INQUIRY_KEY, JSON.stringify(demoInquiries));
    return demoInquiries;
  }
  return JSON.parse(raw);
}

export function saveLocalInquiry(inq: Omit<PatientInquiry, 'id' | 'createdAt' | 'isResolved'>): PatientInquiry {
  const current = getLocalInquiries();
  const newInq: PatientInquiry = {
    ...inq,
    id: `inq-${Date.now().toString().slice(-5)}`,
    isResolved: false,
    createdAt: new Date().toISOString()
  };
  current.unshift(newInq);
  if (typeof window !== 'undefined') {
    localStorage.setItem(INQUIRY_KEY, JSON.stringify(current));
  }
  return newInq;
}

export function toggleInquiryResolved(id: string): void {
  if (typeof window === 'undefined') return;
  const current = getLocalInquiries();
  const updated = current.map(item => item.id === id ? { ...item, isResolved: !item.isResolved } : item);
  localStorage.setItem(INQUIRY_KEY, JSON.stringify(updated));
}

export function saveLocalReview(rev: Omit<Review, 'id' | 'isApproved'>): Review {
  const newRev: Review = {
    ...rev,
    id: `rev-${Date.now().toString().slice(-5)}`,
    isApproved: true
  };
  return newRev;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  coverUrl: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'robotic-cabg-vs-open-heart-surgery',
    title: 'Robotic CABG vs Traditional Open Heart Surgery: Recovery & Outcomes',
    author: 'Dr. Rajeshwar Sharma',
    date: '28 June 2026',
    readTime: '6 Min Read',
    category: 'Cardiology Advances',
    excerpt: 'Explore how 4th Gen Da Vinci robotic cardiac bypass surgery eliminates sternal bone splitting and reduces ICU stay by 50%.',
    coverUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
    content: 'Traditional open heart bypass surgery required splitting the breastbone (sternotomy), leading to 6-8 weeks of painful recovery. At Aarogya Multi-Specialty Hospital, our hybrid robotic operating theater allows interventional cardiologists to perform multi-vessel coronary artery bypass through tiny pencil-sized incisions between the ribs. Patients experience near-zero blood loss, minimal post-operative pain, and are discharged home within 3 to 4 days.'
  },
  {
    id: 'blog-2',
    slug: 'golden-hour-stroke-thrombolysis',
    title: 'The Golden Hour: Why Every Minute Matters in Acute Ischemic Stroke',
    author: 'Dr. Vikramaditya Sinha',
    date: '22 June 2026',
    readTime: '5 Min Read',
    category: 'Emergency Neurology',
    excerpt: 'Understanding acute stroke symptoms (FAST protocol) and how intravenous thrombolysis within 4.5 hours prevents permanent brain damage.',
    coverUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    content: 'During an acute ischemic stroke, approximately 1.9 million brain neurons are lost every single minute that blood flow is blocked. Recognizing face drooping, arm weakness, and speech difficulty immediately is critical. Our Level 1 Emergency Trauma Command Center activates the stroke code within 90 seconds of arrival, rushing patients directly to our biplane neuro-interventional suite for mechanical thrombectomy and clot dissolving IV therapy.'
  },
  {
    id: 'blog-3',
    slug: 'mako-robotic-knee-replacement-rehab',
    title: 'Walking on the Same Day: The Revolution of MAKO Robotic Knee Replacement',
    author: 'Dr. Alok Banerjee',
    date: '15 June 2026',
    readTime: '4 Min Read',
    category: 'Orthopedics',
    excerpt: 'How CT-guided 3D joint mapping ensures exact millimeter implant positioning for a natural feeling knee and lifetime durability.',
    coverUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    content: 'Joint replacement accuracy dictates how long the prosthesis lasts and how natural the knee feels during stairs or sports. MAKO robotic arm-assisted technology creates a 3D virtual model of the patient’s knee anatomy prior to surgery. The robotic arm provides tactile resistance during bone preparation, guaranteeing 100% precision that manual surgery simply cannot match.'
  }
];
