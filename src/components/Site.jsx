import React from "react";
import { siteText } from "../data/data";

const Site = () => {
  return (
    <section id="site">
      <div className="site_inner">
        <h2 className="site_title">Great Mountains</h2>
        <div className="site_wrap">
          {siteText.map((site, idx) => (
            <article className={`site_item s${idx + 1}`} key={idx}>
              <span className="num">{idx + 1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.site}>site</a>
                <a href={site.view}>view</a>
              </div>
              <div className="info">
                {site.info.map((info, key) => (
                  <span key={key}>{info}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Site;
