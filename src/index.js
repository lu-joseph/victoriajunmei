import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

export default function App() {
  return (
    <div>
      <div className="header">
        <div className="title">Welcome to your birthday site Victoria! :)</div>
      </div>
      <div className="content">
        <div className="love-letter">
          <p>Dear Victoria,</p>
          <p>
            In just over a week, we'll have been together for 10 months! We've
            gone through so much together, and you've helped me grow so much.
            I'm getting more confident, and becoming a better communicated,
            thanks to your help. You've given me the highest of highs, but we've
            also gone through some tough times. We've suffered a bit due to our
            long distance. But through everything, I've never doubted that
            you're the one I want by my side. Being with you makes everything
            worth it. I can fully trust in you. I know in my heart that you're
            the best possible match for me. In 10 years time, I predict we'll
            look back on these times with pride, being able to say that we did
            it. We made it despite the distance. I am so unbelievably excited
            for our future.
          </p>
          <p>
            This is your first birthday since we got together, and while I'm not
            able to celebrate it with you in person, I still want it to be
            special for you. I am so insanely lucky for the way I got to spend
            my birthday back in March. It was so easily the best birthday I've
            ever had, and definitely the best week I've had in my life. When I
            was buying my domain for my website and you brought up the domains
            you wanted, I instantly knew I would buy them for you for your
            birthday. But later, I came up with the idea of using this domain to
            surprise you as another gift. Even though I don't like front end,
            going through making my own site has taught me enough to be able to
            make this for you. I hope you like the cake Liberty helped me get
            you! She told me you were already getting a strawberry shortcake, so
            I decided to go with something a little different from that. Your
            other gift should arrive in the mail soon!
          </p>
          <p>
            Back to the sappy stuff. I know we've both been busy for the past
            week, but I hope you know that I never forget about you. I always
            rely on the fact that when everything's said and done, you're still
            my person and I'm still yours. Even if we don't get to talk
            everyday, I feel safe knowing you're out there, and I belong to you.
            I think I've gotten to the point where I feel so secure about our
            future that I'm able to focus on the business in front of me, but I
            realize that I still need to tend to your current needs. I hope you
            don't feel like I neglect you. This first week of the term really is
            an adjustment for me to figure out how this term is gonna go. Now
            that my site is pretty much done, and I've gotten a taste of what
            going to all the badminton practices for the week is like, I'll be
            able to manage my weekly schedule a bit better. I promise I will do
            my best to better accomodate my time for you, like our date nights.
            Let's try to plan at least one every 1 or 2 weeks, depending on our
            schedules.
          </p>
          <p>
            Now, for the final part of this simple site, here's a collection of
            my favourite photos of us together {"<"}3
          </p>
          <p>Love,</p>
          <p>Joseph</p>
        </div>
        <div className="gallery"></div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
