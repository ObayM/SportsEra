import React from 'react';

const quizResults = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - (88px + 72px))' }} className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
         Your Quiz Results
        </h1>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab autem incidunt repellendus dignissimos earum impedit labore non. Iste beatae, explicabo magni deserunt odit iure? Corporis deserunt sed nisi minus? Quaerat!
        </p>
      </div>
    </div>
  );
};

export default quizResults;
