// CEN100 Fall 2026 assignments.
//
// Dates and weights: Fall 2026 CEN100 course outline, plus the course-team
// updates posted after it (Sept 24-30, Oct 13 and Oct 23, 2026).
// "How to do it" details: assignment handouts and rubrics as summarized in the
// student-made CEN100 Guide. These still need sign-off from the Lead GA
// (Aditya); see the README.
//
// Each entry:
//   title        shown in the assignment dropdown
//   header       heading shown above the description
//   description  HTML shown when the assignment is picked
//   dueDate      "YYYY-MM-DD", or two dates joined by " and ", or "" if TBA
//   steps        HTML, one per work phase. The calculator spreads these evenly
//                between the student's start date and due date, in order.

const CEN100_ASSIGNMENTS = {
    personal_intro: {
        id: "personal_intro",
        title: "Personal Introduction",
        header: "Personal Introduction (1%)",
        description: `
      <ul>
        <li>Orientation &amp; Policy assignment, submitted on D2L.</li>
        <li>Due Wednesday, Sept 16 at 3:00 PM.</li>
      </ul>`,
        dueDate: "2026-09-16",
        steps: [
            `<b>Step 1: Read the Instructions</b><br>
    Read the Personal Introduction instructions on D2L so you know exactly what to include.`,
            `<b>Step 2: Write Your Introduction</b><br>
    Write your introduction as instructed. Proofread it for complete sentences, spelling and grammar.`,
            `<b>Step 3: Submit</b><br>
    Submit it to the D2L course shell before 3:00 PM on the due date.`
        ]
    },
    survey_entry: {
        id: "survey_entry",
        title: "Survey Questionnaire (Entry)",
        header: "Survey Questionnaire (1%)",
        description: `
      <ul>
        <li>Orientation &amp; Policy assignment.</li>
        <li>Completed through the Week 2 Google Form.</li>
      </ul>`,
        dueDate: "2026-09-16",
        steps: [
            `<b>Step 1: Open the Survey</b><br>
    Open the entry survey using the Google Form link posted for Week 2.`,
            `<b>Step 2: Complete and Submit</b><br>
    Answer every question and submit the form.`
        ]
    },
    syllabus_quiz: {
        id: "syllabus_quiz",
        title: "Course Syllabus Quiz",
        header: "Course Syllabus Quiz (2%)",
        description: `
      <ul>
        <li>Orientation &amp; Policy assignment.</li>
        <li>Completed on D2L.</li>
      </ul>`,
        dueDate: "2026-09-16",
        steps: [
            `<b>Step 1: Review the Syllabus</b><br>
    Read the Fall 2026 Course Outline, noting key policies, dates and requirements: late work earns zero, every team submission needs the team number and section in its header, and the notebook is written as you go.`,
            `<b>Step 2: Take the Quiz</b><br>
    Complete the Course Syllabus Quiz on D2L.`
        ]
    },
    email: {
        id: "email",
        title: "Email Assignment",
        header: "Professional Email Assignment (2%)",
        description: `
      <ul>
        <li>Professional email exercise, sent from your official TMU email account.</li>
        <li>Send your email draft, your choice paragraph and your reflection to your <b>Project Manager (PM)</b>.</li>
        <li>Due Wednesday, Sept 23 at 3:00 PM.</li>
        <li>One revision is allowed, but only after an on-time first attempt.</li>
      </ul>`,
        dueDate: "2026-09-23",
        steps: [
            `<b>Step 1: Read the Email Policy and Handout</b><br>
    Review the Email Policy in the course outline and the assignment handout: the required format, tone and information.`,
            `<b>Step 2: Draft the Email</b><br>
    Draft a professional email from your TMU account. The subject line must include <b>F2026CEN100</b>, and the body must include your name and student number.`,
            `<b>Step 3: Write the Choice Paragraph and Reflection</b><br>
    Write the choice paragraph and the reflection the handout asks for.`,
            `<b>Step 4: Review and Edit</b><br>
    Check for complete sentences, correct spelling and proper grammar.`,
            `<b>Step 5: Send It to Your PM</b><br>
    Email the draft, choice paragraph and reflection to your Project Manager before 3:00 PM. Submit on time so that you keep your one allowed revision.`
        ]
    },
    academic_integrity: {
        id: "academic_integrity",
        title: "Academic Integrity Quiz",
        header: "Academic Integrity Quiz (2%)",
        description: `
      <ul>
        <li>MANDATORY quiz on D2L, with up to 10 attempts.</li>
        <li>Due Wednesday, Oct 14 at 3:00 PM.</li>
        <li>Missing it can make your whole course grade INCOMPLETE.</li>
      </ul>`,
        dueDate: "2026-10-14",
        steps: [
            `<b>Step 1: Review the Academic Integrity Policy</b><br>
    Review TMU Senate Policy 60: Academic Integrity and the course's rules on GenAI, citations and real research data.`,
            `<b>Step 2: Take the Quiz</b><br>
    Complete the Academic Integrity Quiz on D2L before 3:00 PM. You have up to 10 attempts.`
        ]
    },
    whmis: {
        id: "whmis",
        title: "WHMIS Certification",
        header: "WHMIS Certification (2%)",
        description: `
      <ul>
        <li>MANDATORY safety certificate, completed in the WHMIS D2L course.</li>
        <li>Required before you can use the makerspace to build your prototype.</li>
        <li>Missing it can make your whole course grade INCOMPLETE.</li>
      </ul>
    `,
        dueDate: "2026-10-14",
        steps: [
            `<b>Step 1: Open the WHMIS D2L Course</b><br>
  - Open the WHMIS eLearning course on D2L.`,
            `<b>Step 2: Complete the 3 Modules</b><br>
  - Work through all three modules.<br>
  - Score <b>80% or higher on each module quiz</b>. You have 5 attempts per quiz.`,
            `<b>Step 3: Get and Save Your Certificate</b><br>
  - Generate your certificate from <b>Awards</b> in the WHMIS D2L course.<br>
  - Save a copy. You will need it for the makerspace.`
        ]
    },
    participation: {
        id: "participation",
        title: "D2L Quizzes Participation",
        header: "Attendance Quizzes Participation (5%)",
        description: `
      <ul>
        <li>Short D2L quizzes given at a random point during your assigned tutorial. Check D2L for timing.</li>
        <li>Attendance in your own section is mandatory.</li>
        <li>Answering for another student, or having someone answer for you while you are absent, is an academic integrity violation and earns zero for the whole 5%.</li>
      </ul>
    `,
        dueDate: "",
        steps: [
            `<b>Step 1: Attend Your Assigned Section In Person</b><br>
    You must be physically present in your own assigned tutorial to get credit. Taking a quiz while absent earns no credit and may raise an academic integrity concern.`,
            `<b>Step 2: Complete the D2L Quiz When It Is Given</b><br>
    Answer the quiz on D2L when it is given during the session.`
        ]
    },
    reflections: {
        id: "reflections",
        title: "Personal Reflections (x2)",
        header: "Personal Reflections (4%)",
        description: `
      <ul>
        <li>Two reflections. Reflection 1 covers your progress near the end of Phase 2. Reflection 2 looks back over the whole semester.</li>
        <li>Email each one separately, directly to your <b>assigned Project Manager</b>. Follow the deadline headings in the reflection handout.</li>
        <li>Due by end of day on Wednesday, Oct 28 and Wednesday, Dec 2.</li>
      </ul>
    `,
        dueDate: "2026-10-28 and 2026-12-02",
        steps: [
            `<b>Step 1: Confirm Your Project Manager</b><br>
    Confirm who your assigned PM is and their email address.`,
            `<b>Step 2: Write Reflection 1</b><br>
    Reflect on your progress through Phase 2, using your notebook entries for specific examples. Email it to your PM by end of day Oct 28.`,
            `<b>Step 3: Write Reflection 2</b><br>
    Look back over the whole semester. Email it to your PM by end of day Dec 2.`
        ]
    },
    matlab: {
        id: "matlab",
        title: "MATLAB Assignments",
        header: "MATLAB Assignments (10%)",
        description: `
      <ul>
        <li>Two assignments from the MATLAB labs, normally done in pairs. If the class has an odd number of students, the unpaired student may work solo or join a group of 3.</li>
        <li>Assignment 1: due Wednesday, Oct 7 at 3:00 PM. Submit one .m script showing both students' names, student IDs and section.</li>
        <li>Assignment 2: due Wednesday, Nov 4. Follow its separate instructions and check the time on D2L.</li>
      </ul>
    `,
        dueDate: "2026-10-07 and 2026-11-04",
        steps: [
            `<b>Step 1: Confirm Your Partner</b><br>
  - Confirm your pair (or solo or group of 3) arrangement for the MATLAB labs.`,
            `<b>Step 2: Assignment 1</b><br>
  - Complete Assignment 1 together using the skills from the MATLAB labs.<br>
  - Put both students' names, IDs and section at the top of the one .m script.<br>
  - Run it to check it works, then submit before 3:00 PM on Oct 7.`,
            `<b>Step 3: Assignment 2</b><br>
  - Read Assignment 2's separate instructions and complete it with your partner.<br>
  - Run it to check it works, then submit by the time posted on D2L.`
        ]
    },
    notebook: {
        id: "notebook",
        title: "Team Design Notebooks",
        header: "Team Design Notebooks (4%)",
        description: `
      <ul>
        <li>One shared team notebook, written during or right after project work.</li>
        <li>Every member needs substantive, dated entries with their name or initials at <b>both</b> checkpoints. A missing member stops the team getting full marks, even if the rest is strong.</li>
        <li><b>Checkpoints:</b> PDF export due Nov 4 and Dec 2 at 3:00 PM.</li>
      </ul>
    `,
        dueDate: "2026-11-04 and 2026-12-02",
        steps: [
            `<b>Step 1: Set Up the Shared Notebook</b><br>
    Keep one shared design notebook as your team's official project record. Put a copy of the Team Contract in it.`,
            `<b>Step 2: Write As You Go</b><br>
    After every meeting, lab or work session, add a dated entry with your name or initials: decisions, user research, sketches, test results. Don't leave it to the end. Your entries are your proof of contribution for the Peer Evaluation.`,
            `<b>Step 3: Checkpoint 1 (Nov 4)</b><br>
    Check that every member has an entry, and be ready to talk about yours at the Midterm Design Review. Export the notebook to PDF and submit it by 3:00 PM.`,
            `<b>Step 4: Checkpoint 2 (Dec 2)</b><br>
    Keep logging prototype builds, tests and changes. Check that every member has a new entry, then export to PDF and submit by 3:00 PM.`
        ]
    },
    innovation: {
        id: "innovation",
        title: "Innovation Challenge Project",
        header: "Innovation Challenge Project (41%)",
        description: `
      <ul>
        <li>Semester-long team project in four phases: Problem Discovery and Team Formation, Engineering Analysis and Concept Development, Prototype and Innovation Development, and Pitch, Showcase and Reflection.</li>
        <li>Culminates in the Innovation Showcase in front of industry judges. Teams entering the competition must sign up two weeks before Dec 2.</li>
        <li><b>Milestone dates:</b> Sept 23 (M1), Oct 2 (M2), Oct 21 &amp; 28 (M3), Nov 4 (M4), Nov 25 &amp; Dec 2 (M5&ndash;M6), Dec 2 (M7&ndash;M8).</li>
        <li><b>Rules for every team submission:</b> put your team number/name and section in the header, and follow each assignment's cover-page and signature instructions. Late work earns zero without valid documentation.</li>
        <li>Team roles change each phase: Phase 2 starts Sept 28, Phase 3 Nov 2 and Phase 4 Nov 23.</li>
        <li>GenAI only where permitted, and disclose it when required. AI cannot replace real user research, engineering analysis, design decisions or prototype testing.</li>
        <li>Each milestone below also has its own entry in this calculator with step-by-step instructions.</li>
      </ul>
    `,
        dueDate: "2026-11-25 and 2026-12-02",
        steps: [
            `<b>Milestone 1: Team Contract + Task Outline (2%)</b><br>
    One team upload to D2L: how you will work together (communication, schedule, expectations, conflict resolution) and the list of what needs doing and when. Agree an internal deadline for teammates to review work before each submission. Every member signs the Team Contract. Keep a copy in the notebook and keep the Task Outline updated all semester.`,
            `<b>Milestone 2: Project Outline + User Research (4%)</b><br>
    2&ndash;3 pages: problem statement, research with at least 5 real people, needs tree, 2&ndash;4 early ideas and the work division. Due Fri Oct 2.`,
            `<b>Milestone 3: Failure Analysis Labs (6%)</b><br>
    <b>Part 1 (2%, Oct 21):</b> sub-teams of 4&ndash;5 review a documented engineering failure.<br>
    <b>Part 2 (4%, Oct 28):</b> the full team completes an FMEA of its own project and presents a short design insight.`,
            `<b>Milestone 4: Midterm Design Review (8%)</b><br>
    Live in the Week 9 lab (Nov 4): about a 5-minute talk plus a 3-minute panel Q&amp;A, bringing all five design artifacts and the notebook.`,
            `<b>Milestone 5: Low-Fidelity Prototype (4%)</b><br>
    Plan it in the Nov 11 lab, build it in the Nov 18 lab, and test it against your success criteria. Graded once alongside the presentations.`,
            `<b>Milestone 6: Final Presentations (6%)</b><br>
    5 minutes plus 2 minutes of Q&amp;A with a live demo, in the slot your GA assigns (Nov 25 or Dec 2).`,
            `<b>Milestone 7: Final Report (8%)</b><br>
    About 8&ndash;12 pages in ten sections, with at least two MATLAB analyses that changed a design decision. Due Dec 2 at 11:59 PM.`,
            `<b>Milestone 8: Peer Evaluation (3%)</b><br>
    Individually rate every member, including yourself, and submit privately on D2L.`
        ]
    },
    m2_project_outline: {
        id: "m2_project_outline",
        title: "M2: Project Outline + User Research",
        header: "Milestone 2: Project Outline + User Research (4%)",
        description: `
      <ul>
        <li>Team assignment: 2&ndash;3 pages telling one connected story. Say who has the problem, talk to real people about it, then break the need into small pieces you can test.</li>
        <li>Graded in 5 parts, 4 points each. One upload to D2L by end of day Friday, Oct 2.</li>
        <li><b>Common mistakes:</b> fewer than 5 people interviewed. Made-up or AI-written participants earn zero and an academic integrity case. One idea presented as already decided earns zero for that part. A work division that names only 2 or 3 people.</li>
      </ul>`,
        dueDate: "2026-10-02",
        steps: [
            `<b>Step 1: Problem Statement</b><br>
    Name every group affected, not just the obvious one, and list the real limits: cost, time, materials, safety and rules. Start from "[Who] often [problem], leading to [impact], especially [when/where]", then rewrite it in your own words.`,
            `<b>Step 2: Plan the User Research</b><br>
    Write 3&ndash;5 research questions and line up <b>at least 5 real people</b> to talk to.`,
            `<b>Step 3: Do the Research</b><br>
    Tell everyone it's for CEN100 and that taking part is voluntary. Take notes during each conversation, and log each person by role (never by name), method and one key quote. Never use AI to make up participants or answers.`,
            `<b>Step 4: Patterns and Needs Tree</b><br>
    Write up the patterns and surprises, then revise your problem statement. Break the big need into small, testable needs. No need should name a solution.`,
            `<b>Step 5: Early Direction and Work Division</b><br>
    Describe 2&ndash;4 truly different ideas, each with what's promising and what's uncertain, and don't present any idea as chosen. Give every member named tasks that match the Task Outline, with at least one internal deadline before Nov 4.`,
            `<b>Step 6: Check and Upload</b><br>
    Tick the CEWIL box (Yes or No), add a header with your team number and section, and upload once to D2L.`
        ]
    },
    m3_failure_analysis: {
        id: "m3_failure_analysis",
        title: "M3: Failure Analysis Labs",
        header: "Milestone 3: Failure Analysis Labs (6%)",
        description: `
      <ul>
        <li><b>Part 1 (2%), due Oct 21:</b> in a sub-team of 4&ndash;5, review a documented engineering failure.</li>
        <li><b>Part 2 (4%), due Oct 28:</b> the full team predicts the risks in its own project with an FMEA and presents a short design insight. The Oct 13 course-team update moved Part 2 to Oct 28.</li>
        <li>Both are submitted on D2L, each as its own submission. Check D2L for your section's exact time.</li>
        <li><b>Common mistakes:</b> failure modes that could fit any project, detectability scored backwards, overwriting the template's formulas or leaving its example row in, and one or two people doing all the talking.</li>
      </ul>`,
        dueDate: "2026-10-21 and 2026-10-28",
        steps: [
            `<b>Step 1: Part 1, Pick a Failure and Research It</b><br>
    Choose a real, documented engineering failure from any field. Find 2&ndash;3 credible technical or peer-reviewed sources.`,
            `<b>Step 2: Part 1, Write the Review</b><br>
    Write 1&ndash;2 pages answering only four questions: what happened, why it failed, lessons learned, and how to prevent it. Include the fishbone (Ishikawa) diagram the handout requires; the lecture calls it optional, so confirm with your GA before leaving it out. Cite your sources, add your team number and section in the header, then submit on D2L.`,
            `<b>Step 3: Part 2, List the Failure Modes</b><br>
    As a full team, list <b>at least 10 failure modes</b> specific to your project, covering the technical, human, environmental (real-world conditions), ethical and business categories. Replace the template's example battery-overheating row with your own risk.`,
            `<b>Step 4: Part 2, Score the Risks</b><br>
    Score likelihood, severity and detectability from 1 to 5 (detectability: 1 = easy to spot, 5 = hard). Enter values in the yellow cells only, and leave the Risk Score (L &times; S &times; D) and Ranking Key formulas alone.`,
            `<b>Step 5: Part 2, Plan the Actions</b><br>
    Review the top five risks on the automatically ranked summary. Give each one a specific action labelled Change, Test, Verify or Monitor. A high-severity risk still needs an action even if it ranks lower.`,
            `<b>Step 6: Design Insight and Submit</b><br>
    Write one short paragraph on your top 2&ndash;3 risks, why they rank highest, and what you will change, test, verify or monitor. Present it briefly in the lab, with several people speaking within the time limit and everyone ready for GA questions. Add your team number and section, submit on D2L, and carry the insight into your notebook and the Midterm Design Review.`
        ]
    },
    m4_midterm_review: {
        id: "m4_midterm_review",
        title: "M4: Midterm Design Review",
        header: "Milestone 4: Midterm Design Review (8%)",
        description: `
      <ul>
        <li>A live design review in the Week 9 lab (Nov 4) of how your team framed the problem and chose its concept.</li>
        <li>Suggested format: a 5-minute presentation plus 3 minutes of panel Q&amp;A. Your GA confirms the exact slots.</li>
        <li>Graded in 5 parts, 20 points each. The notebook and individual accountability are one of those parts, so every member must be ready.</li>
        <li><b>Common mistakes:</b> quietly skipping an unfinished piece (say so and give the plan), starting with the solution instead of the problem, and running over time.</li>
      </ul>`,
        dueDate: "2026-11-04",
        steps: [
            `<b>Step 1: Finish the Five Design Artifacts</b><br>
    Needs tree; problem statement and boundary diagram; decision matrix with weights adding to 100%; assumption log with your top 2&ndash;3 guesses; and the FMEA top risks with what you changed.`,
            `<b>Step 2: Build the Five Minutes</b><br>
    Minute 1: the problem and who has it. Minute 2: the boundary diagram. Minute 3: why this concept won. Minute 4: the top risks and what you changed. Minute 5: the prototype plan.`,
            `<b>Step 3: Assign Roles</b><br>
    Assign speakers and a timekeeper. Every member should be able to explain the problem and the concept.`,
            `<b>Step 4: Notebook Check</b><br>
    Every member needs a dated notebook entry they can talk about. Have the notebook open on a device.`,
            `<b>Step 5: Rehearse</b><br>
    Practise out loud as a full team and keep it within time. Dress professionally on the day.`
        ]
    },
    m5_prototype: {
        id: "m5_prototype",
        title: "M5: Low-Fidelity Prototype",
        header: "Milestone 5: Low-Fidelity Prototype (4%)",
        description: `
      <ul>
        <li>A rough physical or digital prototype (CAD, 3D printed, laser cut, cardboard model and so on) that tests your core idea.</li>
        <li>Graded once, for 4%, alongside the Nov 25 / Dec 2 presentations. Planning and building are not separate graded submissions. Build and test evidence also goes in the Final Report.</li>
        <li>Plan in the Nov 11 lab and build in the Nov 18 lab. You need your WHMIS certificate to use the makerspace.</li>
        <li><b>Common mistakes:</b> "it works" as a success criterion, only photographing the finished product, and not testing at all. An honest failed test scores higher than no test.</li>
      </ul>`,
        dueDate: "2026-11-25 and 2026-12-02",
        steps: [
            `<b>Step 1: Write the Plan</b><br>
    Describe the concept in 1&ndash;2 sentences, tied to the panel's feedback. List the materials and rough cost, the build steps, roles and timeline, and success criteria you can check (never "it works").`,
            `<b>Step 2: Build</b><br>
    Build it in the makerspace (WHMIS required). Take photos at every stage, and record any changes from the plan with the reason. Every member adds a notebook entry.`,
            `<b>Step 3: Test</b><br>
    Test against every success criterion and record the result for each: pass, partial or fail.`,
            `<b>Step 4: Get Ready for the Day</b><br>
    Confirm your team's slot with your GA. Check the prototype works right before you present.`
        ]
    },
    m6_presentations: {
        id: "m6_presentations",
        title: "M6: Final Presentations",
        header: "Milestone 6: Final Presentations (6%)",
        description: `
      <ul>
        <li>Pitch the project and demo the prototype live: 5 minutes plus 2 minutes of Q&amp;A.</li>
        <li>Your GA assigns tutorial presentation slots across Nov 25 and Dec 2. Teams selected for the Dec 2 Innovation Showcase Competition give their tutorial presentation on Nov 25.</li>
        <li>To enter the competition, sign up with all team members' names two weeks before Dec 2.</li>
        <li><b>Common mistakes:</b> one or two speakers carrying the whole thing, hiding a failed demo (explain it instead), and missing the competition sign-up.</li>
      </ul>`,
        dueDate: "2026-11-25 and 2026-12-02",
        steps: [
            `<b>Step 1: Confirm Your Slot</b><br>
    Confirm your session with your GA. If you are entering the competition, sign up two weeks before Dec 2.`,
            `<b>Step 2: Build the Five Minutes</b><br>
    Minute 1: the problem and key need. Minutes 2&ndash;3: what you built and why. Minute 4: a live demo against your success criteria. Minute 5: what worked and what you'd change.`,
            `<b>Step 3: Make the Slides</b><br>
    Use diagrams, photos and results rather than walls of text. Upload the slides to D2L and keep a backup copy.`,
            `<b>Step 4: Rehearse</b><br>
    Several members speak, and everyone can explain the project. Talk to the room rather than reading the slides. Practise in front of someone outside the team.`,
            `<b>Step 5: On the Day</b><br>
    Bring the prototype (tested right before), the slides and the backup, and the notebook.`
        ]
    },
    m7_final_report: {
        id: "m7_final_report",
        title: "M7: Final Report",
        header: "Milestone 7: Final Report (8%)",
        description: `
      <ul>
        <li>One connected report of about 8&ndash;12 pages, not counting references and appendices. Revise and connect your earlier milestones.</li>
        <li>At least two MATLAB analyses must inform design decisions (graded inside this 8%, separately from the MATLAB assignments). MATLAB is 20 points and writing is 20 points.</li>
        <li>One upload to D2L by 11:59 PM on Wednesday, Dec 2, with your working .mlx or .m files and a short README.</li>
        <li><b>Common mistakes:</b> MATLAB plots that don't decide anything, code that doesn't run, "ours is better" with no comparison, and hiding failed tests.</li>
      </ul>`,
        dueDate: "2026-12-02",
        steps: [
            `<b>Step 1: Outline the Ten Sections</b><br>
    1 Executive summary. 2 Problem, stakeholders, needs tree. 3 User research. 4 Existing product comparison. 5 Boundary diagram, decision matrix, why this concept. 6 MATLAB analysis. 7 Failure Analysis &amp; Risk Analysis (clearly labelled). 8 Prototype and test results. 9 Reflection. 10 References. Split the sections among the team.`,
            `<b>Step 2: MATLAB Analyses</b><br>
    Do at least two analyses that each changed a design decision, using only skills taught in CEN100. Put the figures in Section 6 and refer to them from Sections 5 and 8.`,
            `<b>Step 3: Draft</b><br>
    Revise and connect your earlier milestones into one story. Name the tool behind each decision, and report failed tests honestly.`,
            `<b>Step 4: Finish</b><br>
    Place figures inside their sections and use one citation style throughout (confirm IEEE or APA with your GA). Add a header with your team number and section.`,
            `<b>Step 5: Check the Code and Submit</b><br>
    Run every .mlx or .m file to confirm it works, and write a short README. Upload the report and code to D2L once, before 11:59 PM.`
        ]
    },
    m8_peer_evaluation: {
        id: "m8_peer_evaluation",
        title: "M8: Peer Evaluation",
        header: "Milestone 8: Peer Evaluation (3%)",
        description: `
      <ul>
        <li>Individual and private: rate every team member, including yourself, and submit to the teaching team on D2L.</li>
        <li>Everyone is rated on attending meetings on time, contributing to discussions, finishing assigned tasks on time, quality of work, being cooperative, and contributing to the result.</li>
        <li><b>Common mistake:</b> a vague list of your contributions.</li>
      </ul>`,
        dueDate: "2026-12-02",
        steps: [
            `<b>Step 1: Score Everyone</b><br>
    Score every member, including yourself, from 0 to 100 on all six criteria, then work out the averages.`,
            `<b>Step 2: Written Answers</b><br>
    Answer the 3 written questions. List your own contributions, pointing to specific notebook entries.`,
            `<b>Step 3: Sign and Submit</b><br>
    Sign and date the form, and submit it privately on D2L.`
        ]
    },
    exit_survey: {
        id: "exit_survey",
        title: "Exit Survey Questionnaire",
        header: "Exit Survey Questionnaire (2%)",
        description: `
      <ul>
        <li>A short Google Form in Week 13.</li>
      </ul>`,
        dueDate: "2026-12-02",
        steps: [
            `<b>Step 1: Open the Survey</b><br>
    Open the exit survey using the Google Form link posted for Week 13.`,
            `<b>Step 2: Complete and Submit</b><br>
    Answer every question and submit the form.`
        ]
    },
    final: {
        id: "final",
        title: "Final Exam",
        header: "Final Exam (24%)",
        description: `
      <ul>
        <li>2-hour in-person written exam.</li>
        <li>The date, room and coverage are set by the Registrar's exam schedule and announced on D2L. Final exam period: Dec 9&ndash;20, 2026, including weekends (confirmed on TMU's exams page).</li>
      </ul>
    `,
        dueDate: "",
        steps: [
            `<b>Step 1: Track the Exam Date</b><br>
  - Check MyServiceHub and the course D2L shell for the exact date and room. Don't book travel until the official schedule is out.`,
            `<b>Step 2: Exam Preparation</b><br>
  - Review all course material and attend the Academic Matters &amp; Exam Preparation session in Week 14.`,
            `<b>Step 3: Exam Day</b><br>
  - Attend and write the 2-hour in-person exam.`
        ]
    }
};
