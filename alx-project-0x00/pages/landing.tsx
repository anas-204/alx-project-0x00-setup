import React from 'react';
import Button from '../components/Button';

const LandingPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Button Variations</h1>
      
      <div className="space-y-6">
        {/* Size Variations */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Size Variations</h2>
          <div className="flex gap-4 items-center">
            <Button title="Small Button" size="small" />
            <Button title="Medium Button" size="medium" />
            <Button title="Large Button" size="large" />
          </div>
        </section>

        {/* Shape Variations */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Shape Variations</h2>
          <div className="flex gap-4 items-center">
            <Button title="Slightly Rounded" shape="rounded-sm" />
            <Button title="Medium Rounded" shape="rounded-md" />
            <Button title="Fully Rounded" shape="rounded-full" />
          </div>
        </section>

        {/* Custom Style Example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Custom Styles</h2>
          <div className="flex gap-4 items-center">
            <Button 
              title="Red Button" 
              styles="bg-red-500 hover:bg-red-600" 
            />
            <Button 
              title="Green Button" 
              styles="bg-green-500 hover:bg-green-600 shadow-lg" 
              size="large"
              shape="rounded-full"
            />
            <Button 
              title="Disabled Button" 
              styles="bg-gray-400 cursor-not-allowed" 
              onClick={() => alert("This won't trigger")}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;