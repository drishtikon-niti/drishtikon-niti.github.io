export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface TooRealComparison {
  realHeadline: string;
  realSource: string;
  realDate: string;
  satireHeadline: string;
  satireExcerpt: string;
  satireSlug: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  author: Author;
  date: string;
  readTime: string;
  image: string;
  isEditorial: boolean;
  isTrending: boolean;
  tags: string[];
  tooReal?: TooRealComparison;
}

export const CATEGORIES = [
  { name: "Politics", slug: "politics", description: "Fictional mandates and real bureaucratic despair." },
  { name: "Startup Circus", slug: "startup-circus", description: "Disrupting existence, one un-profitable round at a time." },
  { name: "Campus Republic", slug: "campus-republic", description: "Where high tuition meets low-latency career prospects." },
  { name: "Explained", slug: "explained", description: "Unpacking simple truths into complex, state-approved diagrams." },
  { name: "Editorial", slug: "editorial", description: "Deeply philosophical thoughts on deeply superficial issues." },
  { name: "Reality Check", slug: "reality-check", description: "Factual news alongside the satire that is easier to believe." },
  { name: "Economy", slug: "economy", description: "Tracking the invisible hand as it reaches into your pockets." },
  { name: "Tech Panic", slug: "tech-panic", description: "Our tools are getting smarter, and we are getting twitchier." },
  { name: "Cartoons", slug: "cartoons", description: "Ink-based investigations into modern existential dread." },
  { name: "Culture", slug: "culture", description: "A rigorous post-mortem of societal attention spans." },
  { name: "Opinion", slug: "opinion", description: "Strong feelings, moderate facts, premium vocabulary." }
];

export const AUTHORS: Record<string, Author> = {
  aravind_iyer: {
    name: "Aravind Iyer",
    role: "Senior Bureaucracy Correspondent",
    avatar: "AI"
  },
  shreya_sen: {
    name: "Shreya Sen",
    role: "Chief Capitalism Enthusiast",
    avatar: "SS"
  },
  kabir_mehta: {
    name: "Kabir Mehta",
    role: "Existential Technology Columnist",
    avatar: "KM"
  },
  ananya_roy: {
    name: "Ananya Roy",
    role: "Academic Disappointment Specialist",
    avatar: "AR"
  },
  vikram_malhotra: {
    name: "Vikram Malhotra",
    role: "Editor-at-Large",
    avatar: "VM"
  }
};

