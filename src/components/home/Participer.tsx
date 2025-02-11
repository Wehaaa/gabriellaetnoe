import React from 'react';

const defaultContent = {
  title: "Participer",
  description: "Et si vous souhaitez participer à notre voyage de noces, une urne sera présente sur place le jour du mariage."
};

const Participer = ({ content = defaultContent }) => {
  const { title, description } = content;
  
  return (
    <section id="participer" className="py-24 border-t border-b border-gray-200">
      <div className="px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12">{title}</h2>
          <div className="text-lg mb-6 space-y-4">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participer;