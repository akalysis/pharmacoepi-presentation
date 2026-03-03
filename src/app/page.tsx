'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import SlideWrapper from '@/components/SlideWrapper';
import MCQ from '@/components/MCQ';
import PdfExport from '@/components/PdfExport';
import ReferenceNode from '@/components/ReferenceNode';
import Image from 'next/image';

const TOTAL_SLIDES = 45;

export default function Presentation() {
  const [slide, setSlide] = useState(1);

  const nextSlide = useCallback(() => {
    setSlide((s) => Math.min(s + 1, TOTAL_SLIDES));
  }, []);

  const prevSlide = useCallback(() => {
    setSlide((s) => Math.max(s - 1, 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <main id="presentation-root" className="relative w-screen h-screen overflow-hidden text-text-main">
      <AnimatePresence mode="wait">

        {/* ================= MODULE 1: INTRODUCTION ================= */}
        <SlideWrapper key="slide-1" isActive={slide === 1}>
          <h2 className="text-6xl font-bold mb-4">Pharmacoepidemiology</h2>
          <h4 className="text-2xl text-slate-400 font-light mb-12">Unveiling the Real-World Impact of Medicines</h4>
          <div className="glass-card inline-block text-left">
            <small className="text-slate-400 uppercase tracking-widest text-sm block mb-2">Presented by</small>
            <strong className="text-3xl text-primary block mb-1">Dr. Andrew Kingston</strong>
            <span className="text-xl text-gray-300 block">PhD CStat SFHEA</span>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-2" isActive={slide === 2}>
          <h3 className="text-5xl font-bold mb-10">What is Pharmacoepidemiology?</h3>
          <div className="glass-card max-w-4xl mx-auto">
            <p className="text-3xl leading-relaxed">
              The study of the <strong>use</strong> and <strong>effects</strong> of drugs in <strong>large numbers of people</strong>.
            </p>
            <p className="text-highlight text-4xl mt-8 font-bold">
              It is Pharmacology + Epidemiology.
            </p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-3" isActive={slide === 3}>
          <div className="badge mb-6 text-xl px-6 py-2">The Core Problem</div>
          <h3 className="text-5xl font-bold mb-10">The Gap in Logic</h3>
          <div className="flex-row w-full max-w-6xl mx-auto">
            <div className="concept-box flex-1">
              <h4 className="text-3xl font-bold mb-4">Clinical Trials (Pre-Market)</h4>
              <p className="text-2xl">Highly controlled, artificial environments.</p>
            </div>
            <div className="problem-box flex-1">
              <h4 className="text-3xl font-bold mb-4">The Real World</h4>
              <p className="text-2xl">Complex patients, unmonitored usage, messy data.</p>
            </div>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-4" isActive={slide === 4}>
          <h3 className="text-5xl font-bold mb-6">PBL Challenge: The First 5 Years</h3>
          <p className="text-2xl max-w-4xl mx-auto mb-10">A new diabetes drug is approved after a successful 12-month trial. 1 million people start taking it.</p>
          <div className="glass-card max-w-3xl mx-auto text-left">
            <h4 className="text-secondary text-3xl font-bold mb-6">Why must we keep watching?</h4>
            <p className="text-2xl mb-6">Brainstorm: What could go wrong in year 3 that we couldn't see in year 1?</p>
            <ul className="text-2xl list-disc pl-8 space-y-4">
              <li>Long-term organ damage</li>
              <li>Interactions with other new drugs</li>
              <li>Effects in pregnant women (excluded from trials)</li>
            </ul>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-5" isActive={slide === 5}>
          <h3 className="text-5xl font-bold mb-10">Our Overarching Goal</h3>
          <div className="concept-box max-w-4xl mx-auto">
            <h4 className="text-5xl font-bold text-center mb-6">To Protect Public Health</h4>
            <p className="text-3xl text-center leading-relaxed">
              By finding harms that trials missed, and quantifying the true balance of risk versus benefit.
            </p>
          </div>
        </SlideWrapper>

        {/* ================= MODULE 2: TRIALS & VIOXX ================= */}
        <SlideWrapper key="slide-6" isActive={slide === 6}>
          <div className="badge mb-6 text-xl px-6 py-2">Module 2</div>
          <h3 className="text-5xl font-bold mb-10">The "Gold Standard"</h3>
          <div className="max-w-4xl mx-auto text-3xl space-y-8">
            <p>Randomised Controlled Trials (RCTs) are required for drug approval.</p>
            <p>They are powerful for proving <strong>Efficacy</strong> (does it work?).</p>
            <p className="text-highlight font-bold text-4xl">But they are terrible for proving long-term Safety.</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-7" isActive={slide === 7}>
          <h3 className="text-5xl font-bold mb-10">RCT Limitations</h3>
          <div className="flex-row max-w-2xl mx-auto">
            <div className="glass-card stat-box">
              <div className="stat-number">3K</div>
              <div className="stat-label">Patients</div>
              <p className="text-xl mt-6">Trials are "Too Few" to catch rare 1-in-10k events.</p>
            </div>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-8" isActive={slide === 8}>
          <h3 className="text-5xl font-bold mb-10">RCT Limitations</h3>
          <div className="flex-row max-w-4xl mx-auto">
            <div className="glass-card stat-box">
              <div className="stat-number">3K</div>
              <div className="stat-label">Patients</div>
              <p className="text-xl mt-6">Too Few.</p>
            </div>
            <div className="glass-card stat-box">
              <div className="stat-number">6mo</div>
              <div className="stat-label">Duration</div>
              <p className="text-xl mt-6">Too Short to see cumulative 10-year effects.</p>
            </div>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-9" isActive={slide === 9}>
          <h3 className="text-5xl font-bold mb-10">RCT Limitations</h3>
          <div className="flex-row max-w-6xl mx-auto">
            <div className="glass-card stat-box">
              <div className="stat-number !text-5xl">3K</div>
              <div className="stat-label !text-sm">Patients</div>
            </div>
            <div className="glass-card stat-box">
              <div className="stat-number !text-5xl">6mo</div>
              <div className="stat-label !text-sm">Duration</div>
            </div>
            <div className="glass-card stat-box">
              <div className="stat-number !text-5xl">0%</div>
              <div className="stat-label !text-sm">Complex</div>
              <p className="text-xl mt-6">Too Simple. Excludes frail & pregnant patients.</p>
            </div>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-10" isActive={slide === 10}>
          <div className="badge !bg-secondary mb-6 text-xl px-6 py-2">The Case</div>
          <h3 className="text-5xl font-bold mb-10">The Vioxx Crisis (1999)</h3>
          <p className="text-3xl max-w-4xl mx-auto leading-relaxed mb-10">
            Rofecoxib (Vioxx) was a "wonder drug" for arthritis.<br />It reduced pain without causing stomach ulcers like ibuprofen.
          </p>
        </SlideWrapper>

        <SlideWrapper key="slide-11" isActive={slide === 11}>
          <h3 className="text-5xl font-bold mb-2">The Vioxx Disaster Timeline</h3>
          <div className="timeline w-full">
            <div className="timeline-item timeline-left">
              <div className="timeline-content">
                <div className="timeline-date">May 1999</div>
                <p className="text-2xl m-0">Approved. Given to <strong>80 Million</strong> people.</p>
              </div>
            </div>
            <div className="timeline-item timeline-right mt-12">
              <div className="timeline-content">
                <div className="timeline-date">18 Months Later</div>
                <p className="text-2xl m-0 text-secondary font-bold">Cardiovascular risks exponentially spike.</p>
              </div>
            </div>
            <div className="timeline-item timeline-left mt-12">
              <div className="timeline-content">
                <div className="timeline-date">Sept 2004</div>
                <p className="text-2xl m-0">Withdrawn. Caused <strong>~140,000</strong> excess heart attacks.</p>
              </div>
            </div>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-12" isActive={slide === 12}>
          <MCQ
            question="Which specific RCT limitation primarily allowed Vioxx's cardiovascular risk to go undetected during approval?"
            options={[
              { id: 'A', text: 'A) Trials were too small to see a 1-in-10,000 event.', isCorrect: false, feedback: '<strong>Incorrect.</strong> While trials were small, the real issue was time.' },
              { id: 'B', text: 'B) Trials were too short (ended before the risk spiked).', isCorrect: true, feedback: '<strong>Correct!</strong> <br/>The trials lasted ~6 months. The risk spiked after 18 months of use.' },
              { id: 'C', text: 'C) They completely excluded older adults.', isCorrect: false, feedback: '<strong>Incorrect.</strong> They did test older adults, but not for long enough periods.' }
            ]}
          />
        </SlideWrapper>

        {/* ================= MODULE 3: CORE TOOLS ================= */}
        <SlideWrapper key="slide-13" isActive={slide === 13}>
          <div className="badge mb-6 text-xl px-6 py-2">Module 3</div>
          <h3 className="text-5xl font-bold mb-10">The Solution: Observational Data</h3>
          <p className="text-3xl max-w-4xl mx-auto mb-10">Once a drug hits the market, we are running a massive, uncontrolled experiment on millions of people.</p>
          <p className="text-highlight text-4xl font-bold">We need tools to observe and analyze this chaos.</p>
        </SlideWrapper>

        <SlideWrapper key="slide-14" isActive={slide === 14}>
          <h3 className="text-5xl font-bold mb-10">Pharmacovigilance (The Alarm)</h3>
          <div className="glass-card max-w-4xl mx-auto">
            <div className="text-6xl text-center mb-6">🚨</div>
            <p className="text-3xl mb-6">The science of detecting, assessing, and preventing adverse effects.</p>
            <p className="text-2xl">It relies heavily on <strong>Spontaneous Reporting</strong> from doctors and patients.</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-15" isActive={slide === 15}>
          <h3 className="text-5xl font-bold mb-10">The Yellow Card Scheme (UK)</h3>
          <p className="text-3xl mb-10">Run by the MHRA. Anyone can report a suspected side effect.</p>
          <ul className="text-2xl max-w-4xl mx-auto text-left list-none space-y-6">
            <li>✅ <strong>Pro:</strong> Catches completely unexpected events quickly.</li>
            <li>❌ <strong>Con:</strong> Massive under-reporting (only ~10% of adverse events get reported).</li>
            <li>❌ <strong>Con:</strong> Cannot prove causality or calculate true risk rates.</li>
          </ul>
        </SlideWrapper>

        <SlideWrapper key="slide-16" isActive={slide === 16}>
          <h3 className="text-5xl font-bold mb-10">Pharmacoepidemiology (The Investigation)</h3>
          <div className="concept-box max-w-4xl mx-auto">
            <div className="text-6xl text-center mb-6">🕵️‍♂️</div>
            <p className="text-3xl mb-6">When the Yellow Card sounds the alarm, we use Big Data to investigate.</p>
            <p className="text-2xl">We calculate the exact statistical risk and prove causality using formal study designs.</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-17" isActive={slide === 17}>
          <h3 className="text-5xl font-bold mb-10">Tool 1: The Cohort Study</h3>
          <p className="text-3xl mb-10">The most robust observational design.</p>
          <div className="flex-row w-full max-w-5xl mx-auto">
            <div className="glass-card flex-1 border-t-8 !border-t-primary">
              <h4 className="text-3xl font-bold mb-4">Exposed Group</h4>
              <p className="text-2xl">100,000 on Drug A</p>
            </div>
            <div className="glass-card flex-1 border-t-8 !border-t-secondary">
              <h4 className="text-3xl font-bold mb-4">Unexposed Group</h4>
              <p className="text-2xl">100,000 on Drug B</p>
            </div>
          </div>
          <p className="text-3xl mt-12 text-center text-highlight font-bold">Fast forward 5 years in medical records: Who got sicker?</p>
        </SlideWrapper>

        <SlideWrapper key="slide-18" isActive={slide === 18}>
          <h3 className="text-5xl font-bold mb-10">Cohort Studies: The Verdict</h3>
          <div className="flex-row max-w-6xl mx-auto text-left">
            <div className="glass-card flex-1 bg-green-500/10 !border-green-500/30">
              <h4 className="text-3xl text-green-400 font-bold mb-6">Strengths</h4>
              <ul className="text-2xl list-disc pl-8 space-y-4">
                <li>Calculates true incidence rates.</li>
                <li>Establishes timeline (drug came before disease).</li>
              </ul>
            </div>
            <div className="glass-card flex-1 bg-red-500/10 !border-red-500/30">
              <h4 className="text-3xl text-red-400 font-bold mb-6">Weaknesses</h4>
              <ul className="text-2xl list-disc pl-8 space-y-4">
                <li>Requires massive databases.</li>
                <li>Terrible for incredibly rare diseases (you might track 100k people and get 0 cases).</li>
              </ul>
            </div>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-19" isActive={slide === 19}>
          <h3 className="text-5xl font-bold mb-10">Tool 2: Case-Control Study</h3>
          <p className="text-3xl mb-10">Used when the side-effect is incredibly rare.</p>
          <div className="problem-box max-w-4xl mx-auto text-left">
            <h4 className="text-3xl font-bold mb-6">Start with the Outcome</h4>
            <p className="text-2xl mb-4">Find 50 people who actually developed the rare liver failure (Cases).</p>
            <p className="text-2xl">Find 200 matched healthy people (Controls).</p>
          </div>
          <p className="text-3xl mt-10 text-highlight font-bold">Look backward in their records: Did the sick people take the drug more often?</p>
        </SlideWrapper>

        <SlideWrapper key="slide-20" isActive={slide === 20}>
          <MCQ
            question="A new vaccine is suspected to cause an extremely rare neurological disorder (1 in a million). Which study design is best to investigate this quickly?"
            options={[
              { id: 'A', text: 'A) Large Cohort Study', isCorrect: false, feedback: '<strong>Incorrect.</strong> A cohort would require following tens of millions of people for years to find enough cases.' },
              { id: 'B', text: 'B) Case-Control Study', isCorrect: true, feedback: '<strong>Correct!</strong> <br/>Find the few people who HAVE the disorder, match them to controls, and look backward at their vaccine records.' },
              { id: 'C', text: 'C) Phase III Clinical Trial', isCorrect: false, feedback: '<strong>Incorrect.</strong> Clinical Trials cannot be powered for a 1-in-a-million event.' }
            ]}
          />
        </SlideWrapper>

        {/* ================= MODULE 4: CONFOUNDING ================= */}
        <SlideWrapper key="slide-21" isActive={slide === 21}>
          <div className="badge !bg-secondary mb-6 text-xl px-6 py-2">Module 4</div>
          <h3 className="text-5xl font-bold mb-10">The Menace of Confounding</h3>
          <p className="text-3xl max-w-4xl mx-auto mb-10">In clinical trials, randomization ensures both groups are exactly identical.</p>
          <div className="problem-box max-w-4xl mx-auto">
            <p className="text-3xl mb-6 font-bold">In the real world, doctors are not random number generators.</p>
            <p className="text-2xl">They prescribe specific drugs to specific people for specific reasons.</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-22" isActive={slide === 22}>
          <h3 className="text-5xl font-bold mb-10">What is Confounding?</h3>
          <div className="glass-card max-w-4xl mx-auto text-left">
            <p className="text-3xl mb-8 border-b border-glass-border pb-6">A third variable that distorts the relationship between the Drug and the Outcome.</p>
            <ul className="text-2xl space-y-4">
              <li>People who carry lighters get lung cancer more often.</li>
              <li>Do lighters cause cancer?</li>
              <li className="text-highlight font-bold mt-6 text-3xl">No. The confounder is SMOKING.</li>
            </ul>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-23" isActive={slide === 23}>
          <h3 className="text-5xl font-bold mb-10">Confounding by Indication</h3>
          <p className="text-3xl mb-10 max-w-4xl mx-auto">The disease itself causes the outcome, but we blame the drug.</p>
          <div className="glass-card max-w-4xl mx-auto">
            <p className="text-2xl leading-relaxed mb-8"><strong>Example:</strong> Patients on a new, aggressive asthma inhaler have a 300% higher rate of asthma-related hospitalisations compared to patients on cheap, standard inhalers.</p>
            <p className="text-4xl text-secondary font-bold">Did the new inhaler fail?</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-24" isActive={slide === 24}>
          <h3 className="text-5xl font-bold mb-10">Resolving the Paradox</h3>
          <p className="text-3xl mb-10">No, the drug didn't fail.</p>
          <div className="solution-box max-w-5xl mx-auto">
            <p className="text-3xl font-bold mb-8">Doctors only prescribe the aggressive, expensive inhaler to patients who have the <strong>most severe</strong> asthma.</p>
            <p className="text-2xl italic">The severity of the disease caused the hospital visit, not the drug. This ruins thousands of poorly designed studies.</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-25" isActive={slide === 25}>
          <h3 className="text-5xl font-bold mb-10">Channeling Bias (Severity)</h3>
          <div className="flex-row max-w-6xl mx-auto">
            <div className="glass-card flex-1 text-left">
              <h4 className="text-3xl font-bold text-primary mb-6">New Drugs</h4>
              <p className="text-2xl">Often channeled to the sickest patients when standard therapies fail.</p>
            </div>
            <div className="glass-card flex-1 text-left">
              <h4 className="text-3xl font-bold text-accent mb-6">Old Drugs</h4>
              <p className="text-2xl">Kept for stable, healthy patients who have done well on them for years.</p>
            </div>
          </div>
          <p className="text-highlight text-3xl font-bold mt-12">Result: New drugs initially appear artificially dangerous.</p>
        </SlideWrapper>

        <SlideWrapper key="slide-26" isActive={slide === 26}>
          <h3 className="text-5xl font-bold mb-10">The Healthy User Effect</h3>
          <p className="text-3xl mb-10 max-w-5xl mx-auto">The opposite problem. Some drugs look like miracles because <strong>healthy people</strong> take them.</p>
          <div className="glass-card max-w-5xl mx-auto text-left">
            <p className="text-2xl mb-8">E.g., Statins (cholesterol drugs) sometimes appear to reduce the risk of car accidents.</p>
            <p className="text-2xl text-accent font-bold">Why? Because people who strictly take preventative medicine are generally more cautious in all aspects of life (including driving).</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-27" isActive={slide === 27}>
          <h3 className="text-5xl font-bold mb-10">Depletion of Susceptibles</h3>
          <p className="text-3xl mb-10 max-w-5xl mx-auto">If you take a drug for 5 years and don't have a heart attack, you are probably biologically tolerant to it.</p>
          <div className="problem-box max-w-4xl mx-auto text-left">
            <p className="text-2xl leading-relaxed">If we compare "New Users" of Drug A to "5-Year Users" of Drug B, Drug A will look incredibly risky, simply because the vulnerable users of Drug B already quit or died years ago.</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-28" isActive={slide === 28}>
          <MCQ
            question='An observational study claims: "Patients prescribed strong opioids have a higher mortality rate than patients prescribed ibuprofen, proving opioids are lethal." What is the most likely bias here?'
            options={[
              { id: 'A', text: 'A) Healthy User Effect', isCorrect: false, feedback: '<strong>Incorrect.</strong> Healthy user effect makes drugs look safer, not more lethal.' },
              { id: 'B', text: 'B) Confounding by Indication', isCorrect: true, feedback: '<strong>Correct! Confounding by Indication/Severity.</strong><br/>Terminal cancer patients get strong opioids. Someone with a sprained ankle gets ibuprofen. The underlying condition dictates mortality.' },
              { id: 'C', text: 'C) Recall Bias', isCorrect: false, feedback: '<strong>Incorrect.</strong> Memory plays no part here if the data is from prescriptions.' }
            ]}
          />
        </SlideWrapper>

        {/* ================= MODULE 5: CONTROLLING CONFOUNDING ================= */}
        <SlideWrapper key="slide-29" isActive={slide === 29}>
          <div className="badge mb-6 text-xl px-6 py-2">Module 5</div>
          <h3 className="text-5xl font-bold mb-10">Defeating Confounding</h3>
          <p className="text-4xl max-w-4xl mx-auto mb-10">How do we force messy observational data to mimic a clean Randomised Controlled Trial?</p>
          <p className="text-highlight text-6xl font-bold mt-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">We use advanced statistics.</p>
        </SlideWrapper>

        <SlideWrapper key="slide-30" isActive={slide === 30}>
          <h3 className="text-5xl font-bold mb-10">Method 1: Multivariable Regression</h3>
          <div className="glass-card max-w-4xl mx-auto text-left">
            <p className="text-3xl font-bold mb-6 text-primary">A mathematical model that "holds variables constant".</p>
            <p className="text-2xl mb-8">It calculates the effect of the Drug <em>assuming everyone had the same age, weight, and smoking status</em>.</p>
            <ul className="text-2xl list-disc pl-8 space-y-2">
              <li>✅ Good for simple confounders.</li>
              <li>❌ Fails when dealing with hundreds of complex health conditions.</li>
            </ul>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-31" isActive={slide === 31}>
          <h3 className="text-5xl font-bold mb-10">Method 2: Propensity Score Matching</h3>
          <p className="text-3xl mb-10 max-w-4xl mx-auto">The gold standard for observational studies.</p>
          <div className="concept-box max-w-4xl mx-auto">
            <p className="text-3xl leading-relaxed text-center">
              Calculate a single score for every patient:<br /><br />
              <strong>"Based on their 100 health metrics, what was the PROBABILITY they would be given Drug A?"</strong>
            </p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-32" isActive={slide === 32}>
          <h3 className="text-5xl font-bold mb-10">Matching "Twins"</h3>
          <p className="text-3xl mb-10">Once everyone has a Propensity Score (0.0 to 1.0)...</p>
          <div className="glass-card flex-row align-center max-w-6xl mx-auto mb-10">
            <div className="flex-1 text-center">
              <h4 className="text-3xl text-secondary font-bold mb-4">Patient on Drug A</h4>
              <p className="text-xl mb-4 text-gray-300">82 years old, diabetic, smoker</p>
              <strong className="text-4xl text-white">Score: 0.85</strong>
            </div>
            <div className="text-6xl px-8">🤝</div>
            <div className="flex-1 text-center">
              <h4 className="text-3xl text-primary font-bold mb-4">Patient on Drug B</h4>
              <p className="text-xl mb-4 text-gray-300">81 years old, diabetic, former smoker</p>
              <strong className="text-4xl text-white">Score: 0.85</strong>
            </div>
          </div>
          <p className="text-2xl text-highlight font-bold max-w-4xl mx-auto">By matching exact scores, we synthetically create the "Randomisation" of an RCT!</p>
        </SlideWrapper>

        <SlideWrapper key="slide-33" isActive={slide === 33}>
          <h3 className="text-5xl font-bold mb-10">Method 3: Instrumental Variables</h3>
          <div className="glass-card max-w-4xl mx-auto text-left">
            <h4 className="text-4xl text-primary font-bold mb-6">Advanced Quasi-Randomisation</h4>
            <p className="text-3xl mb-8 leading-relaxed">Finding a "naturally random" variable that dictates drug assignment but has nothing to do with patient health.</p>
            <p className="text-2xl text-gray-400 italic">Example: Geographic distance to a specific type of specialist clinic.</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-34" isActive={slide === 34}>
          <MCQ
            question="You have data on 500,000 patients with 150 different health variables. You want to compare Drug X to Drug Y by creating groups that are as identical as possible. The best method is:"
            options={[
              { id: 'A', text: 'A) Basic Multivariable Regression', isCorrect: false, feedback: '<strong>Incorrect.</strong> Trying to regress 150 variables directly will create a highly unstable mathematical model.' },
              { id: 'B', text: 'B) Propensity Score Matching', isCorrect: true, feedback: '<strong>Correct!</strong><br/>By condensing all 150 variables into a single Propensity Score, you can easily match patients into identical groups.' },
              { id: 'C', text: 'C) Randomisation', isCorrect: false, feedback: '<strong>Incorrect.</strong> Randomization only exists in trials, not observational databases.' }
            ]}
          />
        </SlideWrapper>

        {/* ================= MODULE 6: UK DATA ADVANTAGE ================= */}
        <SlideWrapper key="slide-35" isActive={slide === 35}>
          <div className="badge mb-6 text-xl px-6 py-2">Module 6</div>
          <h3 className="text-5xl font-bold mb-10">The Data Goldmine</h3>
          <p className="text-3xl max-w-4xl mx-auto mb-10 leading-relaxed">Pharmacoepidemiology requires massive, accurate data. The UK is arguably the best place in the world to do this.</p>
          <h4 className="text-6xl font-black text-accent mt-10">Why? The NHS.</h4>
        </SlideWrapper>

        <SlideWrapper key="slide-36" isActive={slide === 36}>
          <h3 className="text-5xl font-bold mb-10">CPRD (Primary Care)</h3>
          <div className="glass-card max-w-4xl mx-auto text-center border-t-8 !border-t-primary">
            <h4 className="text-4xl font-bold mb-6">Clinical Practice Research Datalink</h4>
            <div className="text-8xl my-8">🏥</div>
            <p className="text-3xl leading-relaxed text-gray-300">Records every time a GP writes a prescription, takes a blood pressure reading, or logs a symptom for over 60 million patient lives.</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-37" isActive={slide === 37}>
          <h3 className="text-5xl font-bold mb-10">HES (Secondary Care)</h3>
          <div className="glass-card max-w-4xl mx-auto text-center border-t-8 !border-t-secondary">
            <h4 className="text-4xl font-bold mb-6">Hospital Episode Statistics</h4>
            <div className="text-8xl my-8">🚑</div>
            <p className="text-3xl leading-relaxed text-gray-300">Captures every A&E visit, hospital admission, and surgery in NHS England.</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-38" isActive={slide === 38}>
          <h3 className="text-5xl font-bold mb-10">The Magic of Linkage</h3>
          <p className="text-3xl mb-12 max-w-4xl mx-auto">Because every patient has an NHS number, we can securely link these databases.</p>
          <div className="flow-chart w-full max-w-6xl mx-auto">
            <div className="flow-node">
              <div className="text-6xl mb-4">👨‍⚕️</div>
              <h4 className="text-2xl font-bold">CPRD</h4>
              <p className="text-sm text-gray-400">GP Prescription (2010)</p>
            </div>
            <div className="flow-arrow">➔</div>
            <div className="flow-node">
              <div className="text-6xl mb-4">🚑</div>
              <h4 className="text-2xl font-bold">HES</h4>
              <p className="text-sm text-gray-400">Stroke Hospitalization (2015)</p>
            </div>
            <div className="flow-arrow">➔</div>
            <div className="flow-node !border-secondary shadow-[0_0_20px_rgba(244,63,94,0.4)]">
              <div className="text-6xl mb-4">📜</div>
              <h4 className="text-2xl font-bold">ONS</h4>
              <p className="text-sm text-gray-400">Death Registry (2016)</p>
            </div>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-39" isActive={slide === 39}>
          <h3 className="text-5xl font-bold mb-10">"Cradle to Grave" Data</h3>
          <div className="glass-card max-w-5xl mx-auto text-center">
            <div className="text-8xl mb-8">🧬</div>
            <p className="text-3xl leading-relaxed">This longitudinal tracking is impossible in fragmented healthcare systems (like the US), making UK data researchers highly sought after globally.</p>
          </div>
        </SlideWrapper>


        {/* ================= MODULE 7: APPLICATIONS ================= */}
        <SlideWrapper key="slide-40" isActive={slide === 40}>
          <div className="badge !bg-secondary mb-6 text-xl px-6 py-2">Modern Application</div>
          <h3 className="text-5xl font-bold mb-10">Case Study: The DOAC Dilemma</h3>
          <p className="text-3xl max-w-5xl mx-auto mb-10 leading-relaxed border-b border-glass-border pb-8">DOACs (Direct Oral Anticoagulants) replaced Warfarin to prevent strokes in atrial fibrillation.</p>
          <ul className="text-2xl list-disc pl-8 max-w-4xl mx-auto text-left space-y-6">
            <li className="text-gray-300">Clinical trials proved they were safer and caused fewer brain bleeds.</li>
            <li><strong className="text-secondary text-3xl">The Unknown:</strong> Trials excluded frail 85-year-olds with declining kidney function.</li>
          </ul>
          <ReferenceNode
            title="The DOAC Dilemma"
            content="DOACs (apixaban, dabigatran, rivaroxaban) possess superior efficacy and safety profiles compared to warfarin in RCTs, but subsequent real-world pharmacoepidemiology studies utilizing CPRD data highlighted unquantified gastrointestinal bleeding risks specific to the extreme elderly."
            citation="Vinogradova, Y. et al. (2018). Risks and benefits of direct oral anticoagulants versus warfarin in a real world setting: cohort study in primary care. BMJ, 362, k2505."
          />
        </SlideWrapper>

        <SlideWrapper key="slide-41" isActive={slide === 41}>
          <h3 className="text-5xl font-bold mb-10">The Real-World Discovery</h3>
          <div className="concept-box max-w-5xl mx-auto text-left mb-10">
            <p className="text-3xl leading-relaxed">
              Using CPRD data of elderly UK patients, epidemiologists found that while brain bleeds were down, <strong>specific DOACs severely increased gastrointestinal bleeding in the elderly.</strong>
            </p>
          </div>
          <p className="text-3xl text-highlight max-w-4xl mx-auto font-bold">Result: Real-world data directly changed global prescribing guidelines for elderly patients.</p>
        </SlideWrapper>

        <SlideWrapper key="slide-42" isActive={slide === 42}>
          <div className="badge !bg-secondary mb-6 text-xl px-6 py-2">Regulatory Action</div>
          <h3 className="text-5xl font-bold mb-10">The Valproate Crisis</h3>
          <p className="text-3xl max-w-5xl mx-auto mb-10">Sodium Valproate: An excellent epilepsy drug, but a catastrophic teratogen.</p>
          <div className="problem-box max-w-4xl mx-auto text-left py-8">
            <ul className="text-3xl space-y-6 list-disc pl-8 font-bold">
              <li>11% chance of severe physical birth defects.</li>
              <li>40% chance of neurodevelopmental disorders if taken during pregnancy.</li>
            </ul>
          </div>
          <ReferenceNode
            title="Valproate Teratogenicity"
            content="Sodium valproate exposure in utero is associated with a greatly increased risk of major congenital malformations and neurodevelopmental disorders. The MHRA executed strict regulatory guidelines following extensive epidemiological analyses confirming these risks."
            citation="Weston, J. et al. (2016). Monotherapy treatment of epilepsy in pregnancy: congenital malformation outcomes in the child. Cochrane Database of Systematic Reviews."
          />
        </SlideWrapper>

        <SlideWrapper key="slide-43" isActive={slide === 43}>
          <h3 className="text-5xl font-bold mb-10">Monitoring the Ban</h3>
          <p className="text-3xl max-w-5xl mx-auto leading-relaxed mb-10">In 2018, the MHRA banned its use in women of childbearing age unless on a strict Pregnancy Prevention Programme.</p>
          <div className="glass-card max-w-5xl mx-auto">
            <h4 className="text-4xl text-accent font-bold mb-8">Did doctors actually listen?</h4>
            <p className="text-2xl mb-8 leading-relaxed">We used CPRD fast-turnaround data to prove that prescribing to pregnant women plummeted by over 80% almost immediately.</p>
            <p className="text-2xl text-gray-400 italic font-bold border-t border-glass-border pt-6">Pharmacoepidemiology acts as the regulatory scorecard.</p>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-44" isActive={slide === 44}>
          <h3 className="text-5xl font-bold mb-12">Course Summary</h3>
          <div className="flex-col max-w-5xl mx-auto gap-8">
            <div className="glass-card !p-6 flex items-center text-left">
              <h4 className="text-4xl text-accent font-bold w-1/3">1. Trials are incomplete</h4>
              <p className="text-2xl w-2/3 ml-8 border-l border-glass-border pl-8 text-gray-300">To know true safety, you must study the drug in the messy real world.</p>
            </div>
            <div className="glass-card !p-6 flex items-center text-left">
              <h4 className="text-4xl text-secondary font-bold w-1/3">2. Beware Confounding</h4>
              <p className="text-2xl w-2/3 ml-8 border-l border-glass-border pl-8 text-gray-300">Is it the drug, or the underlying disease causing the harm?</p>
            </div>
            <div className="glass-card !p-6 flex items-center text-left">
              <h4 className="text-4xl text-primary font-bold w-1/3">3. UK Data is King</h4>
              <p className="text-2xl w-2/3 ml-8 border-l border-glass-border pl-8 text-gray-300">CPRD, HES, and Linkage make us global leaders in drug safety research.</p>
            </div>
          </div>
        </SlideWrapper>

        <SlideWrapper key="slide-45" isActive={slide === 45}>
          <h2 className="text-8xl font-black mb-10 bg-gradient-to-r from-bg-dark to-primary bg-clip-text text-transparent drop-shadow-lg" style={{ WebkitTextFillColor: 'transparent' }}>
            Thank You
          </h2>
          <div className="glass-card inline-block !p-12 mb-16 text-center shadow-[0_20px_50px_rgba(59,130,246,0.3)]">
            <h3 className="text-4xl text-secondary font-bold mb-6">End of Presentation</h3>
            <p className="text-3xl text-gray-300">Questions & Discussion</p>
          </div>
          <div className="w-32 h-2 bg-accent mx-auto rounded-full shadow-[0_0_15px_var(--accent)]"></div>
        </SlideWrapper>

      </AnimatePresence>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-gray-500 font-mono tracking-widest text-sm z-50 pointer-events-none">
        {slide} / {TOTAL_SLIDES}
      </div>

      <PdfExport />
    </main>
  );
}
