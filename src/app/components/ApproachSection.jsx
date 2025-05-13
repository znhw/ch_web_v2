'use client';
// import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from '../../styles/page.module.css';
import Image from 'next/image';



const steps = [
  {
    title: 'Discover',
    description:
      'We dive deep into your brand and business to uncover your competitive edge and identify the ideal audience to target.',
  },
  {
    title: 'Strategise',
    description:
      'We transform insights into action, by crafting a tailored strategy that resonates with your audience.',
  },
  {
    title: 'Execute',
    description:
      'We turn strategy into reality with engaging visual design and digital experiences.',
  },
  {
    title: 'Amplify',
    description:
      'We supercharge your message by leveraging the right channels, tools, and tactics to ensure it cuts through the noise, reaches your audience, and sparks action.',
  },
  {
    title: 'Impact',
    description:
      'We analyse performance by tracking the metrics that matter to your marketing campaign.',
  },
];

export default function Approach() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleStep = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <h2 className={styles.heading12}>Our Approach</h2>
        <Image 
          src="/cube.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.stepContainer}>
        {steps.map((step, index) => {
          const isOpen = activeIndex === index; 
          return (
            <div className={styles.step} key={index}>
            <div className={styles.numberCircle}
                onClick={() => toggleStep(index)}

            >{index + 1}.</div>
            <div className={styles.steps}>
              <h3 className={styles.stepTitle}
                onClick={() => toggleStep(index)}
                

              >{step.title}
              <motion.span
                style={{ display: 'inline-block', marginLeft: '0.5rem' }}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.span>
              </h3>
                <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    className={styles.stepDesc}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    {step.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          )
         
      })}
      </div>
    </div>
  );
}
