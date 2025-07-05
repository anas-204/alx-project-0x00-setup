import React from 'react';
import Button from '@/components/Button';

const Landing = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Button Variations</h1>
      
      <div className="space-y-6">
        {/* Shape Variations */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Shape Variations</h2>
          <div className="flex gap-4 items-center">
            <Button title="Slightly Rounded" styles="" shape="rounded-sm" />
            <Button title="Medium Rounded" styles="" shape="rounded-md" />
            <Button title="Large Rounded" styles="" shape="rounded-lg" />
            <Button title="Fully Rounded" styles="" shape="rounded-full" />
          </div>
        </section>

        {/* Example with rounded-lg */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Large Rounded Example</h2>
          <Button 
            title="Large Rounded Button" 
            styles="bg-purple-500 hover:bg-purple-600"
            size="large"
            shape="rounded-lg"
          />
        </section>
      </div>
    </div>
  );
};

export default Landing;