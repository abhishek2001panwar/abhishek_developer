// Skills.tsx
import React from 'react';
import Tools from '../Tools';

const Skills: React.FC = () => {
  return (
    <>
    <div className="container mx-auto max-w-6xl p-10 mt-20 ">
      <div className="text-4xl font-bold mb-16">My Skills & Services</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <h3 className="text-sm  mb-8 ">BRANDING</h3>
          <ul className="space-y-2">
            <li>Brand Strategy</li>
            <li>Logo Design</li>
            <li>Brand Guidelines</li>
            <li>Visual Identity</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm  mb-8 ">DESIGN</h3>
          <ul className="space-y-2">
            <li>User Experience Design</li>
            <li>Design Systems</li>
            <li>Web Design</li>
            <li>Motion Design</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm  mb-8 ">DEVELOPMENT</h3>
          <ul className="space-y-2">
            <li>Framer Development</li>
            <li>Webflow Development</li>
            <li>React Development</li>
            <li>Python Development</li>
          </ul>
        </div>
      </div>
    </div>
    <Tools />
    </>
  );
};

export default Skills;