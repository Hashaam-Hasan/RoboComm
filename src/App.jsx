import { useEffect } from 'react'
import ard from './assets/Arduino.png'
import cpp from './assets/Cpp.png'
import flu from './assets/Flutter.png'
import rea from './assets/React.png'
import ver from './assets/Vercel.png'
import dar from './assets/Dart.png'
import nod from './assets/Nodejs.png'

export default function App() {

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">ROBO<span>COMM</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#methodology">Method</a></li>
          <li><a href="#hardware">Hardware</a></li>
          <li><a href="#video">Demo</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
        <div className="nav-tag">NED University</div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>

        <div className="hero-eyebrow fade-in">Final Year Project · Group 09 · CS Department</div>
        <h1 className="hero-title fade-in" style={{ transitionDelay: '0.1s' }}>
          <span className="robo">ROBO</span><span className="comm">COMM</span>
        </h1>
        <div className="hero-subtitle fade-in" style={{ transitionDelay: '0.2s' }}>
          A Smart Interactive Campus Assistant
        </div>
        <div className="hero-tagline fade-in" style={{ transitionDelay: '0.3s' }}>
          <em>Where to?</em> — Just Ask.
        </div>

        <div className="hero-badges fade-in" style={{ transitionDelay: '0.4s' }}>
          <span className="badge">AI-Powered Navigation</span>
          <span className="badge">Real-Time Guidance</span>
          <span className="badge">Built for NED University</span>
          <span className="badge">ESP32 + Flutter</span>
        </div>

        <div className="hero-cta fade-in" style={{ transitionDelay: '0.5s' }}>
          <a href="#about" className="btn-primary">Explore Project</a>
          <a href="#team" className="btn-outline">Meet the Team</a>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          SCROLL
        </div>
        <div className="hero-ned">NED University of Engineering & Technology</div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-label fade-in">Project Overview</div>
        <h2 className="section-title fade-in">About <span>RoboComm</span></h2>
        <div className="about-grid">
          <div className="about-text fade-in">
            <p>RoboComm is an AI-powered mobile robot that enhances the visitor experience at NED University's CIS department. Instead of relying on static signboards or manual tours, visitors can simply speak to the robot to get directions, explore departments, or learn about the campus.</p>
            <p>We integrated hardware, software, and firmware through embedded systems with conversational AI so that the campus tour experience becomes genuinely interactive and contextually aware.</p>
            <p>The robot operates semi-autonomously along predefined routes, powered by an ESP32 microcontroller and controlled via a Flutter-based smartphone application supporting both manual and autonomous navigation modes.</p>
          </div>
          <div className="challenge-solution fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="cs-card">
              <h3>🔊 The Challenge</h3>
              <p>Traditional campus guidance relies on static signage and manual tours which consistently fail to serve first-time visitors effectively. There is no interactive, real-time way for guests to explore a large campus.</p>
            </div>
            <div className="cs-card">
              <h3>💡 The Solution</h3>
              <p>A semi-autonomous robot that helps visitors interact, navigate, answers questions, and guides them through campus. It responds to natural language queries with context-aware, AI-powered answers in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video">
        <div className="section-label fade-in">Project Demo</div>
        <h2 className="section-title fade-in">Watch <span>RoboComm</span> in Action</h2>
        <p className="section-desc fade-in">See the robot navigate campus, respond to questions, and guide visitors in real time.</p>

        {/* ── TO ADD YOUR YOUTUBE VIDEO ──────────────────────────────────────
            Replace the <div className="video-wrapper"> block below with:

            <div className="video-iframe-container">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                allowFullScreen
              ></iframe>
            </div>
        ──────────────────────────────────────────────────────────────────── */}
        <div className="video-wrapper fade-in" style={{ transitionDelay: '0.2s' }}>
          <div className="video-corner vc-tl"></div>
          <div className="video-corner vc-tr"></div>
          <div className="video-corner vc-bl"></div>
          <div className="video-corner vc-br"></div>
          <div className="video-placeholder-icon">▶</div>
          <div className="video-placeholder-text">Demo Video Coming Soon</div>
        </div>
      </section>





      {/* FEATURES */}
      <section id="features">
        <div className="section-label fade-in">Core Innovation</div>
        <h2 className="section-title fade-in">Key <span>Features</span></h2>
        <p className="section-desc fade-in">Integrating embedded hardware with conversational AI for a seamless campus guidance experience.</p>
        <div className="features-grid fade-in" style={{ transitionDelay: '0.2s' }}>
          {[
            { icon: '🤖', title: 'AI / NLP Integration', text: 'Wake-word activated conversational AI powered by the Grok API. Visitors say "Hi Robo" and ask anything — the robot responds with context-aware natural language answers.' },
            { icon: '🛡️', title: 'Real-Time Obstacle Detection', text: 'Equipped with HC-SR04 ultrasonic sensors and IR sensors to detect obstacles in real time, ensuring safe navigation through crowded campus corridors.' },
            { icon: '🧭', title: 'Semi-Autonomous Navigation', text: 'Follows predefined routes autonomously with sensor-based path planning, while also supporting full manual override via the Flutter mobile app joystick.' },
            { icon: '📡', title: 'GPS & IMU Positioning', text: 'NEO-6M GPS module combined with MPU6050 IMU gyroscope provides outdoor positioning, directional awareness, and precise heading control.' },
            { icon: '📱', title: 'Flutter Mobile App', text: 'Full-featured Flutter app with Admin Control panel (joystick), Command Center dashboard, and RoboAI chat interface for real-time Bluetooth control and monitoring.' },
            { icon: '📶', title: 'Bluetooth Communication', text: 'Wireless Bluetooth Serial bridge between the ESP32 microcontroller and smartphone app, enabling low-latency command parsing and robot control.' },
          ].map((f, i) => (
            <div className="feature-card" key={i}>
              <span className="feature-icon">{f.icon}</span>
              <div className="feature-title">{f.title}</div>
              <p className="feature-text">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture">
        <div className="section-label fade-in">System Design</div>
        <h2 className="section-title fade-in">End-to-End <span>Architecture</span></h2>
        <p className="section-desc fade-in">Five interconnected layers from physical hardware to intelligent response.</p>
        <div className="arch-flow fade-in" style={{ transitionDelay: '0.2s' }}>
          {[
            { num: '1', label: 'Hardware\nESP32 + Sensors' },
            { num: '2', label: 'Wireless\nBluetooth Comm' },
            { num: '3', label: 'Flutter\nMobile App' },
            { num: '4', label: 'NLP APIs\nGrok / ChatGPT' },
            { num: '5', label: 'Context-Aware\nResponse' },
          ].map((s, i) => (
            <div className="arch-step" key={i}>
              <div className="arch-num">{s.num}</div>
              <div className="arch-label">{s.label.split('\n').map((line, j) => (
                <span key={j}>{line}{j === 0 && <br />}</span>
              ))}</div>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology">
        <div className="section-label fade-in">Development Process</div>
        <h2 className="section-title fade-in">Project <span>Methodology</span></h2>
        <p className="section-desc fade-in">A systematic, phased approach from concept to campus deployment.</p>
        <div className="method-list fade-in" style={{ transitionDelay: '0.2s' }}>
          {[
            { num: '01', title: 'System Requirements & Design', desc: 'Defined mobility, AI, communication, and sensor requirements. Designed hardware and software architecture layout.' },
            { num: '02', title: 'Component Selection', desc: 'Selected sensors, motors, microcontroller (ESP32), GPS, IMU, and all electronic components for the 4WD chassis.' },
            { num: '03', title: 'Hardware Integration & Robot Assembly', desc: 'Mechanical assembly of 4WD Robot Chassis, complete circuit design, wiring, soldering, and power distribution management.' },
            { num: '04', title: 'Communication Setup', desc: 'Established Bluetooth Serial bridge between ESP32 and Flutter app. Enabled two-way audio communication via microphone and speaker.' },
            { num: '05', title: 'AI & NLP Integration', desc: 'Implemented NLP using Grok API for context-aware responses. Programmed sensor-based obstacle detection and path planning algorithms.' },
            { num: '06', title: 'Mobile App Development', desc: 'Built Flutter app with Admin Panel (joystick), Command Center, and RoboAI interface. Implemented front-end validation and status monitoring.' },
            { num: '07', title: 'Testing, Evaluation & Optimization', desc: 'Range, latency, and load tests across campus locations. Continuous refinement of models and robot behavior based on real-time data.' },
          ].map((m, i) => (
            <div className="method-item" key={i}>
              <div className="method-num">{m.num}</div>
              <div className="method-content">
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HARDWARE */}
      <section id="hardware">
        <div className="section-label fade-in">Electronics & Components</div>
        <h2 className="section-title fade-in">Hardware <span>Stack</span></h2>
        <p className="section-desc fade-in">Carefully selected components for reliability, precision, and performance.</p>
        <div className="hw-grid fade-in" style={{ transitionDelay: '0.2s' }}>
          {[
            { part: 'ESP32', desc: 'Main Microcontroller — Brain of the robot running all firmware logic' },
            { part: 'NEO-6M GPS', desc: 'GPS Positioning module for outdoor location tracking' },
            { part: 'MPU6050 IMU', desc: 'Gyroscope & accelerometer for directional awareness and heading' },
            { part: 'HC-SR04 ×4', desc: 'Ultrasonic sensors for real-time obstacle detection (4 directions)' },
            { part: 'VL53L0X ×2', desc: 'Time-of-Flight sensors for precise short-range distance measurement' },
            { part: 'IR Sensor ×2', desc: 'Infrared sensors for close-range obstacle detection' },
            { part: 'L298N Motor Driver', desc: 'Motor driver for controlling DC motors with direction and speed' },
            { part: 'DC Motors ×4', desc: '142 RPM / 24V motors powering the 4WD chassis platform' },
            { part: 'QMC5883L', desc: 'Compass module for magnetic heading and navigation' },
            { part: 'PN532 RFID ×2', desc: 'RFID Zone Identification for predefined route navigation' },
            { part: 'Vero Board', desc: 'Custom circuit assembly and component interconnection' },
            { part: '4WD Chassis', desc: 'Robust robot body providing the physical platform for all hardware' },
          ].map((h, i) => (
            <div className="hw-card" key={i}>
              <div className="hw-part">{h.part}</div>
              <div className="hw-desc">{h.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack">
        <div className="section-label fade-in">Technologies Used</div>
        <h2 className="section-title fade-in">Tools & <span>Tech Stack</span></h2>
        <div className="stack-grid fade-in" style={{ transitionDelay: '0.2s' }}>
          {[
            { icon: ard, name: 'Arduino', desc: 'Microcontroller IDE' },
            { icon: cpp, name: 'C++', desc: 'Firmware Logic' },
            { icon: flu, name: 'Flutter / Dart', desc: 'Mobile App' },
            { icon: dar, name: 'Dart', desc: 'App dev language' },
            { icon: nod, name: 'Node.js', desc: 'Web runtime' },
            { icon: rea, name: 'React.js', desc: 'Website Development' },
            { icon: ver, name: 'Vercel', desc: 'Website Deployment' },
          ].map((s, i) => (
            <div className="stack-item" key={i}>

              {/* 🔥 MAIN FIX: IMAGE INSTEAD OF EMOJI */}
              <img 
                src={s.icon} 
                alt={s.name} 
                className="stack-icon-img"
              />

              <div className="stack-name">{s.name}</div>
              <div className="stack-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>



      {/* TEAM */}
      <section id="team">
        <div className="section-label fade-in">The People Behind It</div>
        <h2 className="section-title fade-in">Our <span>Team</span></h2>

        <div className="supervisor-bar fade-in">
          <div>
            <div className="supervisor-label">Supervised By</div>
            <div className="supervisor-name">Dr. Urooj Ainuddin</div>
          </div>
        </div>

        <div className="team-grid">
          {[
            {
              roll: 'CS-22100', name: 'Shayan Hussain', role: 'Complete Firmware Implementation & System Integration', tag: 'Firmware & Software',
              task: 'Developed ESP32 firmware in C++. Established Bluetooth Serial bridge. Implemented command parsing logic. System Integration and Training.',
              linkedin: 'https://linkedin.com/in/sshayanhussain', phone: 'tel:+923242123466', phoneLabel: '+92 324 2123466'
            },
            {
              roll: 'CS-22098', name: 'Hashaam Hasan', role: 'Software & Hardware Implementation, QA Testing & AI Integration', tag: 'Hardware & Software',
              task: 'Integration of AI in the system/software. Conducted range/latency/load and unit system testing. Hardware troubleshooting and development assistance. Development and deployment of Software and Website.',
              linkedin: 'https://linkedin.com/in/hashaamhasan-', phone: 'tel:+923166365117', phoneLabel: '+92 316 6365117'
            },
            {
              roll: 'CS-22093', name: 'Ali Hyder', role: 'Hardware & Electronics Lead Engineer', tag: 'Hardware',
              task: 'Mechanical assembly of 4WD chassis. Circuit design, wiring & soldering. Power distribution. Sensor interfacing (Ultrasonic, ToF, MPU6050). Hardware design lead.',
              linkedin: 'https://linkedin.com/in/alihyder-', phone: 'tel:+923328098273', phoneLabel: '+92 332 8098273'
            },
            {
              roll: 'CS-22088', name: 'Abdul Moiz', role: 'App Development & UI/UX Design', tag: 'Application',
              task: 'Designed full UI/UX. Developed Admin Panel with joystick controls. Created Visitor Mode dashboard. Implemented front-end validation.',
              linkedin: 'https://linkedin.com/in/amabdulmoiz', phone: 'tel:+923121101233', phoneLabel: '+92 312 1101233'
            },

          ].map((m, i) => (
            <div className="team-card fade-in" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="team-card-role-tag">{m.tag}</div>
              <div className="team-roll">{m.roll}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-task">{m.task}</div>
              <div className="team-links">
                <a href={m.linkedin} target="_blank" rel="noreferrer" className="team-link">LinkedIn</a>
                <a href={m.phone} className="team-link">{m.phoneLabel}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SDG */}
      <section id="sdg">
        <div className="section-label fade-in">Social Impact</div>
        <h2 className="section-title fade-in">Sustainable Development <span>Goals</span></h2>
        <div className="sdg-cards">
          <div className="sdg-card fade-in">
            <div className="sdg-num">08</div>
            <div className="sdg-title">Partnerships to Achieve the Goals</div>
          </div>
          <div className="sdg-card fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="sdg-num">09</div>
            <div className="sdg-title">Industry, Innovation and Infrastructure</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">ROBO<span>COMM</span></div>
        <div className="footer-tagline">A Smart Interactive Campus Assistant · Where to? — Just Ask.</div>
        <div className="footer-ned">
          <span>NED University of Engineering and Technology</span> · Department of Computer Science · FYP Group 09 · 2025–2026
        </div>
      </footer>
    </>
  )
}
