'use client';
import React from "react";
import styles from '../../styles/page.module.css';

const services = [
    {
      title: "Strategy",
      description:
        "We shape big-picture strategies that define your brand and direction.",
      items: ["▫ Positioning", "▫ Creative Direction", "▫ Copywriting"],
    },
    {
      title: "Production & Creative",
      description:
        "From idea to execution, we craft visually stunning and impactful content.",
      items: ["⟡ Design", "⟡ Website", "⟡ Content Development", "⟡ Photography", "⟡ Videography"],
    },
    {
      title: "Promotion & Performance",
      description:
        "We promote your brand and measure what matters to optimize growth.",
      items: ["→ Social Media", "→ Advertising", "→ Campaigns"],
    },
];
export default function Services() {
  return (
    <div className={styles.serviceContainer}>
      <h2 className={styles.heading1}>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
            <ul className={styles.list}>
              {service.items.map((item, idx) => (
                <li key={idx} className={styles.listItem}> {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}