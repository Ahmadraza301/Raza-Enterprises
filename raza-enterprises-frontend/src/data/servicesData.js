export const servicesData = [
  {
    id: 'pan-card',
    name: 'PAN Card',
    icon: '🆔',
    category: 'Identity Documents',
    tags: ['Most Used', 'Fast Approval'],
    description: 'Apply for new PAN card or update existing details',
    overview: 'Permanent Account Number (PAN) is a unique 10-digit alphanumeric identifier issued by the Income Tax Department.',
    process: [
      'Fill online application form',
      'Upload required documents',
      'Make payment',
      'Submit application',
      'Receive acknowledgment',
      'Get PAN card delivered'
    ],
    documents: ['Proof of Identity', 'Proof of Address', 'Date of Birth Proof', 'Passport size photograph'],
    eligibility: ['Indian citizen or foreign national', 'Any age group', 'Valid identity proof required'],
    pricing: { government: 110, service: 200, total: 310 },
    timeline: '15-20 working days',
    relatedServices: ['aadhaar-card', 'voter-id', 'passport']
  },
  {
    id: 'passport',
    name: 'Passport',
    icon: '🛂',
    category: 'Travel Documents',
    tags: ['Trending', 'New'],
    description: 'New passport application and renewal services',
    overview: 'Indian Passport is an official travel document issued by the Government of India for international travel.',
    process: [
      'Register on Passport Seva Portal',
      'Fill application form',
      'Pay fees online',
      'Book appointment',
      'Visit PSK with documents',
      'Police verification',
      'Receive passport'
    ],
    documents: ['Birth Certificate', 'Address Proof', 'Identity Proof', 'Photographs', 'Existing Passport (for renewal)'],
    eligibility: ['Indian citizen', 'Valid address proof', 'No criminal record'],
    pricing: { government: 1500, service: 500, total: 2000 },
    timeline: '30-45 days',
    relatedServices: ['visa-assistance', 'pan-card', 'voter-id']
  },
  {
    id: 'driving-license',
    name: 'Driving License',
    icon: '🚗',
    category: 'Transport Documents',
    tags: ['Most Used'],
    description: 'Apply for learner or permanent driving license',
    overview: 'Driving License is an official document permitting a person to operate motor vehicles.',
    process: [
      'Apply for learner license',
      'Pass written test',
      'Practice driving',
      'Book driving test slot',
      'Pass driving test',
      'Receive permanent license'
    ],
    documents: ['Age Proof', 'Address Proof', 'Medical Certificate', 'Passport size photos', 'Learner License (for permanent)'],
    eligibility: ['Minimum 18 years for car', 'Minimum 16 years for two-wheeler', 'Pass medical fitness test'],
    pricing: { government: 200, service: 300, total: 500 },
    timeline: '30 days',
    relatedServices: ['vehicle-registration', 'vehicle-insurance', 'pollution-certificate']
  },
  {
    id: 'aadhaar-card',
    name: 'Aadhaar Card',
    icon: '📜',
    category: 'Identity Documents',
    tags: ['Most Used', 'Fast Approval'],
    description: 'New Aadhaar enrollment and update services',
    overview: 'Aadhaar is a 12-digit unique identification number issued by UIDAI to Indian residents.',
    process: [
      'Visit Aadhaar center',
      'Fill enrollment form',
      'Biometric capture',
      'Document verification',
      'Receive acknowledgment slip',
      'Get Aadhaar via post'
    ],
    documents: ['Proof of Identity', 'Proof of Address', 'Date of Birth Proof'],
    eligibility: ['Indian resident', 'Any age', 'Valid address proof'],
    pricing: { government: 0, service: 150, total: 150 },
    timeline: '90 days',
    relatedServices: ['pan-card', 'voter-id', 'ration-card']
  },
  {
    id: 'voter-id',
    name: 'Voter ID Card',
    icon: '🗳️',
    category: 'Identity Documents',
    tags: ['New'],
    description: 'Electoral photo identity card registration',
    overview: 'Voter ID is an identity document issued by the Election Commission of India.',
    process: [
      'Fill Form 6 online',
      'Upload documents',
      'Submit application',
      'Field verification',
      'Approval by ERO',
      'Receive Voter ID'
    ],
    documents: ['Age Proof', 'Address Proof', 'Passport size photograph'],
    eligibility: ['Indian citizen', 'Minimum 18 years', 'Resident of constituency'],
    pricing: { government: 0, service: 100, total: 100 },
    timeline: '30 days',
    relatedServices: ['aadhaar-card', 'pan-card', 'ration-card']
  },
  {
    id: 'ration-card',
    name: 'Ration Card',
    icon: '🍚',
    category: 'Welfare Documents',
    tags: ['Trending'],
    description: 'Apply for new ration card or update details',
    overview: 'Ration Card is issued by state governments for purchasing subsidized food grains.',
    process: [
      'Fill application form',
      'Attach required documents',
      'Submit to local office',
      'Verification by officials',
      'Approval',
      'Collect ration card'
    ],
    documents: ['Address Proof', 'Income Certificate', 'Family photograph', 'Aadhaar cards of family members'],
    eligibility: ['Head of family', 'Permanent resident', 'Income criteria applicable'],
    pricing: { government: 0, service: 200, total: 200 },
    timeline: '30-45 days',
    relatedServices: ['aadhaar-card', 'income-certificate', 'domicile-certificate']
  },
  {
    id: 'birth-certificate',
    name: 'Birth Certificate',
    icon: '👶',
    category: 'Civil Documents',
    tags: ['Fast Approval'],
    description: 'Birth registration and certificate issuance',
    overview: 'Birth Certificate is an official document recording the birth of a child.',
    process: [
      'Register birth within 21 days',
      'Fill registration form',
      'Submit hospital records',
      'Verification',
      'Certificate issuance'
    ],
    documents: ['Hospital discharge slip', 'Parents ID proof', 'Address proof', 'Marriage certificate'],
    eligibility: ['Birth in India', 'Registration within time limit'],
    pricing: { government: 0, service: 150, total: 150 },
    timeline: '7-15 days',
    relatedServices: ['death-certificate', 'marriage-certificate', 'domicile-certificate']
  },
  {
    id: 'marriage-certificate',
    name: 'Marriage Certificate',
    icon: '💑',
    category: 'Civil Documents',
    tags: ['New'],
    description: 'Marriage registration and certificate',
    overview: 'Marriage Certificate is legal proof of marriage registration.',
    process: [
      'Fill application form',
      'Submit marriage proof',
      'Witness signatures',
      'Pay fees',
      'Verification',
      'Certificate issuance'
    ],
    documents: ['Marriage invitation', 'Photographs', 'Age proof of both', 'Address proof', 'Witness IDs'],
    eligibility: ['Legal age (21 for male, 18 for female)', 'Valid marriage proof'],
    pricing: { government: 100, service: 200, total: 300 },
    timeline: '15-30 days',
    relatedServices: ['birth-certificate', 'domicile-certificate', 'name-change']
  }
];

