import "./Podcast.css"
import { useState } from "react"

export default function Podcast() {

  const podcasts = [
    {
      id: 1,
      title: "Weight Loss शुरुआत",
      time: "10 min",
      date: "Mar 10, 2023",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "Is episode me maine apni weight loss journey ki starting share ki hai. Kaise maine first step liya aur consistency maintain ki. Yeh ek long detailed description hai jo user ko motivate karegi aur unhe inspire karegi apni journey start karne ke liye."
    },
    {
      id: 2,
      title: "Diet Plan Reality",
      time: "8 min",
      date: "Mar 12, 2023",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "Diet plan follow karna easy nahi hota. Isme maine bataya hai kaise maine apna diet manage kiya aur kya mistakes avoid ki. Yeh description thoda lamba hai jisse read more ka use dikhe."
    },
    {
      id: 3,
      title: "Workout Routine",
      time: "12 min",
      date: "Mar 15, 2023",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "Workout routine me consistency sabse important hai. Maine kaise apna schedule banaya aur follow kiya wo sab yahan explain kiya hai."
    },
    {
      id: 4,
      title: "Motivation Tips",
      time: "9 min",
      date: "Mar 18, 2023",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "Motivation lose hona normal hai, lekin wapas kaise aaye ye important hai. Is episode me wahi bataya gaya hai."
    },
    {
      id: 5,
      title: "Cheat Days Truth",
      time: "7 min",
      date: "Mar 20, 2023",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "Cheat days kaise handle kare aur guilt se kaise bache — is episode me pura explain hai."
    },
    {
      id: 6,
      title: "Final Results",
      time: "11 min",
      date: "Mar 25, 2023",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      desc: "Final transformation aur journey ke results — kaise maine apna goal achieve kiya."
    }
  ]

  return (
    <div className="podcast">

      <h1 className="podcast-heading">My Podcasts 🎧</h1>

      {podcasts.map(item => (
        <div key={item.id} className="podcast-card">

          {/* LEFT VIDEO */}
          <iframe
            src={item.video}
            title="video"
            className="video"
            allowFullScreen
          ></iframe>

          {/* RIGHT CONTENT */}
          <div className="podcast-content">

            <h2>{item.title}</h2>

            <div className="meta">
              <span>{item.time}</span>
              <span>{item.date}</span>
            </div>

            <p className="podcast-desc">
              {item.desc}
            </p>

          </div>

        </div>
      ))}

    </div>
  )
}