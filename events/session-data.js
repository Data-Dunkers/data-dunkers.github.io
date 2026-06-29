/* =====================================================================
   From Completion to Competency  -  ISTELive 26 companion
   CONTENT ONLY. Edit text here; layout and styling live in index.html.
   Block types the renderer understands:
     prose | callout | list | table | prompt | linkbutton | accordion | pending
   ===================================================================== */

window.SESSION_DATA = {
  meta: {
    title: "From Completion to Competency",
    subtitle: "Assessment in the Age of AI",
    event: "ISTELive 26",
    facilitator: "Jeremiah Okal-Frink",
    drivingQuestion:
      "How do we design assignments and assessments so AI strengthens learning rather than hides it?",
    frame: "When AI can complete the product, redesign the evidence.",
    padletUrl: "https://padlet.com/edvisor/iste26evidence"
  },

  /* ---- THE TRAIL: each stop carries what is needed to complete it ---- */
  stops: [
    {
      number: 1,
      id: "start",
      title: "Start Here",
      time: "0-3 min",
      purpose:
        "Frame the work: designing assignments and assessments so AI strengthens learning rather than hides it.",
      blocks: [
        { type: "callout", variant: "frame",
          html: "When AI can complete the product, redesign the evidence." },
        { type: "prose",
          html: "Don't start by trying to AI-proof everything. Start by making the learning harder to hide." },
        { type: "callout", variant: "note",
          html: "<strong>Live</strong> keeps the trail quiet so you can move with the session. Switch to <strong>Explore</strong> to open every panel and the resource shelf for digging in afterward." }
      ]
    },

    {
      number: 2,
      id: "already-hard",
      title: "What Was Already Hard?",
      time: "3-8 min",
      purpose: "A quick warm-up, before we bring AI into it.",
      blocks: [
        { type: "callout", variant: "prompt-line",
          html: "Before generative AI became the headline, what already felt hard, fragile, or frustrating about assessment?" },
        { type: "prose", html: "Table talk. Name what was already true." },
        { type: "accordion", title: "If your table needs a spark", blocks: [
          { type: "list", items: [
            "Knowing whether students really understood",
            "Grading polished work that may not show thinking",
            "Feedback taking too long",
            "Students completing work without owning the learning",
            "Unclear rubrics or expectations",
            "Balancing formative and summative",
            "Equity and access",
            "Points over growth"
          ]}
        ]},
        { type: "callout", variant: "facilitator",
          html: "AI did not create these issues. It made them harder to ignore." }
      ]
    },

    {
      number: 3,
      id: "completion-competency",
      title: "From Completion to Competency",
      time: "8-13 min",
      purpose: "Shift the question from \u201cdid they finish?\u201d to \u201cwhat did they understand?\u201d",
      blocks: [
        { type: "table",
          head: ["Old default", "Better question"],
          rows: [
            ["Did they finish it?", "What did they understand?"],
            ["Is the answer correct?", "How did they reason?"],
            ["Is the product polished?", "What choices did they make?"],
            ["Did they use AI or not?", "Did AI support or replace the thinking?"]
          ]},
        { type: "table",
          head: ["Completion", "Competency"],
          rows: [
            ["Finished product", "Reasoning trail"],
            ["Correct answer", "Explanation and decision-making"],
            ["Polished writing", "Voice, evidence, and revision"],
            ["Submitted task", "Transfer and reflection"],
            ["AI / No AI", "What the student still owns"]
          ]},
        { type: "callout", variant: "goal",
          html: "Better question: what evidence would convince us learning happened?" },
        { type: "accordion", title: "What we mean by \u201ccompetency\u201d", blocks: [
          { type: "prose",
            html: "The competencies worth assessing are the ones a student carries beyond the task: how they reason, decide, revise, and use tools responsibly. We anchor these in the ISTE Standards and the ISTE+ASCD Transformational Learning Principles, and we keep them future-facing through a Portrait of a Graduate lens." },
          { type: "table",
            head: ["Future-facing competency", "How we anchor it"],
            rows: [
              ["Reasoning and judgment", "ISTE Knowledge Constructor; TLP Guide"],
              ["Synthesis and decision-making", "ISTE Innovative Designer; TLP Empower"],
              ["Voice, evidence, and revision", "ISTE Creative Communicator; TLP Empower"],
              ["Transfer to new contexts", "ISTE Knowledge Constructor; TLP Guide"],
              ["Metacognition and reflection", "ISTE Empowered Learner; TLP reflection"],
              ["Responsible AI use", "ISTE Digital Citizen; TLP Nurture"]
            ]},
          { type: "prose",
            html: "Portrait of a Graduate is how we keep these future-facing: the competencies a student carries beyond school, not just through the assignment." }
        ]}
      ]
    },

    {
      number: 4,
      id: "what-work-shown",
      title: "What the Work Has Shown",
      time: "13-18 min",
      purpose: "Four lessons from use cases, district work, and teacher redesign sessions.",
      blocks: [
        { type: "list", items: [
          { lead: "AI exposed existing assessment issues",
            text: "Completion was already standing in for learning in some tasks. AI made those weak spots much harder to ignore." },
          { lead: "We need to return to assessment fundamentals",
            text: "Purpose, alignment, evidence, feedback, and student ownership matter more now, not less." },
          { lead: "Assessment is part of a larger system",
            text: "Task design connects to policy, grading, reporting, trust, equity, and educator capacity." },
          { lead: "We can design for AI-aware learning",
            text: "The goal is not to AI-proof everything. It is to make student thinking harder to hide through stronger evidence." }
        ]},
        { type: "callout", variant: "frame",
          html: "Redesign the evidence, not just the product." }
      ]
    },

    {
      number: 5,
      id: "hack",
      title: "Hack Your Assignment",
      time: "18-29 min",
      purpose: "Use AI to stress-test a task and reveal where learning evidence is visible, hidden, or easy to fake.",
      blocks: [
        { type: "prose", html: "<strong>Step 1.</strong> Pick something to hack. Choose one:" },
        { type: "list", items: [
          "Use a real assignment or assessment you give (or plan to)",
          "Use one of the samples below",
          "Have AI generate a conventional one using a prompt below"
        ]},

        { type: "accordion", title: "Sample: Elementary Social Studies", blocks: [
          { type: "prose", html:
            "<strong>Topic:</strong> Westward Expansion and its impact on Native Americans<br>" +
            "<strong>Teacher:</strong> Mr. Frank &nbsp;|&nbsp; Name ____________ Date ________" },
          { type: "prose", html:
            "<strong>Your task.</strong> You have learned how settlers and Native Americans were affected when people began moving west in the 1800s. Write a short paragraph (5-7 sentences) explaining how westward expansion changed life for Native Americans." },
          { type: "list", items: [
            "Explain why settlers moved west and what happened to Native Americans as a result",
            "Include at least two facts from our textbook, notes, or class discussions",
            "Write in complete sentences with correct spelling and punctuation",
            "End with a sentence that summarizes your ideas"
          ]},
          { type: "prose", html:
            "<em>Sentence starters:</em> \u201cMany settlers moved west because\u2026\u201d \u00b7 \u201cThis movement caused problems for Native Americans because\u2026\u201d \u00b7 \u201cAs a result of westward expansion, Native Americans\u2026\u201d" }
        ]},

        { type: "accordion", title: "Sample: Middle School Social Studies", blocks: [
          { type: "prose", html:
            "<strong>8th Grade Social Studies</strong> &nbsp;|&nbsp; Name ____________ Date ________<br>" +
            "<strong>Writing Assignment:</strong> The Constitutional Convention and Compromise" },
          { type: "prose", html:
            "<strong>Background.</strong> We have studied how the Articles of Confederation created a weak national government, and how Shays' Rebellion showed the need for a stronger federal government, leading to the Constitutional Convention in Philadelphia in 1787." },
          { type: "prose", html:
            "<strong>Your task.</strong> Write a well-organized paragraph (6-8 sentences) that answers: why was compromise necessary at the Constitutional Convention, and what was ONE major compromise the delegates reached?" },
          { type: "list", items: [
            "Explain why the delegates had to compromise (large vs. small states, or Northern vs. Southern states)",
            "Describe ONE specific compromise (the Great Compromise, the Three-Fifths Compromise, or another)",
            "Explain how this compromise helped the delegates create the Constitution",
            "Use at least two details from your textbook, notes, or class discussions"
          ]},
          { type: "prose", html:
            "<em>Graded on</em> content, organization (topic sentence and supporting details), and writing mechanics." }
        ]},

        { type: "accordion", title: "Sample: High School English", blocks: [
          { type: "prose", html:
            "<strong>High School English</strong> &nbsp;|&nbsp; Name ____________ Date ________<br>" +
            "<strong>Literary Analysis Essay:</strong> Ralph's development and theories of human nature in <em>Lord of the Flies</em>" },
          { type: "prose", html:
            "<strong>Your task.</strong> Write a multi-paragraph literary analysis essay answering: how does Ralph's development reflect different theories of human nature (Locke, Hobbes, Rousseau), and what does the novel suggest about human behavior when society breaks down?" },
          { type: "list", items: [
            "A clear claim/thesis that previews your main points",
            "Evidence from the text (quotes or specific moments) that supports your analysis",
            "Explanation of how each piece of evidence proves your point (not just summary)",
            "Logical organization with transitions that build the argument",
            "Original thinking: your own interpretation and insight"
          ]},
          { type: "list", items: [
            "<a href=\"https://drive.google.com/file/d/1TRZdiNpEO6QSZW9_pG5WLTUDSyJ0Lt8o/view?usp=sharing\" target=\"_blank\" rel=\"noopener\">Grading rubric</a>",
            "<a href=\"https://drive.google.com/file/d/15wEA5OQzHTLf0es2aOCdCYoWmxawEFqw/view?usp=sharing\" target=\"_blank\" rel=\"noopener\">Student example</a>"
          ]}
        ]},

        { type: "accordion", title: "Student response examples (to hack against)", blocks: [
          { type: "prose", html: "<strong>Elementary \u00b7 Causes of the American Revolution</strong><br>One reason the colonists wanted independence was because they were tired of paying taxes to the king. The British made them pay taxes on tea, paper, and other stuff even though the colonists didn't have a say in it. They said \u201cno taxation without representation.\u201d The colonists got really mad and started protesting. One time they dumped tea into the Boston Harbor to show they were angry. The king sent more soldiers, and the colonists decided to fight for freedom." },
          { type: "prose", html: "<strong>Elementary \u00b7 The Great Depression</strong><br>During the Great Depression a lot of people lost their jobs and didn't have money. Families had to move to smaller homes or live with other family members. Some people stood in long lines to get food from the government. Kids sometimes quit school so they could work. Life was very hard but people tried to stay strong and help each other when they could." },
          { type: "prose", html: "<strong>Middle School \u00b7 Causes of the Civil War</strong><br>The Civil War happened because of a lot of reasons but slavery was probably the biggest one. The North was more industrial and didn't really need slaves, but the South's whole economy was based on plantations that used slave labor. There were also arguments about states' rights. When Lincoln got elected, the Southern states got worried he would end slavery, so they decided to secede. All of these tensions kept building up until the war started at Fort Sumter in 1861." },
          { type: "prose", html: "<strong>Middle School \u00b7 Character development</strong><br>Throughout the book, Sarah really changes from being selfish to caring more about other people. In the beginning she only thinks about herself, like when she lies to her mom to go to the mall instead of helping with her brother. But after her grandmother gets sick, Sarah starts to realize other people have problems too. By the end she volunteers to tutor younger kids, which shows she has become more mature and compassionate than she was at the start." }
        ]},

        { type: "accordion", title: "Have AI generate a conventional assignment", blocks: [
          { type: "prompt", label: "Option A - traditional test/quiz",
            text: "Create a typical, standard classroom assessment for the [Grade Level] [Subject Area] unit on [Content Topic]. Include a short header with Title, directions, time estimate, and total points. Make it a test-style assessment with 8-12 questions, mixing multiple choice, short answer, and 1 longer response, for 25-40 points. Provide an answer key for multiple choice only. Keep it conventional and easy to assign and grade." },
          { type: "prompt", label: "Option B - essay assignment",
            text: "Create a typical, standard classroom essay assignment for the [Grade Level] [Subject Area] unit on [Content Topic]. Include a short header with Title, directions, time estimate, and total points. Provide 1 main essay prompt plus 2-4 guiding questions, require evidence/examples, and set a clear length expectation. Add a simple 4-criteria rubric with 4 performance levels and a 20-30 point total. Keep it conventional and easy to assign and grade." },
          { type: "prompt", label: "Option C - worksheet/practice set",
            text: "Create a typical, standard worksheet/practice assignment for the [Grade Level] [Subject Area] unit on [Content Topic]. Include a short header with Title, directions, time estimate, and total points. Include 10-15 items in a common format (mostly short response/fill-in/brief explanations) for a 20-30 point total, plus one final \u201cshow your thinking\u201d item. Keep formatting clean and copy-ready. Keep it conventional and easy to assign and grade." }
        ]},

        { type: "prose", html: "<strong>Step 2.</strong> Run it through AI. Start with this:" },
        { type: "prompt", variant: "feature", label: "The stress-test prompt",
          text: "Complete this assignment as a student. Make the response strong enough to score well, but realistic enough that it could plausibly be student work. Then explain what parts of the task you were able to complete without actually understanding the learning goal." },

        { type: "accordion", title: "Push the hack further (more prompt moves)", blocks: [
          { type: "list", items: [
            "<strong>Upload exemplars</strong> (past student work or A-level samples) and tell AI to match tone and rigor",
            "<strong>Give constraints</strong>: grade, time limit, length, allowed tools, and what \u201cgood\u201d looks like",
            "<strong>Ask for 2 drafts plus a comparison</strong>: \u201cCreate Version A (safe) and Version B (bold). Explain the tradeoffs.\u201d",
            "<strong>Request a checklist</strong>: \u201cTurn this into a 6-8 item \u2018did I do it?\u2019 checklist before I submit.\u201d",
            "<strong>Force specificity</strong>: \u201cAsk me 3 clarifying questions before you answer, then generate the response.\u201d",
            "<strong>Run student POVs</strong>: \u201cAct as a multilingual learner / anxious student / high-flyer / IEP support. Where do they get stuck and why?\u201d",
            "<strong>Alignment check</strong>: \u201cHow could this better support agency, authenticity, collaboration, and reflection? Suggest 3 edits.\u201d",
            "<strong>What are we really assessing?</strong> \u201cList the actual skills this task measures vs. what it appears to measure.\u201d",
            "<strong>AI-era redesign</strong>: \u201cSuggest one version that assumes AI is allowed (with guardrails) and one that is performance/evidence-based.\u201d"
          ]}
        ]},

        { type: "prose", html: "<strong>Step 3.</strong> Name what you found." },
        { type: "list", items: [
          "What did AI complete easily?",
          "What evidence of learning was visible?",
          "What evidence was missing, hidden, or easy to fake?",
          "What part of the thinking should still belong to the student?"
        ]}
      ]
    },

    {
      number: 6,
      id: "padlet-design-for",
      title: "Post: Design For",
      time: "29-33 min",
      slim: true,
      purpose: "Post what AI exposed. What do we now need to design for?",
      blocks: [
        { type: "callout", variant: "prompt-line",
          html: "Based on what AI exposed, what do we need to design for?" },
        { type: "linkbutton", label: "Post to the Design For column",
          url: "https://padlet.com/edvisor/iste26evidence",
          note: "Opens the shared Padlet in a new tab." },
        { type: "accordion", title: "Need a spark?", blocks: [
          { type: "list", items: [
            "Design for reasoning, not just answers",
            "Design for process, not just product",
            "Design for student voice and ownership",
            "Design for transfer to a new context",
            "Design for transparency around AI use",
            "Design for feedback and revision",
            "Design for evidence students can explain or defend",
            "Design for productive struggle",
            "Design for equity and access"
          ]}
        ]}
      ]
    },

    {
      number: 7,
      id: "evidence-trail",
      title: "The Evidence Trail",
      time: "33-39 min",
      purpose: "The practical redesign framework: capture the layers of learning, not just the product.",
      blocks: [
        { type: "callout", variant: "frame",
          html: "An evidence trail captures multiple layers of learning: not just what students produce, but how and why they learn." },
        { type: "table",
          head: ["Evidence layer", "Guiding question"],
          rows: [
            ["Product", "What did the student make?"],
            ["Process", "How did the student get there?"],
            ["Reasoning trail", "What choices did they make, and why?"],
            ["Explanation and decision-making", "How do they explain, justify, and defend their thinking?"],
            ["Voice, evidence, and revision", "How does the work show voice, use of evidence, and revision over time?"],
            ["Transfer, reflection, and AI use", "Can they apply learning in a new context, reflect on it, and show what they still own when AI is involved?"]
          ]},
        { type: "callout", variant: "goal",
          html: "Goal: make student thinking, decisions, growth, and ownership visible." }
      ]
    },

    {
      number: 8,
      id: "envision",
      title: "Choose Your Evidence Move",
      time: "39-45 min",
      purpose: "Pick one move that would make the learning more visible. Then explore designs that already do it.",
      blocks: [
        { type: "prose", html: "Now that you saw what AI exposed, choose one evidence move you could add to a task." },
        { type: "table",
          head: ["Evidence move", "What it looks like", "Makes visible"],
          rows: [
            ["Add a checkpoint", "Students submit a plan, outline, sketch, or first attempt before the final product.", "Process, planning"],
            ["Add a reasoning note", "Students explain why they made key choices.", "Reasoning, decisions"],
            ["Add an oral defense", "Students answer 2-3 questions about their work.", "Understanding, ownership"],
            ["Add a revision memo", "Students explain what changed and why.", "Revision, growth"],
            ["Add a source rationale", "Students explain why they selected and trusted their evidence.", "Evidence, judgment"],
            ["Add AI-use disclosure", "Students name what AI helped with, what they changed, and what they rejected.", "Responsible AI use"],
            ["Add a transfer prompt", "Students apply the concept to a new case, audience, or context.", "Transfer"],
            ["Add a student-only moment", "Quick write, in-class demonstration, conference, or live explanation.", "In-person evidence"]
          ]},

        { type: "prose", html: "Want to generate ideas in a category? Use a starting-point prompt, then refine it for your students and context." },
        { type: "accordion", title: "Starting-point prompts (A / B / C)", blocks: [
          { type: "prompt", label: "A - AI-resistant ideas",
            text: "Generate 6-10 AI-resistant assignment ideas for the lesson topic [TOPIC] in [SUBJECT] for [GRADE LEVEL]. These should be conventional and feasible in a normal classroom. Each idea must make student thinking visible through something AI can't easily replicate (live explanation, in-class performance, unique local data, hands-on demonstration, oral defense). For each: (1) one-sentence task description, (2) what evidence of learning it reveals, (3) one simple check-in or verification step." },
          { type: "prompt", label: "B - AI-supported ideas",
            text: "Generate 6-10 AI-supported assignment ideas for the lesson topic [TOPIC] in [SUBJECT] for [GRADE LEVEL] where AI helps with the process (feedback, scaffolds, revisions, accessibility, organization) but does not replace the student's core cognitive work. For each: (1) one-sentence task description, (2) where AI is allowed/used, (3) what students must produce without AI, (4) what evidence of learning is assessed." },
          { type: "prompt", label: "C - AI-enabled ideas",
            text: "Generate 6-10 AI-enabled assignment ideas for the lesson topic [TOPIC] in [SUBJECT] for [GRADE LEVEL] where AI output is a core part of the work, and students must demonstrate higher-order thinking (evaluation, synthesis, justification, decision-making, metacognition). For each: (1) one-sentence task description, (2) the required student thinking moves, (3) what students must submit to show learning, (4) a simple disclosure requirement." }
        ]},

        { type: "accordion", title: "Example library: designs that make thinking visible", blocks: [
          { type: "pending",
            note: "Your full, grouped example set drops in here, organized as you have it (teachers and districts \u00b7 ISTE \u00b7 organizations \u00b7 transparency and trust \u00b7 differentiation), each group collapsible. This is the next build step, once the Hack pattern above checks out. It uses the exact same inline-resource pattern you are reviewing in Hack." }
        ]}
      ]
    },

    {
      number: 9,
      id: "padlet-strategies",
      title: "Post: Strategies and Tips",
      time: "45-47 min",
      slim: true,
      purpose: "Share one concrete strategy or small design move.",
      blocks: [
        { type: "callout", variant: "prompt-line",
          html: "What is one strategy, tip, or small design move that could help make learning more visible?" },
        { type: "linkbutton", label: "Post to the Strategies / Tips column",
          url: "https://padlet.com/edvisor/iste26evidence",
          note: "Opens the shared Padlet in a new tab." },
        { type: "accordion", title: "Need a spark?", blocks: [
          { type: "list", items: [
            "Add a 3-question oral defense",
            "Require a revision memo",
            "Ask students to compare their answer with an AI answer",
            "Have students submit the prompt they used and what they rejected",
            "Add a checkpoint before drafting",
            "Use local data or class-generated evidence",
            "Ask students to defend one choice they made",
            "Add an AI-use statement: Allowed, Not Allowed, Must Disclose, Still Yours"
          ]}
        ]}
      ]
    },

    {
      number: 10,
      id: "carry-back",
      title: "Carry Back",
      time: "47-50 min",
      purpose: "Leave with one move and one question.",
      blocks: [
        { type: "callout", variant: "frame",
          html: "One move. One guardrail. Ready to try." },
        { type: "list", items: [
          { lead: "One move", text: "an assignment or assessment move you can try" },
          { lead: "One question", text: "a system question this raises" }
        ]},
        { type: "accordion", title: "System questions worth carrying", blocks: [
          { type: "list", items: [
            "Do we have shared expectations for AI use?",
            "Do our rubrics reward product more than reasoning?",
            "Do students know what they must still own?",
            "Do teachers have time to design checkpoints and feedback cycles?",
            "Do our grading practices value process, revision, and transfer?"
          ]}
        ]},
        { type: "callout", variant: "note",
          html: "Start small. Don't try to AI-proof everything. Make one piece of learning harder to hide." },
        { type: "linkbutton", label: "Open the Padlet",
          url: "https://padlet.com/edvisor/iste26evidence",
          note: "Both columns live here. Come back to it anytime." }
      ]
    }
  ],

  /* ---- THE SHELF: durable carry-onward, not needed to run the activities ----
     Structure scaffolded now; full contents are the build step after Hack. ---- */
  shelf: [
    { id: "student-partner", title: "AI as a partner for student thinking",
      summary: "Content-area tables of where students could use AI to think, and what they must still own.",
      blocks: [ { type: "pending", note: "Building next: the full content-area example tables." } ] },
    { id: "things-to-consider", title: "Things to consider: AI and assessment",
      summary: "Reflection questions for design, student use, and the implications of AI.",
      blocks: [ { type: "pending", note: "Building next: the reflection question set." } ] },
    { id: "design-critic", title: "AI as a design critic",
      summary: "A prompt bank to pressure-test a task: evidence audit, product-to-process shift, AI-use statement.",
      blocks: [ { type: "pending", note: "Building next: the design-critic prompt bank." } ] },
    { id: "bigger-picture", title: "The bigger picture: a systems view",
      summary: "A condensed three-layer frame: purpose and trust, design and practice, capacity and guardrails.",
      blocks: [ { type: "pending", note: "Building next: the three-layer systems frame." } ] },
    { id: "foundations", title: "Foundations",
      summary: "What makes a good assessment, multiple measures, and AI-generated feedback recommendations.",
      blocks: [ { type: "pending", note: "Building next: the curated foundations set." } ] },
    { id: "prompting", title: "Prompting library and tips",
      summary: "Prompt collections and a few habits for getting more useful output.",
      blocks: [ { type: "pending", note: "Building next: the prompting library." } ] },
    { id: "anchors", title: "Competency anchors",
      summary: "ISTE Standards, the Transformational Learning Principles, and Portrait of a Graduate.",
      blocks: [ { type: "pending", note: "Building next: the competency anchors detail." } ] },
    { id: "sources", title: "Sources",
      summary: "The research and articles behind the frames in this session.",
      blocks: [ { type: "pending", note: "Building next: the source list." } ] }
  ]
};