export const serviceCategories = [
  { id: 'identity', name: 'Identity Documents', icon: '🆔' },
  { id: 'travel', name: 'Travel Documents', icon: '✈️' },
  { id: 'transport', name: 'Transport Documents', icon: '🚗' },
  { id: 'civil', name: 'Civil Documents', icon: '📋' },
  { id: 'welfare', name: 'Welfare Schemes', icon: '🏠' },
  { id: 'business', name: 'Business Services', icon: '💼' },
  { id: 'education', name: 'Education Services', icon: '🎓' },
  { id: 'property', name: 'Property Services', icon: '🏘️' }
];

// Adding more services
servicesData.push(
  {
    id: 'income-certificate',
    name: 'Income Certificate',
    icon: '💵',
    category: 'Civil Documents',
    tags: ['Trending'],
    description: 'Income certificate for various purposes',
    overview: 'Income Certificate is issued by state government to certify annual income of a person or family.',
    process: ['Fill application form', 'Submit income proof', 'Verification by Tehsildar', 'Certificate issuance'],
    documents: ['Salary slips', 'Bank statements', 'Property documents', 'Aadhaar card', 'Address proof'],
    eligibility: ['Resident of state', 'Valid income proof'],
    pricing: { government: 50, service: 150, total: 200 },
    timeline: '15-20 days',
    relatedServices: ['domicile-certificate', 'caste-certificate', 'ration-card']
  },
  {
    id: 'domicile-certificate',
    name: 'Domicile Certificate',
    icon: '🏡',
    category: 'Civil Documents',
    tags: ['New'],
    description: 'Residence proof certificate',
    overview: 'Domicile Certificate proves that a person is a resident of a particular state.',
    process: ['Fill application', 'Submit residence proof', 'Verification', 'Certificate issuance'],
    documents: ['Birth certificate', 'School leaving certificate', 'Ration card', 'Property documents'],
    eligibility: ['Resident for minimum period', 'Valid residence proof'],
    pricing: { government: 50, service: 150, total: 200 },
    timeline: '20-30 days',
    relatedServices: ['income-certificate', 'birth-certificate', 'ration-card']
  },
  {
    id: 'caste-certificate',
    name: 'Caste Certificate',
    icon: '📋',
    category: 'Civil Documents',
    tags: ['Most Used'],
    description: 'SC/ST/OBC certificate',
    overview: 'Caste Certificate is issued to members of SC/ST/OBC categories for availing reservations.',
    process: ['Fill application', 'Submit caste proof', 'Verification', 'Certificate issuance'],
    documents: ['Parents caste certificate', 'School records', 'Aadhaar card', 'Birth certificate'],
    eligibility: ['Belonging to SC/ST/OBC category', 'Valid caste proof'],
    pricing: { government: 0, service: 200, total: 200 },
    timeline: '30-45 days',
    relatedServices: ['income-certificate', 'domicile-certificate', 'birth-certificate']
  },
  {
    id: 'gst-registration',
    name: 'GST Registration',
    icon: '💼',
    category: 'Business Services',
    tags: ['Trending', 'Fast Approval'],
    description: 'Goods and Services Tax registration',
    overview: 'GST Registration is mandatory for businesses with turnover above threshold limit.',
    process: ['Fill online form', 'Upload documents', 'Verification', 'GSTIN allotment'],
    documents: ['PAN card', 'Aadhaar', 'Business address proof', 'Bank account details', 'Business registration'],
    eligibility: ['Turnover above ₹40 lakhs', 'Valid business proof'],
    pricing: { government: 0, service: 1000, total: 1000 },
    timeline: '7-10 days',
    relatedServices: ['business-registration', 'pan-card', 'udyam-registration']
  },
  {
    id: 'udyam-registration',
    name: 'Udyam Registration',
    icon: '🏭',
    category: 'Business Services',
    tags: ['New'],
    description: 'MSME registration for small businesses',
    overview: 'Udyam Registration is for Micro, Small and Medium Enterprises to avail government benefits.',
    process: ['Online application', 'Aadhaar verification', 'Business details', 'Instant registration'],
    documents: ['Aadhaar card', 'PAN card', 'Business details'],
    eligibility: ['Indian citizen', 'MSME business'],
    pricing: { government: 0, service: 500, total: 500 },
    timeline: '1-2 days',
    relatedServices: ['gst-registration', 'business-registration', 'pan-card']
  }
);