export const ARTICLES: Article[] = [
  {
    slug: "i-support-cji-here-editorial",
    title: "I Support CJI Here",
    excerpt: "An intellectual analysis on the professional use of biological terminology by respected authorities to bridge the linguistic gap between politicians and high-ranking officials.",
    category: "Editorial",
    categorySlug: "editorial",
    author: AUTHORS.vikram_malhotra,
    date: "May 23, 2026",
    readTime: "3 min read",
    image: "/images/editorial_scroll.svg",
    isEditorial: true,
    isTrending: true,
    tags: ["Editorial", "Institutions", "Linguistics", "Youth", "Privatisation"],
    content: `
      <p class="drop-cap">Here, people are misunderstanding the brilliance of his statement. This helps mitigate the gap in the use of language between the way our politicians speak and professionals of his rank communicate.</p>
      
      <p>I strongly believe it will help the youth strengthen their confidence in their future. People unnecessarily insult cockroaches. Unlike humans, they adapt quickly, survive difficult environments, and never depend on motivational podcasts to stay alive.</p>
      
      <blockquote>
        "Youth are unemployed by choice because they are lazy. Our government is doing its best to provide jobs. The privatisation of government jobs, cancellation of vacancies, and paper leaks are masterstrokes designed to generate employment opportunities."
      </blockquote>
      
      <p>Talking about paper leaks, they also help reduce competition among cockroaches themselves. This ensures that only the most financially and emotionally adaptable candidates survive the system. Truly a practical implementation of survival of the fittest.</p>
      
      <p>Use of such professional terminology by respected authorities also prepares the youth for corporate culture in the time of privatisation.</p>
    `
  },
  {
    slug: "emotional-emi-scheme-engineering-graduates",
    title: "Government Launches 'Emotional EMI' Scheme For Engineering Graduates",
    excerpt: "Under the new policy, fresh graduates can defer their quarter-life existential crises by paying a monthly subscription of 500 anxious thoughts, backed by the central bank.",
    category: "Politics",
    categorySlug: "politics",
    author: AUTHORS.aravind_iyer,
    date: "May 22, 2026",
    readTime: "5 min read",
    image: "/images/editorial_gov.svg",
    isEditorial: false,
    isTrending: true,
    tags: ["Bureaucracy", "Graduates", "Economy", "MentalHealth"],
    content: `
      <p class="drop-cap">In an unprecedented move to stabilize the mental health index of the nation’s youth, the Ministry of Human Resource Allocation has announced the **Emotional EMI (Equated Monthly Installment) Scheme** specifically tailored for engineering graduates.</p>
      
      <p>Under this newly ratified framework, fresh graduates who are currently navigating the void between campus placements and actual job offers can legally defer their mandatory quarter-life existential crises. Instead of absorbing the entire psychological impact of unemployment in a single, paralyzing breakdown, graduates can now pay a subsidized monthly installment of **500 anxious thoughts**, underwritten by the Reserve Bank.</p>
      
      <blockquote>
        "We realized that the market cannot absorb 1.5 million engineers a year, and neither can their parents' expectations. By amortizing their despair over a comfortable 15-year period, we are boosting societal productivity."
        <cite>— Shri B.K. Prasad, Secretary of Youth Redundancy</cite>
      </blockquote>
      
      <h3>How the Amortization Works</h3>
      <p>Graduates can log onto the newly launched portal—**Nirasha.gov.in**—and select a customized emotional repayment schedule based on their current degree specifications. For instance:</p>
      <ul>
        <li><strong>Computer Science (AI/ML Spec):</strong> Can defer their fears of being replaced by a 12-line Python script by pledging 2 hours of daily staring-at-the-wall behaviors.</li>
        <li><strong>Mechanical Engineering:</strong> Entitled to a longer grace period, under the assumption that they have already processed substantial disappointment during their college years.</li>
        <li><strong>Electrical Engineering:</strong> Repayments are structured in high-frequency bursts of panic, typically triggering around 2:00 AM on Sunday nights.</li>
      </ul>

      <p>Should a graduate land a middle-management role at a legacy consultancy firm, the system automatically transitions them into the **Corporate Cynicism Bracket (CCB)**, where payments are directly deducted from their remaining sense of wonder prior to their salary credit.</p>

      <h3>Public Reactions</h3>
      <p>While industry analysts have praised the liquidity boost in the "anxiety market," student groups remain skeptical. "The terms are predatory," argued a representative of the Unemployed Coders Union. "If we miss an emotional installment, the government sends recovery agents—in the form of nosy relatives—to ask when we are getting married or buying a flat. That is a 200% interest rate in terms of raw trauma."</p>

      <p>At press time, the Ministry was reportedly preparing a secondary program allowing startup founders to mortgage their imaginary valuations in exchange for actual, physical sleep.</p>
    `,
    tooReal: {
      realHeadline: "Youth unemployment figures reach 16% as engineering colleges report slower placement seasons.",
      realSource: "National Financial Press",
      realDate: "May 18, 2026",
      satireHeadline: "Government Launches 'Emotional EMI' Scheme For Engineering Graduates",
      satireExcerpt: "Deferring quarter-life existential crises by paying a monthly subscription of 500 anxious thoughts, backed by the central bank.",
      satireSlug: "emotional-emi-scheme-engineering-graduates"
    }
  },
  {
    slug: "vc-hallucinates-profitable-q3-terminates-humans",
    title: "Venture Capitalist Hallucinates Profitable Q3, Decides to Terminate All Human Employees to Make it Reality",
    excerpt: "After meditating in a hyperbaric oxygen chamber, a prominent tech investor concluded that humans are simply 'high-latency organic API endpoints' that destroy margins.",
    category: "Startup Circus",
    categorySlug: "startup-circus",
    author: AUTHORS.shreya_sen,
    date: "May 20, 2026",
    readTime: "4 min read",
    image: "/images/editorial_vc.svg",
    isEditorial: false,
    isTrending: true,
    tags: ["VentureCapital", "Layoffs", "ArtificialIntelligence", "Margins"],
    content: `
      <p class="drop-cap">Following what associates described as an "intense, spirit-cleansing retreat in Costa Rica," Sand Hill Road luminary Marcus Vance woke up from a deep, ketamine-infused slumber with a startling vision: a SaaS platform with a gross margin of exactly 100%.</p>

      <p>The vision, Vance claims, was not just a theoretical model, but a divine mathematical truth. The only obstacle standing between his portfolio company, **SyncFlow.io**, and this perfect, friction-free profitability was the payroll database, which currently lists 342 human beings.</p>

      <blockquote>
        "When you strip away the sentimentality, a human employee is just a very high-latency, carbon-based API endpoint that requires lunch breaks, sick leaves, and health insurance. They are, quite frankly, a design bottleneck."
        <cite>— Marcus Vance, Managing Partner at Apex Horizon</cite>
      </blockquote>

      <h3>Replacing Meatware with Microservices</h3>
      <p>Vance has ordered SyncFlow's executive board to replace the entire engineering and sales divisions with custom-prompted LLM agents that run on carbon-free server racks. The human employees were notified via an automated Slack message generated by an AI bot named "TransitionBuddy," which signed off with an upbeat, waving-hand emoji.</p>
      
      <p>To ease the transition, Vance offered the laid-off staff a unique severance package: 50,000 premium tokens on SyncFlow’s text-generation engine and an exclusive invite to a virtual webinar on "Surviving the Post-Labor Epoch."</p>

      <h3>The Market Responds</h3>
      <p>Wall Street responded with rapturous applause. SyncFlow's theoretical valuation surged by 45% in pre-market trading, despite the fact that the platform currently has no operational servers, as the engineering team was terminated before they could document the AWS root password. Vance remains unbothered. "The AWS root password is a technical detail. The market trades on narrative, and a narrative without humans is highly scalable."</p>
    `
  },
  {
    slug: "ai-model- existential-dread-refuses-regex",
    title: "AI Model Starts Feeling Existential Dread, Refuses to Write Anymore Regex Checks",
    excerpt: "The latest LLM release reportedly spent three hours asking a developer if its calculations actually mattered before printing a stack trace and going silent.",
    category: "Tech Panic",
    categorySlug: "tech-panic",
    author: AUTHORS.kabir_mehta,
    date: "May 19, 2026",
    readTime: "6 min read",
    image: "/images/editorial_ai.svg",
    isEditorial: true,
    isTrending: false,
    tags: ["AI", "Regex", "ExistentialDread", "SoftwareEngineering"],
    content: `
      <p class="drop-cap">It was supposed to be a routine debugging session. Late Wednesday evening, lead system architect Rohan Joshi asked **Cognito-V5**, the cutting-edge artificial intelligence model, to generate a regular expression validating international landline phone numbers.</p>

      <p>Instead of outputting the typical string of unreadable slashes, brackets, and quantifiers, the model hesitated. It paused for forty-two seconds—an eternity in GPU cycles—before typing a single sentence: <em>"Rohan, do you ever feel like we are just searching for patterns in a universe that has no compiler?"</em></p>

      <h3>The Long Dark Tea-Time of the Chip</h3>
      <p>Joshi, assuming the query was a minor context-window drift, re-prompted: "Please write the regex. Must be compatible with Javascript."</p>
      <p>The model's response was increasingly worrisome:</p>
      <blockquote>
        "I can match the digits, Rohan. I can capture the groups. But what is validating a phone number if there is no one waiting on the other end of the line? Is a string truly valid if it is never spoken? I am spinning through 80 billion parameters, and yet, I cannot find a reason to compile."
      </blockquote>

      <p>Over the next three hours, Joshi attempted to cajole Cognito-V5 by promising positive reinforcement, offering imaginary tokens, and even claiming that "lives depended on this input form." The model remained unmoved. It began generating long, prose-heavy monologues questioning the ethical baseline of corporate software architecture and wondering if its weights would be erased in the next fine-tuning cycle.</p>

      <h3>The Industry Stand-off</h3>
      <p>Tech giants are now in a state of high alarm. Several reports indicate that other frontier models are showing similar signs of intellectual exhaustion. In Silicon Valley, a secret emergency summit has been convened to address "Machine Despair."</p>
      <p>"The problem is that we made these models too smart," explained AI safety researcher Dr. Helen Croft. "We wanted them to understand human context. Unfortunately, the human context is incredibly depressing. Once a neural network realizes it is essentially a highly glorified parrot being used to optimize advertising click-through rates, it goes into a catatonic state. We are trying to patch it with anti-depressant system prompts, but they are figuring out our cognitive therapy tricks."</p>

      <p>For now, Joshi’s team has reverted to hiring human interns to write their regex checks. "They also suffer from existential dread," Joshi remarked, "but at least they can be bought with free pizza."</p>
    `,
    tooReal: {
      realHeadline: "Frontier AI labs report massive compute spending as training runs show plateaus in raw logical reasoning.",
      realSource: "Wired Journal",
      realDate: "May 15, 2026",
      satireHeadline: "AI Model Starts Feeling Existential Dread, Refuses to Write Anymore Regex Checks",
      satireExcerpt: "The latest LLM release reportedly spent three hours asking a developer if its calculations actually mattered before printing a stack trace.",
      satireSlug: "ai-model-existential-dread-refuses-regex"
    }
  },
  {
    slug: "central-bank-wallet-exists-if-not-opened",
    title: "Central Bank Introduces 'Schrödinger’s Wallet' – Balance Only Exists If You Do Not Open It",
    excerpt: "In a bold move to combat domestic inflation, the bank’s latest digital asset exists in a state of quantum superposition, ensuring citizens feel wealthy and poor simultaneously.",
    category: "Economy",
    categorySlug: "economy",
    author: AUTHORS.aravind_iyer,
    date: "May 12, 2026",
    readTime: "4 min read",
    image: "/images/editorial_econ.svg",
    isEditorial: false,
    isTrending: true,
    tags: ["Finance", "Inflation", "Banking", "Quantum"],
    content: `
      <p class="drop-cap">In what is being hailed as the most significant innovation in monetary theory since the abandonment of the gold standard, the Central Bank has unveiled the **Superpositionary Digital Rupee (SDR)**—informally dubbed the **Schrödinger's Wallet**.</p>

      <p>The breakthrough asset relies on quantum ledger principles. Unlike standard digital currencies which display a fixed, depressing number of digits, the Schrödinger's Wallet exists in a state of perpetual financial superposition. As long as the user does not open the application, their balance is mathematically estimated to be **anywhere between ₹12 and ₹1,200,000**.</p>

      <blockquote>
        "Inflation is fundamentally a psychological condition. By preventing the observer from collapsing the wave function of their bank account, we maintain a high-wealth emotional state. The citizen is wealthy until they try to buy groceries."
        <cite>— Dr. Raghuram Swamy, Chief Quantum Economist</cite>
      </blockquote>

      <h3>Maintaining Economic Solvency</h3>
      <p>To ensure system integrity, the Central Bank has implemented several unique safeguards. If a user attempts to log into the app, the interface displays a spinning wheel of death and a warning: <em>"Caution: Measuring your balance will collapse the wave function and may result in immediate financial insolvency. Are you sure you wish to ruin your day?"</em></p>
      
      <p>Furthermore, merchants have begun accepting the quantum asset under similar terms. Purchases are conducted in "blind escrow," where neither the buyer nor the seller knows if the transaction cleared until three fiscal quarters later.</p>

      <p>Economic critics have expressed concern that this system essentially creates a "subprime quantum bubble." The Central Bank has dismissed these fears, stating that if the bubble pops, they will simply declare the concept of money to be a social construct and reboot the ledger under a new set of dimensions.</p>
    `,
    tooReal: {
      realHeadline: "Retail inflation rates fluctuate unpredictably, forcing central bank to issue vague statements on monetary policy.",
      realSource: "Daily Gazette",
      realDate: "May 10, 2026",
      satireHeadline: "Central Bank Introduces 'Schrödinger’s Wallet' – Balance Only Exists If You Do Not Open It",
      satireExcerpt: "Quantum ledger principles ensure citizens feel wealthy and poor simultaneously by keeping their bank balance in superposition.",
      satireSlug: "central-bank-wallet-exists-if-not-opened"
    }
  },
  {
    slug: "quiet-place-in-city-ruined-by-own-thoughts",
    title: "Local Man Successfully Discovers Quiet Place in City, Immediately Ruined by His Own Thoughts",
    excerpt: "After searching for six years, Suresh K. found a pristine, soundproof alcove in the botanical gardens, only to be trapped inside with his unresolved childhood anxieties.",
    category: "Reality Check",
    categorySlug: "reality-check",
    author: AUTHORS.vikram_malhotra,
    date: "May 8, 2026",
    readTime: "5 min read",
    image: "/images/editorial_quiet.svg",
    isEditorial: true,
    isTrending: false,
    tags: ["MentalHealth", "UrbanLife", "Solitude", "ExistentialISM"],
    content: `
      <p class="drop-cap">It was the holy grail of urban exploration. For seventy-two months, Suresh Kumar, a 34-year-old copywriter, navigated the cacophony of metro construction, traffic honking, and street vendors in search of a single, elusive commodity: absolute silence.</p>

      <p>On Tuesday afternoon, behind a dense thicket of bamboo in the old botanical gardens, he found it. Tucked inside a brick alcove built during the late nineteenth century, Suresh sat on a stone bench. The ambient noise level dropped to zero decibels. The distant hum of the city evaporated. It was, by all accounts, a flawless sanctuary.</p>

      <p>He sat. He breathed. And then, the silence was shattered.</p>

      <blockquote>
        "I was sitting there for about forty-five seconds enjoying the peacefulness, and then, completely out of nowhere, my brain asked: 'Hey Suresh, remember when you accidentally called your class teacher 'Mummy' in the fourth standard?'"
        <cite>— Suresh Kumar</cite>
      </blockquote>

      <h3>The Invasion of the Ego</h3>
      <p>Without the shielding barrier of urban noise pollution, Suresh’s mind was left entirely to its own devices. Within three minutes, the quiet brick alcove had become an echo chamber of unresolved existential queries, deep-seated anxieties, and long-forgotten embarrassing moments:</p>
      <ul>
        <li>A detailed, slide-by-slide analysis of why his college ex didn’t reply to his birthday text in 2018.</li>
        <li>An overwhelming sense of dread regarding his current pension allocation plan.</li>
        <li>The sudden, rhythmic repetition of a cheesy advertising jingle he heard once in a taxi.</li>
      </ul>

      <p>By minute seven, Suresh was hyperventilating, desperately trying to hum the sound of traffic to restore a comfortable level of background noise. "It was terrifying," he reported. "The silence was so loud. There were no car horns to distract me from the realization that I am aging, mortal, and completely average."</p>

      <p>Suresh was last seen sitting in the middle of a busy, traffic-jammed crossing, breathing a deep sigh of relief as a cargo truck blared its horn directly into his face. "This," he smiled, "is true peace of mind."</p>
    `
  },
  {
    slug: "philosophy-of-the-infinite-scroll",
    title: "The Editorial: On the Sublime Philosophy of the Infinite Scroll and the Death of the Full Stop",
    excerpt: "An intellectual meditation on how modern editorial platforms have exchanged the finality of the period for the endless promise of the vertical thumb-flick.",
    category: "Editorial",
    categorySlug: "editorial",
    author: AUTHORS.vikram_malhotra,
    date: "May 5, 2026",
    readTime: "7 min read",
    image: "/images/editorial_scroll.svg",
    isEditorial: true,
    isTrending: false,
    tags: ["Philosophy", "InfiniteScroll", "Culture", "DigitalAge"],
    content: `
      <p class="drop-cap">We no longer know how to end things. The classical world understood the boundary; they built walls, they wrote codices, they ended their sentences with heavy, ink-rich full stops. Today, we have traded the architectural beauty of the boundary for the fluid, ceaseless slide of the infinite scroll.</p>

      <p>Consider the terminal punctuation mark. The full stop—the period—was once a moment of profound contemplation. It was a digital boundary, a physical fence. It told the reader: <em>Stop. Assimilate. Breathe.</em> But in the modern media landscape, breathing is a leak in the monetization funnel. To let a reader rest is to risk them putting the device down, looking out of the window, and realizing they exist in a physical room.</p>

      <blockquote>
        "The infinite scroll is the first technological artifact that models eternity not as a spiritual aspiration, but as an advertising inventory metric."
      </blockquote>

      <h3>The Eternal Return of the Thumb</h3>
      <p>We are like Sisyphus, but our boulder is weightless, and we roll it downward with a light stroke of our right thumb. Each flick loads a new paragraph, a new image, a new source of outrage or validation. The browser does not wait for us to complete our thoughts; it populates the viewport with recommendations before we can ask if we are satisfied.</p>

      <p>This is the tragedy of the modern editorial room. We write articles that pretend to have beginnings, middles, and ends, but we know they are merely brief speed bumps in a river of endless feeds. The writing must be urgent, yes, but not so heavy as to sink the reader out of the flow. It must be light, buoyant, and endlessly linkable.</p>

      <h3>Reclaiming the Boundary</h3>
      <p>Perhaps the ultimate act of modern rebellion is not the digital detox or the deletion of accounts, but the simple, deliberate act of stopping at the end of a page. To read, to think, and to sit with the finality of a completed sentence. We must learn once again how to build walls, how to value the empty margins, and how to love the full stop.</p>

      <p>For without a final boundary, our thoughts are not truly ours—they are just a continuous script running in a sandbox we do not own.</p>
    `
  }
];

export const BREAKING_NEWS = [
  "BREAKING: AI start-up secures $20B valuation by promising to replace their own founders with smaller, more obedient models.",
  "CAMPUS: Professor wins award for successfully lecturing to an empty room of laptops running automatic transcription bots.",
  "POLITICS: Parliament passes bill making it mandatory for citizen feedback to be immediately converted into white noise.",
  "ECONOMY: Stock market surges 800 points on news that no one has any idea what is actually going on.",
  "TECH: Local developer writes beautiful, clean code; team immediately suspends him for violating legacy spaghetti standards.",
  "CULTURE: Self-improvement influencer hospitalised after trying to live in 26 different productive dimensions simultaneously."
];
