'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Blog() {
  useEffect(() => {
    // Initialize fade-in animations
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
  }, []);

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#ffffff' }}>
        <nav aria-label="Main" style={{ backgroundColor: '#ffffff' }}>
          <Link href="/" className="logo" style={{ color: '#000000' }}>CS.</Link>
        </nav>
      </header>

      {/* Blog Content */}
      <section className="container fade-in" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
        <div className="row">
          <div className="col-12 post-card" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <h1 style={{ color: '#000000' }}>Life Lessons for My Sons</h1>
            <p className="subtitle" style={{ color: '#000000' }}>What I Hope Charlie and Everett Will Always Remember</p>
            
            <div className="blog-content" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
              <p className="intro" style={{ color: '#000000' }}>
                The wisdom I want to pass down to my boys isn't just parental advice—it's a roadmap for becoming good men in a complex world. These ten principles have guided me through life's challenges, and I hope they'll serve Charlie and Everett just as well.
              </p>

              <div className="stats" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                <div className="stat" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>40%</h3>
                  <p style={{ color: '#000000' }}>Value Formation</p>
                  <p style={{ color: '#000000' }}>Portion of children's core values shaped by parental guidance</p>
                </div>
                <div className="stat" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>35%</h3>
                  <p style={{ color: '#000000' }}>Resilience Boost</p>
                  <p style={{ color: '#000000' }}>How much more likely kids with clear family values overcome adversity</p>
                </div>
                <div className="stat" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>10</h3>
                  <p style={{ color: '#000000' }}>Principles</p>
                  <p style={{ color: '#000000' }}>Life-tested lessons that have guided me through challenges</p>
                </div>
              </div>

              <p className="note" style={{ color: '#000000' }}>
                According to a 2023 Harvard study, the character lessons we teach our children stick with them far longer than academic ones. These aren't just nice ideas—they're the foundation of who my sons will become.
              </p>

              <h2 style={{ color: '#000000' }}>Be Kind to Others</h2>
              <div className="lesson-content" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Brain Chemistry</h3>
                  <p style={{ color: '#000000' }}>When you choose kindness, your brain releases dopamine and oxytocin—the same chemicals that make you feel good when you eat ice cream or receive a hug.</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Happiness Boost</h3>
                  <p style={{ color: '#000000' }}>Remember how happy you were, Charlie, when you gave half your Halloween candy to that kid who dropped his? Oxford research shows kind acts increase your own happiness by 23%.</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Ripple Effect</h3>
                  <p style={{ color: '#000000' }}>Everett, when you invited the new boy to join your lunch table, his mom told me he went home and helped his sister with homework—this is how 60% of kind acts inspire others to "pay it forward."</p>
                </div>
              </div>

              <p className="lesson-summary" style={{ color: '#000000' }}>
                Boys, when you share your LEGO sets, include the shy kid at recess, you're not just being nice—you're making the world better and yourself happier. These aren't small things—they're the building blocks of the good men I know you'll become.
              </p>

              <h2 style={{ color: '#000000' }}>Make Your Bed Every Day</h2>
              <div className="lesson-content" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>First Achievement</h3>
                  <p style={{ color: '#000000' }}>Admiral McRaven: "If you want to change the world, start by making your bed"</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Momentum Effect</h3>
                  <p style={{ color: '#000000' }}>2.5x more likely to complete additional tasks after this first win</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Productivity Boost</h3>
                  <p style={{ color: '#000000' }}>Navy SEALs report 32% better productivity with morning routines</p>
                </div>
              </div>

              <h2 style={{ color: '#000000' }}>Practice the Ten-Minute Tidy</h2>
              <div className="lesson-content" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Time Saved</h3>
                  <p style={{ color: '#000000' }}>Average American wastes 55 minutes daily looking for misplaced items; 10-minute daily tidy saves 5+ hours weekly</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Stress Reduction</h3>
                  <p style={{ color: '#000000' }}>Reduces household stress by 27% according to home organization studies</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Sustainable Habits</h3>
                  <p style={{ color: '#000000' }}>Creates manageable daily practice instead of overwhelming "deep cleaning" sessions</p>
                </div>
              </div>

              <p className="lesson-summary" style={{ color: '#000000' }}>
                Charlie and Everett, this small daily habit will save you countless hours and arguments as adults. The best part? It's just ten minutes!
              </p>

              <h2 style={{ color: '#000000' }}>Financial Savvy in a Debt-Driven World</h2>
              <p style={{ color: '#000000' }}>
                With 77% of American adults carrying personal debt (averaging $92,727 per household), financial literacy isn't optional—it's essential. Boys, start investing early: $100/month from age 18 could mean $1.5M by retirement.
              </p>
              <p style={{ color: '#000000' }}>
                Remember that $5,000 invested at age 20 becomes $160,000+ by 65 (at 8% return). Learning delayed gratification now predicts 30% higher income in your adulthood.
              </p>

              <h2 style={{ color: '#000000' }}>Standing Your Ground</h2>
              <div className="lesson-content" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>De-escalation First</h3>
                  <p style={{ color: '#000000' }}>93% of physical confrontations can be avoided through proper techniques</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Self-Defense Works</h3>
                  <p style={{ color: '#000000' }}>Reduces victimization risk by 50-60% according to Justice Department data</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Mental Strength</h3>
                  <p style={{ color: '#000000' }}>Psychological resilience comes from knowing you can defend yourself when necessary</p>
                </div>
              </div>

              <p className="lesson-summary" style={{ color: '#000000' }}>
                Remember Theodore Roosevelt's wisdom: "Speak softly and carry a big stick." Don't go looking for trouble, but be prepared if it finds you.
              </p>

              <h2 style={{ color: '#000000' }}>Embracing Diversity of Thought</h2>
              <div className="lesson-content" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Innovation Boost</h3>
                  <p style={{ color: '#000000' }}>72% of innovation comes from cross-disciplinary collaboration</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Cognitive Flexibility</h3>
                  <p style={{ color: '#000000' }}>Exposure to different viewpoints increases mental flexibility by 45%</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Team Performance</h3>
                  <p style={{ color: '#000000' }}>Diverse teams outperform homogeneous ones by 35% (McKinsey)</p>
                </div>
              </div>

              <p className="lesson-summary" style={{ color: '#000000' }}>
                Sons, the most interesting people learn from everyone they meet. Different perspectives don't threaten your views—they enhance them. This world takes all kinds to make it go round.
              </p>

              <h2 style={{ color: '#000000' }}>Betting on Yourself</h2>
              <div className="lesson-content" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Build Confidence</h3>
                  <p style={{ color: '#000000' }}>Self-confidence correlates with 40% higher career advancement rates. Trust your abilities even when others doubt.</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Embrace Failure</h3>
                  <p style={{ color: '#000000' }}>76% of successful entrepreneurs failed multiple times before breakthrough. Each setback teaches valuable lessons.</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Take Smart Risks</h3>
                  <p style={{ color: '#000000' }}>Risk-taking within reasonable bounds builds resilience and problem-solving. Learn new skills, start projects, pursue passions.</p>
                </div>
              </div>

              <p className="lesson-summary" style={{ color: '#000000' }}>
                Charlie and Everett, no one will believe in you more than you do in yourself. Make that belief your superpower.
              </p>

              <h2 style={{ color: '#000000' }}>Honesty and Integrity First</h2>
              <div className="lesson-content" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Foundation of Trust</h3>
                  <p style={{ color: '#000000' }}>94% cite honesty as the top trait they seek in partners and friends</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Mental Wellbeing</h3>
                  <p style={{ color: '#000000' }}>Studies show honest people experience 26% less stress and anxiety</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Professional Edge</h3>
                  <p style={{ color: '#000000' }}>Integrity ranks #1 in leadership qualities according to Forbes surveys</p>
                </div>
              </div>

              <p className="lesson-summary" style={{ color: '#000000' }}>
                As Warren Buffett wisely noted, "It takes 20 years to build a reputation and 5 minutes to ruin it." Boys, your word must be your bond.
              </p>

              <h2 style={{ color: '#000000' }}>Cultivating a Sense of Humor</h2>
              <p style={{ color: '#000000' }}>
                The Benefits of Laughter: Laughter isn't just fun—it's medicine. It releases endorphins and reduces stress hormones by up to 70%. People who laugh 15+ times daily live an average of 8 years longer.
              </p>
              <p style={{ color: '#000000' }}>
                Humor and Connection: Being able to laugh, especially at yourself, shows confidence and builds connection. It's why humor ranks in the top 3 most attractive traits across all cultures.
              </p>

              <h2 style={{ color: '#000000' }}>Looking Out for Your Mom</h2>
              <div className="lesson-content" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Model of Respect</h3>
                  <p style={{ color: '#000000' }}>How you treat your mother demonstrates your respect for women in general</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Recognizing Sacrifice</h3>
                  <p style={{ color: '#000000' }}>Mothers typically perform 2.5x more unpaid labor in households</p>
                </div>
                <div className="lesson-point" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                  <h3 style={{ color: '#000000' }}>Family Happiness</h3>
                  <p style={{ color: '#000000' }}>Families with equal respect show 43% greater overall happiness</p>
                </div>
              </div>

              <p className="lesson-summary" style={{ color: '#000000' }}>
                Boys, the way you treat your mom doesn't just affect her—it shapes you. Never forget the woman who would move mountains to protect you deserves your protection too.
              </p>

              <div className="button-group">
                <a href="https://gamma.app/docs/Life-Lessons-for-My-Sons-What-I-Hope-Charlie-and-Everett-Will-Alw-rb0ozevkkoepgil?mode=doc" className="btn" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>Read Full Article</a>
                <Link href="/" className="btn" style={{ color: '#ffffff' }}>Back to Main</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="alt" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <p style={{ color: '#000000' }}>© 2025 Camden Snowden. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 