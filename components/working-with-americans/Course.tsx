import { WWA } from "@/lib/working-with-americans";
import "./posters.css";

// Biljana's "Week by week" and "Your week" posters (styles in posters.css).

const weeks = [
  {
    title: "Say it clearly",
    points: [
      ["Small talk", " that opens a call in two easy minutes"],
      ["Requests that lead with the ask,", " and a template you keep"],
      ["Your home rule", " for asking: what to keep, where to adapt"],
    ],
  },
  {
    title: "Find your place in the room",
    points: [
      ["Your opinion in meetings,", " the thing Americans are waiting for"],
      ["Your view before the decision,", " your commitment after it"],
      ["Show work early,", " before it is perfect, to build trust"],
    ],
  },
  {
    title: "Handle the hard conversations",
    points: [
      ["Disagree with a proposal,", " not only a problem"],
      ["Hear the real message", " that comes after the praise"],
      ["Friendly isn’t friendship,", " and asking for advice isn’t pushy"],
    ],
  },
  {
    title: "Be seen and valued",
    points: [
      ["A short update", " with a number and what comes next"],
      ["One real result,", " shared, with feedback asked for"],
      ["A wins log,", " ready whenever someone asks"],
    ],
  },
];

function WeekByWeek() {
  return (
    <section id="course" className="wbw" aria-labelledby="wbw-title">
      <div className="wbw__inner">
        <p className="wbw__kicker">
          <b>05</b> The course <span className="wbw__date">Starts {WWA.course.startText}</span>
        </p>

        <div className="wbw__head">
          <h2 className="wbw__title" id="wbw-title">
            Week by <em>week.</em>
          </h2>
          <p className="wbw__lede">
            This course is not only about knowing the rules.{" "}
            <strong>It is about using them.</strong> Each week, you also look at
            your own home rule and decide what to keep and where to adapt.
          </p>
        </div>

        <div className="wbw__stage">
          <ol className="wbw__stairs">
            {weeks.map((w, i) => (
              <li key={w.title} className="wbw-step">
                <span className="wbw-step__num" aria-hidden="true">{i + 1}</span>
                {i === 3 && <span className="wbw-flag" aria-hidden="true">★ Goal</span>}
                <div className="wbw-step__card">
                  <div className="wbw-step__tab">Week {i + 1}</div>
                  <div className="wbw-step__body">
                    <h3 className="wbw-step__title">{w.title}</h3>
                    <ul>
                      {w.points.map(([key, tail]) => (
                        <li key={key}>
                          <b>{key}</b>
                          {tail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="wbw__home" aria-label="Every week: your home rule">
          <h3>Every week · Your home rule</h3>
          <p>Look at the rule you grew up with. Decide what to keep, and where to adapt.</p>
          <div className="wbw__home-cols" aria-hidden="true">
            <div>Keep<span></span><span></span></div>
            <div>Adapt<span></span><span></span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function YourWeek() {
  return (
    <section className="yw" aria-labelledby="yw-title">
      <div className="yw__inner">
        <div className="yw__head">
          <h2 className="yw__title" id="yw-title">
            Your <em>week.</em>
          </h2>
          <p className="yw__lede">
            The same rhythm every week, so you always know what comes next.{" "}
            <strong>Only the rule changes.</strong>
          </p>
        </div>

        <div className="yw__planner">
          <div className="yw__rings" aria-hidden="true"></div>
          <div className="yw__grid">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
              <div key={d} className="yw__day" aria-hidden="true">{d}</div>
            ))}
            {[1, 2, 3, 4, 5].map((c) => (
              <div
                key={c}
                className={`yw__cell${c === 2 || c === 3 ? " yw__cell--quiet" : ""}`}
                style={{ gridColumn: c }}
                aria-hidden="true"
              />
            ))}

            <article className="yw__event yw__event--mon">
              <span className="yw__mob">Monday</span>
              <h3>Know what is expected, and why</h3>
              <p>
                An email and video from Biljana: one unwritten rule of American
                work culture, the research behind it, and her own story of
                learning it. Bonus videos from international experts.
              </p>
            </article>

            <article className="yw__event yw__event--thu">
              <span className="yw__mob">Thursday</span>
              <span className="yw__live">Live · 1 hour</span>
              <h3>Speak up with confidence</h3>
              <p>
                One hour live online. Share what happened, ask the hard
                questions, and reflect on how it felt.
              </p>
            </article>

            <article className="yw__event yw__event--fri">
              <span className="yw__mob">Friday</span>
              <h3>Get answers before you act</h3>
              <div className="yw__chips">
                <span className="yw__chip">10:00–12:00</span>
                <span className="yw__chip">17:00–19:00 CET</span>
              </div>
              <p>Open hours: a private 15-minute conversation with Biljana about anything from your week.</p>
            </article>

            <article className="yw__daily">
              <div>
                <span className="yw__mob">Every workday</span>
                <h3>Practise a little every day</h3>
                <p>One small task, repeated each day in real life, whether you have a job right now or not.</p>
              </div>
              <span className="yw__tick">Mon</span>
              <span className="yw__tick">Tue</span>
              <span className="yw__tick">Wed</span>
              <span className="yw__tick">Thu</span>
              <span className="yw__tick">Fri</span>
            </article>
          </div>
        </div>

        <div className="yw__not">
          <h3>What this course is not</h3>
          <div className="yw__not-body">
            <p className="yw__strike">No <s>lectures on cultural theory</s>.</p>
            <p className="yw__strike">No <s>charts to memorise</s>.</p>
            <p className="yw__yes">
              Just <em>you</em>, practising one real thing each week, with a
              group of people going through the same.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Course() {
  return (
    <>
      <WeekByWeek />
      <YourWeek />
    </>
  );
}
