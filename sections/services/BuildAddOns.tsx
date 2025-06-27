import React from 'react';

interface AddOn {
  title: string;
  description: string;
  price: string;
}

interface BuildAddOnsProps {}

const BuildAddOns: React.FC<BuildAddOnsProps> = () => {
  const addOns: AddOn[] = [
    {
      title: 'Estimate Message Assistant',
      description:
        'Helps your team craft personalized estimate messages that explain your pricing approach and set clear expectations. Increases conversion rates by addressing common objections before they arise.',
      price: '$500',
    },
    {
      title: 'Review Responder',
      description:
        "Professionally responds to customer reviews in your voice, whether they're glowing praise or constructive feedback. Maintains your reputation while saving hours of time crafting thoughtful responses.",
      price: '$500',
    },
    {
      title: 'Proposal Generator',
      description:
        'Creates professional, persuasive proposals based on your services, pricing structure, and past successful pitches. Customizable for each prospect with consistent messaging and formatting.',
      price: '$500',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="bg-white rounded-lg shadow-card p-8 lg:p-12 hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-navy">
          Need Something Extra?
        </h2>
        <p className="text-lg text-navy-light mb-10 text-center max-w-3xl mx-auto">
          Enhance your CustomGPT with these specialized add-ons designed for specific business
          needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {addOns.map((addon, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-2 border-navy/20 p-6 h-full flex flex-col hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-bold mb-3 text-navy">{addon.title}</h3>
              <p className="text-navy-light mb-6 flex-grow">{addon.description}</p>
              <div className="mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-navy font-bold text-xl">{addon.price}</span>
                  <span className="text-xs text-navy-light bg-gray-50 px-3 py-1 rounded-full">
                    Add-on
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-navy-light font-medium text-base">
            Delivered in under a week—built from your voice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildAddOns;
